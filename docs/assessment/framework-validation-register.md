# Framework Validation Register

Status: Draft v0.1 — validated against authoritative/public framework sources available as of 2026-08-21.

This register records the current crosswalk between the ten assessment domains and external frameworks. It is intentionally conservative: direct identifiers are used only where the source text materially supports the assessment capability.

## Validation legend

- **Direct** — explicit subcategory/risk/outcome match.
- **Thematic** — framework clearly covers the capability, but a one-to-one public control mapping is not appropriate.
- **Pending** — candidate mapping that requires review of the authoritative machine-readable/licensed control set before publication.

---

## Domain 1 — AI Discovery & Inventory

### NIST AI RMF — Direct
- GOVERN 1.6 — mechanisms are in place to inventory AI systems.
- GOVERN 1.5 — ongoing monitoring and periodic review of risk-management processes.
- MAP 1.1 — intended purpose, context, users, impacts and lifecycle considerations are understood/documented.
- MAP 2.1 — the specific task and methods used by the AI system are defined.
- MAP 4.1 — risks of third-party data/software and components are mapped.

### ISO/IEC 42001 — Thematic
Supports organization-wide AI management, policies/objectives, traceability and continual improvement.

### CSA AICM v1.1 — Thematic / granular mapping pending
AICM provides 247 control objectives across 18 domains with ownership, lifecycle and threat mapping. Exact question-to-control IDs should be populated from the machine-readable bundle.

### OWASP / ATLAS
Typically secondary for inventory questions; use only when discovery is specifically tied to AI supply-chain or adversarial visibility.

---

## Domain 2 — Risk Classification & Business Impact

### NIST AI RMF — Direct
- GOVERN 1.3 — determine needed risk-management activity based on risk tolerance.
- GOVERN 2.3 — executive leadership is responsible for AI risk decisions.
- MAP 1.4 — business value/context of use is defined or reevaluated.
- MAP 1.5 — organizational risk tolerances are documented.
- MAP 3.4 / 3.5 — human-AI teaming and human oversight are considered.
- MAP 5.1 — likelihood and magnitude of beneficial and harmful impacts are identified and documented.
- MANAGE 1.2 — treatment is prioritized based on impact, likelihood and available resources.

### ISO/IEC 42001 — Thematic
Directly aligned with managing AI-related risks and opportunities through an AI management system.

### CSA AICM — Thematic / pending control IDs
Risk classification, ownership and lifecycle applicability are core AICM concepts.

---

## Domain 3 — Governance, Accountability & Decision Rights

### NIST AI RMF — Direct
- GOVERN 1.1–1.5 — policy, trustworthy characteristics, risk tolerance, documentation and monitoring.
- GOVERN 2.1 — roles, responsibilities and communication are documented and clear.
- GOVERN 2.3 — executive leadership takes responsibility for AI risk decisions.
- GOVERN 3.2 — roles/responsibilities for human-AI configurations and oversight are defined.
- GOVERN 6.1 / 6.2 — third-party and supply-chain AI risk is governed, including contingency processes.
- MANAGE 1.3 — high-priority risk responses are planned and documented.
- MANAGE 1.4 — residual risk is documented.

### ISO/IEC 42001 — Thematic
Strong thematic alignment to policies, objectives, governance, accountability, risk and continual improvement.

### CSA AICM v1.1 — Thematic / direct family alignment
AICM explicitly includes control ownership and shared responsibility across AI service-stack roles. Granular control IDs remain pending machine-readable bundle review.

### OWASP Agentic — Direct where agent governance is in scope
- ASI03 Identity & Privilege Abuse
- ASI07 Insecure Inter-Agent Communication
- ASI10 Rogue Agents

---

## Domain 4 — AI Threat Modeling

### NIST AI RMF — Direct
- MAP 2.3 — TEVV, data and system-trustworthiness considerations are identified/documented.
- MAP 4.1 / 4.2 — third-party software/data/pre-trained model risks are mapped.
- MAP 5.1 — impacts and likelihood are characterized; NIST guidance explicitly references red teaming as a way to identify limitations and downstream impacts.
- MEASURE 1.1 — methods and metrics are selected for significant AI risks.

### OWASP LLM — Direct
Applicable named risks include:
- LLM01 Prompt Injection
- LLM02 Sensitive Information Disclosure
- LLM03 Supply Chain Vulnerabilities
- LLM04 Data and Model Poisoning
- LLM05 Improper Output Handling
- LLM06 Excessive Agency

