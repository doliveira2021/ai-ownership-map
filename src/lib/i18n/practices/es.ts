import type { PracticesBundle } from "./types";

export const esPractices: PracticesBundle = {
  categories: {
    "risk-based-control-escalation": "Escalamiento de controles basado en riesgo",
    "pre-deployment-evaluation": "Evaluación previa al despliegue",
    "adversarial-validation": "Validación adversaria / Red teaming",
    "monitoring-detection-effectiveness": "Monitoreo continuo y eficacia de detección",
    "incident-preparedness": "Preparación y respuesta ante incidentes",
    "external-review": "Revisión externa / independiente",
    "high-stakes-inventory": "Inventario y rendición de cuentas de IA crítica",
    "safeguard-effectiveness": "Eficacia de las salvaguardas / mejora continua",
  "shared-responsibility": "Responsabilidad compartida y límites de rendición de cuentas",
    "lifecycle-security": "Ciclo de vida completo de seguridad de IA",
    "agent-authority-boundaries": "Autoridad y límites de acción de los agentes",
    "supply-chain-integrity": "Integridad de la cadena de suministro de IA y agentes",
  },
  entries: {
    "IP-RSP-001": {
      title: "Umbrales de capacidad que activan salvaguardas más estrictas",
      summary:
        "La política pública describe una gobernanza de riesgo proporcional a la capacidad y al riesgo, con umbrales de capacidad definidos que exigen salvaguardas más estrictas antes de ampliar el uso o desplegar.",
      implication:
        "Escale los requisitos de control a partir de una clasificación de riesgo documentada en lugar de aplicar controles uniformes, y defina los umbrales en los que un sistema de IA requiere aprobación y salvaguardas adicionales.",
    },
    "IP-RSP-002": {
      title: "Evaluación de capacidad antes de las decisiones de despliegue",
      summary:
        "La política pública describe la evaluación de la capacidad y de las salvaguardas necesarias antes de las decisiones de despliegue, con determinaciones documentadas.",
      implication:
        "Convierta las decisiones de seguridad de IA en una compuerta explícita de liberación: exija evaluación documentada de capacidad, exposición y salvaguardas antes de que el sistema llegue a producción.",
    },
    "IP-RSP-003": {
      title: "Salvaguardas de despliegue, controles de acceso y monitoreo",
      summary:
        "La política pública describe salvaguardas de despliegue que incluyen controles de acceso, monitoreo y clasificadores utilizados para detectar y restringir usos indebidos.",
      implication:
        "Combine el privilegio mínimo para sistemas y agentes de IA con cobertura de detección sobre el uso de IA, de modo que protección y monitoreo se refuercen mutuamente.",
    },
    "IP-RSP-004": {
      title: "Procedimientos de respuesta rápida cuando las salvaguardas resultan insuficientes",
      summary:
        "La política pública describe procedimientos de respuesta rápida cuando las salvaguardas resultan insuficientes, incluida la restricción del despliegue.",
      implication:
        "Defina de antemano quién puede restringir, contener o revocar un sistema o agente de IA y ensaye ese procedimiento antes de que un incidente obligue a decidir.",
    },
    "IP-RSP-005": {
      title: "Reportes de riesgo y mecanismos de revisión externa",
      summary:
        "La política pública describe reportes internos de riesgo (Risk Reports) y mecanismos de revisión externa y retroalimentación sobre las decisiones de seguridad.",
      implication:
        "Entregue a la dirección un reporte recurrente de riesgo de IA e incorpore una revisión independiente para las decisiones de IA de alto riesgo, para que la rendición de cuentas no quede dentro del equipo de entrega.",
    },
    "IP-FSR-001": {
      title: "Medición de la eficacia de detección",
      summary:
        "El roadmap público describe la medición continua de la eficacia de detección, incluyendo cobertura, tiempo de detección y exactitud.",
      implication:
        "Mida cobertura de detección, tiempo de detección y exactitud de la telemetría de IA como KPI, en vez de asumir que basta con tener registros.",
    },
    "IP-FSR-002": {
      title: "Ejercicios adversarios y procedimientos de respuesta documentados",
      summary:
        "El roadmap público describe ejercicios adversarios regulares, procedimientos de respuesta documentados para escenarios prioritarios e investigación y ejecución de playbooks asistidas por IA.",
      implication:
        "Programe ejercicios de incidentes de IA sobre sus escenarios de mayor prioridad y mantenga los playbooks vigentes, incluyendo cómo se usa la IA durante la investigación.",
    },
    "IP-FSR-003": {
      title: "Catalogación de los usos críticos de IA",
      summary:
        "El roadmap público describe la catalogación de los usos de IA de mayor criticidad como base para priorizar salvaguardas y monitoreo.",
      implication:
        "Mantenga el inventario orientado al riesgo: identifique qué sistemas y agentes de IA son críticos para concentrar controles y monitoreo donde el impacto al negocio es mayor.",
    },
    "IP-FSR-004": {
      title: "Red teaming y evaluación de la eficacia del monitoreo",
      summary:
        "El roadmap público describe red teaming, evaluación de la eficacia del monitoreo y salvaguardas que evolucionan a medida que avanza la capacidad.",
      implication:
        "Trate las pruebas adversarias y la revisión de eficacia de controles como actividades recurrentes ligadas al cambio de capacidad, no como pruebas puntuales previas al lanzamiento.",
    },
    "IP-GDM-001": {
      title: "Critical Capability Levels y evaluación de riesgo basada en evidencia",
      summary:
        "El framework público describe una evaluación de riesgo basada en evidencia y la identificación de umbrales de capacidad de riesgo severo, denominados Critical Capability Levels.",
      implication:
        "Defina los umbrales en los que la capacidad, la autonomía o los privilegios de la IA cambian su nivel de riesgo, y exija evidencia en lugar de supuestos al evaluarlo.",
    },
    "IP-GDM-002": {
      title: "Evaluación y mitigación a medida que cambia la capacidad",
      summary:
        "El framework público describe la evaluación de modelos frente a umbrales definidos y la aplicación de mitigaciones y salvaguardas más estrictas conforme cambia la capacidad del modelo.",
      implication:
        "Reevalúe los sistemas de IA cada vez que cambien el modelo, las herramientas, los privilegios o la autonomía, y ajuste las salvaguardas a la nueva capacidad en lugar de depender de revisiones en fechas fijas.",
    },
    "IP-MSFT-001": {
      title: "Responsabilidad compartida sobre cómo se aplica la IA",
      summary:
        "La guía pública describe un modelo de responsabilidad compartida en el que la organización que usa IA sigue siendo responsable del acceso, los datos, los prompts y las decisiones de seguridad y cumplimiento, aun cuando el proveedor ofrezca protecciones a nivel de plataforma.",
      implication:
        "Documente la frontera de responsabilidad entre proveedor y empresa para cada sistema de IA crítico, incluyendo propiedad de negocio, aceptación del riesgo residual, responsabilidad ante incidentes y rendición de cuentas sobre el acceso a datos.",
    },
    "IP-MSFT-002": {
      title: "Seguridad en todo el ciclo de vida de la IA",
      summary:
        "La guía pública describe una seguridad de IA que abarca identificar, proteger, detectar, responder, recuperar y gobernar, en lugar de detenerse en los controles preventivos.",
      implication:
        "Exija que todo sistema de IA crítico tenga cobertura de prevención, detección, respuesta, recuperación y gobierno, cada una con responsable designado y evidencia.",
    },
    "IP-MSFT-003": {
      title: "Descubrir el uso de IA antes de intentar protegerlo",
      summary:
        "La guía pública describe obtener visibilidad de las aplicaciones de IA que la organización usa y construye como requisito previo para protegerlas, incluidas las capacidades de IA integradas en SaaS y los agentes.",
      implication:
        "Establezca un descubrimiento continuo de aplicaciones de IA, modelos, agentes, IA integrada en SaaS e identidades relacionadas antes de confiar en métricas de cobertura de controles.",
    },
    "IP-MSFT-004": {
      title: "Mantener un AI Bill of Materials (AI BOM)",
      summary:
        "La guía pública describe mantener visibilidad sobre los componentes, datos y artefactos de IA de las aplicaciones, del código a la nube.",
      implication:
        "Para los sistemas de IA críticos, mantenga un AI BOM que cubra modelo y proveedor, librerías, instrucciones de sistema cuando corresponda, conjuntos de datos, almacenes vectoriales, agentes, herramientas y conectores, servidores MCP cuando existan, identidades, runtime y APIs externas.",
    },
    "IP-MSFT-005": {
      title: "Mínima agencia, no solo mínimo privilegio",
      summary:
        "La guía pública describe restringir no solo a qué puede acceder un agente, sino qué puede hacer de forma autónoma, con aprobación humana para acciones de alto impacto.",
      implication:
        "Defina un envolvente de acción documentado para los agentes críticos: acciones permitidas, acciones que requieren aprobación, acciones prohibidas, límites de transacción o impacto y reglas de escalamiento.",
    },
    "IP-MSFT-006": {
      title: "Gobernar la cadena de herramientas de los agentes",
      summary:
        "La guía pública describe tratar las herramientas de los agentes y sus descripciones o metadatos como dependencias de ejecución confiables cuyos cambios deben gobernarse.",
      implication:
        "Inventaríe las herramientas de agentes y dependencias MCP, asigne responsables y aplique control de cambios, revisión de integridad, límites de autorización, revocación y monitoreo cuando se agreguen o modifiquen capacidades de herramientas.",
    },
    "IP-MSFT-007": {
      title: "Tratar los argumentos de herramientas generados por IA como entrada no confiable",
      summary:
        "La guía pública describe validar en la frontera de ejecución los argumentos de funciones y herramientas producidos por un modelo, en lugar de confiar en ellos por haber sido generados por un modelo.",
      implication:
        "Valide cada invocación de herramienta generada por IA con validación de esquema, listas de permitidos, restricciones de parámetros, reglas de negocio, autorización independiente y límites de transacción cuando corresponda.",
    },
    "IP-MSFT-008": {
      title: "Circuit breakers y contención para agentes autónomos",
      summary:
        "La guía pública describe sistemas agénticos que soportan auditabilidad, control de acceso y capacidades de circuit breaker o contención.",
      implication:
        "Asegure que todo agente crítico soporte una contención probada: deshabilitar la identidad, revocar credenciales y accesos delegados, bloquear herramientas, detener el runtime o nuevas acciones, preservar logs y estado y permitir una recuperación controlada.",
    },
    "IP-MSFT-009": {
      title: "Reevaluar cuando cambien la capacidad o la autonomía",
      summary:
        "La guía pública describe requisitos de seguridad y gobierno que evolucionan a lo largo del ciclo de vida a medida que los agentes ganan autonomía, acceso a datos, herramientas o capacidad.",
      implication:
        "Active una reevaluación cuando cambien de forma material el modelo, las herramientas, las dependencias MCP, los privilegios, el acceso a datos, la exposición externa, la autonomía o la criticidad de negocio.",
    },
  },
};
