# Contributing to ASRA

Thank you for helping improve the **AI Security & Resilience Assessment (ASRA)**.

ASRA is an independent, vendor-neutral, non-commercial project intended to help the cybersecurity community assess AI security and resilience using recognized frameworks and practical security practices.

## What you can contribute

Contributions are welcome across:

- assessment questions and methodology
- framework mappings and traceability
- scoring and validation logic
- AI security, agentic security and resilience coverage
- Action Packs and implementation guidance
- Industry Practice References
- translations (EN, PT-BR and ES)
- accessibility, usability and UI
- documentation, tests and bug fixes

## Contribution principles

Please preserve these project principles:

1. **Vendor neutrality** — capabilities first; vendors only as non-exhaustive examples where appropriate.
2. **Evidence and traceability** — methodology changes should reference authoritative frameworks or credible public sources.
3. **No certification claims** — ASRA provides maturity and alignment guidance, not certification, formal compliance validation, legal advice or an audit.
4. **Deterministic scoring** — do not introduce AI-generated or non-reproducible scoring logic into the core assessment.
5. **Framework alignment is not compliance** — framework percentages represent estimated maturity coverage based on mapped assessment evidence.
6. **Multilingual parity** — user-visible changes should be maintained across EN, PT-BR and ES when applicable.
7. **No confidential data** — never commit customer data, credentials, secrets, proprietary material or non-public employer information.

## Before making a change

For significant methodology, scoring, weighting, framework-mapping or assessment-content changes, please open an issue first so the rationale and evidence can be discussed.

Small bug fixes, translation corrections, accessibility improvements and documentation fixes can go directly to a pull request.

## Development workflow

1. Fork the repository.
2. Create a focused branch.
3. Make the smallest change that solves the problem.
4. Add or update tests/validators when applicable.
5. Run the existing validation suite.
6. Open a pull request with a clear explanation of the problem, change and evidence.

## Validation

Before submitting a pull request, run the applicable checks:

```bash
bunx tsgo --noEmit
bun scripts/validate-asra.ts
bun scripts/validate-i18n.ts
bun scripts/validate-action-packs.ts
bun scripts/validate-industry-practices.ts
bun scripts/test-asra-scoring.ts
bun scripts/pilot-asra-scenarios.ts
bun run build
```

For UI changes, also verify the affected flow in EN, PT-BR and ES.

## Methodology and framework changes

When proposing a new control, question, mapping or methodology change, include:

- the problem or gap being addressed
- the affected ASRA domain(s)
- the proposed change
- supporting authoritative source(s)
- expected impact on scoring or recommendations, if any
- whether the change is structural, per-question mapped, or implementation guidance

Preferred sources include NIST, ISO, CSA, MITRE, OWASP and other recognized security or AI governance bodies.

## Pull request expectations

Keep pull requests focused. Avoid mixing unrelated refactors with methodology changes.

A good pull request explains:

- **What changed**
- **Why it changed**
- **Evidence/source**
- **Scoring impact**
- **Localization impact**
- **How it was tested**

## Licensing

By contributing to this repository, you agree that your contribution may be distributed under the repository's **MIT License**.

## Community

Constructive disagreement is welcome. The goal is not to make ASRA reflect one vendor, product or person's view, but to improve its usefulness, rigor and transparency for the cybersecurity community.
