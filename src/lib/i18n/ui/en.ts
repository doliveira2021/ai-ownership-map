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
} satisfies UiDict;

export type UiKey = keyof typeof enUi;
