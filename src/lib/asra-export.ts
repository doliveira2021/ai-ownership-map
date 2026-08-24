/**
 * Local Action Tracker export.
 *
 * The whole package is generated in the browser from the current assessment
 * results. There is no backend call, and nothing produced here is ever sent
 * back to ASRA.
 */

import {
  ACTION_PACK_VERSION,
  type ActionPhase,
  type ResolvedActionPack,
} from "./asra-action-packs";
import type { AsraRecommendation } from "./asra-recommendations";
import {
  TECHNOLOGY_CATALOG_LAST_REVIEWED,
  TECHNOLOGY_CATALOG_VERSION,
} from "./asra-technology-catalog";
import type { AssessmentContext } from "./asra-scoring";
import type { Locale } from "./i18n/types";

export type ExportTranslator = {
  t: (key: string, params?: Record<string, string | number>) => string;
  recommendation: (id: string) => {
    title: string;
    risk: string;
    action: string;
    suggestedOwners: string[];
    evidence: string[];
  };
  actionPack: (id: string) => { whyItMatters: string; dependencies: string[] } | undefined;
  task: (recommendationId: string, taskId: string) => string;
  kpi: (recommendationId: string, kpiId: string) => string;
  domain: (id: string) => { short: string; name: string };
  technologyCategory: (id: string) => string;
  capability: (id: string) => { description: string; notes: string };
};

export type TrackerAction = {
  actionId: string;
  recommendationId: string;
  domain: string;
  priority: string;
  priorityScore: number;
  title: string;
  whyItMatters: string;
  targetMaturity: number;
  horizon: string;
  effort: string;
  businessImpact: string;
  urgency: string;
  ownerRoles: string[];
  tasks: {
    id: string;
    description: string;
    phase: ActionPhase;
    status: string;
    owner: string;
    dueDate: string | null;
    percentComplete: number;
    dependencies: string[];
    blockers: string[];
    evidenceRefs: string[];
  }[];
  kpis: {
    id: string;
    name: string;
    baseline: number | null;
    target: number | null;
    current: number | null;
    unit: string;
    reviewCadence: string;
  }[];
  evidenceRequirements: string[];
  technologyCapabilities: string[];
  technologyCategories: string[];
  exampleProviders: string[];
  localNotes: string;
  localTicketIds: string[];
  lastReviewed: string | null;
  nextReview: string | null;
};

export type TrackerDocument = {
  schemaVersion: string;
  generatedAt: string;
  locale: Locale;
  source: {
    framework: "ASRA";
    actionPackVersion: string;
    technologyCatalogVersion: string;
    technologyCatalogLastReviewed: string;
  };
  assessmentContext: AssessmentContext;
  disclaimer: string;
  privacy: string[];
  actions: TrackerAction[];
};

export const TRACKER_SCHEMA_VERSION = "1.0.0";

export const TRACKER_STATUSES = [
  "Not Started",
  "In Progress",
  "Blocked",
  "Complete",
  "Accepted Risk",
  "Deferred",
] as const;

export const TRACKER_FILES = [
  "README.md",
  "SKILL.md",
  "actions.json",
  "action-schema.json",
  "weekly-review-template.md",
  "executive-status-template.md",
  "evidence-index-template.md",
  "privacy.md",
] as const;

export type TrackerFileName = (typeof TRACKER_FILES)[number];

function bullets(items: string[]): string {
  return items.map((item) => `- ${item}`).join("\n");
}

export function buildTrackerActions(
  packs: ResolvedActionPack[],
  recommendations: AsraRecommendation[],
  tr: ExportTranslator,
): TrackerAction[] {
  const byId = new Map(recommendations.map((item) => [item.id, item]));

  return packs.map((pack) => {
    const recommendation = byId.get(pack.recommendationId);
    const localized = tr.recommendation(pack.recommendationId);
    const packContent = tr.actionPack(pack.recommendationId);

    return {
      actionId: `ACT-${pack.recommendationId}`,
      recommendationId: pack.recommendationId,
      domain: pack.domain,
      priority: pack.priority,
      priorityScore: pack.priorityScore,
      title: localized.title,
      whyItMatters: packContent?.whyItMatters ?? localized.risk,
      targetMaturity: pack.targetMaturity,
      horizon: pack.horizon,
      effort: pack.effort,
      businessImpact: pack.businessImpact,
      urgency: pack.urgency,
      ownerRoles: localized.suggestedOwners,
      tasks: pack.tasks.map((task) => ({
        id: task.id,
        description: tr.task(pack.recommendationId, task.id),
        phase: task.phase,
        status: "Not Started",
        owner: "",
        dueDate: null,
        percentComplete: 0,
        dependencies: task.phase === "7d" ? (packContent?.dependencies ?? []) : [],
        blockers: [],
        evidenceRefs: [],
      })),
      kpis: pack.kpis.map((kpi) => ({
        id: kpi.id,
        name: tr.kpi(pack.recommendationId, kpi.id),
        baseline: null,
        target: null,
        current: null,
        unit: kpi.unit,
        reviewCadence: "monthly",
      })),
      evidenceRequirements: localized.evidence,
      technologyCapabilities: pack.capabilities.map((item) => item.capabilityId),
      technologyCategories: pack.categories.map((id) => tr.technologyCategory(id)),
      exampleProviders: pack.exampleProviders,
      localNotes: "",
      localTicketIds: [],
      lastReviewed: null,
      nextReview: null,
    } satisfies TrackerAction;
  });
}

