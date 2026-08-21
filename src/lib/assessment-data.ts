export type MaturityLevel = 0 | 1 | 2 | 3 | 4 | 5;

export type Question = {
  id: string;
  title: string;
  prompt: string;
  helper?: string;
  authorities?: string[];
  levels: [string, string, string, string, string, string];
};

export type Domain = {
  id: string;
  name: string;
  short: string;
  intent: string;
  questions: Question[];
};

export const MATURITY_LABELS = [
  "Not Established",
  "Reactive",
  "Emerging",
  "Defined",
  "Managed",
  "Adaptive",
] as const;

export const domains: Domain[] = [
  {
    id: "governance",
    name: "Governance & Accountability",
    short: "Governance",
    intent:
      "Operational accountability for AI decisions, risks, controls and operations — not committee structure.",
    questions: [
      {
        id: "gov-responsibilities",
        title: "Defined AI Responsibilities",
        prompt:
          "Are responsibilities for AI risk, security, data access, model approval, autonomous actions, monitoring, incident response, and lifecycle management formally assigned?",
        levels: [
          "No formal AI responsibilities are defined.",
          "Responsibilities are handled informally and depend on individual teams or projects.",
          "Some AI initiatives have assigned owners, but responsibilities are inconsistent.",
          "Standard roles and responsibilities are documented for relevant AI activities.",
          "Responsibilities are consistently applied and reviewed throughout the AI lifecycle.",
          "Accountability is continuously validated as AI systems, agents, models, dependencies, and risks change.",
        ],
      },
      {
        id: "gov-business-ownership",
        title: "Business Ownership",
        prompt: "Does every critical production AI system have an accountable business owner?",
        helper: "Principle: no critical AI system should exist without an accountable business owner.",
        levels: [
          "No ownership is assigned.",
          "Ownership is informal or assumed.",
          "Ownership exists for some critical AI systems.",
          "Critical AI systems have documented business owners.",
          "Ownership is enforced through governance and lifecycle processes.",
          "Ownership is continuously validated as systems and business use cases evolve.",
        ],
      },
      {
        id: "gov-agent-sponsorship",
        title: "Agent Sponsorship",
        prompt:
          "Does every production AI agent capable of executing business actions have an accountable human sponsor or owner?",
        helper:
          "Distinguish technical identity, business owner, human sponsor and security owner — they may overlap.",
        levels: [
          "No.",
          "Ownership is informal.",
          "Ownership exists for selected agents.",
          "Production agents have documented accountable sponsors.",
          "Agent ownership is integrated with approval, access, and lifecycle management.",
          "Ownership, privileges, autonomy, and business purpose are continuously validated.",
        ],
      },
      {
        id: "gov-autonomy-approval",
        title: "Autonomy Approval",
        prompt:
          "Is accountability explicitly assigned for approving changes in an AI system's level of autonomy or authority?",
        levels: [
          "No formal approval exists.",
          "Changes are approved informally.",
          "Approval exists for selected high-risk systems.",
          "A documented approval process exists for material autonomy changes.",
          "Autonomy changes require formal risk and security review.",
          "Changes automatically trigger reassessment of risk, access, controls, and human oversight requirements.",
        ],
      },
      {
        id: "gov-residual-risk",
        title: "Residual Risk Acceptance",
        prompt:
          "Can the organization identify who formally accepted the residual risk for high-risk AI deployments?",
        levels: [
          "Residual risk is not formally accepted.",
          "Risk acceptance occurs informally.",
          "Some high-risk initiatives document risk acceptance.",
          "A formal risk acceptance process exists.",
          "Residual AI risk acceptance is documented, approved, and periodically reviewed.",
          "Residual risk acceptance is dynamically reassessed when AI behavior, autonomy, data access, or dependencies change.",
        ],
      },
      {
        id: "gov-incident-accountability",
        title: "Incident Accountability",
        prompt:
          "Is accountability clearly defined for AI-specific security incidents and autonomous-action incidents?",
        helper: "Assess whether the organization knows who holds authority to act during an AI incident.",
        authorities: [
          "disable an AI service",
          "revoke agent access",
          "revoke credentials",
          "block tools",
          "isolate workloads",
          "preserve evidence",
          "communicate business impact",
          "authorize recovery",
        ],
        levels: [
          "No defined authority for AI incidents.",
          "Authority is improvised during the incident.",
          "Authority is defined for selected systems or teams.",
          "Documented authority model for AI incidents and autonomous actions.",
          "Authority is exercised, tested and reviewed across AI services and agents.",
          "Authority model adapts automatically as agents, tools and autonomy change.",
        ],
      },
    ],
  },
  {
    id: "lifecycle",
    name: "Model & System Lifecycle",
    short: "Lifecycle",
    intent: "Approval, change control and decommissioning of AI systems and models.",
    questions: [
      {
        id: "life-usecase-approval",
        title: "Use Case Approval",
        prompt: "Is there an explicit owner and path for approving new AI use cases and AI architecture?",
        levels: [
          "New AI use cases appear without approval.",
          "Approval depends on who is asked.",
          "Approval exists for visible or funded initiatives only.",
          "A documented approval path with named accountable roles exists.",
          "Approval is enforced and evidenced for all new AI use cases.",
          "Approval criteria adapt to risk classification and AI capability changes.",
        ],
      },
      {
        id: "life-model-change",
        title: "Model Approval & Change Control",
        prompt:
          "Is accountability assigned for approving models, model changes, and critical prompt/system-instruction changes?",
        levels: [
          "No model approval or change control.",
          "Changes are made by whoever operates the system.",
          "Change control exists for some models.",
          "Documented approval for models and critical instruction changes.",
          "Changes are reviewed for risk and security before production.",
          "Change triggers automated re-evaluation of risk, access and controls.",
        ],
      },
      {
        id: "life-decommissioning",
        title: "Decommissioning Ownership",
        prompt:
          "Is accountability assigned for retiring AI systems, agents, credentials and associated data access?",
        levels: [
          "AI systems are abandoned rather than retired.",
          "Decommissioning happens ad hoc.",
          "Some systems are formally retired.",
          "Documented decommissioning process with named owners.",
          "Decommissioning is enforced, including identity and access cleanup.",
          "Orphaned AI assets and agents are detected and retired continuously.",
        ],
      },
    ],
  },
  {
    id: "data-access",
    name: "Data & Access Accountability",
    short: "Data & Access",
    intent: "Who approves what AI systems and agents can read, write and reach.",
    questions: [
      {
        id: "data-approval",
        title: "Sensitive Data Access Approval",
        prompt: "Is accountability assigned for approving AI and agent access to sensitive data?",
        levels: [
          "No approval for AI data access.",
          "Access is granted informally by delivery teams.",
          "Approval exists for selected datasets.",
          "Documented approval with a named accountable data owner.",
          "Approvals are enforced, logged and periodically recertified.",
          "Access changes trigger re-approval and risk reassessment automatically.",
        ],
      },
      {
        id: "data-tools",
        title: "Tool & API Authorization",
        prompt:
          "Is accountability assigned for authorizing the tools, APIs and integrations an AI agent may invoke?",
        levels: [
          "Tools are connected without authorization.",
          "Authorization is informal.",
          "Authorization exists for selected high-impact tools.",
          "Documented authorization process with named approvers.",
          "Tool authorization is enforced and reviewed with privilege changes.",
          "New tool connections trigger automatic governance and security review.",
        ],
      },
      {
        id: "data-privilege",
        title: "Agent Privilege & Delegation",
        prompt:
          "Is accountability assigned for increasing agent privileges and enabling agent-to-agent delegation?",
        levels: [
          "Privileges are set by whoever builds the agent.",
          "Privilege increases are informal.",
          "Selected agents require approval.",
          "Documented approval for privilege and delegation changes.",
          "Privilege changes require security review and ownership revalidation.",
          "Privilege drift and delegation chains are continuously monitored and re-approved.",
        ],
      },
    ],
  },
  {
    id: "operations",
    name: "Monitoring, Incident & Recovery",
    short: "Operations",
    intent: "Operational ownership of AI behaviour, security telemetry, containment and recovery.",
    questions: [
      {
        id: "ops-monitoring",
        title: "Monitoring Ownership",
        prompt:
          "Is ownership assigned for monitoring AI behaviour, agent actions and AI security telemetry?",
        levels: [
          "No AI monitoring ownership.",
          "Monitoring depends on individual initiative.",
          "Some AI services are monitored by their teams.",
          "Documented monitoring ownership for AI and agent activity.",
          "Monitoring is consistently operated and reviewed with defined escalation.",
          "Monitoring coverage adapts as agents, tools and autonomy change.",
        ],
      },
      {
        id: "ops-containment",
        title: "Agent Containment & Recovery",
        prompt:
          "Is authority defined to contain an AI agent and to authorize restoration of AI services after containment?",
        levels: [
          "No containment or recovery authority.",
          "Handled informally during incidents.",
          "Defined for selected critical services.",
          "Documented containment and recovery authority.",
          "Authority is exercised and tested through drills.",
          "Containment and restoration decisions are continuously validated against risk.",
        ],
      },
    ],
  },
  {
    id: "thirdparty",
    name: "Third-Party & Regulatory",
    short: "Third-Party",
    intent: "Accountability for external AI providers, procurement and regulatory exposure.",
    questions: [
      {
        id: "tp-approval",
        title: "Third-Party AI Approval",
        prompt:
          "Is accountability assigned for approving third-party AI services, models and AI procurement?",
        levels: [
          "Third-party AI is adopted without approval.",
          "Approval is informal or purchase-driven.",
          "Approval exists for major vendors only.",
          "Documented approval with named accountable roles.",
          "Approval enforced with security, risk and contractual review.",
          "Vendor and model changes trigger reassessment automatically.",
        ],
      },
      {
        id: "tp-regulatory",
        title: "Regulatory Accountability",
        prompt:
          "Is accountability assigned for AI regulatory obligations and for classifying AI risk levels?",
        levels: [
          "No regulatory accountability for AI.",
          "Handled reactively when questions arise.",
          "Assigned for some regulated use cases.",
          "Documented regulatory accountability and AI risk classification ownership.",
          "Obligations are tracked, evidenced and reviewed.",
          "Regulatory posture is reassessed as AI capability and jurisdictions change.",
        ],
      },
    ],
  },
];

