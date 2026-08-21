import {
  coverageAreas,
  decisionRights,
  domains,
  allQuestions,
  type CoverageStatus,
  type Domain,
  type MaturityLevel,
} from "./assessment-data";
import type { AssessmentState } from "./assessment-store";

export type DomainScore = {
  domain: Domain;
  answered: number;
  total: number;
  average: number; // 0-5
  percent: number; // 0-100
};

export function domainScores(state: AssessmentState): DomainScore[] {
  return domains.map((domain) => {
    const values = domain.questions
      .map((q) => state.answers[q.id])
      .filter((v): v is MaturityLevel => v !== undefined);
    const average = values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
    return {
      domain,
      answered: values.length,
      total: domain.questions.length,
      average,
      percent: Math.round((average / 5) * 100),
    };
  });
}

export function maturityScore(state: AssessmentState) {
  const values = allQuestions
    .map((q) => state.answers[q.id])
    .filter((v): v is MaturityLevel => v !== undefined);
  const average = values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
  return {
    average,
    score: Math.round((average / 5) * 100),
    answered: values.length,
    total: allQuestions.length,
  };
}

export type CoverageBucket = "clear" | "partial" | "missing";

export function bucketOf(status: CoverageStatus | undefined): CoverageBucket {
  if (status === 2) return "clear";
  if (status === 1) return "partial";
  return "missing";
}

export function accountabilityCoverage(state: AssessmentState) {
  const items = coverageAreas.map((area) => {
    const status = state.coverage[area.id];
    return { area, status, bucket: bucketOf(status) };
  });
  const sum = items.reduce((acc, i) => acc + (i.status ?? 0), 0);
  const score = Math.round((sum / (coverageAreas.length * 2)) * 100);
  return {
    score,
    items,
    clear: items.filter((i) => i.bucket === "clear"),
    partial: items.filter((i) => i.bucket === "partial"),
    missing: items.filter((i) => i.bucket === "missing"),
    answered: items.filter((i) => i.status !== undefined).length,
  };
}

export function decisionRightsSummary(state: AssessmentState) {
  const items = decisionRights.map((right) => {
    const status = state.decisionRights[right.id];
    return { right, status, bucket: bucketOf(status) };
  });
  const sum = items.reduce((acc, i) => acc + (i.status ?? 0), 0);
  return {
    score: Math.round((sum / (decisionRights.length * 2)) * 100),
    items,
    clear: items.filter((i) => i.bucket === "clear"),
    partial: items.filter((i) => i.bucket === "partial"),
    missing: items.filter((i) => i.bucket === "missing"),
    answered: items.filter((i) => i.status !== undefined).length,
  };
}

export function coverageInterpretation(state: AssessmentState) {
  const cov = accountabilityCoverage(state);
  if (cov.answered === 0) return "Accountability coverage has not been assessed yet.";
  if (cov.score >= 85)
    return "Accountability is broadly assigned and consistently applied across AI systems, agents and lifecycle decisions.";
  const weak = [...cov.missing, ...cov.partial].map((i) => i.area.label.toLowerCase());
  const listed = weak.slice(0, 3).join(", ");
  if (cov.score >= 50)
    return `Several key AI responsibilities are defined, but ownership is inconsistent across ${listed}.`;
  return `AI ownership is largely undefined. Critical gaps remain in ${listed}.`;
}

export function isComplete(state: AssessmentState) {
  return (
    allQuestions.every((q) => state.answers[q.id] !== undefined) &&
    coverageAreas.every((a) => state.coverage[a.id] !== undefined) &&
    decisionRights.every((d) => state.decisionRights[d.id] !== undefined)
  );
}

export function progress(state: AssessmentState) {
  const total = allQuestions.length + coverageAreas.length + decisionRights.length;
  const done =
    allQuestions.filter((q) => state.answers[q.id] !== undefined).length +
    coverageAreas.filter((a) => state.coverage[a.id] !== undefined).length +
    decisionRights.filter((d) => state.decisionRights[d.id] !== undefined).length;
  return { done, total, percent: Math.round((done / total) * 100) };
}
