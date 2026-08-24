import type { AsraDomainId } from "./asra-config";

/**
 * Versioned catalog of publicly documented industry practices.
 *
 * This module is supporting context only. It never influences scoring, domain
 * weights, recommendation triggers, Action Pack logic or technology guidance.
 *
 * Structural data only — all user-facing prose lives in the i18n practice
 * bundles so new locales require no code changes. Adding a new provider (for
 * example OpenAI or Meta) only requires a new entry here plus its content keys.
 */
export const ASRA_INDUSTRY_PRACTICES_VERSION = "2026.09";

export const PRACTICE_CATEGORY_IDS = [
  "risk-based-control-escalation",
  "pre-deployment-evaluation",
  "adversarial-validation",
  "monitoring-detection-effectiveness",
  "incident-preparedness",
  "external-review",
  "high-stakes-inventory",
  "safeguard-effectiveness",
  "shared-responsibility",
  "lifecycle-security",
  "agent-authority-boundaries",
  "supply-chain-integrity",
] as const;

export type PracticeCategoryId = (typeof PRACTICE_CATEGORY_IDS)[number];

export type IndustryPractice = {
  practiceId: string;
  practiceCategory: PracticeCategoryId;
  organizations: readonly string[];
  sourceTitle: string;
  sourceUrl: string;
  /** Publication or last-update date stated by the public source (ISO date). */
  sourceDate: string;
  /** Date this entry was last reviewed against the public source (ISO date). */
  lastReviewed: string;
  relatedDomains: AsraDomainId[];
  relatedRecommendationIds: string[];
};

const ANTHROPIC_RSP = {
  sourceTitle: "Anthropic Responsible Scaling Policy (v3.4)",
  sourceUrl: "https://www.anthropic.com/responsible-scaling-policy",
  sourceDate: "2026-07-08",
  lastReviewed: "2026-08-24",
  organizations: ["Anthropic"],
} as const;

const ANTHROPIC_ROADMAP = {
  sourceTitle: "Anthropic Frontier Safety Roadmap",
  sourceUrl: "https://www.anthropic.com/responsible-scaling-policy/roadmap",
  sourceDate: "2026-07-01",
  lastReviewed: "2026-08-24",
  organizations: ["Anthropic"],
} as const;

const DEEPMIND_FSF = {
  sourceTitle: "Google DeepMind Frontier Safety Framework (third iteration)",
  sourceUrl: "https://deepmind.google/blog/strengthening-our-frontier-safety-framework/",
  sourceDate: "2026-04-17",
  lastReviewed: "2026-08-24",
  organizations: ["Google DeepMind"],
} as const;

const MICROSOFT_SHARED_RESPONSIBILITY = {
  sourceTitle: "Microsoft Learn — AI shared responsibility (security fundamentals)",
  sourceUrl:
    "https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility-ai",
  sourceDate: "2026-08-01",
  lastReviewed: "2026-08-24",
  organizations: ["Microsoft"],
} as const;

const MICROSOFT_AI_SECURITY_PRACTICES = {
  sourceTitle: "Microsoft Learn — AI security best practices",
  sourceUrl:
    "https://learn.microsoft.com/en-us/azure/security/fundamentals/ai-security-best-practices",
  sourceDate: "2026-08-01",
  lastReviewed: "2026-08-24",
  organizations: ["Microsoft"],
} as const;

const MICROSOFT_AI_POSTURE = {
  sourceTitle: "Microsoft Learn — AI security posture management",
  sourceUrl: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/ai-security-posture",
  sourceDate: "2026-08-01",
  lastReviewed: "2026-08-24",
  organizations: ["Microsoft"],
} as const;

const MICROSOFT_AGENT_SECURITY_BLOG = {
  sourceTitle:
    "Microsoft Security Blog — Securing AI agents as AI tools move from reading to acting",
  sourceUrl:
    "https://www.microsoft.com/en-us/security/blog/2026/06/30/securing-ai-agents-ai-tools-move-from-reading-acting/",
  sourceDate: "2026-06-30",
  lastReviewed: "2026-08-24",
  organizations: ["Microsoft"],
} as const;

