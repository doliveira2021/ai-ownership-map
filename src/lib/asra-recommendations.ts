import type { AsraDomainId, Horizon } from "./asra-config";
import {
  calculateAssessmentScores,
  type AssessmentContext,
  type AsraAnswers,
  type QuestionScore,
} from "./asra-scoring";

export type Priority = "Critical" | "High" | "Medium";

export type AsraRecommendation = {
  id: string;
  domain: AsraDomainId;
  title: string;
  risk: string;
  action: string;
  suggestedOwners: string[];
  evidence: string[];
  targetMaturity: number;
  horizon: Horizon;
  priority: Priority;
  priorityScore: number;
  triggeredBy: string[];
};

type RecommendationTemplate = Omit<
  AsraRecommendation,
  "priority" | "priorityScore" | "triggeredBy" | "horizon"
> & {
  defaultHorizon: Horizon;
  questionIds: string[];
};

const templates: RecommendationTemplate[] = [
  {
    id: "REC-DISC-001",
    domain: "discovery",
    title: "Establish an Enterprise AI Inventory",
    risk: "Unknown or unmanaged AI systems can introduce unowned data access, third-party dependencies and security exposure.",
    action:
      "Create a centralized, lifecycle-managed inventory of AI applications, models, agents, owners, data sources, tools and material third-party dependencies.",
    suggestedOwners: ["CISO", "CIO/CTO", "AI/Data leadership", "Enterprise Architecture"],
    evidence: ["AI inventory", "named owners", "agent/tool inventory", "documented data flows"],
    targetMaturity: 3,
    defaultHorizon: "NOW",
    questionIds: ["DISC-001", "DISC-002", "DISC-003", "DISC-005", "DISC-006"],
  },
  {
    id: "REC-RISK-001",
    domain: "risk",
    title: "Adopt Risk-Based AI Classification",
    risk: "AI controls may be applied uniformly or inconsistently when business impact, sensitive data, autonomy and external exposure are not classified together.",
    action:
      "Define an AI risk-classification method that combines business criticality, data sensitivity, autonomy, privilege, external exposure, regulatory impact and human oversight.",
    suggestedOwners: ["Enterprise Risk", "CISO", "AI Governance", "Legal/Compliance"],
    evidence: ["classification standard", "risk tiers", "approval thresholds", "high-risk AI register"],
    targetMaturity: 3,
    defaultHorizon: "NOW",
    questionIds: ["RISK-001", "RISK-002", "RISK-003", "RISK-004", "RISK-005"],
  },
  {
    id: "REC-GOV-001",
    domain: "governance",
    title: "Define AI Accountability and Decision Rights",
    risk: "Unclear ownership delays decisions, weakens risk acceptance and creates gaps in agent sponsorship, incident authority and lifecycle governance.",
    action:
      "Define accountable business ownership, agent sponsorship, risk-acceptance authority, autonomy approval, tool authorization, incident authority and decommissioning responsibilities.",
    suggestedOwners: ["Executive AI Governance", "CISO", "CIO/CTO", "AI/Data leadership", "Risk/Legal"],
    evidence: ["AI responsibility matrix", "decision-right model", "agent sponsor requirement", "risk-acceptance workflow"],
    targetMaturity: 3,
    defaultHorizon: "NOW",
    questionIds: ["GOV-001", "GOV-002", "GOV-003", "GOV-004", "GOV-005", "GOV-006", "GOV-008"],
  },
  {
    id: "REC-THRT-001",
    domain: "threat-modeling",
    title: "Operationalize AI Threat Modeling",
    risk: "Traditional application threat models can miss prompt/context manipulation, model and data poisoning, excessive agency, tool abuse and AI supply-chain threats.",
    action:
      "Add AI-specific threat scenarios to architecture review and require threat models to drive controls, validation and monitoring requirements.",
    suggestedOwners: ["Security Architecture", "AppSec", "AI Engineering", "Threat Modeling"],
    evidence: ["AI threat model template", "documented threat scenarios", "control traceability", "review records"],
    targetMaturity: 3,
    defaultHorizon: "NEXT",
    questionIds: ["THRT-001", "THRT-002", "THRT-003", "THRT-004", "THRT-005"],
  },
  {
    id: "REC-SDLC-001",
    domain: "secure-sdlc",
    title: "Establish a Secure AI Development Lifecycle",
    risk: "AI-specific security decisions may occur too late if model provenance, non-human identity, validation, permissions and retirement are not built into delivery gates.",
    action:
      "Integrate AI security requirements across design, build, test, deploy, operate and retire phases with risk-based release criteria.",
    suggestedOwners: ["AppSec", "AI Engineering", "Platform Engineering", "Security Architecture"],
    evidence: ["secure AI SDLC standard", "release gates", "provenance checks", "retirement checklist"],
    targetMaturity: 3,
    defaultHorizon: "NEXT",
    questionIds: ["SDLC-001", "SDLC-002", "SDLC-003", "SDLC-004", "SDLC-005", "SDLC-006"],
  },
  {
    id: "REC-PROT-001",
    domain: "protection",
    title: "Enforce Minimum AI Protection Controls",
    risk: "AI systems and agents can amplify data exposure and business impact when identities, privileges, retrieval sources, tools and action boundaries are weakly controlled.",
    action:
      "Define minimum identity, data, model, application, agent and supply-chain controls, with least privilege and explicit tool/action boundaries for agents.",
    suggestedOwners: ["CISO", "Identity Security", "Data Security", "AppSec", "AI Platform"],
    evidence: ["minimum control baseline", "least-privilege evidence", "tool authorization", "agent kill/revoke capability"],
    targetMaturity: 3,
    defaultHorizon: "NOW",
    questionIds: ["PROT-001", "PROT-002", "PROT-003", "PROT-004", "PROT-005", "PROT-006", "PROT-007", "PROT-008", "PROT-009", "PROT-010"],
  },
  {
    id: "REC-VAL-001",
    domain: "validation",
    title: "Introduce Risk-Based AI Adversarial Validation",
    risk: "Production AI may retain exploitable prompt, data, tool, privilege or failure-mode weaknesses when validation is limited to functional testing.",
    action:
      "Require adversarial validation for material AI risks and structured red teaming for systems whose business exposure warrants it.",
    suggestedOwners: ["AI Red Team", "AppSec", "Security Testing", "AI Engineering"],
    evidence: ["test plans", "red-team criteria", "findings register", "retest evidence"],
    targetMaturity: 3,
    defaultHorizon: "NEXT",
    questionIds: ["VAL-001", "VAL-002", "VAL-003", "VAL-004", "VAL-005"],
  },
  {
    id: "REC-MON-001",
    domain: "monitoring",
    title: "Create AI Security Monitoring and Traceability",
    risk: "Security teams may be unable to detect or reconstruct AI-driven activity when telemetry cannot distinguish users, agents, tools and autonomous actions.",
    action:
      "Define minimum AI telemetry, centralize relevant logs and create detections for anomalous AI usage, privilege abuse, sensitive-data exposure and suspicious agent/tool behavior.",
    suggestedOwners: ["SOC", "Detection Engineering", "AI Platform", "Identity Security"],
    evidence: ["AI logging standard", "centralized telemetry", "agent action traceability", "AI detection library"],
    targetMaturity: 3,
    defaultHorizon: "NEXT",
    questionIds: ["MON-001", "MON-002", "MON-003", "MON-004", "MON-005"],
  },
  {
    id: "REC-IR-001",
    domain: "incident-resilience",
    title: "Build AI Incident Response and Business Resilience",
    risk: "AI incidents or provider failures can create disproportionate business impact when containment, evidence, fallback and recovery authority are unclear.",
    action:
      "Create AI-specific response playbooks, rapid agent containment/revocation, evidence-preservation requirements and continuity plans for critical AI dependencies.",
    suggestedOwners: ["Incident Response", "SOC", "Business Continuity", "AI Platform", "CISO"],
    evidence: ["AI IR playbooks", "containment test", "fallback plan", "provider concentration assessment"],
    targetMaturity: 3,
    defaultHorizon: "NOW",
    questionIds: ["IR-001", "IR-002", "IR-003", "IR-004", "IR-005"],
  },
  {
    id: "REC-MEAS-001",
    domain: "measurement",
    title: "Establish AI Security Metrics and Continuous Improvement",
    risk: "AI security programs can stagnate when maturity, exposure, incidents and remediation progress are not measured and reassessed.",
    action:
      "Define AI security KPIs/KRIs, establish reassessment triggers and govern a risk-based improvement roadmap with executive reporting.",
    suggestedOwners: ["CISO", "AI Governance", "Enterprise Risk", "Security Program Management"],
    evidence: ["KPI/KRI set", "executive reporting", "reassessment cadence", "tracked improvement roadmap"],
    targetMaturity: 3,
    defaultHorizon: "SCALE",
    questionIds: ["MEAS-001", "MEAS-002", "MEAS-003", "MEAS-004", "MEAS-005"],
  },
];

