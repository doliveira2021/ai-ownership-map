import { DOMAIN_WEIGHTS, QUESTION_CONFIG_BY_ID, type AsraDomainId } from "./asra-config";
import { ASRA_FRAMEWORK_BASIS, type FrameworkBasisEntry } from "./asra-framework-basis";
import { ASRA_FRAMEWORK_TRACE } from "./asra-framework-data";
import {
  calculateQuestionPriorities,
  type AsraAnswers,
  type AssessmentContext,
} from "./asra-scoring";

/**
 * Estimated Framework Alignment is a directional read-out derived from ASRA's existing
 * per-question maturity and framework traceability data. It does not change scoring and
 * it is not a certification, audit result, or compliance statement.
 */

/** Confidence weighting used only for this estimate — never for scoring. */
const CONFIDENCE_WEIGHT: Record<"Direct" | "Thematic" | "Candidate", number> = {
  Direct: 1,
  Thematic: 0.6,
  Candidate: 0.3,
};

export type AlignmentCell = {
  domain: AsraDomainId;
  /** 0-100, or null when no applicable answered question maps here. */
  alignment: number | null;
  questions: number;
};

export type FrameworkAlignmentRow = {
  framework: FrameworkBasisEntry;
  /** Structural-only frameworks are not scored. */
  scorable: boolean;
  /** 0-100, or null when nothing mapped has been answered. */
  overall: number | null;
  questions: number;
  cells: AlignmentCell[];
};

export const ALIGNMENT_DOMAIN_IDS = Object.keys(DOMAIN_WEIGHTS) as AsraDomainId[];

export function alignmentBand(value: number): "low" | "partial" | "moderate" | "strong" {
  if (value < 30) return "low";
  if (value < 55) return "partial";
  if (value < 80) return "moderate";
  return "strong";
}

/**
 * Reuses calculateQuestionPriorities so applicability, answers and normalized maturity
 * stay identical to the rest of the results experience.
 */
export function calculateFrameworkAlignment(
  answers: AsraAnswers,
  context: AssessmentContext,
): FrameworkAlignmentRow[] {
  const scored = calculateQuestionPriorities(answers, context);

  return ASRA_FRAMEWORK_BASIS.map((framework) => {
    if (!framework.mapped) {
      return {
        framework,
        scorable: false,
        overall: null,
        questions: 0,
        cells: ALIGNMENT_DOMAIN_IDS.map((domain) => ({ domain, alignment: null, questions: 0 })),
      } satisfies FrameworkAlignmentRow;
    }

    const contributions: { domain: AsraDomainId; value: number; weight: number }[] = [];

    for (const score of scored) {
      const traces = ASRA_FRAMEWORK_TRACE[score.questionId] ?? [];
      const trace = traces.find((item) => item.framework === framework.name);
      if (!trace) continue;
      const config = QUESTION_CONFIG_BY_ID[score.questionId];
      if (!config) continue;
      contributions.push({
        domain: score.domain,
        value: score.maturityPercent,
        weight: config.weight * CONFIDENCE_WEIGHT[trace.confidence],
      });
    }

    const cells = ALIGNMENT_DOMAIN_IDS.map((domain) => {
      const items = contributions.filter((item) => item.domain === domain);
      return {
        domain,
        alignment: items.length ? weightedAverage(items) : null,
        questions: items.length,
      } satisfies AlignmentCell;
    });

    return {
      framework,
      scorable: true,
      overall: contributions.length ? weightedAverage(contributions) : null,
      questions: contributions.length,
      cells,
    } satisfies FrameworkAlignmentRow;
  });
}

function weightedAverage(items: { value: number; weight: number }[]) {
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
  if (!totalWeight) return 0;
  const total = items.reduce((sum, item) => sum + item.value * item.weight, 0);
  return Math.round(total / totalWeight);
}
