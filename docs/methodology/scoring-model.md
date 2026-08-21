# Scoring Model

## Objectives

The scoring model should be:

- deterministic
- reproducible
- explainable
- vendor-neutral
- risk-based
- configurable during validation

## Headline scores

- AI Security Maturity — 0–100
- AI Exposure — 0–100
- AI Autonomy — 0–5
- Business Resilience — 0–100

Supporting indicator:

- Accountability Coverage — 0–100

## Maturity weighting

Initial target weights for the ten domains:

| Domain | Weight |
|---|---:|
| AI Discovery & Inventory | 10% |
| Risk Classification & Business Impact | 10% |
| Governance, Accountability & Decision Rights | 12% |
| AI Threat Modeling | 10% |
| Secure AI Development Lifecycle | 10% |
| Protection Controls | 15% |
| Validation & Red Teaming | 8% |
| Monitoring & Detection | 10% |
| Incident Response & Business Resilience | 8% |
| Measurement & Continuous Improvement | 7% |

These are starting weights, not validated constants.

## Priority model

Conceptually:

`Priority = Control Gap × Exposure × Business Impact × Autonomy Modifier`

Potential additional modifiers:

- sensitive data
- regulatory impact
- privileged access
- customer exposure
- third-party dependency
- irreversibility of AI actions

## Design requirement

The implementation should keep score calculation separate from presentation logic. It should be possible to unit-test each scoring component independently.

## Explainability

Users should be able to understand:

- which domains influence each score
- what the score means
- why a recommendation was prioritized

The interface should not expose unnecessary mathematical complexity.

## Validation

Weights, thresholds and modifiers must remain subject to scenario testing and practitioner review before the methodology is presented as stable.
