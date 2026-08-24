import { ASRA_FRAMEWORK_TRACE } from "./asra-framework-data";

export type FrameworkBasisEntry = {
  /** Stable slug used as the anchor id on the framework library page. */
  id: string;
  /** Canonical short name exactly as used by the repo's framework mapping data. */
  name: string;
  /** Full official naming, shown as supporting detail. */
  longName: string;
  /** Issuing organization (official name, not localized). */
  organization: string;
  /** Current version / edition when it is safe to state. */
  version?: string;
  /** Authoritative source URL (official domains only). */
  url: string;
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

type FrameworkMeta = {
  id: string;
  longName: string;
  organization: string;
  version?: string;
  url: string;
};

const FRAMEWORK_META: Record<string, FrameworkMeta> = {
  "NIST AI RMF": {
    id: "nist-ai-rmf",
    longName: "NIST AI Risk Management Framework (AI RMF 1.0)",
    organization: "National Institute of Standards and Technology (NIST)",
    version: "1.0",
    url: "https://www.nist.gov/itl/ai-risk-management-framework",
  },
  "NIST GenAI Profile": {
    id: "nist-genai-profile",
    longName: "NIST AI 600-1 — Generative AI Profile",
    organization: "National Institute of Standards and Technology (NIST)",
    version: "NIST AI 600-1",
    url: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence",
  },
  "NIST CSF": {
    id: "nist-csf",
    longName: "NIST Cybersecurity Framework (CSF 2.0)",
    organization: "National Institute of Standards and Technology (NIST)",
    version: "2.0",
    url: "https://www.nist.gov/cyberframework",
  },
  "ISO/IEC 42001": {
    id: "iso-42001",
    longName: "ISO/IEC 42001 — Artificial intelligence management systems",
    organization: "ISO/IEC",
    version: "2023",
    url: "https://www.iso.org/standard/42001",
  },
  "ISO/IEC 27001": {
    id: "iso-27001",
    longName: "ISO/IEC 27001 — Information security management systems",
    organization: "ISO/IEC",
    version: "2022",
    url: "https://www.iso.org/standard/27001",
  },
  "CSA AICM": {
    id: "csa-aicm",
    longName: "CSA AI Controls Matrix (AICM)",
    organization: "Cloud Security Alliance (CSA)",
    version: "v1.1",
    url: "https://cloudsecurityalliance.org/artifacts/ai-controls-matrix",
  },
  "MITRE ATLAS": {
    id: "mitre-atlas",
    longName: "MITRE ATLAS — Adversarial Threat Landscape for Artificial-Intelligence Systems",
    organization: "MITRE",
    url: "https://atlas.mitre.org/",
  },
  "OWASP GenAI": {
    id: "owasp-genai",
    longName: "OWASP Top 10 for Large Language Model Applications / GenAI Security guidance",
    organization: "OWASP GenAI Security Project",
    version: "2025",
    url: "https://genai.owasp.org/llm-top-10/",
  },
  "OWASP Agentic": {
    id: "owasp-agentic",
    longName: "OWASP guidance for Agentic Applications / Agentic AI security",
    organization: "OWASP GenAI Security Project",
    url: "https://genai.owasp.org/initiatives/",
  },
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
  .map((name) => {
    const meta = FRAMEWORK_META[name];
    return {
      id: meta?.id ?? name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      name,
      longName: meta?.longName ?? name,
      organization: meta?.organization ?? "",
      ...(meta?.version ? { version: meta.version } : {}),
      url: meta?.url ?? "",
      mapped: MAPPED_FRAMEWORK_NAMES.includes(name),
    } satisfies FrameworkBasisEntry;
  })
  .sort((a, b) => {
    const ai = DISPLAY_ORDER.indexOf(a.name);
    const bi = DISPLAY_ORDER.indexOf(b.name);
    return (ai === -1 ? DISPLAY_ORDER.length : ai) - (bi === -1 ? DISPLAY_ORDER.length : bi);
  });

const BY_NAME = new Map(ASRA_FRAMEWORK_BASIS.map((entry) => [entry.name, entry]));

/** Resolve a canonical framework short name to its library entry. */
export function frameworkEntry(name: string): FrameworkBasisEntry | undefined {
  return BY_NAME.get(name);
}

/** Internal library anchor for a canonical framework short name. */
export function frameworkAnchor(name: string): string | undefined {
  const entry = BY_NAME.get(name);
  return entry ? `/frameworks#${entry.id}` : undefined;
}
