import { readFileSync } from "node:fs";
import {
  ACTION_PACK_VERSION,
  ACTION_PACKS,
  ACTION_PHASES,
  resolveActionPacks,
  buildNinetyDayPlan,
} from "../src/lib/asra-action-packs";
import { ASRA_RECOMMENDATION_TEMPLATES } from "../src/lib/asra-recommendations";
import {
  TECHNOLOGY_CAPABILITY_BY_ID,
  TECHNOLOGY_CATEGORY_IDS,
} from "../src/lib/asra-technology-catalog";
import { buildTrackerPackage, TRACKER_FILES } from "../src/lib/asra-export";
import { ASRA_INDUSTRY_PRACTICES_VERSION } from "../src/lib/asra-industry-practices";
import { LOCALE_CONTENT, LOCALE_UI } from "../src/lib/i18n";
import { LOCALES, type Locale } from "../src/lib/i18n/types";
import { defaultAssessmentContext } from "../src/lib/assessment-store";
import type { AsraRecommendation } from "../src/lib/asra-recommendations";

const errors: string[] = [];
const check = (condition: unknown, message: string) => {
  if (!condition) errors.push(message);
};

// 1. Every recommendation family has a complete action pack.
check(
  ACTION_PACKS.length === ASRA_RECOMMENDATION_TEMPLATES.length,
  `Expected one action pack per recommendation family; got ${ACTION_PACKS.length}.`,
);

for (const template of ASRA_RECOMMENDATION_TEMPLATES) {
  const pack = ACTION_PACKS.find((item) => item.recommendationId === template.id);
  check(!!pack, `Missing action pack for ${template.id}.`);
  if (!pack) continue;

  for (const phase of ACTION_PHASES) {
    check(
      pack.tasks.some((task) => task.phase === phase),
      `${template.id}: no tasks defined for phase ${phase}.`,
    );
  }
  check(pack.kpis.length >= 3, `${template.id}: at least three KPIs/KRIs are required.`);
  check(pack.dependencyCount > 0, `${template.id}: dependencies are required.`);
  check(pack.capabilityIds.length > 0, `${template.id}: technology capabilities are required.`);
  for (const capabilityId of pack.capabilityIds) {
    check(
      !!TECHNOLOGY_CAPABILITY_BY_ID[capabilityId],
      `${template.id}: unknown capability ${capabilityId}.`,
    );
  }
}

// 2. Localized action-pack content is complete for every locale.
for (const locale of LOCALES as readonly Locale[]) {
  const content = LOCALE_CONTENT[locale];
  const ui = LOCALE_UI[locale] as Record<string, string>;

  for (const pack of ACTION_PACKS) {
    const localized = content.actionPacks[pack.recommendationId];
    check(!!localized, `[${locale}] Missing action pack content for ${pack.recommendationId}.`);
    if (!localized) continue;

    check(
      localized.whyItMatters.trim().length > 0,
      `[${locale}] ${pack.recommendationId}: whyItMatters is empty.`,
    );
    for (const task of pack.tasks) {
      check(
        (localized.tasks[task.id] ?? "").trim().length > 0,
        `[${locale}] ${pack.recommendationId}: missing task text for ${task.id}.`,
      );
    }
    for (const kpi of pack.kpis) {
      check(
        (localized.kpis[kpi.id] ?? "").trim().length > 0,
        `[${locale}] ${pack.recommendationId}: missing KPI text for ${kpi.id}.`,
      );
    }
    check(
      localized.dependencies.length === pack.dependencyCount,
      `[${locale}] ${pack.recommendationId}: expected ${pack.dependencyCount} dependencies.`,
    );
  }

  for (const categoryId of TECHNOLOGY_CATEGORY_IDS) {
    check(
      (content.technology.categories[categoryId] ?? "").trim().length > 0,
      `[${locale}] Missing technology category label: ${categoryId}.`,
    );
  }
  for (const capabilityId of Object.keys(TECHNOLOGY_CAPABILITY_BY_ID)) {
    const capability = content.technology.capabilities[capabilityId];
    check(
      !!capability?.description?.trim() && !!capability?.notes?.trim(),
      `[${locale}] Incomplete capability content: ${capabilityId}.`,
    );
  }

  // 3. Technology examples must be explicitly framed as non-endorsing examples.
  const providersLabel = (ui["pack.tech.providers"] ?? "").toLowerCase();
  check(
    /example|ejemplo|exemplo/.test(providersLabel),
    `[${locale}] pack.tech.providers must label entries as examples.`,
  );
  const disclaimer = (ui["pack.tech.disclaimer"] ?? "").toLowerCase();
  check(disclaimer.length > 80, `[${locale}] Missing technology disclaimer.`);
  check(
    /endorse|respaldo|endosso/.test(disclaimer) &&
      /ranking/.test(disclaimer) &&
      /certif/.test(disclaimer),
    `[${locale}] Technology disclaimer must deny endorsement, ranking and certification.`,
  );
}

