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
} satisfies UiDict;
