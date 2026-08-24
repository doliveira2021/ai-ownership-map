import type { ActionsBundle } from "./types";

export const esActions: ActionsBundle = {
  technology: {
    categories: {
      "ai-spm": "Gestión de la postura de seguridad de IA (AI-SPM)",
      "cnapp-ai": "CNAPP con descubrimiento de IA",
      "dspm-ai": "DSPM / seguridad de datos para IA",
      "nhi-identity": "IAM / identidades no humanas y de agentes",
      "agent-runtime": "Seguridad en tiempo de ejecución de agentes",
      "mcp-tool-governance": "Gobierno de MCP / herramientas",
      "ai-guardrails": "Guardrails en tiempo de ejecución de IA",
      "model-appsec": "Seguridad de modelos y aplicaciones de IA",
      "ai-red-team": "Red teaming y validación de IA",
      "siem-xdr-ai": "SIEM / XDR con telemetría de IA",
      "soar-ir": "Automatización de SOAR / respuesta a incidentes",
      "ai-observability": "Observabilidad y resiliencia de IA",
      "cmdb-grc": "CMDB / GRC / gestión de flujos de trabajo",
    },
    capabilities: {
      "cap-ai-inventory": {
        description:
          "Descubrimiento continuo e inventario del ciclo de vida de aplicaciones de IA, modelos, agentes, responsables y fuentes de datos.",
        notes:
          "La cobertura de IA embebida en SaaS y agentes desarrollados internamente varía considerablemente; valide contra su propio entorno.",
      },
      "cap-cloud-ai-discovery": {
        description:
          "Descubrimiento nativo en la nube de servicios de IA, endpoints de modelos, repositorios de datos de entrenamiento y sus rutas de exposición.",
        notes: "Suele ser más sólido cuando la carga de trabajo ya se ejecuta en una cuenta cloud cubierta.",
      },
      "cap-data-security-ai": {
        description:
          "Clasificación y control de datos sensibles accesibles por sistemas de IA, fuentes de recuperación (retrieval) y agentes.",
        notes: "Evalúe específicamente la cobertura de retrieval y vector stores, no solo los repositorios de datos estructurados.",
      },
      "cap-nonhuman-identity": {
        description:
          "Ciclo de vida, mínimo privilegio, gestión de credenciales y revocación para identidades de servicios, cargas de trabajo y agentes.",
        notes: "Confirme el soporte para credenciales delegadas de corta duración y revocación rápida.",
      },
      "cap-agent-runtime": {
        description:
          "Visibilidad y control en tiempo de ejecución sobre el comportamiento del agente, acciones delegadas y uso inesperado de privilegios.",
        notes: "Es una categoría en rápida evolución; valide contra sus frameworks de agentes específicos.",
      },
      "cap-tool-governance": {
        description:
          "Autorización, listas de permitidos y monitoreo de herramientas, plugins, conectores y servidores MCP disponibles para los agentes.",
        notes: "Verifique si el acceso a herramientas puede revocarse de forma independiente a la identidad del agente.",
      },
      "cap-runtime-guardrails": {
        description:
          "Inspección de entradas/salidas ante manipulación de prompts, exposición de datos sensibles y respuestas inseguras del modelo.",
        notes: "Los guardrails reducen, pero no eliminan, el riesgo de manipulación de prompts y contexto.",
      },
      "cap-model-appsec": {
        description:
          "Procedencia de modelos y dependencias, análisis de artefactos y controles de compilación segura para componentes de IA.",
        notes: "Verifique el soporte para los registros de modelos y formatos de artefactos que realmente utiliza.",
      },
      "cap-ai-red-team": {
        description:
          "Pruebas adversarias de prompts, herramientas, privilegios y modos de falla, con hallazgos reproducibles.",
        notes: "Las pruebas automatizadas complementan, pero no reemplazan, el red teaming humano basado en escenarios.",
      },
      "cap-ai-telemetry": {
        description:
          "Recolección centralizada, correlación y detección sobre registros de actividad de IA, agentes y herramientas.",
        notes: "El valor de detección depende de la telemetría que sus plataformas de IA sean capaces de emitir.",
      },
      "cap-ir-automation": {
        description:
          "Automatización de playbooks para contención, revocación de credenciales, captura de evidencia y escalamiento.",
        notes: "Pruebe la contención automatizada contra un agente real antes de depender de ella.",
      },
      "cap-ai-observability": {
        description:
          "Monitoreo de disponibilidad, latencia, calidad y dependencias para servicios y proveedores de IA.",
        notes: "Útil tanto para la resiliencia y el monitoreo de concentración de proveedores como para el desempeño.",
      },
      "cap-grc-workflow": {
        description:
          "Gestión de activos, flujos de trabajo, aprobaciones y evidencia sobre la cual pueden apoyarse los procesos de gobierno de IA.",
        notes: "Priorice extender el flujo de trabajo empresarial existente antes de introducir un proceso paralelo.",
      },
    },
  },
  actionPacks: {
    "REC-DISC-001": {
      whyItMatters:
        "No se puede asumir la responsabilidad, clasificar, proteger ni contener sistemas de IA que no han sido identificados. El inventario es la base de la que dependen casi todos los demás controles de esta evaluación.",
      tasks: {
        "DISC-7D-1": "Definir qué se considera un activo de IA (modelo, aplicación de IA, agente, IA embebida en SaaS, herramienta/conector).",
        "DISC-7D-2": "Identificar qué unidades de negocio ya utilizan GenAI o agentes, incluyendo adopción no gestionada.",
        "DISC-7D-3": "Definir los campos mínimos de inventario requeridos para considerar registrado un activo de IA.",
        "DISC-7D-4": "Asignar responsables de negocio a los activos de IA que ya se sabe son críticos para el negocio.",
        "DISC-30D-1": "Registrar modelo/proveedor, entorno de hosting, caso de uso de negocio y clasificación de datos de cada activo.",
        "DISC-30D-2": "Registrar la exposición externa, el nivel de autonomía y el modelo de supervisión humana de cada activo.",
        "DISC-30D-3": "Registrar los agentes, sus herramientas, APIs e identidades no humanas junto con los sistemas sobre los que actúan.",
        "DISC-60D-1": "Ejecutar el descubrimiento técnico de proveedores de modelos, IA embebida en SaaS, plugins, conectores y servidores MCP.",
        "DISC-60D-2": "Mapear las fuentes de datos sensibles accesibles mediante retrieval, fine-tuning y herramientas de agentes.",
        "DISC-60D-3": "Identificar activos de IA huérfanos o sin responsable y asignarles un dueño o darlos de baja.",
        "DISC-90D-1": "Integrar el inventario de IA con el CMDB, activos o flujo de trabajo de GRC existente, en lugar de una hoja independiente.",
        "DISC-90D-2": "Definir pasos de alta y baja para que el inventario se mantenga preciso por defecto.",
        "DISC-90D-3": "Establecer conciliación y reporte recurrente de la cobertura del inventario a la dirección.",
      },
      kpis: {
        "KPI-DISC-1": "Sistemas de IA en producción registrados en el inventario",
        "KPI-DISC-2": "Sistemas de IA críticos con un responsable de negocio designado",
        "KPI-DISC-3": "Agentes en producción con un patrocinador humano identificado",
        "KPI-DISC-4": "Sistemas de IA de alto riesgo con clasificación de riesgo completada",
        "KPI-DISC-5": "Activos de IA huérfanos o sin gestión pendientes",
      },
      dependencies: [
        "Mandato ejecutivo que exija el registro antes del uso de IA en producción.",
        "Acceso a telemetría de nube, SaaS e identidad para el descubrimiento técnico.",
        "Un sistema de activos o flujo de trabajo existente que el inventario pueda ampliar.",
      ],
    },
    "REC-RISK-001": {
      whyItMatters:
        "Sin una clasificación de riesgo compartida, el esfuerzo de control se distribuye de manera uniforme en lugar de concentrarse en los sistemas de IA que realmente pueden causar un daño material al negocio.",
      tasks: {
        "RISK-7D-1": "Acordar las dimensiones de riesgo: criticidad de negocio, sensibilidad de datos, autonomía, privilegio, exposición e impacto regulatorio.",
        "RISK-7D-2": "Definir de tres a cuatro niveles de riesgo con descripciones en lenguaje sencillo que la dirección pueda aplicar.",
        "RISK-7D-3": "Clasificar los diez sistemas de IA con mayor exposición de negocio identificados hasta el momento.",
        "RISK-30D-1": "Publicar el estándar de clasificación y las expectativas de control asociadas a cada nivel.",
        "RISK-30D-2": "Definir umbrales de aprobación y quién puede autorizar el despliegue en cada nivel.",
        "RISK-30D-3": "Clasificar todos los sistemas y agentes de IA en producción registrados en el inventario.",
        "RISK-60D-1": "Establecer un registro de IA de alto riesgo con fechas de revisión y responsables de riesgo designados.",
        "RISK-60D-2": "Exigir reclasificación cuando cambie la autonomía, el privilegio, el alcance de datos o la exposición.",
        "RISK-60D-3": "Alinear la clasificación con la taxonomía de riesgo empresarial y las obligaciones regulatorias existentes.",
        "RISK-90D-1": "Incorporar la clasificación como control de paso en la admisión, adquisición y flujo de lanzamiento.",
        "RISK-90D-2": "Reportar la distribución por niveles y los elementos de alto riesgo no mitigados al gobierno ejecutivo.",
        "RISK-90D-3": "Revisar la exactitud de la clasificación frente a incidentes, hallazgos y observaciones de auditoría.",
      },
      kpis: {
        "KPI-RISK-1": "Sistemas de IA inventariados con clasificación completada",
        "KPI-RISK-2": "Sistemas de IA de alto riesgo con una posición de riesgo aceptada y documentada",
        "KPI-RISK-3": "Despliegues que superaron el control de clasificación antes del lanzamiento",
        "KPI-RISK-4": "Tiempo medio para clasificar un sistema de IA recién registrado",
        "KPI-RISK-5": "Elementos de alto riesgo con revisión vencida",
      },
      dependencies: [
        "Un inventario de IA utilizable con la propiedad registrada.",
        "Alineación con la taxonomía de riesgo empresarial existente.",
        "Aportes de legal y cumplimiento sobre los criterios de impacto regulatorio.",
      ],
    },
    "REC-GOV-001": {
      whyItMatters:
        "Cuando los derechos de decisión no son claros, las decisiones de riesgo de IA quedan por defecto en manos de quien esté más cerca de la entrega, y nadie tiene la autoridad para detener, contener o retirar un sistema.",
      tasks: {
        "GOV-7D-1": "Listar las decisiones de IA que actualmente no tienen un responsable claro, desde aumentos de autonomía hasta baja de servicio.",
        "GOV-7D-2": "Designar al ejecutivo responsable del riesgo de IA y el foro donde se registran las decisiones.",
        "GOV-7D-3": "Exigir un patrocinador humano designado para cada agente en producción capaz de ejecutar acciones de negocio.",
        "GOV-30D-1": "Publicar una matriz de responsabilidades de IA que cubra aprobación, propiedad, aceptación de riesgo y autoridad ante incidentes.",
        "GOV-30D-2": "Definir quién puede aprobar aumentos de autonomía, autorización de herramientas y acceso a datos privilegiados.",
        "GOV-30D-3": "Definir el flujo de aceptación de riesgo residual, incluyendo quién puede aceptarlo y por cuánto tiempo.",
        "GOV-60D-1": "Asignar responsables de negocio a todos los sistemas de IA críticos y cerrar las brechas encontradas.",
        "GOV-60D-2": "Definir la autoridad ante incidentes: quién puede contener, revocar, suspender o restaurar un sistema o agente de IA.",
        "GOV-60D-3": "Definir la responsabilidad de baja de servicio y la evidencia requerida para retirar un activo de IA.",
        "GOV-90D-1": "Integrar el modelo de derechos de decisión en la admisión, la revisión de arquitectura y la aprobación de lanzamientos.",
        "GOV-90D-2": "Revisar la eficacia del gobierno frente a decisiones, escalamientos e incidentes reales.",
        "GOV-90D-3": "Reportar la cobertura de responsabilidades y las brechas de propiedad abiertas al foro ejecutivo.",
      },
      kpis: {
        "KPI-GOV-1": "Sistemas de IA críticos con propiedad documentada",
        "KPI-GOV-2": "Agentes en producción con un patrocinador humano designado",
        "KPI-GOV-3": "Aceptaciones de riesgo registradas con fecha de vencimiento y revisión",
        "KPI-GOV-4": "Tiempo medio desde el escalamiento hasta una decisión de riesgo de IA registrada",
        "KPI-GOV-5": "Tipos de decisión aún sin responsable asignado",
      },
      dependencies: [
        "Patrocinio ejecutivo para los derechos de decisión sobre riesgo de IA.",
        "Un inventario que identifique sistemas, agentes y responsables actuales.",
        "Un foro de gobierno existente en el que se pueda integrar el modelo.",
      ],
    },
    "REC-THRT-001": {
      whyItMatters:
        "Los modelos de amenazas de aplicaciones rara vez cubren la manipulación de prompts y contexto, el envenenamiento, la autonomía excesiva o el abuso de herramientas, por lo que rutas de falla específicas de IA llegan a producción sin ser examinadas.",
      tasks: {
        "THRT-7D-1": "Seleccionar las categorías de amenazas específicas de IA que el proceso de revisión siempre debe considerar.",
        "THRT-7D-2": "Elegir dos sistemas de IA de alta exposición para una primera sesión estructurada de modelado de amenazas.",
        "THRT-7D-3": "Identificar quién facilita el modelado de amenazas de IA y cuándo es obligatorio.",
        "THRT-30D-1": "Publicar una plantilla de modelo de amenazas de IA que cubra datos, modelo, aplicación, agente y cadena de suministro.",
        "THRT-30D-2": "Exigir modelos de amenazas para todos los sistemas de IA de alto riesgo antes del lanzamiento a producción.",
        "THRT-30D-3": "Vincular cada amenaza identificada a un control, prueba de validación o requisito de monitoreo.",
        "THRT-60D-1": "Modelar amenazas específicas de agentes: autonomía excesiva, abuso de herramientas, uso indebido de credenciales delegadas y encadenamiento de acciones.",
        "THRT-60D-2": "Revisar las amenazas de terceros y de la cadena de suministro de modelos, incluyendo proveedores y conectores.",
        "THRT-60D-3": "Incorporar las amenazas no resueltas al registro de riesgos con responsables y fechas.",
        "THRT-90D-1": "Integrar el modelado de amenazas de IA como paso permanente en la revisión de arquitectura.",
        "THRT-90D-2": "Actualizar los modelos de amenazas cuando cambien la autonomía, las herramientas, el alcance de datos o los proveedores.",
        "THRT-90D-3": "Medir la cobertura de controles derivada de los modelos de amenazas y reportar la exposición residual.",
      },
      kpis: {
        "KPI-THRT-1": "Sistemas de IA de alto riesgo con un modelo de amenazas vigente",
        "KPI-THRT-2": "Amenazas identificadas vinculadas a un control o prueba",
        "KPI-THRT-3": "Sistemas habilitados con agentes que cuentan con escenarios de abuso de herramientas modelados",
        "KPI-THRT-4": "Modelos de amenazas que superan el intervalo de actualización",
        "KPI-THRT-5": "Tiempo medio desde la identificación de la amenaza hasta la decisión de control",
      },
      dependencies: [
        "Documentación de arquitectura y visibilidad del flujo de datos de los sistemas de IA.",
        "Capacidad del área de arquitectura de seguridad para facilitar las sesiones.",
        "Clasificación de riesgo para decidir dónde es obligatorio el modelado de amenazas.",
      ],
    },
    "REC-SDLC-001": {
      whyItMatters:
        "Si las decisiones de seguridad de IA se toman después de la construcción, los problemas de procedencia, identidad y permisos se vuelven costosos de revertir y, con frecuencia, se lanzan de todos modos.",
      tasks: {
        "SDLC-7D-1": "Mapear en qué puntos los componentes de IA ingresan actualmente al pipeline de entrega sin un control de seguridad.",
        "SDLC-7D-2": "Definir los requisitos mínimos de seguridad de IA que deben cumplirse antes del lanzamiento a producción.",
        "SDLC-7D-3": "Exigir procedencia de modelo y dependencias para todo componente de IA nuevo que se introduzca.",
        "SDLC-30D-1": "Agregar los requisitos de seguridad de IA a la revisión de diseño y registrarlos como criterios de aceptación.",
        "SDLC-30D-2": "Introducir el registro de identidades no humanas y la revisión de mínimo privilegio en el momento de la construcción.",
        "SDLC-30D-3": "Agregar pruebas adversarias y de casos de abuso a la etapa de pruebas para sistemas de IA de alto riesgo.",
        "SDLC-60D-1": "Implementar controles de lanzamiento basados en riesgo, alineados con los niveles de clasificación de IA.",
        "SDLC-60D-2": "Agregar análisis de artefactos y dependencias para modelos, prompts, agentes y definiciones de herramientas.",
        "SDLC-60D-3": "Definir los requisitos operativos que se entregan al desplegar: telemetría, propiedad y contención.",
        "SDLC-90D-1": "Definir y probar una lista de verificación de baja que cubra credenciales, herramientas, datos y eliminación del inventario.",
        "SDLC-90D-2": "Automatizar la captura de evidencia desde el pipeline para que las auditorías no requieran recopilación manual.",
        "SDLC-90D-3": "Revisar las excepciones a los controles de lanzamiento y reducir los patrones recurrentes de omisión.",
      },
      kpis: {
        "KPI-SDLC-1": "Lanzamientos de IA que superaron el control de seguridad definido",
        "KPI-SDLC-2": "Componentes de IA con procedencia registrada",
        "KPI-SDLC-3": "Cargas de trabajo de IA con revisión de identidad de mínimo privilegio completada",
        "KPI-SDLC-4": "Activos de IA retirados con evidencia de baja completada",
        "KPI-SDLC-5": "Excepciones a los controles de lanzamiento abiertas",
      },
      dependencies: [
        "Un pipeline de CI/CD existente capaz de aplicar controles de paso.",
        "Clasificación de riesgo para definir la exigencia del control según el nivel.",
        "Acuerdo de ingeniería sobre los criterios de lanzamiento.",
      ],
    },
    "REC-PROT-001": {
      whyItMatters:
        "Los agentes y aplicaciones de IA convierten controles débiles de identidad, datos y herramientas en acciones de negocio directas, lo que transforma una mala configuración habitual en un incidente operativo.",
      tasks: {
        "PROT-7D-1": "Inventariar los agentes en producción capaces de ejecutar acciones y no solo generar texto.",
        "PROT-7D-2": "Mapear la identidad de cada agente y todas las credenciales delegadas que puede utilizar.",
        "PROT-7D-3": "Mapear las herramientas, APIs y servidores MCP a los que puede acceder cada agente y la autoridad que otorga cada uno.",
        "PROT-7D-4": "Establecer un procedimiento de emergencia para revocar o deshabilitar un agente y sus credenciales.",
        "PROT-30D-1": "Publicar líneas base mínimas de protección para las capas de identidad, datos, modelo, aplicación y agente.",
        "PROT-30D-2": "Eliminar privilegios permanentes y el acceso excesivo a datos de las identidades de agentes y cargas de trabajo de IA.",
        "PROT-30D-3": "Exigir autorización explícita para cada herramienta que un agente pueda usar, con un responsable por herramienta.",
        "PROT-60D-1": "Implementar la capacidad de bloquear el acceso a herramientas de forma independiente a deshabilitar el agente.",
        "PROT-60D-2": "Restringir las fuentes de retrieval y aplicar controles de datos sobre lo que los sistemas de IA pueden leer.",
        "PROT-60D-3": "Aplicar guardrails en tiempo de ejecución para prompts, salidas y límites de acción de alta exposición.",
        "PROT-90D-1": "Probar la contención de extremo a extremo para al menos un agente crítico y registrar el resultado.",
        "PROT-90D-2": "Revisar los controles de cadena de suministro para proveedores de modelos, conectores y agentes de terceros.",
        "PROT-90D-3": "Reportar el cumplimiento de las líneas base y las excepciones con fechas de remediación.",
      },
      kpis: {
        "KPI-PROT-1": "Agentes en producción con un procedimiento documentado de contención o apagado",
        "KPI-PROT-2": "Identidades de agentes que operan bajo mínimo privilegio",
        "KPI-PROT-3": "Tiempo medio para revocar la credencial de un agente",
        "KPI-PROT-4": "Agentes cuyo acceso a herramientas puede bloquearse de forma independiente",
        "KPI-PROT-5": "Excepciones de línea base abiertas más allá de su fecha límite",
      },
      dependencies: [
        "Un inventario de agentes e identidades no humanas.",
        "Soporte de la plataforma de identidad para revocación rápida.",
        "Responsables identificados para herramientas, conectores y fuentes de datos.",
      ],
    },
    "REC-VAL-001": {
      whyItMatters:
        "Las pruebas funcionales confirman que un sistema de IA funciona como se espera; no muestran cómo falla cuando alguien intenta deliberadamente que falle.",
      tasks: {
        "VAL-7D-1": "Definir qué riesgos de IA requieren validación adversaria antes y después del lanzamiento a producción.",
        "VAL-7D-2": "Seleccionar un sistema de IA de alta exposición para una prueba adversaria inicial.",
        "VAL-7D-3": "Acordar cómo se registran, priorizan y vuelven a probar los hallazgos.",
        "VAL-30D-1": "Publicar un plan de pruebas que cubra manipulación de prompts, exposición de datos, abuso de herramientas y escalamiento de privilegios.",
        "VAL-30D-2": "Definir los criterios de red team en función de la exposición, la autonomía y el impacto de negocio.",
        "VAL-30D-3": "Establecer un registro de hallazgos con severidad, responsable y fechas de remediación.",
        "VAL-60D-1": "Ejecutar validación adversaria estructurada en todos los sistemas que cumplan los criterios de red team.",
        "VAL-60D-2": "Validar los límites de acción de los agentes, las restricciones de herramientas y el comportamiento de contención bajo prueba.",
        "VAL-60D-3": "Volver a probar los hallazgos remediados y registrar evidencia de cierre.",
        "VAL-90D-1": "Automatizar pruebas de regresión recurrentes para las debilidades de IA identificadas previamente.",
        "VAL-90D-2": "Activar la revalidación cuando los modelos, prompts, herramientas o proveedores cambien de forma significativa.",
        "VAL-90D-3": "Reportar al gobierno la cobertura de validación y los hallazgos de alta severidad sin resolver.",
      },
      kpis: {
        "KPI-VAL-1": "Sistemas de IA de alto riesgo con validación adversaria completada",
        "KPI-VAL-2": "Hallazgos remediados dentro del plazo acordado",
        "KPI-VAL-3": "Agentes con pruebas de límites de acción validadas",
        "KPI-VAL-4": "Tiempo medio desde el hallazgo hasta la nueva prueba",
        "KPI-VAL-5": "Hallazgos de validación de alta severidad abiertos",
      },
      dependencies: [
        "Clasificación de riesgo para definir el alcance de la validación.",
        "Entornos de prueba representativos del comportamiento en producción.",
        "Capacidad de remediación en los equipos de ingeniería responsables.",
      ],
    },
    "REC-MON-001": {
      whyItMatters:
        "Si la telemetría no puede distinguir a un usuario de un agente, o a un agente de la herramienta que invocó, los equipos de seguridad no pueden detectar el mal uso ni reconstruir lo ocurrido.",
      tasks: {
        "MON-7D-1": "Definir la telemetría mínima de IA requerida: identidad, metadatos de prompt/acción, llamadas a herramientas y resultados.",
        "MON-7D-2": "Identificar qué plataformas de IA y agentes actualmente no emiten telemetría de seguridad utilizable.",
        "MON-7D-3": "Confirmar con legal y cumplimiento las expectativas de retención de registros para la actividad de IA y agentes.",
        "MON-30D-1": "Centralizar los registros de IA y agentes en la plataforma de monitoreo existente.",
        "MON-30D-2": "Asegurar que cada acción de un agente pueda atribuirse a una identidad y un contexto iniciador.",
        "MON-30D-3": "Establecer trazabilidad desde una acción de negocio hasta el agente, la herramienta y el prompt que la originaron.",
        "MON-60D-1": "Construir detecciones para uso anómalo de IA, abuso de privilegios y exposición de datos sensibles.",
        "MON-60D-2": "Construir detecciones para invocación sospechosa de herramientas y comportamiento inesperado de agentes.",
        "MON-60D-3": "Enrutar las detecciones de IA hacia el proceso de triaje existente con un responsable de respuesta definido.",
        "MON-90D-1": "Afinar las detecciones con base en los resultados de validación y red team para reducir el ruido.",
        "MON-90D-2": "Monitorear las señales de disponibilidad y calidad de los proveedores junto con la telemetría de seguridad.",
        "MON-90D-3": "Reportar al gobierno las brechas de cobertura de telemetría y la eficacia de las detecciones.",
      },
      kpis: {
        "KPI-MON-1": "Sistemas de IA en producción que emiten el conjunto mínimo de telemetría",
        "KPI-MON-2": "Acciones de agentes atribuibles a una identidad específica",
        "KPI-MON-3": "Detecciones específicas de IA en producción",
        "KPI-MON-4": "Tiempo medio para detectar un evento de seguridad relacionado con IA",
        "KPI-MON-5": "Detecciones de IA con un responsable de respuesta documentado",
      },
      dependencies: [
        "Capacidad de registro en las plataformas de IA y agentes en uso.",
        "Capacidad disponible en el SIEM o plataforma de monitoreo existente.",
        "Acuerdo sobre las restricciones de retención y privacidad.",
      ],
    },
    "REC-IR-001": {
      whyItMatters:
        "Los incidentes de IA ocurren a velocidad de máquina y las interrupciones de proveedores afectan varios procesos de negocio a la vez; una autoridad de contención poco clara convierte un evento contenido en una disrupción del negocio.",
      tasks: {
        "IR-7D-1": "Identificar qué sistemas y agentes de IA causarían el mayor daño si se comportaran incorrectamente.",
        "IR-7D-2": "Confirmar quién tiene autoridad para contener o suspender un sistema de IA fuera del horario laboral.",
        "IR-7D-3": "Documentar la vía más rápida disponible hoy para revocar credenciales y acceso a herramientas de un agente.",
        "IR-7D-4": "Identificar los procesos de negocio críticos que dependen de un único proveedor de IA.",
        "IR-30D-1": "Redactar playbooks de incidentes de IA que cubran mal uso, manipulación, exposición de datos y malfuncionamiento de agentes.",
        "IR-30D-2": "Definir los requisitos de preservación de evidencia para prompts, acciones, llamadas a herramientas y versiones de modelo.",
        "IR-30D-3": "Integrar los escenarios de IA en el modelo de clasificación y escalamiento de incidentes existente.",
        "IR-60D-1": "Probar la contención en al menos un agente crítico y medir el tiempo de revocación.",
        "IR-60D-2": "Definir y documentar planes de respaldo y operación manual para las dependencias críticas de IA.",
        "IR-60D-3": "Evaluar el riesgo de concentración de proveedores y acordar con el negocio la exposición aceptable.",
        "IR-90D-1": "Ejecutar un ejercicio de mesa o en vivo para un escenario de incidente de IA de alto impacto.",
        "IR-90D-2": "Definir la autoridad y los criterios de recuperación para devolver un sistema de IA a servicio.",
        "IR-90D-3": "Incorporar los hallazgos del ejercicio a los playbooks, controles y registro de riesgos.",
      },
      kpis: {
        "KPI-IR-1": "Sistemas de IA críticos cubiertos por un playbook de incidentes",
        "KPI-IR-2": "Tiempo medio para contener o revocar un agente en producción",
        "KPI-IR-3": "Dependencias críticas de IA con un plan de respaldo probado",
        "KPI-IR-4": "Pruebas de contención completadas según el plan",
        "KPI-IR-5": "Hallazgos abiertos de ejercicios de incidentes de IA",
      },
      dependencies: [
        "Inventario de agentes y mapeo de credenciales.",
        "Proceso de respuesta a incidentes existente y autoridad de guardia.",
        "Aportes del negocio sobre el tiempo de inactividad aceptable y el respaldo manual.",
      ],
    },
    "REC-MEAS-001": {
      whyItMatters:
        "Sin medición, el trabajo de seguridad de IA se estanca silenciosamente: la cobertura se degrada, las aceptaciones de riesgo vencen sin ser notadas y la dirección pierde la base para seguir invirtiendo.",
      tasks: {
        "MEAS-7D-1": "Seleccionar un conjunto reducido de KPI y KRI de seguridad de IA que la dirección realmente utilizará.",
        "MEAS-7D-2": "Establecer líneas base a partir de los resultados de la evaluación actual.",
        "MEAS-7D-3": "Acordar la periodicidad de reporte y la audiencia ejecutiva.",
        "MEAS-30D-1": "Definir las fuentes de datos y responsables de cada métrica para que el reporte sea repetible.",
        "MEAS-30D-2": "Publicar el primer reporte ejecutivo con línea base, meta y tendencia.",
        "MEAS-30D-3": "Definir los disparadores de reevaluación, como nuevos agentes, cambios de proveedor o incidentes.",
        "MEAS-60D-1": "Dar seguimiento al avance de la remediación frente a la hoja de ruta priorizada, no al volumen de actividad.",
        "MEAS-60D-2": "Agregar indicadores adelantados de crecimiento de exposición, aumento de autonomía y degradación de cobertura.",
        "MEAS-60D-3": "Revisar la calidad de las métricas y eliminar las que no influyen en decisiones.",
        "MEAS-90D-1": "Realizar una reevaluación programada y comparar el avance de madurez frente a las metas.",
        "MEAS-90D-2": "Gobernar la hoja de ruta de mejora con responsables designados y próximos pasos financiados.",
        "MEAS-90D-3": "Reportar el riesgo residual y las opciones de inversión al gobierno ejecutivo.",
      },
      kpis: {
        "KPI-MEAS-1": "KPI definidos reportados con la periodicidad acordada",
        "KPI-MEAS-2": "Acciones de la hoja de ruta completadas según el plan",
        "KPI-MEAS-3": "Días transcurridos desde la última reevaluación completa de seguridad de IA",
        "KPI-MEAS-4": "Acciones estancadas sin avance en el período de revisión",
        "KPI-MEAS-5": "Mejora de madurez frente al perfil objetivo",
      },
      dependencies: [
        "Resultados de la evaluación como línea base de medición.",
        "Responsables de datos capaces de proporcionar los insumos de las métricas.",
        "Un foro ejecutivo que revise los reportes.",
      ],
    },
  },
};
