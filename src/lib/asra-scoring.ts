import {
  DOMAIN_QUESTION_IDS,
  DOMAIN_WEIGHTS,
  QUESTION_CONFIG,
  QUESTION_CONFIG_BY_ID,
  type AsraDomainId,
  type Horizon,
} from "./asra-config";

export type MaturityValue = 0 | 1 | 2 | 3 | 4 | 5;

export type AssessmentContext = {
  exposure: number; // 0-100
  autonomy: number; // 0-5
  businessImpact: number; // 0-100
  resilienceDependency: number; // 0-100
  usesAgents?: boolean;
  usesGenAI?: boolean;
};

export type AsraAnswers = Record<string, MaturityValue | null | undefined>;

export type QuestionScore = {
  questionId: string;
  domain: AsraDomainId;
  maturity: MaturityValue;
  maturityPercent: number;
  controlGap: number;
  weightedGap: number;
  priorityScore: number;
  horizon: Horizon;
};

export type DomainScore = {
  domain: AsraDomainId;
  score: number;
  answered: number;
  applicable: number;
  weight: number;
};

export type AssessmentScores = {
  maturity: number;
  exposure: number;
  autonomy: number;
  resilience: number;
  domainScores: DomainScore[];
  questionScores: QuestionScore[];
  answered: number;
  applicable: number;
};

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

function normalizedContext(value: number, max: number) {
  return clamp(value / max, 0, 1);
}

export function isQuestionApplicable(questionId: string, context: AssessmentContext) {
  const config = QUESTION_CONFIG_BY_ID[questionId];
  if (!config) return false;
  if (config.agentOnly && context.usesAgents === false) return false;
  if (config.genAiOnly && context.usesGenAI === false) return false;
  return true;
}

function scoreQuestion(
  questionId: string,
  maturity: MaturityValue,
  context: AssessmentContext,
): QuestionScore {
  const config = QUESTION_CONFIG_BY_ID[questionId];
  if (!config) throw new Error(`Unknown ASRA question: ${questionId}`);

  const maturityPercent = (maturity / 5) * 100;
  const controlGap = 1 - maturity / 5;

  const exposureFactor = 1 + normalizedContext(context.exposure, 100) * (config.modifiers.exposure - 1);
  const autonomyFactor = 1 + normalizedContext(context.autonomy, 5) * (config.modifiers.autonomy - 1);
  const businessImpactFactor =
    1 + normalizedContext(context.businessImpact, 100) * (config.modifiers.businessImpact - 1);
  const resilienceFactor =
    1 + normalizedContext(context.resilienceDependency, 100) * (config.modifiers.resilience - 1);

  const weightedGap = controlGap * config.weight;
  const rawPriority =
    weightedGap * exposureFactor * autonomyFactor * businessImpactFactor * resilienceFactor;

  return {
    questionId,
    domain: config.domain,
    maturity,
    maturityPercent,
    controlGap,
    weightedGap,
    priorityScore: Math.round(rawPriority * 1000) / 10,
    horizon: config.defaultHorizon,
  };
}

export function calculateDomainScores(
  answers: AsraAnswers,
  context: AssessmentContext,
): DomainScore[] {
  return (Object.keys(DOMAIN_WEIGHTS) as AsraDomainId[]).map((domain) => {
    const questionIds = DOMAIN_QUESTION_IDS[domain].filter((id) => isQuestionApplicable(id, context));
    const answered = questionIds
      .map((id) => ({ id, value: answers[id] }))
      .filter(
        (item): item is { id: string; value: MaturityValue } =>
          item.value !== null && item.value !== undefined,
      );

    if (!answered.length) {
      return {
        domain,
        score: 0,
        answered: 0,
        applicable: questionIds.length,
        weight: DOMAIN_WEIGHTS[domain],
      };
    }

    const numerator = answered.reduce((sum, item) => {
      const config = QUESTION_CONFIG_BY_ID[item.id];
      return sum + (item.value / 5) * config.weight;
    }, 0);
    const denominator = answered.reduce(
      (sum, item) => sum + QUESTION_CONFIG_BY_ID[item.id].weight,
      0,
    );

    return {
      domain,
      score: Math.round((numerator / denominator) * 100),
      answered: answered.length,
      applicable: questionIds.length,
      weight: DOMAIN_WEIGHTS[domain],
    };
  });
}

