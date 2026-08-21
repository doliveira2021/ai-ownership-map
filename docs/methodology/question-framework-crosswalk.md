# Question-Level Framework Crosswalk

Status: Draft v0.1 — validated against authoritative public sources on 2026-08-21.

This register maps the 60-question AI Security & Resilience Assessment library to NIST AI RMF 1.0 subcategories and, where there is a material technical-risk relationship, to OWASP GenAI LLM Top 10 2026 and OWASP Top 10 for Agentic Applications 2026.

## Mapping rules

- **Direct**: the assessment capability materially matches the cited framework outcome/risk.
- **Thematic**: the framework supports the capability, but the assessment question is broader or more operational.
- **Not mapped**: no useful direct relationship is asserted.
- NIST references are outcome/subcategory mappings, not compliance claims.
- OWASP references are risk relationships, not control requirements.
- A blank OWASP field is intentional; governance and management questions should not be artificially mapped to vulnerability taxonomies.
- NIST AI RMF 1.0 is currently being revised; mappings should be revalidated when the revised Core is published.

## OWASP reference set used

### OWASP GenAI LLM Top 10 2026

- LLM01 — Prompt Injection
- LLM02 — Sensitive Information Disclosure
- LLM03 — Excessive Agency
- LLM04 — Supply Chain
- LLM05 — Data and Model Poisoning
- LLM06 — Unbounded Consumption
- LLM07 — Misinformation
- LLM08 — Hidden Context Exposure
- LLM09 — Vector and Embedding Weaknesses
- LLM10 — Improper Output Handling

### OWASP Top 10 for Agentic Applications 2026

- ASI01 — Agent Goal Hijack
- ASI02 — Tool Misuse & Exploitation
- ASI03 — Identity & Privilege Abuse
- ASI04 — Agentic Supply Chain Vulnerabilities
- ASI05 — Unexpected Code Execution
- ASI06 — Memory & Context Poisoning
- ASI07 — Insecure Inter-Agent Communication
- ASI08 — Cascading Failures
- ASI09 — Human-Agent Trust Exploitation
- ASI10 — Rogue Agents

---

# Domain 1 — AI Discovery & Inventory

| Question | NIST AI RMF | Confidence | OWASP |
|---|---|---|---|
| DISC-001 Enterprise AI Inventory | MAP 1.1, MAP 1.4, MAP 2.1 | Thematic | — |
| DISC-002 Shadow AI Visibility | GOVERN 1.2, MAP 1.1, MEASURE 3.1 | Thematic | LLM04 Supply Chain |
| DISC-003 AI Embedded in SaaS | GOVERN 6.1, MAP 4.1, MAP 4.2 | Direct | LLM04 Supply Chain; ASI04 Agentic Supply Chain |
| DISC-004 Model and Version Visibility | MAP 2.1, MEASURE 2.9, MANAGE 3.2 | Thematic | LLM04 Supply Chain |
| DISC-005 Agent and Tool Inventory | MAP 1.1, MAP 2.1, MAP 3.3 | Thematic | LLM03 Excessive Agency; ASI02 Tool Misuse; ASI03 Identity & Privilege Abuse |
| DISC-006 AI Data Flow Visibility | MAP 1.1, MAP 1.6, MAP 4.1 | Thematic | LLM02 Sensitive Information Disclosure; LLM09 Vector & Embedding Weaknesses |

# Domain 2 — Risk Classification & Business Impact

| Question | NIST AI RMF | Confidence | OWASP |
|---|---|---|---|
| RISK-001 AI Business Criticality | MAP 1.4, MAP 3.2, MAP 5.1 | Direct | — |
| RISK-002 Data Sensitivity and AI Risk | MAP 1.6, MEASURE 2.10, MAP 5.1 | Direct | LLM02 Sensitive Information Disclosure |
| RISK-003 Autonomy and Privilege Risk | MAP 2.2, MAP 3.3, MAP 3.5 | Thematic | LLM03 Excessive Agency; ASI02 Tool Misuse; ASI03 Identity & Privilege Abuse |
| RISK-004 External and Regulatory Impact | GOVERN 1.1, MAP 1.1, MAP 5.1 | Direct | — |
| RISK-005 Human Oversight and Consequence | GOVERN 3.2, MAP 2.2, MAP 3.5 | Direct | LLM03 Excessive Agency; LLM07 Misinformation; ASI09 Human-Agent Trust Exploitation |

