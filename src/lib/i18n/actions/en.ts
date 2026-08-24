import type { ActionsBundle } from "./types";

export const enActions: ActionsBundle = {
  technology: {
    categories: {
      "ai-spm": "AI Security Posture Management (AI-SPM)",
      "cnapp-ai": "CNAPP with AI discovery",
      "dspm-ai": "DSPM / data security for AI",
      "nhi-identity": "IAM / non-human and agent identity",
      "agent-runtime": "Agent runtime security",
      "mcp-tool-governance": "MCP / tool governance",
      "ai-guardrails": "AI runtime guardrails",
      "model-appsec": "Model and AI application security",
      "ai-red-team": "AI red teaming and validation",
      "siem-xdr-ai": "SIEM / XDR with AI telemetry",
      "soar-ir": "SOAR / incident response automation",
      "ai-observability": "AI observability and resilience",
      "cmdb-grc": "CMDB / GRC / workflow management",
    },
    capabilities: {
      "cap-ai-inventory": {
        description:
          "Continuous discovery and lifecycle inventory of AI applications, models, agents, owners and data sources.",
        notes:
          "Coverage of embedded SaaS AI and internally built agents varies widely; validate against your own estate.",
      },
      "cap-cloud-ai-discovery": {
        description:
          "Cloud-native discovery of AI services, model endpoints, training data stores and their exposure paths.",
        notes: "Usually strongest where the workload already runs in a covered cloud account.",
      },
      "cap-data-security-ai": {
        description:
          "Classification and control of sensitive data reachable by AI systems, retrieval sources and agents.",
        notes: "Assess retrieval and vector-store coverage specifically, not only structured data stores.",
      },
      "cap-nonhuman-identity": {
        description:
          "Lifecycle, least privilege, credential management and revocation for service, workload and agent identities.",
        notes: "Confirm support for short-lived delegated credentials and rapid revocation.",
      },
      "cap-agent-runtime": {
        description:
          "Runtime visibility and control over agent behavior, delegated actions and unexpected privilege use.",
        notes: "A fast-moving category; validate against your specific agent frameworks.",
      },
      "cap-tool-governance": {
        description:
          "Authorization, allow-listing and monitoring of tools, plugins, connectors and MCP servers available to agents.",
        notes: "Check whether tool access can be revoked independently from the agent identity.",
      },
      "cap-runtime-guardrails": {
        description:
          "Input/output inspection for prompt manipulation, sensitive-data exposure and unsafe model responses.",
        notes: "Guardrails reduce but do not eliminate prompt and context manipulation risk.",
      },
      "cap-model-appsec": {
        description:
          "Model and dependency provenance, artifact scanning and secure build controls for AI components.",
        notes: "Verify support for the model registries and artifact formats you actually use.",
      },
      "cap-ai-red-team": {
        description:
          "Adversarial testing of prompts, tools, privileges and failure modes, with reproducible findings.",
        notes: "Automated testing complements, but does not replace, scenario-driven human red teaming.",
      },
      "cap-ai-telemetry": {
        description:
          "Centralized collection, correlation and detection over AI, agent and tool activity logs.",
        notes: "Detection value depends on the telemetry your AI platforms are able to emit.",
      },
      "cap-ir-automation": {
        description:
          "Playbook automation for containment, credential revocation, evidence capture and escalation.",
        notes: "Test automated containment against a real agent before relying on it.",
      },
      "cap-ai-observability": {
        description:
          "Availability, latency, quality and dependency monitoring for AI services and providers.",
        notes: "Useful for resilience and provider-concentration monitoring as well as performance.",
      },
      "cap-grc-workflow": {
        description:
          "Asset, workflow, approval and evidence management that AI governance processes can plug into.",
        notes: "Prefer extending existing enterprise workflow before introducing a parallel process.",
      },
    },
  },
  actionPacks: {
    "REC-DISC-001": {
      whyItMatters:
        "You cannot own, classify, protect or contain AI systems you have not identified. Inventory is the dependency for almost every other control in this assessment.",
      tasks: {
        "DISC-7D-1": "Define what counts as an AI asset (model, AI application, agent, embedded SaaS AI, tool/connector).",
        "DISC-7D-2": "Identify which business units are already using GenAI or agents, including unmanaged adoption.",
        "DISC-7D-3": "Define the minimum inventory fields required before an AI asset is considered registered.",
        "DISC-7D-4": "Assign accountable business owners to the AI assets already known to be business-critical.",
        "DISC-30D-1": "Record model/provider, hosting environment, business use case and data classification for each asset.",
        "DISC-30D-2": "Record external exposure, autonomy level and human-oversight model for each asset.",
        "DISC-30D-3": "Register agents, their tools, APIs and non-human identities alongside the systems they act on.",
        "DISC-60D-1": "Run technical discovery for model providers, SaaS-embedded AI, plugins, connectors and MCP servers.",
        "DISC-60D-2": "Map the sensitive data sources reachable by retrieval, fine-tuning and agent tooling.",
        "DISC-60D-3": "Identify orphaned or unowned AI assets and either assign an owner or decommission them.",
        "DISC-90D-1": "Integrate the AI inventory with existing CMDB, asset or GRC workflow rather than a standalone sheet.",
        "DISC-90D-2": "Define onboarding and decommissioning steps so the inventory stays accurate by default.",
        "DISC-90D-3": "Establish recurring reconciliation and reporting of inventory coverage to leadership.",
      },
      kpis: {
        "KPI-DISC-1": "Production AI systems recorded in the inventory",
        "KPI-DISC-2": "Critical AI systems with a named accountable business owner",
        "KPI-DISC-3": "Production agents with an identified human sponsor",
        "KPI-DISC-4": "High-risk AI systems with a completed risk classification",
        "KPI-DISC-5": "Orphaned or unmanaged AI assets outstanding",
      },
      dependencies: [
        "Executive mandate to require registration before production AI use.",
        "Access to cloud, SaaS and identity telemetry for technical discovery.",
        "An existing asset or workflow system the inventory can extend.",
      ],
    },
    "REC-RISK-001": {
      whyItMatters:
        "Without a shared risk classification, control effort is spread evenly instead of concentrating on the AI systems that can actually cause material business harm.",
      tasks: {
        "RISK-7D-1": "Agree the risk dimensions: business criticality, data sensitivity, autonomy, privilege, exposure and regulatory impact.",
        "RISK-7D-2": "Define three to four risk tiers with plain-language descriptions leadership can apply.",
        "RISK-7D-3": "Classify the ten AI systems currently believed to carry the highest business exposure.",
        "RISK-30D-1": "Publish the classification standard and the control expectations attached to each tier.",
        "RISK-30D-2": "Define approval thresholds and who may approve deployment at each tier.",
        "RISK-30D-3": "Classify all inventoried production AI systems and agents.",
        "RISK-60D-1": "Establish a high-risk AI register with review dates and named risk owners.",
        "RISK-60D-2": "Require reclassification when autonomy, privilege, data scope or exposure changes.",
        "RISK-60D-3": "Align classification with existing enterprise risk taxonomy and regulatory obligations.",
        "RISK-90D-1": "Embed classification as a gate in intake, procurement and release workflow.",
        "RISK-90D-2": "Report tier distribution and unmitigated high-risk items to executive governance.",
        "RISK-90D-3": "Review classification accuracy against incidents, findings and audit observations.",
      },
      kpis: {
        "KPI-RISK-1": "Inventoried AI systems with a completed classification",
        "KPI-RISK-2": "High-risk AI systems with an accepted, documented risk position",
        "KPI-RISK-3": "Deployments that passed the classification gate before release",
        "KPI-RISK-4": "Median time to classify a newly registered AI system",
        "KPI-RISK-5": "High-risk items overdue for review",
      },
      dependencies: [
        "A usable AI inventory with ownership recorded.",
        "Alignment with the existing enterprise risk taxonomy.",
        "Legal and compliance input on regulatory impact criteria.",
      ],
    },
    "REC-GOV-001": {
      whyItMatters:
        "When decision rights are unclear, AI risk decisions default to whoever is closest to delivery, and no one holds authority to stop, contain or retire a system.",
      tasks: {
        "GOV-7D-1": "List the AI decisions that currently have no clear owner, from autonomy increases to decommissioning.",
        "GOV-7D-2": "Name the accountable executive for AI risk and the forum where decisions are recorded.",
        "GOV-7D-3": "Require a named human sponsor for every production agent capable of business actions.",
        "GOV-30D-1": "Publish an AI responsibility matrix covering approval, ownership, risk acceptance and incident authority.",
        "GOV-30D-2": "Define who may approve autonomy increases, tool authorization and privileged data access.",
        "GOV-30D-3": "Define the residual-risk acceptance workflow, including who can accept and for how long.",
        "GOV-60D-1": "Assign accountable business owners to all critical AI systems and close the gaps found.",
        "GOV-60D-2": "Define incident authority: who can contain, revoke, suspend or restore an AI system or agent.",
        "GOV-60D-3": "Define decommissioning responsibility and the evidence required to retire an AI asset.",
        "GOV-90D-1": "Integrate the decision-rights model into intake, architecture review and release approval.",
        "GOV-90D-2": "Review governance effectiveness against real decisions, escalations and incidents.",
        "GOV-90D-3": "Report accountability coverage and open ownership gaps to the executive forum.",
      },
      kpis: {
        "KPI-GOV-1": "Critical AI systems with documented accountable ownership",
        "KPI-GOV-2": "Production agents with a named human sponsor",
        "KPI-GOV-3": "Risk acceptances recorded with an expiry and review date",
        "KPI-GOV-4": "Median time from escalation to a recorded AI risk decision",
        "KPI-GOV-5": "Decision types still without an assigned owner",
      },
      dependencies: [
        "Executive sponsorship for AI risk decision rights.",
        "An inventory that identifies systems, agents and current owners.",
        "An existing governance forum the model can plug into.",
      ],
    },
    "REC-THRT-001": {
      whyItMatters:
        "Application threat models rarely cover prompt and context manipulation, poisoning, excessive agency or tool abuse, so AI-specific failure paths reach production unexamined.",
      tasks: {
        "THRT-7D-1": "Select the AI-specific threat categories your review process must always consider.",
        "THRT-7D-2": "Choose two high-exposure AI systems for a first structured threat-modeling session.",
        "THRT-7D-3": "Identify who facilitates AI threat modeling and when it is mandatory.",
        "THRT-30D-1": "Publish an AI threat-model template covering data, model, application, agent and supply-chain threats.",
        "THRT-30D-2": "Require threat models for all high-risk AI systems before production release.",
        "THRT-30D-3": "Trace each identified threat to a control, validation test or monitoring requirement.",
        "THRT-60D-1": "Model agent-specific threats: excessive agency, tool abuse, delegated-credential misuse and chaining.",
        "THRT-60D-2": "Review third-party and model supply-chain threats, including providers and connectors.",
        "THRT-60D-3": "Feed unresolved threats into the risk register with owners and dates.",
        "THRT-90D-1": "Integrate AI threat modeling into architecture review as a standing step.",
        "THRT-90D-2": "Refresh threat models when autonomy, tools, data scope or providers change.",
        "THRT-90D-3": "Measure control coverage derived from threat models and report residual exposure.",
      },
      kpis: {
        "KPI-THRT-1": "High-risk AI systems with a current threat model",
        "KPI-THRT-2": "Identified threats traced to a control or test",
        "KPI-THRT-3": "Agent-enabled systems with modeled tool-abuse scenarios",
        "KPI-THRT-4": "Threat models older than the refresh interval",
        "KPI-THRT-5": "Median time from threat identification to control decision",
      },
      dependencies: [
        "Architecture documentation and data-flow visibility for AI systems.",
        "Security architecture capacity to facilitate sessions.",
        "Risk classification to decide where threat modeling is mandatory.",
      ],
    },
    "REC-SDLC-001": {
      whyItMatters:
        "If AI security decisions happen after build, provenance, identity and permission problems become expensive to reverse and often ship anyway.",
      tasks: {
        "SDLC-7D-1": "Map where AI components currently enter the delivery pipeline without a security checkpoint.",
        "SDLC-7D-2": "Define the minimum AI security requirements that must be met before production release.",
        "SDLC-7D-3": "Require model and dependency provenance for any newly introduced AI component.",
        "SDLC-30D-1": "Add AI security requirements to design review and record them as acceptance criteria.",
        "SDLC-30D-2": "Introduce non-human identity registration and least-privilege review at build time.",
        "SDLC-30D-3": "Add adversarial and abuse-case tests to the test stage for high-risk AI systems.",
        "SDLC-60D-1": "Implement risk-based release gates aligned to the AI classification tiers.",
        "SDLC-60D-2": "Add artifact and dependency scanning for models, prompts, agents and tool definitions.",
        "SDLC-60D-3": "Define operating requirements handed over at deployment: telemetry, ownership, containment.",
        "SDLC-90D-1": "Define and test a retirement checklist covering credentials, tools, data and inventory removal.",
        "SDLC-90D-2": "Automate evidence capture from the pipeline so audits do not require manual collection.",
        "SDLC-90D-3": "Review gate exceptions and reduce recurring bypass patterns.",
      },
      kpis: {
        "KPI-SDLC-1": "AI releases that passed the defined security gate",
        "KPI-SDLC-2": "AI components with recorded provenance",
        "KPI-SDLC-3": "AI workloads with least-privilege identity review completed",
        "KPI-SDLC-4": "Retired AI assets with completed decommissioning evidence",
        "KPI-SDLC-5": "Open gate exceptions",
      },
      dependencies: [
        "An existing CI/CD pipeline that can enforce gates.",
        "Risk classification to set gate strength per tier.",
        "Engineering agreement on release criteria.",
      ],
    },
    "REC-PROT-001": {
      whyItMatters:
        "Agents and AI applications convert weak identity, data and tool controls into direct business actions, which turns a routine misconfiguration into an operational incident.",
      tasks: {
        "PROT-7D-1": "Inventory production agents that are capable of taking actions rather than only generating text.",
        "PROT-7D-2": "Map each agent identity and every delegated credential it can use.",
        "PROT-7D-3": "Map the tools, APIs and MCP servers each agent can reach and the authority each grants.",
        "PROT-7D-4": "Establish an emergency procedure to revoke or disable an agent and its credentials.",
        "PROT-30D-1": "Publish minimum protection baselines for identity, data, model, application and agent layers.",
        "PROT-30D-2": "Remove standing privileges and excess data access from agent and AI workload identities.",
        "PROT-30D-3": "Require explicit authorization for each tool an agent may use, with an owner per tool.",
        "PROT-60D-1": "Implement the ability to block tool access independently from disabling the agent.",
        "PROT-60D-2": "Constrain retrieval sources and enforce data controls on what AI systems can read.",
        "PROT-60D-3": "Apply runtime guardrails for high-exposure prompts, outputs and action boundaries.",
        "PROT-90D-1": "Test containment for at least one critical agent end to end and record the result.",
        "PROT-90D-2": "Review supply-chain controls for model providers, connectors and third-party agents.",
        "PROT-90D-3": "Report baseline conformance and exceptions with remediation dates.",
      },
      kpis: {
        "KPI-PROT-1": "Production agents with a documented kill or containment procedure",
        "KPI-PROT-2": "Agent identities operating under least privilege",
        "KPI-PROT-3": "Mean time to revoke an agent credential",
        "KPI-PROT-4": "Agents whose tool access can be blocked independently",
        "KPI-PROT-5": "Baseline exceptions open beyond their due date",
      },
      dependencies: [
        "An agent and non-human identity inventory.",
        "Identity platform support for rapid revocation.",
        "Owners identified for tools, connectors and data sources.",
      ],
    },
    "REC-VAL-001": {
      whyItMatters:
        "Functional testing confirms an AI system works as intended; it does not show how it fails when someone is deliberately trying to make it fail.",
      tasks: {
        "VAL-7D-1": "Define which AI risks require adversarial validation before and after production release.",
        "VAL-7D-2": "Select one high-exposure AI system for an initial adversarial test.",
        "VAL-7D-3": "Agree how findings are recorded, triaged and retested.",
        "VAL-30D-1": "Publish a test plan covering prompt manipulation, data exposure, tool abuse and privilege escalation.",
        "VAL-30D-2": "Define red-team criteria based on exposure, autonomy and business impact.",
        "VAL-30D-3": "Establish a findings register with severity, owner and remediation dates.",
        "VAL-60D-1": "Run structured adversarial validation for all systems meeting the red-team criteria.",
        "VAL-60D-2": "Validate agent action boundaries, tool restrictions and containment behavior under test.",
        "VAL-60D-3": "Retest remediated findings and record evidence of closure.",
        "VAL-90D-1": "Automate recurring regression tests for previously identified AI weaknesses.",
        "VAL-90D-2": "Trigger revalidation when models, prompts, tools or providers change materially.",
        "VAL-90D-3": "Report validation coverage and unresolved high-severity findings to governance.",
      },
      kpis: {
        "KPI-VAL-1": "High-risk AI systems with completed adversarial validation",
        "KPI-VAL-2": "Findings remediated within their agreed timeframe",
        "KPI-VAL-3": "Agents with validated action-boundary testing",
        "KPI-VAL-4": "Median time from finding to retest",
        "KPI-VAL-5": "Open high-severity validation findings",
      },
      dependencies: [
        "Risk classification to scope validation depth.",
        "Test environments representative of production behavior.",
        "Remediation capacity in the owning engineering teams.",
      ],
    },
    "REC-MON-001": {
      whyItMatters:
        "If telemetry cannot separate a user from an agent, or an agent from the tool it invoked, security teams cannot detect misuse or reconstruct what happened.",
      tasks: {
        "MON-7D-1": "Define the minimum AI telemetry required: identity, prompt/action metadata, tool calls and outcomes.",
        "MON-7D-2": "Identify which AI platforms and agents currently emit no usable security telemetry.",
        "MON-7D-3": "Confirm log retention expectations for AI and agent activity with legal and compliance.",
        "MON-30D-1": "Centralize AI and agent logs into the existing monitoring platform.",
        "MON-30D-2": "Ensure every agent action can be attributed to an identity and an initiating context.",
        "MON-30D-3": "Establish traceability from a business action back to the agent, tool and prompt that caused it.",
        "MON-60D-1": "Build detections for anomalous AI usage, privilege abuse and sensitive-data exposure.",
        "MON-60D-2": "Build detections for suspicious tool invocation and unexpected agent behavior.",
        "MON-60D-3": "Route AI detections into existing triage with a defined response owner.",
        "MON-90D-1": "Tune detections against validation and red-team results to reduce noise.",
        "MON-90D-2": "Monitor provider availability and quality signals alongside security telemetry.",
        "MON-90D-3": "Report telemetry coverage gaps and detection effectiveness to governance.",
      },
      kpis: {
        "KPI-MON-1": "Production AI systems emitting the minimum telemetry set",
        "KPI-MON-2": "Agent actions attributable to a specific identity",
        "KPI-MON-3": "AI-specific detections in production",
        "KPI-MON-4": "Mean time to detect an AI-related security event",
        "KPI-MON-5": "AI detections with a documented response owner",
      },
      dependencies: [
        "Logging capability in the AI and agent platforms in use.",
        "Capacity in the existing SIEM or monitoring platform.",
        "Agreement on retention and privacy constraints.",
      ],
    },
    "REC-IR-001": {
      whyItMatters:
        "AI incidents move at machine speed and provider outages hit multiple business processes at once; unclear containment authority turns a contained event into a business disruption.",
      tasks: {
        "IR-7D-1": "Identify which AI systems and agents would cause the most damage if they behaved incorrectly.",
        "IR-7D-2": "Confirm who has authority to contain or suspend an AI system outside business hours.",
        "IR-7D-3": "Document the fastest available path to revoke agent credentials and tool access today.",
        "IR-7D-4": "Identify critical business processes dependent on a single AI provider.",
        "IR-30D-1": "Write AI incident playbooks covering misuse, manipulation, data exposure and agent malfunction.",
        "IR-30D-2": "Define evidence preservation requirements for prompts, actions, tool calls and model versions.",
        "IR-30D-3": "Integrate AI scenarios into the existing incident classification and escalation model.",
        "IR-60D-1": "Test containment on at least one critical agent and measure time to revoke.",
        "IR-60D-2": "Define and document fallback and manual-operation plans for critical AI dependencies.",
        "IR-60D-3": "Assess provider concentration risk and agree acceptable exposure with the business.",
        "IR-90D-1": "Run a tabletop or live exercise for a high-impact AI incident scenario.",
        "IR-90D-2": "Define recovery authority and criteria for returning an AI system to service.",
        "IR-90D-3": "Feed exercise findings into playbooks, controls and the risk register.",
      },
      kpis: {
        "KPI-IR-1": "Critical AI systems covered by an incident playbook",
        "KPI-IR-2": "Mean time to contain or revoke a production agent",
        "KPI-IR-3": "Critical AI dependencies with a tested fallback plan",
        "KPI-IR-4": "Containment tests completed against plan",
        "KPI-IR-5": "Open findings from AI incident exercises",
      },
      dependencies: [
        "Agent inventory and credential mapping.",
        "Existing incident response process and on-call authority.",
        "Business input on acceptable downtime and manual fallback.",
      ],
    },
    "REC-MEAS-001": {
      whyItMatters:
        "Without measurement, AI security work stalls quietly: coverage drifts, risk acceptances expire unnoticed and leadership loses the basis for further investment.",
      tasks: {
        "MEAS-7D-1": "Select a small set of AI security KPIs and KRIs leadership will actually use.",
        "MEAS-7D-2": "Establish baselines from the current assessment results.",
        "MEAS-7D-3": "Agree the reporting cadence and the executive audience.",
        "MEAS-30D-1": "Define data sources and owners for each metric so reporting is repeatable.",
        "MEAS-30D-2": "Publish the first executive report with baseline, target and trend.",
        "MEAS-30D-3": "Define reassessment triggers such as new agents, provider changes or incidents.",
        "MEAS-60D-1": "Track remediation progress against the prioritized roadmap, not activity volume.",
        "MEAS-60D-2": "Add leading indicators for exposure growth, autonomy increases and coverage decay.",
        "MEAS-60D-3": "Review metric quality and remove measures that do not change decisions.",
        "MEAS-90D-1": "Run a scheduled reassessment and compare maturity movement against targets.",
        "MEAS-90D-2": "Govern the improvement roadmap with named owners and funded next steps.",
        "MEAS-90D-3": "Report residual risk and investment options to executive governance.",
      },
      kpis: {
        "KPI-MEAS-1": "Defined KPIs reported on the agreed cadence",
        "KPI-MEAS-2": "Roadmap actions completed against plan",
        "KPI-MEAS-3": "Days since the last full AI security reassessment",
        "KPI-MEAS-4": "Stalled actions with no progress in the review period",
        "KPI-MEAS-5": "Maturity improvement against the target profile",
      },
      dependencies: [
        "Assessment results as a measurement baseline.",
        "Data owners able to supply metric inputs.",
        "An executive forum that reviews the reporting.",
      ],
    },
  },
};
