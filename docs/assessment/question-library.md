# Master Assessment Question Library

Status: Draft v0.1

This document defines the initial question library for the AI Security & Resilience Assessment. It is intentionally vendor-agnostic and designed for CISO, risk, architecture, engineering, AppSec, SOC/IR and AI leadership audiences.

## Design rules

- Questions use operational language, not framework control IDs.
- Responses use a consistent 0–5 maturity scale.
- Not Applicable is allowed where a capability does not apply and must not reduce maturity unfairly.
- Questions may carry exposure, autonomy, resilience and business-impact modifiers.
- A low maturity answer should map to one or more practical recommendations and evidence of completion.
- Framework mappings are maintained separately and must be validated against authoritative sources before being treated as complete.

## Standard maturity scale

0 — Not Established

1 — Reactive

2 — Emerging

3 — Defined

4 — Managed

5 — Adaptive

---

# Domain 1 — AI Discovery & Inventory

## DISC-001 — Enterprise AI Inventory
**Question:** Does the organization maintain a centralized inventory of AI systems, models, AI-enabled applications and AI services?

**0:** No centralized visibility exists.

**1:** AI systems are identified informally or after issues occur.

**2:** Approved AI initiatives are documented, but coverage is incomplete.

**3:** A centralized inventory exists for approved AI systems, models, applications and owners.

**4:** Inventory also includes agents, identities, data sources, tools, third parties and dependencies.

**5:** Discovery is continuous and meaningful changes trigger reassessment.

**Risk signal:** Unknown AI estate.

**Primary recommendation:** Establish and maintain an enterprise AI inventory.

## DISC-002 — Shadow AI Visibility
**Question:** Can the organization identify AI services and tools used outside formally approved processes?

**0:** No visibility into unapproved AI usage.

**1:** Shadow AI is discovered mainly through incidents or user reports.

**2:** Some monitoring or surveys identify common unapproved usage.

**3:** A defined process exists to identify and review shadow AI.

**4:** Discovery is integrated with security, procurement and governance processes.

**5:** Shadow AI discovery is continuous and risk-based actions are automated where appropriate.

**Risk signal:** Unmanaged use of external AI.

## DISC-003 — AI Embedded in SaaS
**Question:** Can the organization identify AI capabilities embedded in third-party SaaS and enterprise applications?

**0:** Embedded AI capabilities are not tracked.

**1:** They are identified only when a vendor announces a major feature or after an issue.

**2:** Major SaaS AI features are documented for selected applications.

**3:** Embedded AI is included in application and vendor inventories.

**4:** Material changes in embedded AI capability trigger security and risk review.

**5:** Embedded AI capability changes are continuously tracked and reassessed.

## DISC-004 — Model and Version Visibility
**Question:** Are the models and material model versions used by critical AI systems identified and tracked?

**0:** Models and versions are not tracked.

**1:** Teams know the model informally.

**2:** Selected critical models are documented.

**3:** Critical systems record model source, version and owner.

**4:** Model changes are governed and linked to testing and risk review.

**5:** Model/version changes automatically trigger relevant validation and reassessment.

## DISC-005 — Agent and Tool Inventory
**Question:** Does the organization maintain visibility of production AI agents and the tools, APIs or systems they can invoke?

**0:** No agent inventory exists.

**1:** Agents and tools are known only by delivery teams.

**2:** Selected production agents are documented.

**3:** Production agents, owners, tools and access are centrally documented.

**4:** Inventory includes identities, privileges, delegation and dependencies.

**5:** Agent/tool discovery and ownership validation are continuous.

## DISC-006 — AI Data Flow Visibility
**Question:** Can the organization identify the key data sources, retrieval sources and destinations used by critical AI workloads?

**0:** AI data flows are not documented.

**1:** Data flows are understood informally by builders.

**2:** Selected critical data sources are documented.

**3:** Critical AI systems have documented data flows and owners.

**4:** Data flows include RAG, embeddings, third parties and output destinations.

**5:** Changes in data access or flow trigger automated review and reassessment.

---

# Domain 2 — Risk Classification & Business Impact

## RISK-001 — AI Business Criticality
**Question:** Are AI systems classified according to business criticality and potential operational impact?

**0:** No business criticality classification exists.

**1:** Criticality is judged informally.

**2:** Some high-profile AI initiatives are classified.

**3:** A standard business criticality classification is applied to relevant AI systems.

