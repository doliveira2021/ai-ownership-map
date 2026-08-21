import type { AsraDomainId } from "./asra-config";

export type AsraQuestionContent = {
  id: string;
  title: string;
  prompt: string;
};

export type AsraDomainContent = {
  id: AsraDomainId;
  short: string;
  name: string;
  intent: string;
  questions: AsraQuestionContent[];
};

export const ASRA_DOMAINS: AsraDomainContent[] = [
  {
    id: "discovery",
    short: "Discovery",
    name: "AI Discovery & Inventory",
    intent: "Know the AI estate, including embedded AI, models, agents, tools, dependencies and data flows.",
    questions: [
      { id: "DISC-001", title: "Enterprise AI Inventory", prompt: "Does the organization maintain a centralized inventory of AI systems, models, AI-enabled applications and AI services?" },
      { id: "DISC-002", title: "Shadow AI Visibility", prompt: "Can the organization identify AI services and tools used outside formally approved processes?" },
      { id: "DISC-003", title: "AI Embedded in SaaS", prompt: "Can the organization identify AI capabilities embedded in third-party SaaS and enterprise applications?" },
      { id: "DISC-004", title: "Model and Version Visibility", prompt: "Are the models and material model versions used by critical AI systems identified and tracked?" },
      { id: "DISC-005", title: "Agent and Tool Inventory", prompt: "Does the organization maintain visibility of production AI agents and the tools, APIs or systems they can invoke?" },
      { id: "DISC-006", title: "AI Data Flow Visibility", prompt: "Can the organization identify the key data sources, retrieval sources and destinations used by critical AI workloads?" },
    ],
  },
  {
    id: "risk",
    short: "Risk",
    name: "Risk Classification & Business Impact",
    intent: "Classify AI according to business criticality, sensitive data, autonomy, privilege, exposure and human oversight.",
    questions: [
      { id: "RISK-001", title: "AI Business Criticality", prompt: "Are AI systems classified according to business criticality and potential operational impact?" },
      { id: "RISK-002", title: "Data Sensitivity and AI Risk", prompt: "Is AI risk classification influenced by the sensitivity of data the system can access, generate or expose?" },
      { id: "RISK-003", title: "Autonomy and Privilege Risk", prompt: "Does AI risk classification consider autonomy, privileges and the ability to execute business actions?" },
      { id: "RISK-004", title: "External and Regulatory Impact", prompt: "Does AI risk classification account for customer exposure, regulated decisions and legal or regulatory impact?" },
      { id: "RISK-005", title: "Human Oversight and Consequence", prompt: "Is the adequacy of human oversight evaluated relative to the consequence of an incorrect or unsafe AI action?" },
    ],
  },
  {
    id: "governance",
    short: "Governance",
    name: "Governance, Accountability & Decision Rights",
    intent: "Make ownership, sponsorship, approvals, risk acceptance and incident authority explicit and operational.",
    questions: [
      { id: "GOV-001", title: "AI Governance Operating Model", prompt: "Is there a defined operating model for AI governance and AI security governance?" },
      { id: "GOV-002", title: "Defined AI Responsibilities", prompt: "Are responsibilities for AI risk, security, data access, model approval, monitoring, incidents and lifecycle management formally assigned?" },
      { id: "GOV-003", title: "Critical AI Business Ownership", prompt: "Does every critical production AI system have an accountable business owner?" },
      { id: "GOV-004", title: "Agent Sponsorship", prompt: "Does every production AI agent capable of executing business actions have an accountable human sponsor or owner?" },
      { id: "GOV-005", title: "Autonomy Decision Rights", prompt: "Is authority explicitly assigned for approving increases in AI autonomy or authority?" },
      { id: "GOV-006", title: "Residual Risk Acceptance", prompt: "Can the organization identify who formally accepts residual risk for high-risk AI deployments?" },
      { id: "GOV-007", title: "Third-Party AI Governance", prompt: "Are third-party AI services, embedded AI and external models subject to defined security and risk review before adoption or material change?" },
      { id: "GOV-008", title: "AI Incident Decision Authority", prompt: "Is authority clearly defined to disable, contain, investigate and restore AI systems during an incident?" },
    ],
  },
  {
    id: "threat-modeling",
    short: "Threat Modeling",
    name: "AI Threat Modeling",
    intent: "Model threats specific to GenAI, models, data, agents, tools and AI supply chains.",
    questions: [
      { id: "THRT-001", title: "AI-Specific Threat Modeling", prompt: "Are AI-specific threats incorporated into architecture and application threat modeling?" },
      { id: "THRT-002", title: "Prompt and Context Manipulation", prompt: "Does threat modeling address direct and indirect prompt injection, context manipulation and malicious retrieved content?" },
      { id: "THRT-003", title: "Model and Data Manipulation", prompt: "Does threat modeling address data poisoning, RAG poisoning, model manipulation, model theft or extraction where relevant?" },
      { id: "THRT-004", title: "Agent and Tool Abuse", prompt: "Does threat modeling address excessive agency, tool abuse, credential misuse, agent impersonation and delegation abuse?" },
      { id: "THRT-005", title: "AI Supply Chain Threats", prompt: "Does threat modeling include models, libraries, datasets, plugins, connectors, MCP/tool endpoints and third-party AI dependencies?" },
    ],
  },
  {
    id: "secure-sdlc",
    short: "Secure AI SDLC",
    name: "Secure AI Development Lifecycle",
    intent: "Embed security into design, build, test, deploy, operate and retire phases.",
    questions: [
      { id: "SDLC-001", title: "AI Security by Design", prompt: "Are AI security and risk requirements defined during design before implementation begins?" },
      { id: "SDLC-002", title: "AI Dependency and Provenance Controls", prompt: "Are models, datasets, libraries and material AI dependencies reviewed for provenance and integrity during development?" },
      { id: "SDLC-003", title: "Secrets and Non-Human Identity Security", prompt: "Are credentials, secrets and non-human identities used by AI workloads governed throughout development and deployment?" },
      { id: "SDLC-004", title: "Pre-Production Security Validation", prompt: "Are applicable AI-specific security tests required before production deployment?" },
      { id: "SDLC-005", title: "Deployment and Permission Review", prompt: "Are AI permissions, data access, tools, configurations and autonomy reviewed before production deployment?" },
      { id: "SDLC-006", title: "Secure Retirement", prompt: "Are AI systems, models, agents, identities, credentials and data access formally retired when no longer needed?" },
    ],
  },
  {
    id: "protection",
    short: "Protection",
    name: "Protection Controls",
    intent: "Protect identity, data, models, applications, agents, infrastructure and supply-chain dependencies.",
    questions: [
      { id: "PROT-001", title: "AI Identity Ownership", prompt: "Are identities used by AI applications and agents uniquely identifiable, owned and lifecycle-managed?" },
      { id: "PROT-002", title: "Least Privilege for AI and Agents", prompt: "Are AI applications and agents restricted to the minimum privileges required for their approved purpose?" },
      { id: "PROT-003", title: "Sensitive Data Access Controls", prompt: "Are AI access to sensitive data and retrieval sources governed according to existing data classification and authorization policies?" },
      { id: "PROT-004", title: "AI Input and Output Data Protection", prompt: "Are controls applied to reduce inappropriate sensitive-data disclosure through AI inputs, outputs and generated content?" },
      { id: "PROT-005", title: "RAG and Retrieval Security", prompt: "Are permissions, provenance and integrity of RAG and retrieval sources protected against unauthorized access or manipulation?" },
      { id: "PROT-006", title: "Model Integrity and Approval", prompt: "Are critical models subject to provenance, integrity, version and approval controls?" },
      { id: "PROT-007", title: "AI Application Guardrails", prompt: "Are appropriate input, output, isolation and execution controls implemented for AI-enabled applications?" },
      { id: "PROT-008", title: "Agent Tool Authorization", prompt: "Are the tools, APIs and systems an AI agent can invoke explicitly authorized and constrained?" },
      { id: "PROT-009", title: "Agent Action Boundaries and Kill Capability", prompt: "Are action boundaries, transaction limits, approval requirements and rapid disablement capabilities defined for autonomous or semi-autonomous agents?" },
      { id: "PROT-010", title: "AI Supply Chain Controls", prompt: "Are third-party models, libraries, datasets, connectors and tool endpoints subject to security, provenance and change controls?" },
    ],
  },
  {
    id: "validation",
    short: "Validation",
    name: "Validation & Red Teaming",
    intent: "Challenge assumptions with adversarial testing, AI red teaming and resilience validation.",
    questions: [
      { id: "VAL-001", title: "AI Adversarial Validation", prompt: "Are critical AI systems tested for adversarial behavior before production?" },
      { id: "VAL-002", title: "Prompt Injection and Data Leakage Testing", prompt: "Are applicable systems tested for prompt injection, indirect injection and sensitive-data leakage?" },
      { id: "VAL-003", title: "Agent Abuse and Privilege Testing", prompt: "Are production agents tested for excessive agency, tool abuse, privilege escalation, unsafe delegation and unauthorized actions?" },
      { id: "VAL-004", title: "AI Red Teaming", prompt: "Does the organization perform structured AI red teaming for systems whose risk warrants it?" },
      { id: "VAL-005", title: "Resilience and Failure-Mode Testing", prompt: "Are critical AI systems tested for outage, degradation, unsafe behavior and dependency failure scenarios?" },
    ],
  },
  {
    id: "monitoring",
    short: "Monitoring",
    name: "Monitoring & Detection",
    intent: "Observe AI activity, distinguish autonomous actions and detect abuse, change and anomalous behavior.",
    questions: [
      { id: "MON-001", title: "AI Security Telemetry", prompt: "Does the organization collect security-relevant telemetry for critical AI applications, models, agents and tools?" },
      { id: "MON-002", title: "Agent Action Traceability", prompt: "Can the organization reconstruct what a production AI agent did during a security investigation?" },
      { id: "MON-003", title: "Human vs AI Action Attribution", prompt: "Can security operations distinguish user actions, AI recommendations and autonomous AI actions?" },
      { id: "MON-004", title: "AI Anomaly and Abuse Detection", prompt: "Are detections defined for abnormal AI usage, sensitive-data exposure, privilege abuse, suspicious tool use or anomalous agent behavior?" },
      { id: "MON-005", title: "Model and Dependency Change Monitoring", prompt: "Are material changes in models, AI providers, tools, permissions or dependencies monitored for security impact?" },
    ],
  },
  {
    id: "incident-resilience",
    short: "IR & Resilience",
    name: "Incident Response & Business Resilience",
    intent: "Contain AI-specific incidents and keep critical business processes operating through AI failures and provider disruption.",
    questions: [
      { id: "IR-001", title: "AI-Specific Incident Playbooks", prompt: "Does incident response include playbooks for AI-specific scenarios?" },
      { id: "IR-002", title: "Agent Containment", prompt: "Can the organization quickly disable or isolate a compromised or unsafe AI agent and revoke its credentials and tool access?" },
      { id: "IR-003", title: "AI Evidence Preservation and Investigation", prompt: "Can the organization preserve relevant prompts, outputs, agent actions, identities, tool calls and model/context information for investigation?" },
      { id: "IR-004", title: "AI Service Continuity", prompt: "Are fallback and continuity plans defined for critical business processes that depend on AI services?" },
      { id: "IR-005", title: "Provider Concentration and Exit Readiness", prompt: "Has the organization assessed concentration risk and exit or substitution options for critical external AI dependencies?" },
    ],
  },
  {
    id: "measurement",
    short: "Measure",
    name: "Measurement & Continuous Improvement",
    intent: "Measure AI risk and maturity, report material exposure and continuously improve controls.",
    questions: [
      { id: "MEAS-001", title: "AI Security KPIs and KRIs", prompt: "Are meaningful AI security KPIs and KRIs defined and reviewed?" },
      { id: "MEAS-002", title: "Executive and Board Reporting", prompt: "Is material AI risk integrated into executive or board-level risk reporting where appropriate?" },
      { id: "MEAS-003", title: "Periodic Reassessment", prompt: "Is AI security maturity and exposure reassessed periodically and after material system changes?" },
      { id: "MEAS-004", title: "AI Security Roadmap Governance", prompt: "Are AI security improvement actions prioritized, owned and tracked to completion based on business exposure?" },
      { id: "MEAS-005", title: "Continuous Learning from Incidents and Testing", prompt: "Are findings from incidents, red teaming, validation, audits and operational telemetry used to improve AI controls and governance?" },
    ],
  },
];

export const ASRA_QUESTIONS = ASRA_DOMAINS.flatMap((domain) => domain.questions);
export const ASRA_QUESTION_BY_ID = Object.fromEntries(
  ASRA_QUESTIONS.map((question) => [question.id, question]),
) as Record<string, AsraQuestionContent>;
