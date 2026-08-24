import type { PracticesBundle } from "./types";

export const enPractices: PracticesBundle = {
  categories: {
    "risk-based-control-escalation": "Risk-Based Control Escalation",
    "pre-deployment-evaluation": "Pre-Deployment Evaluation",
    "adversarial-validation": "Adversarial Validation / Red Teaming",
    "monitoring-detection-effectiveness": "Continuous Monitoring & Detection Effectiveness",
    "incident-preparedness": "Incident Preparedness & Response",
    "external-review": "External / Independent Review",
    "high-stakes-inventory": "High-Stakes AI Inventory & Accountability",
    "safeguard-effectiveness": "Safeguard Effectiveness / Continuous Improvement",
    "shared-responsibility": "Shared Responsibility & Accountability Boundaries",
    "lifecycle-security": "Full AI Security Lifecycle",
    "agent-authority-boundaries": "Agent Authority & Action Boundaries",
    "supply-chain-integrity": "AI & Agent Supply Chain Integrity",
  },
  entries: {
    "IP-RSP-001": {
      title: "Capability thresholds that trigger stronger safeguards",
      summary:
        "The published policy describes risk governance proportional to capability and risk, with defined capability thresholds that require stronger safeguards before further scaling or deployment.",
      implication:
        "Escalate control requirements from a documented risk classification instead of applying uniform controls, and define the thresholds at which an AI system requires additional approval and safeguards.",
    },
    "IP-RSP-002": {
      title: "Capability assessment before deployment decisions",
      summary:
        "The published policy describes assessing capability and required safeguards ahead of deployment decisions, with documented determinations.",
      implication:
        "Make AI security decisions an explicit release gate: require documented evaluation of capability, exposure and safeguards before a system reaches production.",
    },
    "IP-RSP-003": {
      title: "Deployment safeguards, access controls and monitoring",
      summary:
        "The published policy describes deployment safeguards including access controls, monitoring and classifiers used to detect and restrict misuse.",
      implication:
        "Pair least-privilege access for AI systems and agents with detection coverage over AI usage, so protection and monitoring reinforce each other.",
    },
    "IP-RSP-004": {
      title: "Rapid-response procedures when safeguards fall short",
      summary:
        "The published policy describes rapid-response procedures used when safeguards are found to be insufficient, including restricting deployment.",
      implication:
        "Predefine who can restrict, contain or revoke an AI system or agent, and rehearse that procedure before an incident forces the decision.",
    },
    "IP-RSP-005": {
      title: "Risk reporting and external review mechanisms",
      summary:
        "The published policy describes internal Risk Reports and mechanisms for external review of and feedback on safety determinations.",
      implication:
        "Give executives a recurring AI risk report and add an independent review step for high-risk AI decisions so accountability does not stay inside the delivery team.",
    },
    "IP-FSR-001": {
      title: "Measuring detection effectiveness",
      summary:
        "The published roadmap describes continuous measurement of detection effectiveness, including coverage, time to detect and accuracy.",
      implication:
        "Track detection coverage, time to detect and accuracy for AI-related telemetry as KPIs, rather than treating the presence of logs as sufficient.",
    },
    "IP-FSR-002": {
      title: "Adversarial exercises and documented response procedures",
      summary:
        "The published roadmap describes regular adversarial exercises, documented response procedures for high-priority scenarios, and AI-assisted investigation and playbook execution.",
      implication:
        "Schedule AI incident exercises against your highest-priority scenarios and keep written playbooks current, including how AI assistance is used during investigation.",
    },
    "IP-FSR-003": {
      title: "Cataloging high-stakes AI usage",
      summary:
        "The published roadmap describes cataloging high-stakes AI usage as a basis for prioritizing safeguards and monitoring.",
      implication:
        "Keep the inventory risk-aware: flag which AI systems and agents are high-stakes so controls and monitoring concentrate where business impact is greatest.",
    },
    "IP-FSR-004": {
      title: "Red teaming and monitoring-effectiveness evaluation",
      summary:
        "The published roadmap describes red teaming, evaluation of monitoring effectiveness, and safeguards that evolve as capability advances.",
      implication:
        "Treat adversarial testing and control-effectiveness review as recurring activities tied to capability change, not one-off pre-launch tests.",
    },
    "IP-GDM-001": {
      title: "Critical Capability Levels and evidence-based risk assessment",
      summary:
        "The published framework describes evidence-based risk assessment and the identification of severe-risk capability thresholds, referred to as Critical Capability Levels.",
      implication:
        "Define the thresholds at which AI capability, autonomy or privilege changes your risk tier, and require evidence rather than assumption when assessing that risk.",
    },
    "IP-GDM-002": {
      title: "Evaluation and mitigation as capability changes",
      summary:
        "The published framework describes evaluating models against defined thresholds and applying mitigations and stronger safeguards as model capability changes.",
      implication:
        "Re-evaluate AI systems whenever the model, tools, privileges or autonomy change, and adjust safeguards to the new capability instead of relying on fixed calendar reviews.",
    },
    "IP-MSFT-001": {
      title: "Shared responsibility for how AI is applied",
      summary:
        "The public guidance describes a shared responsibility model in which the organization using AI remains responsible for access, data, prompts, security and compliance decisions, even when platform-level protections are provided by the AI provider.",
      implication:
        "Document the provider-versus-enterprise responsibility boundary for every critical AI system, including business ownership, residual-risk ownership, incident responsibility and data-access accountability.",
    },
    "IP-MSFT-002": {
      title: "Security across the full AI lifecycle",
      summary:
        "The public guidance describes AI security spanning identify, protect, detect, respond, recover and govern, rather than stopping at preventive controls.",
      implication:
        "Require every critical AI system to have prevention, detection, response, recovery and governance coverage, each with a named owner and evidence.",
    },
    "IP-MSFT-003": {
      title: "Discover AI usage before trying to protect it",
      summary:
        "The public guidance describes gaining visibility into the AI applications an organization uses and builds as a prerequisite for protecting them, including embedded SaaS AI capabilities and agents.",
      implication:
        "Establish continuous discovery of AI applications, models, agents, embedded SaaS AI and related identities before relying on control-coverage metrics.",
    },
    "IP-MSFT-004": {
      title: "Maintain an AI Bill of Materials",
      summary:
        "The public guidance describes maintaining visibility into AI application components, data and AI artifacts from code to cloud.",
      implication:
        "For critical AI systems, maintain an AI BOM covering model and provider, libraries, system instructions where appropriate, datasets, vector stores, agents, tools and connectors, MCP servers where present, identities, runtime and external APIs.",
    },
    "IP-MSFT-005": {
      title: "Least agency, not only least privilege",
      summary:
        "The public guidance describes restricting not only what an agent can access but what it is allowed to do autonomously, with human approval for high-impact actions.",
      implication:
        "Define a documented action envelope for critical agents: permitted actions, approval-required actions, prohibited actions, transaction or impact limits and escalation rules.",
    },
    "IP-MSFT-006": {
      title: "Govern the agent tool supply chain",
      summary:
        "The public guidance describes treating agent tools and their descriptions or metadata as trusted execution dependencies whose changes must be governed.",
      implication:
        "Inventory agent tools and MCP dependencies, assign ownership, and apply change control, integrity review, authorization boundaries, revocation and monitoring when tool capabilities are added or modified.",
    },
    "IP-MSFT-007": {
      title: "Treat AI-generated tool arguments as untrusted input",
      summary:
        "The public guidance describes validating function and tool arguments produced by a model at the execution boundary instead of trusting them because a model generated them.",
      implication:
        "Validate every AI-generated tool invocation with schema validation, allowlists, parameter constraints, business-rule checks, independent authorization and transaction limits where appropriate.",
    },
    "IP-MSFT-008": {
      title: "Circuit breakers and containment for autonomous agents",
      summary:
        "The public guidance describes agentic systems supporting auditability, access control and circuit-breaker or containment capabilities.",
      implication:
        "Ensure every critical agent supports tested containment: disable the identity, revoke credentials and delegated access, block tools, stop the runtime or new actions, preserve logs and state, and support controlled recovery.",
    },
    "IP-MSFT-009": {
      title: "Reassess when capability or autonomy changes",
      summary:
        "The public guidance describes security and governance requirements evolving across the lifecycle as agents gain autonomy, data access, tools or capability.",
      implication:
        "Trigger reassessment when the model, tools, MCP dependencies, privileges, data access, external exposure, autonomy or business criticality materially changes.",
    },
  },
};
