import { esActions } from "../../actions/es";
import { esPractices } from "../../practices/es";
import type { ContentBundle, MaturitySix } from "../../types";
import { maturity } from "./maturity";
import { domains, questions } from "./questions";

const maturityLabels: MaturitySix = [
  "No establecido",
  "Reactivo",
  "Emergente",
  "Definido",
  "Gestionado",
  "Adaptativo",
];

export const esContent: ContentBundle = {
  practices: esPractices,
  actionPacks: esActions.actionPacks,
  technology: esActions.technology,
  domains,
  questions,
  maturity,
  maturityLabels,
  scenarios: {
    "regulated-bank": {
      name: "Banco regulado: alta exposición, baja madurez",
      shortName: "Banco Regulado",
      description:
        "IA altamente regulada y crítica para el negocio, con uso extensivo de agentes, alta autonomía y brechas importantes en gobernanza de agentes, privilegio mínimo, contención y continuidad.",
    },
    "mature-saas": {
      name: "SaaS maduro: agentes a escala",
      shortName: "SaaS Maduro",
      description:
        "Empresa SaaS madura que opera agentes de alta exposición y alta autonomía, con controles en general gestionados, pero con brechas persistentes en límites de acción, trazabilidad, contención y pruebas de agentes.",
    },
    "early-genai": {
      name: "Adopción temprana de GenAI: sin agentes",
      shortName: "GenAI Temprana",
      description:
        "Organización que inicia la adopción de GenAI, con exposición moderada y sin agentes en producción. Las preguntas específicas de agentes deben excluirse automáticamente.",
    },
    "controlled-enterprise": {
      name: "IA corporativa controlada: baja exposición, alta madurez",
      shortName: "Corporativo Controlado",
      description:
        "Empresa madura con adopción controlada de IA, menor exposición, autonomía moderada y sin alcance actual de GenAI ni agentes.",
    },
  },
  recommendations: {
    "REC-DISC-001": {
      title: "Establecer un inventario corporativo de IA",
      risk: "Los sistemas de IA desconocidos o no gestionados pueden introducir accesos a datos sin responsable, dependencias de terceros y exposición de seguridad.",
      action:
        "Crear un inventario centralizado y gestionado por ciclo de vida de aplicaciones, modelos, agentes, responsables, fuentes de datos, herramientas y dependencias relevantes de terceros.",
      suggestedOwners: ["CISO", "CIO/CTO", "Liderazgo de IA/Datos", "Arquitectura Empresarial"],
      evidence: [
        "inventario de IA",
        "responsables designados",
        "inventario de agentes y herramientas",
        "flujos de datos documentados",
      ],
    },
    "REC-RISK-001": {
      title: "Adoptar una clasificación de IA basada en riesgo",
      risk: "Los controles de IA pueden aplicarse de forma uniforme o inconsistente cuando el impacto en el negocio, la sensibilidad de los datos, la autonomía y la exposición externa no se clasifican en conjunto.",
      action:
        "Definir un método de clasificación de riesgo de IA que combine criticidad de negocio, sensibilidad de datos, autonomía, privilegio, exposición externa, impacto regulatorio y supervisión humana.",
      suggestedOwners: ["Riesgo Corporativo", "CISO", "Gobernanza de IA", "Legal/Cumplimiento"],
      evidence: [
        "estándar de clasificación",
        "niveles de riesgo",
        "umbrales de aprobación",
        "registro de IA de alto riesgo",
      ],
    },
    "REC-GOV-001": {
      title: "Definir la rendición de cuentas y los derechos de decisión en IA",
      risk: "La falta de claridad sobre la responsabilidad retrasa decisiones, debilita la aceptación de riesgo y genera brechas en el patrocinio de agentes, la autoridad ante incidentes y la gobernanza del ciclo de vida.",
      action:
        "Definir la responsabilidad de negocio, el patrocinio de agentes, la autoridad de aceptación de riesgo, la aprobación de autonomía, la autorización de herramientas, la autoridad ante incidentes y las responsabilidades de baja de servicio.",
      suggestedOwners: [
        "Gobernanza Ejecutiva de IA",
        "CISO",
        "CIO/CTO",
        "Liderazgo de IA/Datos",
        "Riesgo/Legal",
      ],
      evidence: [
        "matriz de responsabilidades de IA",
        "modelo de derechos de decisión",
        "requisito de patrocinador de agente",
        "flujo de aceptación de riesgo",
      ],
    },
    "REC-THRT-001": {
      title: "Operacionalizar el modelado de amenazas de IA",
      risk: "Los modelos de amenazas tradicionales pueden omitir la manipulación de prompts y contexto, el envenenamiento de datos y modelos, la agencia excesiva, el abuso de herramientas y las amenazas de la cadena de suministro de IA.",
      action:
        "Incorporar escenarios de amenaza específicos de IA en la revisión de arquitectura y exigir que los modelos de amenaza definan controles, validación y requisitos de monitoreo.",
      suggestedOwners: [
        "Arquitectura de Seguridad",
        "AppSec",
        "Ingeniería de IA",
        "Modelado de Amenazas",
      ],
      evidence: [
        "plantilla de modelo de amenazas de IA",
        "escenarios documentados",
        "trazabilidad de controles",
        "registros de revisión",
      ],
    },
    "REC-SDLC-001": {
      title: "Establecer un ciclo de desarrollo seguro de IA",
      risk: "Las decisiones de seguridad específicas de IA pueden llegar demasiado tarde si la procedencia de modelos, las identidades no humanas, la validación, los permisos y la baja de servicio no forman parte de las puertas de entrega.",
      action:
        "Integrar los requisitos de seguridad de IA en las fases de diseño, construcción, prueba, despliegue, operación y retiro, con criterios de liberación basados en riesgo.",
      suggestedOwners: [
        "AppSec",
        "Ingeniería de IA",
        "Ingeniería de Plataforma",
        "Arquitectura de Seguridad",
      ],
      evidence: [
        "estándar de SDLC seguro para IA",
        "puertas de liberación",
        "verificación de procedencia",
        "lista de verificación de retiro",
      ],
    },
    "REC-PROT-001": {
      title: "Aplicar controles mínimos de protección de IA",
      risk: "Los sistemas y agentes de IA pueden amplificar la exposición de datos y el impacto en el negocio cuando identidades, privilegios, fuentes de recuperación, herramientas y límites de acción están débilmente controlados.",
      action:
        "Definir controles mínimos de identidad, datos, modelos, aplicaciones, agentes y cadena de suministro, con privilegio mínimo y límites explícitos de herramientas y acciones para los agentes.",
      suggestedOwners: [
        "CISO",
        "Seguridad de Identidad",
        "Seguridad de Datos",
        "AppSec",
        "Plataforma de IA",
      ],
      evidence: [
        "línea base mínima de controles",
        "evidencia de privilegio mínimo",
        "autorización de herramientas",
        "capacidad de desactivar o revocar agentes",
      ],
    },
    "REC-VAL-001": {
      title: "Introducir validación adversarial de IA basada en riesgo",
      risk: "La IA en producción puede conservar debilidades explotables de prompts, datos, herramientas, privilegios o modos de falla cuando la validación se limita a pruebas funcionales.",
      action:
        "Exigir validación adversarial para los riesgos materiales de IA y red teaming estructurado para los sistemas cuya exposición de negocio lo justifique.",
      suggestedOwners: ["AI Red Team", "AppSec", "Pruebas de Seguridad", "Ingeniería de IA"],
      evidence: [
        "planes de prueba",
        "criterios de red team",
        "registro de hallazgos",
        "evidencia de repruebas",
      ],
    },
    "REC-MON-001": {
      title: "Crear monitoreo y trazabilidad de seguridad de IA",
      risk: "Los equipos de seguridad pueden no detectar ni reconstruir la actividad impulsada por IA cuando la telemetría no distingue usuarios, agentes, herramientas y acciones autónomas.",
      action:
        "Definir la telemetría mínima de IA, centralizar los registros relevantes y crear detecciones para uso anómalo, abuso de privilegios, exposición de datos sensibles y comportamiento sospechoso de agentes y herramientas.",
      suggestedOwners: [
        "SOC",
        "Ingeniería de Detección",
        "Plataforma de IA",
        "Seguridad de Identidad",
      ],
      evidence: [
        "estándar de registro de IA",
        "telemetría centralizada",
        "trazabilidad de acciones de agentes",
        "biblioteca de detecciones de IA",
      ],
    },
    "REC-IR-001": {
      title: "Desarrollar respuesta a incidentes de IA y resiliencia del negocio",
      risk: "Los incidentes de IA o las fallas de proveedores pueden generar un impacto desproporcionado cuando la contención, la evidencia, el plan alternativo y la autoridad de recuperación no están claros.",
      action:
        "Crear playbooks de respuesta específicos de IA, contención y revocación rápida de agentes, requisitos de preservación de evidencia y planes de continuidad para las dependencias críticas de IA.",
      suggestedOwners: [
        "Respuesta a Incidentes",
        "SOC",
        "Continuidad del Negocio",
        "Plataforma de IA",
        "CISO",
      ],
      evidence: [
        "playbooks de IR para IA",
        "prueba de contención",
        "plan alternativo",
        "evaluación de concentración de proveedores",
      ],
    },
    "REC-MEAS-001": {
      title: "Establecer métricas de seguridad de IA y mejora continua",
      risk: "Los programas de seguridad de IA pueden estancarse cuando la madurez, la exposición, los incidentes y el avance de la remediación no se miden ni se reevalúan.",
      action:
        "Definir KPIs/KRIs de seguridad de IA, establecer disparadores de reevaluación y gobernar una hoja de ruta de mejora basada en riesgo con reporte ejecutivo.",
      suggestedOwners: [
        "CISO",
        "Gobernanza de IA",
        "Riesgo Corporativo",
        "Gestión de Programas de Seguridad",
      ],
      evidence: [
        "conjunto de KPIs/KRIs",
        "reporte ejecutivo",
        "cadencia de reevaluación",
        "hoja de ruta de mejora con seguimiento",
      ],
    },
  },
  landing: {
    areas: [
      "aprobación de nuevos casos de uso de IA",
      "responsabilidad de negocio sobre la IA",
      "clasificación de riesgo de IA",
      "requisitos de seguridad de IA",
      "aprobación de acceso a datos",
      "aprobación de modelos",
      "gestión del ciclo de vida de modelos",
      "cambios de modelo",
      "aprobación de arquitectura de IA",
      "responsabilidad sobre agentes de IA",
      "aprobación de privilegios de agentes",
      "aprobación de autonomía de agentes",
      "autorización de herramientas y APIs",
      "aprobación de IA de terceros",
      "adquisición de soluciones de IA",
      "despliegue en producción",
      "monitoreo de IA",
      "monitoreo de seguridad",
      "respuesta a incidentes de IA",
      "contención de agentes",
      "recuperación de servicios de IA",
      "aceptación de riesgo residual",
      "responsabilidad regulatoria",
      "baja de servicios de IA",
    ],
    roles: [
      {
        role: "Identidad Técnica",
        detail: "La identidad que el agente utiliza para autenticarse y acceder a los sistemas.",
      },
      {
        role: "Responsable de Negocio",
        detail: "La persona responsable del resultado de negocio que produce el agente.",
      },
      {
        role: "Patrocinador Humano",
        detail: "La persona responsable del propósito aprobado, el alcance y la operación del agente.",
      },
      {
        role: "Responsable de Seguridad",
        detail: "El equipo responsable de definir y monitorear los requisitos de seguridad.",
      },
    ],
    legacyDomains: {
      governance: {
        short: "Gobernanza",
        name: "Gobernanza y Rendición de Cuentas",
        intent:
          "Rendición de cuentas operativa sobre decisiones, riesgos, controles y operaciones de IA, no sobre la estructura de comités.",
      },
      lifecycle: {
        short: "Ciclo de vida",
        name: "Ciclo de Vida de Modelos y Sistemas",
        intent: "Aprobación, control de cambios y baja de sistemas y modelos de IA.",
      },
      "data-access": {
        short: "Datos y Acceso",
        name: "Responsabilidad sobre Datos y Acceso",
        intent: "Quién aprueba qué pueden leer, escribir y alcanzar los sistemas y agentes de IA.",
      },
      operations: {
        short: "Operaciones",
        name: "Monitoreo, Incidentes y Recuperación",
        intent:
          "Responsabilidad operativa sobre el comportamiento de la IA, la telemetría de seguridad, la contención y la recuperación.",
      },
      thirdparty: {
        short: "Terceros",
        name: "Terceros y Regulación",
        intent:
          "Responsabilidad sobre proveedores externos de IA, adquisiciones y exposición regulatoria.",
      },
    },
  },
  levels: {
    maturity: {
      Unaware: "Sin conciencia",
      Reactive: "Reactivo",
      Emerging: "Emergente",
      Defined: "Definido",
      Managed: "Gestionado",
      Adaptive: "Adaptativo",
    },
    exposure: {
      Limited: "Limitada",
      Moderate: "Moderada",
      Significant: "Significativa",
      High: "Alta",
      "Very High": "Muy alta",
    },
    autonomy: {
      "No AI": "Sin IA",
      Generative: "Generativa",
      Advisory: "Consultiva",
      "Workflow Initiation": "Inicio de flujos de trabajo",
      "Action Execution": "Ejecución de acciones",
      "Autonomous Operations": "Operaciones autónomas",
    },
    quadrant: {
      "Critical Priority": "Prioridad crítica",
      "Strategic Investment": "Inversión estratégica",
      "Emerging Risk": "Riesgo emergente",
      "Controlled Adoption": "Adopción controlada",
    },
    priority: {
      Critical: "Crítica",
      High: "Alta",
      Medium: "Media",
    },
    horizon: {
      NOW: "NOW",
      NEXT: "NEXT",
      SCALE: "SCALE",
    },
  },
};
