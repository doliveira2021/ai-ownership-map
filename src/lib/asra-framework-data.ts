export type FrameworkTrace = {
  framework: string;
  refs: string[];
  confidence: "Direct" | "Thematic" | "Candidate";
};

export const ASRA_FRAMEWORK_TRACE: Record<string, FrameworkTrace[]> = {
  "DISC-001": [{ framework: "NIST AI RMF", refs: ["MAP 1.1", "MAP 1.4", "MAP 2.1"], confidence: "Thematic" }],
  "DISC-002": [{ framework: "NIST AI RMF", refs: ["GOVERN 1.2", "MAP 1.1", "MEASURE 3.1"], confidence: "Thematic" }, { framework: "OWASP GenAI", refs: ["LLM04 Supply Chain"], confidence: "Thematic" }],
  "DISC-003": [{ framework: "NIST AI RMF", refs: ["GOVERN 6.1", "MAP 4.1", "MAP 4.2"], confidence: "Direct" }, { framework: "NIST GenAI Profile", refs: ["GV-6.2-001", "GV-6.2-002", "GV-6.2-003"], confidence: "Direct" }, { framework: "CSA AICM", refs: ["STA", "GRC"], confidence: "Thematic" }],
  "DISC-004": [{ framework: "NIST AI RMF", refs: ["MAP 2.1", "MEASURE 2.9", "MANAGE 3.2"], confidence: "Thematic" }, { framework: "CSA AICM", refs: ["MDS", "CCC"], confidence: "Thematic" }],
  "DISC-005": [{ framework: "NIST AI RMF", refs: ["MAP 1.1", "MAP 2.1", "MAP 3.3"], confidence: "Thematic" }, { framework: "OWASP Agentic", refs: ["ASI02", "ASI03"], confidence: "Thematic" }, { framework: "CSA AICM", refs: ["AA", "IAM", "AIS"], confidence: "Thematic" }],
  "DISC-006": [{ framework: "NIST AI RMF", refs: ["MAP 1.1", "MAP 1.6", "MAP 4.1"], confidence: "Thematic" }, { framework: "NIST GenAI Profile", refs: ["MP-4.1-006", "MP-4.1-009"], confidence: "Thematic" }, { framework: "CSA AICM", refs: ["DSP", "AIS"], confidence: "Thematic" }],

  "RISK-001": [{ framework: "NIST AI RMF", refs: ["MAP 1.4", "MAP 3.2", "MAP 5.1"], confidence: "Direct" }, { framework: "CSA AICM", refs: ["GRC", "BCM"], confidence: "Thematic" }],
  "RISK-002": [{ framework: "NIST AI RMF", refs: ["MAP 1.6", "MEASURE 2.10", "MAP 5.1"], confidence: "Direct" }, { framework: "NIST GenAI Profile", refs: ["MP-4.1-009", "MS-2.2-003", "MS-2.2-004"], confidence: "Direct" }, { framework: "OWASP GenAI", refs: ["LLM02 Sensitive Information Disclosure"], confidence: "Direct" }],
  "RISK-003": [{ framework: "NIST AI RMF", refs: ["MAP 2.2", "MAP 3.3", "MAP 3.5"], confidence: "Thematic" }, { framework: "OWASP Agentic", refs: ["ASI02", "ASI03"], confidence: "Direct" }],
  "RISK-004": [{ framework: "NIST AI RMF", refs: ["GOVERN 1.1", "MAP 1.1", "MAP 5.1"], confidence: "Direct" }, { framework: "ISO/IEC 42001", refs: ["Governance and risk management"], confidence: "Thematic" }],
  "RISK-005": [{ framework: "NIST AI RMF", refs: ["GOVERN 3.2", "MAP 2.2", "MAP 3.5"], confidence: "Direct" }, { framework: "NIST GenAI Profile", refs: ["MS-2.5-001", "MS-2.5-002", "MS-2.5-003", "MS-2.5-004"], confidence: "Direct" }],

  "GOV-001": [{ framework: "NIST AI RMF", refs: ["GOVERN 1.2", "GOVERN 1.3", "GOVERN 2.1"], confidence: "Direct" }, { framework: "ISO/IEC 42001", refs: ["AI management system governance"], confidence: "Thematic" }, { framework: "CSA AICM", refs: ["GRC", "A&A"], confidence: "Thematic" }],
  "GOV-002": [{ framework: "NIST AI RMF", refs: ["GOVERN 2.1", "GOVERN 2.3"], confidence: "Direct" }, { framework: "ISO/IEC 42001", refs: ["Roles, responsibilities and authorities"], confidence: "Thematic" }],
  "GOV-003": [{ framework: "NIST AI RMF", refs: ["GOVERN 2.1", "GOVERN 2.3"], confidence: "Direct" }],
  "GOV-004": [{ framework: "NIST AI RMF", refs: ["GOVERN 2.1", "GOVERN 3.2"], confidence: "Direct" }, { framework: "OWASP Agentic", refs: ["ASI03", "ASI10"], confidence: "Thematic" }, { framework: "CSA AICM", refs: ["AA", "GRC"], confidence: "Thematic" }],
  "GOV-005": [{ framework: "NIST AI RMF", refs: ["GOVERN 2.3", "GOVERN 3.2", "MAP 3.5"], confidence: "Thematic" }, { framework: "OWASP Agentic", refs: ["ASI02", "ASI10"], confidence: "Thematic" }],
  "GOV-006": [{ framework: "NIST AI RMF", refs: ["MAP 1.5", "MANAGE 1.3", "MANAGE 1.4"], confidence: "Direct" }, { framework: "ISO/IEC 42001", refs: ["Risk treatment and acceptance"], confidence: "Thematic" }],
  "GOV-007": [{ framework: "NIST AI RMF", refs: ["GOVERN 6.1", "GOVERN 6.2", "MANAGE 3.1"], confidence: "Direct" }, { framework: "NIST GenAI Profile", refs: ["GV-6.2-001", "GV-6.2-002", "GV-6.2-003"], confidence: "Direct" }, { framework: "CSA AICM", refs: ["STA", "GRC"], confidence: "Direct" }],
  "GOV-008": [{ framework: "NIST AI RMF", refs: ["GOVERN 2.1", "MANAGE 2.3", "MANAGE 4.1"], confidence: "Direct" }, { framework: "OWASP Agentic", refs: ["ASI08", "ASI10"], confidence: "Thematic" }],

  "THRT-001": [{ framework: "NIST AI RMF", refs: ["MAP 1.1", "MAP 4.1", "MAP 5.1"], confidence: "Thematic" }, { framework: "MITRE ATLAS", refs: ["Adversary behavior layer"], confidence: "Thematic" }, { framework: "CSA AICM", refs: ["TVM", "AIS"], confidence: "Direct" }],
  "THRT-002": [{ framework: "NIST AI RMF", refs: ["MAP 4.1", "MEASURE 2.7"], confidence: "Thematic" }, { framework: "OWASP GenAI", refs: ["LLM01", "LLM08"], confidence: "Direct" }, { framework: "OWASP Agentic", refs: ["ASI01", "ASI06"], confidence: "Direct" }, { framework: "MITRE ATLAS", refs: ["AML.T0051 LLM Prompt Injection", "AML.T0110 AI Agent Context Poisoning"], confidence: "Direct" }],
  "THRT-003": [{ framework: "NIST AI RMF", refs: ["MAP 4.1", "MEASURE 2.7"], confidence: "Thematic" }, { framework: "OWASP GenAI", refs: ["LLM04", "LLM05"], confidence: "Direct" }, { framework: "MITRE ATLAS", refs: ["AML.T0020 Poison Training Data"], confidence: "Direct" }],
  "THRT-004": [{ framework: "NIST AI RMF", refs: ["MAP 3.3", "MAP 4.1", "MEASURE 2.7"], confidence: "Thematic" }, { framework: "OWASP Agentic", refs: ["ASI01", "ASI02", "ASI03", "ASI07", "ASI10"], confidence: "Direct" }, { framework: "MITRE ATLAS", refs: ["AML.T0115 AI Agent Tool Invocation"], confidence: "Direct" }],
  "THRT-005": [{ framework: "NIST AI RMF", refs: ["GOVERN 6.1", "MAP 4.1", "MAP 4.2"], confidence: "Direct" }, { framework: "OWASP GenAI", refs: ["LLM04"], confidence: "Direct" }, { framework: "OWASP Agentic", refs: ["ASI04", "ASI05"], confidence: "Direct" }, { framework: "MITRE ATLAS", refs: ["AML.T0084 AI Supply Chain Compromise"], confidence: "Direct" }],

  "SDLC-001": [{ framework: "NIST AI RMF", refs: ["GOVERN 1.2", "MAP 1.6", "MANAGE 1.3"], confidence: "Thematic" }, { framework: "ISO/IEC 42001", refs: ["Lifecycle and operational planning"], confidence: "Thematic" }],
  "SDLC-002": [{ framework: "NIST AI RMF", refs: ["GOVERN 6.1", "MAP 4.1", "MAP 4.2"], confidence: "Direct" }, { framework: "NIST GenAI Profile", refs: ["MS-1.1-007"], confidence: "Direct" }, { framework: "CSA AICM", refs: ["MDS", "STA"], confidence: "Direct" }],
  "SDLC-003": [{ framework: "NIST AI RMF", refs: ["GOVERN 2.1", "MAP 4.2", "MEASURE 2.7"], confidence: "Thematic" }, { framework: "OWASP Agentic", refs: ["ASI03"], confidence: "Direct" }, { framework: "CSA AICM", refs: ["IAM", "CEK"], confidence: "Direct" }],
  "SDLC-004": [{ framework: "NIST AI RMF", refs: ["GOVERN 4.3", "MEASURE 2.1", "MEASURE 2.7"], confidence: "Direct" }, { framework: "NIST GenAI Profile", refs: ["MS-2.7-007", "MS-2.7-008"], confidence: "Direct" }],
  "SDLC-005": [{ framework: "NIST AI RMF", refs: ["MAP 4.2", "MANAGE 1.1", "MANAGE 1.3"], confidence: "Thematic" }, { framework: "OWASP Agentic", refs: ["ASI02", "ASI03"], confidence: "Thematic" }],
  "SDLC-006": [{ framework: "NIST AI RMF", refs: ["GOVERN 1.7", "MANAGE 2.4", "MANAGE 4.1"], confidence: "Direct" }, { framework: "ISO/IEC 42001", refs: ["Lifecycle and decommissioning"], confidence: "Thematic" }],

  "PROT-001": [{ framework: "NIST AI RMF", refs: ["GOVERN 2.1", "MAP 4.2", "MEASURE 2.7"], confidence: "Thematic" }, { framework: "OWASP Agentic", refs: ["ASI03"], confidence: "Direct" }, { framework: "CSA AICM", refs: ["IAM", "AA"], confidence: "Direct" }],
  "PROT-002": [{ framework: "NIST AI RMF", refs: ["MAP 4.2", "MEASURE 2.7", "MANAGE 1.3"], confidence: "Thematic" }, { framework: "OWASP GenAI", refs: ["LLM03"], confidence: "Direct" }, { framework: "OWASP Agentic", refs: ["ASI02", "ASI03"], confidence: "Direct" }],
  "PROT-003": [{ framework: "NIST AI RMF", refs: ["MAP 1.6", "MAP 4.2", "MEASURE 2.10"], confidence: "Direct" }, { framework: "OWASP GenAI", refs: ["LLM02"], confidence: "Direct" }, { framework: "CSA AICM", refs: ["DSP", "IAM"], confidence: "Direct" }],
  "PROT-004": [{ framework: "NIST AI RMF", refs: ["MAP 4.2", "MEASURE 2.7", "MEASURE 2.10"], confidence: "Thematic" }, { framework: "OWASP GenAI", refs: ["LLM02", "LLM10"], confidence: "Direct" }, { framework: "NIST GenAI Profile", refs: ["MP-4.1-009"], confidence: "Direct" }],
  "PROT-005": [{ framework: "NIST AI RMF", refs: ["MAP 4.1", "MAP 4.2", "MEASURE 2.7"], confidence: "Thematic" }, { framework: "OWASP GenAI", refs: ["LLM01", "LLM05", "LLM09"], confidence: "Direct" }, { framework: "OWASP Agentic", refs: ["ASI06"], confidence: "Direct" }],
  "PROT-006": [{ framework: "NIST AI RMF", refs: ["MAP 2.3", "MAP 4.2", "MEASURE 2.9"], confidence: "Thematic" }, { framework: "NIST GenAI Profile", refs: ["MS-2.7-005", "MS-2.7-008"], confidence: "Direct" }, { framework: "CSA AICM", refs: ["MDS", "CCC"], confidence: "Direct" }],
  "PROT-007": [{ framework: "NIST AI RMF", refs: ["MAP 1.6", "MEASURE 2.6", "MEASURE 2.7"], confidence: "Thematic" }, { framework: "OWASP GenAI", refs: ["LLM01", "LLM03", "LLM10"], confidence: "Direct" }],
  "PROT-008": [{ framework: "NIST AI RMF", refs: ["MAP 3.3", "MAP 4.2", "MEASURE 2.7"], confidence: "Thematic" }, { framework: "OWASP Agentic", refs: ["ASI02", "ASI03"], confidence: "Direct" }, { framework: "MITRE ATLAS", refs: ["AML.T0115 AI Agent Tool Invocation"], confidence: "Direct" }],
  "PROT-009": [{ framework: "NIST AI RMF", refs: ["MAP 3.5", "MEASURE 2.6", "MANAGE 2.4"], confidence: "Direct" }, { framework: "OWASP Agentic", refs: ["ASI02", "ASI08", "ASI10"], confidence: "Direct" }, { framework: "CSA AICM", refs: ["AA", "SEF", "BCM"], confidence: "Direct" }],
  "PROT-010": [{ framework: "NIST AI RMF", refs: ["GOVERN 6.1", "MAP 4.2", "MANAGE 3.1"], confidence: "Direct" }, { framework: "MITRE ATLAS", refs: ["AML.T0084 AI Supply Chain Compromise"], confidence: "Direct" }, { framework: "CSA AICM", refs: ["STA", "MDS", "TVM"], confidence: "Direct" }],

  "VAL-001": [{ framework: "NIST AI RMF", refs: ["GOVERN 4.3", "MEASURE 2.1", "MEASURE 2.7"], confidence: "Direct" }, { framework: "MITRE ATLAS", refs: ["Adversarial validation layer"], confidence: "Thematic" }, { framework: "CSA AICM", refs: ["TVM", "AIS"], confidence: "Direct" }],
  "VAL-002": [{ framework: "NIST AI RMF", refs: ["MEASURE 2.7", "MEASURE 2.10"], confidence: "Thematic" }, { framework: "OWASP GenAI", refs: ["LLM01", "LLM02", "LLM10"], confidence: "Direct" }, { framework: "MITRE ATLAS", refs: ["AML.T0051 LLM Prompt Injection"], confidence: "Direct" }],
  "VAL-003": [{ framework: "NIST AI RMF", refs: ["MEASURE 2.7", "MEASURE 2.8"], confidence: "Thematic" }, { framework: "OWASP Agentic", refs: ["ASI01", "ASI02", "ASI03", "ASI07", "ASI10"], confidence: "Direct" }],
  "VAL-004": [{ framework: "NIST AI RMF", refs: ["GOVERN 4.3", "MEASURE 1.3", "MEASURE 2.7"], confidence: "Direct" }, { framework: "NIST GenAI Profile", refs: ["MS-1.1-008", "MS-2.7-007"], confidence: "Direct" }, { framework: "MITRE ATLAS", refs: ["Red-team/adversary behavior layer"], confidence: "Thematic" }],
  "VAL-005": [{ framework: "NIST AI RMF", refs: ["MEASURE 2.6", "MEASURE 2.7", "MANAGE 2.3"], confidence: "Direct" }, { framework: "OWASP GenAI", refs: ["LLM06"], confidence: "Direct" }, { framework: "OWASP Agentic", refs: ["ASI08", "ASI10"], confidence: "Direct" }],

  "MON-001": [{ framework: "NIST AI RMF", refs: ["MEASURE 2.4", "MEASURE 3.1", "MANAGE 4.1"], confidence: "Direct" }, { framework: "NIST GenAI Profile", refs: ["MS-2.7-004", "MS-2.7-005", "MS-2.7-006"], confidence: "Direct" }, { framework: "CSA AICM", refs: ["LOG", "AIS"], confidence: "Direct" }],
  "MON-002": [{ framework: "NIST AI RMF", refs: ["MEASURE 2.4", "MEASURE 2.8", "MANAGE 4.1"], confidence: "Thematic" }, { framework: "OWASP Agentic", refs: ["ASI02", "ASI03", "ASI07"], confidence: "Direct" }, { framework: "CSA AICM", refs: ["LOG", "AA", "SEF"], confidence: "Direct" }],
  "MON-003": [{ framework: "NIST AI RMF", refs: ["GOVERN 3.2", "MEASURE 2.8", "MEASURE 2.4"], confidence: "Thematic" }, { framework: "OWASP Agentic", refs: ["ASI03", "ASI09"], confidence: "Direct" }],
  "MON-004": [{ framework: "NIST AI RMF", refs: ["MEASURE 2.4", "MEASURE 3.1", "MANAGE 4.1"], confidence: "Direct" }, { framework: "NIST GenAI Profile", refs: ["MS-2.7-004", "MS-2.7-006"], confidence: "Direct" }, { framework: "CSA AICM", refs: ["LOG", "AIS", "AA"], confidence: "Direct" }],
  "MON-005": [{ framework: "NIST AI RMF", refs: ["MEASURE 3.1", "MANAGE 3.1", "MANAGE 3.2"], confidence: "Direct" }, { framework: "CSA AICM", refs: ["CCC", "MDS", "STA", "LOG"], confidence: "Direct" }],

  "IR-001": [{ framework: "NIST AI RMF", refs: ["GOVERN 4.3", "MANAGE 2.3", "MANAGE 4.1", "MANAGE 4.3"], confidence: "Direct" }, { framework: "CSA AICM", refs: ["SEF", "AIS"], confidence: "Direct" }],
  "IR-002": [{ framework: "NIST AI RMF", refs: ["MEASURE 2.6", "MANAGE 2.4", "MANAGE 4.1"], confidence: "Direct" }, { framework: "OWASP Agentic", refs: ["ASI02", "ASI03", "ASI10"], confidence: "Direct" }, { framework: "CSA AICM", refs: ["SEF", "AA", "IAM"], confidence: "Direct" }],
  "IR-003": [{ framework: "NIST AI RMF", refs: ["GOVERN 4.3", "MEASURE 2.4", "MANAGE 4.3"], confidence: "Thematic" }, { framework: "CSA AICM", refs: ["SEF", "LOG"], confidence: "Direct" }],
  "IR-004": [{ framework: "NIST AI RMF", refs: ["GOVERN 6.2", "MEASURE 2.7", "MANAGE 2.1", "MANAGE 4.1"], confidence: "Direct" }, { framework: "NIST GenAI Profile", refs: ["GV-6.2-001", "GV-6.2-003"], confidence: "Direct" }, { framework: "CSA AICM", refs: ["BCM", "STA"], confidence: "Direct" }],
  "IR-005": [{ framework: "NIST AI RMF", refs: ["GOVERN 6.2", "MANAGE 2.1", "MANAGE 3.1"], confidence: "Direct" }, { framework: "CSA AICM", refs: ["BCM", "STA", "IPY"], confidence: "Direct" }],

  "MEAS-001": [{ framework: "NIST AI RMF", refs: ["MEASURE 1.1", "MEASURE 1.2", "MEASURE 3.1"], confidence: "Direct" }, { framework: "CSA AICM", refs: ["GRC", "A&A", "LOG"], confidence: "Direct" }],
  "MEAS-002": [{ framework: "NIST AI RMF", refs: ["GOVERN 2.3", "GOVERN 4.2", "MANAGE 1.4"], confidence: "Thematic" }, { framework: "ISO/IEC 42001", refs: ["Management review and governance reporting"], confidence: "Thematic" }],
  "MEAS-003": [{ framework: "NIST AI RMF", refs: ["MEASURE 1.2", "MEASURE 3.1", "MANAGE 4.2"], confidence: "Direct" }, { framework: "ISO/IEC 42001", refs: ["Monitoring, measurement and continual improvement"], confidence: "Thematic" }],
  "MEAS-004": [{ framework: "NIST AI RMF", refs: ["MANAGE 1.2", "MANAGE 1.3", "MANAGE 4.2"], confidence: "Direct" }, { framework: "CSA AICM", refs: ["GRC", "A&A"], confidence: "Direct" }],
  "MEAS-005": [{ framework: "NIST AI RMF", refs: ["GOVERN 4.3", "MEASURE 4.3", "MANAGE 4.2", "MANAGE 4.3"], confidence: "Direct" }, { framework: "ISO/IEC 42001", refs: ["Continual improvement"], confidence: "Thematic" }],
};

export function frameworkTraceFor(questionId: string): FrameworkTrace[] {
  return ASRA_FRAMEWORK_TRACE[questionId] ?? [];
}