function readme(doc: TrackerDocument, tr: ExportTranslator): string {
  const contextLines = [
    `- exposure: ${doc.assessmentContext.exposure}`,
    `- autonomy: ${doc.assessmentContext.autonomy}`,
    `- businessImpact: ${doc.assessmentContext.businessImpact}`,
    `- resilienceDependency: ${doc.assessmentContext.resilienceDependency}`,
    `- usesAgents: ${doc.assessmentContext.usesAgents}`,
    `- usesGenAI: ${doc.assessmentContext.usesGenAI}`,
  ].join("\n");

  return `# ${tr.t("tracker.readme.title")}

${tr.t("tracker.readme.intro")}

${tr.t("tracker.generated", { date: doc.generatedAt, locale: doc.locale })}

## ${tr.t("tracker.readme.howTitle")}

${bullets([1, 2, 3, 4, 5].map((n) => tr.t(`tracker.readme.how${n}`)))}

## ${tr.t("tracker.readme.filesTitle")}

${bullets([...TRACKER_FILES])}

## ${tr.t("tracker.readme.contextTitle")}

${contextLines}

## ${tr.t("tracker.privacy.title")}

${bullets([1, 2, 3, 4].map((n) => tr.t(`tracker.privacy.p${n}`)))}

---

${doc.disclaimer}
`;
}

function skill(doc: TrackerDocument, tr: ExportTranslator): string {
  return `---
name: asra-local-action-tracker
description: ${tr.t("tracker.skill.title")}
---

# ${tr.t("tracker.skill.title")}

${tr.t("tracker.skill.purpose")}

## ${tr.t("tracker.skill.rulesTitle")}

${bullets(Array.from({ length: 12 }, (_, i) => tr.t(`tracker.skill.r${i + 1}`)))}

## Status values

${bullets([...TRACKER_STATUSES])}

## ${tr.t("tracker.skill.outputsTitle")}

${bullets([1, 2, 3, 4, 5].map((n) => tr.t(`tracker.skill.o${n}`)))}

## ${tr.t("tracker.privacy.title")}

${bullets([1, 2, 3].map((n) => tr.t(`tracker.privacy.p${n}`)))}

---

Source: ASRA action packs ${doc.source.actionPackVersion}, technology catalog ${doc.source.technologyCatalogVersion}.
${doc.disclaimer}
`;
}

function privacyDoc(doc: TrackerDocument, tr: ExportTranslator): string {
  return `# ${tr.t("tracker.privacy.title")}

${[1, 2, 3, 4].map((n) => tr.t(`tracker.privacy.p${n}`)).join("\n\n")}

---

${doc.disclaimer}
`;
}

function template(title: string, sections: string[]): string {
  return `# ${title}

${sections.map((section) => `## ${section}\n\n- \n`).join("\n")}`;
}

function evidenceTemplate(tr: ExportTranslator): string {
  const headers = [1, 2, 3, 4, 5].map((n) => tr.t(`tracker.evidence.s${n}`));
  return `# ${tr.t("tracker.evidence.title")}

| ${headers.join(" | ")} |
| ${headers.map(() => "---").join(" | ")} |
|${headers.map(() => "  ").join("|")}|
`;
}

