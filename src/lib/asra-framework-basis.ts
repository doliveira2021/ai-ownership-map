import { ASRA_FRAMEWORK_TRACE } from "./asra-framework-data";

export type FrameworkBasisEntry = {
  /** Canonical short name exactly as used by the repo's framework mapping data. */
  name: string;
  /** Full official naming, shown as supporting detail. */
  longName: string;
  /** True when the framework appears in the per-question traceability data. */
  mapped: boolean;
};

/** Canonical short names discovered in the per-question mapping data (source of truth). */
export const MAPPED_FRAMEWORK_NAMES: string[] = Array.from(
  new Set(
    Object.values(ASRA_FRAMEWORK_TRACE)
      .flat()
      .map((trace) => trace.framework),
  ),
).sort();

const LONG_NAMES: Record<string, string> = {
  "NIST AI RMF": "NIST AI Risk Management Framework (AI RMF 1.0)",
  "NIST GenAI Profile": "NIST AI 600-1 — Generative AI Profile",
  "NIST CSF": "NIST Cybersecurity Framework (CSF 2.0)",
  "ISO/IEC 42001": "ISO/IEC 42001 — AI management systems",
  "ISO/IEC 27001": "ISO/IEC 27001 — Information security management systems",
  "CSA AICM": "CSA AI Controls Matrix (AICM)",
  "MITRE ATLAS": "MITRE ATLAS — Adversarial Threat Landscape for AI Systems",
  "OWASP GenAI": "OWASP guidance for Generative AI / LLM security",
  "OWASP Agentic": "OWASP guidance for Agentic Applications / Agentic AI security",
};

/**
 * Structural references that inform ASRA's domain design and control language but are
 * not expressed as per-question traceability rows.
 */
const STRUCTURAL_FRAMEWORK_NAMES = ["NIST CSF", "ISO/IEC 27001"];

const DISPLAY_ORDER = [
  "NIST AI RMF",
  "NIST GenAI Profile",
  "NIST CSF",
  "ISO/IEC 42001",
  "ISO/IEC 27001",
  "CSA AICM",
  "MITRE ATLAS",
  "OWASP GenAI",
  "OWASP Agentic",
];

/** Visible framework-grounding list, derived from the mapping data plus structural references. */
export const ASRA_FRAMEWORK_BASIS: FrameworkBasisEntry[] = Array.from(
  new Set([...MAPPED_FRAMEWORK_NAMES, ...STRUCTURAL_FRAMEWORK_NAMES]),
)
  .map((name) => ({
    name,
    longName: LONG_NAMES[name] ?? name,
    mapped: MAPPED_FRAMEWORK_NAMES.includes(name),
  }))
  .sort((a, b) => {
    const ai = DISPLAY_ORDER.indexOf(a.name);
    const bi = DISPLAY_ORDER.indexOf(b.name);
    return (ai === -1 ? DISPLAY_ORDER.length : ai) - (bi === -1 ? DISPLAY_ORDER.length : bi);
  });
