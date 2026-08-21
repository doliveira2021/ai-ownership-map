import { QUESTION_CONFIG } from "./asra-config";
import type { AssessmentContext, AsraAnswers, MaturityValue } from "./asra-scoring";

export type AsraPilotScenarioId = "regulated-bank" | "mature-saas" | "early-genai" | "controlled-enterprise";

export type AsraPilotScenario = {
  id: AsraPilotScenarioId;
  name: string;
  shortName: string;
  description: string;
  context: AssessmentContext;
  answers: AsraAnswers;
};

function answers(
  defaultValue: MaturityValue,
  overrides: Record<string, MaturityValue | null> = {},
): AsraAnswers {
  return Object.fromEntries(
    QUESTION_CONFIG.map((question) => [question.id, overrides[question.id] ?? defaultValue]),
  );
}

export const ASRA_PILOT_SCENARIOS: AsraPilotScenario[] = [
  {
    id: "regulated-bank",
    name: "Regulated bank — high exposure, low maturity",
    shortName: "Regulated Bank",
    description:
      "Highly regulated, business-critical AI with extensive agent use, high autonomy and major gaps in agent governance, least privilege, containment and continuity.",
    context: {
      exposure: 92,
      autonomy: 4.2,
      businessImpact: 95,
      resilienceDependency: 90,
      usesAgents: true,
      usesGenAI: true,
    },
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
  },
  {
    id: "mature-saas",
    name: "Mature SaaS — agents at scale",
    shortName: "Mature SaaS",
    description:
      "A mature SaaS company operating high-exposure, high-autonomy agents with generally managed controls but remaining gaps in action boundaries, traceability, containment and agent testing.",
    context: {
      exposure: 78,
      autonomy: 4.5,
      businessImpact: 80,
      resilienceDependency: 75,
      usesAgents: true,
      usesGenAI: true,
    },
    answers: answers(4, {
      "PROT-009": 3,
      "MON-002": 3,
      "IR-002": 3,
      "VAL-003": 3,
    }),
  },
  {
    id: "early-genai",
    name: "Early GenAI adopter — no agents",
    shortName: "Early GenAI",
    description:
      "An organization beginning GenAI adoption with moderate exposure and no production agents. Agent-only questions should be excluded automatically.",
    context: {
      exposure: 38,
      autonomy: 1.4,
      businessImpact: 45,
      resilienceDependency: 30,
      usesAgents: false,
      usesGenAI: true,
    },
    answers: answers(2, {
      "DISC-001": 3,
      "GOV-001": 2,
      "PROT-004": 2,
      "VAL-002": 1,
    }),
  },
  {
    id: "controlled-enterprise",
    name: "Controlled enterprise AI — low exposure, high maturity",
    shortName: "Controlled Enterprise",
    description:
      "A mature enterprise with controlled AI adoption, lower exposure, modest autonomy and no current GenAI/agent scope.",
    context: {
      exposure: 25,
      autonomy: 2.2,
      businessImpact: 55,
      resilienceDependency: 45,
      usesAgents: false,
      usesGenAI: false,
    },
    answers: answers(4),
  },
];

export const ASRA_PILOT_BY_ID = Object.fromEntries(
  ASRA_PILOT_SCENARIOS.map((scenario) => [scenario.id, scenario]),
) as Record<AsraPilotScenarioId, AsraPilotScenario>;
