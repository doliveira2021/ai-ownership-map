# Recommendation Library

Status: Draft v0.1

This document defines the initial recommendation model used to convert assessment gaps into an actionable roadmap. Recommendations are vendor-agnostic and capability-based.

## Recommendation schema

Each recommendation should contain:

- Recommendation ID
- Domain
- Title
- Risk addressed
- Trigger conditions
- Business rationale
- Recommended action
- Suggested owners
- Evidence of completion
- Target maturity
- Suggested time horizon
- Framework mapping IDs

---

## REC-DISC-001 — Establish an Enterprise AI Inventory

**Domain:** AI Discovery & Inventory

**Risk:** Unknown or unowned AI systems can create unmanaged security, privacy, regulatory and operational exposure.

**Trigger examples:** Low scores on DISC-001, DISC-003, DISC-005 or DISC-006.

**Recommended action:** Establish and maintain an enterprise AI inventory covering AI applications, models, embedded SaaS AI, agents, data sources, identities, tools, external providers and accountable owners.

**Suggested owners:** CIO/CTO, CISO, AI/Data leadership, Enterprise Architecture.

**Evidence of completion:**
- centralized AI inventory
- documented business owner
- documented technical owner
- model/service identification
- key data sources
- third-party dependencies
- agent/tool relationships
- review/update process

**Target maturity:** 3 — Defined

**Suggested horizon:** 0–90 days

---

## REC-RISK-001 — Implement AI Risk Classification

**Domain:** Risk Classification & Business Impact

**Risk:** AI controls may be applied uniformly even though business impact, autonomy, privilege and data sensitivity differ materially.

**Trigger examples:** Low scores on RISK-001 through RISK-005.

**Recommended action:** Define a standard AI risk-classification method using business criticality, data sensitivity, autonomy, privilege, external exposure, regulatory impact, human oversight and dependency risk.

**Suggested owners:** CISO, Enterprise Risk, AI Governance, business owners.

**Evidence of completion:**
- documented classification criteria
- risk tiers
- control requirements by tier
- approval requirements by tier
- reassessment triggers

**Target maturity:** 3

**Suggested horizon:** 0–90 days

---

## REC-GOV-001 — Define an Enterprise AI Responsibility Matrix

**Domain:** Governance, Accountability & Decision Rights

**Risk:** Unclear ownership can delay decisions, weaken risk acceptance and complicate incident response.

**Trigger examples:** Low scores on GOV-002 through GOV-008 or low Accountability Coverage.

**Recommended action:** Define responsibility and decision rights for AI ownership, security, model approval, data access, agent sponsorship, autonomy changes, tool authorization, monitoring, incidents, risk acceptance and retirement.

**Suggested owners:** Executive AI Governance, CISO, CIO/CTO, AI/Data leadership, Risk/Legal.

**Evidence of completion:**
- documented responsibility matrix
- named accountable roles
- approval paths
- risk acceptance authority
- agent sponsor requirement
- incident authority model

**Target maturity:** 3

**Suggested horizon:** 0–90 days

---

## REC-THRT-001 — Integrate AI Threat Modeling

**Domain:** AI Threat Modeling

**Risk:** Existing threat models may miss prompt/context manipulation, AI supply-chain threats, agent abuse and model/data manipulation.

**Trigger examples:** Low scores on THRT-001 through THRT-005.

**Recommended action:** Extend architecture and application threat modeling to cover relevant AI-specific attack paths and abuse scenarios.

**Suggested owners:** Security Architecture, AppSec, AI Engineering, Threat Modeling teams.

**Evidence of completion:**
- AI threat-model template
- documented threat scenarios
- control requirements linked to threats
- validation requirements
- periodic review triggers

**Target maturity:** 3

**Suggested horizon:** 3–6 months

---

## REC-SDLC-001 — Establish a Secure AI Development Lifecycle

**Domain:** Secure AI Development Lifecycle

**Risk:** AI security issues can enter production when controls are added only after implementation.

**Trigger examples:** Low scores on SDLC-001 through SDLC-006.

