/**
 * ASRA Action Packs — tactical execution structure attached to already-triggered
 * recommendations.
 *
 * This module contains NO scoring logic and never changes recommendation
 * triggering. It only enriches a triggered recommendation with execution
 * guidance (phased tasks, KPIs, dependencies, technology capabilities).
 */

import type { AsraDomainId, Horizon } from "./asra-config";
import type { AsraRecommendation, Priority } from "./asra-recommendations";
import type { AssessmentContext } from "./asra-scoring";
import {
  BROAD_PLATFORMS,
  TECHNOLOGY_CAPABILITY_BY_ID,
  type TechnologyCapability,
} from "./asra-technology-catalog";

export const ACTION_PACK_VERSION = "1.0.0";

export type Effort = "Low" | "Medium" | "High";
export type BusinessImpactLevel = "Low" | "Medium" | "High";
export type Urgency = "Immediate" | "Near-term" | "Strategic";
export type ActionPhase = "7d" | "30d" | "60d" | "90d";

export const ACTION_PHASES: ActionPhase[] = ["7d", "30d", "60d", "90d"];

export type ActionPackTask = { id: string; phase: ActionPhase };
export type ActionPackKpi = { id: string; unit: "%" | "count" | "days" | "hours" };

export type ActionPackDefinition = {
  /** Same identifier as the recommendation it enriches. */
  recommendationId: string;
  domain: AsraDomainId;
  baseEffort: Effort;
  baseBusinessImpact: BusinessImpactLevel;
  tasks: ActionPackTask[];
  kpis: ActionPackKpi[];
  /** Number of localized dependency statements expected for this pack. */
  dependencyCount: number;
  capabilityIds: string[];
};

function taskIds(prefix: string, counts: [number, number, number, number]): ActionPackTask[] {
  return ACTION_PHASES.flatMap((phase, index) =>
    Array.from({ length: counts[index]! }, (_, i) => ({
      id: `${prefix}-${phase.toUpperCase()}-${i + 1}`,
      phase,
    })),
  );
}

function kpis(prefix: string, units: ActionPackKpi["unit"][]): ActionPackKpi[] {
  return units.map((unit, index) => ({ id: `KPI-${prefix}-${index + 1}`, unit }));
}