// 4. Export package completeness (locale-aware, generated without a browser).
const recommendations: AsraRecommendation[] = ASRA_RECOMMENDATION_TEMPLATES.map((template) => ({
  id: template.id,
  domain: template.domain,
  title: template.title,
  risk: template.risk,
  action: template.action,
  suggestedOwners: template.suggestedOwners,
  evidence: template.evidence,
  targetMaturity: template.targetMaturity,
  horizon: template.defaultHorizon,
  priority: "High",
  priorityScore: 60,
  triggeredBy: template.questionIds.slice(0, 2),
}));

for (const locale of LOCALES as readonly Locale[]) {
  const content = LOCALE_CONTENT[locale];
  const ui = LOCALE_UI[locale] as Record<string, string>;
  const packs = resolveActionPacks(recommendations, defaultAssessmentContext, ["Microsoft"]);
  check(packs.length === ACTION_PACKS.length, `[${locale}] Not every pack resolved for export.`);

  const files = buildTrackerPackage({
    packs,
    recommendations,
    context: defaultAssessmentContext,
    locale,
    tr: {
      t: (key, params) =>
        Object.entries(params ?? {}).reduce<string>(
          (text, [name, value]) => text.replaceAll(`{${name}}`, String(value)),
          ui[key] ?? key,
        ),
      recommendation: (id) => content.recommendations[id]!,
      actionPack: (id) => content.actionPacks[id],
      task: (recommendationId, taskId) => content.actionPacks[recommendationId]!.tasks[taskId]!,
      kpi: (recommendationId, kpiId) => content.actionPacks[recommendationId]!.kpis[kpiId]!,
      domain: (id) => content.domains[id as keyof typeof content.domains]!,
      technologyCategory: (id) =>
        (content.technology.categories as Record<string, string>)[id] ?? id,
      capability: (id) => content.technology.capabilities[id]!,
    },
  });

  for (const file of TRACKER_FILES) {
    check((files[file] ?? "").trim().length > 0, `[${locale}] Export package is missing ${file}.`);
  }

  const doc = JSON.parse(files["actions.json"]!);
  check(
    Array.isArray(doc.actions) && doc.actions.length === packs.length,
    `[${locale}] actions.json action count mismatch.`,
  );
  for (const action of doc.actions) {
    for (const field of [
      "actionId",
      "recommendationId",
      "domain",
      "priority",
      "priorityScore",
      "title",
      "whyItMatters",
      "targetMaturity",
      "horizon",
      "effort",
      "businessImpact",
      "urgency",
      "ownerRoles",
      "tasks",
      "kpis",
      "evidenceRequirements",
      "technologyCapabilities",
      "technologyCategories",
      "exampleProviders",
      "localNotes",
      "localTicketIds",
    ]) {
      check(action[field] !== undefined, `[${locale}] ${action.actionId}: missing field ${field}.`);
    }
    check(
      "lastReviewed" in action && "nextReview" in action,
      `[${locale}] ${action.actionId}: missing review fields.`,
    );
    for (const task of action.tasks) {
      check(
        task.status === "Not Started" && task.percentComplete === 0,
        `[${locale}] ${action.actionId}: tasks must initialize as Not Started.`,
      );
    }
  }

  check(
    !JSON.stringify(files).includes("http://localhost"),
    `[${locale}] Export package must not reference ASRA endpoints.`,
  );
  check(
    files["SKILL.md"]!.includes("actions.json"),
    `[${locale}] SKILL.md must reference actions.json as source of truth.`,
  );

  const skillMd = files["SKILL.md"]!;
  check(
    skillMd.includes(ASRA_INDUSTRY_PRACTICES_VERSION),
    `[${locale}] SKILL.md must record the industry practice catalog version.`,
  );
  for (const key of [
    "tracker.skill.contextTitle",
    "tracker.skill.opTitle",
    "tracker.skill.groundTitle",
    "tracker.skill.execTitle",
    ...Array.from({ length: 7 }, (_, i) => `tracker.skill.c${i + 1}`),
    ...Array.from({ length: 6 }, (_, i) => `tracker.skill.op${i + 1}`),
    ...Array.from({ length: 6 }, (_, i) => `tracker.skill.g${i + 1}`),
    ...Array.from({ length: 3 }, (_, i) => `tracker.skill.exec${i + 1}`),
    "tracker.skill.opNote",
    "tracker.skill.execNote",
    "tracker.readme.sourceTitle",
  ]) {
    check((ui[key] ?? "").trim().length > 0, `[${locale}] Missing skill i18n key: ${key}.`);
    check(!skillMd.includes(key), `[${locale}] SKILL.md leaked untranslated key ${key}.`);
  }
  const nonScoring = ui["tracker.skill.c4"]!.replaceAll(
    "{version}",
    ASRA_INDUSTRY_PRACTICES_VERSION,
  );
  check(
    skillMd.includes(nonScoring),
    `[${locale}] SKILL.md must state the industry practice non-scoring / non-endorsement rule.`,
  );
  check(
    doc.source.industryPracticeCatalogVersion === ASRA_INDUSTRY_PRACTICES_VERSION,
    `[${locale}] actions.json source metadata must include industryPracticeCatalogVersion.`,
  );
  check(
    files["README.md"]!.includes(ASRA_INDUSTRY_PRACTICES_VERSION) &&
      files["README.md"]!.includes(ACTION_PACK_VERSION),
    `[${locale}] README.md must summarise source versions.`,
  );
  const schema = JSON.parse(files["action-schema.json"]!);
  check(
    (schema.properties?.source?.required ?? []).includes("industryPracticeCatalogVersion"),
    `[${locale}] action-schema.json must require industryPracticeCatalogVersion.`,
  );
}

// 4b. Scoring / recommendation modules must not depend on export or skill logic.
for (const file of [
  "src/lib/asra-scoring.ts",
  "src/lib/asra-recommendations.ts",
  "src/lib/scoring.ts",
  "src/lib/recommendations.ts",
]) {
  const source = readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
  check(!/from\s+"\.\/asra-export"/.test(source), `${file} must not import export/skill logic.`);
}

// 5. 90-day plan must de-duplicate tasks.
const plan = buildNinetyDayPlan(
  resolveActionPacks(recommendations, defaultAssessmentContext, []),
  50,
);
const allTaskIds = Object.values(plan).flatMap((items) => items.map((item) => item.taskId));
check(
  new Set(allTaskIds).size === allTaskIds.length,
  "The 90-day plan must not repeat the same task id.",
);

if (errors.length) {
  console.error(`Action Pack validation failed with ${errors.length} issue(s):`);
  for (const error of errors.slice(0, 50)) console.error(` - ${error}`);
  process.exit(1);
}

console.log(
  `Action Pack validation passed: ${ACTION_PACKS.length} packs, ${LOCALES.length} locales, ${TRACKER_FILES.length} export files.`,
);
