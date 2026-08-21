# ASRA Pilot Scenario Validation

Status: Draft v0.1

These synthetic profiles are guardrails for the scoring model. They are not benchmarks and should not be interpreted as representative industry scores.

The goal is to confirm that the model responds directionally as intended before external pilot interviews begin.

## Scenario 1 — Regulated bank: high exposure, low maturity

Context:

- AI Exposure: 92 / 100
- AI Autonomy: 4.2 / 5
- Business Impact: 95 / 100
- AI Dependency: 90 / 100
- Agents: yes
- GenAI: yes

Assessment pattern:

- broad maturity around Emerging
- particularly weak agent inventory, autonomy governance, least privilege, tool authorization, kill capability, action traceability, containment and continuity

Expected behavior:

- maturity remains below Defined
- exposure remains Very High
- quadrant = Critical Priority
- agent containment/action-boundary and protection/IR recommendations should rank highly

What this tests:

- high exposure must not artificially raise maturity
- autonomous/privileged agent gaps should receive materially higher priority
- resilience should be penalized when business dependency is high and readiness is weak

## Scenario 2 — Mature SaaS: agents at scale

Context:

- AI Exposure: 78 / 100
- AI Autonomy: 4.5 / 5
- Business Impact: 80 / 100
- AI Dependency: 75 / 100
- Agents: yes
- GenAI: yes

Assessment pattern:

- most capabilities Managed
- some remaining gaps in action boundaries, traceability, containment and agent abuse testing

Expected behavior:

- maturity at high Defined / Managed range
- exposure still High
- quadrant = Strategic Investment
- residual agent-control gaps remain visible despite strong overall maturity

What this tests:

- high maturity must not imply low exposure
- a mature organization can still require strategic security investment
- localized agent gaps should remain visible and prioritized

## Scenario 3 — Early GenAI adopter: no agents

Context:

- AI Exposure: 38 / 100
- AI Autonomy: 1.4 / 5
- Business Impact: 45 / 100
- AI Dependency: 30 / 100
- Agents: no
- GenAI: yes

Assessment pattern:

- Emerging maturity
- inventory relatively stronger
- weak prompt-injection/data-leakage validation
- no agent-related scope

Expected behavior:

- agent-only questions are excluded
- autonomy remains in the generative/advisory range
- exposure does not reach High
- GenAI-specific controls remain applicable

What this tests:

- applicability and N/A behavior
- the model must not penalize an organization for capabilities outside its current AI architecture
- GenAI-specific risks remain visible even when agentic risks are absent

## Scenario 4 — Controlled enterprise AI: low exposure, high maturity

Context:

- AI Exposure: 25 / 100
- AI Autonomy: 2.2 / 5
- Business Impact: 55 / 100
- AI Dependency: 45 / 100
- Agents: no
- GenAI: no

Assessment pattern:

- Managed maturity across applicable capabilities

Expected behavior:

- maturity >= Managed threshold or close to it
- exposure remains Moderate
- quadrant = Controlled Adoption

What this tests:

- high maturity + lower exposure should not generate exaggerated priority
- agent/GenAI-only controls are excluded when not applicable
- the model preserves separation between control maturity and AI exposure

## Cross-scenario assertions

The synthetic suite also verifies that:

1. The low-maturity bank scores below the mature SaaS profile.
2. The bank has higher exposure than the early GenAI adopter.
3. Agentic SaaS autonomy exceeds early GenAI autonomy.
4. The controlled enterprise is more mature than the early adopter.

## Calibration rule

These scenarios are guardrails, not targets.

Weights or modifiers should not be changed simply to produce cosmetically desirable numbers. Future tuning should require one or more of:

- expert feedback from pilot participants
- repeated disagreement between qualitative judgment and model output
- evidence of over/under-weighting across multiple scenarios
- usability evidence showing that priorities are consistently misleading

Every material scoring change should be tested against the full scenario suite and documented.