**4:** Classification drives control, testing and resilience requirements.

**5:** Criticality is continuously reassessed as AI usage and dependency change.

## RISK-002 — Data Sensitivity and AI Risk
**Question:** Is AI risk classification influenced by the sensitivity of data the system can access, generate or expose?

**0:** Data sensitivity is not considered.

**1:** Considered informally for obvious sensitive use cases.

**2:** Selected systems incorporate data classification in review.

**3:** Data sensitivity is a standard AI risk-classification factor.

**4:** Data sensitivity directly influences controls, approvals and monitoring.

**5:** Changes in data access automatically trigger risk reassessment.

## RISK-003 — Autonomy and Privilege Risk
**Question:** Does AI risk classification consider autonomy, privileges and the ability to execute business actions?

**0:** Autonomy is not considered.

**1:** Only obviously autonomous systems receive special review.

**2:** Selected agents are assessed for autonomy or privilege.

**3:** Autonomy and privilege are standard classification factors.

**4:** Classification drives approval, least privilege and human-oversight requirements.

**5:** Changes in autonomy or privilege trigger dynamic reassessment.

## RISK-004 — External and Regulatory Impact
**Question:** Does AI risk classification account for customer exposure, regulated decisions and legal or regulatory impact?

**0:** These factors are not consistently assessed.

**1:** Considered after escalation or legal review.

**2:** Selected regulated or customer-facing use cases are reviewed.

**3:** External and regulatory impact are standard classification factors.

**4:** Classification drives enhanced controls and approval requirements.

**5:** Regulatory and external exposure changes trigger reassessment continuously.

## RISK-005 — Human Oversight and Consequence
**Question:** Is the adequacy of human oversight evaluated relative to the consequence of an incorrect or unsafe AI action?

**0:** Human oversight is not formally assessed.

**1:** Oversight decisions are ad hoc.

**2:** Some high-risk use cases require human review.

**3:** Oversight requirements are risk-based and documented.

**4:** Oversight effectiveness is tested and measured.

**5:** Oversight requirements adapt as model capability, autonomy and business impact change.

---

# Domain 3 — Governance, Accountability & Decision Rights

## GOV-001 — AI Governance Operating Model
**Question:** Is there a defined operating model for AI governance and AI security governance?

**0:** No defined governance model.

**1:** Governance occurs through informal escalation.

**2:** Initial committees, policies or review paths exist but are inconsistent.

**3:** Governance roles, scope and decision paths are documented.

**4:** Governance is consistently applied, measured and evidenced.

**5:** Governance adapts continuously to risk, autonomy, regulation and technology changes.

## GOV-002 — Defined AI Responsibilities
**Question:** Are responsibilities for AI risk, security, data access, model approval, monitoring, incidents and lifecycle management formally assigned?

**0:** No formal responsibilities are defined.

**1:** Responsibilities depend on individual teams or people.

**2:** Some initiatives have assigned owners.

**3:** Standard roles and responsibilities are documented.

**4:** Responsibilities are consistently applied and reviewed.

**5:** Accountability is continuously validated as AI systems and dependencies change.

## GOV-003 — Critical AI Business Ownership
**Question:** Does every critical production AI system have an accountable business owner?

**0:** No ownership is assigned.

**1:** Ownership is assumed or informal.

**2:** Ownership exists for some critical systems.

**3:** Critical AI systems have documented business owners.

**4:** Ownership is enforced through governance and lifecycle processes.

**5:** Ownership is continuously validated as business use cases evolve.

## GOV-004 — Agent Sponsorship
**Question:** Does every production AI agent capable of executing business actions have an accountable human sponsor or owner?

**0:** No.

**1:** Sponsorship is informal.

**2:** Selected agents have named sponsors.

**3:** Production agents have documented accountable sponsors.

**4:** Sponsorship is integrated with approval, access and lifecycle governance.

**5:** Sponsorship, purpose, privileges and autonomy are continuously validated.

## GOV-005 — Autonomy Decision Rights
**Question:** Is authority explicitly assigned for approving increases in AI autonomy or authority?

**0:** No formal approval exists.

**1:** Changes are approved informally.

**2:** Selected high-risk systems require approval.

**3:** Material autonomy changes have a documented approval path.

**4:** Autonomy changes require formal security and risk review.

**5:** Changes automatically trigger reassessment of risk, access and oversight.

