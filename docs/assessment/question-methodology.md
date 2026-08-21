# Question Methodology

## Goal

Assessment questions should measure operational capability, not familiarity with a framework or product.

Good example:

> Can your organization determine which enterprise data each AI workload can access?

Avoid:

> Are you compliant with control XYZ?

## Required question metadata

Each question should eventually include:

- stable ID
- domain
- capability
- prompt
- optional helper text
- six maturity responses (0–5)
- weight
- applicability rule
- exposure modifier
- autonomy modifier
- business-impact modifier
- risk statement
- recommendation trigger
- framework mappings

## Answer design

Responses should describe observable operating states. Avoid vague labels without context.

Each question should progress from:

`Not Established → Reactive → Emerging → Defined → Managed → Adaptive`

## Applicability

Use conditional applicability where appropriate. For example:

- agent-specific production controls may be Not Applicable where no production agents exist
- internal-development questions may receive less emphasis where the organization only consumes third-party AI

Not Applicable should not automatically reduce maturity.

## Question quality checks

Before adding a question, verify:

1. Does it measure one primary capability?
2. Can a respondent reasonably distinguish levels 0–5?
3. Is the capability meaningful to business risk?
4. Is it vendor-neutral?
5. Can a low score trigger an actionable recommendation?
6. Can the result be evidenced or validated?
7. Is it materially different from existing questions?

## Target size

The initial full assessment target is approximately 60 questions across ten domains, with a future executive version using a smaller representative subset.