export function calculateMaturityScore(
  answers: AsraAnswers,
  context: AssessmentContext,
): number {
  const domains = calculateDomainScores(answers, context).filter((domain) => domain.answered > 0);
  if (!domains.length) return 0;

  const availableWeight = domains.reduce((sum, domain) => sum + domain.weight, 0);
  if (!availableWeight) return 0;

  const weighted = domains.reduce(
    (sum, domain) => sum + domain.score * (domain.weight / availableWeight),
    0,
  );

  return Math.round(weighted);
}

export function calculateExposureScore(context: AssessmentContext) {
  return Math.round(clamp(context.exposure, 0, 100));
}

export function calculateAutonomyScore(context: AssessmentContext) {
  return Math.round(clamp(context.autonomy, 0, 5) * 10) / 10;
}

/**
 * Business resilience is intentionally scored as readiness, not dependency.
 * The context value expresses how dependent the business is on AI; control maturity
 * in the incident/resilience domain determines how well that dependency is managed.
 */
export function calculateResilienceScore(
  answers: AsraAnswers,
  context: AssessmentContext,
): number {
  const ids = DOMAIN_QUESTION_IDS["incident-resilience"].filter((id) => isQuestionApplicable(id, context));
  const answered = ids
    .map((id) => answers[id])
    .filter((value): value is MaturityValue => value !== null && value !== undefined);

  if (!answered.length) return 0;

  const readiness = answered.reduce((sum, value) => sum + value / 5, 0) / answered.length;
  const dependency = normalizedContext(context.resilienceDependency, 100);

  // Higher dependency raises the standard required for a strong resilience score.
  const dependencyPenalty = dependency * (1 - readiness) * 0.35;
  return Math.round(clamp((readiness - dependencyPenalty) * 100, 0, 100));
}

export function calculateQuestionPriorities(
  answers: AsraAnswers,
  context: AssessmentContext,
): QuestionScore[] {
  return QUESTION_CONFIG.filter((question) => isQuestionApplicable(question.id, context))
    .map((question) => {
      const maturity = answers[question.id];
      if (maturity === null || maturity === undefined) return null;
      return scoreQuestion(question.id, maturity, context);
    })
    .filter((score): score is QuestionScore => score !== null)
    .sort((a, b) => b.priorityScore - a.priorityScore);
}

export function calculateAssessmentScores(
  answers: AsraAnswers,
  context: AssessmentContext,
): AssessmentScores {
  const applicable = QUESTION_CONFIG.filter((question) => isQuestionApplicable(question.id, context));
  const answered = applicable.filter(
    (question) => answers[question.id] !== null && answers[question.id] !== undefined,
  );

  return {
    maturity: calculateMaturityScore(answers, context),
    exposure: calculateExposureScore(context),
    autonomy: calculateAutonomyScore(context),
    resilience: calculateResilienceScore(answers, context),
    domainScores: calculateDomainScores(answers, context),
    questionScores: calculateQuestionPriorities(answers, context),
    answered: answered.length,
    applicable: applicable.length,
  };
}

export function maturityLevel(score: number) {
  if (score < 20) return "Unaware";
  if (score < 40) return "Reactive";
  if (score < 60) return "Emerging";
  if (score < 75) return "Defined";
  if (score < 90) return "Managed";
  return "Adaptive";
}

export function exposureLevel(score: number) {
  if (score <= 20) return "Limited";
  if (score <= 40) return "Moderate";
  if (score <= 60) return "Significant";
  if (score <= 80) return "High";
  return "Very High";
}

export function autonomyLevel(score: number) {
  if (score < 0.5) return "No AI";
  if (score < 1.5) return "Generative";
  if (score < 2.5) return "Advisory";
  if (score < 3.5) return "Workflow Initiation";
  if (score < 4.5) return "Action Execution";
  return "Autonomous Operations";
}

export function riskQuadrant(maturity: number, exposure: number) {
  const highMaturity = maturity >= 60;
  const highExposure = exposure >= 60;

  if (highExposure && !highMaturity) return "Critical Priority";
  if (highExposure && highMaturity) return "Strategic Investment";
  if (!highExposure && !highMaturity) return "Emerging Risk";
  return "Controlled Adoption";
}
