import { ptBrActions } from "../../actions/pt-BR";
import type { ContentBundle, MaturitySix } from "../../types";
import { maturity } from "./maturity";
import { domains, questions } from "./questions";

const maturityLabels: MaturitySix = [
  "Não estabelecido",
  "Reativo",
  "Emergente",
  "Definido",
  "Gerenciado",
  "Adaptativo",
];

export const ptBrContent: ContentBundle = {
  actionPacks: ptBrActions.actionPacks,
  technology: ptBrActions.technology,
  domains,
  questions,
  maturity,
  maturityLabels,
  scenarios: {
    "regulated-bank": {
      name: "Banco regulado — alta exposição, baixa maturidade",
      shortName: "Banco Regulado",
      description:
        "IA altamente regulada e crítica para o negócio, com uso extensivo de agentes, alta autonomia e lacunas relevantes em governança de agentes, privilégio mínimo, contenção e continuidade.",
    },
    "mature-saas": {
      name: "SaaS maduro — agentes em escala",
      shortName: "SaaS Maduro",
      description:
        "Empresa SaaS madura que opera agentes de alta exposição e alta autonomia, com controles em geral gerenciados, mas ainda com lacunas em limites de ação, rastreabilidade, contenção e testes de agentes.",
    },
    "early-genai": {
      name: "Adoção inicial de GenAI — sem agentes",
      shortName: "GenAI Inicial",
      description:
        "Organização iniciando a adoção de GenAI, com exposição moderada e sem agentes em produção. As perguntas específicas de agentes devem ser excluídas automaticamente.",
    },
    "controlled-enterprise": {
      name: "IA corporativa controlada — baixa exposição, alta maturidade",
      shortName: "Corporativo Controlado",
      description:
        "Empresa madura com adoção controlada de IA, menor exposição, autonomia moderada e sem escopo atual de GenAI ou agentes.",
    },
  },
  recommendations: {
    "REC-DISC-001": {
      title: "Estabelecer um inventário corporativo de IA",
      risk: "Sistemas de IA desconhecidos ou não gerenciados podem introduzir acessos a dados sem dono, dependências de terceiros e exposição de segurança.",
      action:
        "Criar um inventário centralizado e gerenciado por ciclo de vida de aplicações, modelos, agentes, donos, fontes de dados, ferramentas e dependências relevantes de terceiros.",
      suggestedOwners: ["CISO", "CIO/CTO", "Liderança de IA/Dados", "Arquitetura Corporativa"],
      evidence: [
        "inventário de IA",
        "donos nomeados",
        "inventário de agentes/ferramentas",
        "fluxos de dados documentados",
      ],
    },
    "REC-RISK-001": {
      title: "Adotar classificação de IA baseada em risco",
      risk: "Os controles de IA podem ser aplicados de forma uniforme ou inconsistente quando impacto no negócio, sensibilidade dos dados, autonomia e exposição externa não são classificados em conjunto.",
      action:
        "Definir um método de classificação de risco de IA que combine criticidade de negócio, sensibilidade de dados, autonomia, privilégio, exposição externa, impacto regulatório e supervisão humana.",
      suggestedOwners: ["Risco Corporativo", "CISO", "Governança de IA", "Jurídico/Compliance"],
      evidence: [
        "padrão de classificação",
        "níveis de risco",
        "limiares de aprovação",
        "registro de IA de alto risco",
      ],
    },
    "REC-GOV-001": {
      title: "Definir accountability e direitos de decisão em IA",
      risk: "A falta de clareza sobre a propriedade atrasa decisões, enfraquece a aceitação de risco e cria lacunas no patrocínio de agentes, na autoridade de incidentes e na governança do ciclo de vida.",
      action:
        "Definir propriedade de negócio, patrocínio de agentes, autoridade de aceitação de risco, aprovação de autonomia, autorização de ferramentas, autoridade em incidentes e responsabilidades de descomissionamento.",
      suggestedOwners: [
        "Governança Executiva de IA",
        "CISO",
        "CIO/CTO",
        "Liderança de IA/Dados",
        "Risco/Jurídico",
      ],
      evidence: [
        "matriz de responsabilidades de IA",
        "modelo de direitos de decisão",
        "exigência de patrocinador de agente",
        "fluxo de aceitação de risco",
      ],
    },
    "REC-THRT-001": {
      title: "Operacionalizar a modelagem de ameaças de IA",
      risk: "Modelos tradicionais de ameaças podem não cobrir manipulação de prompt e contexto, envenenamento de dados e modelos, agência excessiva, abuso de ferramentas e ameaças na cadeia de suprimentos de IA.",
      action:
        "Incluir cenários de ameaça específicos de IA na revisão de arquitetura e exigir que os modelos de ameaça orientem controles, validação e requisitos de monitoramento.",
      suggestedOwners: [
        "Arquitetura de Segurança",
        "AppSec",
        "Engenharia de IA",
        "Modelagem de Ameaças",
      ],
      evidence: [
        "template de modelo de ameaças de IA",
        "cenários documentados",
        "rastreabilidade de controles",
        "registros de revisão",
      ],
    },
    "REC-SDLC-001": {
      title: "Estabelecer um ciclo de desenvolvimento seguro de IA",
      risk: "Decisões de segurança específicas de IA podem ocorrer tarde demais se proveniência de modelos, identidades não humanas, validação, permissões e descomissionamento não estiverem nos gates de entrega.",
      action:
        "Integrar requisitos de segurança de IA às fases de projetar, construir, testar, implantar, operar e descontinuar, com critérios de release baseados em risco.",
      suggestedOwners: [
        "AppSec",
        "Engenharia de IA",
        "Engenharia de Plataforma",
        "Arquitetura de Segurança",
      ],
      evidence: [
        "padrão de SDLC seguro para IA",
        "gates de release",
        "verificações de proveniência",
        "checklist de descomissionamento",
      ],
    },
    "REC-PROT-001": {
      title: "Aplicar controles mínimos de proteção de IA",
      risk: "Sistemas e agentes de IA podem ampliar a exposição de dados e o impacto no negócio quando identidades, privilégios, fontes de recuperação, ferramentas e limites de ação são pouco controlados.",
      action:
        "Definir controles mínimos de identidade, dados, modelos, aplicações, agentes e cadeia de suprimentos, com privilégio mínimo e limites explícitos de ferramentas e ações para agentes.",
      suggestedOwners: [
        "CISO",
        "Segurança de Identidade",
        "Segurança de Dados",
        "AppSec",
        "Plataforma de IA",
      ],
      evidence: [
        "baseline mínimo de controles",
        "evidência de privilégio mínimo",
        "autorização de ferramentas",
        "capacidade de desativar/revogar agentes",
      ],
    },
    "REC-VAL-001": {
      title: "Introduzir validação adversarial de IA baseada em risco",
      risk: "A IA em produção pode manter fragilidades exploráveis de prompt, dados, ferramentas, privilégio ou modos de falha quando a validação se limita a testes funcionais.",
      action:
        "Exigir validação adversarial para riscos relevantes de IA e red teaming estruturado para sistemas cuja exposição de negócio justifique.",
      suggestedOwners: ["AI Red Team", "AppSec", "Testes de Segurança", "Engenharia de IA"],
      evidence: [
        "planos de teste",
        "critérios de red team",
        "registro de achados",
        "evidência de reteste",
      ],
    },
    "REC-MON-001": {
      title: "Criar monitoramento e rastreabilidade de segurança de IA",
      risk: "As equipes de segurança podem não detectar nem reconstruir atividades conduzidas por IA quando a telemetria não distingue usuários, agentes, ferramentas e ações autônomas.",
      action:
        "Definir telemetria mínima de IA, centralizar logs relevantes e criar detecções para uso anômalo, abuso de privilégio, exposição de dados sensíveis e comportamento suspeito de agentes e ferramentas.",
      suggestedOwners: [
        "SOC",
        "Engenharia de Detecção",
        "Plataforma de IA",
        "Segurança de Identidade",
      ],
      evidence: [
        "padrão de logging de IA",
        "telemetria centralizada",
        "rastreabilidade de ações de agentes",
        "biblioteca de detecções de IA",
      ],
    },
    "REC-IR-001": {
      title: "Construir resposta a incidentes de IA e resiliência do negócio",
      risk: "Incidentes de IA ou falhas de provedores podem gerar impacto desproporcional quando contenção, evidências, fallback e autoridade de recuperação não estão claros.",
      action:
        "Criar playbooks de resposta específicos de IA, contenção e revogação rápida de agentes, requisitos de preservação de evidências e planos de continuidade para dependências críticas de IA.",
      suggestedOwners: [
        "Resposta a Incidentes",
        "SOC",
        "Continuidade de Negócios",
        "Plataforma de IA",
        "CISO",
      ],
      evidence: [
        "playbooks de IR para IA",
        "teste de contenção",
        "plano de fallback",
        "avaliação de concentração de provedores",
      ],
    },
    "REC-MEAS-001": {
      title: "Estabelecer métricas de segurança de IA e melhoria contínua",
      risk: "Programas de segurança de IA podem estagnar quando maturidade, exposição, incidentes e progresso de remediação não são medidos nem reavaliados.",
      action:
        "Definir KPIs/KRIs de segurança de IA, estabelecer gatilhos de reavaliação e governar um roadmap de melhoria baseado em risco, com reporte executivo.",
      suggestedOwners: [
        "CISO",
        "Governança de IA",
        "Risco Corporativo",
        "Gestão de Programas de Segurança",
      ],
      evidence: [
        "conjunto de KPIs/KRIs",
        "reporte executivo",
        "cadência de reavaliação",
        "roadmap de melhoria acompanhado",
      ],
    },
  },
  landing: {
    areas: [
      "aprovação de novos casos de uso de IA",
      "propriedade de negócio da IA",
      "classificação de risco de IA",
      "requisitos de segurança de IA",
      "aprovação de acesso a dados",
      "aprovação de modelos",
      "gestão do ciclo de vida de modelos",
      "mudanças de modelo",
      "aprovação de arquitetura de IA",
      "propriedade de agentes de IA",
      "aprovação de privilégios de agentes",
      "aprovação de autonomia de agentes",
      "autorização de ferramentas e APIs",
      "aprovação de IA de terceiros",
      "aquisição de soluções de IA",
      "implantação em produção",
      "monitoramento de IA",
      "monitoramento de segurança",
      "resposta a incidentes de IA",
      "contenção de agentes",
      "recuperação de serviços de IA",
      "aceitação de risco residual",
      "responsabilidade regulatória",
      "descomissionamento de IA",
    ],
    roles: [
      {
        role: "Identidade Técnica",
        detail: "A identidade que o agente usa para autenticar e acessar sistemas.",
      },
      {
        role: "Dono de Negócio",
        detail: "A pessoa responsável pelo resultado de negócio gerado pelo agente.",
      },
      {
        role: "Patrocinador Humano",
        detail:
          "A pessoa responsável pelo propósito aprovado, escopo e operação do agente.",
      },
      {
        role: "Dono de Segurança",
        detail: "A equipe responsável por definir e monitorar os requisitos de segurança.",
      },
    ],
    legacyDomains: {
      governance: {
        short: "Governança",
        name: "Governança e Accountability",
        intent:
          "Accountability operacional para decisões, riscos, controles e operações de IA — não estrutura de comitês.",
      },
      lifecycle: {
        short: "Ciclo de vida",
        name: "Ciclo de Vida de Modelos e Sistemas",
        intent: "Aprovação, controle de mudanças e descomissionamento de sistemas e modelos de IA.",
      },
      "data-access": {
        short: "Dados e Acesso",
        name: "Accountability de Dados e Acesso",
        intent: "Quem aprova o que sistemas e agentes de IA podem ler, escrever e alcançar.",
      },
      operations: {
        short: "Operações",
        name: "Monitoramento, Incidentes e Recuperação",
        intent:
          "Propriedade operacional do comportamento da IA, telemetria de segurança, contenção e recuperação.",
      },
      thirdparty: {
        short: "Terceiros",
        name: "Terceiros e Regulatório",
        intent:
          "Responsabilidade por provedores externos de IA, aquisição e exposição regulatória.",
      },
    },
  },
  levels: {
    maturity: {
      Unaware: "Sem consciência",
      Reactive: "Reativo",
      Emerging: "Emergente",
      Defined: "Definido",
      Managed: "Gerenciado",
      Adaptive: "Adaptativo",
    },
    exposure: {
      Limited: "Limitada",
      Moderate: "Moderada",
      Significant: "Significativa",
      High: "Alta",
      "Very High": "Muito alta",
    },
    autonomy: {
      "No AI": "Sem IA",
      Generative: "Generativa",
      Advisory: "Consultiva",
      "Workflow Initiation": "Início de fluxos de trabalho",
      "Action Execution": "Execução de ações",
      "Autonomous Operations": "Operações autônomas",
    },
    quadrant: {
      "Critical Priority": "Prioridade crítica",
      "Strategic Investment": "Investimento estratégico",
      "Emerging Risk": "Risco emergente",
      "Controlled Adoption": "Adoção controlada",
    },
    priority: {
      Critical: "Crítica",
      High: "Alta",
      Medium: "Média",
    },
    horizon: {
      NOW: "NOW",
      NEXT: "NEXT",
      SCALE: "SCALE",
    },
  },
};