## GOV-006 — Residual Risk Acceptance
**Question:** Can the organization identify who formally accepts residual risk for high-risk AI deployments?

**0:** Residual risk is not formally accepted.

**1:** Acceptance is informal.

**2:** Some high-risk initiatives document acceptance.

**3:** A formal risk-acceptance process exists.

**4:** Acceptance is documented, approved and periodically reviewed.

**5:** Acceptance is reassessed dynamically when AI behavior, autonomy, data access or dependencies change.

## GOV-007 — Third-Party AI Governance
**Question:** Are third-party AI services, embedded AI and external models subject to defined security and risk review before adoption or material change?

**0:** Third-party AI is adopted without structured review.

**1:** Review is purchase-driven or informal.

**2:** Major vendors or critical use cases receive review.

**3:** A defined review process exists for relevant third-party AI.

**4:** Security, privacy, legal, resilience and contractual controls are consistently evidenced.

**5:** Vendor/model changes trigger automated or continuous reassessment.

## GOV-008 — AI Incident Decision Authority
**Question:** Is authority clearly defined to disable, contain, investigate and restore AI systems during an incident?

**0:** No defined authority.

**1:** Authority is improvised during incidents.

**2:** Defined for selected critical systems.

**3:** A documented authority model exists for AI incidents and autonomous actions.

**4:** Authority is exercised and tested through drills.

**5:** Authority adapts as agents, tools and autonomy change.

---

# Domain 4 — AI Threat Modeling

## THRT-001 — AI-Specific Threat Modeling
**Question:** Are AI-specific threats incorporated into architecture and application threat modeling?

**0:** No AI-specific threat modeling.

**1:** Threats are considered informally by individual practitioners.

**2:** Selected critical AI projects perform AI threat analysis.

**3:** AI-specific threat modeling is part of standard design review.

**4:** Results drive controls, testing and monitoring requirements.

**5:** Threat models are continuously updated using observed threats and system changes.

## THRT-002 — Prompt and Context Manipulation
**Question:** Does threat modeling address direct and indirect prompt injection, context manipulation and malicious retrieved content?

**0:** Not considered.

**1:** Considered only after known incidents or external guidance.

**2:** Selected GenAI applications assess prompt/context threats.

**3:** Prompt/context threats are systematically modeled for applicable systems.

**4:** Threat scenarios drive validation and runtime controls.

**5:** New attack patterns continuously update scenarios and defenses.

## THRT-003 — Model and Data Manipulation
**Question:** Does threat modeling address data poisoning, RAG poisoning, model manipulation, model theft or extraction where relevant?

**0:** These threats are not considered.

**1:** Addressed reactively.

**2:** Selected high-risk systems assess these threats.

**3:** Applicable threats are systematically modeled.

**4:** Threat models drive provenance, integrity and validation controls.

**5:** Threat intelligence and testing continuously update the threat model.

## THRT-004 — Agent and Tool Abuse
**Question:** Does threat modeling address excessive agency, tool abuse, credential misuse, agent impersonation and delegation abuse?

**0:** Agentic threats are not considered.

**1:** Considered informally for visible agents.

**2:** Selected production agents receive focused threat review.

**3:** Agent/tool abuse is systematically modeled for applicable systems.

**4:** Threat scenarios drive authorization, monitoring and containment controls.

**5:** Observed agent behavior and threat intelligence continuously refine models.

## THRT-005 — AI Supply Chain Threats
**Question:** Does threat modeling include models, libraries, datasets, plugins, connectors, MCP/tool endpoints and third-party AI dependencies?

**0:** Supply-chain threats are not considered.

**1:** Only traditional software dependencies are considered.

**2:** Selected AI dependencies are reviewed.

**3:** AI supply-chain dependencies are systematically threat modeled.

**4:** Provenance, vendor and integrity controls are linked to identified threats.

**5:** Dependency changes continuously trigger reassessment.

---

# Domain 5 — Secure AI Development Lifecycle

## SDLC-001 — AI Security by Design
**Question:** Are AI security and risk requirements defined during design before implementation begins?

**0:** Security is considered after build or during incidents.

**1:** Design security depends on individual initiative.

**2:** Selected high-risk projects include early security review.

**3:** AI security requirements are a standard design activity.

**4:** Requirements are enforced through architecture and delivery gates.

**5:** Requirements adapt continuously based on risk, telemetry and system changes.

## SDLC-002 — AI Dependency and Provenance Controls
**Question:** Are models, datasets, libraries and material AI dependencies reviewed for provenance and integrity during development?

