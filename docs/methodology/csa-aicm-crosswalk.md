# CSA AI Controls Matrix (AICM) Crosswalk

Status: Draft v0.1 — validated against CSA public AICM v1.1 materials on 2026-08-21.

This document maps the AI Security & Resilience Assessment to the Cloud Security Alliance AI Controls Matrix (AICM) v1.1.

## Authoritative baseline

CSA AICM v1.1 was released on 2026-06-22 and contains 247 control objectives across 18 domains. CSA also published a machine-readable AICM bundle (JSON/YAML/OSCAL) on 2026-08-04.

The public AICM materials confirm that the framework includes ownership, architectural relevance, LLM lifecycle relevance and threat-category metadata, and that it maps to ISO/IEC 42001 and other major frameworks.

## Important limitation

This repository does **not** assign exhaustive AICM control IDs yet.

Reason: the authoritative machine-readable bundle should be imported and reviewed before assigning granular control IDs at scale. Until that is done, this crosswalk uses validated AICM domain-level relationships and a small number of publicly verifiable control examples.

This avoids false precision.

## AICM domains used for mapping

The current AICM domain set includes areas such as:

- Audit & Assurance (A&A)
- Agentic AI (AA)
- AI Security (AIS)
- Business Continuity Management (BCM)
- Change & Configuration Management (CCC)
- Cryptography, Encryption & Key Management (CEK)
- Data Security & Privacy (DSP)
- Governance, Risk & Compliance (GRC)
- Identity & Access Management (IAM)
- Interoperability & Portability (IPY)
- Infrastructure & Virtualization Security (IVS)
- Logging & Monitoring (LOG)
- Model Security (MDS)
- Security Incident Management, E-Discovery & Cloud Forensics (SEF)
- Supply Chain Management, Transparency & Accountability (STA)
- Threat & Vulnerability Management (TVM)
- Universal Endpoint Management (UEM)

## Assessment-domain crosswalk

| ASRA domain | Primary AICM domains | Confidence |
|---|---|---|
| AI Discovery & Inventory | GRC, AIS, STA, LOG | Thematic |
| Risk Classification & Business Impact | GRC, AIS, BCM | Direct/Thematic |
| Governance, Accountability & Decision Rights | GRC, A&A, STA, AA | Direct |
| AI Threat Modeling | TVM, AIS, MDS, AA, STA | Direct |
| Secure AI Development Lifecycle | AIS, MDS, CCC, IAM, CEK, STA | Direct |
| Protection Controls | IAM, DSP, MDS, AA, AIS, CEK, IVS, STA | Direct |
| Validation & Red Teaming | TVM, AIS, MDS, AA, A&A | Direct |
| Monitoring & Detection | LOG, SEF, AIS, AA, IAM | Direct |
| Incident Response & Business Resilience | SEF, BCM, LOG, AA, STA | Direct |
| Measurement & Continuous Improvement | A&A, GRC, TVM, LOG | Direct |

## Question-family mapping

### Discovery & inventory

- `DISC-001` Enterprise AI Inventory → GRC / AIS
- `DISC-002` Shadow AI Visibility → AIS / LOG / GRC
- `DISC-003` AI Embedded in SaaS → STA / GRC
- `DISC-004` Model and Version Visibility → MDS / CCC
- `DISC-005` Agent and Tool Inventory → AA / IAM / AIS
- `DISC-006` AI Data Flow Visibility → DSP / AIS

### Risk classification

- `RISK-001` Business Criticality → GRC / BCM
- `RISK-002` Data Sensitivity → DSP / GRC
- `RISK-003` Autonomy and Privilege Risk → AA / IAM / GRC
- `RISK-004` External and Regulatory Impact → GRC / A&A
- `RISK-005` Human Oversight and Consequence → GRC / AA

### Governance & accountability

- `GOV-001` AI Governance Operating Model → GRC / A&A
- `GOV-002` Defined AI Responsibilities → GRC / A&A
- `GOV-003` Critical AI Business Ownership → GRC
- `GOV-004` Agent Sponsorship → AA / GRC
- `GOV-005` Autonomy Decision Rights → AA / GRC
- `GOV-006` Residual Risk Acceptance → GRC / A&A
- `GOV-007` Third-Party AI Governance → STA / GRC
- `GOV-008` AI Incident Decision Authority → SEF / GRC

### Threat modeling

