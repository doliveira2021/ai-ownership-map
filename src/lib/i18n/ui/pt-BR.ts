import type { UiDict } from "../types";
import type { UiKey } from "./en";

export const ptBrUi: Record<UiKey, string> = {
  "locale.label": "Idioma",
  "nav.overview": "Visão geral",
  "nav.asra": "Avaliação ASRA",
  "nav.results": "Resultados ASRA",
  "brand.title": "Segurança e Resiliência de IA",
  "footer.privacy":
    "Os dados da avaliação permanecem neste navegador. Não insira informações confidenciais ou sensíveis da empresa.",
  "demo.badge": "DADOS DEMONSTRATIVOS",
  "demo.badgeShort": "DEMO",
  "demo.bannerNote":
    "Perfil-piloto sintético — não representa a avaliação de uma organização real nem um benchmark.",

  "landing.eyebrow": "Modelo de Accountability e Responsabilidade em IA",
  "landing.title": "Accountability operacional para decisões, riscos e agentes de IA.",
  "landing.lead":
    "Esta avaliação não impõe um modelo RACI universal. Ela verifica se as responsabilidades de IA estão explicitamente atribuídas, compreendidas, documentadas, aplicadas de forma consistente, auditáveis e mantidas à medida que os sistemas de IA evoluem.",
  "landing.principleLabel": "Princípio —",
  "landing.principleBody":
    "Nenhum sistema de IA crítico deve existir sem um dono de negócio responsável. Nenhum agente de IA capaz de executar ações de negócio deve operar sem um patrocinador ou dono humano responsável.",
  "landing.ctaStart": "Iniciar avaliação",
  "landing.ctaResults": "Ver painel de resultados",
  "landing.heroAlt": "Rede de sistemas de IA convergindo para um único nó de dono responsável",
  "landing.questionsTitle": "As perguntas que realmente importam",
  "landing.questionsLead":
    "Governança não é um exercício de comitê. Estas perguntas orientam a pontuação, as recomendações e o roadmap.",
  "landing.q1": "Quem é o dono deste sistema de IA?",
  "landing.q2": "Quem aprova o que ele pode acessar?",
  "landing.q3": "Quem pode ampliar sua autonomia?",
  "landing.q4": "Quem aceitou o risco residual?",
  "landing.q5": "Quem tem autoridade para interrompê-lo?",
  "landing.q6": "Quem responde se ele agir de forma incorreta?",
  "landing.areasTitle": "Áreas de accountability avaliadas",
  "landing.rolesTitle": "Papéis de accountability de agentes",
  "landing.rolesLead":
    "Esses papéis podem se sobrepor conforme a estrutura organizacional — não precisam ser pessoas distintas.",
  "landing.domainsTitle": "Domínios da avaliação",
  "landing.questionCount": "{count} perguntas",

  "asra.eyebrow": "ASRA v2",
  "asra.title": "Avaliação de Segurança e Resiliência de IA",
  "asra.lead":
    "Avalie o estado operacional atual da segurança de IA em dez domínios. Selecione a descrição de maturidade que melhor reflete o escopo avaliado. Não insira informações confidenciais ou sensíveis da empresa.",
  "asra.reset": "Reiniciar ASRA",
  "asra.pilot.eyebrow": "Modo demonstração / piloto",
  "asra.pilot.title": "Carregar um perfil organizacional sintético",
  "asra.pilot.lead":
    "Use estes cenários para explorar a pontuação, as prioridades e a experiência de resultados. Perfis sintéticos são fixtures de teste, não benchmarks nem metas recomendadas.",
  "asra.pilot.exit": "Sair da demonstração",
  "asra.pilot.active": "DADOS DEMONSTRATIVOS ATIVOS",
  "asra.pilot.editNote":
    "Editar qualquer resposta ou valor de contexto de risco converte automaticamente isto em uma avaliação normal.",
  "asra.pilot.exposure": "Exposição",
  "asra.pilot.autonomy": "Autonomia",
  "asra.pilot.impact": "Impacto",
  "asra.pilot.dependency": "Dependência",
  "asra.context.eyebrow": "Contexto de risco",
  "asra.context.title": "Qual é a exposição e a dependência do negócio?",
  "asra.context.lead":
    "Estes valores de contexto não alteram a maturidade. Eles influenciam exposição, autonomia, resiliência e a ordem das prioridades recomendadas.",
  "asra.context.exposure": "Exposição de IA",
  "asra.context.autonomy": "Autonomia de IA",
  "asra.context.impact": "Impacto no negócio",
  "asra.context.dependency": "Dependência de IA",
  "asra.context.usesAgents": "O escopo avaliado utiliza agentes de IA?",
  "asra.context.usesGenAI": "O escopo avaliado utiliza IA generativa?",
  "asra.yes": "Sim",
  "asra.no": "Não",
  "asra.progress": "{answered} de {total} perguntas aplicáveis respondidas",
  "asra.resultsCta": "Resultados",
  "asra.agentSpecific": "Específica para agentes",
  "asra.genAiSpecific": "Específica para GenAI",
  "asra.na": "N/A",
  "asra.naButton": "Não aplicável ao escopo avaliado",

  "results.empty.title": "Ainda não há dados de avaliação ASRA",
  "results.empty.lead":
    "Responda pelo menos uma pergunta aplicável do ASRA para gerar o painel de pontuação.",
  "results.empty.cta": "Iniciar avaliação ASRA",
  "results.eyebrow": "Resultados ASRA",
  "results.title": "Postura de Segurança e Resiliência de IA",
  "results.answered": "{answered} de {total} perguntas aplicáveis respondidas.",
  "results.continue": "Continuar avaliação",
  "results.metric.maturity": "Maturidade de Segurança de IA",
  "results.metric.exposure": "Exposição de IA",
  "results.metric.autonomy": "Autonomia de IA",
  "results.metric.resilience": "Resiliência do Negócio",
  "results.metric.resilienceNote": "Prontidão ajustada pela dependência atual de IA.",
  "results.quadrant.eyebrow": "Exposição × Maturidade",
  "results.quadrant.note":
    "A prioridade considera a exposição do negócio e as lacunas de controle, não apenas o controle mais fraco.",
  "results.calc.summary": "Como isto foi calculado?",
  "results.calc.maturity":
    "Cada resposta aplicável de 0–5 é normalizada para 0–100, ponderada dentro de seu domínio e combinada pelos dez pesos de domínio. Perguntas não respondidas ou não aplicáveis são excluídas do denominador, em vez de pontuadas como zero.",
  "results.calc.exposure":
    "O indicador de exposição reflete o contexto atual de exposição da organização (0–100). Ele é mantido separado da maturidade para que uma organização madura ainda possa operar um parque de IA altamente exposto.",
  "results.calc.autonomy":
    "A autonomia é um índice de contexto independente de 0–5, que vai de nenhum uso de IA até operações autônomas, passando por uso generativo e consultivo. Ela eleva a prioridade de controles cuja falha se torna mais consequente conforme a IA ganha autoridade.",
  "results.calc.resilience":
    "A resiliência usa a maturidade do domínio Resposta a Incidentes e Resiliência do Negócio e eleva o padrão exigido quando a dependência do negócio em IA é alta.",
  "results.calc.priorityTitle": "Prioridade das recomendações",
  "results.calc.priorityFormula":
    "lacuna de controle × peso da pergunta × fator de exposição × fator de autonomia × fator de impacto no negócio × fator de resiliência",
  "results.calc.priorityNote":
    "Isso significa que a resposta de menor maturidade não é automaticamente a principal recomendação. Uma lacuna moderada pode ficar acima quando ocorre em um contexto altamente exposto, privilegiado, autônomo ou crítico para o negócio.",
  "results.calc.integrity":
    "Integridade da configuração: {questions} perguntas · {unique} IDs únicos · pesos de domínio {weights}% · {status}.",
  "results.calc.valid": "válida",
  "results.calc.invalid": "verificar configuração",
  "results.domains.eyebrow": "Maturidade por domínio",
  "results.domains.title": "Onde a maturidade é forte — e onde não é",
  "results.domains.notAssessed": "Não avaliado",
  "results.domains.answered":
    "{answered} de {total} perguntas aplicáveis respondidas · clique para inspecionar os fatores",
  "results.domains.noGaps": "Nenhuma lacuna de controle avaliada neste domínio.",
  "results.priorityShort": "Prioridade {score}",
  "results.currentMaturity": "Maturidade atual: {level} — {label}",
  "results.drill.eyebrow": "Detalhamento de risco",
  "results.drill.title": "O que determina a ordem de prioridade?",
  "results.drill.lead":
    "Estas são as lacunas de controle respondidas mais bem classificadas após aplicar os modificadores de exposição, autonomia, impacto no negócio e resiliência. Expanda um item para ver a descrição de maturidade selecionada e a rastreabilidade de frameworks.",
  "results.drill.priorityScore": "pontuação de prioridade",
  "results.drill.current": "Avaliação atual",
  "results.drill.gapLine":
    "Lacuna de controle {gap}% · lacuna ponderada {weighted} · horizonte padrão {horizon}",
  "results.drill.recommended": "Ação recomendada",
  "results.drill.owners": "Responsáveis sugeridos: {owners}",
  "results.drill.noRecommendation":
    "Nenhuma recomendação agrupada é acionada por esta pergunta no momento.",
  "results.drill.framework": "Rastreabilidade de frameworks",
  "results.drill.frameworkNote":
    "Alinhamento apenas de apoio; as referências não representam certificação, conformidade ou conclusão de auditoria.",
  "results.drill.noFramework": "Nenhum mapeamento estruturado de framework registrado.",
  "results.recs.eyebrow": "Recomendações priorizadas",
  "results.recs.title": "Principais ações conforme o contexto de risco",
  "results.recs.priorityScore": "Pontuação de prioridade {score}",
  "results.recs.risk": "Risco: ",
  "results.recs.action": "Ação: ",
  "results.recs.owners": "Responsáveis sugeridos",
  "results.recs.triggeredBy": "Acionada por",
  "results.recs.empty":
    "Nenhum gatilho relevante de recomendação foi gerado a partir das perguntas respondidas.",
  "results.roadmap.eyebrow": "Roadmap",
  "results.roadmap.title": "NOW / NEXT / SCALE",
  "results.roadmap.now": "0–90 dias",
  "results.roadmap.next": "3–6 meses",
  "results.roadmap.scale": "6–12 meses",
  "results.roadmap.empty": "Nenhuma ação acionada neste horizonte.",
  "results.method.eyebrow": "Nota metodológica",
  "results.method.body":
    "As pontuações são determinísticas e reprodutíveis. O alinhamento a frameworks é rastreabilidade de apoio, não certificação, aconselhamento jurídico, validação regulatória ou auditoria.",

  // Action Packs, technology options and Local Action Tracker export
  "pack.view":
    "Ver Action Pack",
  "pack.hide":
    "Ocultar Action Pack",
  "pack.eyebrow":
    "Action Pack",
  "pack.why":
    "Por que isso importa",
  "pack.priority":
    "Prioridade",
  "pack.targetMaturity":
    "Maturidade-alvo",
  "pack.horizon":
    "Horizonte sugerido",
  "pack.effort":
    "Esforço",
  "pack.businessImpact":
    "Impacto no negócio",
  "pack.urgency":
    "Urgência do controle",
  "pack.first7":
    "Ações imediatas — primeiros 7 dias",
  "pack.plan30":
    "Plano de 30 dias",
  "pack.plan60":
    "Plano de 60 dias",
  "pack.plan90":
    "Plano de 90 dias",
  "pack.owners":
    "Responsáveis sugeridos",
  "pack.dependencies":
    "Dependências / pré-requisitos",
  "pack.evidence":
    "Evidência de conclusão",
  "pack.kpis":
    "KPIs / KRIs",
  "pack.level.Low":
    "Baixo",
  "pack.level.Medium":
    "Médio",
  "pack.level.High":
    "Alto",
  "pack.urgency.Immediate":
    "Imediata",
  "pack.urgency.Near-term":
    "Curto prazo",
  "pack.urgency.Strategic":
    "Estratégica",
  "pack.tech.title":
    "Opções de tecnologia",
  "pack.tech.capabilities":
    "Capacidades a considerar",
  "pack.tech.categories":
    "Categorias de tecnologia",
  "pack.tech.providers":
    "Exemplos para avaliar",
  "pack.tech.disclaimer":
    "Os exemplos de tecnologia servem apenas como contexto de implementação. A menção não constitui endosso, ranking, certificação nem afirmação de que um produto específico atende à recomendação. Capacidades e ofertas mudam ao longo do tempo e devem ser validadas de forma independente.",
  "pack.tech.catalog":
    "Catálogo local de tecnologia {version} · última revisão {reviewed}",
  "pack.stack.title":
    "Seu stack",
  "pack.stack.use-existing":
    "Use o que você já tem",
  "pack.stack.extend":
    "Amplie o stack atual",
  "pack.stack.evaluate":
    "Avalie tecnologia especializada",
  "plan90.eyebrow":
    "Execução",
  "plan90.title":
    "Montar meu plano de ação de 90 dias",
  "plan90.lead":
    "As ações acionadas de maior prioridade consolidadas em uma visão trimestral. Tarefas sobrepostas aparecem uma única vez.",
  "plan90.p1":
    "Dias 0–30 — Estabelecer controle",
  "plan90.p2":
    "Dias 31–60 — Reduzir exposição",
  "plan90.p3":
    "Dias 61–90 — Validar e operacionalizar",
  "plan90.empty":
    "Nenhuma ação consolidada nesta fase.",
  "asra.platforms.title":
    "Plataformas de tecnologia estratégicas já em uso",
  "asra.platforms.lead":
    "Opcional e local a este navegador. Estas seleções não alteram maturidade, exposição nem pontuações de prioridade — apenas ajustam a orientação de tecnologia dentro dos Action Packs.",
  "asra.platforms.other":
    "Outro",
  "asra.platforms.count":
    "{count} selecionadas",
  "export.title":
    "Rastreador local de ações",
  "export.lead":
    "Baixe um pacote de acompanhamento neutro de plataforma, gerado no seu navegador a partir dos Action Packs acionados. Use com o agente ou runtime de sua preferência.",
  "export.button":
    "Exportar rastreador local de ações",
  "export.privacyTitle":
    "Modelo de privacidade",
  "export.privacy1":
    "A ASRA não recebe nem sincroniza as atualizações de execução contidas no rastreador exportado.",
  "export.privacy2":
    "Os arquivos baixados ficam sob seu controle. Nenhuma chamada de backend é feita para gerá-los.",
  "export.privacy3":
    "Se você usar a skill com um assistente de IA hospedado em nuvem, seus dados continuam sujeitos aos termos de tratamento de dados daquele provedor. Para confidencialidade estrita, execute em ambiente corporativo aprovado ou com modelo local/self-hosted.",
  "export.empty":
    "Responda mais perguntas para acionar Action Packs antes de exportar um rastreador.",
  "tracker.readme.title":
    "Rastreador local de ações ASRA",
  "tracker.readme.intro":
    "Este pacote transforma os resultados da sua avaliação ASRA em um plano de execução local. É neutro de plataforma, funciona com o agente ou runtime de sua escolha e não depende da ASRA após a exportação.",
  "tracker.readme.howTitle":
    "Como usar",
  "tracker.readme.how1":
    "Mantenha todos os arquivos juntos em uma pasta de trabalho controlada pela sua organização.",
  "tracker.readme.how2":
    "Carregue o SKILL.md no seu agente ou assistente como procedimento operacional.",
  "tracker.readme.how3":
    "Trate actions.json como a fonte local da verdade e atualize-o conforme o trabalho avança.",
  "tracker.readme.how4":
    "Use os modelos semanal, executivo e de evidências para o reporte recorrente.",
  "tracker.readme.how5":
    "Registre referências de evidência como caminhos locais ou IDs de chamado, em vez de enviar documentos.",
  "tracker.readme.filesTitle":
    "Arquivos",
  "tracker.readme.contextTitle":
    "Contexto da avaliação",
  "tracker.privacy.title":
    "Modelo de privacidade",
  "tracker.privacy.p1":
    "A ASRA não recebe, armazena nem sincroniza as atualizações de execução registradas neste pacote. Nada deste rastreador retorna à avaliação.",
  "tracker.privacy.p2":
    "Os arquivos exportados estão inteiramente sob seu controle e foram gerados no seu navegador.",
  "tracker.privacy.p3":
    "Se você usar estes arquivos com um assistente de IA hospedado em nuvem, os dados fornecidos continuam sujeitos aos termos de tratamento de dados daquele provedor. Para confidencialidade estrita, use um ambiente corporativo aprovado ou um runtime de modelo local/self-hosted.",
  "tracker.privacy.p4":
    "A responsabilidade por papel é o padrão. Nomes de funcionários não são necessários e não devem ser incluídos, salvo decisão da sua organização.",
  "tracker.skill.title":
    "Rastreador local de ações — procedimento operacional do agente",
  "tracker.skill.purpose":
    "Você apoia um líder de segurança na execução local de um plano de remediação de segurança de IA, acompanhando tarefas, evidências, KPIs/KRIs, bloqueios, responsáveis, prazos e progresso.",
  "tracker.skill.rulesTitle":
    "Regras",
  "tracker.skill.r1":
    "Trate actions.json como a única fonte local da verdade.",
  "tracker.skill.r2":
    "Nunca chame o site ou qualquer API da ASRA para sincronizar status de ações.",
  "tracker.skill.r3":
    "Nunca envie ou transmita evidências automaticamente.",
  "tracker.skill.r4":
    "Preserve os identificadores originais actionId, recommendationId e das tarefas para rastreabilidade.",
  "tracker.skill.r5":
    "Use somente estes status: Not Started, In Progress, Blocked, Complete, Accepted Risk, Deferred.",
  "tracker.skill.r6":
    "Mantenha papel responsável, data-alvo, percentual de conclusão, dependências, bloqueios e referências de evidência.",
  "tracker.skill.r7":
    "Mantenha valores de baseline, meta e atual de cada KPI/KRI, com a cadência de revisão.",
  "tracker.skill.r8":
    "Atualize lastReviewed e nextReview sempre que uma revisão for realizada.",
  "tracker.skill.r9":
    "Adote responsabilidade por papel como padrão e nunca exija nomes de funcionários.",
  "tracker.skill.r10":
    "Permita notas locais, IDs de chamados internos e links ou caminhos para evidências.",
  "tracker.skill.r11":
    "Baseie todas as recomendações apenas no estado local das ações deste pacote.",
  "tracker.skill.r12":
    "Nunca altere pontuações, prioridades ou conteúdo das recomendações da ASRA; eles são a linha de base da avaliação.",
  "tracker.skill.outputsTitle":
    "Resultados esperados",
  "tracker.skill.o1":
    "Resumos de revisão semanal usando weekly-review-template.md.",
  "tracker.skill.o2":
    "Relatórios executivos usando executive-status-template.md.",
  "tracker.skill.o3":
    "Lista de ações atrasadas e bloqueadas, com motivo e papel responsável.",
  "tracker.skill.o4":
    "Comparação dos valores reais de KPI/KRI com as metas.",
  "tracker.skill.o5":
    "Recomendações estagnadas e a próxima melhor ação para cada uma.",
  "tracker.weekly.title":
    "Revisão semanal",
  "tracker.weekly.s1":
    "Progresso desde a última revisão",
  "tracker.weekly.s2":
    "Ações atrasadas",
  "tracker.weekly.s3":
    "Ações bloqueadas e bloqueios",
  "tracker.weekly.s4":
    "Evolução de KPIs/KRIs",
  "tracker.weekly.s5":
    "Decisões necessárias",
  "tracker.weekly.s6":
    "Foco da próxima semana",
  "tracker.exec.title":
    "Relatório executivo de status",
  "tracker.exec.s1":
    "Resumo da postura",
  "tracker.exec.s2":
    "Principais riscos e exposição",
  "tracker.exec.s3":
    "Progresso do plano de 90 dias",
  "tracker.exec.s4":
    "Riscos aceitos e adiamentos",
  "tracker.exec.s5":
    "Painel de KPIs/KRIs",
  "tracker.exec.s6":
    "Decisões e investimento solicitados",
  "tracker.evidence.title":
    "Índice de evidências",
  "tracker.evidence.s1":
    "Referência de ação / tarefa",
  "tracker.evidence.s2":
    "Descrição da evidência",
  "tracker.evidence.s3":
    "Local ou ID de chamado",
  "tracker.evidence.s4":
    "Papel responsável",
  "tracker.evidence.s5":
    "Data de registro",
  "tracker.generated":
    "Gerado a partir de uma avaliação ASRA em {date}. Idioma: {locale}.",
} satisfies UiDict;