const ACTION_SCHEMA = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  title: "ASRA Local Action Tracker",
  type: "object",
  required: ["schemaVersion", "generatedAt", "locale", "source", "actions"],
  properties: {
    schemaVersion: { type: "string" },
    generatedAt: { type: "string" },
    locale: { type: "string" },
    source: { type: "object" },
    assessmentContext: { type: "object" },
    disclaimer: { type: "string" },
    privacy: { type: "array", items: { type: "string" } },
    actions: {
      type: "array",
      items: {
        type: "object",
        required: ["actionId", "recommendationId", "domain", "priority", "title", "tasks", "kpis"],
        properties: {
          actionId: { type: "string" },
          recommendationId: { type: "string" },
          domain: { type: "string" },
          priority: { type: "string" },
          priorityScore: { type: "number" },
          title: { type: "string" },
          whyItMatters: { type: "string" },
          targetMaturity: { type: "number" },
          horizon: { type: "string", enum: ["NOW", "NEXT", "SCALE"] },
          effort: { type: "string", enum: ["Low", "Medium", "High"] },
          businessImpact: { type: "string", enum: ["Low", "Medium", "High"] },
          urgency: { type: "string", enum: ["Immediate", "Near-term", "Strategic"] },
          ownerRoles: { type: "array", items: { type: "string" } },
          tasks: {
            type: "array",
            items: {
              type: "object",
              required: ["id", "description", "phase", "status"],
              properties: {
                id: { type: "string" },
                description: { type: "string" },
                phase: { type: "string", enum: ["7d", "30d", "60d", "90d"] },
                status: { type: "string", enum: [...TRACKER_STATUSES] },
                owner: { type: "string" },
                dueDate: { type: ["string", "null"] },
                percentComplete: { type: "number", minimum: 0, maximum: 100 },
                dependencies: { type: "array", items: { type: "string" } },
                blockers: { type: "array", items: { type: "string" } },
                evidenceRefs: { type: "array", items: { type: "string" } },
              },
            },
          },
          kpis: {
            type: "array",
            items: {
              type: "object",
              required: ["id", "name", "unit"],
              properties: {
                id: { type: "string" },
                name: { type: "string" },
                baseline: { type: ["number", "null"] },
                target: { type: ["number", "null"] },
                current: { type: ["number", "null"] },
                unit: { type: "string" },
                reviewCadence: { type: "string" },
              },
            },
          },
          evidenceRequirements: { type: "array", items: { type: "string" } },
          technologyCapabilities: { type: "array", items: { type: "string" } },
          technologyCategories: { type: "array", items: { type: "string" } },
          exampleProviders: { type: "array", items: { type: "string" } },
          localNotes: { type: "string" },
          localTicketIds: { type: "array", items: { type: "string" } },
          lastReviewed: { type: ["string", "null"] },
          nextReview: { type: ["string", "null"] },
        },
      },
    },
  },
} as const;

export function buildTrackerPackage(args: {
  packs: ResolvedActionPack[];
  recommendations: AsraRecommendation[];
  context: AssessmentContext;
  locale: Locale;
  tr: ExportTranslator;
  now?: Date;
}): Record<TrackerFileName, string> {
  const { packs, recommendations, context, locale, tr } = args;
  const generatedAt = (args.now ?? new Date()).toISOString().slice(0, 10);

  const doc: TrackerDocument = {
    schemaVersion: TRACKER_SCHEMA_VERSION,
    generatedAt,
    locale,
    source: {
      framework: "ASRA",
      actionPackVersion: ACTION_PACK_VERSION,
      technologyCatalogVersion: TECHNOLOGY_CATALOG_VERSION,
      technologyCatalogLastReviewed: TECHNOLOGY_CATALOG_LAST_REVIEWED,
    },
    assessmentContext: context,
    disclaimer: tr.t("pack.tech.disclaimer"),
    privacy: [1, 2, 3, 4].map((n) => tr.t(`tracker.privacy.p${n}`)),
    actions: buildTrackerActions(packs, recommendations, tr),
  };

  return {
    "README.md": readme(doc, tr),
    "SKILL.md": skill(doc, tr),
    "actions.json": `${JSON.stringify(doc, null, 2)}\n`,
    "action-schema.json": `${JSON.stringify(ACTION_SCHEMA, null, 2)}\n`,
    "weekly-review-template.md": template(
      tr.t("tracker.weekly.title"),
      [1, 2, 3, 4, 5, 6].map((n) => tr.t(`tracker.weekly.s${n}`)),
    ),
    "executive-status-template.md": template(
      tr.t("tracker.exec.title"),
      [1, 2, 3, 4, 5, 6].map((n) => tr.t(`tracker.exec.s${n}`)),
    ),
    "evidence-index-template.md": evidenceTemplate(tr),
    "privacy.md": privacyDoc(doc, tr),
  };
}

/** Browser-only. Builds the ZIP and triggers a download. No network calls. */
export async function downloadTrackerPackage(
  files: Record<string, string>,
  fileName = "asra-local-action-tracker.zip",
): Promise<void> {
  const { default: JSZip } = await import("jszip");
  const zip = new JSZip();
  for (const [name, contents] of Object.entries(files)) zip.file(name, contents);
  const blob = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}