**0:** No structured review exists.

**1:** Teams rely on informal trust.

**2:** Selected critical dependencies are reviewed.

**3:** Provenance and integrity checks are standard for applicable AI dependencies.

**4:** Controls are evidenced and integrated into release processes.

**5:** Dependency changes are continuously monitored and trigger reassessment.

## SDLC-003 — Secrets and Non-Human Identity Security
**Question:** Are credentials, secrets and non-human identities used by AI workloads governed throughout development and deployment?

**0:** Secrets and identities are managed ad hoc.

**1:** Basic secret handling varies by team.

**2:** Some critical workloads use standardized identity/secrets practices.

**3:** Standard lifecycle controls exist for AI workload identities and secrets.

**4:** Least privilege, rotation, ownership and review are consistently enforced.

**5:** Identity risk and privilege changes are continuously monitored and remediated.

## SDLC-004 — Pre-Production Security Validation
**Question:** Are applicable AI-specific security tests required before production deployment?

**0:** No AI-specific pre-production validation.

**1:** Testing is informal and team-specific.

**2:** Selected high-risk systems receive specialized testing.

**3:** Risk-based AI security validation is part of release criteria.

**4:** Results are evidenced and block release when thresholds are not met.

**5:** Validation is continuous and informed by runtime findings and new threats.

## SDLC-005 — Deployment and Permission Review
**Question:** Are AI permissions, data access, tools, configurations and autonomy reviewed before production deployment?

**0:** No structured review.

**1:** Builders decide configurations and permissions.

**2:** Selected high-impact deployments receive review.

**3:** A documented deployment security review exists.

**4:** Deployment controls are enforced and evidenced.

**5:** Material permission or autonomy changes trigger automated re-review.

## SDLC-006 — Secure Retirement
**Question:** Are AI systems, models, agents, identities, credentials and data access formally retired when no longer needed?

**0:** AI assets are abandoned rather than retired.

**1:** Retirement occurs ad hoc.

**2:** Some critical systems are formally retired.

**3:** A documented retirement process exists.

**4:** Identity, access, data retention and dependencies are consistently cleaned up.

**5:** Orphaned AI assets and agents are continuously detected and remediated.

---

# Domain 6 — Protection Controls

## PROT-001 — AI Identity Ownership
**Question:** Are identities used by AI applications and agents uniquely identifiable, owned and lifecycle-managed?

**0:** AI identities are unmanaged or shared.

**1:** Ownership is informal.

**2:** Selected critical AI identities are documented.

**3:** AI identities have documented owners and lifecycle controls.

**4:** Lifecycle, authentication and ownership reviews are consistently enforced.

**5:** Orphaned or anomalous AI identities are continuously detected and remediated.

## PROT-002 — Least Privilege for AI and Agents
**Question:** Are AI applications and agents restricted to the minimum privileges required for their approved purpose?

**0:** Broad access is common.

**1:** Privileges depend on implementation teams.

**2:** Selected critical agents use least-privilege practices.

**3:** Least privilege is a documented requirement.

**4:** Privileges are reviewed, recertified and monitored.

**5:** Privilege drift is continuously detected and corrected.

## PROT-003 — Sensitive Data Access Controls
**Question:** Are AI access to sensitive data and retrieval sources governed according to existing data classification and authorization policies?

**0:** AI can access data without structured controls.

**1:** Controls are inconsistent.

**2:** Selected sensitive datasets have AI-specific restrictions.

**3:** AI data access follows documented classification and authorization rules.

**4:** Access is monitored and periodically recertified.

**5:** Data-access changes continuously trigger reassessment and policy enforcement.

## PROT-004 — AI Input and Output Data Protection
**Question:** Are controls applied to reduce inappropriate sensitive-data disclosure through AI inputs, outputs and generated content?

**0:** No consistent controls.

**1:** Relies mostly on user awareness.

**2:** Selected high-risk use cases implement protections.

**3:** Standard controls exist for applicable AI interactions.

**4:** Controls are monitored and tested for effectiveness.

**5:** Policies adapt continuously to changing data and AI behavior.

## PROT-005 — RAG and Retrieval Security
**Question:** Are permissions, provenance and integrity of RAG and retrieval sources protected against unauthorized access or manipulation?

**0:** Retrieval sources are not specifically governed.

**1:** Basic access controls exist but AI-specific risk is not considered.