function priorityFromScore(score: number): Priority {
  if (score >= 80) return "Critical";
  if (score >= 45) return "High";
  return "Medium";
}

function horizonFromTriggers(template: RecommendationTemplate, triggers: QuestionScore[]): Horizon {
  if (triggers.some((trigger) => trigger.horizon === "NOW" && trigger.priorityScore >= 45)) return "NOW";
  if (triggers.some((trigger) => trigger.horizon === "NEXT")) return "NEXT";
  return template.defaultHorizon;
}

export function generateAsraRecommendations(
  answers: AsraAnswers,
  context: AssessmentContext,
): AsraRecommendation[] {
  const scores = calculateAssessmentScores(answers, context);
  const byQuestion = new Map(scores.questionScores.map((score) => [score.questionId, score]));

  return templates
    .map((template) => {
      const triggers = template.questionIds
        .map((id) => byQuestion.get(id))
        .filter((score): score is QuestionScore => score !== undefined && score.controlGap >= 0.4);

      if (!triggers.length) return null;

      const priorityScore = Math.max(...triggers.map((trigger) => trigger.priorityScore));
      return {
        id: template.id,
        domain: template.domain,
        title: template.title,
        risk: template.risk,
        action: template.action,
        suggestedOwners: template.suggestedOwners,
        evidence: template.evidence,
        targetMaturity: template.targetMaturity,
        horizon: horizonFromTriggers(template, triggers),
        priority: priorityFromScore(priorityScore),
        priorityScore,
        triggeredBy: triggers
          .sort((a, b) => b.priorityScore - a.priorityScore)
          .map((trigger) => trigger.questionId),
      } satisfies AsraRecommendation;
    })
    .filter((recommendation): recommendation is AsraRecommendation => recommendation !== null)
    .sort((a, b) => b.priorityScore - a.priorityScore);
}

export function generateAsraRoadmap(answers: AsraAnswers, context: AssessmentContext) {
  const recommendations = generateAsraRecommendations(answers, context);
  return {
    NOW: recommendations.filter((recommendation) => recommendation.horizon === "NOW"),
    NEXT: recommendations.filter((recommendation) => recommendation.horizon === "NEXT"),
    SCALE: recommendations.filter((recommendation) => recommendation.horizon === "SCALE"),
  } satisfies Record<Horizon, AsraRecommendation[]>;
}
