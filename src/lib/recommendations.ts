import { allQuestions } from "./assessment-data";
import type { AssessmentState } from "./assessment-store";
import { accountabilityCoverage, decisionRightsSummary } from "./scoring";

export type Horizon = "0–90 Days" | "3–6 Months" | "6–12 Months";
export type Priority = "Critical" | "High" | "Medium";

export type Recommendation = {
  id: string;
  title: string;
  priority: Priority;
  risk: string;
  actions: string[];
  owners: string;
  evidence: string[];
  targetMaturity: string;
  horizon: Horizon;
};

const MATRIX_REC: Recommendation = {
  id: "rec-responsibility-matrix",
  title: "Define an Enterprise AI Responsibility Matrix",
  priority: "High",
  risk: "Unclear AI ownership may delay decisions, weaken risk acceptance, create gaps in access governance, and complicate incident response.",
  actions: [
    "AI business ownership",
    "security approval",
    "model approval",
    "data access",
    "agent sponsorship",
    "autonomy changes",
    "tool authorization",
    "third-party AI approval",
    "monitoring",
    "incident response",
    "risk acceptance",
    "decommissioning",
  ],
  owners: "Executive AI Governance Committee, CISO, CIO/CTO, AI/Data leadership, Risk/Legal.",
  evidence: [
    "documented AI responsibility matrix",
    "named accountable owners",
    "defined approval paths",
    "risk acceptance process",
    "agent sponsor requirement",
    "incident authority model",
    "periodic ownership review",
  ],
  targetMaturity: "3 — Defined",
  horizon: "0–90 Days",
};