**2:** Selected critical RAG sources receive additional review.

**3:** RAG permissions, source ownership and integrity controls are documented.

**4:** Retrieval access and source changes are monitored and validated.

**5:** Suspicious or unauthorized changes are continuously detected and contained.

## PROT-006 — Model Integrity and Approval
**Question:** Are critical models subject to provenance, integrity, version and approval controls?

**0:** Models can be introduced without formal controls.

**1:** Model choice is mainly a delivery-team decision.

**2:** Selected critical models are approved.

**3:** A defined model approval and version-control process exists.

**4:** Integrity and change controls are consistently evidenced.

**5:** Model changes continuously trigger validation and risk reassessment.

## PROT-007 — AI Application Guardrails
**Question:** Are appropriate input, output, isolation and execution controls implemented for AI-enabled applications?

**0:** No consistent guardrails.

**1:** Guardrails vary by application.

**2:** Selected high-risk applications implement protections.

**3:** Risk-based application guardrails are standardized.

**4:** Guardrails are tested and monitored for effectiveness.

**5:** Guardrails adapt continuously to observed attacks and model behavior.

## PROT-008 — Agent Tool Authorization
**Question:** Are the tools, APIs and systems an AI agent can invoke explicitly authorized and constrained?

**0:** Agents can connect tools without structured authorization.

**1:** Tool access depends on builders.

**2:** Selected high-impact tools require approval.

**3:** Tool authorization and scope are documented for production agents.

**4:** Tool use is enforced, monitored and periodically reviewed.

**5:** New tools or permission changes automatically trigger governance review.

## PROT-009 — Agent Action Boundaries and Kill Capability
**Question:** Are action boundaries, transaction limits, approval requirements and rapid disablement capabilities defined for autonomous or semi-autonomous agents?

**0:** No formal action boundaries or disablement capability.

**1:** Boundaries are implemented inconsistently.

**2:** Selected critical agents have manual limits or shutdown procedures.

**3:** Production agents have documented boundaries and rapid disablement paths.

**4:** Boundaries are enforced, tested and monitored.

**5:** Controls adapt dynamically based on risk and observed behavior.

## PROT-010 — AI Supply Chain Controls
**Question:** Are third-party models, libraries, datasets, connectors and tool endpoints subject to security, provenance and change controls?

**0:** AI dependencies are trusted without structured review.

**1:** Traditional vendor or package review is applied inconsistently.

**2:** Selected critical AI dependencies are reviewed.

**3:** Risk-based AI supply-chain controls are documented.

**4:** Dependencies are continuously monitored for material changes and risk.

**5:** Material changes automatically trigger validation, containment or approval workflows.

---

# Domain 7 — Validation & Red Teaming

## VAL-001 — AI Adversarial Validation
**Question:** Are critical AI systems tested for adversarial behavior before production?

**0:** No adversarial validation.

**1:** Informal testing occurs occasionally.

**2:** Selected high-risk systems receive adversarial testing.

**3:** Risk-based adversarial validation is standard before production.

**4:** Results are measured, evidenced and tied to release criteria.

**5:** Validation continuously evolves with threats, telemetry and model changes.

## VAL-002 — Prompt Injection and Data Leakage Testing
**Question:** Are applicable systems tested for prompt injection, indirect injection and sensitive-data leakage?

**0:** No focused testing.

**1:** Testing follows known examples informally.

**2:** Selected GenAI systems are tested.

**3:** Applicable systems receive standardized testing.

**4:** Testing is automated where suitable and linked to remediation thresholds.

**5:** New attack techniques continuously update validation coverage.

## VAL-003 — Agent Abuse and Privilege Testing
**Question:** Are production agents tested for excessive agency, tool abuse, privilege escalation, unsafe delegation and unauthorized actions?

**0:** No agent abuse testing.

**1:** Builders perform informal functional testing only.

**2:** Selected high-risk agents receive security testing.

**3:** Agent abuse scenarios are part of standard validation.

**4:** Tests include realistic tool and privilege boundaries and produce evidence.

**5:** Continuous testing adapts to new tools, privileges and observed behavior.

## VAL-004 — AI Red Teaming
**Question:** Does the organization perform structured AI red teaming for systems whose risk warrants it?

**0:** No AI red teaming capability.

**1:** Ad hoc exercises or external tests only.

**2:** Selected critical systems receive periodic exercises.