### OWASP Agentic — Direct
- ASI01 Agent Goal Hijack
- ASI02 Tool Misuse & Exploitation
- ASI03 Identity & Privilege Abuse
- ASI04 Agentic Supply Chain Vulnerabilities
- ASI05 Unexpected Code Execution
- ASI06 Memory & Context Poisoning
- ASI07 Insecure Inter-Agent Communication
- ASI08 Cascading Failures
- ASI09 Human-Agent Trust Exploitation
- ASI10 Rogue Agents

### MITRE ATLAS — Direct at framework level
ATLAS is specifically designed as a knowledge base of adversary tactics/techniques against AI-enabled systems and is appropriate for threat modeling. Technique-level mappings should be added only after verifying exact ATLAS technique IDs.

---

## Domain 5 — Secure AI Development Lifecycle

### NIST AI RMF — Direct
- GOVERN 1.2 — trustworthy-AI characteristics are integrated into policies/processes.
- GOVERN 1.7 — safe decommissioning and phase-out processes exist.
- GOVERN 4.1 — safety-first design/development/deployment practices.
- GOVERN 4.3 — testing, incident identification and information sharing practices.
- MAP 1.6 — system requirements are elicited and design decisions account for socio-technical risk.
- MAP 2.3 — TEVV considerations are identified and documented.
- MEASURE 2.1 — test sets, metrics and TEVV tools are documented.
- MANAGE 2.4 — mechanisms/responsibilities exist to supersede, disengage or deactivate unsafe AI.

### ISO/IEC 42001 — Thematic
Lifecycle and continual-improvement management align strongly with the AIMS model.

### CSA AICM — Thematic / pending granular IDs
AICM v1.1 explicitly includes lifecycle relevance from preparation through retirement.

### OWASP / MITRE
Use for specific secure-development and validation requirements, not as a general lifecycle replacement.

---

## Domain 6 — Protection Controls

### NIST AI RMF — Direct/thematic
- MAP 1.6 — system requirements include privacy/security implications.
- MAP 4.1 / 4.2 — supply-chain, third-party and pre-trained-model risks.
- MEASURE 2.x — evaluation of trustworthy characteristics, data and monitoring.
- MANAGE 3.1 / 3.2 — third-party resources and pre-trained models are monitored and controlled.
- MANAGE 4.1 — post-deployment monitoring includes adversarial and risky emergent behavior.

### OWASP LLM — Direct
- LLM01 Prompt Injection
- LLM02 Sensitive Information Disclosure
- LLM03 Supply Chain Vulnerabilities
- LLM04 Data and Model Poisoning
- LLM05 Improper Output Handling
- LLM06 Excessive Agency
- LLM10 Unbounded Consumption, where resource/financial abuse controls apply.

### OWASP Agentic — Direct
Especially relevant to:
- ASI02 Tool Misuse & Exploitation
- ASI03 Identity & Privilege Abuse
- ASI04 Agentic Supply Chain Vulnerabilities
- ASI05 Unexpected Code Execution
- ASI06 Memory & Context Poisoning
- ASI07 Insecure Inter-Agent Communication
- ASI10 Rogue Agents

### CSA AICM — Strong thematic alignment
AICM explicitly spans Identity & Access Management, Data Security & Privacy Lifecycle Management, Model Security, Supply Chain Management/Transparency/Accountability and other cloud/AI control domains.

### MITRE ATLAS — Thematic/direct when mapped to mitigations
Use verified ATLAS mitigations or techniques for individual protection controls.

---

## Domain 7 — Validation & Red Teaming

### NIST AI RMF — Direct
- GOVERN 4.3 — testing and incident-identification practices.
- MAP 2.3 — TEVV considerations.
- MAP 5.1 — likelihood/magnitude assessment; NIST guidance explicitly references red teaming.
- MEASURE 1.1 — select risk measurement methods for significant risks.
- MEASURE 2.1 — test sets, metrics and TEVV tooling are documented.
- MEASURE 3.1 — mechanisms track existing, unanticipated and emergent risks over time.

### OWASP LLM / Agentic — Direct
Named OWASP risks are suitable adversarial test scenarios, especially prompt injection, data/model poisoning, tool misuse, identity/privilege abuse, memory/context poisoning, unexpected code execution and cascading failures.

### MITRE ATLAS — Direct at framework level
ATLAS explicitly supports threat assessments and internal red teaming, with tactics, techniques, mitigations and case studies.

### CSA AICM — Thematic
Audit/assurance and AI control-validation practices are relevant; exact IDs pending full dataset review.