/* ---------- Accountability coverage dimensions ---------- */

export type CoverageStatus = 0 | 1 | 2; // missing | partial | clear

export type CoverageArea = {
  id: string;
  label: string;
  description: string;
};

export const coverageAreas: CoverageArea[] = [
  { id: "business-ownership", label: "Business ownership", description: "Named accountable business owner for production AI systems." },
  { id: "technical-ownership", label: "Technical ownership", description: "Engineering owner for AI architecture, deployment and operation." },
  { id: "security-ownership", label: "Security ownership", description: "Team accountable for AI security requirements and monitoring." },
  { id: "agent-sponsorship", label: "Agent sponsorship", description: "Human sponsor accountable for each production agent's purpose and scope." },
  { id: "risk-acceptance", label: "Risk acceptance ownership", description: "Authority that formally accepts residual AI risk." },
  { id: "incident-ownership", label: "Incident ownership", description: "Authority to disable, contain, isolate and recover AI services." },
  { id: "model-lifecycle", label: "Model lifecycle ownership", description: "Ownership of model approval, change and retirement." },
  { id: "data-access", label: "Data access ownership", description: "Authority approving AI and agent access to sensitive data." },
  { id: "third-party", label: "Third-party AI accountability", description: "Ownership of external AI provider approval and oversight." },
  { id: "decommissioning", label: "Decommissioning ownership", description: "Accountability for retiring AI systems, agents and credentials." },
];

