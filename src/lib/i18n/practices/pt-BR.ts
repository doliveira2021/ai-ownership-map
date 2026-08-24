import type { PracticesBundle } from "./types";

export const ptBrPractices: PracticesBundle = {
  categories: {
    "risk-based-control-escalation": "Escalonamento de controles baseado em risco",
    "pre-deployment-evaluation": "Avaliação antes da implantação",
    "adversarial-validation": "Validação adversarial / Red teaming",
    "monitoring-detection-effectiveness": "Monitoramento contínuo e eficácia de detecção",
    "incident-preparedness": "Preparação e resposta a incidentes",
    "external-review": "Revisão externa / independente",
    "high-stakes-inventory": "Inventário e responsabilização de IA crítica",
    "safeguard-effectiveness": "Eficácia das salvaguardas / melhoria contínua",
  },
  entries: {
    "IP-RSP-001": {
      title: "Limiares de capacidade que acionam salvaguardas mais fortes",
      summary:
        "A política pública descreve uma governança de risco proporcional à capacidade e ao risco, com limiares de capacidade definidos que exigem salvaguardas mais fortes antes de ampliar o uso ou implantar.",
      implication:
        "Escalone as exigências de controle a partir de uma classificação de risco documentada, em vez de aplicar controles uniformes, e defina os limiares em que um sistema de IA passa a exigir aprovação e salvaguardas adicionais.",
    },
    "IP-RSP-002": {
      title: "Avaliação de capacidade antes das decisões de implantação",
      summary:
        "A política pública descreve a avaliação da capacidade e das salvaguardas necessárias antes das decisões de implantação, com determinações documentadas.",
      implication:
        "Transforme as decisões de segurança de IA em um gate explícito de liberação: exija avaliação documentada de capacidade, exposição e salvaguardas antes que o sistema chegue à produção.",
    },
    "IP-RSP-003": {
      title: "Salvaguardas de implantação, controles de acesso e monitoramento",
      summary:
        "A política pública descreve salvaguardas de implantação que incluem controles de acesso, monitoramento e classificadores usados para detectar e restringir usos indevidos.",
      implication:
        "Combine privilégio mínimo para sistemas e agentes de IA com cobertura de detecção sobre o uso de IA, para que proteção e monitoramento se reforcem mutuamente.",
    },
    "IP-RSP-004": {
      title: "Procedimentos de resposta rápida quando as salvaguardas falham",
      summary:
        "A política pública descreve procedimentos de resposta rápida usados quando as salvaguardas se mostram insuficientes, incluindo a restrição da implantação.",
      implication:
        "Defina previamente quem pode restringir, conter ou revogar um sistema ou agente de IA e ensaie esse procedimento antes que um incidente force a decisão.",
    },
    "IP-RSP-005": {
      title: "Relatórios de risco e mecanismos de revisão externa",
      summary:
        "A política pública descreve relatórios internos de risco (Risk Reports) e mecanismos de revisão externa e de feedback sobre as decisões de segurança.",
      implication:
        "Entregue à liderança executiva um relatório recorrente de risco de IA e adicione uma etapa de revisão independente para decisões de IA de alto risco, para que a responsabilização não fique restrita ao time de entrega.",
    },
    "IP-FSR-001": {
      title: "Medição da eficácia de detecção",
      summary:
        "O roadmap público descreve a medição contínua da eficácia de detecção, incluindo cobertura, tempo de detecção e acurácia.",
      implication:
        "Acompanhe cobertura de detecção, tempo de detecção e acurácia da telemetria relacionada a IA como KPIs, em vez de tratar a mera existência de logs como suficiente.",
    },
    "IP-FSR-002": {
      title: "Exercícios adversariais e procedimentos de resposta documentados",
      summary:
        "O roadmap público descreve exercícios adversariais regulares, procedimentos de resposta documentados para cenários prioritários e investigação e execução de playbooks assistidas por IA.",
      implication:
        "Programe exercícios de incidentes de IA para os cenários de maior prioridade e mantenha os playbooks atualizados, inclusive quanto ao uso de IA durante a investigação.",
    },
    "IP-FSR-003": {
      title: "Catalogação dos usos críticos de IA",
      summary:
        "O roadmap público descreve a catalogação dos usos de IA de maior criticidade como base para priorizar salvaguardas e monitoramento.",
      implication:
        "Mantenha o inventário orientado a risco: sinalize quais sistemas e agentes de IA são críticos para que controles e monitoramento se concentrem onde o impacto ao negócio é maior.",
    },
    "IP-FSR-004": {
      title: "Red teaming e avaliação da eficácia do monitoramento",
      summary:
        "O roadmap público descreve red teaming, avaliação da eficácia do monitoramento e salvaguardas que evoluem conforme a capacidade avança.",
      implication:
        "Trate testes adversariais e revisão de eficácia de controles como atividades recorrentes vinculadas à mudança de capacidade, e não como testes pontuais antes do lançamento.",
    },
    "IP-GDM-001": {
      title: "Critical Capability Levels e avaliação de risco baseada em evidências",
      summary:
        "O framework público descreve avaliação de risco baseada em evidências e a identificação de limiares de capacidade de risco severo, chamados de Critical Capability Levels.",
      implication:
        "Defina os limiares em que capacidade, autonomia ou privilégio de IA alteram o nível de risco da sua organização e exija evidências, e não suposições, nessa avaliação.",
    },
    "IP-GDM-002": {
      title: "Avaliação e mitigação conforme a capacidade muda",
      summary:
        "O framework público descreve a avaliação de modelos frente a limiares definidos e a aplicação de mitigações e salvaguardas mais fortes conforme a capacidade do modelo muda.",
      implication:
        "Reavalie os sistemas de IA sempre que modelo, ferramentas, privilégios ou autonomia mudarem e ajuste as salvaguardas à nova capacidade, em vez de depender de revisões em datas fixas.",
    },
  },
};
