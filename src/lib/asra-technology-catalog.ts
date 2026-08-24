/**
 * ASRA technology catalog (versioned, local, vendor-neutral).
 *
 * Capabilities come first, technology categories second, and named providers are
 * only non-exhaustive examples to evaluate. Inclusion is never an endorsement,
 * ranking, certification or a statement of product fit.
 *
 * Nothing in this file participates in scoring.
 */

export const TECHNOLOGY_CATALOG_VERSION = "2026.08";
export const TECHNOLOGY_CATALOG_LAST_REVIEWED = "2026-08-01";

export const TECHNOLOGY_CATEGORY_IDS = [
  "ai-spm",
  "cnapp-ai",
  "dspm-ai",
  "nhi-identity",
  "agent-runtime",
  "mcp-tool-governance",
  "ai-guardrails",
  "model-appsec",
  "ai-red-team",
  "siem-xdr-ai",
  "soar-ir",
  "ai-observability",
  "cmdb-grc",
] as const;

export type TechnologyCategoryId = (typeof TECHNOLOGY_CATEGORY_IDS)[number];

export type TechnologyCapability = {
  capabilityId: string;
  category: TechnologyCategoryId;
  /** Non-exhaustive examples to evaluate. Not an endorsement or ranking. */
  exampleProviders: string[];
  lastReviewed: string;
};

const cap = (
  capabilityId: string,
  category: TechnologyCategoryId,
  exampleProviders: string[],
): TechnologyCapability => ({
  capabilityId,
  category,
  exampleProviders,
  lastReviewed: TECHNOLOGY_CATALOG_LAST_REVIEWED,
});

export const TECHNOLOGY_CAPABILITIES: TechnologyCapability[] = [
  cap("cap-ai-inventory", "ai-spm", [
    "Microsoft",
    "Palo Alto Networks",
    "Wiz",
    "Orca Security",
  ]),
  cap("cap-cloud-ai-discovery", "cnapp-ai", [
    "Wiz",
    "Orca Security",
    "Palo Alto Networks",
    "CrowdStrike",
    "Microsoft",
  ]),
  cap("cap-data-security-ai", "dspm-ai", [
    "Cyera",
    "Varonis",
    "BigID",
    "Sentra",
    "Microsoft",
  ]),
  cap("cap-nonhuman-identity", "nhi-identity", [
    "Okta",
    "CyberArk",
    "Oasis Security",
    "Entro Security",
    "Microsoft",
  ]),
  cap("cap-agent-runtime", "agent-runtime", ["Zenity", "Zscaler", "Cisco", "Microsoft"]),
  cap("cap-tool-governance", "mcp-tool-governance", ["Zenity", "Docker", "Cisco", "Microsoft"]),
  cap("cap-runtime-guardrails", "ai-guardrails", [
    "Check Point / Lakera",
    "Enkrypt AI",
    "Microsoft",
    "Google Cloud",
    "AWS",
  ]),
  cap("cap-model-appsec", "model-appsec", ["Snyk", "HiddenLayer", "Docker", "Microsoft"]),
  cap("cap-ai-red-team", "ai-red-team", [
    "HiddenLayer",
    "Enkrypt AI",
    "Check Point / Lakera",
    "Microsoft",
  ]),
  cap("cap-ai-telemetry", "siem-xdr-ai", [
    "Splunk",
    "Microsoft",
    "CrowdStrike",
    "SentinelOne",
    "Google Cloud",
  ]),
  cap("cap-ir-automation", "soar-ir", [
    "Splunk",
    "Palo Alto Networks",
    "SentinelOne",
    "Microsoft",
  ]),
  cap("cap-ai-observability", "ai-observability", ["Datadog", "Dynatrace", "AWS", "Google Cloud"]),
  cap("cap-grc-workflow", "cmdb-grc", ["ServiceNow", "Microsoft"]),
];

export const TECHNOLOGY_CAPABILITY_BY_ID: Record<string, TechnologyCapability> =
  Object.fromEntries(TECHNOLOGY_CAPABILITIES.map((item) => [item.capabilityId, item]));

/** Broad platforms that customers frequently extend before buying something new. */
export const BROAD_PLATFORMS = [
  "Microsoft",
  "Google Cloud",
  "AWS",
  "Palo Alto Networks",
  "Cisco",
  "CrowdStrike",
  "Splunk",
  "ServiceNow",
];

/** Options for the optional "platforms already in use" selector. Local state only. */
export const STRATEGIC_PLATFORM_OPTIONS: string[] = Array.from(
  new Set(TECHNOLOGY_CAPABILITIES.flatMap((item) => item.exampleProviders)),
).sort((a, b) => a.localeCompare(b));
