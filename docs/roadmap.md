# ASRA Product Roadmap

This document records planned features and enhancements for the ASRA (AI Security & Resilience Assessment) application. Items here are intentionally not exposed in the production UI until they are implemented and validated.

---

## Roadmap Item: Framework Alignment Heatmap

**Status:** Planned — not implemented  
**Target area:** `/asra-results` visualization layer  
**Added:** 2026-08-24  
**Commit:** `2c9ae7b6b1f047ec053943cdfe02aa9ed57ad341`

### Goal

Allow a user to view the assessment result as an estimated alignment percentage for each framework and as a heatmap across ASRA domains × frameworks.

### Important semantics

- The metric must be called **“Framework Alignment %”** or **“Estimated Framework Alignment”**.
- It must **never** be called or presented as “Compliance %”.
- It explicitly represents **estimated maturity coverage based on ASRA responses and mapping evidence**.
- It is **not** certification, compliance, audit readiness, endorsement, or validation by the framework owner.
- Alignment is computed only from assessment questions that have **explicit framework mappings** in `ASRA_FRAMEWORK_TRACE`.
- Do **not** fabricate a percentage for structural or supporting references that have no per-question mapping. For those, show **“Structural reference / not scored”** unless an explicit mapping is added in the future.
- Avoid false precision. If a percentage is used, the denominator must be defined transparently and the underlying mapped-question count must be preserved.
- Distinguish **“not assessed / no mapped evidence”** from **“low alignment”**.

### Future visualization concept

1. **Framework summary row/cards**
   - Framework name
   - Estimated Framework Alignment %
   - Mapped questions answered / total mapped questions
   - Mapping status:
     - Per-question mapped
     - Structural/supporting (not scored)

2. **Heatmap**
   - Rows = ASRA domains
   - Columns = frameworks
   - Cell = estimated alignment / maturity coverage for mapped evidence in that domain-framework intersection
   - Clearly render **N/A** where no mapping exists
   - Clicking/hovering a cell in the eventual implementation should show:
     - Mapped question count
     - Maturity/evidence basis
     - Link to `/frameworks#<framework-id>`

3. **Optional filter/toggle in future results UI**
   - “ASRA View”
   - “Framework Alignment View”

### Suggested acceptance criteria

- [ ] Deterministic calculation from existing assessment answers + `ASRA_FRAMEWORK_TRACE`.
- [ ] No changes to core ASRA overall score, domain score, exposure, autonomy, resilience, recommendation priority, triggers, or Action Packs.
- [ ] Framework alignment is an interpretive/reporting layer only.
- [ ] Methodology text explains denominator and calculation.
- [ ] EN / PT-BR / ES localization.
- [ ] Accessible heatmap with non-color labels, tooltips, or equivalent textual values.
- [ ] Links to Framework Library entries (`/frameworks#<framework-id>`).
- [ ] Export/report compatibility considered later.

### Out of scope for initial implementation

- Certification or compliance reporting.
- Changes to scoring formulas, recommendation logic, applicability rules, or Action Packs.
- New routes or public UI exposure before the feature is complete.

---

## Notes

- Roadmap items are preview/internal documentation only.
- Do not link to this file from production UI or navigation until the feature is implemented.