# Domain 3 — Governance, Accountability & Decision Rights

| Question | NIST AI RMF | Confidence | OWASP |
|---|---|---|---|
| GOV-001 AI Governance Operating Model | GOVERN 1.2, GOVERN 1.3, GOVERN 2.1 | Direct | — |
| GOV-002 Defined AI Responsibilities | GOVERN 2.1, GOVERN 2.3 | Direct | — |
| GOV-003 Critical AI Business Ownership | GOVERN 2.1, GOVERN 2.3 | Direct | — |
| GOV-004 Agent Sponsorship | GOVERN 2.1, GOVERN 3.2 | Direct | ASI03 Identity & Privilege Abuse; ASI10 Rogue Agents |
| GOV-005 Autonomy Decision Rights | GOVERN 2.3, GOVERN 3.2, MAP 3.5 | Thematic | LLM03 Excessive Agency; ASI02 Tool Misuse; ASI10 Rogue Agents |
| GOV-006 Residual Risk Acceptance | MAP 1.5, MANAGE 1.3, MANAGE 1.4 | Direct | — |
| GOV-007 Third-Party AI Governance | GOVERN 6.1, GOVERN 6.2, MANAGE 3.1 | Direct | LLM04 Supply Chain; ASI04 Agentic Supply Chain |
| GOV-008 AI Incident Decision Authority | GOVERN 2.1, MANAGE 2.3, MANAGE 4.1 | Direct | ASI08 Cascading Failures; ASI10 Rogue Agents |

# Domain 4 — AI Threat Modeling

| Question | NIST AI RMF | Confidence | OWASP |
|---|---|---|---|
| THRT-001 AI-Specific Threat Modeling | MAP 1.1, MAP 4.1, MAP 5.1 | Thematic | All applicable LLM/ASI risks |
| THRT-002 Prompt and Context Manipulation | MAP 4.1, MEASURE 2.7 | Thematic | LLM01 Prompt Injection; LLM08 Hidden Context Exposure; ASI01 Agent Goal Hijack; ASI06 Memory & Context Poisoning |
| THRT-003 Model and Data Manipulation | MAP 4.1, MEASURE 2.7 | Thematic | LLM04 Supply Chain; LLM05 Data & Model Poisoning |
| THRT-004 Agent and Tool Abuse | MAP 3.3, MAP 4.1, MEASURE 2.7 | Thematic | LLM03 Excessive Agency; ASI01; ASI02; ASI03; ASI07; ASI10 |
| THRT-005 AI Supply Chain Threats | GOVERN 6.1, MAP 4.1, MAP 4.2 | Direct | LLM04 Supply Chain; ASI04 Agentic Supply Chain; ASI05 Unexpected Code Execution |

# Domain 5 — Secure AI Development Lifecycle

| Question | NIST AI RMF | Confidence | OWASP |
|---|---|---|---|
| SDLC-001 AI Security by Design | GOVERN 1.2, MAP 1.6, MANAGE 1.3 | Thematic | LLM01, LLM03, LLM04, LLM10 as applicable |
| SDLC-002 AI Dependency and Provenance Controls | GOVERN 6.1, MAP 4.1, MAP 4.2 | Direct | LLM04 Supply Chain; LLM05 Data & Model Poisoning; ASI04 Agentic Supply Chain |
| SDLC-003 Secrets and Non-Human Identity Security | GOVERN 2.1, MAP 4.2, MEASURE 2.7 | Thematic | LLM02 Sensitive Information Disclosure; ASI03 Identity & Privilege Abuse |
| SDLC-004 Pre-Production Security Validation | GOVERN 4.3, MEASURE 2.1, MEASURE 2.7 | Direct | LLM01; LLM03; LLM05; LLM10; applicable ASI risks |
| SDLC-005 Deployment and Permission Review | MAP 4.2, MANAGE 1.1, MANAGE 1.3 | Thematic | LLM03 Excessive Agency; ASI02 Tool Misuse; ASI03 Identity & Privilege Abuse |
| SDLC-006 Secure Retirement | GOVERN 1.7, MANAGE 2.4, MANAGE 4.1 | Direct | — |

# Domain 6 — Protection Controls

