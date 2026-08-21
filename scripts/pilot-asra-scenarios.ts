import { QUESTION_CONFIG } from "../src/lib/asra-config";
import { generateAsraRecommendations } from "../src/lib/asra-recommendations";
import {
  calculateAssessmentScores,
  riskQuadrant,
  type AssessmentContext,
  type AsraAnswers,
  type MaturityValue,
} from "../src/lib/asra-scoring";

function answers(defaultValue: MaturityValue, overrides: Record<string, MaturityValue | null> = {}): AsraAnswers {
  return Object.fromEntries(
    QUESTION_CONFIG.map((question) => [question.id, overrides[question.id] ?? defaultValue]),
  );
}

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

const scenarios = [
  {
    name: "Regulated bank — high exposure, low maturity",
    context: {
      exposure: 92,
      autonomy: 4.2,
      businessImpact: 95,
      resilienceDependency: 90,
      usesAgents: true,
      usesGenAI: true,
    } satisfies AssessmentContext,
    answers: answers(2, {
      "DISC-001": 1,
      "DISC-005": 1,
      "RISK-003": 1,
      "GOV-004": 1,
      "GOV-005": 1,
      "PROT-002": 1,
      "PROT-008": 1,
      "PROT-009": 0,
      "MON-002": 1,
      "IR-002": 0,
      "IR-004": 1,
    }),
    expect: (scores: ReturnType<typeof calculateAssessmentScores>) => {
      assert(scores.exposure >= 90, "Bank scenario should be very highly exposed");
      assert(scores.maturity < 60, "Bank scenario should remain below Defined maturity");
      assert(riskQuadrant(scores.maturity, scores.exposure) === "Critical Priority", "Bank scenario should land in Critical Priority");
    },
  },
  {
    name: "Mature SaaS — agents at scale",
    context: {
      exposure: 78,
      autonomy: 4.5,
      businessImpact: 80,
      resilienceDependency: 75,
      usesAgents: true,
      usesGenAI: true,
    } satisfies AssessmentContext,
    answers: answers(4, {
      "PROT-009": 3,
      "MON-002": 3,
      "IR-002": 3,
      "VAL-003": 3,
    }),
    expect: (scores: ReturnType<typeof calculateAssessmentScores>) => {
      assert(scores.maturity >= 70, "Mature SaaS should score at least high Defined");
      assert(scores.exposure >= 60, "Mature SaaS should still have high exposure");
      assert(riskQuadrant(scores.maturity, scores.exposure) === "Strategic Investment", "Mature SaaS should land in Strategic Investment");
    },
  },
  {
    name: "Early GenAI adopter — no agents",
    context: {
      exposure: 38,
      autonomy: 1.4,
      businessImpact: 45,
      resilienceDependency: 30,
      usesAgents: false,
      usesGenAI: true,
    } satisfies AssessmentContext,
    answers: answers(2, {
      "DISC-001": 3,
      "GOV-001": 2,
      "PROT-004": 2,
      "VAL-002": 1,
    }),
    expect: (scores: ReturnType<typeof calculateAssessmentScores>) => {
      assert(scores.applicable < 60, "No-agent scenario should exclude agent-only questions");
      assert(scores.autonomy < 2, "Early GenAI should stay below advisory/action autonomy");
      assert(scores.exposure < 60, "Early GenAI exposure should not be high");
    },
  },
  {
    name: "Controlled enterprise AI — low exposure, high maturity",
    context: {
      exposure: 25,
      autonomy: 2.2,
      businessImpact: 55,
      resilienceDependency: 45,
      usesAgents: false,
      usesGenAI: false,
    } satisfies AssessmentContext,
    answers: answers(4),
    expect: (scores: ReturnType<typeof calculateAssessmentScores>) => {
      assert(scores.maturity >= 75, "Controlled enterprise should be Managed or close to it");
      assert(scores.exposure < 60, "Controlled enterprise should have lower exposure");
      assert(riskQuadrant(scores.maturity, scores.exposure) === "Controlled Adoption", "Controlled enterprise should land in Controlled Adoption");
    },
  },
] as const;

for (const scenario of scenarios) {
  const scores = calculateAssessmentScores(scenario.answers, scenario.context);
  scenario.expect(scores);
  const recommendations = generateAsraRecommendations(scenario.answers, scenario.context);
  console.log(`\n${scenario.name}`);
  console.log(`Maturity ${scores.maturity} | Exposure ${scores.exposure} | Autonomy ${scores.autonomy} | Resilience ${scores.resilience}`);
  console.log(`Quadrant: ${riskQuadrant(scores.maturity, scores.exposure)}`);
  console.log(`Applicable: ${scores.applicable} | Answered: ${scores.answered}`);
  console.log(`Top recommendations: ${recommendations.slice(0, 3).map((item) => `${item.title} (${item.priorityScore})`).join(" | ") || "none"}`);
}

const bankScores = calculateAssessmentScores(scenarios[0].answers, scenarios[0].context);
const matureScores = calculateAssessmentScores(scenarios[1].answers, scenarios[1].context);
const earlyScores = calculateAssessmentScores(scenarios[2].answers, scenarios[2].context);
const controlledScores = calculateAssessmentScores(scenarios[3].answers, scenarios[3].context);

assert(bankScores.maturity < matureScores.maturity, "Low-maturity bank should score below mature SaaS");
assert(bankScores.exposure > earlyScores.exposure, "Bank exposure should exceed early GenAI adopter");
assert(matureScores.autonomy > earlyScores.autonomy, "Agentic SaaS autonomy should exceed early GenAI adopter");
assert(controlledScores.maturity > earlyScores.maturity, "Controlled enterprise should be more mature than early adopter");

console.log("\nASRA pilot scenarios passed");
