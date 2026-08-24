import {
  ASRA_INDUSTRY_PRACTICES,
  ASRA_INDUSTRY_PRACTICES_VERSION,
  PRACTICE_CATEGORY_IDS,
} from "../src/lib/asra-industry-practices";
import { ASRA_DOMAINS } from "../src/lib/asra-question-data";
import { ASRA_RECOMMENDATION_TEMPLATES } from "../src/lib/asra-recommendations";
import { LOCALE_CONTENT, LOCALE_UI } from "../src/lib/i18n";
import { LOCALES, type Locale } from "../src/lib/i18n/types";

const errors: string[] = [];
const check = (condition: unknown, message: string) => {
  if (!condition) errors.push(message);
};

const LINKEDIN_URL = "https://www.linkedin.com/in/diegosilvaoliveira/";
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

const domainIds = new Set(ASRA_DOMAINS.map((domain) => domain.id));
const recommendationIds = new Set(ASRA_RECOMMENDATION_TEMPLATES.map((template) => template.id));
const categoryIds = new Set<string>(PRACTICE_CATEGORY_IDS);

check(
  /^\d{4}\.\d{2}$/.test(ASRA_INDUSTRY_PRACTICES_VERSION),
  `Invalid practice catalog version: ${ASRA_INDUSTRY_PRACTICES_VERSION}`,
);
check(
  ASRA_INDUSTRY_PRACTICES.length === 11,
  `Expected 11 industry practice entries; got ${ASRA_INDUSTRY_PRACTICES.length}.`,
);

const seen = new Set<string>();
for (const practice of ASRA_INDUSTRY_PRACTICES) {
  const id = practice.practiceId;
  check(!seen.has(id), `Duplicate practice ID: ${id}`);
  seen.add(id);

  check(practice.organizations.length > 0, `[${id}] Missing organization.`);
  check(
    practice.organizations.every((org) => org.trim().length > 0),
    `[${id}] Empty organization name.`,
  );
  check(categoryIds.has(practice.practiceCategory), `[${id}] Invalid category.`);
  check(
    practice.sourceUrl.startsWith("https://"),
    `[${id}] Public source URL must be HTTPS.`,
  );
  check(practice.sourceTitle.trim().length > 0, `[${id}] Missing source title.`);
  check(ISO_DATE.test(practice.sourceDate), `[${id}] Invalid source date.`);
  check(ISO_DATE.test(practice.lastReviewed), `[${id}] Invalid last-reviewed date.`);
  check(
    practice.relatedDomains.length > 0 || practice.relatedRecommendationIds.length > 0,
    `[${id}] At least one related ASRA domain or recommendation is required.`,
  );
  for (const domain of practice.relatedDomains) {
    check(domainIds.has(domain), `[${id}] Unknown related domain: ${domain}`);
  }
  for (const recommendation of practice.relatedRecommendationIds) {
    check(recommendationIds.has(recommendation), `[${id}] Unknown recommendation: ${recommendation}`);
  }
}

// Industry practices must remain presentation-only: no scoring surfaces may import them.
const scoringModules = [
  "src/lib/asra-scoring.ts",
  "src/lib/asra-recommendations.ts",
  "src/lib/asra-config.ts",
  "src/lib/asra-action-packs.ts",
];
for (const file of scoringModules) {
  const source = await Bun.file(file).text();
  check(
    !source.includes("asra-industry-practices"),
    `${file} must not import the industry practice catalog (presentation-only).`,
  );
}

const NO_ENDORSEMENT_TERMS: Record<Locale, string[]> = {
  en: ["standard", "certification", "endorsement", "ranking"],
  "pt-BR": ["norma", "certificação", "endosso", "ranking"],
  es: ["norma", "certificación", "respaldo", "ranking"],
};

for (const locale of LOCALES as readonly Locale[]) {
  const content = LOCALE_CONTENT[locale];
  const ui = LOCALE_UI[locale] as Record<string, string>;

  for (const categoryId of PRACTICE_CATEGORY_IDS) {
    const label = content.practices.categories[categoryId];
    check(!!label?.trim(), `[${locale}] Missing practice category label: ${categoryId}`);
  }

  for (const practice of ASRA_INDUSTRY_PRACTICES) {
    const entry = content.practices.entries[practice.practiceId];
    check(
      !!entry?.title?.trim() && !!entry?.summary?.trim() && !!entry?.implication?.trim(),
      `[${locale}] Incomplete practice content: ${practice.practiceId}`,
    );
  }

  const requiredKeys = [
    "practices.eyebrow",
    "practices.title",
    "practices.lead",
    "practices.disclaimer",
    "practices.category",
    "practices.organization",
    "practices.publicPractice",
    "practices.implication",
    "practices.related",
    "practices.sourceDate",
    "practices.lastReviewed",
    "practices.viewSource",
    "practices.viewDetails",
    "practices.hideDetails",
    "practices.viewMore",
    "practices.viewLess",
    "practices.version",
    "footer.author.prefix",
    "footer.author.name",
    "footer.author.linkLabel",
    "footer.author.body",
  ];
  for (const key of requiredKeys) {
    check(!!ui[key]?.trim(), `[${locale}] Missing UI key: ${key}`);
  }

  const disclaimer = (ui["practices.disclaimer"] ?? "").toLowerCase();
  for (const term of NO_ENDORSEMENT_TERMS[locale]) {
    check(
      disclaimer.includes(term.toLowerCase()),
      `[${locale}] Practice disclaimer must disclaim "${term}".`,
    );
  }

  check(
    (ui["footer.author.name"] ?? "").includes("Diego Oliveira"),
    `[${locale}] Footer authorship disclosure must name Diego Oliveira.`,
  );
  check(
    (ui["footer.author.body"] ?? "").length > 80,
    `[${locale}] Footer independence disclosure is missing or too short.`,
  );
}

const shell = await Bun.file("src/components/shell.tsx").text();
check(shell.includes(LINKEDIN_URL), `Footer must link exactly to ${LINKEDIN_URL}`);
check(
  shell.includes('rel="noopener noreferrer"') && shell.includes('target="_blank"'),
  "Footer LinkedIn link must use target=_blank and rel=noopener noreferrer.",
);

const section = await Bun.file("src/components/industry-practices.tsx").text();
check(
  section.includes('target="_blank"') && section.includes('rel="noopener noreferrer"'),
  "Practice source links must use target=_blank and rel=noopener noreferrer.",
);

if (errors.length) {
  console.error(`Industry practice validation failed with ${errors.length} issue(s):`);
  for (const error of errors.slice(0, 50)) console.error(` - ${error}`);
  process.exit(1);
}

console.log(
  `Industry practice validation passed: ${ASRA_INDUSTRY_PRACTICES.length} entries, catalog ${ASRA_INDUSTRY_PRACTICES_VERSION}, locales ${LOCALES.join(", ")}.`,
);
