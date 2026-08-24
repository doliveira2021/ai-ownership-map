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

  // Action Packs, technology options and Local Action Tracker export
  "pack.view":
    "Ver Action Pack",
  "pack.hide":
    "Ocultar Action Pack",
  "pack.eyebrow":
    "Action Pack",
  "pack.why":
    "Por qué es relevante",
  "pack.priority":
    "Prioridad",
  "pack.targetMaturity":
    "Madurez objetivo",
  "pack.horizon":
    "Horizonte sugerido",
  "pack.effort":
    "Esfuerzo",
  "pack.businessImpact":
    "Impacto en el negocio",
  "pack.urgency":
    "Urgencia del control",
  "pack.first7":
    "Acciones inmediatas — primeros 7 días",
  "pack.plan30":
    "Plan de 30 días",
  "pack.plan60":
    "Plan de 60 días",
  "pack.plan90":
    "Plan de 90 días",
  "pack.owners":
    "Responsables sugeridos",
  "pack.dependencies":
    "Dependencias / prerrequisitos",
  "pack.evidence":
    "Evidencia de cumplimiento",
  "pack.kpis":
    "KPIs / KRIs",
  "pack.level.Low":
    "Bajo",
  "pack.level.Medium":
    "Medio",
  "pack.level.High":
    "Alto",
  "pack.urgency.Immediate":
    "Inmediata",
  "pack.urgency.Near-term":
    "Corto plazo",
  "pack.urgency.Strategic":
    "Estratégica",
  "pack.tech.title":
    "Opciones de tecnología",
  "pack.tech.capabilities":
    "Capacidades a considerar",
  "pack.tech.categories":
    "Categorías de tecnología",
  "pack.tech.providers":
    "Ejemplos para evaluar",
  "pack.tech.disclaimer":
    "Los ejemplos de tecnología se ofrecen únicamente como contexto de implementación. Su inclusión no constituye respaldo, ranking, certificación ni una afirmación de que un producto específico satisface la recomendación. Las capacidades y las ofertas cambian con el tiempo y deben validarse de forma independiente.",
  "pack.tech.catalog":
    "Catálogo local de tecnología {version} · última revisión {reviewed}",
  "pack.stack.title":
    "Su stack",
  "pack.stack.use-existing":
    "Aproveche lo que ya tiene",
  "pack.stack.extend":
    "Amplíe su stack actual",
  "pack.stack.evaluate":
    "Evalúe tecnología especializada",
  "plan90.eyebrow":
    "Ejecución",
  "plan90.title":
    "Construir mi plan de acción de 90 días",
  "plan90.lead":
    "Las acciones activadas de mayor prioridad consolidadas en una vista trimestral. Las tareas que se solapan aparecen una sola vez.",
  "plan90.p1":
    "Días 0–30 — Establecer control",
  "plan90.p2":
    "Días 31–60 — Reducir exposición",
  "plan90.p3":
    "Días 61–90 — Validar y operacionalizar",
  "plan90.empty":
    "No hay acciones consolidadas en esta fase.",
  "asra.platforms.title":
    "Plataformas tecnológicas estratégicas ya en uso",
  "asra.platforms.lead":
    "Opcional y local a este navegador. Estas selecciones nunca modifican la madurez, la exposición ni las puntuaciones de prioridad: solo ajustan la orientación tecnológica dentro de los Action Packs.",
  "asra.platforms.other":
    "Otra",
  "asra.platforms.count":
    "{count} seleccionadas",
  "export.title":
    "Rastreador local de acciones",
  "export.lead":
    "Descargue un paquete de seguimiento neutral respecto de plataformas, generado en su navegador a partir de los Action Packs activados. Úselo con el agente o runtime que prefiera.",
  "export.button":
    "Exportar rastreador local de acciones",
  "export.privacyTitle":
    "Modelo de privacidad",
  "export.privacy1":
    "ASRA no recibe ni sincroniza las actualizaciones de ejecución contenidas en el rastreador exportado.",
  "export.privacy2":
    "Los archivos descargados quedan bajo su control. No se realiza ninguna llamada de backend para generarlos.",
  "export.privacy3":
    "Si utiliza la skill con un asistente de IA alojado en la nube, sus datos siguen sujetos a los términos de tratamiento de datos de ese proveedor. Para confidencialidad estricta, ejecútela en un entorno corporativo aprobado o con un modelo local/self-hosted.",
  "export.empty":
    "Responda más preguntas para activar Action Packs antes de exportar un rastreador.",
  "tracker.readme.title":
    "Rastreador local de acciones ASRA",
  "tracker.readme.intro":
    "Este paquete convierte los resultados de su evaluación ASRA en un plan de ejecución local. Es neutral respecto de plataformas, funciona con el agente o runtime que elija y no requiere ASRA después de la exportación.",
  "tracker.readme.howTitle":
    "Cómo usarlo",
  "tracker.readme.how1":
    "Mantenga todos los archivos juntos en una carpeta de trabajo controlada por su organización.",
  "tracker.readme.how2":
    "Cargue SKILL.md en su agente o asistente como procedimiento operativo.",
  "tracker.readme.how3":
    "Trate actions.json como la fuente local de verdad y actualícelo a medida que avanza el trabajo.",
  "tracker.readme.how4":
    "Use las plantillas semanal, ejecutiva y de evidencias para el reporte recurrente.",
  "tracker.readme.how5":
    "Registre las referencias de evidencia como rutas locales o identificadores de ticket, en lugar de cargar documentos.",
  "tracker.readme.filesTitle":
    "Archivos",
  "tracker.readme.contextTitle":
    "Contexto de la evaluación",
  "tracker.privacy.title":
    "Modelo de privacidad",
  "tracker.privacy.p1":
    "ASRA no recibe, almacena ni sincroniza las actualizaciones de ejecución que registre en este paquete. Nada de este rastreador vuelve a la evaluación.",
  "tracker.privacy.p2":
    "Los archivos exportados están completamente bajo su control y se generaron en su navegador.",
  "tracker.privacy.p3":
    "Si utiliza estos archivos con un asistente de IA alojado en la nube, los datos que proporcione siguen sujetos a los términos de tratamiento de datos de ese proveedor. Para confidencialidad estricta, use un entorno corporativo aprobado o un runtime de modelo local/self-hosted.",
  "tracker.privacy.p4":
    "La responsabilidad por rol es el valor por defecto. No se requieren nombres de empleados y no deberían agregarse salvo decisión de su organización.",
  "tracker.skill.title":
    "Rastreador local de acciones — procedimiento operativo del agente",
  "tracker.skill.purpose":
    "Usted ayuda a un líder de seguridad a ejecutar localmente un plan de remediación de seguridad de IA, dando seguimiento a tareas, evidencias, KPIs/KRIs, bloqueos, responsables, fechas y avance.",
  "tracker.skill.rulesTitle":
    "Reglas",
  "tracker.skill.r1":
    "Trate actions.json como la única fuente local de verdad.",
  "tracker.skill.r2":
    "Nunca llame al sitio ni a ninguna API de ASRA para sincronizar el estado de las acciones.",
  "tracker.skill.r3":
    "Nunca cargue ni transmita evidencia de forma automática.",
  "tracker.skill.r4":
    "Preserve los identificadores originales actionId, recommendationId y de tareas para trazabilidad.",
  "tracker.skill.r5":
    "Use únicamente estos estados: Not Started, In Progress, Blocked, Complete, Accepted Risk, Deferred.",
  "tracker.skill.r6":
    "Mantenga rol responsable, fecha objetivo, porcentaje de avance, dependencias, bloqueos y referencias de evidencia.",
  "tracker.skill.r7":
    "Mantenga los valores de baseline, objetivo y actual de cada KPI/KRI, con su cadencia de revisión.",
  "tracker.skill.r8":
    "Actualice lastReviewed y nextReview cada vez que se realice una revisión.",
  "tracker.skill.r9":
    "Adopte la responsabilidad por rol de forma predeterminada y nunca exija nombres de empleados.",
  "tracker.skill.r10":
    "Permita notas locales, identificadores de tickets internos y enlaces o rutas a la evidencia.",
  "tracker.skill.r11":
    "Base todas sus recomendaciones únicamente en el estado local de las acciones de este paquete.",
  "tracker.skill.r12":
    "Nunca modifique las puntuaciones, prioridades ni el contenido de las recomendaciones de ASRA; son la línea base de la evaluación.",
  "tracker.skill.outputsTitle":
    "Resultados esperados",
  "tracker.skill.o1":
    "Resúmenes de revisión semanal con weekly-review-template.md.",
  "tracker.skill.o2":
    "Informes ejecutivos de estado con executive-status-template.md.",
  "tracker.skill.o3":
    "Lista de acciones vencidas y bloqueadas, con motivo y rol responsable.",
  "tracker.skill.o4":
    "Comparación de los valores reales de KPI/KRI frente a sus objetivos.",
  "tracker.skill.o5":
    "Recomendaciones estancadas y la siguiente mejor acción para cada una.",
  "tracker.weekly.title":
    "Revisión semanal",
  "tracker.weekly.s1":
    "Avance desde la última revisión",
  "tracker.weekly.s2":
    "Acciones vencidas",
  "tracker.weekly.s3":
    "Acciones bloqueadas y bloqueos",
  "tracker.weekly.s4":
    "Evolución de KPIs/KRIs",
  "tracker.weekly.s5":
    "Decisiones necesarias",
  "tracker.weekly.s6":
    "Foco de la próxima semana",
  "tracker.exec.title":
    "Informe ejecutivo de estado",
  "tracker.exec.s1":
    "Resumen de postura",
  "tracker.exec.s2":
    "Principales riesgos y exposición",
  "tracker.exec.s3":
    "Avance del plan de 90 días",
  "tracker.exec.s4":
    "Riesgos aceptados y aplazamientos",
  "tracker.exec.s5":
    "Tablero de KPIs/KRIs",
  "tracker.exec.s6":
    "Decisiones e inversión solicitadas",
  "tracker.evidence.title":
    "Índice de evidencias",
  "tracker.evidence.s1":
    "Referencia de acción / tarea",
  "tracker.evidence.s2":
    "Descripción de la evidencia",
  "tracker.evidence.s3":
    "Ubicación local o ID de ticket",
  "tracker.evidence.s4":
    "Rol responsable",
  "tracker.evidence.s5":
    "Fecha de registro",
  "tracker.generated":
    "Generado a partir de una evaluación ASRA el {date}. Idioma: {locale}.",
} satisfies UiDict;
