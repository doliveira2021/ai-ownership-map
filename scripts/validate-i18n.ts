import { ASRA_FRAMEWORK_BASIS, MAPPED_FRAMEWORK_NAMES, frameworkAnchor } from "../src/lib/asra-framework-basis";
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

// Framework library validation
const ALLOWED_DOMAINS = [
  "nist.gov",
  "iso.org",
  "cloudsecurityalliance.org",
  "mitre.org",
  "owasp.org",
];

check(
  ASRA_FRAMEWORK_BASIS.length === 9,
  `Framework library must expose 9 entries; got ${ASRA_FRAMEWORK_BASIS.length}.`,
);

const seenIds = new Set<string>();
for (const entry of ASRA_FRAMEWORK_BASIS) {
  check(!!entry.id && /^[a-z0-9-]+$/.test(entry.id), `Framework ${entry.name} needs a stable slug id.`);
  check(!seenIds.has(entry.id), `Duplicate framework slug: ${entry.id}`);
  seenIds.add(entry.id);
  check(!!entry.organization, `Framework ${entry.name} must declare an issuing organization.`);
  check(entry.url.startsWith("https://"), `Framework ${entry.name} must use an https official URL.`);
  let host = "";
  try {
    host = new URL(entry.url).hostname;
  } catch {
    check(false, `Framework ${entry.name} has an invalid official URL.`);
  }
  check(
    ALLOWED_DOMAINS.some((domain) => host === domain || host.endsWith(`.${domain}`)),
    `Framework ${entry.name} must link to an authoritative domain (got ${host}).`,
  );
  check(
    frameworkAnchor(entry.name) === `/frameworks#${entry.id}`,
    `Framework ${entry.name} must resolve to /frameworks#${entry.id}.`,
  );
}

for (const name of MAPPED_FRAMEWORK_NAMES) {
  check(
    ASRA_FRAMEWORK_BASIS.some((entry) => entry.name === name),
    `Mapped framework ${name} has no library entry.`,
  );
}

const LIBRARY_KEYS = [
  "nav.frameworks",
  "library.eyebrow",
  "library.title",
  "library.intro",
  "library.copyright",
  "library.disclaimer",
  "library.organization",
  "library.version",
  "library.purpose",
  "library.asraUse",
  "library.referenceType",
  "library.typeMapped",
  "library.typeStructural",
  "library.viewSource",
  "library.paywallNote",
  "library.link",
];

for (const locale of LOCALES as readonly Locale[]) {
  const ui = LOCALE_UI[locale] as Record<string, string>;
  const keys = [
    ...LIBRARY_KEYS,
    ...ASRA_FRAMEWORK_BASIS.flatMap((entry) => [
      `framework.${entry.id}.purpose`,
      `framework.${entry.id}.use`,
    ]),
  ];
  for (const key of keys) {
    const value = ui[key];
    check(
      typeof value === "string" && value.trim().length > 0,
      `[${locale}] Missing framework library key: ${key}`,
    );
    for (const pattern of FORBIDDEN_CLAIMS) {
      check(!pattern.test(value ?? ""), `[${locale}] Library copy must not claim ${pattern} (${key}).`);
    }
  }
}

// ---------------------------------------------------------------------------
// Regression guard: translated narrative copy must not be identical to English
// and the locale lookup must resolve the selected bundle (not the EN fallback).
// ---------------------------------------------------------------------------

/** Canonical technical terms / acronyms that legitimately stay identical across locales. */
const CANONICAL_IDENTICAL_UI_KEYS = new Set([
  "demo.badgeShort",
  "asra.eyebrow",
  "asra.na",
  "asra.no",
  "results.alignment.frameworkColumn",
  "results.roadmap.eyebrow",
  "results.roadmap.title",
  "pack.eyebrow",
  "pack.kpis",
  "footer.author.name",
]);

for (const locale of LOCALES as readonly Locale[]) {
  if (locale === "en") continue;
  const content = LOCALE_CONTENT[locale];
  const ui = LOCALE_UI[locale] as Record<string, string>;
  const localized = localizedContent(locale);

  for (const key of uiKeys) {
    if (CANONICAL_IDENTICAL_UI_KEYS.has(key)) continue;
    check(
      ui[key] !== (enUi as Record<string, string>)[key],
      `[${locale}] UI key ${key} is identical to English; add a real translation or allowlist it.`,
    );
  }

  for (const id of questionIds) {
    check(
      content.questions[id]?.title !== enContent.questions[id]?.title &&
        content.questions[id]?.prompt !== enContent.questions[id]?.prompt,
      `[${locale}] Question ${id} text is identical to English.`,
    );
    const descriptions = content.maturity[id] ?? [];
    const enDescriptions = enContent.maturity[id] ?? [];
    descriptions.forEach((text, index) => {
      check(
        text !== enDescriptions[index],
        `[${locale}] Maturity description ${id}[${index}] is identical to English.`,
      );
    });

    // Locale routing must return the locale bundle, not the English fallback.
    check(
      localized.question(id).title === content.questions[id]?.title,
      `[${locale}] localizedContent() did not resolve question ${id} from the ${locale} bundle.`,
    );
    check(
      localized.maturityDescriptions(id)[0] === descriptions[0],
      `[${locale}] localizedContent() did not resolve maturity ${id} from the ${locale} bundle.`,
    );
  }

  for (const id of domainIds) {
    check(
      content.domains[id]?.name !== enContent.domains[id]?.name &&
        content.domains[id]?.intent !== enContent.domains[id]?.intent,
      `[${locale}] Domain ${id} copy is identical to English.`,
    );
    check(
      localized.domain(id).name === content.domains[id]?.name,
      `[${locale}] localizedContent() did not resolve domain ${id} from the ${locale} bundle.`,
    );
  }

  for (const id of scenarioIds) {
    check(
      content.scenarios[id]?.description !== enContent.scenarios[id]?.description,
      `[${locale}] Pilot scenario ${id} description is identical to English.`,
    );
    check(
      localized.scenario(id).description === content.scenarios[id]?.description,
      `[${locale}] localizedContent() did not resolve scenario ${id} from the ${locale} bundle.`,
    );
  }

  // Answer option labels (maturity scale) must be localized and complete.
  content.maturityLabels.forEach((label, index) => {
    check(
      label !== enContent.maturityLabels[index],
      `[${locale}] Maturity label ${index} is identical to English.`,
    );
    check(
      localized.maturityLabel(index) === label,
      `[${locale}] localizedContent() did not resolve maturity label ${index}.`,
    );
  });
}

// The locale cookie helper backs SSR locale resolution; a regression here means
// the server would render English regardless of the visitor's choice.
for (const locale of LOCALES as readonly Locale[]) {
  check(
    readLocaleFromCookieString(`foo=bar; ${serializeLocaleCookie(locale).split(";")[0]}`) === locale,
    `Locale cookie round-trip failed for ${locale}.`,
  );
}
check(readLocaleFromCookieString("foo=bar") === null, "Unknown cookie must not resolve a locale.");
check(readLocaleFromCookieString("asra-locale=klingon") === null, "Invalid locale must be rejected.");

if (errors.length) {

  console.error(`i18n validation failed with ${errors.length} issue(s):`);
  for (const error of errors.slice(0, 50)) console.error(` - ${error}`);
  process.exit(1);
}

console.log(`i18n validation passed for locales: ${LOCALES.join(", ")}.`);
