import { useSyncExternalStore } from "react";
import type { CoverageStatus, MaturityLevel } from "./assessment-data";
import { ASRA_PILOT_BY_ID, type AsraPilotScenarioId } from "./asra-pilot-data";
import type { AssessmentContext, AsraAnswers, MaturityValue } from "./asra-scoring";

export type AssessmentState = {
  orgName: string;

  // Legacy accountability assessment state. Kept during migration so existing
  // browser sessions and the current UI remain functional.
  answers: Record<string, MaturityLevel>;
  coverage: Record<string, CoverageStatus>;
  decisionRights: Record<string, CoverageStatus>;

  // ASRA v2 state.
  asraAnswers: AsraAnswers;
  context: AssessmentContext;
  asraMode: "assessment" | "demo";
  activePilotScenario?: AsraPilotScenarioId;
};

const STORAGE_KEY = "ai-accountability-assessment-v1";

export const defaultAssessmentContext: AssessmentContext = {
  exposure: 50,
  autonomy: 2,
  businessImpact: 50,
  resilienceDependency: 50,
  usesAgents: true,
  usesGenAI: true,
};

const emptyState: AssessmentState = {
  orgName: "",
  answers: {},
  coverage: {},
  decisionRights: {},
  asraAnswers: {},
  context: defaultAssessmentContext,
  asraMode: "assessment",
  activePilotScenario: undefined,
};

let state: AssessmentState = emptyState;
let hydrated = false;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function load(): AssessmentState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyState;
    const parsed = JSON.parse(raw) as Partial<AssessmentState>;
    return {
      ...emptyState,
      ...parsed,
      context: { ...defaultAssessmentContext, ...parsed.context },
      asraAnswers: parsed.asraAnswers ?? {},
      asraMode: parsed.asraMode ?? "assessment",
    };
  } catch {
    return emptyState;
  }
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* ignore */
  }
}

function ensureHydrated() {
  if (hydrated || typeof window === "undefined") return;
  hydrated = true;
  state = load();
}

function subscribe(listener: () => void) {
  ensureHydrated();
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): AssessmentState {
  ensureHydrated();
  return state;
}

function getServerSnapshot(): AssessmentState {
  return emptyState;
}

export function useAssessment(): AssessmentState {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function update(next: Partial<AssessmentState>) {
  state = { ...state, ...next };
  persist();
  emit();
}

function markAsRealAssessment() {
  if (state.asraMode === "demo") {
    update({ asraMode: "assessment", activePilotScenario: undefined });
  }
}

export const assessmentActions = {
  setOrgName(orgName: string) {
    update({ orgName });
  },
  setAnswer(questionId: string, level: MaturityLevel) {
    update({ answers: { ...state.answers, [questionId]: level } });
  },
  setCoverage(areaId: string, status: CoverageStatus) {
    update({ coverage: { ...state.coverage, [areaId]: status } });
  },
  setDecisionRight(id: string, status: CoverageStatus) {
    update({ decisionRights: { ...state.decisionRights, [id]: status } });
  },
  setAsraAnswer(questionId: string, level: MaturityValue | null) {
    markAsRealAssessment();
    update({ asraAnswers: { ...state.asraAnswers, [questionId]: level } });
  },
  setContext(next: Partial<AssessmentContext>) {
    markAsRealAssessment();
    update({ context: { ...state.context, ...next } });
  },
  loadPilotScenario(id: AsraPilotScenarioId) {
    const scenario = ASRA_PILOT_BY_ID[id];
    update({
      asraAnswers: { ...scenario.answers },
      context: { ...scenario.context },
      asraMode: "demo",
      activePilotScenario: id,
    });
  },
  exitDemoMode() {
    update({
      asraAnswers: {},
      context: defaultAssessmentContext,
      asraMode: "assessment",
      activePilotScenario: undefined,
    });
  },
  resetAsra() {
    update({
      asraAnswers: {},
      context: defaultAssessmentContext,
      asraMode: "assessment",
      activePilotScenario: undefined,
    });
  },
  reset() {
    state = emptyState;
    persist();
    emit();
  },
};