/* ---------- Decision rights ---------- */

export type DecisionRight = { id: string; label: string };

export const decisionRights: DecisionRight[] = [
  { id: "dr-new-system", label: "Introducing a new AI system" },
  { id: "dr-data-access", label: "Increasing data access" },
  { id: "dr-new-tool", label: "Connecting a new tool" },
  { id: "dr-autonomy", label: "Enabling autonomous actions" },
  { id: "dr-model-change", label: "Changing models" },
  { id: "dr-prompt-change", label: "Modifying prompts / system instructions for critical AI" },
  { id: "dr-new-agent", label: "Adding new agents" },
  { id: "dr-privileges", label: "Increasing agent privileges" },
  { id: "dr-delegation", label: "Enabling agent-to-agent delegation" },
  { id: "dr-accept-risk", label: "Accepting AI risk" },
  { id: "dr-disable", label: "Disabling AI during an incident" },
  { id: "dr-restore", label: "Restoring AI after containment" },
];

/* ---------- Illustrative target-state RACI ---------- */

export const raciFunctions = ["Business", "Security", "AI / Data", "IT / Eng", "Risk / Legal"] as const;

export const raciMatrix: { activity: string; assignments: string[] }[] = [
  { activity: "Approve AI use case", assignments: ["A", "C", "R", "C", "C"] },
  { activity: "Classify AI risk", assignments: ["C", "R", "R", "C", "A"] },
  { activity: "Approve sensitive data access", assignments: ["A", "R", "R", "C", "C"] },
  { activity: "Approve model", assignments: ["C", "C", "A/R", "C", "C"] },
  { activity: "Approve AI autonomy", assignments: ["A", "R", "C", "C", "C"] },
  { activity: "Approve tools / APIs", assignments: ["C", "A/R", "R", "R", "C"] },
  { activity: "Operate AI service", assignments: ["I", "C", "R", "A/R", "I"] },
  { activity: "Monitor security activity", assignments: ["I", "A/R", "R", "R", "I"] },
  { activity: "Respond to AI security incident", assignments: ["I", "A/R", "R", "R", "C"] },
  { activity: "Accept residual AI risk", assignments: ["A", "R", "C", "I", "C"] },
  { activity: "Decommission AI system", assignments: ["A", "R", "R", "R", "C"] },
];

export const accountabilityAreas: string[] = [
  "approving new AI use cases",
  "AI business ownership",
  "AI risk classification",
  "AI security requirements",
  "data access approval",
  "model approval",
  "model lifecycle management",
  "model changes",
  "AI architecture approval",
  "AI agent ownership",
  "agent privilege approval",
  "agent autonomy approval",
  "tool and API authorization",
  "third-party AI approval",
  "AI procurement",
  "production deployment",
  "AI monitoring",
  "security monitoring",
  "AI incident response",
  "agent containment",
  "AI service recovery",
  "residual risk acceptance",
  "regulatory accountability",
  "AI decommissioning",
];

export const agentRoleModel = [
  {
    role: "Technical Identity",
    detail: "The identity the agent uses to authenticate and access systems.",
  },
  {
    role: "Business Owner",
    detail: "The person accountable for the business outcome produced by the agent.",
  },
  {
    role: "Human Sponsor",
    detail: "The person accountable for the agent's approved purpose, scope and operation.",
  },
  {
    role: "Security Owner",
    detail: "The team accountable for defining and monitoring security requirements.",
  },
];

export const allQuestions: Question[] = domains.flatMap((d) => d.questions);
