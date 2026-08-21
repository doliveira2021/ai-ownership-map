# Framework Mapping Methodology

## Purpose

Framework mappings provide traceability between assessment capabilities and established standards/frameworks. They are supporting metadata, not the primary user experience.

## Framework families

- NIST AI Risk Management Framework (AI RMF 1.0 / current Playbook)
- NIST Generative AI Profile
- NIST Cybersecurity Framework
- ISO/IEC 42001:2023
- ISO/IEC 27001:2022
- OWASP Top 10 for LLM Applications (2025)
- OWASP Top 10 for Agentic Applications (2026)
- MITRE ATLAS
- Cloud Security Alliance AI Controls Matrix (AICM) v1.1

## Mapping confidence levels

Every mapping should carry one of these statuses:

- **Validated — direct:** the assessment capability materially matches an explicit framework outcome, category, subcategory or named risk.
- **Validated — thematic:** the framework clearly covers the capability, but a one-to-one control mapping is not appropriate or is not publicly available at sufficient granularity.
- **Candidate:** the mapping is plausible but requires additional authoritative control-level review before publication.
- **Not mapped:** no material mapping has yet been established.

## Mapping principles

1. Map only where the capability is materially supported by the referenced framework.
2. Prefer control/function-level references over broad framework-name-only mappings when authoritative text supports them.
3. Do not infer certification or compliance from assessment scores.
4. A single question may map to multiple frameworks.
5. Framework mappings must be version-aware.
6. Do not invent control IDs, requirement numbers or equivalencies.
7. Where official material is public only at thematic level, record a thematic mapping rather than false precision.
8. When a framework changes, update mapping metadata without requiring a redesign of the assessment question.

## Current validation position

### NIST AI RMF

NIST AI RMF provides the strongest direct mapping backbone for the assessment. The current NIST Playbook explicitly organizes outcomes under GOVERN, MAP, MEASURE and MANAGE, with subcategories addressing inventory, accountability, risk tolerance, third-party risk, human oversight, testing, monitoring, incident response, decommissioning and continual improvement.

Use direct subcategory references where materially aligned.

### NIST Generative AI Profile

Use as a GenAI-specific overlay for questions involving generative models, content risks, prompt/context manipulation, data/model risk and other GenAI-specific concerns. Do not treat it as a replacement for the broader AI RMF.

### ISO/IEC 42001:2023

ISO/IEC 42001 is an AI management system standard focused on establishing, implementing, maintaining and continually improving an AI Management System. Public ISO material supports thematic mapping to governance, policies/objectives, risk and opportunity management, traceability, transparency, reliability and continual improvement.

Unless licensed standard text is available for review, retain ISO mappings at thematic level and do not publish fabricated clause-level references.

### CSA AICM v1.1

CSA AICM v1.1 contains 247 control objectives across 18 domains and includes control ownership, lifecycle and threat mapping. It also provides mappings to major standards. The public implementation guidance exposes control-level detail, but the complete machine-readable control bundle should be used before publishing exhaustive question-to-control mappings.

Until that dataset is reviewed, use domain/thematic mappings and mark granular IDs as pending validation.

### OWASP Top 10 for LLM Applications (2025)

Use named-risk mappings where directly relevant, including:

- LLM01 Prompt Injection
- LLM02 Sensitive Information Disclosure
- LLM03 Supply Chain Vulnerabilities
- LLM04 Data and Model Poisoning
- LLM05 Improper Output Handling
- LLM06 Excessive Agency
- LLM09 Misinformation
- LLM10 Unbounded Consumption

Only map an assessment question to an OWASP risk when the question materially addresses that risk or its mitigation.

### OWASP Top 10 for Agentic Applications (2026)

Use direct named-risk mappings for agentic controls and threats:

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

### MITRE ATLAS

MITRE ATLAS is a living knowledge base of adversary tactics and techniques against AI-enabled systems. It currently spans predictive, generative and agentic AI and is appropriate for threat-modeling, adversarial validation, detection and incident-response traceability.

Use tactic/technique-level mappings only when a specific ATLAS technique has been verified. Until then, domain-level mapping to ATLAS is acceptable for threat and validation questions.

## User-facing language

The assessment should ask operational questions in plain language. Framework references may be shown in results or methodology views as supporting traceability.

Example:

> Can the organization reconstruct what a production AI agent did during a security investigation?

rather than:

> Are you compliant with control XYZ?

## Alignment score disclaimer

Any framework alignment percentage is an estimate of maturity coverage based on assessment responses. It is not a formal audit, compliance determination or certification result.

## Validation artifact

See `docs/assessment/framework-validation-register.md` for the current validated crosswalk and evidence status.