---

## Domain 8 — Monitoring & Detection

### NIST AI RMF — Direct
- GOVERN 1.5 — ongoing monitoring and periodic review.
- GOVERN 4.3 — incident identification and information sharing.
- MEASURE 2.4 — TEVV/monitoring/drift.
- MEASURE 3.1 — regular tracking of existing, unanticipated and emergent AI risks.
- MANAGE 2.2 — sustain value of deployed AI through monitoring of performance/trustworthiness and drift.
- MANAGE 4.1 — post-deployment monitoring, incident response, recovery and change management.

### OWASP Agentic — Direct for detection scenarios
- ASI02 Tool Misuse & Exploitation
- ASI03 Identity & Privilege Abuse
- ASI07 Insecure Inter-Agent Communication
- ASI08 Cascading Failures
- ASI10 Rogue Agents

### MITRE ATLAS — Direct at framework level
Appropriate for designing detection around adversary behaviors and AI-specific attack chains.

### CSA AICM — Thematic / pending granular IDs
Monitoring, logging, identity, model and infrastructure controls are relevant.

---

## Domain 9 — Incident Response & Business Resilience

### NIST AI RMF — Direct
- GOVERN 1.5 — monitoring, incident response and override concepts.
- GOVERN 6.2 — contingency processes for failures/incidents in high-risk third-party AI/data systems.
- MANAGE 2.3 — risk-response mechanisms.
- MANAGE 2.4 — disengage/deactivate systems whose outcomes exceed acceptable bounds.
- MANAGE 3.1 — third-party AI risks are regularly monitored and controlled.
- MANAGE 4.1 — monitoring plans include incident response, recovery, decommissioning and change management.
- MANAGE 4.3 — incidents and errors are communicated to relevant AI actors.

### OWASP Agentic — Direct for incident scenarios
- ASI03 Identity & Privilege Abuse
- ASI05 Unexpected Code Execution
- ASI08 Cascading Failures
- ASI10 Rogue Agents

### ISO/IEC 42001 — Thematic
Supports organizational management, reliability and continual improvement; pair with enterprise IR/BCM frameworks for detailed response mechanics.

### CSA AICM — Thematic
Third-party, resilience, identity, infrastructure and governance domains are relevant. Exact control IDs pending full review.

---

## Domain 10 — Measurement & Continuous Improvement

### NIST AI RMF — Direct
- GOVERN 1.5 — ongoing monitoring and periodic review.
- GOVERN 4.2 — document and communicate risks/impacts.
- MEASURE 1.1 — select and implement appropriate methods/metrics.
- MEASURE 3.1 — track risks over time.
- MEASURE 4.1 — gather and assess feedback on measurement efficacy.
- MANAGE 4.2 — measurable continual-improvement activities are integrated into AI system updates.

### ISO/IEC 42001 — Direct thematic fit
ISO explicitly frames the AIMS around establishing, implementing, maintaining and continually improving AI management.

### CSA AICM — Thematic
AICM includes audit/assurance, ownership and lifecycle control concepts suitable for ongoing measurement.

---

# Key validation conclusions

1. **The ten-domain model is supportable by the market frameworks reviewed.** No domain appears conceptually orphaned.
2. **NIST AI RMF should remain the primary structural backbone** because it provides explicit, public, lifecycle-wide subcategories that map cleanly to the assessment.
3. **OWASP should be used as a risk/threat overlay, not as the overall maturity architecture.**
4. **MITRE ATLAS should anchor adversary behavior, threat-modeling, red-team and detection mappings.**
5. **ISO/IEC 42001 should be presented as management-system alignment, not control-level compliance unless the licensed standard text is reviewed.**
6. **CSA AICM v1.1 is highly relevant to the control layer**, but exhaustive question-to-control IDs should be populated from the official machine-readable bundle rather than inferred from summaries.
7. **Framework alignment must not be labeled certification or compliance.**
8. **The assessment remains intentionally broader than LLM security** and is therefore better represented by the combination of NIST + ISO + CSA + OWASP + ATLAS than by any single framework.

# Next mapping work

- Populate question-level NIST AI RMF references for all 60 questions.
- Populate direct OWASP LLM/Agentic risk references only where material.
- Add verified MITRE ATLAS technique IDs for threat-modeling, validation and detection questions.
- Import/review the official CSA AICM machine-readable bundle before assigning granular AICM control IDs.
- Add NIST GenAI Profile mappings as a GenAI-specific overlay.
- Add version metadata to every framework reference used by the application.
