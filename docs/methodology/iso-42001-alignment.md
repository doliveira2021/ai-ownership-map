# ISO/IEC 42001 Alignment

Status: Draft v0.1 — validated against ISO public materials on 2026-08-21.

This document positions the AI Security & Resilience Assessment against ISO/IEC 42001, the international standard for Artificial Intelligence Management Systems (AIMS).

## Purpose

ISO/IEC 42001 provides the management-system layer of the assessment framework stack.

It is particularly relevant to:

- governance
- accountability
- policy
- organizational roles
- AI risk management
- lifecycle management
- monitoring and measurement
- continual improvement
- third-party governance
- documented processes and evidence

## Important limitation

This project does **not** claim ISO/IEC 42001 compliance, certification readiness or clause-by-clause coverage.

The full normative standard is licensed content. Public ISO materials confirm the purpose and management-system structure of ISO/IEC 42001, but they do not provide sufficient authoritative detail to support exhaustive clause-level mappings in this repository.

Therefore:

- this crosswalk is thematic and capability-based;
- no unverified clause IDs are fabricated;
- framework alignment must never be presented as certification.

## ISO/IEC 42001 management-system themes

The assessment aligns to the following publicly supported ISO/IEC 42001 themes:

- organizational context and AI management scope
- leadership and accountability
- policy and objectives
- roles and responsibilities
- risk and opportunity management
- resources and competence
- lifecycle and operational controls
- monitoring, measurement and evaluation
- corrective action and continual improvement
- responsible management of AI systems and associated stakeholders

## Assessment-domain alignment

| ASRA domain | ISO/IEC 42001 alignment | Confidence |
|---|---|---|
| AI Discovery & Inventory | Scope, context, system understanding and documented information | Thematic |
| Risk Classification & Business Impact | AI risk and opportunity assessment | Direct/Thematic |
| Governance, Accountability & Decision Rights | Leadership, policy, roles, responsibilities and accountability | Direct |
| AI Threat Modeling | Risk identification and operational planning | Thematic |
| Secure AI Development Lifecycle | Operational planning and lifecycle management | Direct/Thematic |
| Protection Controls | Operational controls supporting identified AI risks | Thematic |
| Validation & Red Teaming | Evaluation, testing and evidence of control effectiveness | Thematic |
| Monitoring & Detection | Monitoring, measurement, analysis and evaluation | Direct/Thematic |
| Incident Response & Business Resilience | Operational response, corrective action and continuity-related governance | Thematic |
| Measurement & Continuous Improvement | Performance evaluation and continual improvement | Direct |

## Question-family alignment

### Discovery & inventory

`DISC-*` questions support the organization's ability to define scope, understand AI systems under management and maintain documented information about relevant systems and dependencies.

### Risk classification

`RISK-*` questions align strongly to management-system risk assessment by identifying business criticality, data sensitivity, autonomy, external impact and human oversight requirements.

### Governance & accountability

`GOV-*` questions are the strongest ISO/IEC 42001 alignment area in ASRA.

They evaluate whether:

- leadership and governance structures exist;
- roles and responsibilities are explicitly assigned;
- accountable business owners exist;
- decision rights are defined;
- residual risk is formally accepted;
- third-party AI is governed;
- incident authority is established.

### Secure lifecycle

`SDLC-*` questions support operational planning and lifecycle governance by assessing security-by-design, dependency provenance, identity/secrets management, pre-production validation, deployment review and retirement.

### Protection controls

`PROT-*` questions represent technical and operational controls selected to address assessed AI risks. ISO/IEC 42001 does not prescribe the same technical threat taxonomy as OWASP or MITRE ATLAS; these questions therefore align thematically as risk-treatment controls.

### Validation and monitoring

`VAL-*` and `MON-*` questions support evaluation of whether AI controls are effective in practice and whether performance/security behavior is observable over time.

### Incident response and resilience

`IR-*` questions align thematically to operational response, corrective action, documented procedures and management of disruption or undesirable AI behavior.

### Measurement and improvement

`MEAS-*` questions align directly with management-system performance evaluation and continual improvement.

They assess:

- KPIs and KRIs
- executive reporting
- reassessment
- roadmap governance
- feedback loops from incidents, testing and operational telemetry

## Accountability as a management-system capability

The ASRA Accountability & Decision Rights model is particularly important for ISO/IEC 42001 alignment because management systems depend on explicit responsibility and authority.

The assessment therefore measures whether the organization can answer:

- Who owns the AI system?
- Who approves material AI risk?
- Who approves access to sensitive data?
- Who can increase autonomy or privilege?
- Who accepts residual risk?
- Who can stop the system during an incident?
- Who authorizes recovery?

This is a stronger operational test than simply asking whether an AI governance committee exists.

## Evidence model

Where ISO/IEC 42001 alignment is shown in reports, evidence should focus on management-system artifacts such as:

- policies
- documented roles and responsibilities
- AI inventory records
- risk-assessment records
- risk-acceptance records
- approval workflows
- third-party review records
- monitoring reports
- testing evidence
- incident records
- corrective-action tracking
- management review outputs
- continual-improvement roadmaps

## Relationship to ISO/IEC 27001

ISO/IEC 42001 should complement rather than replace an information-security management system.

The assessment's technical security controls remain strongly related to traditional information-security capabilities such as identity, data protection, monitoring, incident response, supply-chain security and secure development.

A future mapping may add ISO/IEC 27001 as a separate security-management layer, while ISO/IEC 42001 remains focused on AI management-system governance and lifecycle accountability.

## Positioning in the ASRA framework stack

The intended roles are:

- **NIST AI RMF** — enterprise AI risk-management backbone
- **NIST GenAI Profile** — Generative AI risk overlay
- **OWASP GenAI / Agentic** — application and agentic risk taxonomy
- **MITRE ATLAS** — adversary behavior and testing layer
- **CSA AICM** — AI security control implementation layer
- **ISO/IEC 42001** — AI management-system and governance alignment layer

## Reporting language

Approved language:

> This assessment provides estimated alignment to ISO/IEC 42001 management-system themes based on self-reported maturity responses.

Do not use:

> ISO/IEC 42001 compliant

> ISO/IEC 42001 certified

> certification-ready

unless such statements are supported by an independent formal process outside this assessment.
