import type { DomainContentDict, QuestionContentDict } from "../../types";

export const domains: DomainContentDict = {
  discovery: {
    short: "Descoberta",
    name: "Descoberta e Inventário de IA",
    intent: "Conhecer todo o parque de IA, incluindo IA embarcada, modelos, agentes, ferramentas, dependências e fluxos de dados.",
  },
  risk: {
    short: "Risco",
    name: "Classificação de Risco e Impacto no Negócio",
    intent: "Classificar a IA de acordo com criticidade para o negócio, dados sensíveis, autonomia, privilégios, exposição e supervisão humana.",
  },
  governance: {
    short: "Governança",
    name: "Governança, Responsabilização e Autoridade Decisória",
    intent: "Tornar explícitos e operacionais a propriedade, o patrocínio, as aprovações, a aceitação de risco e a autoridade em incidentes.",
  },
  "threat-modeling": {
    short: "Modelagem de Ameaças",
    name: "Modelagem de Ameaças de IA",
    intent: "Modelar ameaças específicas de GenAI, modelos, dados, agentes, ferramentas e cadeias de suprimento de IA.",
  },
  "secure-sdlc": {
    short: "SDLC Seguro de IA",
    name: "Ciclo de Vida de Desenvolvimento Seguro de IA",
    intent: "Incorporar segurança nas fases de design, construção, teste, implantação, operação e desativação.",
  },
  protection: {
    short: "Proteção",
    name: "Controles de Proteção",
    intent: "Proteger identidade, dados, modelos, aplicações, agentes, infraestrutura e dependências da cadeia de suprimento.",
  },
  validation: {
    short: "Validação",
    name: "Validação e Red Teaming",
    intent: "Testar premissas por meio de testes adversariais, red teaming de IA e validação de resiliência.",
  },
  monitoring: {
    short: "Monitoramento",
    name: "Monitoramento e Detecção",
    intent: "Observar a atividade de IA, distinguir ações autônomas e detectar abuso, mudanças e comportamento anômalo.",
  },
  "incident-resilience": {
    short: "Resposta e Resiliência",
    name: "Resposta a Incidentes e Resiliência do Negócio",
    intent: "Conter incidentes específicos de IA e manter processos críticos do negócio operando diante de falhas de IA e interrupções de provedores.",
  },
  measurement: {
    short: "Medição",
    name: "Medição e Melhoria Contínua",
    intent: "Medir risco e maturidade de IA, reportar exposição relevante e melhorar continuamente os controles.",
  },
};

