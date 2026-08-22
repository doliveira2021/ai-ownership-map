export type AsraDomainId =
  | "discovery"
  | "risk"
  | "governance"
  | "threat-modeling"
  | "secure-sdlc"
  | "protection"
  | "validation"
  | "monitoring"
  | "incident-resilience"
  | "measurement";

export type Horizon = "NOW" | "NEXT" | "SCALE";

export type QuestionModifiers = {
  exposure: number;
  autonomy: number;
  businessImpact: number;
  resilience: number;
};

export type QuestionConfig = {
  id: string;
  domain: AsraDomainId;
  weight: number;
  modifiers: QuestionModifiers;
  defaultHorizon: Horizon;
  agentOnly?: boolean;
  genAiOnly?: boolean;
};

export const DOMAIN_WEIGHTS: Record<AsraDomainId, number> = {
  discovery: 0.1,
  risk: 0.1,
  governance: 0.12,
  "threat-modeling": 0.1,
  "secure-sdlc": 0.1,
  protection: 0.15,
  validation: 0.08,
  monitoring: 0.1,
  "incident-resilience": 0.08,
  measurement: 0.07,
};

const q = (
  id: string,
  domain: AsraDomainId,
  modifiers: Partial<QuestionModifiers> = {},
  options: Partial<Pick<QuestionConfig, "weight" | "defaultHorizon" | "agentOnly" | "genAiOnly">> = {},
): QuestionConfig => ({
  id,
  domain,
  weight: options.weight ?? 1,
  defaultHorizon: options.defaultHorizon ?? "NEXT",
  modifiers: {
    exposure: modifiers.exposure ?? 1,
    autonomy: modifiers.autonomy ?? 1,
    businessImpact: modifiers.businessImpact ?? 1,
    resilience: modifiers.resilience ?? 1,
  },
  ...(options.agentOnly !== undefined ? { agentOnly: options.agentOnly } : {}),
  ...(options.genAiOnly !== undefined ? { genAiOnly: options.genAiOnly } : {}),
});

/**
 * Configuration for the 60-question ASRA master library.
 *
 * Modifier convention:
 * - 1.0 = neutral
 * - >1.0 = increases priority when that context dimension is elevated
 * - values should remain deliberately bounded; they are prioritization aids, not actuarial risk factors
 */
