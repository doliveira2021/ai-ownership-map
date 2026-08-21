# Question Scoring, Applicability & Modifiers

Status: Draft v0.1

This document defines how assessment questions should contribute to maturity, exposure, autonomy, resilience and prioritization without making the scoring opaque.

## 1. Core principle

A maturity question should measure capability maturity. Exposure and autonomy should not inflate or reduce the maturity score directly.

The assessment therefore keeps separate dimensions:

- Maturity: how well the organization manages the capability
- Exposure: how much business exposure exists
- Autonomy: how much authority AI has to act
- Resilience: how prepared the organization is for disruption and recovery

Recommendations are prioritized by combining these dimensions after scoring.

## 2. Applicability

Questions may be:

- Always applicable
- Conditional
- Not Applicable

Not Applicable answers must be excluded from denominators rather than scored as zero.

### Example applicability rules

Agent-specific questions are conditional when the organization has no production or pilot agents.

Internal-development questions may be reduced or skipped if the organization only consumes third-party AI, but third-party and procurement questions become more important.

RAG-specific questions are conditional when retrieval-augmented generation is not used.

Customer-facing or regulated decision questions remain exposure questions even when not applicable to maturity controls.

## 3. Recommended question metadata

Each question should eventually contain:

```text
id
 domain
 capability
 question
 maturity_levels[0..5]
 applicability
 base_weight
 exposure_modifiers
 autonomy_modifiers
 resilience_modifiers
 business_impact_modifiers
 recommendation_ids
 framework_mapping_ids
 evidence_examples
```

## 4. Base weights

Default question weight: 1.0

Use higher weight only when the capability is foundational to the domain and materially changes risk reduction.

Suggested range:

- 0.75 — supporting capability
- 1.0 — standard capability
- 1.25 — important capability
- 1.5 — foundational or critical capability

Avoid weights above 1.5 in the first validated version.

## 5. Suggested initial weighting philosophy

Examples of questions likely to receive 1.25–1.5 weights after validation:

- Enterprise AI Inventory
- AI Business Criticality
- Critical AI Business Ownership
- Agent Sponsorship
- Autonomy Decision Rights
- AI-Specific Threat Modeling
- Least Privilege for AI and Agents
- Agent Action Boundaries and Kill Capability
- Agent Action Traceability
- Agent Containment
- AI Service Continuity

These are proposed weights, not final validated weights.

## 6. Exposure modifiers

Exposure is influenced by context rather than maturity answers alone.

Potential modifiers:

- sensitive data access
- customer-facing AI
- regulated/high-impact decisions
- business criticality
- external access
- privileged access
- third-party dependency
- broad enterprise adoption
- concentration risk

Suggested modifier scale:

0 — not present
1 — low
2 — moderate
3 — high
4 — very high

## 7. Autonomy modifiers

Autonomy should be derived primarily from organizational profile and agent/use-case questions.

Signals include:

- generates content only
- recommends decisions
- initiates workflows
- calls tools/APIs
- executes material business actions
- delegates to other agents
- operates with limited human approval

## 8. Resilience modifiers

Resilience score should be based on controls and preparedness, not business exposure.

Primary contributors:

- fallback process
- dependency mapping
- concentration-risk planning
- tested continuity plans
- agent containment
- evidence preservation
- recovery authority
- recovery testing
- model/provider substitution readiness

## 9. Priority calculation

Conceptual model:

```text
Priority = Control Gap × Exposure × Business Impact × Autonomy Modifier
```

Where:

```text
Control Gap = 5 - maturity_response
```

The production implementation should normalize values and avoid extreme multiplication artifacts.

Recommended implementation direction:

```text
GapFactor        = ControlGap / 5
ExposureFactor   = normalized exposure signal
ImpactFactor     = normalized business impact signal
AutonomyFactor   = bounded modifier based on autonomy

PriorityScore = weighted combination rather than raw multiplication
```

A possible first implementation:

```text
PriorityScore =
  0.45 × GapFactor +
  0.25 × ExposureFactor +
  0.20 × ImpactFactor +
  0.10 × AutonomyFactor
```

Then apply critical-condition overrides for combinations such as:

- high autonomy + weak containment
- sensitive data + weak access control
- high business criticality + weak resilience
- privileged agents + weak identity/authorization
- customer-facing AI + weak validation/monitoring

This formula is a design proposal and must be validated before being described as final methodology.

## 10. Priority bands

Suggested normalized bands:

- 80–100 — Critical
- 60–79 — High
- 35–59 — Medium
- 0–34 — Low

## 11. Explainability

Every recommendation should be able to answer:

- What answer triggered this?
- What business exposure increased its priority?
- Why is the action recommended?
- What evidence demonstrates completion?
- What maturity target should the organization reach next?

The user-facing product should never present a priority score without a plain-language explanation.
