# ASRA Human Pilot Guide

Status: Draft v0.1

This guide defines how to run structured human pilots of the AI Security & Resilience Assessment (ASRA) before calibrating weights, modifiers, maturity wording, recommendations or risk thresholds.

## Pilot objective

The pilot is not intended to prove that the current scoring model is correct.

It is intended to test whether experienced practitioners believe that:

- the questions are understandable and answerable
- the maturity anchors are distinguishable in practice
- applicability logic behaves correctly
- the resulting maturity, exposure, autonomy and resilience scores feel directionally credible
- the highest-priority recommendations match the organization’s material business risk
- the report explains its reasoning clearly enough to support executive discussion

## Target participants

The first wave should intentionally include different perspectives:

1. CISO / Security Executive
2. GRC / Risk / Compliance
3. Enterprise or Security Architect
4. AI / Data / ML Engineering
5. Application Security
6. SOC / Incident Response

A single participant does not need to represent every perspective.

The aim is to identify where different roles interpret the same question or result differently.

## Recommended sample

Minimum useful first wave:

- 6–10 participants
- at least 4 distinct role types
- a mix of regulated and non-regulated organizations
- a mix of early GenAI adoption and more mature agentic adoption

Do not treat this sample as statistically representative.

It is an expert calibration exercise.

## Session format

Recommended duration: 45–60 minutes.

### 1. Context — 5 minutes

Explain:

> ASRA is designed to assess how prepared an organization is to secure a business that increasingly depends on AI. It separates security maturity from AI exposure, autonomy and resilience. This pilot is testing the assessment itself, not auditing your organization.

Reinforce:

- no confidential information is required
- no names, credentials, customer data or sensitive architecture details should be entered
- framework mappings are traceability aids, not certification claims
- the participant should answer based on the agreed organizational scope

### 2. Scope definition — 5 minutes

Agree on the scope before answering:

- whole enterprise
- one business unit
- one AI platform
- one application portfolio
- one production AI program

Capture:

- industry
- approximate organization size
- geography/regulatory context
- GenAI usage: yes/no
- production agents: yes/no
- customer-facing AI: yes/no
- high-impact or regulated decisions: yes/no
- approximate AI dependency

Do not capture company-sensitive implementation details.

### 3. Assessment completion — 20–30 minutes

Ask the participant to think aloud when useful.

The facilitator should note:

- questions requiring clarification
- terms interpreted differently from intended meaning
- maturity levels that feel too close together
- questions where the participant wants evidence examples
- questions that appear duplicated
- questions that should be N/A but are not
- questions the respondent cannot reasonably answer in their role

Do not coach the participant toward a particular maturity level.

### 4. Results review — 10–15 minutes

Review in this order:

1. AI Security Maturity
2. AI Exposure
3. AI Autonomy
4. Business Resilience
5. Exposure × Maturity quadrant
6. domain maturity
7. top risk drivers
8. top recommendations
9. NOW / NEXT / SCALE roadmap
10. framework traceability

The participant should react before the facilitator explains the model.

## Core calibration questions

Ask every participant:

### Question quality

1. Were any questions difficult to understand?
2. Were any questions impossible for your role to answer?
3. Did any questions feel duplicated?
4. Were any important AI security areas missing?
5. Did N/A appear in the right places?

### Maturity anchors

6. Could you clearly distinguish levels 0 through 5?
7. Were there cases where two adjacent maturity levels felt effectively identical?
8. Did the selected maturity description represent your actual situation?

### Headline metrics

9. Does the AI Security Maturity score feel directionally right?
10. Does the AI Exposure score feel directionally right?
11. Does the AI Autonomy score describe the organization’s real authority level for AI?
12. Does the Business Resilience score reflect the business dependency and recovery reality?

For questions 9–12, capture:

- Too low
- About right
- Too high

and ask why.

### Risk prioritization

13. If you could fund only three AI security improvements, would the top three ASRA priorities be among them?
14. Which recommendation is ranked too high?
15. Which recommendation is ranked too low?
16. Is any material business risk missing from the top priorities?
17. Does the model overweight technical control gaps relative to business impact?
18. Does it underweight autonomy, sensitive data or resilience dependency?

### Executive usefulness

