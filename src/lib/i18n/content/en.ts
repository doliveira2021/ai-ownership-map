import {
  accountabilityAreas,
  agentRoleModel,
  domains as legacyDomains,
} from "@/lib/assessment-data";
import { ASRA_MATURITY_DESCRIPTIONS } from "@/lib/asra-maturity-data";
import { ASRA_PILOT_SCENARIOS } from "@/lib/asra-pilot-data";
import { ASRA_DOMAINS } from "@/lib/asra-question-data";
import { ASRA_RECOMMENDATION_TEMPLATES } from "@/lib/asra-recommendations";
import { enActions } from "../actions/en";
import type {
  ContentBundle,
  DomainContentDict,
  MaturityDescriptionDict,
  MaturitySix,
  QuestionContentDict,
  RecommendationContentDict,
  ScenarioContentDict,
} from "../types";

const domains = Object.fromEntries(
  ASRA_DOMAINS.map((domain) => [
    domain.id,
    { short: domain.short, name: domain.name, intent: domain.intent },
  ]),
) as DomainContentDict;

const questions = Object.fromEntries(
  ASRA_DOMAINS.flatMap((domain) => domain.questions).map((question) => [
    question.id,
    { title: question.title, prompt: question.prompt },
  ]),
) as QuestionContentDict;

const maturity = ASRA_MATURITY_DESCRIPTIONS as MaturityDescriptionDict;

const scenarios = Object.fromEntries(
  ASRA_PILOT_SCENARIOS.map((scenario) => [
    scenario.id,
    { name: scenario.name, shortName: scenario.shortName, description: scenario.description },
  ]),
) as ScenarioContentDict;

const recommendations = Object.fromEntries(
  ASRA_RECOMMENDATION_TEMPLATES.map((template) => [
    template.id,
    {
      title: template.title,
      risk: template.risk,
      action: template.action,
      suggestedOwners: template.suggestedOwners,
      evidence: template.evidence,
    },
  ]),
) as RecommendationContentDict;

export const EN_MATURITY_LABELS: MaturitySix = [
  "Not Established",
  "Reactive",
  "Emerging",
  "Defined",
  "Managed",
  "Adaptive",
];

const landing = {
  areas: accountabilityAreas,
  roles: agentRoleModel.map((role) => ({ role: role.role, detail: role.detail })),
  legacyDomains: Object.fromEntries(
    legacyDomains.map((domain) => [
      domain.id,
      { short: domain.short, name: domain.name, intent: domain.intent },
    ]),
  ),
};

export const enContent: ContentBundle = {
  actionPacks: enActions.actionPacks,
  technology: enActions.technology,
  domains,
  questions,
  maturity,
  maturityLabels: EN_MATURITY_LABELS,
  scenarios,
  recommendations,
  landing,
  levels: {
    maturity: {
      Unaware: "Unaware",
      Reactive: "Reactive",
      Emerging: "Emerging",
      Defined: "Defined",
      Managed: "Managed",
      Adaptive: "Adaptive",
    },
    exposure: {
      Limited: "Limited",
      Moderate: "Moderate",
      Significant: "Significant",
      High: "High",
      "Very High": "Very High",
    },
    autonomy: {
      "No AI": "No AI",
      Generative: "Generative",
      Advisory: "Advisory",
      "Workflow Initiation": "Workflow Initiation",
      "Action Execution": "Action Execution",
      "Autonomous Operations": "Autonomous Operations",
    },
    quadrant: {
      "Critical Priority": "Critical Priority",
      "Strategic Investment": "Strategic Investment",
      "Emerging Risk": "Emerging Risk",
      "Controlled Adoption": "Controlled Adoption",
    },
    priority: {
      Critical: "Critical",
      High: "High",
      Medium: "Medium",
    },
    horizon: {
      NOW: "NOW",
      NEXT: "NEXT",
      SCALE: "SCALE",
    },
  },
};
