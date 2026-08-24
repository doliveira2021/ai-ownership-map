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
  },
};
