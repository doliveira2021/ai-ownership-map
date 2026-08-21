import { useSyncExternalStore } from "react";
import type { CoverageStatus, MaturityLevel } from "./assessment-data";

export type AssessmentState = {
  orgName: string;
  answers: Record<string, MaturityLevel>;
  coverage: Record<string, CoverageStatus>;
  decisionRights: Record<string, CoverageStatus>;
};

const STORAGE_KEY = "ai-accountability-assessment-v1";

const emptyState: AssessmentState = {
  orgName: "",
  answers: {},
  coverage: {},
  decisionRights: {},
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
    return { ...emptyState, ...parsed };
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
  reset() {
    state = emptyState;
    persist();
    emit();
  },
};