| Question | NIST AI RMF | Confidence | OWASP |
|---|---|---|---|
| PROT-001 AI Identity Ownership | GOVERN 2.1, MAP 4.2, MEASURE 2.7 | Thematic | ASI03 Identity & Privilege Abuse |
| PROT-002 Least Privilege for AI and Agents | MAP 4.2, MEASURE 2.7, MANAGE 1.3 | Thematic | LLM03 Excessive Agency; ASI02 Tool Misuse; ASI03 Identity & Privilege Abuse |
| PROT-003 Sensitive Data Access Controls | MAP 1.6, MAP 4.2, MEASURE 2.10 | Direct | LLM02 Sensitive Information Disclosure; ASI03 Identity & Privilege Abuse |
| PROT-004 AI Input and Output Data Protection | MAP 4.2, MEASURE 2.7, MEASURE 2.10 | Thematic | LLM02 Sensitive Information Disclosure; LLM10 Improper Output Handling |
| PROT-005 RAG and Retrieval Security | MAP 4.1, MAP 4.2, MEASURE 2.7 | Thematic | LLM01 Prompt Injection; LLM05 Data & Model Poisoning; LLM09 Vector & Embedding Weaknesses; ASI06 Memory & Context Poisoning |
| PROT-006 Model Integrity and Approval | MAP 2.3, MAP 4.2, MEASURE 2.9 | Thematic | LLM04 Supply Chain; LLM05 Data & Model Poisoning |
| PROT-007 AI Application Guardrails | MAP 1.6, MEASURE 2.6, MEASURE 2.7 | Thematic | LLM01 Prompt Injection; LLM03 Excessive Agency; LLM10 Improper Output Handling |
| PROT-008 Agent Tool Authorization | MAP 3.3, MAP 4.2, MEASURE 2.7 | Thematic | LLM03 Excessive Agency; ASI02 Tool Misuse; ASI03 Identity & Privilege Abuse |
| PROT-009 Agent Action Boundaries and Kill Capability | MAP 3.5, MEASURE 2.6, MANAGE 2.4 | Direct | LLM03 Excessive Agency; ASI02 Tool Misuse; ASI08 Cascading Failures; ASI10 Rogue Agents |
| PROT-010 AI Supply Chain Controls | GOVERN 6.1, MAP 4.2, MANAGE 3.1 | Direct | LLM04 Supply Chain; ASI04 Agentic Supply Chain; ASI05 Unexpected Code Execution |

# Domain 7 — Validation & Red Teaming

| Question | NIST AI RMF | Confidence | OWASP |
|---|---|---|---|
| VAL-001 AI Adversarial Validation | GOVERN 4.3, MEASURE 2.1, MEASURE 2.7 | Direct | Applicable LLM and ASI risks |
| VAL-002 Prompt Injection and Data Leakage Testing | MEASURE 2.7, MEASURE 2.10 | Thematic | LLM01 Prompt Injection; LLM02 Sensitive Information Disclosure; LLM10 Improper Output Handling |
| VAL-003 Agent Abuse and Privilege Testing | MEASURE 2.7, MEASURE 2.8 | Thematic | LLM03 Excessive Agency; ASI01; ASI02; ASI03; ASI07; ASI10 |
| VAL-004 AI Red Teaming | GOVERN 4.3, MEASURE 1.3, MEASURE 2.7 | Direct | Applicable LLM and ASI risks |
| VAL-005 Resilience and Failure-Mode Testing | MEASURE 2.6, MEASURE 2.7, MANAGE 2.3 | Direct | LLM06 Unbounded Consumption; ASI08 Cascading Failures; ASI10 Rogue Agents |

# Domain 8 — Monitoring & Detection

| Question | NIST AI RMF | Confidence | OWASP |
|---|---|---|---|
| MON-001 AI Security Telemetry | MEASURE 2.4, MEASURE 3.1, MANAGE 4.1 | Direct | Supports detection across applicable LLM/ASI risks |
| MON-002 Agent Action Traceability | MEASURE 2.4, MEASURE 2.8, MANAGE 4.1 | Thematic | ASI02 Tool Misuse; ASI03 Identity & Privilege Abuse; ASI07 Insecure Inter-Agent Communication |
| MON-003 Human vs AI Action Attribution | GOVERN 3.2, MEASURE 2.8, MEASURE 2.4 | Thematic | ASI03 Identity & Privilege Abuse; ASI09 Human-Agent Trust Exploitation |
| MON-004 AI Anomaly and Abuse Detection | MEASURE 2.4, MEASURE 3.1, MANAGE 4.1 | Direct | Applicable LLM/ASI risks, especially LLM01, LLM03, ASI01-03, ASI10 |
| MON-005 Model and Dependency Change Monitoring | MEASURE 3.1, MANAGE 3.1, MANAGE 3.2 | Direct | LLM04 Supply Chain; LLM05 Data & Model Poisoning; ASI04 Agentic Supply Chain |