19. Would you use this output in a CISO/CIO/board or risk-committee discussion?
20. What would make the result more credible to leadership?
21. Is the explanation of how scores were calculated sufficient?
22. Does framework traceability add credibility or create unnecessary complexity?

## Calibration capture template

For each pilot, capture a structured record:

| Field | Value |
|---|---|
| Pilot ID | Anonymous identifier |
| Respondent role | CISO / GRC / Architect / AI Engineering / AppSec / SOC-IR / Other |
| Industry | Broad category only |
| Scope | Enterprise / BU / platform / application / program |
| GenAI | Yes / No |
| Agents | Yes / No |
| Regulated/high-impact AI | Yes / No |
| ASRA maturity | 0–100 |
| Participant maturity judgment | Too low / Right / Too high |
| ASRA exposure | 0–100 |
| Participant exposure judgment | Too low / Right / Too high |
| ASRA autonomy | 0–5 |
| Participant autonomy judgment | Too low / Right / Too high |
| ASRA resilience | 0–100 |
| Participant resilience judgment | Too low / Right / Too high |
| Top-3 recommendation agreement | 0 / 1 / 2 / 3 recommendations |
| Unclear question IDs | IDs only |
| Duplicate question IDs | IDs only |
| Missing capability | Short description |
| Priority ranked too high | Recommendation/question ID |
| Priority ranked too low | Recommendation/question ID |
| Additional comments | Non-sensitive summary |

## Quantitative calibration indicators

After the first 6–10 pilots, calculate:

### 1. Question clarity rate

`Clarity Rate = pilots without clarification request / pilots answering question`

Investigate questions below approximately 80% clarity.

Do not automatically rewrite them; review qualitative comments first.

### 2. Maturity anchor disagreement

Track how often participants state that adjacent maturity levels are indistinguishable.

Repeated disagreement across different roles is a stronger signal than a single comment.

### 3. Headline directional agreement

For each headline metric, calculate the percentage of participants selecting “About right.”

A pattern of “Too high” or “Too low” across multiple unrelated pilots may indicate calibration bias.

### 4. Top-3 recommendation precision

`Top-3 Agreement = participant-endorsed ASRA top-three recommendations / 3`

This is not statistical precision in the machine-learning sense; it is a usability calibration indicator.

Repeated low agreement should trigger review of question weights, contextual modifiers or recommendation grouping.

### 5. Applicability disagreement rate

Track questions participants believe should have been excluded or included based on their architecture.

This validates `agentOnly`, `genAiOnly` and future applicability rules.

## Evidence threshold for changing the model

Do not change a weight, modifier or threshold because of one pilot.

A material scoring change should normally require at least one of:

- the same issue appears in 3+ independent pilots
- the issue appears across 2+ different respondent roles
- the current output conflicts materially with an agreed high-impact business-risk scenario
- applicability logic creates a clearly incorrect score
- a deterministic pilot regression demonstrates an unintended consequence

For high-impact changes, require both qualitative feedback and a regression test.

## Change log requirement

Every material calibration change should document:

- what changed
- why it changed
- pilot evidence supporting the change
- affected question/recommendation IDs
- expected effect
- synthetic pilot regression result
- date/version

This prevents silent tuning of the methodology.

## Suggested pilot waves

### Wave 1 — Comprehension

Focus:

- wording
- maturity anchors
- applicability
- completion time

Target: 3–4 practitioners.

Avoid changing scoring weights unless an obvious defect is found.

### Wave 2 — Risk calibration

Focus:

- headline scores
- priority ranking
- recommendations
- business-risk alignment

Target: 4–6 additional practitioners.

Compare results across role types.

### Wave 3 — Executive usefulness

Focus:

- CISO/CIO readability
- report structure
- roadmap usefulness
- framework traceability

Target: security executives and senior risk leaders.

## Go/no-go criteria for MVP release

Suggested initial release criteria:

- no recurring critical wording issue across the 60 questions
- applicability errors are rare and understood
- no known deterministic scoring defect
- top recommendations are directionally credible across the majority of pilots
- material model changes have regression coverage
- build and validation pipeline is green
- methodology disclaimer is visible
- no claim of certification, compliance validation or audit assurance

These criteria should evolve as the pilot sample grows.