export const ACTION_PACKS: ActionPackDefinition[] = [
  {
    recommendationId: "REC-DISC-001",
    domain: "discovery",
    baseEffort: "Medium",
    baseBusinessImpact: "High",
    tasks: taskIds("DISC", [4, 3, 3, 3]),
    kpis: kpis("DISC", ["%", "%", "%", "%", "count"]),
    dependencyCount: 3,
    capabilityIds: ["cap-ai-inventory", "cap-cloud-ai-discovery", "cap-grc-workflow"],
  },
  {
    recommendationId: "REC-RISK-001",
    domain: "risk",
    baseEffort: "Medium",
    baseBusinessImpact: "High",
    tasks: taskIds("RISK", [3, 3, 3, 3]),
    kpis: kpis("RISK", ["%", "%", "%", "days", "count"]),
    dependencyCount: 3,
    capabilityIds: ["cap-grc-workflow", "cap-ai-inventory", "cap-data-security-ai"],
  },
  {
    recommendationId: "REC-GOV-001",
    domain: "governance",
    baseEffort: "Medium",
    baseBusinessImpact: "High",
    tasks: taskIds("GOV", [3, 3, 3, 3]),
    kpis: kpis("GOV", ["%", "%", "%", "days", "count"]),
    dependencyCount: 3,
    capabilityIds: ["cap-grc-workflow", "cap-ai-inventory"],
  },
  {
    recommendationId: "REC-THRT-001",
    domain: "threat-modeling",
    baseEffort: "Medium",
    baseBusinessImpact: "Medium",
    tasks: taskIds("THRT", [3, 3, 3, 3]),
    kpis: kpis("THRT", ["%", "%", "%", "count", "days"]),
    dependencyCount: 3,
    capabilityIds: ["cap-model-appsec", "cap-ai-red-team", "cap-tool-governance"],
  },
  {
    recommendationId: "REC-SDLC-001",
    domain: "secure-sdlc",
    baseEffort: "High",
    baseBusinessImpact: "Medium",
    tasks: taskIds("SDLC", [3, 3, 3, 3]),
    kpis: kpis("SDLC", ["%", "%", "%", "%", "count"]),
    dependencyCount: 3,
    capabilityIds: ["cap-model-appsec", "cap-nonhuman-identity", "cap-grc-workflow"],
  },
  {
    recommendationId: "REC-PROT-001",
    domain: "protection",
    baseEffort: "High",
    baseBusinessImpact: "High",
    tasks: taskIds("PROT", [4, 3, 3, 3]),
    kpis: kpis("PROT", ["%", "%", "hours", "%", "count"]),
    dependencyCount: 3,
    capabilityIds: [
      "cap-nonhuman-identity",
      "cap-agent-runtime",
      "cap-tool-governance",
      "cap-runtime-guardrails",
      "cap-data-security-ai",
    ],
  },
  {
    recommendationId: "REC-VAL-001",
    domain: "validation",
    baseEffort: "Medium",
    baseBusinessImpact: "Medium",
    tasks: taskIds("VAL", [3, 3, 3, 3]),
    kpis: kpis("VAL", ["%", "%", "%", "days", "count"]),
    dependencyCount: 3,
    capabilityIds: ["cap-ai-red-team", "cap-runtime-guardrails", "cap-model-appsec"],
  },
  {
    recommendationId: "REC-MON-001",
    domain: "monitoring",
    baseEffort: "High",
    baseBusinessImpact: "High",
    tasks: taskIds("MON", [3, 3, 3, 3]),
    kpis: kpis("MON", ["%", "%", "count", "hours", "%"]),
    dependencyCount: 3,
    capabilityIds: ["cap-ai-telemetry", "cap-ai-observability", "cap-agent-runtime"],
  },
  {
    recommendationId: "REC-IR-001",
    domain: "incident-resilience",
    baseEffort: "Medium",
    baseBusinessImpact: "High",
    tasks: taskIds("IR", [4, 3, 3, 3]),
    kpis: kpis("IR", ["%", "hours", "%", "%", "count"]),
    dependencyCount: 3,
    capabilityIds: [
      "cap-ir-automation",
      "cap-agent-runtime",
      "cap-nonhuman-identity",
      "cap-ai-observability",
    ],
  },
  {
    recommendationId: "REC-MEAS-001",
    domain: "measurement",
    baseEffort: "Low",
    baseBusinessImpact: "Medium",
    tasks: taskIds("MEAS", [3, 3, 3, 3]),
    kpis: kpis("MEAS", ["%", "%", "days", "count", "%"]),
    dependencyCount: 3,
    capabilityIds: ["cap-grc-workflow", "cap-ai-telemetry", "cap-ai-observability"],
  },
];

export const ACTION_PACK_BY_RECOMMENDATION: Record<string, ActionPackDefinition> =
  Object.fromEntries(ACTION_PACKS.map((pack) => [pack.recommendationId, pack]));

export type StackBucket = "use-existing" | "extend" | "evaluate";

export type ResolvedCapability = TechnologyCapability & { bucket: StackBucket };

export type ResolvedActionPack = {
  recommendationId: string;
  domain: AsraDomainId;
  priority: Priority;
  priorityScore: number;
  horizon: Horizon;
  targetMaturity: number;
  effort: Effort;
  businessImpact: BusinessImpactLevel;
  urgency: Urgency;
  tasks: ActionPackTask[];
  kpis: ActionPackKpi[];
  dependencyCount: number;
  capabilities: ResolvedCapability[];
  categories: string[];
  exampleProviders: string[];
};

function raise(level: BusinessImpactLevel): BusinessImpactLevel {
  return level === "Low" ? "Medium" : "High";
}