**3:** Risk criteria determine when structured AI red teaming is required.

**4:** Findings are tracked through remediation and retest.

**5:** Red teaming is integrated with threat intelligence, runtime telemetry and continuous improvement.

## VAL-005 — Resilience and Failure-Mode Testing
**Question:** Are critical AI systems tested for outage, degradation, unsafe behavior and dependency failure scenarios?

**0:** No resilience testing.

**1:** Teams react to outages as they happen.

**2:** Selected systems test some failure scenarios.

**3:** Critical AI services have documented resilience tests.

**4:** Tests include provider, model, data, tool and autonomous-action failures.

**5:** Resilience testing is continuous and informs architecture and recovery plans.

---

# Domain 8 — Monitoring & Detection

## MON-001 — AI Security Telemetry
**Question:** Does the organization collect security-relevant telemetry for critical AI applications, models, agents and tools?

**0:** No meaningful AI telemetry.

**1:** Logging is local and inconsistent.

**2:** Selected critical systems provide security-relevant logs.

**3:** Minimum AI telemetry requirements are documented and implemented.

**4:** Telemetry is centralized, monitored and retained for investigation.

**5:** Telemetry coverage adapts automatically as AI systems and dependencies change.

## MON-002 — Agent Action Traceability
**Question:** Can the organization reconstruct what a production AI agent did during a security investigation?

**0:** Agent actions cannot be reconstructed reliably.

**1:** Reconstruction depends on application-specific logs.

**2:** Selected critical agents provide partial action history.

**3:** Production agents have sufficient traceability for investigation.

**4:** Traceability includes identity, tools, data access, decisions and actions.

**5:** Action histories are continuously correlated and anomaly-detected.

## MON-003 — Human vs AI Action Attribution
**Question:** Can security operations distinguish user actions, AI recommendations and autonomous AI actions?

**0:** Attribution is not possible.

**1:** Depends on manual interpretation.

**2:** Selected applications provide some attribution.

**3:** Critical AI activity has documented attribution requirements.

**4:** Attribution is consistently available in centralized telemetry.

**5:** Attribution is continuously correlated across identity, application, agent and tool activity.

## MON-004 — AI Anomaly and Abuse Detection
**Question:** Are detections defined for abnormal AI usage, sensitive-data exposure, privilege abuse, suspicious tool use or anomalous agent behavior?

**0:** No AI-specific detections.

**1:** Existing detections occasionally surface AI-related events.

**2:** Selected high-risk scenarios have custom detections.

**3:** A documented set of AI detection scenarios exists.

**4:** Detections are tuned, measured and linked to response playbooks.

**5:** Detection content continuously evolves from incidents, red teaming and threat intelligence.

## MON-005 — Model and Dependency Change Monitoring
**Question:** Are material changes in models, AI providers, tools, permissions or dependencies monitored for security impact?

**0:** Changes are not systematically monitored.

**1:** Teams learn about changes manually.

**2:** Selected critical changes are reviewed.

**3:** Material AI changes have monitoring and notification requirements.

**4:** Changes trigger security/risk workflows consistently.

**5:** Continuous monitoring automatically triggers reassessment and control updates.

---

# Domain 9 — Incident Response & Business Resilience

## IR-001 — AI-Specific Incident Playbooks
**Question:** Does incident response include playbooks for AI-specific scenarios?

**0:** No AI-specific incident scenarios.

**1:** Existing IR processes are adapted during incidents.

**2:** Selected scenarios have informal guidance.

**3:** Documented playbooks exist for material AI incidents.

**4:** Playbooks are exercised and integrated with security operations.

**5:** Playbooks continuously evolve based on incidents, exercises and AI changes.

## IR-002 — Agent Containment
**Question:** Can the organization quickly disable or isolate a compromised or unsafe AI agent and revoke its credentials and tool access?

**0:** No reliable containment capability.

**1:** Containment requires ad hoc engineering action.

**2:** Selected critical agents have manual procedures.

**3:** Production agents have documented containment and revocation procedures.

**4:** Procedures are tested and meet defined response objectives.

**5:** Containment can be risk-triggered and automated where appropriate.

## IR-003 — AI Evidence Preservation and Investigation
**Question:** Can the organization preserve relevant prompts, outputs, agent actions, identities, tool calls and model/context information for investigation?

**0:** Evidence is generally unavailable.

**1:** Evidence depends on application teams.

**2:** Selected critical systems retain partial evidence.

