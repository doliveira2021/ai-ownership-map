import type { AsraDomainId } from "@/lib/asra-config";
import type { AsraPilotScenarioId } from "@/lib/asra-pilot-data";
import type { ActionsBundle } from "./actions/types";

export const LOCALES = ["en", "pt-BR", "es"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  "pt-BR": "PT-BR",
  es: "ES",
};

export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  "pt-BR": "Português (Brasil)",
  es: "Español",
};

export const HTML_LANG: Record<Locale, string> = {
  en: "en",
  "pt-BR": "pt-BR",
  es: "es",
};

/** Six ordered descriptions for maturity levels 0–5. */
export type MaturitySix = [string, string, string, string, string, string];

export type DomainContentDict = Record<
  AsraDomainId,
  { short: string; name: string; intent: string }
>;

export type QuestionContentDict = Record<string, { title: string; prompt: string }>;

export type MaturityDescriptionDict = Record<string, MaturitySix>;

export type ScenarioContentDict = Record<
  AsraPilotScenarioId,
  { name: string; shortName: string; description: string }
>;

export type RecommendationContentDict = Record<
  string,
  {
    title: string;
    risk: string;
    action: string;
    suggestedOwners: string[];
    evidence: string[];
  }
>;

/**
 * Interpretation labels. Keys are the canonical English strings returned by the
 * scoring engine, so scoring logic stays identical across locales.
 */
export type LevelContentDict = {
  maturity: Record<string, string>;
  exposure: Record<string, string>;
  autonomy: Record<string, string>;
  quadrant: Record<string, string>;
  priority: Record<string, string>;
  horizon: Record<string, string>;
};

export type LandingContent = {
  areas: string[];
  roles: { role: string; detail: string }[];
  legacyDomains: Record<string, { short: string; name: string; intent: string }>;
};

export type ContentBundle = {
  domains: DomainContentDict;
  questions: QuestionContentDict;
  maturity: MaturityDescriptionDict;
  maturityLabels: MaturitySix;
  scenarios: ScenarioContentDict;
  recommendations: RecommendationContentDict;
  levels: LevelContentDict;
  landing: LandingContent;
  actionPacks: ActionsBundle["actionPacks"];
  technology: ActionsBundle["technology"];
};

export type UiDict = Record<string, string>;
