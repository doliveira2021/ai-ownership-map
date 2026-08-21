import { QUESTION_CONFIG, validateAssessmentConfiguration } from "../src/lib/asra-config";
import { ASRA_FRAMEWORK_TRACE } from "../src/lib/asra-framework-data";
import { ASRA_QUESTIONS } from "../src/lib/asra-question-data";
import { ASRA_MATURITY_DESCRIPTIONS } from "../src/lib/asra-maturity-data";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

const config = validateAssessmentConfiguration();
const contentIds = ASRA_QUESTIONS.map((question) => question.id);
const configIds = QUESTION_CONFIG.map((question) => question.id);
const contentIdSet = new Set(contentIds);
const configIdSet = new Set(configIds);
const maturityIds = Object.keys(ASRA_MATURITY_DESCRIPTIONS);
const maturityIdSet = new Set(maturityIds);
const frameworkIds = Object.keys(ASRA_FRAMEWORK_TRACE);
const frameworkIdSet = new Set(frameworkIds);

assert(config.validQuestionCount, `Expected 60 unique configured questions; got ${config.questionCount} questions and ${config.uniqueQuestionCount} unique IDs.`);
assert(config.validDomainWeights, `Domain weights must sum to 1.0; got ${config.domainWeightTotal}.`);
assert(ASRA_QUESTIONS.length === 60, `Expected 60 question-content entries; got ${ASRA_QUESTIONS.length}.`);
assert(contentIdSet.size === 60, `Question content contains duplicate IDs; got ${contentIdSet.size} unique IDs.`);
assert(maturityIds.length === 60, `Expected maturity descriptions for all 60 questions; got ${maturityIds.length}.`);
assert(maturityIdSet.size === 60, `Maturity descriptions contain duplicate IDs; got ${maturityIdSet.size} unique IDs.`);
assert(frameworkIds.length === 60, `Expected framework traceability for all 60 questions; got ${frameworkIds.length}.`);
assert(frameworkIdSet.size === 60, `Framework traceability contains duplicate IDs; got ${frameworkIdSet.size} unique IDs.`);

const missingContent = configIds.filter((id) => !contentIdSet.has(id));
const missingConfig = contentIds.filter((id) => !configIdSet.has(id));
const missingMaturity = configIds.filter((id) => !maturityIdSet.has(id));
const unknownMaturity = maturityIds.filter((id) => !configIdSet.has(id));
const invalidMaturity = maturityIds.filter((id) => ASRA_MATURITY_DESCRIPTIONS[id]?.length !== 6);
const missingFramework = configIds.filter((id) => !frameworkIdSet.has(id));
const unknownFramework = frameworkIds.filter((id) => !configIdSet.has(id));
const emptyFramework = frameworkIds.filter((id) => !ASRA_FRAMEWORK_TRACE[id]?.length);
const invalidFramework = frameworkIds.filter((id) =>
  ASRA_FRAMEWORK_TRACE[id]?.some((trace) => !trace.framework || !trace.refs.length || !trace.confidence),
);

assert(missingContent.length === 0, `Configured questions missing content: ${missingContent.join(", ")}`);
assert(missingConfig.length === 0, `Question content missing configuration: ${missingConfig.join(", ")}`);
assert(missingMaturity.length === 0, `Configured questions missing maturity descriptions: ${missingMaturity.join(", ")}`);
assert(unknownMaturity.length === 0, `Maturity descriptions reference unknown questions: ${unknownMaturity.join(", ")}`);
assert(invalidMaturity.length === 0, `Questions without exactly six 0–5 descriptions: ${invalidMaturity.join(", ")}`);
assert(missingFramework.length === 0, `Configured questions missing framework traceability: ${missingFramework.join(", ")}`);
assert(unknownFramework.length === 0, `Framework traceability references unknown questions: ${unknownFramework.join(", ")}`);
assert(emptyFramework.length === 0, `Questions with empty framework traceability: ${emptyFramework.join(", ")}`);
assert(invalidFramework.length === 0, `Questions with invalid framework traceability records: ${invalidFramework.join(", ")}`);

console.log("ASRA configuration valid");
console.log(`Questions: ${config.questionCount}`);
console.log(`Unique IDs: ${config.uniqueQuestionCount}`);
console.log(`Maturity description sets: ${maturityIds.length}`);
console.log(`Framework traceability sets: ${frameworkIds.length}`);
console.log(`Domain weights: ${(config.domainWeightTotal * 100).toFixed(0)}%`);
