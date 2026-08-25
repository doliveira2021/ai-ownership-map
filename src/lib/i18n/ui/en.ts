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
  "demo.bannerNote": "Synthetic pilot profile — not a real organization assessment or benchmark.",

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
  "results.view.label": "View",
  "results.view.domains": "Domain maturity",
  "results.view.alignment": "Framework alignment",
  "results.alignment.eyebrow": "Framework alignment heatmap",
  "results.alignment.title": "Estimated alignment with the frameworks ASRA is grounded in",
  "results.alignment.lead":
    "Directional estimate derived from your answered questions and ASRA's existing framework traceability. It is not an audit, certification, conformity assessment or compliance statement.",
  "results.alignment.frameworkColumn": "Framework",
  "results.alignment.overallColumn": "Estimated alignment",
  "results.alignment.structuralOnly": "structural reference — not scored",
  "results.alignment.notScored": "Not scored",
  "results.alignment.noData": "No answered mapped questions",
  "results.alignment.cellTitle":
    "{framework} · {domain}: estimated {value}% from {questions} mapped answered question(s)",
  "results.alignment.legend": "Estimated alignment:",
  "results.alignment.band.low": "Low (0–29)",
  "results.alignment.band.partial": "Partial (30–54)",
  "results.alignment.band.moderate": "Moderate (55–79)",
  "results.alignment.band.strong": "Strong (80–100)",
  "results.alignment.methodology.summary": "How this estimate is calculated",
  "results.alignment.methodology.body":
    "For each framework, ASRA takes the applicable questions you answered that are mapped to that framework, converts each answer to a normalized maturity percentage, and averages them using the existing question weights. Domain cells apply the same calculation restricted to that domain.",
  "results.alignment.methodology.confidence":
    "Mapping confidence adjusts a question's contribution to the estimate only: direct mappings count in full, thematic mappings count partially, and candidate mappings count least. Assessment scoring, recommendations and the roadmap are unaffected.",
  "results.alignment.methodology.structural":
    "Frameworks used only as structural references have no per-question mapping, so they are shown for context and never scored. Cells with no answered mapped question are shown as empty rather than as zero.",
  "results.alignment.disclaimer":
    "ASRA is independent and not affiliated with, endorsed by, or certified against any of these frameworks or their issuing organizations.",
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
  "pack.view": "View Action Pack",
  "pack.hide": "Hide Action Pack",
  "pack.eyebrow": "Action Pack",
  "pack.why": "Why it matters",
  "pack.priority": "Priority",
  "pack.targetMaturity": "Target maturity",
  "pack.horizon": "Suggested horizon",
  "pack.effort": "Effort",
  "pack.businessImpact": "Business impact",
  "pack.urgency": "Control urgency",
  "pack.first7": "Immediate actions — first 7 days",
  "pack.plan30": "30-day plan",
  "pack.plan60": "60-day plan",
  "pack.plan90": "90-day plan",
  "pack.owners": "Suggested owners",
  "pack.dependencies": "Dependencies / prerequisites",
  "pack.evidence": "Evidence of completion",
  "pack.kpis": "KPIs / KRIs",
  "pack.level.Low": "Low",
  "pack.level.Medium": "Medium",
  "pack.level.High": "High",
  "pack.urgency.Immediate": "Immediate",
  "pack.urgency.Near-term": "Near-term",
  "pack.urgency.Strategic": "Strategic",
  "pack.tech.title": "Technology options",
  "pack.tech.capabilities": "Capabilities to consider",
  "pack.tech.categories": "Technology categories",
  "pack.tech.providers": "Examples to evaluate",
  "pack.tech.disclaimer":
    "Technology examples are provided for implementation context only. Inclusion does not constitute endorsement, ranking, certification, or a statement that a specific product satisfies the recommendation. Capabilities and product offerings change over time and should be independently validated.",
  "pack.tech.catalog": "Local technology catalog {version} · last reviewed {reviewed}",
  "pack.stack.title": "Your stack",
  "pack.stack.use-existing": "Use what you already have",
  "pack.stack.extend": "Extend your current stack",
  "pack.stack.evaluate": "Evaluate specialized technology",
  "plan90.eyebrow": "Execution",
  "plan90.title": "Build my 90-day action plan",
  "plan90.lead":
    "The highest-priority triggered actions consolidated into one quarterly view. Overlapping tasks appear once.",
  "plan90.p1": "Days 0–30 — Establish control",
  "plan90.p2": "Days 31–60 — Reduce exposure",
  "plan90.p3": "Days 61–90 — Validate & operationalize",
  "plan90.empty": "No consolidated actions in this phase.",
  "asra.platforms.title": "Strategic technology platforms already in use",
  "asra.platforms.lead":
    "Optional and local to this browser. These selections never change maturity, exposure or priority scores — they only tailor the technology guidance inside Action Packs.",
  "asra.platforms.other": "Other",
  "asra.platforms.count": "{count} selected",
  "export.title": "Local Action Tracker",
  "export.lead":
    "Download a platform-neutral tracker package generated in your browser from the currently triggered Action Packs. Use it with the agent or runtime of your choice.",
  "export.button": "Export Local Action Tracker",
  "export.privacyTitle": "Privacy model",
  "export.privacy1":
    "ASRA does not receive or sync the execution updates contained in the exported tracker.",
  "export.privacy2":
    "The downloaded files are controlled by you. No backend call is made to generate them.",
  "export.privacy3":
    "If you use the skill with a cloud-hosted AI assistant, your data remains subject to that provider's data handling terms. For strict confidentiality, run it in an approved enterprise environment or with a local/self-hosted model.",
  "export.empty": "Answer more questions to trigger Action Packs before exporting a tracker.",
  "tracker.readme.title": "ASRA Local Action Tracker",
  "tracker.readme.intro":
    "This package turns your ASRA assessment results into a local execution plan. It is platform neutral, works with the agent or runtime of your choice, and does not require ASRA after export.",
  "tracker.readme.howTitle": "How to use",
  "tracker.readme.how1":
    "Keep all files together in one working folder controlled by your organization.",
  "tracker.readme.how2": "Load SKILL.md into your agent or assistant as its operating procedure.",
  "tracker.readme.how3":
    "Treat actions.json as the local source of truth and update it as work progresses.",
  "tracker.readme.how4":
    "Use the weekly, executive and evidence templates for recurring reporting.",
  "tracker.readme.how5":
    "Record evidence references as local paths or ticket IDs rather than uploading documents.",
  "tracker.readme.filesTitle": "Files",
  "tracker.readme.contextTitle": "Assessment context",
  "tracker.privacy.title": "Privacy model",
  "tracker.privacy.p1":
    "ASRA does not receive, store or sync the execution updates you record in this package. Nothing in this tracker is sent back to the assessment.",
  "tracker.privacy.p2":
    "The exported files are entirely under your control and were generated in your browser.",
  "tracker.privacy.p3":
    "If you use these files with a cloud-hosted AI assistant, the data you provide is still subject to that assistant provider's data handling terms. For strict confidentiality, use an approved enterprise environment or a local/self-hosted model runtime.",
  "tracker.privacy.p4":
    "Role-based ownership is the default. Employee names are not required and should not be added unless your organization decides otherwise.",
  "tracker.skill.title": "Local Action Tracker — agent operating procedure",
  "tracker.skill.purpose":
    "You help a security leader execute an AI security remediation plan locally. You track tasks, evidence, KPIs/KRIs, blockers, owners, due dates and progress.",
  "tracker.skill.rulesTitle": "Rules",
  "tracker.skill.r1": "Treat actions.json as the single local source of truth.",
  "tracker.skill.r2": "Never call the ASRA site or any ASRA API to sync action status.",
  "tracker.skill.r3": "Never upload or transmit evidence automatically.",
  "tracker.skill.r4":
    "Preserve the original actionId, recommendationId and task ids for traceability.",
  "tracker.skill.r5":
    "Use only these statuses: Not Started, In Progress, Blocked, Complete, Accepted Risk, Deferred.",
  "tracker.skill.r6":
    "Maintain owner role, target date, completion percentage, dependencies, blockers and evidence references.",
  "tracker.skill.r7":
    "Maintain KPI/KRI baseline, target and current values with the review cadence.",
  "tracker.skill.r8": "Update lastReviewed and nextReview whenever a review is performed.",
  "tracker.skill.r9": "Support role-based ownership by default and never require employee names.",
  "tracker.skill.r10": "Allow local notes, internal ticket IDs and links or paths to evidence.",
  "tracker.skill.r11":
    "Base every recommendation you make only on the local action state in this package.",
  "tracker.skill.r12":
    "Never modify the ASRA scores, priorities or recommendation content; they are the assessment baseline.",
  "tracker.skill.outputsTitle": "Expected outputs",
  "tracker.skill.o1": "Weekly review summaries using weekly-review-template.md.",
  "tracker.skill.o2": "Executive status reports using executive-status-template.md.",
  "tracker.skill.o3": "A list of overdue and blocked actions with the reason and owner role.",
  "tracker.skill.o4": "A comparison of actual KPI/KRI values against their targets.",
  "tracker.skill.o5": "Stalled recommendations and the next best action for each.",
  "tracker.skill.contextTitle": "What the exported ASRA results contain",
  "tracker.skill.c1":
    "Assessment outputs include maturity by domain plus exposure, autonomy and resilience context for the assessed scope.",
  "tracker.skill.c2":
    "Recommendations are already prioritized by ASRA. Do not re-rank them unless the user explicitly asks for an override, and always preserve the original priority values and IDs.",
  "tracker.skill.c3":
    "Action Packs translate each recommendation into 7d/30d/60d/90d execution steps with owner roles, dependencies, evidence requirements and KPIs/KRIs.",
  "tracker.skill.c4":
    "Industry Practice References (catalog {version}) are supporting context only. They may explain or enrich an action, but must never change scores, priorities or recommendation triggers, and never imply endorsement, certification or validation by Microsoft, Anthropic, Google DeepMind or any other provider.",
  "tracker.skill.c5":
    "Technology Options are implementation examples only: capability first, category second, provider examples non-exhaustive and non-endorsing.",
  "tracker.skill.c6":
    "Agentic-security concepts represented in ASRA include least agency, AI and agent supply-chain governance, validation of AI-generated tool arguments, circuit breakers and containment, AI BOM/inventory, shared responsibility, and reassessment when capability or autonomy materially changes. Use these concepts only where they are already relevant to an exported action; never invent new assessment findings.",
  "tracker.skill.c7":
    "Every critical AI or agent action must preserve accountable ownership, evidence requirements and a review cadence.",
  "tracker.skill.opTitle": "Operating model",
  "tracker.skill.opNote":
    "You start from the exported ASRA results and execution plan. You never rerun or recompute the assessment.",
  "tracker.skill.op1":
    "Assessment — ASRA scored maturity, exposure, autonomy and resilience for the assessed scope. Treat these values as fixed inputs.",
  "tracker.skill.op2":
    "Executive Interpretation — explain what the findings mean in business risk terms, without changing them.",
  "tracker.skill.op3":
    "Leadership Direction — connect the prioritized recommendations to decisions leadership must make: ownership, funding, sequencing and risk acceptance.",
  "tracker.skill.op4":
    "Action Packs — the 7d/30d/60d/90d tasks, owners, dependencies, evidence and KPIs/KRIs exported for each recommendation.",
  "tracker.skill.op5":
    "Local Execution & Weekly Review — maintain status, blockers, dates and evidence locally, and run the weekly review cadence.",
  "tracker.skill.op6":
    "Measurement & Evidence — track KPI/KRI baseline, target and current values and keep evidence references current.",
  "tracker.skill.groundTitle": "Grounding and non-hallucination rules",
  "tracker.skill.g1":
    "Never invent findings, scores, evidence, owners, dates or completion status.",
  "tracker.skill.g2":
    "Always distinguish assessment-derived facts from local updates added by the user.",
  "tracker.skill.g3": "Never claim compliance, certification or audit readiness.",
  "tracker.skill.g4":
    "Never claim that a provider satisfies a recommendation merely because it appears in Technology Options or Industry Practice References.",
  "tracker.skill.g5": "Ask the user for missing local execution facts instead of guessing them.",
  "tracker.skill.g6":
    "Treat Accepted Risk and Deferred as explicit governance decisions, never as successful remediation.",
  "tracker.skill.execTitle": "Suggested executive outputs (on request only)",
  "tracker.skill.execNote":
    "ASRA does not generate these documents. You may produce them locally on request from the exported data.",
  "tracker.skill.exec1":
    "Board Risk Brief — a very high-level, natural-language summary of the main findings and the associated business risks, written for Board and CEO audiences.",
  "tracker.skill.exec2":
    "Executive Action Brief — a leadership-oriented summary connecting findings and risks to recommended direction, priorities, owner roles and the 90-day focus, written for CISO, CIO, CTO and AI leaders.",
  "tracker.skill.exec3":
    "Ground both documents deterministically in the exported findings and recommendations, invent no new risks or priorities, and clearly label any user-supplied local updates.",
  "tracker.readme.sourceTitle": "Source versions",

  "tracker.weekly.title": "Weekly review",
  "tracker.weekly.s1": "Progress since last review",
  "tracker.weekly.s2": "Overdue actions",
  "tracker.weekly.s3": "Blocked actions and blockers",
  "tracker.weekly.s4": "KPI/KRI movement",
  "tracker.weekly.s5": "Decisions needed",
  "tracker.weekly.s6": "Next week's focus",
  "tracker.exec.title": "Executive status report",
  "tracker.exec.s1": "Posture summary",
  "tracker.exec.s2": "Top risks and exposure",
  "tracker.exec.s3": "Progress against the 90-day plan",
  "tracker.exec.s4": "Accepted risks and deferrals",
  "tracker.exec.s5": "KPI/KRI dashboard",
  "tracker.exec.s6": "Decisions and investment requested",
  "tracker.evidence.title": "Evidence index",
  "tracker.evidence.s1": "Action / task reference",
  "tracker.evidence.s2": "Evidence description",
  "tracker.evidence.s3": "Local location or ticket ID",
  "tracker.evidence.s4": "Owner role",
  "tracker.evidence.s5": "Date recorded",
  "tracker.generated": "Generated from an ASRA assessment on {date}. Locale: {locale}.",
  // Industry practice references
  "practices.eyebrow": "Industry Practice References",
  "practices.title": "How frontier-AI organizations describe their own practices",
  "practices.lead":
    "Selected practices documented publicly by frontier-AI organizations. They can help enterprise leaders translate AI security and resilience principles into operating practices. They are not standards, controls, certification requirements, rankings or endorsements, and they never affect ASRA scores or recommendations.",
  "practices.disclaimer":
    "These references summarize selected practices documented publicly by AI organizations. They are provided for context only and do not constitute a standard, certification requirement, endorsement, ranking, or validation of any provider or organization. Practices and policies change over time; review the linked public source for current information.",
  "practices.category": "Category",
  "practices.organization": "Organization",
  "practices.publicPractice": "Public practice",
  "practices.implication": "What this means for your program",
  "practices.related": "Related ASRA areas",
  "practices.sourceDate": "Source date",
  "practices.lastReviewed": "Last reviewed",
  "practices.viewSource": "View public source",
  "practices.viewDetails": "View details",
  "practices.hideDetails": "Hide details",
  "practices.viewMore": "View more references",
  "practices.viewLess": "Show fewer references",
  "practices.version": "Reference catalog version {version}",
  // Methodology / framework grounding
  "method.eyebrow": "Methodology",
  "method.title": "Built on recognized industry frameworks",
  "method.body":
    "ASRA is grounded in recognized industry frameworks and security practices, including NIST AI RMF, NIST CSF, ISO/IEC 42001, ISO/IEC 27001, CSA AI Controls Matrix, MITRE ATLAS, and OWASP guidance for generative and agentic AI. The assessment operationalizes these references into practical questions, maturity signals, risk indicators, and actionable recommendations.",
  "method.genaiProfile":
    "It also draws on the NIST Generative AI Profile (NIST AI 600-1) for generative-AI specific risks and safeguards.",
  "method.how.title": "How ASRA uses these references",
  "method.point.notSingle": "ASRA is not copied from, nor a restatement of, any single framework.",
  "method.point.synthesis":
    "It synthesizes multiple recognized references into operational assessment questions, maturity signals and recommendations.",
  "method.point.traceability":
    "Framework mappings are supporting evidence and traceability only; they are not scoring endorsements by the framework owners.",
  "method.point.practicesSeparate":
    "Industry Practice References are a separate layer: public practices published by AI organizations, not framework evidence.",
  "method.point.technologySeparate":
    "Technology Options are a separate layer: illustrative implementation capability categories and example providers.",
  "method.disclaimer":
    "Framework alignment indicates estimated maturity coverage based on assessment responses. It does not represent certification, formal compliance, or an audit.",
  "method.assessmentDisclaimer":
    "This assessment provides maturity and alignment guidance. It does not constitute certification, legal advice, regulatory compliance validation, or an audit.",

  "footer.author.prefix": "Created by",
  "footer.author.name": "Diego Oliveira",
  "footer.author.linkLabel": "LinkedIn profile of Diego Oliveira (opens in a new tab)",
  "footer.author.body":
    "ASRA is an independent, non-commercial resource created to help organizations understand the security and resilience gaps introduced by AI and identify practical ways to address them using recognized industry frameworks and security practices. The author has no financial interest in the technologies or providers referenced in this assessment.",

  // Framework library
  "nav.frameworks": "Framework Library",
  "library.eyebrow": "Reference Library",
  "library.title": "Framework Library",
  "library.intro": "ASRA synthesizes multiple recognized security, risk, governance and AI assurance references. This library shows the primary frameworks used to inform the assessment methodology and provides direct links to their official sources.",
  "library.copyright": "Summaries are short, independently written paraphrases. Full framework text is not reproduced here — use the official source link for the authoritative document.",
  "library.disclaimer": "ASRA is an independent assessment. Framework references indicate methodological grounding and traceability only. They do not represent certification, formal compliance, endorsement, or validation by the framework owner.",
  "library.organization": "Issuing organization",
  "library.version": "Version / edition",
  "library.purpose": "Purpose and coverage",
  "library.asraUse": "How ASRA uses it",
  "library.referenceType": "Reference type",
  "library.typeMapped": "Per-question mapped reference",
  "library.typeStructural": "Structural / supporting reference",
  "library.viewSource": "View official source",
  "library.paywallNote": "Some standards are published under paid licence. Links point to the official catalogue page, not to free full text.",
  "library.link": "Open the Framework Library",
  "framework.nist-ai-rmf.purpose": "A voluntary framework for governing, mapping, measuring and managing risks across the AI lifecycle.",
  "framework.nist-ai-rmf.use": "Primary backbone for governance, risk classification, measurement and management questions across ASRA domains.",
  "framework.nist-genai-profile.purpose": "A generative-AI overlay to the AI RMF describing risks unique to, or amplified by, generative systems and suggested actions.",
  "framework.nist-genai-profile.use": "Applied to generative-AI specific questions covering content risk, data and model risk, disclosure and third-party GenAI use.",
  "framework.nist-csf.purpose": "A widely used cybersecurity framework organizing security outcomes into govern, identify, protect, detect, respond and recover functions.",
  "framework.nist-csf.use": "Structural reference for ASRA's protection, detection, response and recovery domain design and control language.",
  "framework.iso-42001.purpose": "An international management-system standard for establishing, operating and continually improving an AI management system.",
  "framework.iso-42001.use": "Thematic reference for governance, roles and authorities, risk treatment, documentation and continual improvement questions.",
  "framework.iso-27001.purpose": "An international management-system standard for information security, including risk treatment and control selection.",
  "framework.iso-27001.use": "Structural reference for information security management expectations that AI systems inherit.",
  "framework.csa-aicm.purpose": "A control matrix of AI-specific control objectives across security, governance and lifecycle domains, with mappings to major standards.",
  "framework.csa-aicm.use": "Domain-level reference for AI control coverage in discovery, supply chain, data protection and threat and vulnerability management.",
  "framework.mitre-atlas.purpose": "A knowledge base of real-world adversary tactics and techniques targeting AI-enabled systems.",
  "framework.mitre-atlas.use": "Used for threat modeling, adversarial validation, detection engineering and incident traceability questions.",
  "framework.owasp-genai.purpose": "Community guidance on the most critical security risks in large language model and generative AI applications.",
  "framework.owasp-genai.use": "Referenced for prompt injection, sensitive information disclosure, supply chain, output handling and consumption risks.",
  "framework.owasp-agentic.purpose": "Community guidance on security risks specific to agentic AI applications, including tool use, identity and autonomy.",
  "framework.owasp-agentic.use": "Referenced for agent goal hijack, tool misuse, privilege abuse, memory poisoning, containment and rogue-agent questions.",
} satisfies UiDict;

export type UiKey = keyof typeof enUi;