export const questions: QuestionContentDict = {
  "DISC-001": { title: "Inventário Corporativo de IA", prompt: "A organização mantém um inventário centralizado de sistemas de IA, modelos, aplicações habilitadas para IA e serviços de IA?" },
  "DISC-002": { title: "Visibilidade de IA Não Autorizada (Shadow AI)", prompt: "A organização consegue identificar serviços e ferramentas de IA utilizados fora dos processos formalmente aprovados?" },
  "DISC-003": { title: "IA Embarcada em SaaS", prompt: "A organização consegue identificar capacidades de IA embarcadas em aplicações SaaS e corporativas de terceiros?" },
  "DISC-004": { title: "Visibilidade de Modelos e Versões", prompt: "Os modelos e as versões relevantes de modelos usados por sistemas de IA críticos são identificados e rastreados?" },
  "DISC-005": { title: "Inventário de Agentes e Ferramentas", prompt: "A organização mantém visibilidade sobre os agentes de IA em produção e as ferramentas, APIs ou sistemas que eles podem acionar?" },
  "DISC-006": { title: "Visibilidade dos Fluxos de Dados de IA", prompt: "A organização consegue identificar as principais fontes de dados, fontes de recuperação (retrieval) e destinos usados por cargas de trabalho de IA críticas?" },

  "RISK-001": { title: "Criticidade de Negócio da IA", prompt: "Os sistemas de IA são classificados de acordo com a criticidade para o negócio e o potencial impacto operacional?" },
  "RISK-002": { title: "Sensibilidade dos Dados e Risco de IA", prompt: "A classificação de risco de IA leva em conta a sensibilidade dos dados que o sistema pode acessar, gerar ou expor?" },
  "RISK-003": { title: "Risco de Autonomia e Privilégios", prompt: "A classificação de risco de IA considera a autonomia, os privilégios e a capacidade de executar ações de negócio?" },
  "RISK-004": { title: "Impacto Externo e Regulatório", prompt: "A classificação de risco de IA considera a exposição de clientes, decisões reguladas e impacto legal ou regulatório?" },
  "RISK-005": { title: "Supervisão Humana e Consequência", prompt: "A adequação da supervisão humana é avaliada em função da consequência de uma ação de IA incorreta ou insegura?" },

  "GOV-001": { title: "Modelo Operacional de Governança de IA", prompt: "Existe um modelo operacional definido para governança de IA e governança de segurança de IA?" },
  "GOV-002": { title: "Responsabilidades de IA Definidas", prompt: "As responsabilidades por risco de IA, segurança, acesso a dados, aprovação de modelos, monitoramento, incidentes e gestão do ciclo de vida são formalmente atribuídas?" },
  "GOV-003": { title: "Propriedade de Negócio para IA Crítica", prompt: "Todo sistema de IA crítico em produção possui um responsável de negócio (owner) designado?" },
  "GOV-004": { title: "Patrocínio de Agentes", prompt: "Todo agente de IA em produção capaz de executar ações de negócio possui um patrocinador ou responsável humano designado?" },
  "GOV-005": { title: "Autoridade Decisória sobre Autonomia", prompt: "A autoridade para aprovar aumentos de autonomia ou de poderes da IA está explicitamente atribuída?" },
  "GOV-006": { title: "Aceitação de Risco Residual", prompt: "A organização consegue identificar quem aceita formalmente o risco residual em implantações de IA de alto risco?" },
  "GOV-007": { title: "Governança de IA de Terceiros", prompt: "Serviços de IA de terceiros, IA embarcada e modelos externos passam por análise formal de segurança e risco antes da adoção ou de mudanças relevantes?" },
  "GOV-008": { title: "Autoridade Decisória em Incidentes de IA", prompt: "A autoridade para desativar, conter, investigar e restaurar sistemas de IA durante um incidente está claramente definida?" },

  "THRT-001": { title: "Modelagem de Ameaças Específica de IA", prompt: "Ameaças específicas de IA são incorporadas à modelagem de ameaças de arquitetura e de aplicações?" },
  "THRT-002": { title: "Manipulação de Prompt e Contexto", prompt: "A modelagem de ameaças aborda injeção de prompt direta e indireta, manipulação de contexto e conteúdo recuperado malicioso?" },
  "THRT-003": { title: "Manipulação de Modelos e Dados", prompt: "A modelagem de ameaças aborda envenenamento de dados, envenenamento de RAG, manipulação de modelos, roubo ou extração de modelos, quando aplicável?" },
  "THRT-004": { title: "Abuso de Agentes e Ferramentas", prompt: "A modelagem de ameaças aborda agência excessiva, abuso de ferramentas, uso indevido de credenciais, personificação de agentes e abuso de delegação?" },
  "THRT-005": { title: "Ameaças na Cadeia de Suprimento de IA", prompt: "A modelagem de ameaças inclui modelos, bibliotecas, conjuntos de dados, plugins, conectores, endpoints MCP/de ferramentas e dependências de IA de terceiros?" },

  "SDLC-001": { title: "Segurança de IA por Design", prompt: "Os requisitos de segurança e risco de IA são definidos na fase de design, antes do início da implementação?" },
  "SDLC-002": { title: "Controles de Dependência e Proveniência de IA", prompt: "Modelos, conjuntos de dados, bibliotecas e dependências relevantes de IA são avaliados quanto à proveniência e integridade durante o desenvolvimento?" },
  "SDLC-003": { title: "Segurança de Segredos e Identidades Não Humanas", prompt: "Credenciais, segredos e identidades não humanas usados por cargas de trabalho de IA são governados ao longo do desenvolvimento e da implantação?" },
  "SDLC-004": { title: "Validação de Segurança Pré-Produção", prompt: "Testes de segurança específicos de IA aplicáveis são exigidos antes da implantação em produção?" },
  "SDLC-005": { title: "Revisão de Implantação e Permissões", prompt: "As permissões, o acesso a dados, as ferramentas, as configurações e a autonomia da IA são revisados antes da implantação em produção?" },
  "SDLC-006": { title: "Desativação Segura", prompt: "Sistemas de IA, modelos, agentes, identidades, credenciais e acessos a dados são formalmente desativados quando não são mais necessários?" },

  "PROT-001": { title: "Propriedade das Identidades de IA", prompt: "As identidades usadas por aplicações e agentes de IA são unicamente identificáveis, possuem um responsável definido e são gerenciadas ao longo do ciclo de vida?" },
  "PROT-002": { title: "Privilégio Mínimo para IA e Agentes", prompt: "Aplicações e agentes de IA são restritos ao mínimo de privilégios necessário para sua finalidade aprovada?" },
  "PROT-003": { title: "Controles de Acesso a Dados Sensíveis", prompt: "O acesso da IA a dados sensíveis e fontes de recuperação é governado de acordo com as políticas existentes de classificação de dados e autorização?" },
  "PROT-004": { title: "Proteção de Dados de Entrada e Saída da IA", prompt: "São aplicados controles para reduzir a divulgação indevida de dados sensíveis por meio de entradas, saídas e conteúdo gerado pela IA?" },
  "PROT-005": { title: "Segurança de RAG e Recuperação", prompt: "As permissões, a proveniência e a integridade das fontes de RAG e de recuperação são protegidas contra acesso não autorizado ou manipulação?" },
  "PROT-006": { title: "Integridade e Aprovação de Modelos", prompt: "Os modelos críticos estão sujeitos a controles de proveniência, integridade, versão e aprovação?" },
  "PROT-007": { title: "Guardrails de Aplicações de IA", prompt: "Controles adequados de entrada, saída, isolamento e execução são implementados para aplicações habilitadas para IA?" },
  "PROT-008": { title: "Autorização de Ferramentas de Agentes", prompt: "As ferramentas, APIs e sistemas que um agente de IA pode acionar são explicitamente autorizados e restritos?" },
  "PROT-009": { title: "Limites de Ação e Capacidade de Desligamento de Agentes", prompt: "Limites de ação, limites de transação, exigências de aprovação e capacidades de desativação rápida são definidos para agentes autônomos ou semiautônomos?" },
  "PROT-010": { title: "Controles da Cadeia de Suprimento de IA", prompt: "Modelos, bibliotecas, conjuntos de dados, conectores e endpoints de ferramentas de terceiros estão sujeitos a controles de segurança, proveniência e mudança?" },

  "VAL-001": { title: "Validação Adversarial de IA", prompt: "Os sistemas de IA críticos são testados quanto a comportamento adversarial antes da produção?" },
  "VAL-002": { title: "Testes de Injeção de Prompt e Vazamento de Dados", prompt: "Os sistemas aplicáveis são testados quanto a injeção de prompt, injeção indireta e vazamento de dados sensíveis?" },
  "VAL-003": { title: "Testes de Abuso e Privilégio de Agentes", prompt: "Os agentes em produção são testados quanto a agência excessiva, abuso de ferramentas, escalonamento de privilégios, delegação insegura e ações não autorizadas?" },
  "VAL-004": { title: "Red Teaming de IA", prompt: "A organização realiza red teaming estruturado de IA para sistemas cujo risco justifique essa prática?" },
  "VAL-005": { title: "Testes de Resiliência e Modos de Falha", prompt: "Os sistemas de IA críticos são testados quanto a cenários de indisponibilidade, degradação, comportamento inseguro e falha de dependências?" },

  "MON-001": { title: "Telemetria de Segurança de IA", prompt: "A organização coleta telemetria relevante para a segurança de aplicações, modelos, agentes e ferramentas de IA críticos?" },
  "MON-002": { title: "Rastreabilidade das Ações dos Agentes", prompt: "A organização consegue reconstruir o que um agente de IA em produção fez durante uma investigação de segurança?" },
  "MON-003": { title: "Atribuição de Ações Humanas versus de IA", prompt: "As operações de segurança conseguem distinguir ações do usuário, recomendações da IA e ações autônomas da IA?" },
  "MON-004": { title: "Detecção de Anomalias e Abuso de IA", prompt: "Existem detecções definidas para uso anômalo de IA, exposição de dados sensíveis, abuso de privilégios, uso suspeito de ferramentas ou comportamento anômalo de agentes?" },
  "MON-005": { title: "Monitoramento de Mudanças em Modelos e Dependências", prompt: "Mudanças relevantes em modelos, provedores de IA, ferramentas, permissões ou dependências são monitoradas quanto ao impacto em segurança?" },

  "IR-001": { title: "Playbooks de Incidentes Específicos de IA", prompt: "A resposta a incidentes inclui playbooks para cenários específicos de IA?" },
  "IR-002": { title: "Contenção de Agentes", prompt: "A organização consegue desativar ou isolar rapidamente um agente de IA comprometido ou inseguro e revogar suas credenciais e acesso a ferramentas?" },
  "IR-003": { title: "Preservação de Evidências e Investigação de IA", prompt: "A organização consegue preservar prompts, saídas, ações de agentes, identidades, chamadas de ferramentas e informações de modelo/contexto relevantes para investigação?" },
  "IR-004": { title: "Continuidade dos Serviços de IA", prompt: "Existem planos de contingência e continuidade definidos para processos de negócio críticos que dependem de serviços de IA?" },
  "IR-005": { title: "Concentração de Provedores e Prontidão para Saída", prompt: "A organização avaliou o risco de concentração e as opções de saída ou substituição para dependências externas críticas de IA?" },

  "MEAS-001": { title: "KPIs e KRIs de Segurança de IA", prompt: "KPIs e KRIs relevantes de segurança de IA são definidos e revisados?" },
  "MEAS-002": { title: "Relatórios para Executivos e Conselho", prompt: "O risco relevante de IA é integrado aos relatórios de risco de nível executivo ou do conselho, quando apropriado?" },
  "MEAS-003": { title: "Reavaliação Periódica", prompt: "A maturidade e a exposição de segurança de IA são reavaliadas periodicamente e após mudanças relevantes nos sistemas?" },
  "MEAS-004": { title: "Governança do Roadmap de Segurança de IA", prompt: "As ações de melhoria de segurança de IA são priorizadas, atribuídas a responsáveis e acompanhadas até a conclusão com base na exposição de negócio?" },
  "MEAS-005": { title: "Aprendizado Contínuo a partir de Incidentes e Testes", prompt: "Os achados de incidentes, red teaming, validação, auditorias e telemetria operacional são usados para melhorar os controles e a governança de IA?" },
};