**3:** Evidence requirements are defined for critical AI systems.

**4:** Evidence is centralized, retained and tested for investigative usefulness.

**5:** Evidence coverage adapts continuously to system and threat changes.

## IR-004 — AI Service Continuity
**Question:** Are fallback and continuity plans defined for critical business processes that depend on AI services?

**0:** No AI-specific continuity planning.

**1:** Teams improvise during outages.

**2:** Selected critical services have fallback procedures.

**3:** Critical AI dependencies have documented continuity plans.

**4:** Plans are tested for provider, model, data and tool disruption.

**5:** Resilience plans continuously adapt to dependency and criticality changes.

## IR-005 — Provider Concentration and Exit Readiness
**Question:** Has the organization assessed concentration risk and exit or substitution options for critical external AI dependencies?

**0:** No concentration-risk assessment.

**1:** Dependency is recognized informally.

**2:** Selected critical providers have basic contingency planning.

**3:** Critical AI dependencies have documented concentration and exit assessments.

**4:** Substitution/fallback plans are tested where feasible.

**5:** Concentration risk is continuously monitored as providers and architectures change.

---

# Domain 10 — Measurement & Continuous Improvement

## MEAS-001 — AI Security KPIs and KRIs
**Question:** Are meaningful AI security KPIs and KRIs defined and reviewed?

**0:** No AI security metrics.

**1:** Metrics are anecdotal or incident-driven.

**2:** Selected teams track some AI security measures.

**3:** Standard AI security KPIs/KRIs are defined for relevant capabilities.

**4:** Metrics are measured consistently and drive governance decisions.

**5:** Metrics evolve dynamically with risk, autonomy and business dependency.

## MEAS-002 — Executive and Board Reporting
**Question:** Is material AI risk integrated into executive or board-level risk reporting where appropriate?

**0:** AI risk is not reported.

**1:** AI risk appears only after incidents or major escalations.

**2:** Selected high-profile AI initiatives are reported.

**3:** Material AI risk is included in regular executive risk reporting.

**4:** Reporting includes trends, exposure, maturity and roadmap progress.

**5:** Reporting is continuously informed by operational telemetry and changing risk.

## MEAS-003 — Periodic Reassessment
**Question:** Is AI security maturity and exposure reassessed periodically and after material system changes?

**0:** No reassessment process.

**1:** Reassessment occurs only after incidents or audits.

**2:** Selected critical systems are periodically reviewed.

**3:** A defined reassessment cadence and change-trigger process exists.

**4:** Reassessment results drive funded remediation and roadmap updates.

**5:** Reassessment is continuous or event-driven where feasible.

## MEAS-004 — AI Security Roadmap Governance
**Question:** Are AI security improvement actions prioritized, owned and tracked to completion based on business exposure?

**0:** No coordinated roadmap.

**1:** Actions are reactive and team-specific.

**2:** Some improvement initiatives are tracked.

**3:** A prioritized roadmap with owners and target dates exists.

**4:** Progress is governed using risk reduction and maturity measures.

**5:** Roadmap priorities continuously adapt to exposure, threats and business change.

## MEAS-005 — Continuous Learning from Incidents and Testing
**Question:** Are findings from incidents, red teaming, validation, audits and operational telemetry used to improve AI controls and governance?

**0:** Findings are handled in isolation.

**1:** Lessons are informal and local to teams.

**2:** Selected findings lead to broader improvements.

**3:** A defined feedback loop exists across AI security capabilities.

**4:** Improvements are measured and tracked to closure.

**5:** Feedback loops continuously update controls, detections, threat models and policy.

---

# Initial question count

- AI Discovery & Inventory: 6
- Risk Classification & Business Impact: 5
- Governance, Accountability & Decision Rights: 8
- AI Threat Modeling: 5
- Secure AI Development Lifecycle: 6
- Protection Controls: 10
- Validation & Red Teaming: 5
- Monitoring & Detection: 5
- Incident Response & Business Resilience: 5
- Measurement & Continuous Improvement: 5

**Total: 60 questions**

# Next validation steps

1. Validate each question for clarity, duplication and answerability.
2. Add applicability rules and Not Applicable behavior.
3. Add question-level weights and modifiers.
4. Map each question to recommendation IDs.
5. Map each question to validated framework references.
6. Pilot with multiple roles and compare interpretation consistency.
7. Adjust wording and scoring based on pilot evidence.
