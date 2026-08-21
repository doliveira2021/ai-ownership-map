import { QUESTION_CONFIG, validateAssessmentConfiguration } from "../src/lib/asra-config";
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

assert(config.validQuestionCount, `Expected 60 unique configured questions; got ${config.questionCount} questions and ${config.uniqueQuestionCount} unique IDs.`);
assert(config.validDomainWeights, `Domain weights must sum to 1.0; got ${config.domainWeightTotal}.`);
assert(ASRA_QUESTIONS.length === 60, `Expected 60 question-content entries; got ${ASRA_QUESTIONS.length}.`);
assert(contentIdSet.size === 60, `Question content contains duplicate IDs; got ${contentIdSet.size} unique IDs.`);
assert(maturityIds.length === 60, `Expected maturity descriptions for all 60 questions; got ${maturityIds.length}.`);
assert(maturityIdSet.size === 60, `Maturity descriptions contain duplicate IDs; got ${maturityIdSet.size} unique IDs.`);

const missingContent = configIds.filter((id) => !contentIdSet.has(id));
const missingConfig = contentIds.filter((id) => !configIdSet.has(id));
const missingMaturity = configIds.filter((id) => !maturityIdSet.has(id));
const unknownMaturity = maturityIds.filter((id) => !configIdSet.has(id));
const invalidMaturity = maturityIds.filter((id) => ASRA_MATURITY_DESCRIPTIONS[id]?.length !== 6);

assert(missingContent.length === 0, `Configured questions missing content: ${missingContent.join(", ")}`);
assert(missingConfig.length === 0, `Question content missing configuration: ${missingConfig.join(", ")}`);
assert(missingMaturity.length === 0, `Configured questions missing maturity descriptions: ${missingMaturity.join(", ")}`);
assert(unknownMaturity.length === 0, `Maturity descriptions reference unknown questions: ${unknownMaturity.join(", ")}`);
assert(invalidMaturity.length === 0, `Questions without exactly six 0–5 descriptions: ${invalidMaturity.join(", ")}`);

console.log("ASRA configuration valid");
console.log(`Questions: ${config.questionCount}`);
console.log(`Unique IDs: ${config.uniqueQuestionCount}`);
console.log(`Maturity description sets: ${maturityIds.length}`);
console.log(`Domain weights: ${(config.domainWeightTotal * 100).toFixed(0)}%`);
