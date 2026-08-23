import type { DomainContentDict, QuestionContentDict } from "../../types";

export const domains: DomainContentDict = {
  discovery: {
    short: "Descubrimiento",
    name: "Descubrimiento e Inventario de IA",
    intent: "Conocer el patrimonio de IA, incluyendo IA embebida, modelos, agentes, herramientas, dependencias y flujos de datos.",
  },
  risk: {
    short: "Riesgo",
    name: "Clasificación de Riesgo e Impacto en el Negocio",
    intent: "Clasificar la IA según la criticidad para el negocio, datos sensibles, autonomía, privilegios, exposición y supervisión humana.",
  },
  governance: {
    short: "Gobernanza",
    name: "Gobernanza, Rendición de Cuentas y Autoridad de Decisión",
    intent: "Hacer explícitos y operativos la propiedad, el patrocinio, las aprobaciones, la aceptación de riesgos y la autoridad ante incidentes.",
  },
  "threat-modeling": {
    short: "Modelado de Amenazas",
    name: "Modelado de Amenazas de IA",
    intent: "Modelar amenazas específicas de GenAI, modelos, datos, agentes, herramientas y cadenas de suministro de IA.",
  },
  "secure-sdlc": {
    short: "SDLC Seguro de IA",
    name: "Ciclo de Vida de Desarrollo Seguro de IA",
    intent: "Incorporar la seguridad en las fases de diseño, construcción, pruebas, despliegue, operación y retiro.",
  },
  protection: {
    short: "Protección",
    name: "Controles de Protección",
    intent: "Proteger identidad, datos, modelos, aplicaciones, agentes, infraestructura y dependencias de la cadena de suministro.",
  },
  validation: {
    short: "Validación",
    name: "Validación y Red Teaming",
    intent: "Poner a prueba los supuestos mediante pruebas adversarias, red teaming de IA y validación de la resiliencia.",
  },
  monitoring: {
    short: "Monitoreo",
    name: "Monitoreo y Detección",
    intent: "Observar la actividad de la IA, distinguir las acciones autónomas y detectar abuso, cambios y comportamientos anómalos.",
  },
  "incident-resilience": {
    short: "Respuesta y Resiliencia",
    name: "Respuesta a Incidentes y Resiliencia del Negocio",
    intent: "Contener incidentes específicos de IA y mantener en operación los procesos críticos del negocio ante fallas de IA e interrupciones de proveedores.",
  },
  measurement: {
    short: "Medición",
    name: "Medición y Mejora Continua",
    intent: "Medir el riesgo y la madurez de la IA, reportar la exposición material y mejorar continuamente los controles.",
  },
};

