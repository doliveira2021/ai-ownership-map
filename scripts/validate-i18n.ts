import { ASRA_FRAMEWORK_BASIS } from "../src/lib/asra-framework-basis";
import { ASRA_PILOT_SCENARIOS } from "../src/lib/asra-pilot-data";
import { ASRA_QUESTIONS } from "../src/lib/asra-question-data";
import { ASRA_RECOMMENDATION_TEMPLATES } from "../src/lib/asra-recommendations";
import { ASRA_DOMAINS } from "../src/lib/asra-question-data";
import { LOCALE_CONTENT, LOCALE_UI } from "../src/lib/i18n";
import { enContent } from "../src/lib/i18n/content/en";
import { enUi } from "../src/lib/i18n/ui/en";
import { LOCALES, type Locale } from "../src/lib/i18n/types";

const errors: string[] = [];

function check(condition: unknown, message: string) {
  if (!condition) errors.push(message);
}

const questionIds = ASRA_QUESTIONS.map((question) => question.id);
const domainIds = ASRA_DOMAINS.map((domain) => domain.id);
const scenarioIds = ASRA_PILOT_SCENARIOS.map((scenario) => scenario.id);
const recommendationIds = ASRA_RECOMMENDATION_TEMPLATES.map((template) => template.id);
const uiKeys = Object.keys(enUi);
const levelKinds = Object.keys(enContent.levels) as (keyof typeof enContent.levels)[];

check(questionIds.length === 60, `Expected 60 ASRA questions; got ${questionIds.length}.`);

for (const locale of LOCALES as readonly Locale[]) {
  const content = LOCALE_CONTENT[locale];
  const ui = LOCALE_UI[locale];

  for (const key of uiKeys) {
    const value = (ui as Record<string, string>)[key];
    check(typeof value === "string" && value.trim().length > 0, `[${locale}] Missing UI key: ${key}`);
  }

  for (const id of domainIds) {
    const domain = content.domains[id];
    check(!!domain?.short && !!domain?.name && !!domain?.intent, `[${locale}] Incomplete domain: ${id}`);
  }

  for (const id of questionIds) {
    const question = content.questions[id];
    check(!!question?.title && !!question?.prompt, `[${locale}] Incomplete question content: ${id}`);

    const descriptions = content.maturity[id];
    check(
      Array.isArray(descriptions) &&
        descriptions.length === 6 &&
        descriptions.every((text) => typeof text === "string" && text.trim().length > 0),
      `[${locale}] Question ${id} must define six maturity descriptions (0–5).`,
    );
  }

  check(
    content.maturityLabels.length === 6 && content.maturityLabels.every((label) => label.trim().length > 0),
    `[${locale}] Six generic maturity labels are required.`,
  );

  for (const id of scenarioIds) {
    const scenario = content.scenarios[id];
    check(
      !!scenario?.name && !!scenario?.shortName && !!scenario?.description,
      `[${locale}] Incomplete pilot scenario: ${id}`,
    );
  }

  for (const id of recommendationIds) {
    const recommendation = content.recommendations[id];
    check(
      !!recommendation?.title && !!recommendation?.risk && !!recommendation?.action,
      `[${locale}] Incomplete recommendation: ${id}`,
    );
    check(
      (recommendation?.suggestedOwners.length ?? 0) > 0 && (recommendation?.evidence.length ?? 0) > 0,
      `[${locale}] Recommendation ${id} must define owners and evidence.`,
    );
  }

  for (const kind of levelKinds) {
    for (const key of Object.keys(enContent.levels[kind])) {
      check(
        typeof content.levels[kind][key] === "string" && content.levels[kind][key]!.trim().length > 0,
        `[${locale}] Missing ${kind} level label: ${key}`,
      );
    }
  }

  check(
    content.landing.areas.length === enContent.landing.areas.length,
    `[${locale}] Landing accountability areas must match the English count.`,
  );
  check(
    content.landing.roles.length === enContent.landing.roles.length,
    `[${locale}] Landing agent roles must match the English count.`,
  );
  for (const id of Object.keys(enContent.landing.legacyDomains)) {
    const domain = content.landing.legacyDomains[id];
    check(!!domain?.short && !!domain?.name && !!domain?.intent, `[${locale}] Incomplete landing domain: ${id}`);
  }
}

// Framework-grounding (methodology layer) validation
const METHOD_KEYS = [
  "method.eyebrow",
  "method.title",
  "method.body",
  "method.genaiProfile",
  "method.how.title",
  "method.point.notSingle",
  "method.point.synthesis",
  "method.point.traceability",
  "method.point.practicesSeparate",
  "method.point.technologySeparate",
  "method.disclaimer",
  "method.assessmentDisclaimer",
];

const REQUIRED_FRAMEWORKS = [
  "NIST AI RMF",
  "NIST GenAI Profile",
  "NIST CSF",
  "ISO/IEC 42001",
  "ISO/IEC 27001",
  "CSA AICM",
  "MITRE ATLAS",
  "OWASP GenAI",
  "OWASP Agentic",
];

const visibleFrameworks = ASRA_FRAMEWORK_BASIS.map((entry) => entry.name);
for (const name of REQUIRED_FRAMEWORKS) {
  check(visibleFrameworks.includes(name), `Framework grounding list must include: ${name}`);
}
check(
  ASRA_FRAMEWORK_BASIS.some((entry) => /CSA AI Controls Matrix/.test(entry.longName)),
  "CSA AICM must expose its official long name (CSA AI Controls Matrix).",
);
check(
  ASRA_FRAMEWORK_BASIS.some((entry) => /NIST AI 600-1/.test(entry.longName)),
  "NIST GenAI Profile must expose its official long name (NIST AI 600-1).",
);

const FORBIDDEN_CLAIMS = [
  /certified/i,
  /compliant with/i,
  /validated by/i,
  /endorsed by/i,
  /certificad[oa]/i,
  /avalad[oa] por/i,
  /validad[oa] por/i,
  /em conformidade com/i,
];

for (const locale of LOCALES as readonly Locale[]) {
  const ui = LOCALE_UI[locale] as Record<string, string>;
  for (const key of METHOD_KEYS) {
    const value = ui[key];
    check(
      typeof value === "string" && value.trim().length > 0,
      `[${locale}] Missing framework-grounding key: ${key}`,
    );
    for (const pattern of FORBIDDEN_CLAIMS) {
      check(
        !pattern.test(value ?? ""),
        `[${locale}] Methodology copy must not claim ${pattern} (${key}).`,
      );
    }
  }
  check(
    /certification/i.test(ui["method.disclaimer"] ?? "") ||
      /certifica/i.test(ui["method.disclaimer"] ?? ""),
    `[${locale}] method.disclaimer must state it is not a certification.`,
  );
  check(
    (ui["method.point.practicesSeparate"] ?? "").length > 0 &&
      (ui["method.point.technologySeparate"] ?? "").length > 0,
    `[${locale}] Industry Practice and Technology Options must be described as separate layers.`,
  );
}

if (errors.length) {
  console.error(`i18n validation failed with ${errors.length} issue(s):`);
  for (const error of errors.slice(0, 50)) console.error(` - ${error}`);
  process.exit(1);
}

console.log(`i18n validation passed for locales: ${LOCALES.join(", ")}.`);