const QUESTION_RECS: Record<string, Omit<Recommendation, "id">> = {
  "gov-business-ownership": {
    title: "Assign accountable business owners to critical AI systems",
    priority: "Critical",
    risk: "Critical AI systems without an accountable business owner leave no one answerable for incorrect AI behaviour or business impact.",
    actions: [
      "Inventory production AI systems and classify criticality",
      "Name an accountable business owner per critical system",
      "Record ownership in the AI inventory and review on change",
    ],
    owners: "Business leadership, AI/Data leadership, CIO/CTO.",
    evidence: ["AI inventory with named owners", "ownership review cadence"],
    targetMaturity: "3 — Defined",
    horizon: "0–90 Days",
  },
  "gov-agent-sponsorship": {
    title: "Require a human sponsor for every production AI agent",
    priority: "Critical",
    risk: "Agents able to execute business actions without an accountable sponsor can act outside approved purpose with no one authorized to stop or correct them.",
    actions: [
      "Register every production agent with technical identity, business owner, human sponsor and security owner",
      "Block production deployment without a named sponsor",
      "Revalidate sponsorship when privileges, tools or autonomy change",
    ],
    owners: "AI/Data leadership, CISO, business sponsors.",
    evidence: ["agent registry", "sponsor attestation", "privilege change revalidation records"],
    targetMaturity: "3 — Defined",
    horizon: "0–90 Days",
  },
  "gov-autonomy-approval": {
    title: "Define autonomy approval thresholds and authority",
    priority: "High",
    risk: "Silent increases in AI autonomy expand blast radius without risk, security or oversight review.",
    actions: [
      "Define autonomy levels and material-change thresholds",
      "Assign approval authority for autonomy increases",
      "Trigger risk, access and oversight reassessment on approval",
    ],
    owners: "CISO, Risk, business owner of the AI system.",
    evidence: ["autonomy level definitions", "approval records", "post-change risk reassessment"],
    targetMaturity: "3 — Defined",
    horizon: "0–90 Days",
  },
  "gov-residual-risk": {
    title: "Establish AI residual risk acceptance authority",
    priority: "High",
    risk: "Without a named risk acceptor, high-risk AI runs in production with unowned residual risk.",
    actions: [
      "Define who may accept residual AI risk by risk tier",
      "Document acceptance decisions with scope and expiry",
      "Reassess acceptance when behaviour, autonomy, data access or dependencies change",
    ],
    owners: "Risk/Legal, CISO, accountable business executive.",
    evidence: ["risk acceptance register", "expiry and review dates"],
    targetMaturity: "3 — Defined",
    horizon: "0–90 Days",
  },
  "gov-incident-accountability": {
    title: "Establish AI incident decision rights",
    priority: "Critical",
    risk: "During an autonomous-action incident, delay in deciding who can disable a service or revoke agent access extends exposure.",
    actions: [
      "Name authority to disable AI services, revoke agent access and credentials, block tools and isolate workloads",
      "Define evidence preservation and business impact communication roles",
      "Define who authorizes recovery after containment",
    ],
    owners: "CISO, SOC leadership, AI service owners.",
    evidence: ["AI incident authority model", "tested containment runbooks"],
    targetMaturity: "3 — Defined",
    horizon: "0–90 Days",
  },
  "life-model-change": {
    title: "Formalize model and critical instruction change control",
    priority: "High",
    risk: "Unapproved model or system-instruction changes alter AI behaviour without security or risk review.",
    actions: [
      "Require named approval for model and critical prompt changes",
      "Link change approval to risk reclassification",
    ],
    owners: "AI/Data leadership, Security, system business owner.",
    evidence: ["change approval records", "model version history"],
    targetMaturity: "3 — Defined",
    horizon: "3–6 Months",
  },
  "life-decommissioning": {
    title: "Assign decommissioning ownership for AI assets",
    priority: "Medium",
    risk: "Orphaned AI systems, agents and credentials retain data access with no accountable owner.",
    actions: [
      "Define retirement process covering agents, identities, tools and data access",
      "Report orphaned AI assets as an enterprise metric",
    ],
    owners: "IT/Engineering, Security, business owner.",
    evidence: ["decommissioning checklist", "orphaned asset metric"],
    targetMaturity: "3 — Defined",
    horizon: "6–12 Months",
  },
  "life-usecase-approval": {
    title: "Define an approval path for new AI use cases and architecture",
    priority: "High",
    risk: "AI systems entering production without approval bypass risk classification and security requirements.",
    actions: [
      "Publish an AI use case intake and approval path with named roles",
      "Require risk classification at intake",
    ],
    owners: "AI governance, Risk, Security, business leadership.",
    evidence: ["intake records", "documented approval path"],
    targetMaturity: "3 — Defined",
    horizon: "0–90 Days",
  },
  "data-approval": {
    title: "Assign approval authority for AI access to sensitive data",
    priority: "Critical",
    risk: "AI systems and agents can accumulate sensitive data access without an accountable approver.",
    actions: [
      "Require data owner approval for AI and agent data access",
      "Recertify AI data access periodically",
    ],
    owners: "Data owners, Security, Privacy/Legal.",
    evidence: ["approval log", "recertification records"],
    targetMaturity: "3 — Defined",
    horizon: "0–90 Days",
  },
  "data-tools": {
    title: "Authorize agent tools and APIs through a named approver",
    priority: "High",
    risk: "Unauthorized tool connections give agents unreviewed capability to act on business systems.",
    actions: ["Maintain an allowed tool catalogue", "Require security approval for new tool connections"],
    owners: "Security, AI/Data engineering.",
    evidence: ["tool catalogue", "authorization records"],
    targetMaturity: "3 — Defined",
    horizon: "3–6 Months",
  },
  "data-privilege": {
    title: "Control agent privilege escalation and delegation",
    priority: "High",
    risk: "Privilege drift and agent-to-agent delegation can create unmonitored execution paths.",
    actions: [
      "Require approval and ownership revalidation for privilege increases",
      "Govern agent-to-agent delegation explicitly",
    ],
    owners: "Security, IAM, agent sponsors.",
    evidence: ["privilege change approvals", "delegation inventory"],
    targetMaturity: "3 — Defined",
    horizon: "3–6 Months",
  },
  "ops-monitoring": {
    title: "Assign ownership for AI and agent monitoring",
    priority: "High",
    risk: "Unowned monitoring means abnormal AI or agent actions are detected late or not at all.",
    actions: ["Name monitoring owners per AI service", "Define escalation paths into security operations"],
    owners: "Security operations, AI service owners.",
    evidence: ["monitoring ownership map", "escalation procedure"],
    targetMaturity: "3 — Defined",
    horizon: "3–6 Months",
  },
  "ops-containment": {
    title: "Define agent containment and service recovery authority",
    priority: "High",
    risk: "Without clear containment authority, stopping a misbehaving agent depends on improvisation.",
    actions: ["Document containment authority and mechanisms", "Test containment and recovery in drills"],
    owners: "CISO, SOC, AI service owners.",
    evidence: ["containment runbook", "drill results"],
    targetMaturity: "3 — Defined",
    horizon: "3–6 Months",
  },
  "tp-approval": {
    title: "Assign accountability for third-party AI approval",
    priority: "Medium",
    risk: "External AI services can be adopted with unassessed data exposure and no accountable owner.",
    actions: ["Require named approval for third-party AI and AI procurement", "Reassess on vendor model changes"],
    owners: "Procurement, Security, Risk/Legal.",
    evidence: ["vendor AI register", "approval records"],
    targetMaturity: "3 — Defined",
    horizon: "3–6 Months",
  },
  "tp-regulatory": {
    title: "Assign regulatory accountability and AI risk classification ownership",
    priority: "Medium",
    risk: "Regulatory obligations for AI may go unowned until an external trigger.",
    actions: ["Name regulatory accountability per AI risk tier", "Own and maintain AI risk classification"],
    owners: "Risk/Legal, Compliance, AI governance.",
    evidence: ["risk classification register", "regulatory ownership map"],
    targetMaturity: "3 — Defined",
    horizon: "6–12 Months",
  },
  "gov-responsibilities": MATRIX_REC,
};

