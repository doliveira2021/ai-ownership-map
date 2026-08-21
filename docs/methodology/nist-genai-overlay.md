# NIST Generative AI Profile Overlay

Status: Draft v0.1 — validated against NIST AI 600-1 public text on 2026-08-21.

This document overlays the AI Security & Resilience Assessment with the NIST AI RMF Generative AI Profile (NIST AI 600-1). It is intentionally selective: only questions with a material Generative AI relationship are mapped.

## Key principle

The NIST GenAI Profile is a companion to AI RMF 1.0. It should be used as a GenAI-specific overlay, not as the structural backbone for the full assessment.

## NIST GenAI risk categories used

- Confabulation
- Data Privacy
- Human-AI Configuration
- Information Integrity
- Information Security
- Intellectual Property
- Value Chain and Component Integration
- Harmful Bias and Homogenization
- Dangerous, Violent, or Hateful Content
- CBRN Information or Capabilities

This assessment is focused primarily on security, resilience and enterprise risk, so not every NIST GenAI risk category is represented equally.

## Question-level overlay

| Question | NIST GenAI Profile relationship | Confidence |
|---|---|---|
| DISC-003 AI Embedded in SaaS | Value Chain and Component Integration; GV-6.2-001 through GV-6.2-003 | Direct |
| DISC-004 Model and Version Visibility | Value Chain and Component Integration; MP-4.1-007, MP-4.1-008 | Thematic |
| DISC-006 AI Data Flow Visibility | Data Privacy; Information Security; MP-4.1-006, MP-4.1-009 | Thematic |
| RISK-002 Data Sensitivity and AI Risk | Data Privacy; MP-4.1-009; MS-2.2-003, MS-2.2-004 | Direct |
| RISK-004 External and Regulatory Impact | Data Privacy; Information Integrity; Human-AI Configuration | Thematic |
| RISK-005 Human Oversight and Consequence | Human-AI Configuration; Confabulation; MS-2.5-001 through MS-2.5-004 | Direct |
| GOV-007 Third-Party AI Governance | Value Chain and Component Integration; GV-6.2-001 through GV-6.2-003 | Direct |
| GOV-008 AI Incident Decision Authority | Information Security; Value Chain and Component Integration; GV-6.2-003 | Thematic |
| THRT-002 Prompt and Context Manipulation | Information Security; MS-2.7-007 | Direct |
| THRT-003 Model and Data Manipulation | Information Security; Information Integrity; MS-2.7-007 | Direct |
| THRT-005 AI Supply Chain Threats | Value Chain and Component Integration; Information Security; GV-6.2, MP-4.1 | Direct |
| SDLC-001 AI Security by Design | Information Security; Human-AI Configuration | Thematic |
| SDLC-002 AI Dependency and Provenance Controls | Value Chain and Component Integration; Information Integrity; MS-1.1-007 | Direct |
| SDLC-004 Pre-Production Security Validation | Information Security; MS-2.7-007, MS-2.7-008 | Direct |
| SDLC-005 Deployment and Permission Review | Information Security; Human-AI Configuration | Thematic |
| PROT-003 Sensitive Data Access Controls | Data Privacy; Information Security | Direct |
| PROT-004 AI Input and Output Data Protection | Data Privacy; Information Integrity; MP-4.1-009 | Direct |
| PROT-005 RAG and Retrieval Security | Information Security; Information Integrity; Data Privacy | Thematic |
| PROT-006 Model Integrity and Approval | Information Integrity; Information Security; MS-2.7-005, MS-2.7-008 | Direct |
| PROT-007 AI Application Guardrails | Information Security; Human-AI Configuration; Confabulation | Thematic |
| PROT-010 AI Supply Chain Controls | Value Chain and Component Integration; Information Security | Direct |
| VAL-001 AI Adversarial Validation | Information Security; MS-2.7-007 | Direct |
| VAL-002 Prompt Injection and Data Leakage Testing | Information Security; Data Privacy; MS-2.7-007 | Direct |
| VAL-004 AI Red Teaming | Information Security; MS-1.1-008, MS-2.7-007 | Direct |
| VAL-005 Resilience and Failure-Mode Testing | Information Security; Human-AI Configuration; Confabulation | Thematic |
| MON-001 AI Security Telemetry | Information Security; MS-2.7-004 through MS-2.7-006 | Direct |
| MON-004 AI Anomaly and Abuse Detection | Information Security; MS-2.7-004, MS-2.7-006 | Direct |
| MON-005 Model and Dependency Change Monitoring | Value Chain and Component Integration; Information Security; MP-4.1-007, MP-4.1-008 | Direct |
| IR-001 AI-Specific Incident Playbooks | Information Security; Value Chain and Component Integration; GV-6.2-003 | Direct |
| IR-003 AI Evidence Preservation and Investigation | Information Security; Information Integrity | Thematic |
| IR-004 AI Service Continuity | Value Chain and Component Integration; GV-6.2-001, GV-6.2-003 | Direct |
| IR-005 Provider Concentration and Exit Readiness | Value Chain and Component Integration; GV-6.2-001 | Direct |
| MEAS-001 AI Security KPIs and KRIs | Information Security; MS-2.7-004 through MS-2.7-006 | Direct |
| MEAS-005 Continuous Learning from Incidents and Testing | Information Security; MS-2.7-006 | Direct |

## Important NIST GenAI Profile anchors

### Third-party and value-chain risk

The profile explicitly recommends documenting GenAI risks in the system value chain, identifying over-reliance on third-party data, defining fallbacks and establishing incident-response plans for third-party GenAI technologies.

This directly supports the assessment's third-party governance, concentration-risk and continuity questions.

### Security measurement and red teaming

MS-2.7 includes actions to define security-effectiveness metrics, assess provenance and integrity controls, track implementation of recommendations from security checks/incidents and perform AI red teaming against prompt injection, adversarial examples, data poisoning, model extraction and related attacks.

This directly supports the validation, telemetry, detection and continuous-improvement portions of the assessment.

### Data privacy

The profile includes actions around handling third-party training data, detecting PII/sensitive data in generated outputs and applying privacy-enhancing techniques. These support data-sensitivity, output-protection and data-access questions.

### Human-AI configuration and confabulation

The profile emphasizes human feedback, appropriate interpretation of performance, verification of sources/citations and monitoring of human overrides. These support questions about human oversight, high-impact decisions and failure-mode testing.

## Exclusions

The following assessment areas are intentionally not forced into the GenAI Profile when the underlying capability is technology-neutral:

- general enterprise AI inventory
- generic business ownership
- generic residual risk acceptance
- broad board reporting
- non-GenAI predictive AI controls

Those remain primarily mapped to AI RMF 1.0, ISO/IEC 42001 and CSA AICM.

## Version note

This overlay uses NIST AI 600-1, published July 26, 2024. NIST updated the publication page in April 2026; the report remains the current Generative AI Profile at the time of this validation.
