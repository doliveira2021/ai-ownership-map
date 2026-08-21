# Methodology

## Purpose

The AI Security & Resilience Assessment is a vendor-agnostic maturity and risk assessment designed to help organizations identify which AI security capabilities matter most given their actual business exposure.

The methodology deliberately separates **capability maturity** from **risk exposure**. A control gap is not automatically the highest priority; priority depends on what the AI system can access, how autonomous it is, how critical the business process is, and what impact failure or compromise could create.

## Primary dimensions

### 1. AI Security Maturity — 0–100

Measures how consistently the organization has implemented governance, threat modeling, secure development, protection, validation, monitoring, response and continuous improvement.

Questions generally use a six-level scale:

- 0 — Not Established
- 1 — Reactive
- 2 — Emerging
- 3 — Defined
- 4 — Managed
- 5 — Adaptive

### 2. AI Exposure — 0–100

Measures the business exposure created by AI adoption. Factors include:

- breadth of AI adoption
- business criticality
- sensitive-data access
- customer or external exposure
- regulated/high-impact decisions
- privilege
- third-party dependency
- operational dependency
- autonomy

### 3. AI Autonomy — 0–5

- 0 — No meaningful AI
- 1 — Generative: produces or summarizes content
- 2 — Advisory: recommends decisions/actions
- 3 — Workflow Initiation: starts processes with material human approval
- 4 — Action Execution: can invoke tools/APIs and execute business actions
- 5 — Autonomous Operations: can reason, select tools and execute multi-step actions with limited human intervention

### 4. Business Resilience — 0–100

Measures preparedness for:

- AI compromise
- provider/model outage
- model degradation or drift
- autonomous-action incidents
- dependency concentration
- agent containment
- service recovery
- safe fallback to non-AI processes

### Supporting indicator: Accountability Coverage — 0–100

Evaluates whether important roles and decision rights are clearly assigned, including business ownership, technical ownership, security ownership, human agent sponsorship, risk acceptance, incident authority and decommissioning.

## Ten assessment domains

1. AI Discovery & Inventory
2. Risk Classification & Business Impact
3. Governance, Accountability & Decision Rights
4. AI Threat Modeling
5. Secure AI Development Lifecycle
6. Protection Controls
7. Validation & Red Teaming
8. Monitoring & Detection
9. Incident Response & Business Resilience
10. Measurement & Continuous Improvement

## Prioritization

The recommendation engine should not sort recommendations simply by lowest maturity.

Conceptually:

`Priority = Control Gap × Exposure × Business Impact × Autonomy Modifier`

Additional modifiers may include sensitive data, regulatory impact, privileged access, external exposure and third-party dependency.

The user-facing explanation should remain simple:

> Recommendations are prioritized based on the maturity gap and the business exposure created by that gap.

## Roadmap horizons

Recommendations are organized into three horizons:

- **NOW — 0–90 days:** visibility, ownership, classification, critical access, logging and incident foundations
- **NEXT — 3–6 months:** threat modeling, Secure AI SDLC, identity/agent governance, monitoring, vendor risk and validation
- **SCALE — 6–12 months:** continuous discovery, red teaming, automated control enforcement, advanced detection, resilience testing and executive metrics

## Deterministic scoring

Numerical scoring must be deterministic and reproducible from assessment answers. Large language models may later help explain results, but they must not determine the core numerical score.

## Framework use

Framework mappings support traceability and coverage analysis. They are not a compliance claim. Assessment questions should use natural operational language; framework references should remain metadata behind the question and recommendation layers.

## Validation principles

Before the scoring methodology is considered stable, it should be reviewed with multiple perspectives, including:

- CISO / security leadership
- security architecture
- GRC / risk
- AI / data engineering
- application security
- SOC / incident response

Validation should test whether identical maturity gaps produce appropriately different priorities under different AI exposure and autonomy scenarios.
