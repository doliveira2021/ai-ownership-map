# AI Guardian

AI ACCOUNTABILITY & RESPONSIBILITY MODEL

The assessment must evaluate whether the organization has clearly defined accountability for AI-related decisions, risks, controls, and operations.

The goal is not to enforce one universal RACI model.

The goal is to determine whether responsibilities are:

explicitly assigned

understood

documented

consistently applied

auditable

maintained as AI systems evolve

Important principle:

No critical AI system should exist without an accountable business owner.

For autonomous or semi-autonomous AI:

No AI agent capable of executing business actions should operate without an accountable human sponsor or owner.

ACCOUNTABILITY AREAS TO ASSESS

Evaluate whether the organization has explicitly assigned responsibility and accountability for:

approving new AI use cases

AI business ownership

AI risk classification

AI security requirements

data access approval

model approval

model lifecycle management

model changes

AI architecture approval

AI agent ownership

agent privilege approval

agent autonomy approval

tool and API authorization

third-party AI approval

AI procurement

production deployment

AI monitoring

security monitoring

AI incident response

agent containment

AI service recovery

residual risk acceptance

regulatory accountability

AI decommissioning

RESPONSIBILITY MATRIX

The application should support an AI Responsibility Matrix based on a RACI-style model:

R — Responsible

A — Accountable

C — Consulted

I — Informed

Do not assume that every organization must use the same RACI assignments.

Instead, evaluate whether an explicit and workable responsibility model exists.

Example reference model:

ActivityBusinessSecurityAI / DataIT / EngineeringRisk / LegalApprove AI use caseACRCCClassify AI riskCRRCAApprove sensitive data accessARRCCApprove modelCCA/RCCApprove AI autonomyARCCCApprove tools / APIsCA/RRRCOperate AI serviceICRA/RIMonitor security activityIA/RRRIRespond to AI security incidentIA/RRRCAccept residual AI riskARCICDecommission AI systemARRRC

This table is a reference only and should not be treated as a required organizational structure.

ACCOUNTABILITY MATURITY QUESTIONS

Include the following questions within the Governance & Accountability domain.

Question: Defined AI Responsibilities

Are responsibilities for AI risk, security, data access, model approval, autonomous actions, monitoring, incident response, and lifecycle management formally assigned?

0 — Not Established
No formal AI responsibilities are defined.

1 — Reactive
Responsibilities are handled informally and depend on individual teams or projects.

2 — Emerging
Some AI initiatives have assigned owners, but responsibilities are inconsistent.

3 — Defined
Standard roles and responsibilities are documented for relevant AI activities.

4 — Managed
Responsibilities are consistently applied and reviewed throughout the AI lifecycle.

5 — Adaptive
Accountability is continuously validated as AI systems, agents, models, dependencies, and risks change.

Question: Business Ownership

Does every critical production AI system have an accountable business owner?

0 — No ownership is assigned.

1 — Ownership is informal or assumed.

2 — Ownership exists for some critical AI systems.

3 — Critical AI systems have documented business owners.

4 — Ownership is enforced through governance and lifecycle processes.

5 — Ownership is continuously validated as systems and business use cases evolve.

Question: Agent Sponsorship

Does every production AI agent capable of executing business actions have an accountable human sponsor or owner?

0 — No.

1 — Ownership is informal.

2 — Ownership exists for selected agents.

3 — Production agents have documented accountable sponsors.

4 — Agent ownership is integrated with approval, access, and lifecycle management.

5 — Ownership, privileges, autonomy, and business purpose are continuously validated.

Question: Autonomy Approval

Is accountability explicitly assigned for approving changes in an AI system's level of autonomy or authority?

0 — No formal approval exists.

1 — Changes are approved informally.

2 — Approval exists for selected high-risk systems.

3 — A documented approval process exists for material autonomy changes.

4 — Autonomy changes require formal risk and security review.

5 — Changes automatically trigger reassessment of risk, access, controls, and human oversight requirements.

Question: Residual Risk Acceptance

Can the organization identify who formally accepted the residual risk for high-risk AI deployments?

0 — Residual risk is not formally accepted.

1 — Risk acceptance occurs informally.

2 — Some high-risk initiatives document risk acceptance.

3 — A formal risk acceptance process exists.

4 — Residual AI risk acceptance is documented, approved, and periodically reviewed.

5 — Residual risk acceptance is dynamically reassessed when AI behavior, autonomy, data access, or dependencies change.

Question: Incident Accountability

Is accountability clearly defined for AI-specific security incidents and autonomous-action incidents?

Assess whether the organization knows who has authority to:

disable an AI service

revoke agent access

revoke credentials

block tools

isolate workloads

preserve evidence

communicate business impact

authorize recovery