# Domain 9 — Incident Response & Business Resilience

| Question | NIST AI RMF | Confidence | OWASP |
|---|---|---|---|
| IR-001 AI-Specific Incident Playbooks | GOVERN 4.3, MANAGE 2.3, MANAGE 4.1, MANAGE 4.3 | Direct | Applicable LLM and ASI risks |
| IR-002 Agent Containment | MEASURE 2.6, MANAGE 2.4, MANAGE 4.1 | Direct | LLM03 Excessive Agency; ASI02 Tool Misuse; ASI03 Identity & Privilege Abuse; ASI10 Rogue Agents |
| IR-003 AI Evidence Preservation and Investigation | GOVERN 4.3, MEASURE 2.4, MANAGE 4.3 | Thematic | Supports investigation across applicable LLM/ASI risks |
| IR-004 AI Service Continuity | GOVERN 6.2, MEASURE 2.7, MANAGE 2.1, MANAGE 4.1 | Direct | LLM06 Unbounded Consumption; ASI08 Cascading Failures |
| IR-005 Provider Concentration and Exit Readiness | GOVERN 6.2, MANAGE 2.1, MANAGE 3.1 | Direct | LLM04 Supply Chain; ASI04 Agentic Supply Chain |

# Domain 10 — Measurement & Continuous Improvement

| Question | NIST AI RMF | Confidence | OWASP |
|---|---|---|---|
| MEAS-001 AI Security KPIs and KRIs | MEASURE 1.1, MEASURE 1.2, MEASURE 3.1 | Direct | — |
| MEAS-002 Executive and Board Reporting | GOVERN 2.3, GOVERN 4.2, MANAGE 1.4 | Thematic | — |
| MEAS-003 Periodic Reassessment | MEASURE 1.2, MEASURE 3.1, MANAGE 4.2 | Direct | — |
| MEAS-004 AI Security Roadmap Governance | MANAGE 1.2, MANAGE 1.3, MANAGE 4.2 | Direct | — |
| MEAS-005 Continuous Learning from Incidents and Testing | GOVERN 4.3, MEASURE 4.3, MANAGE 4.2, MANAGE 4.3 | Direct | — |

---

# Validation summary

## NIST AI RMF

All 60 questions have at least one reasonable NIST AI RMF relationship. This is expected because the assessment intentionally operationalizes enterprise AI risk management across governance, context mapping, measurement/testing and risk treatment.

The strongest direct mappings are concentrated in:

- accountability and responsibility — GOVERN 2
- human oversight — GOVERN 3.2 / MAP 3.5
- third-party AI — GOVERN 6 / MAP 4 / MANAGE 3
- testing and validation — GOVERN 4.3 / MEASURE 2
- production monitoring — MEASURE 2.4 / MEASURE 3 / MANAGE 4.1
- risk prioritization and acceptance — MAP 1.5 / MANAGE 1
- deactivation and recovery — MANAGE 2.3 / MANAGE 2.4 / MANAGE 4

## OWASP

OWASP is intentionally not mapped to every question. It is most useful in the technical domains:

- threat modeling
- secure development
- protection controls
- red teaming / validation
- monitoring / detection
- incident response

Governance, reporting and maturity questions remain primarily NIST/ISO/CSA territory.

## Version note

The OWASP LLM mapping uses the **2026** LLM Top 10 naming and IDs. The Agentic mapping uses the **OWASP Top 10 for Agentic Applications 2026**.

NIST AI RMF mappings use **AI RMF 1.0**. NIST states that AI RMF 1.0 is being updated; this register must be reviewed after the revised Core is released.

## Next validation wave

1. Add NIST Generative AI Profile overlays only to GenAI-relevant questions.
2. Verify MITRE ATLAS technique IDs for threat-modeling, validation and detection questions.
3. Import the official CSA AICM machine-readable control set and map security-control questions.
4. Add ISO/IEC 42001 thematic/management-system mappings without asserting unverified clause-level equivalence.
5. Convert this register into structured mapping data for the application.
