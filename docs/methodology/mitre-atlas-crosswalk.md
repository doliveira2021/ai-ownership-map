# MITRE ATLAS Crosswalk

Status: Draft v0.1 — validated against current MITRE ATLAS public technique naming and IDs on 2026-08-21.

This document maps the AI Security & Resilience Assessment to MITRE ATLAS where adversary behavior, attack techniques, red teaming, detection engineering or agentic abuse are materially relevant.

## Mapping principle

MITRE ATLAS is not used as the enterprise governance backbone. It is used as the adversarial behavior layer for:

- threat modeling
- red teaming
- validation
- detection engineering
- incident investigation
- agentic abuse analysis

## Validated ATLAS techniques used in this version

- AML.T0051 — LLM Prompt Injection
- AML.T0020 — Poison Training Data
- AML.T0024 — Exfiltration via AI Inference API
- AML.T0084 — AI Supply Chain Compromise
- AML.T0110 — AI Agent Context Poisoning
- AML.T0115 — AI Agent Tool Invocation

Where a question is broader than an exact technique, the mapping is labeled Thematic rather than Direct.

## Question-level crosswalk

| Question | MITRE ATLAS | Confidence |
|---|---|---|
| THRT-002 Prompt and Context Manipulation | AML.T0051 LLM Prompt Injection; AML.T0110 AI Agent Context Poisoning | Direct |
| THRT-003 Model and Data Manipulation | AML.T0020 Poison Training Data; AML.T0024 Exfiltration via AI Inference API | Thematic |
| THRT-004 Agent and Tool Abuse | AML.T0115 AI Agent Tool Invocation; AML.T0110 AI Agent Context Poisoning | Thematic |
| THRT-005 AI Supply Chain Threats | AML.T0084 AI Supply Chain Compromise | Direct |
| SDLC-002 AI Dependency and Provenance Controls | AML.T0084 AI Supply Chain Compromise | Direct |
| SDLC-004 Pre-Production Security Validation | AML.T0051; AML.T0020; AML.T0084; AML.T0110; AML.T0115 | Thematic |
| PROT-004 AI Input and Output Data Protection | AML.T0024 Exfiltration via AI Inference API | Thematic |
| PROT-005 RAG and Retrieval Security | AML.T0051 LLM Prompt Injection; AML.T0110 AI Agent Context Poisoning | Thematic |
| PROT-008 Agent Tool Authorization | AML.T0115 AI Agent Tool Invocation | Direct |
| PROT-010 AI Supply Chain Controls | AML.T0084 AI Supply Chain Compromise | Direct |
| VAL-001 AI Adversarial Validation | AML.T0051; AML.T0020; AML.T0084; AML.T0110; AML.T0115 | Thematic |
| VAL-002 Prompt Injection and Data Leakage Testing | AML.T0051 LLM Prompt Injection; AML.T0024 Exfiltration via AI Inference API | Direct |
| VAL-003 Agent Abuse and Privilege Testing | AML.T0115 AI Agent Tool Invocation; AML.T0110 AI Agent Context Poisoning | Thematic |
| VAL-004 AI Red Teaming | AML.T0051; AML.T0020; AML.T0024; AML.T0084; AML.T0110; AML.T0115 | Thematic |
| MON-002 Agent Action Traceability | AML.T0115 AI Agent Tool Invocation | Thematic |
| MON-004 AI Anomaly and Abuse Detection | Detection coverage for AML.T0051, AML.T0024, AML.T0110, AML.T0115 | Thematic |
| MON-005 Model and Dependency Change Monitoring | AML.T0084 AI Supply Chain Compromise | Thematic |
| IR-001 AI-Specific Incident Playbooks | Response coverage for validated ATLAS techniques above | Thematic |
| IR-002 Agent Containment | AML.T0115 AI Agent Tool Invocation; AML.T0110 AI Agent Context Poisoning | Thematic |
| IR-003 AI Evidence Preservation and Investigation | Investigation support for validated ATLAS techniques above | Thematic |

## Interpretation guidance

### Prompt injection and context poisoning

Prompt injection and context poisoning should be treated as distinct but related threat families. The assessment should preserve both because agentic systems can inherit malicious context through memory, retrieval or previous interactions even where the immediate user prompt is benign.

### Agent tool invocation

AML.T0115 is particularly important for the assessment's agent-security questions because it represents the point where AI behavior becomes operational action through a tool, API or external capability.

This supports the core assessment principle:

> Models generate. Agents act.

### Supply chain

AML.T0084 supports the assessment's model, library, connector, dataset and dependency risk questions. It should be interpreted broadly enough to cover AI-specific upstream dependencies while preserving the assessment's separate third-party governance layer.

### Training-data poisoning

AML.T0020 directly supports threat-modeling and validation of poisoned training or fine-tuning data. It is not automatically applicable to every organization, so questions involving training-data poisoning should support Not Applicable when the organization does not train or fine-tune models.

### Exfiltration via inference API

AML.T0024 is relevant to sensitive-information disclosure and testing of AI inference interfaces, but should not be used as a generic mapping for all data-loss risk.

## Gaps and future ATLAS validation

ATLAS is evolving quickly, particularly for agentic AI. Future revisions should evaluate additional techniques covering:

- agent identity abuse
- inter-agent communication
- delegation chains
- memory manipulation
- excessive or unsafe autonomy
- model extraction
- resource exhaustion / denial of wallet
- model evasion

Only exact IDs verified against current authoritative ATLAS data should be added.

## Version note

This register should be revalidated whenever MITRE releases a new ATLAS version or materially expands the agentic-AI technique set.