function resolveUrgency(recommendation: AsraRecommendation, context: AssessmentContext): Urgency {
  const highContext = context.exposure >= 70 || context.businessImpact >= 70 || context.autonomy >= 4;
  if (recommendation.priority === "Critical") return "Immediate";
  if (recommendation.priority === "High" && (recommendation.horizon === "NOW" || highContext)) {
    return "Immediate";
  }
  if (recommendation.horizon === "SCALE" && recommendation.priority === "Medium") return "Strategic";
  return "Near-term";
}

function bucketFor(capability: TechnologyCapability, platforms: string[]): StackBucket {
  if (!platforms.length) return "evaluate";
  if (capability.exampleProviders.some((provider) => platforms.includes(provider))) {
    return "use-existing";
  }
  if (platforms.some((platform) => BROAD_PLATFORMS.includes(platform))) return "extend";
  return "evaluate";
}

/**
 * Enriches an already-triggered recommendation. Context and selected platforms
 * only affect presentation (urgency, business impact framing, stack advice) —
 * never scores, weights or triggers.
 */
export function resolveActionPack(
  recommendation: AsraRecommendation,
  context: AssessmentContext,
  platforms: string[] = [],
): ResolvedActionPack | null {
  const definition = ACTION_PACK_BY_RECOMMENDATION[recommendation.id];
  if (!definition) return null;

  const businessImpact =
    context.businessImpact >= 70 || context.resilienceDependency >= 70
      ? raise(definition.baseBusinessImpact)
      : definition.baseBusinessImpact;

  const capabilities: ResolvedCapability[] = definition.capabilityIds
    .map((id) => TECHNOLOGY_CAPABILITY_BY_ID[id])
    .filter((item): item is TechnologyCapability => !!item)
    .map((item) => ({ ...item, bucket: bucketFor(item, platforms) }));

  return {
    recommendationId: recommendation.id,
    domain: definition.domain,
    priority: recommendation.priority,
    priorityScore: recommendation.priorityScore,
    horizon: recommendation.horizon,
    targetMaturity: recommendation.targetMaturity,
    effort: definition.baseEffort,
    businessImpact,
    urgency: resolveUrgency(recommendation, context),
    tasks: definition.tasks,
    kpis: definition.kpis,
    dependencyCount: definition.dependencyCount,
    capabilities,
    categories: Array.from(new Set(capabilities.map((item) => item.category))),
    exampleProviders: Array.from(
      new Set(capabilities.flatMap((item) => item.exampleProviders)),
    ),
  };
}

export function resolveActionPacks(
  recommendations: AsraRecommendation[],
  context: AssessmentContext,
  platforms: string[] = [],
): ResolvedActionPack[] {
  return recommendations
    .map((recommendation) => resolveActionPack(recommendation, context, platforms))
    .filter((pack): pack is ResolvedActionPack => pack !== null);
}

export type QuarterPhase = "0-30" | "31-60" | "61-90";

export type QuarterItem = {
  taskId: string;
  recommendationId: string;
  priorityScore: number;
};

/**
 * Consolidates the highest-priority triggered packs into a quarterly plan.
 * Tasks are de-duplicated by task id so overlapping recommendations do not
 * repeat the same work.
 */
export function buildNinetyDayPlan(
  packs: ResolvedActionPack[],
  limitPerPhase = 8,
): Record<QuarterPhase, QuarterItem[]> {
  const phaseMap: Record<ActionPhase, QuarterPhase> = {
    "7d": "0-30",
    "30d": "0-30",
    "60d": "31-60",
    "90d": "61-90",
  };
  const seen = new Set<string>();
  const plan: Record<QuarterPhase, QuarterItem[]> = { "0-30": [], "31-60": [], "61-90": [] };

  for (const pack of [...packs].sort((a, b) => b.priorityScore - a.priorityScore)) {
    for (const task of pack.tasks) {
      if (seen.has(task.id)) continue;
      seen.add(task.id);
      plan[phaseMap[task.phase]].push({
        taskId: task.id,
        recommendationId: pack.recommendationId,
        priorityScore: pack.priorityScore,
      });
    }
  }

  return {
    "0-30": plan["0-30"].slice(0, limitPerPhase),
    "31-60": plan["31-60"].slice(0, limitPerPhase),
    "61-90": plan["61-90"].slice(0, limitPerPhase),
  };
}