**Recommended action:** Integrate AI-specific security requirements into Design, Build, Test, Deploy, Operate and Retire stages of the existing engineering lifecycle.

**Suggested owners:** Engineering, AppSec, Security Architecture, AI/Data teams.

**Evidence of completion:**
- design review criteria
- provenance and dependency controls
- identity/secrets requirements
- pre-production testing gates
- permission review
- retirement checklist

**Target maturity:** 3

**Suggested horizon:** 3–6 months

---

## REC-PROT-001 — Strengthen AI and Agent Identity Governance

**Domain:** Protection Controls

**Risk:** Unowned, shared or overprivileged AI identities can create unauthorized access and weak accountability.

**Trigger examples:** Low scores on PROT-001 or PROT-002.

**Recommended action:** Ensure AI applications and agents use identifiable, owned, lifecycle-managed identities with least privilege, periodic review and rapid revocation capability.

**Suggested owners:** Identity Security, IAM, Security Architecture, AI platform owners.

**Evidence of completion:**
- unique identities
- named owners
- least privilege
- credential lifecycle
- access reviews
- rapid revocation process

**Target maturity:** 3

**Suggested horizon:** 0–90 days for high-autonomy/high-privilege environments; otherwise 3–6 months.

---

## REC-PROT-002 — Govern AI Access to Sensitive Data

**Domain:** Protection Controls

**Risk:** AI can amplify existing data-access weaknesses and expose sensitive information through input, retrieval or output paths.

**Trigger examples:** Low scores on PROT-003 through PROT-005 combined with sensitive-data exposure.

**Recommended action:** Apply existing data classification, authorization, minimization, retrieval and output-protection requirements consistently to AI workloads.

**Suggested owners:** Data Security, Privacy, Security Architecture, data owners.

**Evidence of completion:**
- documented sensitive-data access
- RAG/retrieval ownership
- data authorization controls
- output protections
- periodic access review

**Target maturity:** 3

**Suggested horizon:** 0–90 days when sensitive data exposure is high.

---

## REC-PROT-003 — Establish Agent Action Boundaries

**Domain:** Protection Controls

**Risk:** Autonomous or semi-autonomous agents may execute actions beyond intended business scope.

**Trigger examples:** Low PROT-008 or PROT-009 with AI Autonomy Level 3–5.

**Recommended action:** Define explicit tool authorization, transaction/action limits, approval thresholds, delegation restrictions and rapid disablement capability for production agents.

**Suggested owners:** Security Architecture, IAM, AI Engineering, application/business owners.

**Evidence of completion:**
- authorized tool list
- privilege boundaries
- approval rules
- action/transaction limits
- kill/disable process
- tested containment

**Target maturity:** 3–4

**Suggested horizon:** 0–90 days for Level 4–5 autonomy.

---

## REC-VAL-001 — Implement Risk-Based AI Security Validation

**Domain:** Validation & Red Teaming

**Risk:** AI-specific failure and attack modes may not be detected by traditional application testing.

**Trigger examples:** Low scores on VAL-001 through VAL-004.

**Recommended action:** Establish risk-based adversarial validation covering prompt injection, data leakage, agent abuse, excessive agency, privilege escalation and applicable model/data threats.

**Suggested owners:** AppSec, Red Team, AI Security, AI Engineering.

**Evidence of completion:**
- validation criteria by risk tier
- adversarial test cases
- remediation thresholds
- retesting
- red-team process for high-risk systems

**Target maturity:** 3

**Suggested horizon:** 3–6 months

---

## REC-MON-001 — Define Minimum AI Security Telemetry

**Domain:** Monitoring & Detection

**Risk:** Security teams may be unable to detect abuse or reconstruct AI/agent activity during investigation.

**Trigger examples:** Low scores on MON-001 through MON-003.

**Recommended action:** Define and implement minimum security telemetry for critical AI systems, including identities, agent actions, tool calls, relevant data access, model/service changes and action attribution.

**Suggested owners:** SOC, Security Engineering, AI platform teams, application owners.

