import { ASRA_PILOT_SCENARIOS } from "../src/lib/asra-pilot-data";
import { generateAsraRecommendations } from "../src/lib/asra-recommendations";
import { calculateAssessmentScores, riskQuadrant } from "../src/lib/asra-scoring";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

assert(ASRA_PILOT_SCENARIOS.length === 4, `Expected 4 shared pilot scenarios; got ${ASRA_PILOT_SCENARIOS.length}.`);

const [bank, matureSaas, earlyGenAi, controlledEnterprise] = ASRA_PILOT_SCENARIOS;

for (const scenario of ASRA_PILOT_SCENARIOS) {
  const scores = calculateAssessmentScores(scenario.answers, scenario.context);
  const recommendations = generateAsraRecommendations(scenario.answers, scenario.context);

  assert(scores.answered > 0, `${scenario.name} should contain answered questions.`);
  assert(scores.applicable > 0, `${scenario.name} should contain applicable questions.`);

  console.log(`\n${scenario.name}`);
  console.log(
    `Maturity ${scores.maturity} | Exposure ${scores.exposure} | Autonomy ${scores.autonomy} | Resilience ${scores.resilience}`,
  );
  console.log(`Quadrant: ${riskQuadrant(scores.maturity, scores.exposure)}`);
  console.log(`Applicable: ${scores.applicable} | Answered: ${scores.answered}`);
  console.log(
    `Top recommendations: ${recommendations
      .slice(0, 3)
      .map((item) => `${item.title} (${item.priorityScore})`)
      .join(" | ") || "none"}`,
  );
}

const bankScores = calculateAssessmentScores(bank.answers, bank.context);
const matureScores = calculateAssessmentScores(matureSaas.answers, matureSaas.context);
const earlyScores = calculateAssessmentScores(earlyGenAi.answers, earlyGenAi.context);
const controlledScores = calculateAssessmentScores(
  controlledEnterprise.answers,
  controlledEnterprise.context,
);

// Scenario-specific expectations.
assert(bankScores.exposure >= 90, "Bank scenario should be very highly exposed");
assert(bankScores.maturity < 60, "Bank scenario should remain below Defined maturity");
assert(
  riskQuadrant(bankScores.maturity, bankScores.exposure) === "Critical Priority",
  "Bank scenario should land in Critical Priority",
);

assert(matureScores.maturity >= 70, "Mature SaaS should score at least high Defined");
assert(matureScores.exposure >= 60, "Mature SaaS should still have high exposure");
assert(
  riskQuadrant(matureScores.maturity, matureScores.exposure) === "Strategic Investment",
  "Mature SaaS should land in Strategic Investment",
);

assert(earlyScores.applicable < 60, "No-agent scenario should exclude agent-only questions");
assert(earlyScores.autonomy < 2, "Early GenAI should stay below advisory/action autonomy");
assert(earlyScores.exposure < 60, "Early GenAI exposure should not be high");

assert(controlledScores.maturity >= 75, "Controlled enterprise should be Managed or close to it");
assert(controlledScores.exposure < 60, "Controlled enterprise should have lower exposure");
assert(
  riskQuadrant(controlledScores.maturity, controlledScores.exposure) === "Controlled Adoption",
  "Controlled enterprise should land in Controlled Adoption",
);

// Cross-scenario directional assertions.
assert(bankScores.maturity < matureScores.maturity, "Low-maturity bank should score below mature SaaS");
assert(bankScores.exposure > earlyScores.exposure, "Bank exposure should exceed early GenAI adopter");
assert(matureScores.autonomy > earlyScores.autonomy, "Agentic SaaS autonomy should exceed early GenAI adopter");
assert(controlledScores.maturity > earlyScores.maturity, "Controlled enterprise should be more mature than early adopter");

console.log("\nASRA shared pilot scenarios passed");