const MICROSOFT_AGENT_FRAMEWORK_SAFETY = {
  sourceTitle: "Microsoft Learn — Agent Framework safety guidance",
  sourceUrl: "https://learn.microsoft.com/en-us/agent-framework/agents/safety",
  sourceDate: "2026-08-01",
  lastReviewed: "2026-08-24",
  organizations: ["Microsoft"],
} as const;

const MICROSOFT_WELL_ARCHITECTED_RAI = {
  sourceTitle: "Microsoft Learn — Azure Well-Architected Framework, Responsible AI",
  sourceUrl: "https://learn.microsoft.com/en-us/azure/well-architected/ai/responsible-ai",
  sourceDate: "2026-08-01",
  lastReviewed: "2026-08-24",
  organizations: ["Microsoft"],
} as const;

const MICROSOFT_AGENT_MATURITY = {
  sourceTitle: "Microsoft Learn — Agent adoption maturity model: security and governance",
  sourceUrl:
    "https://learn.microsoft.com/en-us/agents/adoption-maturity-model/maturity-model-security-governance",
  sourceDate: "2026-08-01",
  lastReviewed: "2026-08-24",
  organizations: ["Microsoft"],
} as const;

export const ASRA_INDUSTRY_PRACTICES: IndustryPractice[] = [
  {
    practiceId: "IP-RSP-001",
    practiceCategory: "risk-based-control-escalation",
    relatedDomains: ["risk", "governance"],
    relatedRecommendationIds: ["REC-RISK-001", "REC-GOV-001"],
    ...ANTHROPIC_RSP,
  },
  {
    practiceId: "IP-RSP-002",
    practiceCategory: "pre-deployment-evaluation",
    relatedDomains: ["secure-sdlc", "validation"],
    relatedRecommendationIds: ["REC-SDLC-001", "REC-VAL-001"],
    ...ANTHROPIC_RSP,
  },
  {
    practiceId: "IP-RSP-003",
    practiceCategory: "monitoring-detection-effectiveness",
    relatedDomains: ["protection", "monitoring"],
    relatedRecommendationIds: ["REC-PROT-001", "REC-MON-001"],
    ...ANTHROPIC_RSP,
  },
  {
    practiceId: "IP-RSP-004",
    practiceCategory: "incident-preparedness",
    relatedDomains: ["incident-resilience"],
    relatedRecommendationIds: ["REC-IR-001"],
    ...ANTHROPIC_RSP,
  },
  {
    practiceId: "IP-RSP-005",
    practiceCategory: "external-review",
    relatedDomains: ["governance", "measurement"],
    relatedRecommendationIds: ["REC-GOV-001", "REC-MEAS-001"],
    ...ANTHROPIC_RSP,
  },
  {
    practiceId: "IP-FSR-001",
    practiceCategory: "monitoring-detection-effectiveness",
    relatedDomains: ["monitoring", "measurement"],
    relatedRecommendationIds: ["REC-MON-001", "REC-MEAS-001"],
    ...ANTHROPIC_ROADMAP,
  },
  {
    practiceId: "IP-FSR-002",
    practiceCategory: "incident-preparedness",
    relatedDomains: ["incident-resilience", "monitoring"],
    relatedRecommendationIds: ["REC-IR-001", "REC-MON-001"],
    ...ANTHROPIC_ROADMAP,
  },
  {
    practiceId: "IP-FSR-003",
    practiceCategory: "high-stakes-inventory",
    relatedDomains: ["discovery", "risk"],
    relatedRecommendationIds: ["REC-DISC-001", "REC-RISK-001"],
    ...ANTHROPIC_ROADMAP,
  },
  {
    practiceId: "IP-FSR-004",
    practiceCategory: "adversarial-validation",
    relatedDomains: ["validation", "measurement"],
    relatedRecommendationIds: ["REC-VAL-001", "REC-MEAS-001"],
    ...ANTHROPIC_ROADMAP,
  },
  {
    practiceId: "IP-GDM-001",
    practiceCategory: "risk-based-control-escalation",
    relatedDomains: ["risk", "threat-modeling"],
    relatedRecommendationIds: ["REC-RISK-001", "REC-THRT-001"],
    ...DEEPMIND_FSF,
  },
  {
    practiceId: "IP-GDM-002",
    practiceCategory: "safeguard-effectiveness",
    relatedDomains: ["validation", "secure-sdlc"],
    relatedRecommendationIds: ["REC-VAL-001", "REC-SDLC-001"],
    ...DEEPMIND_FSF,
  },
  {
    practiceId: "IP-MSFT-001",
    practiceCategory: "shared-responsibility",
    relatedDomains: ["governance", "risk", "measurement"],
    relatedRecommendationIds: ["REC-GOV-001", "REC-RISK-001", "REC-MEAS-001"],
    ...MICROSOFT_SHARED_RESPONSIBILITY,
  },
  {
    practiceId: "IP-MSFT-002",
    practiceCategory: "lifecycle-security",
    relatedDomains: [
      "discovery",
      "protection",
      "monitoring",
      "incident-resilience",
      "governance",
      "measurement",
    ],
    relatedRecommendationIds: [
      "REC-DISC-001",
      "REC-PROT-001",
      "REC-MON-001",
      "REC-IR-001",
      "REC-GOV-001",
      "REC-MEAS-001",
    ],
    ...MICROSOFT_SHARED_RESPONSIBILITY,
  },
  {
    practiceId: "IP-MSFT-003",
    practiceCategory: "high-stakes-inventory",
    relatedDomains: ["discovery", "risk"],
    relatedRecommendationIds: ["REC-DISC-001", "REC-RISK-001"],
    ...MICROSOFT_AI_SECURITY_PRACTICES,
  },
  {
    practiceId: "IP-MSFT-004",
    practiceCategory: "high-stakes-inventory",
    relatedDomains: ["discovery", "secure-sdlc", "protection", "threat-modeling"],
    relatedRecommendationIds: ["REC-DISC-001", "REC-SDLC-001", "REC-PROT-001", "REC-THRT-001"],
    ...MICROSOFT_AI_POSTURE,
  },
  {
    practiceId: "IP-MSFT-005",
    practiceCategory: "agent-authority-boundaries",
    relatedDomains: ["governance", "protection", "risk"],
    relatedRecommendationIds: ["REC-GOV-001", "REC-PROT-001", "REC-RISK-001"],
    ...MICROSOFT_AGENT_SECURITY_BLOG,
  },
  {
    practiceId: "IP-MSFT-006",
    practiceCategory: "supply-chain-integrity",
    relatedDomains: ["threat-modeling", "secure-sdlc", "protection"],
    relatedRecommendationIds: ["REC-THRT-001", "REC-SDLC-001", "REC-PROT-001"],
    ...MICROSOFT_AGENT_SECURITY_BLOG,
  },
  {
    practiceId: "IP-MSFT-007",
    practiceCategory: "agent-authority-boundaries",
    relatedDomains: ["secure-sdlc", "threat-modeling", "protection", "validation"],
    relatedRecommendationIds: ["REC-SDLC-001", "REC-THRT-001", "REC-PROT-001", "REC-VAL-001"],
    ...MICROSOFT_AGENT_FRAMEWORK_SAFETY,
  },
  {
    practiceId: "IP-MSFT-008",
    practiceCategory: "incident-preparedness",
    relatedDomains: ["protection", "monitoring", "incident-resilience"],
    relatedRecommendationIds: ["REC-PROT-001", "REC-MON-001", "REC-IR-001"],
    ...MICROSOFT_WELL_ARCHITECTED_RAI,
  },
  {
    practiceId: "IP-MSFT-009",
    practiceCategory: "risk-based-control-escalation",
    relatedDomains: ["risk", "governance", "measurement", "validation"],
    relatedRecommendationIds: ["REC-RISK-001", "REC-GOV-001", "REC-MEAS-001", "REC-VAL-001"],
    ...MICROSOFT_AGENT_MATURITY,
  },
];

export const ASRA_INDUSTRY_PRACTICE_IDS = ASRA_INDUSTRY_PRACTICES.map(
  (practice) => practice.practiceId,
);

/** Practices whose related recommendations intersect the triggered set first. */
export function sortPracticesForRecommendations(recommendationIds: string[]): IndustryPractice[] {
  const active = new Set(recommendationIds);
  return [...ASRA_INDUSTRY_PRACTICES].sort((a, b) => {
    const relevance = (practice: IndustryPractice) =>
      practice.relatedRecommendationIds.filter((id) => active.has(id)).length;
    return relevance(b) - relevance(a);
  });
}