export function generateRecommendations(state: AssessmentState): Recommendation[] {
  const recs: Recommendation[] = [];

  for (const q of allQuestions) {
    const level = state.answers[q.id];
    if (level === undefined || level >= 3) continue;
    const template = QUESTION_RECS[q.id];
    if (!template) continue;
    const escalate = level <= 1;
    recs.push({
      ...template,
      id: `rec-${q.id}`,
      priority: escalate && template.priority === "High" ? "Critical" : template.priority,
      horizon: escalate ? "0–90 Days" : template.horizon,
    });
  }

  const cov = accountabilityCoverage(state);
  const dr = decisionRightsSummary(state);
  const needsMatrix =
    cov.answered > 0 && (cov.score < 70 || cov.missing.length > 0 || dr.missing.length > 2);
  if (needsMatrix && !recs.some((r) => r.id === "rec-gov-responsibilities")) {
    recs.push(MATRIX_REC);
  }

  const order: Priority[] = ["Critical", "High", "Medium"];
  return recs.sort((a, b) => order.indexOf(a.priority) - order.indexOf(b.priority));
}

export type RoadmapItem = { label: string; reason?: string };

export function generateRoadmap(state: AssessmentState): Record<Horizon, RoadmapItem[]> {
  const cov = accountabilityCoverage(state);
  const dr = decisionRightsSummary(state);
  const gap = (id: string) => cov.items.find((i) => i.area.id === id)?.status !== 2;
  const drGap = (id: string) => dr.items.find((i) => i.right.id === id)?.status !== 2;
  const low = (qid: string) => (state.answers[qid] ?? 0) < 3;

  const near: RoadmapItem[] = [];
  if (gap("business-ownership") || low("gov-business-ownership"))
    near.push({ label: "Assign accountable owners to critical AI systems" });
  if (gap("agent-sponsorship") || low("gov-agent-sponsorship"))
    near.push({ label: "Assign human sponsors to production agents" });
  if (gap("risk-acceptance") || low("gov-residual-risk"))
    near.push({ label: "Define AI risk acceptance authority" });
  if (drGap("dr-autonomy") || low("gov-autonomy-approval"))
    near.push({ label: "Define autonomy approval thresholds" });
  if (gap("incident-ownership") || drGap("dr-disable") || low("gov-incident-accountability"))
    near.push({ label: "Establish AI incident decision rights" });
  if (cov.score < 80 || low("gov-responsibilities"))
    near.push({ label: "Document the AI responsibility matrix" });

  const mid: RoadmapItem[] = [];
  if (low("life-usecase-approval") || cov.score < 90)
    mid.push({ label: "Integrate responsibility checks into AI onboarding" });
  if (gap("technical-ownership") || gap("business-ownership"))
    mid.push({ label: "Link ownership to the AI inventory" });
  if (drGap("dr-privileges") || low("data-privilege"))
    mid.push({ label: "Require ownership validation when privileges change" });
  if (gap("agent-sponsorship") || drGap("dr-new-agent"))
    mid.push({ label: "Integrate agent sponsorship into lifecycle governance" });
  if (gap("risk-acceptance") || low("gov-residual-risk"))
    mid.push({ label: "Periodically review residual risk acceptance" });
  if (gap("third-party") || low("tp-approval"))
    mid.push({ label: "Formalize third-party AI accountability reviews" });

  const far: RoadmapItem[] = [];
  far.push({ label: "Automate ownership reassessment" });
  if (drGap("dr-autonomy") || low("gov-autonomy-approval"))
    far.push({ label: "Trigger governance review when AI autonomy changes" });
  if (gap("security-ownership") || low("ops-monitoring"))
    far.push({ label: "Correlate ownership with security telemetry" });
  if (gap("decommissioning") || low("life-decommissioning"))
    far.push({ label: "Establish enterprise metrics for orphaned AI assets and agents" });

  return { "0–90 Days": near, "3–6 Months": mid, "6–12 Months": far };
}