export const questions: QuestionContentDict = {
  "DISC-001": { title: "Inventario Empresarial de IA", prompt: "¿La organización mantiene un inventario centralizado de sistemas de IA, modelos, aplicaciones habilitadas con IA y servicios de IA?" },
  "DISC-002": { title: "Visibilidad de Shadow AI", prompt: "¿Puede la organización identificar los servicios y herramientas de IA utilizados fuera de los procesos formalmente aprobados?" },
  "DISC-003": { title: "IA Embebida en SaaS", prompt: "¿Puede la organización identificar las capacidades de IA embebidas en aplicaciones SaaS y empresariales de terceros?" },
  "DISC-004": { title: "Visibilidad de Modelos y Versiones", prompt: "¿Se identifican y rastrean los modelos y las versiones materiales de modelos utilizados por los sistemas de IA críticos?" },
  "DISC-005": { title: "Inventario de Agentes y Herramientas", prompt: "¿La organización mantiene visibilidad de los agentes de IA en producción y de las herramientas, API o sistemas que pueden invocar?" },
  "DISC-006": { title: "Visibilidad de Flujos de Datos de IA", prompt: "¿Puede la organización identificar las principales fuentes de datos, fuentes de recuperación y destinos utilizados por las cargas de trabajo de IA críticas?" },

  "RISK-001": { title: "Criticidad de Negocio de la IA", prompt: "¿Los sistemas de IA se clasifican según su criticidad para el negocio y el impacto operativo potencial?" },
  "RISK-002": { title: "Sensibilidad de los Datos y Riesgo de IA", prompt: "¿La clasificación de riesgo de IA se ve influenciada por la sensibilidad de los datos a los que el sistema puede acceder, generar o exponer?" },
  "RISK-003": { title: "Riesgo de Autonomía y Privilegios", prompt: "¿La clasificación de riesgo de IA considera la autonomía, los privilegios y la capacidad de ejecutar acciones de negocio?" },
  "RISK-004": { title: "Impacto Externo y Regulatorio", prompt: "¿La clasificación de riesgo de IA contempla la exposición de clientes, las decisiones reguladas y el impacto legal o regulatorio?" },
  "RISK-005": { title: "Supervisión Humana y Consecuencia", prompt: "¿Se evalúa la adecuación de la supervisión humana en relación con la consecuencia de una acción de IA incorrecta o insegura?" },

  "GOV-001": { title: "Modelo Operativo de Gobernanza de IA", prompt: "¿Existe un modelo operativo definido para la gobernanza de IA y la gobernanza de seguridad de la IA?" },
  "GOV-002": { title: "Responsabilidades de IA Definidas", prompt: "¿Están formalmente asignadas las responsabilidades sobre riesgo de IA, seguridad, acceso a datos, aprobación de modelos, monitoreo, incidentes y gestión del ciclo de vida?" },
  "GOV-003": { title: "Propiedad de Negocio de la IA Crítica", prompt: "¿Todo sistema de IA crítico en producción cuenta con un propietario de negocio responsable?" },
  "GOV-004": { title: "Patrocinio de Agentes", prompt: "¿Todo agente de IA en producción capaz de ejecutar acciones de negocio cuenta con un patrocinador o propietario humano responsable?" },
  "GOV-005": { title: "Autoridad de Decisión sobre Autonomía", prompt: "¿Está explícitamente asignada la autoridad para aprobar aumentos en la autonomía o atribuciones de la IA?" },
  "GOV-006": { title: "Aceptación de Riesgo Residual", prompt: "¿Puede la organización identificar quién acepta formalmente el riesgo residual en los despliegues de IA de alto riesgo?" },
  "GOV-007": { title: "Gobernanza de IA de Terceros", prompt: "¿Los servicios de IA de terceros, la IA embebida y los modelos externos están sujetos a una revisión de seguridad y riesgo definida antes de su adopción o de un cambio material?" },
  "GOV-008": { title: "Autoridad de Decisión ante Incidentes de IA", prompt: "¿Está claramente definida la autoridad para deshabilitar, contener, investigar y restaurar sistemas de IA durante un incidente?" },

  "THRT-001": { title: "Modelado de Amenazas Específico de IA", prompt: "¿Las amenazas específicas de IA se incorporan al modelado de amenazas de arquitectura y aplicaciones?" },
  "THRT-002": { title: "Manipulación de Prompts y Contexto", prompt: "¿El modelado de amenazas aborda la inyección de prompts directa e indirecta, la manipulación de contexto y el contenido recuperado malicioso?" },
  "THRT-003": { title: "Manipulación de Modelos y Datos", prompt: "¿El modelado de amenazas aborda el envenenamiento de datos, el envenenamiento de RAG, la manipulación de modelos y el robo o extracción de modelos cuando corresponde?" },
  "THRT-004": { title: "Abuso de Agentes y Herramientas", prompt: "¿El modelado de amenazas aborda la agencia excesiva, el abuso de herramientas, el mal uso de credenciales, la suplantación de agentes y el abuso de la delegación?" },
  "THRT-005": { title: "Amenazas en la Cadena de Suministro de IA", prompt: "¿El modelado de amenazas incluye modelos, bibliotecas, conjuntos de datos, plugins, conectores, endpoints de MCP/herramientas y dependencias de IA de terceros?" },

  "SDLC-001": { title: "Seguridad de IA desde el Diseño", prompt: "¿Los requisitos de seguridad y riesgo de la IA se definen durante el diseño antes de que comience la implementación?" },
  "SDLC-002": { title: "Controles de Dependencias y Procedencia de IA", prompt: "¿Se revisan la procedencia e integridad de los modelos, conjuntos de datos, bibliotecas y dependencias materiales de IA durante el desarrollo?" },
  "SDLC-003": { title: "Seguridad de Secretos e Identidades No Humanas", prompt: "¿Se gobiernan las credenciales, secretos e identidades no humanas utilizadas por las cargas de trabajo de IA a lo largo del desarrollo y despliegue?" },
  "SDLC-004": { title: "Validación de Seguridad Previa a Producción", prompt: "¿Se exigen pruebas de seguridad específicas de IA aplicables antes del despliegue en producción?" },
  "SDLC-005": { title: "Revisión de Despliegue y Permisos", prompt: "¿Se revisan los permisos, el acceso a datos, las herramientas, las configuraciones y la autonomía de la IA antes del despliegue en producción?" },
  "SDLC-006": { title: "Retiro Seguro", prompt: "¿Los sistemas de IA, modelos, agentes, identidades, credenciales y accesos a datos se retiran formalmente cuando ya no son necesarios?" },

  "PROT-001": { title: "Propiedad de las Identidades de IA", prompt: "¿Las identidades utilizadas por las aplicaciones y agentes de IA son identificables de forma única, tienen propietario y se gestionan a lo largo de su ciclo de vida?" },
  "PROT-002": { title: "Mínimo Privilegio para IA y Agentes", prompt: "¿Las aplicaciones y agentes de IA se restringen a los privilegios mínimos requeridos para su propósito aprobado?" },
  "PROT-003": { title: "Controles de Acceso a Datos Sensibles", prompt: "¿El acceso de la IA a datos sensibles y fuentes de recuperación se gobierna conforme a las políticas existentes de clasificación de datos y autorización?" },
  "PROT-004": { title: "Protección de Datos de Entrada y Salida de IA", prompt: "¿Se aplican controles para reducir la divulgación inapropiada de datos sensibles a través de las entradas, salidas y contenido generado por la IA?" },
  "PROT-005": { title: "Seguridad de RAG y Recuperación", prompt: "¿Los permisos, la procedencia y la integridad de RAG y las fuentes de recuperación están protegidos contra accesos no autorizados o manipulación?" },
  "PROT-006": { title: "Integridad y Aprobación de Modelos", prompt: "¿Los modelos críticos están sujetos a controles de procedencia, integridad, versión y aprobación?" },
  "PROT-007": { title: "Barreras de Protección de las Aplicaciones de IA", prompt: "¿Se implementan controles adecuados de entrada, salida, aislamiento y ejecución para las aplicaciones habilitadas con IA?" },
  "PROT-008": { title: "Autorización de Herramientas de Agentes", prompt: "¿Las herramientas, API y sistemas que un agente de IA puede invocar están explícitamente autorizados y restringidos?" },
  "PROT-009": { title: "Límites de Acción de Agentes y Capacidad de Bloqueo", prompt: "¿Se definen límites de acción, límites transaccionales, requisitos de aprobación y capacidades de desactivación rápida para agentes autónomos o semiautónomos?" },
  "PROT-010": { title: "Controles de la Cadena de Suministro de IA", prompt: "¿Los modelos, bibliotecas, conjuntos de datos, conectores y endpoints de herramientas de terceros están sujetos a controles de seguridad, procedencia y cambio?" },

  "VAL-001": { title: "Validación Adversaria de IA", prompt: "¿Los sistemas de IA críticos se prueban frente a comportamientos adversarios antes de producción?" },
  "VAL-002": { title: "Pruebas de Inyección de Prompts y Fuga de Datos", prompt: "¿Los sistemas aplicables se prueban frente a la inyección de prompts, la inyección indirecta y la fuga de datos sensibles?" },
  "VAL-003": { title: "Pruebas de Abuso y Privilegios de Agentes", prompt: "¿Los agentes en producción se prueban frente a la agencia excesiva, el abuso de herramientas, la escalación de privilegios, la delegación insegura y las acciones no autorizadas?" },
  "VAL-004": { title: "Red Teaming de IA", prompt: "¿La organización realiza red teaming de IA estructurado para los sistemas cuyo riesgo lo justifica?" },
  "VAL-005": { title: "Pruebas de Resiliencia y Modos de Falla", prompt: "¿Los sistemas de IA críticos se prueban frente a escenarios de interrupción, degradación, comportamiento inseguro y falla de dependencias?" },

  "MON-001": { title: "Telemetría de Seguridad de IA", prompt: "¿La organización recopila telemetría relevante para la seguridad de las aplicaciones, modelos, agentes y herramientas de IA críticos?" },
  "MON-002": { title: "Trazabilidad de las Acciones de los Agentes", prompt: "¿Puede la organización reconstruir lo que hizo un agente de IA en producción durante una investigación de seguridad?" },
  "MON-003": { title: "Atribución de Acciones Humanas vs. de IA", prompt: "¿Las operaciones de seguridad pueden distinguir entre acciones del usuario, recomendaciones de la IA y acciones autónomas de la IA?" },
  "MON-004": { title: "Detección de Anomalías y Abuso de IA", prompt: "¿Se definen detecciones para el uso anómalo de IA, la exposición de datos sensibles, el abuso de privilegios, el uso sospechoso de herramientas o el comportamiento anómalo de agentes?" },
  "MON-005": { title: "Monitoreo de Cambios en Modelos y Dependencias", prompt: "¿Se monitorean los cambios materiales en modelos, proveedores de IA, herramientas, permisos o dependencias por su impacto en la seguridad?" },

  "IR-001": { title: "Manuales de Incidentes Específicos de IA", prompt: "¿La respuesta a incidentes incluye manuales de actuación para escenarios específicos de IA?" },
  "IR-002": { title: "Contención de Agentes", prompt: "¿Puede la organización deshabilitar o aislar rápidamente a un agente de IA comprometido o inseguro y revocar sus credenciales y acceso a herramientas?" },
  "IR-003": { title: "Preservación de Evidencia e Investigación de IA", prompt: "¿Puede la organización preservar los prompts, salidas, acciones de agentes, identidades, llamadas a herramientas e información de modelo/contexto relevantes para la investigación?" },
  "IR-004": { title: "Continuidad del Servicio de IA", prompt: "¿Se definen planes de respaldo y continuidad para los procesos de negocio críticos que dependen de servicios de IA?" },
  "IR-005": { title: "Concentración de Proveedores y Preparación para la Salida", prompt: "¿La organización ha evaluado el riesgo de concentración y las opciones de salida o sustitución para las dependencias externas de IA críticas?" },

  "MEAS-001": { title: "KPI y KRI de Seguridad de IA", prompt: "¿Se definen y revisan KPI y KRI significativos de seguridad de la IA?" },
  "MEAS-002": { title: "Reporte Ejecutivo y a la Junta Directiva", prompt: "¿El riesgo material de IA se integra en el reporte de riesgos a nivel ejecutivo o de junta directiva cuando corresponde?" },
  "MEAS-003": { title: "Reevaluación Periódica", prompt: "¿La madurez y exposición de seguridad de la IA se reevalúan periódicamente y tras cambios materiales en los sistemas?" },
  "MEAS-004": { title: "Gobernanza de la Hoja de Ruta de Seguridad de IA", prompt: "¿Las acciones de mejora de seguridad de la IA se priorizan, asignan a un responsable y se rastrean hasta su finalización con base en la exposición del negocio?" },
  "MEAS-005": { title: "Aprendizaje Continuo a partir de Incidentes y Pruebas", prompt: "¿Los hallazgos de incidentes, red teaming, validación, auditorías y telemetría operativa se utilizan para mejorar los controles y la gobernanza de IA?" },
};
