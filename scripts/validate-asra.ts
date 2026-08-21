import { QUESTION_CONFIG, validateAssessmentConfiguration } from "../src/lib/asra-config";
import { ASRA_QUESTIONS } from "../src/lib/asra-question-data";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

const config = validateAssessmentConfiguration();
const contentIds = ASRA_QUESTIONS.map((question) => question.id);
const configIds = QUESTION_CONFIG.map((question) => question.id);
const contentIdSet = new Set(contentIds);
const configIdSet = new Set(configIds);

assert(config.validQuestionCount, `Expected 60 unique configured questions; got ${config.questionCount} questions and ${config.uniqueQuestionCount} unique IDs.`);
assert(config.validDomainWeights, `Domain weights must sum to 1.0; got ${config.domainWeightTotal}.`);
assert(ASRA_QUESTIONS.length === 60, `Expected 60 question-content entries; got ${ASRA_QUESTIONS.length}.`);
assert(contentIdSet.size === 60, `Question content contains duplicate IDs; got ${contentIdSet.size} unique IDs.`);

const missingContent = configIds.filter((id) => !contentIdSet.has(id));
const missingConfig = contentIds.filter((id) => !configIdSet.has(id));

assert(missingContent.length === 0, `Configured questions missing content: ${missingContent.join(", ")}`);
assert(missingConfig.length === 0, `Question content missing configuration: ${missingConfig.join(", ")}`);

console.log("ASRA configuration valid");
console.log(`Questions: ${config.questionCount}`);
console.log(`Unique IDs: ${config.uniqueQuestionCount}`);
console.log(`Domain weights: ${(config.domainWeightTotal * 100).toFixed(0)}%`);