**Evidence of completion:**
- telemetry standard
- centralized logging
- identity/action attribution
- retention requirements
- investigation validation

**Target maturity:** 3

**Suggested horizon:** 0–90 days for high-autonomy systems; otherwise 3–6 months.

---

## REC-MON-002 — Create AI-Specific Detection Scenarios

**Domain:** Monitoring & Detection

**Risk:** Existing security detections may not identify suspicious AI usage, agent behavior or tool abuse.

**Trigger examples:** Low MON-004 and high exposure/autonomy.

**Recommended action:** Develop detection scenarios for sensitive-data exposure, anomalous AI usage, privilege abuse, suspicious tool calls, unexpected autonomous behavior and AI identity anomalies.

**Suggested owners:** SOC, Detection Engineering, Threat Hunting.

**Evidence of completion:**
- prioritized detection use cases
- implemented detections
- alert triage guidance
- response playbooks
- tuning metrics

**Target maturity:** 3

**Suggested horizon:** 3–6 months

---

## REC-IR-001 — Create AI-Specific Incident Response Playbooks

**Domain:** Incident Response & Business Resilience

**Risk:** AI incidents may require containment and evidence actions that are not covered by traditional IR plans.

**Trigger examples:** Low IR-001 through IR-003.

**Recommended action:** Add AI-specific incident scenarios covering compromised agents, sensitive-data leakage, prompt/context manipulation, malicious tools, compromised AI identities and autonomous-action incidents.

**Suggested owners:** Incident Response, SOC, AI Engineering, IAM, Legal/Privacy.

**Evidence of completion:**
- documented scenarios
- disable/revoke authority
- evidence requirements
- containment procedures
- recovery criteria
- exercises

**Target maturity:** 3

**Suggested horizon:** 0–90 days for critical autonomous AI; otherwise 3–6 months.

---

## REC-RES-001 — Establish AI Service Continuity and Dependency Plans

**Domain:** Incident Response & Business Resilience

**Risk:** Critical business processes may fail if models, providers, data sources or tools become unavailable or unreliable.

**Trigger examples:** Low IR-004/IR-005 combined with high business criticality or provider dependence.

**Recommended action:** Document critical AI dependencies, fallback processes, concentration risk, recovery objectives and feasible substitution/exit options.

**Suggested owners:** Business Continuity, CIO/CTO, Enterprise Architecture, business owners, Risk.

**Evidence of completion:**
- dependency map
- fallback procedures
- concentration-risk assessment
- tested continuity scenario
- provider/model exit considerations

**Target maturity:** 3

**Suggested horizon:** 0–90 days for critical dependencies; otherwise 3–6 months.

---

## REC-MEAS-001 — Establish AI Security Metrics and Reassessment

**Domain:** Measurement & Continuous Improvement

**Risk:** AI risk can change rapidly while governance and controls remain static.

**Trigger examples:** Low MEAS-001 through MEAS-005.

**Recommended action:** Define AI security KPIs/KRIs, executive reporting, reassessment triggers and a governed improvement roadmap.

**Suggested owners:** CISO, Enterprise Risk, AI Governance, Security Program Management.

**Evidence of completion:**
- KPI/KRI definitions
- reporting cadence
- reassessment cadence
- material-change triggers
- roadmap ownership
- closure tracking

**Target maturity:** 3

**Suggested horizon:** 3–6 months

---

# Roadmap rules

The recommendation engine should not emit every recommendation.

Select recommendations based on:

1. maturity gap
2. applicability
3. AI exposure
4. business impact
5. autonomy
6. resilience dependency
7. critical-condition overrides

## Suggested horizons

### NOW — 0–90 Days

Use for foundational visibility, ownership, high-exposure gaps, critical agent controls, incident authority, sensitive-data risk and critical resilience dependencies.

### NEXT — 3–6 Months

Use for operationalization: threat modeling, Secure AI SDLC, monitoring, validation, detection engineering and repeatable third-party governance.

### SCALE — 6–12 Months

Use for continuous discovery, automation, continuous validation, adaptive controls, advanced behavioral monitoring and mature executive metrics.
