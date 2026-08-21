import { QUESTION_CONFIG } from "../src/lib/asra-config";
import {
  calculateAssessmentScores,
  calculateMaturityScore,
  calculateQuestionPriorities,
  isQuestionApplicable,
  type AsraAnswers,
  type AssessmentContext,
  type MaturityValue,
} from "../src/lib/asra-scoring";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

const baseContext: AssessmentContext = {
  exposure: 50,
  autonomy: 3,
  businessImpact: 50,
  resilienceDependency: 50,
  usesAgents: true,
  usesGenAI: true,
};

function answersAt(level: MaturityValue): AsraAnswers {
  return Object.fromEntries(QUESTION_CONFIG.map((question) => [question.id, level]));
}

const zeroAnswers = answersAt(0);
const fiveAnswers = answersAt(5);

const zeroScores = calculateAssessmentScores(zeroAnswers, baseContext);
const fiveScores = calculateAssessmentScores(fiveAnswers, baseContext);

assert(zeroScores.maturity === 0, `All-zero maturity should be 0; got ${zeroScores.maturity}.`);
assert(fiveScores.maturity === 100, `All-five maturity should be 100; got ${fiveScores.maturity}.`);
assert(fiveScores.resilience === 100, `All-five resilience should be 100; got ${fiveScores.resilience}.`);
assert(zeroScores.resilience === 0, `All-zero resilience should be 0; got ${zeroScores.resilience}.`);

const noAgentContext: AssessmentContext = { ...baseContext, usesAgents: false };
assert(!isQuestionApplicable("PROT-009", noAgentContext), "Agent-only question PROT-009 must be non-applicable when usesAgents=false.");
assert(isQuestionApplicable("PROT-009", baseContext), "Agent-only question PROT-009 must be applicable when usesAgents=true.");

const noGenAiContext: AssessmentContext = { ...baseContext, usesGenAI: false };
assert(!isQuestionApplicable("THRT-002", noGenAiContext), "GenAI-only question THRT-002 must be non-applicable when usesGenAI=false.");

const maturityWithAllContext = calculateMaturityScore(fiveAnswers, baseContext);
const maturityWithoutAgents = calculateMaturityScore(fiveAnswers, noAgentContext);
assert(maturityWithAllContext === 100 && maturityWithoutAgents === 100, "Applicability must re-normalize maturity rather than penalize N/A questions.");

const weakAgentAnswers: AsraAnswers = {
  "PROT-009": 1,
};

const lowRiskContext: AssessmentContext = {
  exposure: 10,
  autonomy: 1,
  businessImpact: 20,
  resilienceDependency: 20,
  usesAgents: true,
  usesGenAI: true,
};

const highRiskContext: AssessmentContext = {
  exposure: 95,
  autonomy: 5,
  businessImpact: 95,
  resilienceDependency: 95,
  usesAgents: true,
  usesGenAI: true,
};

const lowPriority = calculateQuestionPriorities(weakAgentAnswers, lowRiskContext)[0];
const highPriority = calculateQuestionPriorities(weakAgentAnswers, highRiskContext)[0];

assert(Boolean(lowPriority), "Expected a priority result for PROT-009 in low-risk context.");
assert(Boolean(highPriority), "Expected a priority result for PROT-009 in high-risk context.");
assert(highPriority.priorityScore > lowPriority.priorityScore, `Priority should increase with risk context; low=${lowPriority.priorityScore}, high=${highPriority.priorityScore}.`);

const lowExposureScores = calculateAssessmentScores(zeroAnswers, { ...baseContext, exposure: 10 });
const highExposureScores = calculateAssessmentScores(zeroAnswers, { ...baseContext, exposure: 90 });
assert(lowExposureScores.maturity === highExposureScores.maturity, "Headline exposure must not change maturity score for the same answers.");
assert(lowExposureScores.exposure === 10 && highExposureScores.exposure === 90, "Exposure headline score should preserve the configured context value.");

console.log("ASRA scoring scenarios valid");
console.log(`All-zero maturity: ${zeroScores.maturity}`);
console.log(`All-five maturity: ${fiveScores.maturity}`);
console.log(`Low-context PROT-009 priority: ${lowPriority.priorityScore}`);
console.log(`High-context PROT-009 priority: ${highPriority.priorityScore}`);
