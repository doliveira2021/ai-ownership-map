import { createContext, createElement, useContext, useSyncExternalStore, type ReactNode } from "react";
import type { AsraDomainId } from "@/lib/asra-config";
import type { AsraPilotScenarioId } from "@/lib/asra-pilot-data";
import { enContent } from "./content/en";
import { esContent } from "./content/es";
import { ptBrContent } from "./content/pt-BR";
import {
  LOCALE_STORAGE_KEY,
  isLocale,
  readLocaleFromCookieString,
  serializeLocaleCookie,
} from "./locale-cookie";
import { enUi, type UiKey } from "./ui/en";
import { esUi } from "./ui/es";
import { ptBrUi } from "./ui/pt-BR";
import {
  HTML_LANG,
  LOCALES,
  LOCALE_LABELS,
  LOCALE_NAMES,
  type ContentBundle,
  type LevelContentDict,
  type Locale,
  type MaturitySix,
} from "./types";

export { LOCALES, LOCALE_LABELS, LOCALE_NAMES };
export type { Locale };

const CONTENT: Record<Locale, ContentBundle> = {
  en: enContent,
  "pt-BR": ptBrContent,
  es: esContent,
};

const UI: Record<Locale, Record<UiKey, string>> = {
  en: enUi,
  "pt-BR": ptBrUi,
  es: esUi,
};

const STORAGE_KEY = LOCALE_STORAGE_KEY;

/**
 * SSR-provided locale (read from the request cookie in the root route). The
 * client store must resolve the same value during hydration, so it reads the
 * cookie first and only then falls back to localStorage.
 */
const SsrLocaleContext = createContext<Locale>("en");

export function LocaleProvider({ locale: value, children }: { locale: Locale; children: ReactNode }) {
  return createElement(SsrLocaleContext.Provider, { value }, children);
}

let locale: Locale = "en";
let hydrated = false;
const listeners = new Set<() => void>();

function detectClientLocale(): Locale {
  const fromCookie = readLocaleFromCookieString(document.cookie);
  if (fromCookie) return fromCookie;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    /* ignore */
  }
  return "en";
}

function ensureHydrated() {
  if (hydrated || typeof window === "undefined") return;
  hydrated = true;
  locale = detectClientLocale();
  document.documentElement.lang = HTML_LANG[locale];
}

function subscribe(listener: () => void) {
  ensureHydrated();
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): Locale {
  ensureHydrated();
  return locale;
}

export function setLocale(next: Locale) {
  locale = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* ignore */
  }
  if (typeof document !== "undefined") {
    document.cookie = serializeLocaleCookie(next);
    document.documentElement.lang = HTML_LANG[next];
  }
  listeners.forEach((listener) => listener());
}


function interpolate(template: string, vars?: Record<string, string | number>) {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match,
  );
}

export type Translator = (key: UiKey, vars?: Record<string, string | number>) => string;

export type LocalizedContent = {
  domain: (id: AsraDomainId | string) => { short: string; name: string; intent: string };
  question: (id: string) => { title: string; prompt: string };
  maturityDescriptions: (id: string) => MaturitySix;
  maturityLabel: (level: number) => string;
  scenario: (id: AsraPilotScenarioId) => { name: string; shortName: string; description: string };
  recommendation: (id: string) => {
    title: string;
    risk: string;
    action: string;
    suggestedOwners: string[];
    evidence: string[];
  };
  level: (kind: keyof LevelContentDict, value: string) => string;
  landing: ContentBundle["landing"];
  actionPack: (recommendationId: string) => ContentBundle["actionPacks"][string] | undefined;
  task: (recommendationId: string, taskId: string) => string;
  kpi: (recommendationId: string, kpiId: string) => string;
  technologyCategory: (categoryId: string) => string;
  capability: (capabilityId: string) => { description: string; notes: string };
  practice: (practiceId: string) => { title: string; summary: string; implication: string };
  practiceCategory: (categoryId: string) => string;
};

export function localizedContent(current: Locale): LocalizedContent {
  const bundle = CONTENT[current];
  const fallback = enContent;

  return {
    domain: (id) =>
      bundle.domains[id as AsraDomainId] ?? fallback.domains[id as AsraDomainId] ?? {
        short: String(id),
        name: String(id),
        intent: "",
      },
    question: (id) => bundle.questions[id] ?? fallback.questions[id] ?? { title: id, prompt: "" },
    maturityDescriptions: (id) =>
      bundle.maturity[id] ?? fallback.maturity[id] ?? ["", "", "", "", "", ""],
    maturityLabel: (level) =>
      bundle.maturityLabels[level] ?? fallback.maturityLabels[level] ?? String(level),
    scenario: (id) => bundle.scenarios[id] ?? fallback.scenarios[id],
    recommendation: (id) =>
      bundle.recommendations[id] ??
      fallback.recommendations[id] ?? {
        title: id,
        risk: "",
        action: "",
        suggestedOwners: [],
        evidence: [],
      },
    level: (kind, value) => bundle.levels[kind]?.[value] ?? fallback.levels[kind]?.[value] ?? value,
    landing: bundle.landing ?? fallback.landing,
    actionPack: (recommendationId) =>
      bundle.actionPacks[recommendationId] ?? fallback.actionPacks[recommendationId],
    task: (recommendationId, taskId) =>
      bundle.actionPacks[recommendationId]?.tasks[taskId] ??
      fallback.actionPacks[recommendationId]?.tasks[taskId] ??
      taskId,
    kpi: (recommendationId, kpiId) =>
      bundle.actionPacks[recommendationId]?.kpis[kpiId] ??
      fallback.actionPacks[recommendationId]?.kpis[kpiId] ??
      kpiId,
    technologyCategory: (categoryId) =>
      (bundle.technology.categories as Record<string, string>)[categoryId] ??
      (fallback.technology.categories as Record<string, string>)[categoryId] ??
      categoryId,
    capability: (capabilityId) =>
      bundle.technology.capabilities[capabilityId] ??
      fallback.technology.capabilities[capabilityId] ?? { description: "", notes: "" },
    practice: (practiceId) =>
      bundle.practices.entries[practiceId] ??
      fallback.practices.entries[practiceId] ?? {
        title: practiceId,
        summary: "",
        implication: "",
      },
    practiceCategory: (categoryId) =>
      (bundle.practices.categories as Record<string, string>)[categoryId] ??
      (fallback.practices.categories as Record<string, string>)[categoryId] ??
      categoryId,
  };
}

export function useLocale(): Locale {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function useI18n() {
  const current = useLocale();
  const dict = UI[current];

  const t: Translator = (key, vars) => interpolate(dict[key] ?? enUi[key] ?? key, vars);

  return { locale: current, setLocale, t, content: localizedContent(current) };
}

export { CONTENT as LOCALE_CONTENT, UI as LOCALE_UI };