export const QUESTION_CONFIG: QuestionConfig[] = [
  // 1. Discovery & Inventory
  q("DISC-001", "discovery", { exposure: 1.25, businessImpact: 1.1 }, { defaultHorizon: "NOW", weight: 1.2 }),
  q("DISC-002", "discovery", { exposure: 1.3 }, { defaultHorizon: "NOW", weight: 1.1 }),
  q("DISC-003", "discovery", { exposure: 1.25, businessImpact: 1.1 }, { defaultHorizon: "NOW" }),
  q("DISC-004", "discovery", { exposure: 1.05 }),
  q("DISC-005", "discovery", { exposure: 1.25, autonomy: 1.3 }, { defaultHorizon: "NOW", agentOnly: true, weight: 1.2 }),
  q("DISC-006", "discovery", { exposure: 1.25, businessImpact: 1.15 }, { defaultHorizon: "NOW" }),

  // 2. Risk Classification & Business Impact
  q("RISK-001", "risk", { businessImpact: 1.3 }, { defaultHorizon: "NOW", weight: 1.2 }),
  q("RISK-002", "risk", { exposure: 1.2, businessImpact: 1.25 }, { defaultHorizon: "NOW" }),
  q("RISK-003", "risk", { autonomy: 1.35, businessImpact: 1.2 }, { defaultHorizon: "NOW", agentOnly: true, weight: 1.2 }),
  q("RISK-004", "risk", { exposure: 1.15, businessImpact: 1.3 }, { defaultHorizon: "NOW" }),
  q("RISK-005", "risk", { autonomy: 1.25, businessImpact: 1.3 }, { defaultHorizon: "NOW" }),

  // 3. Governance, Accountability & Decision Rights
  q("GOV-001", "governance", { businessImpact: 1.15 }, { defaultHorizon: "NOW" }),
  q("GOV-002", "governance", { businessImpact: 1.2 }, { defaultHorizon: "NOW", weight: 1.15 }),
  q("GOV-003", "governance", { businessImpact: 1.25 }, { defaultHorizon: "NOW", weight: 1.15 }),
  q("GOV-004", "governance", { autonomy: 1.35, businessImpact: 1.2 }, { defaultHorizon: "NOW", agentOnly: true, weight: 1.2 }),
  q("GOV-005", "governance", { autonomy: 1.4, businessImpact: 1.2 }, { defaultHorizon: "NOW", agentOnly: true, weight: 1.2 }),
  q("GOV-006", "governance", { businessImpact: 1.3 }, { defaultHorizon: "NOW", weight: 1.15 }),
  q("GOV-007", "governance", { exposure: 1.2, businessImpact: 1.15 }, { defaultHorizon: "NOW" }),
  q("GOV-008", "governance", { autonomy: 1.2, resilience: 1.3, businessImpact: 1.25 }, { defaultHorizon: "NOW", weight: 1.2 }),

  // 4. AI Threat Modeling
  q("THRT-001", "threat-modeling", { exposure: 1.1, businessImpact: 1.1 }),
  q("THRT-002", "threat-modeling", { exposure: 1.2, autonomy: 1.15 }, { genAiOnly: true }),
  q("THRT-003", "threat-modeling", { exposure: 1.2, businessImpact: 1.15 }),
  q("THRT-004", "threat-modeling", { autonomy: 1.35, businessImpact: 1.15 }, { agentOnly: true, weight: 1.15 }),
  q("THRT-005", "threat-modeling", { exposure: 1.2, resilience: 1.15 }),

  // 5. Secure AI Development Lifecycle
  q("SDLC-001", "secure-sdlc", { businessImpact: 1.1 }),
  q("SDLC-002", "secure-sdlc", { exposure: 1.15, resilience: 1.1 }),
  q("SDLC-003", "secure-sdlc", { exposure: 1.2, autonomy: 1.2 }),
  q("SDLC-004", "secure-sdlc", { exposure: 1.15, autonomy: 1.1 }, { weight: 1.1 }),
  q("SDLC-005", "secure-sdlc", { autonomy: 1.25, businessImpact: 1.15 }),
  q("SDLC-006", "secure-sdlc", { exposure: 1.05, resilience: 1.1 }, { defaultHorizon: "SCALE" }),

  // 6. Protection Controls
  q("PROT-001", "protection", { exposure: 1.15, autonomy: 1.25 }, { defaultHorizon: "NOW", weight: 1.15 }),
  q("PROT-002", "protection", { exposure: 1.2, autonomy: 1.4, businessImpact: 1.2 }, { defaultHorizon: "NOW", agentOnly: true, weight: 1.25 }),
  q("PROT-003", "protection", { exposure: 1.35, businessImpact: 1.3 }, { defaultHorizon: "NOW", weight: 1.25 }),
  q("PROT-004", "protection", { exposure: 1.3, businessImpact: 1.2 }, { defaultHorizon: "NOW", genAiOnly: true, weight: 1.15 }),
  q("PROT-005", "protection", { exposure: 1.25, businessImpact: 1.15 }, { genAiOnly: true }),
  q("PROT-006", "protection", { exposure: 1.15, businessImpact: 1.15 }),
  q("PROT-007", "protection", { exposure: 1.25, autonomy: 1.15 }, { genAiOnly: true }),
  q("PROT-008", "protection", { exposure: 1.15, autonomy: 1.4, businessImpact: 1.2 }, { defaultHorizon: "NOW", agentOnly: true, weight: 1.2 }),
  q("PROT-009", "protection", { autonomy: 1.5, resilience: 1.35, businessImpact: 1.3 }, { defaultHorizon: "NOW", agentOnly: true, weight: 1.3 }),
  q("PROT-010", "protection", { exposure: 1.25, resilience: 1.2, businessImpact: 1.1 }),

  // 7. Validation & Red Teaming
  q("VAL-001", "validation", { exposure: 1.1, businessImpact: 1.15 }),
  q("VAL-002", "validation", { exposure: 1.25, businessImpact: 1.1 }, { genAiOnly: true, weight: 1.1 }),
  q("VAL-003", "validation", { autonomy: 1.4, businessImpact: 1.2 }, { agentOnly: true, weight: 1.2 }),
  q("VAL-004", "validation", { exposure: 1.15, autonomy: 1.15 }, { defaultHorizon: "SCALE" }),
  q("VAL-005", "validation", { resilience: 1.4, businessImpact: 1.2 }, { defaultHorizon: "SCALE", weight: 1.15 }),

  // 8. Monitoring & Detection
  q("MON-001", "monitoring", { exposure: 1.15, autonomy: 1.15, resilience: 1.15 }, { defaultHorizon: "NOW", weight: 1.15 }),
  q("MON-002", "monitoring", { autonomy: 1.4, resilience: 1.2 }, { defaultHorizon: "NOW", agentOnly: true, weight: 1.25 }),
  q("MON-003", "monitoring", { autonomy: 1.3 }, { agentOnly: true }),
  q("MON-004", "monitoring", { exposure: 1.2, autonomy: 1.3, resilience: 1.2 }, { weight: 1.2 }),
  q("MON-005", "monitoring", { exposure: 1.1, resilience: 1.15 }),

  // 9. Incident Response & Business Resilience
  q("IR-001", "incident-resilience", { resilience: 1.4, businessImpact: 1.25 }, { defaultHorizon: "NOW", weight: 1.25 }),
  q("IR-002", "incident-resilience", { autonomy: 1.5, resilience: 1.45, businessImpact: 1.3 }, { defaultHorizon: "NOW", agentOnly: true, weight: 1.3 }),
  q("IR-003", "incident-resilience", { autonomy: 1.2, resilience: 1.25 }, { defaultHorizon: "NOW" }),
  q("IR-004", "incident-resilience", { resilience: 1.5, businessImpact: 1.4 }, { defaultHorizon: "NOW", weight: 1.3 }),
  q("IR-005", "incident-resilience", { exposure: 1.15, resilience: 1.45, businessImpact: 1.3 }, { weight: 1.2 }),

  // 10. Measurement & Continuous Improvement
  q("MEAS-001", "measurement", { businessImpact: 1.1 }),
  q("MEAS-002", "measurement", { businessImpact: 1.15 }),
  q("MEAS-003", "measurement", { exposure: 1.05, resilience: 1.1 }),
  q("MEAS-004", "measurement", { businessImpact: 1.1 }),
  q("MEAS-005", "measurement", { resilience: 1.15 }),
];

export const QUESTION_CONFIG_BY_ID = Object.fromEntries(
  QUESTION_CONFIG.map((item) => [item.id, item]),
) as Record<string, QuestionConfig>;

export const DOMAIN_QUESTION_IDS = Object.fromEntries(
  (Object.keys(DOMAIN_WEIGHTS) as AsraDomainId[]).map((domain) => [
    domain,
    QUESTION_CONFIG.filter((question) => question.domain === domain).map((question) => question.id),
  ]),
) as Record<AsraDomainId, string[]>;

export function validateAssessmentConfiguration() {
  const ids = QUESTION_CONFIG.map((question) => question.id);
  const uniqueIds = new Set(ids);
  const domainWeightTotal = Object.values(DOMAIN_WEIGHTS).reduce((sum, weight) => sum + weight, 0);

  return {
    questionCount: ids.length,
    uniqueQuestionCount: uniqueIds.size,
    domainWeightTotal,
    validQuestionCount: ids.length === 60 && uniqueIds.size === 60,
    validDomainWeights: Math.abs(domainWeightTotal - 1) < 0.000001,
  };
}