Use the standard 0–5 maturity model.

ACCOUNTABILITY COVERAGE SCORE

Calculate an additional supporting metric:

Accountability Coverage

Scale:

0–100.

This should not replace the main AI Security Maturity Score.

Instead, display it as a supporting governance indicator.

Accountability Coverage should consider:

business ownership

technical ownership

security ownership

agent sponsorship

risk acceptance ownership

incident ownership

model lifecycle ownership

data access ownership

third-party AI accountability

decommissioning ownership

Example:

Accountability Coverage: 64 / 100

Interpretation:

Several key AI responsibilities are defined, but ownership is inconsistent across autonomous AI, residual risk acceptance, and incident response.

ACCOUNTABILITY GAP DETECTION

Generate specific recommendations when accountability gaps are identified.

Example recommendation:

Define an Enterprise AI Responsibility Matrix

Priority:
High

Risk:

Unclear AI ownership may delay decisions, weaken risk acceptance, create gaps in access governance, and complicate incident response.

Recommended Action:

Define and document responsibility and accountability for critical AI lifecycle decisions, including:

AI business ownership

security approval

model approval

data access

agent sponsorship

autonomy changes

tool authorization

third-party AI approval

monitoring

incident response

risk acceptance

decommissioning

Suggested Owners:

Executive AI Governance Committee, CISO, CIO/CTO, AI/Data leadership, Risk/Legal.

Evidence of Completion:

documented AI responsibility matrix

named accountable owners

defined approval paths

risk acceptance process

agent sponsor requirement

incident authority model

periodic ownership review

Target Maturity:

3 — Defined

Suggested Horizon:

0–90 Days

AGENT ACCOUNTABILITY REQUIREMENT

For AI agents, explicitly distinguish between:

Technical Identity

The identity used by the agent to authenticate and access systems.

Business Owner

The person accountable for the business outcome produced by the agent.

Human Sponsor

The person accountable for the agent's approved purpose, scope, and operation.

Security Owner

The team accountable for defining and monitoring security requirements.

These roles may overlap depending on organizational structure.

Do not require them to be separate individuals.

AI DECISION RIGHTS

The assessment should evaluate not only who owns AI but also who has authority to make specific decisions.

Assess whether decision rights are defined for:

introducing a new AI system

increasing data access

connecting a new tool

enabling autonomous actions

changing models

modifying prompts/system instructions for critical AI

adding new agents

increasing agent privileges

enabling agent-to-agent delegation

accepting AI risk

disabling AI during an incident

restoring AI after containment

Important principle:

AI governance requires ownership, but effective AI governance also requires explicit decision rights.

RESULTS DASHBOARD

Add an AI Accountability section to the results page.

Display:

AI Accountability Coverage

Example:

64 / 100

Show three categories:

Clearly Assigned

Examples:

production AI business ownership

data access approval

model lifecycle ownership

Partially Assigned

Examples:

third-party AI accountability

autonomy changes

AI monitoring ownership

Missing or Unclear

Examples:

agent sponsorship

residual risk acceptance

autonomous-action incident authority

Do not expose individual employee names.

EXECUTIVE REPORT

Include a section:

AI Accountability & Decision Rights

Show:

Accountability Coverage score

Major ownership gaps

Decision-right gaps

Agent sponsorship maturity

Residual risk acceptance maturity

Incident authority maturity

Where useful, generate a recommended target-state RACI matrix.

Label it clearly:

Illustrative Target-State Responsibility Model

Do not present it as a compliance requirement.

ROADMAP INTEGRATION

Accountability findings should influence the roadmap.

Possible 0–90 day actions:

assign accountable owners to critical AI systems

assign human sponsors to production agents

define AI risk acceptance authority

define autonomy approval thresholds

establish AI incident decision rights

document AI responsibility matrix

Possible 3–6 month actions:

integrate responsibility checks into AI onboarding

link ownership to AI inventory

require ownership validation when privileges change

integrate agent sponsorship into lifecycle governance

periodically review residual risk acceptance

Possible 6–12 month actions:

automate ownership reassessment

trigger governance review when AI autonomy changes

correlate ownership with security telemetry

establish enterprise metrics for orphaned AI assets and agents

IMPORTANT DESIGN PRINCIPLE

Do not turn AI governance into a committee-centric exercise.

The application should emphasize operational accountability.

The key question is not only:

“Do you have an AI Governance Committee?”

The stronger questions are:

Who owns this AI system?

Who can approve what it can access?

Who can increase its autonomy?

Who accepted its residual risk?

Who has authority to stop it?

Who is accountable if it acts incorrectly?

These concepts should influence scoring, recommendations, and roadmap generation.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/509ef5d2-60b2-453d-bbfd-011bbad5a7b7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
