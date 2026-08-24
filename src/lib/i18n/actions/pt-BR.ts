import type { ActionsBundle } from "./types";

export const ptBrActions: ActionsBundle = {
  technology: {
    categories: {
      "ai-spm": "AI Security Posture Management (AI-SPM)",
      "cnapp-ai": "CNAPP com descoberta de IA",
      "dspm-ai": "DSPM / segurança de dados para IA",
      "nhi-identity": "IAM / identidades não humanas e de agentes",
      "agent-runtime": "Segurança de runtime de agentes",
      "mcp-tool-governance": "Governança de MCP / ferramentas",
      "ai-guardrails": "Guardrails de runtime de IA",
      "model-appsec": "Segurança de modelos e aplicações de IA",
      "ai-red-team": "Red teaming e validação de IA",
      "siem-xdr-ai": "SIEM / XDR com telemetria de IA",
      "soar-ir": "Automação de SOAR / resposta a incidentes",
      "ai-observability": "Observabilidade e resiliência de IA",
      "cmdb-grc": "CMDB / GRC / gestão de fluxos de trabalho",
    },
    capabilities: {
      "cap-ai-inventory": {
        description:
          "Descoberta contínua e inventário de ciclo de vida de aplicações de IA, modelos, agentes, responsáveis e fontes de dados.",
        notes:
          "A cobertura de IA embutida em SaaS e de agentes desenvolvidos internamente varia bastante; valide contra o seu próprio ambiente.",
      },
      "cap-cloud-ai-discovery": {
        description:
          "Descoberta nativa em nuvem de serviços de IA, endpoints de modelos, repositórios de dados de treinamento e seus caminhos de exposição.",
        notes: "Geralmente mais eficaz quando a carga de trabalho já roda em uma conta de nuvem coberta.",
      },
      "cap-data-security-ai": {
        description:
          "Classificação e controle de dados sensíveis acessíveis por sistemas de IA, fontes de recuperação (retrieval) e agentes.",
        notes: "Avalie especificamente a cobertura de retrieval e de bases vetoriais, não apenas os repositórios de dados estruturados.",
      },
      "cap-nonhuman-identity": {
        description:
          "Ciclo de vida, privilégio mínimo, gestão de credenciais e revogação para identidades de serviços, cargas de trabalho e agentes.",
        notes: "Confirme o suporte a credenciais delegadas de curta duração e à revogação rápida.",
      },
      "cap-agent-runtime": {
        description:
          "Visibilidade e controle em runtime sobre o comportamento dos agentes, ações delegadas e uso inesperado de privilégios.",
        notes: "Categoria em rápida evolução; valide contra os frameworks de agentes que você utiliza.",
      },
      "cap-tool-governance": {
        description:
          "Autorização, listas de permissão e monitoramento de ferramentas, plugins, conectores e servidores MCP disponíveis aos agentes.",
        notes: "Verifique se o acesso a ferramentas pode ser revogado independentemente da identidade do agente.",
      },
      "cap-runtime-guardrails": {
        description:
          "Inspeção de entrada/saída para manipulação de prompts, exposição de dados sensíveis e respostas inseguras do modelo.",
        notes: "Guardrails reduzem, mas não eliminam, o risco de manipulação de prompt e contexto.",
      },
      "cap-model-appsec": {
        description:
          "Proveniência de modelos e dependências, varredura de artefatos e controles de build seguro para componentes de IA.",
        notes: "Verifique o suporte aos registries de modelos e formatos de artefato que você realmente utiliza.",
      },
      "cap-ai-red-team": {
        description:
          "Testes adversariais de prompts, ferramentas, privilégios e modos de falha, com achados reprodutíveis.",
        notes: "Testes automatizados complementam, mas não substituem, o red teaming humano orientado a cenários.",
      },
      "cap-ai-telemetry": {
        description:
          "Coleta centralizada, correlação e detecção sobre logs de atividade de IA, agentes e ferramentas.",
        notes: "O valor da detecção depende da telemetria que suas plataformas de IA conseguem gerar.",
      },
      "cap-ir-automation": {
        description:
          "Automação de playbooks para contenção, revogação de credenciais, captura de evidências e escalonamento.",
        notes: "Teste a contenção automatizada contra um agente real antes de depender dela.",
      },
      "cap-ai-observability": {
        description:
          "Monitoramento de disponibilidade, latência, qualidade e dependências de serviços e provedores de IA.",
        notes: "Útil tanto para monitorar resiliência e concentração de provedores quanto para desempenho.",
      },
      "cap-grc-workflow": {
        description:
          "Gestão de ativos, fluxos de trabalho, aprovações e evidências à qual os processos de governança de IA podem se conectar.",
        notes: "Prefira estender o fluxo de trabalho corporativo já existente em vez de criar um processo paralelo.",
      },
    },
  },
  actionPacks: {
    "REC-DISC-001": {
      whyItMatters:
        "Você não consegue ser responsável por, classificar, proteger ou conter sistemas de IA que não identificou. O inventário é o pré-requisito para quase todos os demais controles desta avaliação.",
      tasks: {
        "DISC-7D-1": "Defina o que conta como um ativo de IA (modelo, aplicação de IA, agente, IA embutida em SaaS, ferramenta/conector).",
        "DISC-7D-2": "Identifique quais áreas de negócio já utilizam GenAI ou agentes, incluindo adoção não gerenciada.",
        "DISC-7D-3": "Defina os campos mínimos de inventário exigidos para que um ativo de IA seja considerado registrado.",
        "DISC-7D-4": "Atribua responsáveis de negócio aos ativos de IA já conhecidos como críticos para o negócio.",
        "DISC-30D-1": "Registre modelo/provedor, ambiente de hospedagem, caso de uso de negócio e classificação de dados de cada ativo.",
        "DISC-30D-2": "Registre a exposição externa, o nível de autonomia e o modelo de supervisão humana de cada ativo.",
        "DISC-30D-3": "Registre agentes, suas ferramentas, APIs e identidades não humanas junto com os sistemas em que atuam.",
        "DISC-60D-1": "Execute descoberta técnica para provedores de modelo, IA embutida em SaaS, plugins, conectores e servidores MCP.",
        "DISC-60D-2": "Mapeie as fontes de dados sensíveis acessíveis por retrieval, fine-tuning e ferramentas de agentes.",
        "DISC-60D-3": "Identifique ativos de IA órfãos ou sem responsável e atribua um dono ou os desative.",
        "DISC-90D-1": "Integre o inventário de IA ao CMDB, gestão de ativos ou fluxo de GRC existente, em vez de manter uma planilha isolada.",
        "DISC-90D-2": "Defina etapas de onboarding e desativação para que o inventário permaneça correto por padrão.",
        "DISC-90D-3": "Estabeleça reconciliação e relatórios recorrentes sobre a cobertura do inventário para a liderança.",
      },
      kpis: {
        "KPI-DISC-1": "Sistemas de IA em produção registrados no inventário",
        "KPI-DISC-2": "Sistemas de IA críticos com responsável de negócio nomeado",
        "KPI-DISC-3": "Agentes em produção com patrocinador humano identificado",
        "KPI-DISC-4": "Sistemas de IA de alto risco com classificação de risco concluída",
        "KPI-DISC-5": "Ativos de IA órfãos ou não gerenciados pendentes",
      },
      dependencies: [
        "Mandato executivo exigindo registro antes do uso de IA em produção.",
        "Acesso à telemetria de nuvem, SaaS e identidade para a descoberta técnica.",
        "Um sistema de ativos ou fluxo de trabalho existente que o inventário possa estender.",
      ],
    },
    "REC-RISK-001": {
      whyItMatters:
        "Sem uma classificação de risco compartilhada, o esforço de controle se dilui em vez de se concentrar nos sistemas de IA capazes de causar dano material ao negócio.",
      tasks: {
        "RISK-7D-1": "Defina as dimensões de risco: criticidade para o negócio, sensibilidade dos dados, autonomia, privilégio, exposição e impacto regulatório.",
        "RISK-7D-2": "Defina de três a quatro níveis de risco com descrições em linguagem simples que a liderança consiga aplicar.",
        "RISK-7D-3": "Classifique os dez sistemas de IA atualmente considerados de maior exposição para o negócio.",
        "RISK-30D-1": "Publique o padrão de classificação e as expectativas de controle associadas a cada nível.",
        "RISK-30D-2": "Defina os limites de aprovação e quem pode aprovar a implantação em cada nível.",
        "RISK-30D-3": "Classifique todos os sistemas de IA e agentes em produção já inventariados.",
        "RISK-60D-1": "Estabeleça um registro de IA de alto risco com datas de revisão e responsáveis de risco nomeados.",
        "RISK-60D-2": "Exija reclassificação quando houver mudança de autonomia, privilégio, escopo de dados ou exposição.",
        "RISK-60D-3": "Alinhe a classificação à taxonomia de risco corporativa e às obrigações regulatórias existentes.",
        "RISK-90D-1": "Incorpore a classificação como um gate no intake, na aquisição e no fluxo de release.",
        "RISK-90D-2": "Reporte a distribuição por nível e os itens de alto risco não mitigados à governança executiva.",
        "RISK-90D-3": "Revise a precisão da classificação com base em incidentes, achados e observações de auditoria.",
      },
      kpis: {
        "KPI-RISK-1": "Sistemas de IA inventariados com classificação concluída",
        "KPI-RISK-2": "Sistemas de IA de alto risco com posição de risco aceita e documentada",
        "KPI-RISK-3": "Implantações que passaram pelo gate de classificação antes do lançamento",
        "KPI-RISK-4": "Tempo mediano para classificar um sistema de IA recém-registrado",
        "KPI-RISK-5": "Itens de alto risco com revisão em atraso",
      },
      dependencies: [
        "Um inventário de IA utilizável e com responsabilidades registradas.",
        "Alinhamento com a taxonomia de risco corporativa existente.",
        "Participação do jurídico e compliance nos critérios de impacto regulatório.",
      ],
    },
    "REC-GOV-001": {
      whyItMatters:
        "Quando os direitos de decisão são pouco claros, as decisões de risco de IA acabam sendo tomadas por quem está mais próximo da entrega, e ninguém tem autoridade para interromper, conter ou desativar um sistema.",
      tasks: {
        "GOV-7D-1": "Liste as decisões de IA que hoje não têm um responsável claro, de aumentos de autonomia a desativações.",
        "GOV-7D-2": "Nomeie o executivo responsável pelo risco de IA e o fórum onde as decisões são registradas.",
        "GOV-7D-3": "Exija um patrocinador humano nomeado para todo agente em produção capaz de executar ações de negócio.",
        "GOV-30D-1": "Publique uma matriz de responsabilidades de IA cobrindo aprovação, propriedade, aceitação de risco e autoridade em incidentes.",
        "GOV-30D-2": "Defina quem pode aprovar aumentos de autonomia, autorização de ferramentas e acesso a dados privilegiados.",
        "GOV-30D-3": "Defina o fluxo de aceitação de risco residual, incluindo quem pode aceitar e por quanto tempo.",
        "GOV-60D-1": "Atribua responsáveis de negócio a todos os sistemas de IA críticos e feche as lacunas identificadas.",
        "GOV-60D-2": "Defina a autoridade de incidentes: quem pode conter, revogar, suspender ou restaurar um sistema de IA ou agente.",
        "GOV-60D-3": "Defina a responsabilidade pela desativação e as evidências necessárias para aposentar um ativo de IA.",
        "GOV-90D-1": "Integre o modelo de direitos de decisão ao intake, à revisão de arquitetura e à aprovação de release.",
        "GOV-90D-2": "Revise a eficácia da governança com base em decisões reais, escalonamentos e incidentes.",
        "GOV-90D-3": "Reporte a cobertura de responsabilidades e as lacunas de propriedade em aberto ao fórum executivo.",
      },
      kpis: {
        "KPI-GOV-1": "Sistemas de IA críticos com responsabilidade documentada",
        "KPI-GOV-2": "Agentes em produção com patrocinador humano nomeado",
        "KPI-GOV-3": "Aceitações de risco registradas com data de validade e revisão",
        "KPI-GOV-4": "Tempo mediano entre o escalonamento e o registro de uma decisão de risco de IA",
        "KPI-GOV-5": "Tipos de decisão ainda sem responsável atribuído",
      },
      dependencies: [
        "Patrocínio executivo para os direitos de decisão sobre risco de IA.",
        "Um inventário que identifique sistemas, agentes e responsáveis atuais.",
        "Um fórum de governança existente ao qual o modelo possa se conectar.",
      ],
    },
    "REC-THRT-001": {
      whyItMatters:
        "Os modelos de ameaça de aplicações raramente cobrem manipulação de prompt e contexto, envenenamento, agência excessiva ou abuso de ferramentas, permitindo que caminhos de falha específicos de IA cheguem à produção sem serem examinados.",
      tasks: {
        "THRT-7D-1": "Selecione as categorias de ameaça específicas de IA que seu processo de revisão sempre deve considerar.",
        "THRT-7D-2": "Escolha dois sistemas de IA de alta exposição para uma primeira sessão estruturada de modelagem de ameaças.",
        "THRT-7D-3": "Identifique quem facilita a modelagem de ameaças de IA e quando ela é obrigatória.",
        "THRT-30D-1": "Publique um modelo de ameaças de IA cobrindo dados, modelo, aplicação, agente e cadeia de suprimentos.",
        "THRT-30D-2": "Exija modelagem de ameaças para todos os sistemas de IA de alto risco antes do lançamento em produção.",
        "THRT-30D-3": "Associe cada ameaça identificada a um controle, teste de validação ou requisito de monitoramento.",
        "THRT-60D-1": "Modele ameaças específicas de agentes: agência excessiva, abuso de ferramentas, uso indevido de credenciais delegadas e encadeamento de ações.",
        "THRT-60D-2": "Revise as ameaças de terceiros e da cadeia de suprimentos de modelos, incluindo provedores e conectores.",
        "THRT-60D-3": "Registre as ameaças não resolvidas no registro de riscos com responsáveis e prazos.",
        "THRT-90D-1": "Integre a modelagem de ameaças de IA à revisão de arquitetura como etapa permanente.",
        "THRT-90D-2": "Atualize os modelos de ameaça quando houver mudança de autonomia, ferramentas, escopo de dados ou provedores.",
        "THRT-90D-3": "Meça a cobertura de controles derivada dos modelos de ameaça e reporte a exposição residual.",
      },
      kpis: {
        "KPI-THRT-1": "Sistemas de IA de alto risco com modelo de ameaças atualizado",
        "KPI-THRT-2": "Ameaças identificadas associadas a um controle ou teste",
        "KPI-THRT-3": "Sistemas habilitados para agentes com cenários de abuso de ferramentas modelados",
        "KPI-THRT-4": "Modelos de ameaça além do intervalo de atualização",
        "KPI-THRT-5": "Tempo mediano entre a identificação da ameaça e a decisão de controle",
      },
      dependencies: [
        "Documentação de arquitetura e visibilidade de fluxo de dados dos sistemas de IA.",
        "Capacidade da equipe de arquitetura de segurança para facilitar as sessões.",
        "Classificação de risco para decidir onde a modelagem de ameaças é obrigatória.",
      ],
    },
    "REC-SDLC-001": {
      whyItMatters:
        "Se as decisões de segurança de IA acontecem depois do desenvolvimento, problemas de proveniência, identidade e permissão tornam-se caros de reverter e, ainda assim, costumam ir para produção.",
      tasks: {
        "SDLC-7D-1": "Mapeie onde os componentes de IA hoje entram no pipeline de entrega sem um ponto de verificação de segurança.",
        "SDLC-7D-2": "Defina os requisitos mínimos de segurança de IA que devem ser atendidos antes do lançamento em produção.",
        "SDLC-7D-3": "Exija proveniência de modelo e dependências para qualquer novo componente de IA introduzido.",
        "SDLC-30D-1": "Inclua requisitos de segurança de IA na revisão de design e registre-os como critérios de aceitação.",
        "SDLC-30D-2": "Introduza o registro de identidade não humana e a revisão de privilégio mínimo no momento do build.",
        "SDLC-30D-3": "Adicione testes adversariais e de casos de abuso à etapa de testes para sistemas de IA de alto risco.",
        "SDLC-60D-1": "Implemente gates de release baseados em risco alinhados aos níveis de classificação de IA.",
        "SDLC-60D-2": "Adicione varredura de artefatos e dependências para modelos, prompts, agentes e definições de ferramentas.",
        "SDLC-60D-3": "Defina os requisitos operacionais transferidos na implantação: telemetria, propriedade, contenção.",
        "SDLC-90D-1": "Defina e teste um checklist de desativação cobrindo credenciais, ferramentas, dados e remoção do inventário.",
        "SDLC-90D-2": "Automatize a captura de evidências a partir do pipeline para que as auditorias não exijam coleta manual.",
        "SDLC-90D-3": "Revise as exceções de gate e reduza os padrões recorrentes de contorno.",
      },
      kpis: {
        "KPI-SDLC-1": "Releases de IA que passaram pelo gate de segurança definido",
        "KPI-SDLC-2": "Componentes de IA com proveniência registrada",
        "KPI-SDLC-3": "Cargas de trabalho de IA com revisão de privilégio mínimo concluída",
        "KPI-SDLC-4": "Ativos de IA desativados com evidência de desativação concluída",
        "KPI-SDLC-5": "Exceções de gate em aberto",
      },
      dependencies: [
        "Um pipeline de CI/CD existente capaz de impor gates.",
        "Classificação de risco para definir o rigor do gate por nível.",
        "Acordo da engenharia sobre os critérios de release.",
      ],
    },
    "REC-PROT-001": {
      whyItMatters:
        "Agentes e aplicações de IA transformam controles fracos de identidade, dados e ferramentas em ações de negócio diretas, convertendo uma configuração incorreta rotineira em um incidente operacional.",
      tasks: {
        "PROT-7D-1": "Inventarie os agentes em produção capazes de executar ações, e não apenas gerar texto.",
        "PROT-7D-2": "Mapeie a identidade de cada agente e todas as credenciais delegadas que ele pode utilizar.",
        "PROT-7D-3": "Mapeie as ferramentas, APIs e servidores MCP acessíveis a cada agente e a autoridade que cada um concede.",
        "PROT-7D-4": "Estabeleça um procedimento de emergência para revogar ou desativar um agente e suas credenciais.",
        "PROT-30D-1": "Publique linhas de base mínimas de proteção para as camadas de identidade, dados, modelo, aplicação e agente.",
        "PROT-30D-2": "Remova privilégios permanentes e acesso excessivo a dados das identidades de agentes e cargas de trabalho de IA.",
        "PROT-30D-3": "Exija autorização explícita para cada ferramenta que um agente possa usar, com um responsável por ferramenta.",
        "PROT-60D-1": "Implemente a capacidade de bloquear o acesso a ferramentas independentemente de desativar o agente.",
        "PROT-60D-2": "Restrinja as fontes de retrieval e aplique controles de dados sobre o que os sistemas de IA podem ler.",
        "PROT-60D-3": "Aplique guardrails de runtime para prompts, saídas e limites de ação de alta exposição.",
        "PROT-90D-1": "Teste a contenção de ponta a ponta em pelo menos um agente crítico e registre o resultado.",
        "PROT-90D-2": "Revise os controles de cadeia de suprimentos para provedores de modelo, conectores e agentes de terceiros.",
        "PROT-90D-3": "Reporte a conformidade com a linha de base e as exceções, com prazos de correção.",
      },
      kpis: {
        "KPI-PROT-1": "Agentes em produção com procedimento de desligamento ou contenção documentado",
        "KPI-PROT-2": "Identidades de agentes operando sob privilégio mínimo",
        "KPI-PROT-3": "Tempo médio para revogar uma credencial de agente",
        "KPI-PROT-4": "Agentes cujo acesso a ferramentas pode ser bloqueado de forma independente",
        "KPI-PROT-5": "Exceções à linha de base em aberto além do prazo",
      },
      dependencies: [
        "Um inventário de agentes e identidades não humanas.",
        "Suporte da plataforma de identidade para revogação rápida.",
        "Responsáveis identificados para ferramentas, conectores e fontes de dados.",
      ],
    },
    "REC-VAL-001": {
      whyItMatters:
        "Testes funcionais confirmam que um sistema de IA funciona como previsto; eles não mostram como o sistema falha quando alguém tenta deliberadamente fazê-lo falhar.",
      tasks: {
        "VAL-7D-1": "Defina quais riscos de IA exigem validação adversarial antes e depois do lançamento em produção.",
        "VAL-7D-2": "Selecione um sistema de IA de alta exposição para um teste adversarial inicial.",
        "VAL-7D-3": "Acorde como os achados serão registrados, triados e retestados.",
        "VAL-30D-1": "Publique um plano de testes cobrindo manipulação de prompt, exposição de dados, abuso de ferramentas e escalonamento de privilégio.",
        "VAL-30D-2": "Defina critérios de red team com base em exposição, autonomia e impacto no negócio.",
        "VAL-30D-3": "Estabeleça um registro de achados com severidade, responsável e prazos de correção.",
        "VAL-60D-1": "Execute validação adversarial estruturada em todos os sistemas que atendem aos critérios de red team.",
        "VAL-60D-2": "Valide os limites de ação dos agentes, as restrições de ferramentas e o comportamento de contenção sob teste.",
        "VAL-60D-3": "Reteste os achados corrigidos e registre as evidências de encerramento.",
        "VAL-90D-1": "Automatize testes de regressão recorrentes para vulnerabilidades de IA já identificadas.",
        "VAL-90D-2": "Acione revalidação quando modelos, prompts, ferramentas ou provedores mudarem de forma relevante.",
        "VAL-90D-3": "Reporte a cobertura de validação e os achados de alta severidade em aberto à governança.",
      },
      kpis: {
        "KPI-VAL-1": "Sistemas de IA de alto risco com validação adversarial concluída",
        "KPI-VAL-2": "Achados corrigidos dentro do prazo acordado",
        "KPI-VAL-3": "Agentes com teste de limites de ação validado",
        "KPI-VAL-4": "Tempo mediano entre o achado e o reteste",
        "KPI-VAL-5": "Achados de validação de alta severidade em aberto",
      },
      dependencies: [
        "Classificação de risco para dimensionar a profundidade da validação.",
        "Ambientes de teste representativos do comportamento em produção.",
        "Capacidade de correção nas equipes de engenharia responsáveis.",
      ],
    },
    "REC-MON-001": {
      whyItMatters:
        "Se a telemetria não consegue diferenciar um usuário de um agente, ou um agente da ferramenta que ele invocou, as equipes de segurança não conseguem detectar o uso indevido nem reconstruir o que aconteceu.",
      tasks: {
        "MON-7D-1": "Defina a telemetria mínima de IA necessária: identidade, metadados de prompt/ação, chamadas de ferramentas e resultados.",
        "MON-7D-2": "Identifique quais plataformas de IA e agentes atualmente não geram telemetria de segurança utilizável.",
        "MON-7D-3": "Confirme as expectativas de retenção de logs para atividade de IA e agentes junto ao jurídico e à área de compliance.",
        "MON-30D-1": "Centralize os logs de IA e agentes na plataforma de monitoramento já existente.",
        "MON-30D-2": "Garanta que toda ação de agente possa ser atribuída a uma identidade e a um contexto de origem.",
        "MON-30D-3": "Estabeleça rastreabilidade de uma ação de negócio até o agente, ferramenta e prompt que a originaram.",
        "MON-60D-1": "Construa detecções para uso anômalo de IA, abuso de privilégio e exposição de dados sensíveis.",
        "MON-60D-2": "Construa detecções para invocação suspeita de ferramentas e comportamento inesperado de agentes.",
        "MON-60D-3": "Encaminhe as detecções de IA para o processo de triagem existente com um responsável de resposta definido.",
        "MON-90D-1": "Ajuste as detecções com base nos resultados de validação e red team para reduzir ruído.",
        "MON-90D-2": "Monitore a disponibilidade e os sinais de qualidade dos provedores junto com a telemetria de segurança.",
        "MON-90D-3": "Reporte as lacunas de cobertura de telemetria e a eficácia das detecções à governança.",
      },
      kpis: {
        "KPI-MON-1": "Sistemas de IA em produção emitindo o conjunto mínimo de telemetria",
        "KPI-MON-2": "Ações de agentes atribuíveis a uma identidade específica",
        "KPI-MON-3": "Detecções específicas de IA em produção",
        "KPI-MON-4": "Tempo médio para detectar um evento de segurança relacionado a IA",
        "KPI-MON-5": "Detecções de IA com responsável de resposta documentado",
      },
      dependencies: [
        "Capacidade de logging nas plataformas de IA e agentes em uso.",
        "Capacidade na plataforma de SIEM ou monitoramento existente.",
        "Acordo sobre retenção e restrições de privacidade.",
      ],
    },
    "REC-IR-001": {
      whyItMatters:
        "Incidentes de IA acontecem em velocidade de máquina, e interrupções de provedores afetam vários processos de negócio simultaneamente; autoridade de contenção pouco clara transforma um evento contido em uma disrupção de negócio.",
      tasks: {
        "IR-7D-1": "Identifique quais sistemas de IA e agentes causariam maior dano caso se comportassem de forma incorreta.",
        "IR-7D-2": "Confirme quem tem autoridade para conter ou suspender um sistema de IA fora do horário comercial.",
        "IR-7D-3": "Documente o caminho mais rápido hoje disponível para revogar credenciais e acesso a ferramentas de um agente.",
        "IR-7D-4": "Identifique processos de negócio críticos dependentes de um único provedor de IA.",
        "IR-30D-1": "Escreva playbooks de incidente de IA cobrindo uso indevido, manipulação, exposição de dados e mau funcionamento de agentes.",
        "IR-30D-2": "Defina os requisitos de preservação de evidências para prompts, ações, chamadas de ferramentas e versões de modelo.",
        "IR-30D-3": "Integre os cenários de IA ao modelo de classificação e escalonamento de incidentes já existente.",
        "IR-60D-1": "Teste a contenção em pelo menos um agente crítico e meça o tempo de revogação.",
        "IR-60D-2": "Defina e documente planos de contingência e operação manual para dependências críticas de IA.",
        "IR-60D-3": "Avalie o risco de concentração de provedores e alinhe com o negócio a exposição aceitável.",
        "IR-90D-1": "Execute um exercício simulado (tabletop) ou real para um cenário de incidente de IA de alto impacto.",
        "IR-90D-2": "Defina a autoridade e os critérios de recuperação para retornar um sistema de IA à operação.",
        "IR-90D-3": "Incorpore os achados do exercício aos playbooks, controles e registro de riscos.",
      },
      kpis: {
        "KPI-IR-1": "Sistemas de IA críticos cobertos por um playbook de incidente",
        "KPI-IR-2": "Tempo médio para conter ou revogar um agente em produção",
        "KPI-IR-3": "Dependências críticas de IA com plano de contingência testado",
        "KPI-IR-4": "Testes de contenção concluídos conforme o plano",
        "KPI-IR-5": "Achados em aberto de exercícios de incidente de IA",
      },
      dependencies: [
        "Inventário de agentes e mapeamento de credenciais.",
        "Processo de resposta a incidentes e autoridade de plantão já existentes.",
        "Definição do negócio sobre tempo de inatividade aceitável e contingência manual.",
      ],
    },
    "REC-MEAS-001": {
      whyItMatters:
        "Sem medição, o trabalho de segurança de IA perde ritmo silenciosamente: a cobertura se degrada, aceitações de risco expiram sem serem percebidas e a liderança perde a base para novos investimentos.",
      tasks: {
        "MEAS-7D-1": "Selecione um conjunto pequeno de KPIs e KRIs de segurança de IA que a liderança realmente vá utilizar.",
        "MEAS-7D-2": "Estabeleça linhas de base a partir dos resultados da avaliação atual.",
        "MEAS-7D-3": "Acorde a periodicidade de relato e o público executivo.",
        "MEAS-30D-1": "Defina fontes de dados e responsáveis para cada métrica, garantindo que o relato seja repetível.",
        "MEAS-30D-2": "Publique o primeiro relatório executivo com linha de base, meta e tendência.",
        "MEAS-30D-3": "Defina os gatilhos de reavaliação, como novos agentes, mudanças de provedor ou incidentes.",
        "MEAS-60D-1": "Acompanhe o progresso da correção em relação ao roadmap priorizado, e não ao volume de atividades.",
        "MEAS-60D-2": "Adicione indicadores antecedentes para crescimento de exposição, aumento de autonomia e degradação de cobertura.",
        "MEAS-60D-3": "Revise a qualidade das métricas e elimine aquelas que não influenciam decisões.",
        "MEAS-90D-1": "Execute uma reavaliação programada e compare a evolução da maturidade com as metas.",
        "MEAS-90D-2": "Governe o roadmap de melhoria com responsáveis nomeados e próximos passos com orçamento definido.",
        "MEAS-90D-3": "Reporte o risco residual e as opções de investimento à governança executiva.",
      },
      kpis: {
        "KPI-MEAS-1": "KPIs definidos reportados na periodicidade acordada",
        "KPI-MEAS-2": "Ações do roadmap concluídas conforme o plano",
        "KPI-MEAS-3": "Dias desde a última reavaliação completa de segurança de IA",
        "KPI-MEAS-4": "Ações estagnadas sem progresso no período de revisão",
        "KPI-MEAS-5": "Evolução da maturidade em relação ao perfil-alvo",
      },
      dependencies: [
        "Resultados da avaliação como linha de base de medição.",
        "Responsáveis por dados capazes de fornecer os insumos das métricas.",
        "Um fórum executivo que revise os relatórios.",
      ],
    },
  },
};
