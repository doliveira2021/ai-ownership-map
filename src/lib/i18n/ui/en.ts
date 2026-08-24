import type { UiDict } from "../types";

export const enUi = {
  "locale.label": "Language",
  "nav.overview": "Overview",
  "nav.asra": "ASRA Assessment",
  "nav.results": "ASRA Results",
  "brand.title": "AI Security & Resilience",
  "footer.privacy":
    "Assessment data stays in this browser. Do not enter confidential or sensitive company information.",
  "demo.badge": "DEMO DATA",
  "demo.badgeShort": "DEMO",
  "demo.bannerNote":
    "Synthetic pilot profile — not a real organization assessment or benchmark.",

  // Landing
  "landing.eyebrow": "AI Accountability & Responsibility Model",
  "landing.title": "Operational accountability for AI decisions, risks and agents.",
  "landing.lead":
    "This assessment does not enforce one universal RACI model. It determines whether AI responsibilities are explicitly assigned, understood, documented, consistently applied, auditable, and maintained as AI systems evolve.",
  "landing.principleLabel": "Principle —",
  "landing.principleBody":
    "No critical AI system should exist without an accountable business owner. No AI agent capable of executing business actions should operate without an accountable human sponsor or owner.",
  "landing.ctaStart": "Start assessment",
  "landing.ctaResults": "View results dashboard",
  "landing.heroAlt": "Network of AI systems converging on a single accountable owner node",
  "landing.questionsTitle": "The stronger questions",
  "landing.questionsLead":
    "Governance is not a committee exercise. These questions drive scoring, recommendations and the roadmap.",
  "landing.q1": "Who owns this AI system?",
  "landing.q2": "Who can approve what it can access?",
  "landing.q3": "Who can increase its autonomy?",
  "landing.q4": "Who accepted its residual risk?",
  "landing.q5": "Who has authority to stop it?",
  "landing.q6": "Who is accountable if it acts incorrectly?",
  "landing.areasTitle": "Accountability areas assessed",
  "landing.rolesTitle": "Agent accountability roles",
  "landing.rolesLead":
    "These roles may overlap depending on organizational structure — they are not required to be separate individuals.",
  "landing.domainsTitle": "Assessment domains",
  "landing.questionCount": "{count} questions",

  // ASRA assessment page
  "asra.eyebrow": "ASRA v2",
  "asra.title": "AI Security & Resilience Assessment",
  "asra.lead":
    "Assess the current operating state of AI security across ten domains. Select the maturity description that most closely reflects the assessed scope. Do not enter confidential or sensitive company information.",
  "asra.reset": "Reset ASRA",
  "asra.pilot.eyebrow": "Demo / Pilot mode",
  "asra.pilot.title": "Load a synthetic organization profile",
  "asra.pilot.lead":
    "Use these scenarios to review scoring, priorities and the results experience. Synthetic profiles are test fixtures, not benchmarks or recommended target scores.",
  "asra.pilot.exit": "Exit demo",
  "asra.pilot.active": "DEMO DATA ACTIVE",
  "asra.pilot.editNote":
    "Editing any answer or risk-context value automatically converts this into a normal assessment.",
  "asra.pilot.exposure": "Exposure",
  "asra.pilot.autonomy": "Autonomy",
  "asra.pilot.impact": "Impact",
  "asra.pilot.dependency": "Dependency",
  "asra.context.eyebrow": "Risk context",
  "asra.context.title": "How exposed and dependent is the business?",
  "asra.context.lead":
    "These context values do not change maturity. They influence exposure, autonomy, resilience and the order of recommended priorities.",
  "asra.context.exposure": "AI Exposure",
  "asra.context.autonomy": "AI Autonomy",
  "asra.context.impact": "Business Impact",
  "asra.context.dependency": "AI Dependency",
  "asra.context.usesAgents": "Does the assessed scope use AI agents?",
  "asra.context.usesGenAI": "Does the assessed scope use Generative AI?",
  "asra.yes": "Yes",
  "asra.no": "No",
  "asra.progress": "{answered} of {total} applicable questions answered",
  "asra.resultsCta": "Results",
  "asra.agentSpecific": "Agent-specific",
  "asra.genAiSpecific": "GenAI-specific",
  "asra.na": "N/A",
  "asra.naButton": "Not applicable to this assessed scope",

  // Results page
  "results.empty.title": "No ASRA assessment data yet",
  "results.empty.lead":
    "Answer at least one applicable ASRA question to generate the new scoring dashboard.",
  "results.empty.cta": "Start ASRA assessment",
  "results.eyebrow": "ASRA Results",
  "results.title": "AI Security & Resilience Posture",
  "results.answered": "{answered} of {total} applicable questions answered.",
  "results.continue": "Continue assessment",
  "results.metric.maturity": "AI Security Maturity",
  "results.metric.exposure": "AI Exposure",
  "results.metric.autonomy": "AI Autonomy",
  "results.metric.resilience": "Business Resilience",
  "results.metric.resilienceNote": "Readiness adjusted for current AI dependency.",
  "results.quadrant.eyebrow": "Exposure × Maturity",
  "results.quadrant.note":
    "Priority is based on business exposure and control gaps, not on the weakest control alone.",
  "results.calc.summary": "How was this calculated?",
  "results.calc.maturity":
    "Each applicable 0–5 response is normalized to 0–100, weighted inside its domain, then combined using the ten domain weights. Unanswered and Not Applicable questions are excluded from the denominator rather than scored as zero.",
  "results.calc.exposure":
    "The headline exposure score is the current enterprise exposure context (0–100). It is kept separate from maturity so a mature organization can still operate a highly exposed AI estate.",
  "results.calc.autonomy":
    "Autonomy is an independent 0–5 context index ranging from no AI through generative and advisory use to autonomous operations. It increases priority for controls whose failure becomes more consequential as AI gains authority.",
  "results.calc.resilience":
    "Resilience uses maturity in the Incident Response & Business Resilience domain and then raises the required standard when business dependency on AI is high.",
  "results.calc.priorityTitle": "Recommendation priority",
  "results.calc.priorityFormula":
    "control gap × question weight × exposure factor × autonomy factor × business-impact factor × resilience factor",
  "results.calc.priorityNote":
    "This means the lowest maturity answer is not automatically the top recommendation. A moderate gap can rank higher when it sits in a highly exposed, privileged, autonomous or business-critical context.",
  "results.calc.integrity":
    "Configuration integrity: {questions} questions · {unique} unique IDs · domain weights {weights}% · {status}.",
  "results.calc.valid": "valid",
  "results.calc.invalid": "check configuration",
  "results.domains.eyebrow": "Domain maturity",
  "results.domains.title": "Where maturity is strong — and where it is not",
  "results.domains.notAssessed": "Not assessed",
  "results.domains.answered":
    "{answered} of {total} applicable questions answered · click to inspect drivers",
  "results.domains.noGaps": "No assessed control gaps in this domain.",
  "results.priorityShort": "Priority {score}",
  "results.currentMaturity": "Current maturity: {level} — {label}",
  "results.drill.eyebrow": "Risk drill-down",
  "results.drill.title": "What is driving the priority order?",
  "results.drill.lead":
    "These are the highest-ranked answered control gaps after applying exposure, autonomy, business-impact and resilience modifiers. Expand an item to see the selected maturity description and supporting framework traceability.",
  "results.drill.priorityScore": "priority score",
  "results.drill.current": "Current assessment",
  "results.drill.gapLine":
    "Control gap {gap}% · weighted gap {weighted} · default horizon {horizon}",
  "results.drill.recommended": "Recommended action",
  "results.drill.owners": "Suggested owners: {owners}",
  "results.drill.noRecommendation":
    "No grouped recommendation is currently triggered by this question.",
  "results.drill.framework": "Framework traceability",
  "results.drill.frameworkNote":
    "Supporting alignment only; references do not represent certification, compliance or an audit conclusion.",
  "results.drill.noFramework": "No structured framework mapping recorded.",
  "results.recs.eyebrow": "Prioritized recommendations",
  "results.recs.title": "Top actions based on risk context",
  "results.recs.priorityScore": "Priority score {score}",
  "results.recs.risk": "Risk: ",
  "results.recs.action": "Action: ",
  "results.recs.owners": "Suggested owners",
  "results.recs.triggeredBy": "Triggered by",
  "results.recs.empty":
    "No material recommendation triggers were generated from the answered questions.",
  "results.roadmap.eyebrow": "Roadmap",
  "results.roadmap.title": "NOW / NEXT / SCALE",
  "results.roadmap.now": "0–90 days",
  "results.roadmap.next": "3–6 months",
  "results.roadmap.scale": "6–12 months",
  "results.roadmap.empty": "No triggered actions in this horizon.",
  "results.method.eyebrow": "Methodology note",
  "results.method.body":
    "Scores are deterministic and reproducible. Framework alignment is supporting traceability, not certification, legal advice, regulatory validation or an audit.",

  // Action Packs, technology options and Local Action Tracker export
  "pack.view":
    "View Action Pack",
  "pack.hide":
    "Hide Action Pack",
  "pack.eyebrow":
    "Action Pack",
  "pack.why":
    "Why it matters",
  "pack.priority":
    "Priority",
  "pack.targetMaturity":
    "Target maturity",
  "pack.horizon":
    "Suggested horizon",
  "pack.effort":
    "Effort",
  "pack.businessImpact":
    "Business impact",
  "pack.urgency":
    "Control urgency",
  "pack.first7":
    "Immediate actions — first 7 days",
  "pack.plan30":
    "30-day plan",
  "pack.plan60":
    "60-day plan",
  "pack.plan90":
    "90-day plan",
  "pack.owners":
    "Suggested owners",
  "pack.dependencies":
    "Dependencies / prerequisites",
  "pack.evidence":
    "Evidence of completion",
  "pack.kpis":
    "KPIs / KRIs",
  "pack.level.Low":
    "Low",
  "pack.level.Medium":
    "Medium",
  "pack.level.High":
    "High",
  "pack.urgency.Immediate":
    "Immediate",
  "pack.urgency.Near-term":
    "Near-term",
  "pack.urgency.Strategic":
    "Strategic",
  "pack.tech.title":
    "Technology options",
  "pack.tech.capabilities":
    "Capabilities to consider",
  "pack.tech.categories":
    "Technology categories",
  "pack.tech.providers":
    "Examples to evaluate",
  "pack.tech.disclaimer":
    "Technology examples are provided for implementation context only. Inclusion does not constitute endorsement, ranking, certification, or a statement that a specific product satisfies the recommendation. Capabilities and product offerings change over time and should be independently validated.",
  "pack.tech.catalog":
    "Local technology catalog {version} · last reviewed {reviewed}",
  "pack.stack.title":
    "Your stack",
  "pack.stack.use-existing":
    "Use what you already have",
  "pack.stack.extend":
    "Extend your current stack",
  "pack.stack.evaluate":
    "Evaluate specialized technology",
  "plan90.eyebrow":
    "Execution",
  "plan90.title":
    "Build my 90-day action plan",
  "plan90.lead":
    "The highest-priority triggered actions consolidated into one quarterly view. Overlapping tasks appear once.",
  "plan90.p1":
    "Days 0–30 — Establish control",
  "plan90.p2":
    "Days 31–60 — Reduce exposure",
  "plan90.p3":
    "Days 61–90 — Validate & operationalize",
  "plan90.empty":
    "No consolidated actions in this phase.",
  "asra.platforms.title":
    "Strategic technology platforms already in use",
  "asra.platforms.lead":
    "Optional and local to this browser. These selections never change maturity, exposure or priority scores — they only tailor the technology guidance inside Action Packs.",
  "asra.platforms.other":
    "Other",
  "asra.platforms.count":
    "{count} selected",
  "export.title":
    "Local Action Tracker",
  "export.lead":
    "Download a platform-neutral tracker package generated in your browser from the currently triggered Action Packs. Use it with the agent or runtime of your choice.",
  "export.button":
    "Export Local Action Tracker",
  "export.privacyTitle":
    "Privacy model",
  "export.privacy1":
    "ASRA does not receive or sync the execution updates contained in the exported tracker.",
  "export.privacy2":
    "The downloaded files are controlled by you. No backend call is made to generate them.",
  "export.privacy3":
    "If you use the skill with a cloud-hosted AI assistant, your data remains subject to that provider's data handling terms. For strict confidentiality, run it in an approved enterprise environment or with a local/self-hosted model.",
  "export.empty":
    "Answer more questions to trigger Action Packs before exporting a tracker.",
  "tracker.readme.title":
    "ASRA Local Action Tracker",
  "tracker.readme.intro":
    "This package turns your ASRA assessment results into a local execution plan. It is platform neutral, works with the agent or runtime of your choice, and does not require ASRA after export.",
  "tracker.readme.howTitle":
    "How to use",
  "tracker.readme.how1":
    "Keep all files together in one working folder controlled by your organization.",
  "tracker.readme.how2":
    "Load SKILL.md into your agent or assistant as its operating procedure.",
  "tracker.readme.how3":
    "Treat actions.json as the local source of truth and update it as work progresses.",
  "tracker.readme.how4":
    "Use the weekly, executive and evidence templates for recurring reporting.",
  "tracker.readme.how5":
    "Record evidence references as local paths or ticket IDs rather than uploading documents.",
  "tracker.readme.filesTitle":
    "Files",
  "tracker.readme.contextTitle":
    "Assessment context",
  "tracker.privacy.title":
    "Privacy model",
  "tracker.privacy.p1":
    "ASRA does not receive, store or sync the execution updates you record in this package. Nothing in this tracker is sent back to the assessment.",
  "tracker.privacy.p2":
    "The exported files are entirely under your control and were generated in your browser.",
  "tracker.privacy.p3":
    "If you use these files with a cloud-hosted AI assistant, the data you provide is still subject to that assistant provider's data handling terms. For strict confidentiality, use an approved enterprise environment or a local/self-hosted model runtime.",
  "tracker.privacy.p4":
    "Role-based ownership is the default. Employee names are not required and should not be added unless your organization decides otherwise.",
  "tracker.skill.title":
    "Local Action Tracker — agent operating procedure",
  "tracker.skill.purpose":
    "You help a security leader execute an AI security remediation plan locally. You track tasks, evidence, KPIs/KRIs, blockers, owners, due dates and progress.",
  "tracker.skill.rulesTitle":
    "Rules",
  "tracker.skill.r1":
    "Treat actions.json as the single local source of truth.",
  "tracker.skill.r2":
    "Never call the ASRA site or any ASRA API to sync action status.",
  "tracker.skill.r3":
    "Never upload or transmit evidence automatically.",
  "tracker.skill.r4":
    "Preserve the original actionId, recommendationId and task ids for traceability.",
  "tracker.skill.r5":
    "Use only these statuses: Not Started, In Progress, Blocked, Complete, Accepted Risk, Deferred.",
  "tracker.skill.r6":
    "Maintain owner role, target date, completion percentage, dependencies, blockers and evidence references.",
  "tracker.skill.r7":
    "Maintain KPI/KRI baseline, target and current values with the review cadence.",
  "tracker.skill.r8":
    "Update lastReviewed and nextReview whenever a review is performed.",
  "tracker.skill.r9":
    "Support role-based ownership by default and never require employee names.",
  "tracker.skill.r10":
    "Allow local notes, internal ticket IDs and links or paths to evidence.",
  "tracker.skill.r11":
    "Base every recommendation you make only on the local action state in this package.",
  "tracker.skill.r12":
    "Never modify the ASRA scores, priorities or recommendation content; they are the assessment baseline.",
  "tracker.skill.outputsTitle":
    "Expected outputs",
  "tracker.skill.o1":
    "Weekly review summaries using weekly-review-template.md.",
  "tracker.skill.o2":
    "Executive status reports using executive-status-template.md.",
  "tracker.skill.o3":
    "A list of overdue and blocked actions with the reason and owner role.",
  "tracker.skill.o4":
    "A comparison of actual KPI/KRI values against their targets.",
  "tracker.skill.o5":
    "Stalled recommendations and the next best action for each.",
  "tracker.weekly.title":
    "Weekly review",
  "tracker.weekly.s1":
    "Progress since last review",
  "tracker.weekly.s2":
    "Overdue actions",
  "tracker.weekly.s3":
    "Blocked actions and blockers",
  "tracker.weekly.s4":
    "KPI/KRI movement",
  "tracker.weekly.s5":
    "Decisions needed",
  "tracker.weekly.s6":
    "Next week's focus",
  "tracker.exec.title":
    "Executive status report",
  "tracker.exec.s1":
    "Posture summary",
  "tracker.exec.s2":
    "Top risks and exposure",
  "tracker.exec.s3":
    "Progress against the 90-day plan",
  "tracker.exec.s4":
    "Accepted risks and deferrals",
  "tracker.exec.s5":
    "KPI/KRI dashboard",
  "tracker.exec.s6":
    "Decisions and investment requested",
  "tracker.evidence.title":
    "Evidence index",
  "tracker.evidence.s1":
    "Action / task reference",
  "tracker.evidence.s2":
    "Evidence description",
  "tracker.evidence.s3":
    "Local location or ticket ID",
  "tracker.evidence.s4":
    "Owner role",
  "tracker.evidence.s5":
    "Date recorded",
  "tracker.generated":
    "Generated from an ASRA assessment on {date}. Locale: {locale}.",
} satisfies UiDict;

export type UiKey = keyof typeof enUi;