- `THRT-001` AI-Specific Threat Modeling → TVM / AIS
- `THRT-002` Prompt and Context Manipulation → AIS / AA / MDS
- `THRT-003` Model and Data Manipulation → MDS / DSP / TVM
- `THRT-004` Agent and Tool Abuse → AA / IAM / TVM
- `THRT-005` AI Supply Chain Threats → STA / MDS / TVM

### Secure AI development lifecycle

- `SDLC-001` AI Security by Design → AIS / GRC
- `SDLC-002` Dependency and Provenance Controls → MDS / STA
- `SDLC-003` Secrets and Non-Human Identity → IAM / CEK
- `SDLC-004` Pre-Production Security Validation → TVM / AIS / MDS
- `SDLC-005` Deployment and Permission Review → CCC / IAM / AA
- `SDLC-006` Secure Retirement → CCC / IAM / DSP

### Protection controls

- `PROT-001` AI Identity Ownership → IAM / AA
- `PROT-002` Least Privilege → IAM / AA
- `PROT-003` Sensitive Data Access → DSP / IAM
- `PROT-004` Input and Output Data Protection → DSP / AIS
- `PROT-005` RAG and Retrieval Security → DSP / MDS / AIS
- `PROT-006` Model Integrity and Approval → MDS / CCC
- `PROT-007` AI Application Guardrails → AIS / AA
- `PROT-008` Agent Tool Authorization → AA / IAM
- `PROT-009` Agent Action Boundaries and Kill Capability → AA / SEF / BCM
- `PROT-010` AI Supply Chain Controls → STA / MDS / TVM

### Validation & red teaming

- `VAL-001` AI Adversarial Validation → TVM / AIS
- `VAL-002` Prompt Injection and Data Leakage Testing → TVM / AIS / DSP
- `VAL-003` Agent Abuse and Privilege Testing → AA / IAM / TVM
- `VAL-004` AI Red Teaming → TVM / AIS / A&A
- `VAL-005` Resilience and Failure-Mode Testing → BCM / AIS / AA

### Monitoring & detection

- `MON-001` AI Security Telemetry → LOG / AIS
- `MON-002` Agent Action Traceability → LOG / AA / SEF
- `MON-003` Human vs AI Attribution → LOG / IAM / AA
- `MON-004` AI Anomaly and Abuse Detection → LOG / AIS / AA
- `MON-005` Model and Dependency Change Monitoring → CCC / MDS / STA / LOG

### Incident response & resilience

- `IR-001` AI-Specific Incident Playbooks → SEF / AIS
- `IR-002` Agent Containment → SEF / AA / IAM
- `IR-003` Evidence Preservation and Investigation → SEF / LOG
- `IR-004` AI Service Continuity → BCM / STA
- `IR-005` Provider Concentration and Exit Readiness → BCM / STA / IPY

### Measurement & continuous improvement

- `MEAS-001` AI Security KPIs and KRIs → GRC / A&A / LOG
- `MEAS-002` Executive and Board Reporting → GRC / A&A
- `MEAS-003` Periodic Reassessment → A&A / GRC / TVM
- `MEAS-004` AI Security Roadmap Governance → GRC / A&A
- `MEAS-005` Continuous Learning → A&A / TVM / SEF / LOG

## Publicly verifiable control examples

The public CSA implementation guidance exposes individual controls, including examples such as:

- `MDS-01` — Training Pipeline Security
- `MDS-02` — Model Artifact Scanning
- `A&A-01` — Audit and Assurance Policy and Procedures

These validate the assessment's Model Security, assurance and lifecycle direction, but they are not used as a substitute for importing the full authoritative control set.

## Planned machine-readable import

When the AICM machine-readable bundle is available in the development environment, the project should:

1. Import control IDs, titles and descriptions.
2. Preserve CSA ownership/applicability metadata.
3. Preserve lifecycle and threat-category metadata.
4. Map ASRA questions to one or more AICM controls with confidence labels.
5. Store the AICM version with every mapping.
6. Avoid deriving compliance scores from the mapping.

## Positioning

AICM is the strongest **control implementation layer** in the current ASRA framework stack.

Use:

- NIST AI RMF for enterprise AI risk-management structure.
- NIST GenAI Profile for GenAI-specific risk overlays.
- OWASP and MITRE ATLAS for technical/adversarial risks.
- CSA AICM for actionable security-control coverage.
- ISO/IEC 42001 for management-system alignment.
