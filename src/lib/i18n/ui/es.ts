import type { UiDict } from "../types";
import type { UiKey } from "./en";

export const esUi: Record<UiKey, string> = {
  "locale.label": "Idioma",
  "nav.overview": "Visión general",
  "nav.asra": "Evaluación ASRA",
  "nav.results": "Resultados ASRA",
  "brand.title": "Seguridad y Resiliencia de IA",
  "footer.privacy":
    "Los datos de la evaluación permanecen en este navegador. No ingrese información confidencial o sensible de la empresa.",
  "demo.badge": "DATOS DE DEMOSTRACIÓN",
  "demo.badgeShort": "DEMO",
  "demo.bannerNote":
    "Perfil piloto sintético: no corresponde a la evaluación de una organización real ni a un benchmark.",

  "landing.eyebrow": "Modelo de Responsabilidad y Rendición de Cuentas en IA",
  "landing.title": "Rendición de cuentas operativa para decisiones, riesgos y agentes de IA.",
  "landing.lead":
    "Esta evaluación no impone un modelo RACI universal. Determina si las responsabilidades de IA están explícitamente asignadas, comprendidas, documentadas, aplicadas de forma consistente, auditables y mantenidas a medida que evolucionan los sistemas de IA.",
  "landing.principleLabel": "Principio:",
  "landing.principleBody":
    "Ningún sistema de IA crítico debería existir sin un responsable de negocio. Ningún agente de IA capaz de ejecutar acciones de negocio debería operar sin un patrocinador o responsable humano.",
  "landing.ctaStart": "Iniciar evaluación",
  "landing.ctaResults": "Ver panel de resultados",
  "landing.heroAlt": "Red de sistemas de IA que converge en un único nodo responsable",
  "landing.questionsTitle": "Las preguntas decisivas",
  "landing.questionsLead":
    "La gobernanza no es un ejercicio de comité. Estas preguntas guían la puntuación, las recomendaciones y la hoja de ruta.",
  "landing.q1": "¿Quién es responsable de este sistema de IA?",
  "landing.q2": "¿Quién aprueba a qué puede acceder?",
  "landing.q3": "¿Quién puede aumentar su autonomía?",
  "landing.q4": "¿Quién aceptó su riesgo residual?",
  "landing.q5": "¿Quién tiene autoridad para detenerlo?",
  "landing.q6": "¿Quién responde si actúa de forma incorrecta?",
  "landing.areasTitle": "Áreas de responsabilidad evaluadas",
  "landing.rolesTitle": "Roles de responsabilidad sobre agentes",
  "landing.rolesLead":
    "Estos roles pueden superponerse según la estructura organizativa; no requieren ser personas distintas.",
  "landing.domainsTitle": "Dominios de la evaluación",
  "landing.questionCount": "{count} preguntas",

  "asra.eyebrow": "ASRA v2",
  "asra.title": "Evaluación de Seguridad y Resiliencia de IA",
  "asra.lead":
    "Evalúe el estado operativo actual de la seguridad de IA en diez dominios. Seleccione la descripción de madurez que mejor refleje el alcance evaluado. No ingrese información confidencial o sensible de la empresa.",
  "asra.reset": "Reiniciar ASRA",
  "asra.pilot.eyebrow": "Modo demostración / piloto",
  "asra.pilot.title": "Cargar un perfil organizativo sintético",
  "asra.pilot.lead":
    "Utilice estos escenarios para revisar la puntuación, las prioridades y la experiencia de resultados. Los perfiles sintéticos son casos de prueba, no benchmarks ni metas recomendadas.",
  "asra.pilot.exit": "Salir de la demostración",
  "asra.pilot.active": "DATOS DE DEMOSTRACIÓN ACTIVOS",
  "asra.pilot.editNote":
    "Editar cualquier respuesta o valor del contexto de riesgo convierte esto automáticamente en una evaluación normal.",
  "asra.pilot.exposure": "Exposición",
  "asra.pilot.autonomy": "Autonomía",
  "asra.pilot.impact": "Impacto",
  "asra.pilot.dependency": "Dependencia",
  "asra.context.eyebrow": "Contexto de riesgo",
  "asra.context.title": "¿Cuál es la exposición y la dependencia del negocio?",
  "asra.context.lead":
    "Estos valores de contexto no modifican la madurez. Influyen en la exposición, la autonomía, la resiliencia y el orden de las prioridades recomendadas.",
  "asra.context.exposure": "Exposición de IA",
  "asra.context.autonomy": "Autonomía de IA",
  "asra.context.impact": "Impacto en el negocio",
  "asra.context.dependency": "Dependencia de IA",
  "asra.context.usesAgents": "¿El alcance evaluado utiliza agentes de IA?",
  "asra.context.usesGenAI": "¿El alcance evaluado utiliza IA generativa?",
  "asra.yes": "Sí",
  "asra.no": "No",
  "asra.progress": "{answered} de {total} preguntas aplicables respondidas",
  "asra.resultsCta": "Resultados",
  "asra.agentSpecific": "Específica de agentes",
  "asra.genAiSpecific": "Específica de GenAI",
  "asra.na": "N/A",
  "asra.naButton": "No aplicable al alcance evaluado",

  "results.empty.title": "Aún no hay datos de evaluación ASRA",
  "results.empty.lead":
    "Responda al menos una pregunta aplicable de ASRA para generar el panel de puntuación.",
  "results.empty.cta": "Iniciar evaluación ASRA",
  "results.eyebrow": "Resultados ASRA",
  "results.title": "Postura de Seguridad y Resiliencia de IA",
  "results.answered": "{answered} de {total} preguntas aplicables respondidas.",
  "results.continue": "Continuar evaluación",
  "results.metric.maturity": "Madurez de Seguridad de IA",
  "results.metric.exposure": "Exposición de IA",
  "results.metric.autonomy": "Autonomía de IA",
  "results.metric.resilience": "Resiliencia del Negocio",
  "results.metric.resilienceNote": "Preparación ajustada por la dependencia actual de IA.",
  "results.quadrant.eyebrow": "Exposición × Madurez",
  "results.quadrant.note":
    "La prioridad se basa en la exposición del negocio y las brechas de control, no solo en el control más débil.",
  "results.calc.summary": "¿Cómo se calculó esto?",
  "results.calc.maturity":
    "Cada respuesta aplicable de 0–5 se normaliza a 0–100, se pondera dentro de su dominio y luego se combina con los diez pesos de dominio. Las preguntas sin responder y las no aplicables se excluyen del denominador en lugar de puntuarse como cero.",
  "results.calc.exposure":
    "La puntuación principal de exposición refleja el contexto actual de exposición de la organización (0–100). Se mantiene separada de la madurez para que una organización madura pueda seguir operando un entorno de IA altamente expuesto.",
  "results.calc.autonomy":
    "La autonomía es un índice de contexto independiente de 0–5 que va desde la ausencia de IA hasta las operaciones autónomas, pasando por el uso generativo y consultivo. Aumenta la prioridad de los controles cuya falla resulta más consecuente a medida que la IA gana autoridad.",
  "results.calc.resilience":
    "La resiliencia parte de la madurez del dominio Respuesta a Incidentes y Resiliencia del Negocio y eleva el estándar exigido cuando la dependencia del negocio respecto de la IA es alta.",
  "results.calc.priorityTitle": "Prioridad de las recomendaciones",
  "results.calc.priorityFormula":
    "brecha de control × peso de la pregunta × factor de exposición × factor de autonomía × factor de impacto en el negocio × factor de resiliencia",
  "results.calc.priorityNote":
    "Esto significa que la respuesta de menor madurez no es automáticamente la recomendación principal. Una brecha moderada puede ubicarse más arriba cuando ocurre en un contexto altamente expuesto, privilegiado, autónomo o crítico para el negocio.",
  "results.calc.integrity":
    "Integridad de la configuración: {questions} preguntas · {unique} IDs únicos · pesos de dominio {weights}% · {status}.",
  "results.calc.valid": "válida",
  "results.calc.invalid": "revisar configuración",
  "results.domains.eyebrow": "Madurez por dominio",
  "results.domains.title": "Dónde la madurez es sólida y dónde no",
  "results.domains.notAssessed": "No evaluado",
  "results.domains.answered":
    "{answered} de {total} preguntas aplicables respondidas · haga clic para inspeccionar los factores",
  "results.domains.noGaps": "No hay brechas de control evaluadas en este dominio.",
  "results.priorityShort": "Prioridad {score}",
  "results.currentMaturity": "Madurez actual: {level} — {label}",
  "results.drill.eyebrow": "Análisis detallado de riesgo",
  "results.drill.title": "¿Qué determina el orden de prioridad?",
  "results.drill.lead":
    "Estas son las brechas de control respondidas mejor clasificadas tras aplicar los modificadores de exposición, autonomía, impacto en el negocio y resiliencia. Expanda un elemento para ver la descripción de madurez seleccionada y la trazabilidad de marcos de referencia.",
  "results.drill.priorityScore": "puntuación de prioridad",
  "results.drill.current": "Evaluación actual",
  "results.drill.gapLine":
    "Brecha de control {gap}% · brecha ponderada {weighted} · horizonte por defecto {horizon}",
  "results.drill.recommended": "Acción recomendada",
  "results.drill.owners": "Responsables sugeridos: {owners}",
  "results.drill.noRecommendation":
    "Actualmente ninguna recomendación agrupada se activa por esta pregunta.",
  "results.drill.framework": "Trazabilidad de marcos de referencia",
  "results.drill.frameworkNote":
    "Alineación de apoyo únicamente; las referencias no representan certificación, cumplimiento ni una conclusión de auditoría.",
  "results.drill.noFramework": "No se registró un mapeo estructurado de marcos de referencia.",
  "results.recs.eyebrow": "Recomendaciones priorizadas",
  "results.recs.title": "Principales acciones según el contexto de riesgo",
  "results.recs.priorityScore": "Puntuación de prioridad {score}",
  "results.recs.risk": "Riesgo: ",
  "results.recs.action": "Acción: ",
  "results.recs.owners": "Responsables sugeridos",
  "results.recs.triggeredBy": "Activada por",
  "results.recs.empty":
    "No se generaron activadores relevantes de recomendación a partir de las preguntas respondidas.",
  "results.roadmap.eyebrow": "Hoja de ruta",
  "results.roadmap.title": "NOW / NEXT / SCALE",
  "results.roadmap.now": "0–90 días",
  "results.roadmap.next": "3–6 meses",
  "results.roadmap.scale": "6–12 meses",
  "results.roadmap.empty": "No hay acciones activadas en este horizonte.",
  "results.method.eyebrow": "Nota metodológica",
  "results.method.body":
    "Las puntuaciones son deterministas y reproducibles. La alineación con marcos de referencia es trazabilidad de apoyo, no certificación, asesoramiento legal, validación regulatoria ni auditoría.",
} satisfies UiDict;
