import {
  CourseId,
  JourneyStage,
  StudentPriority,
  StudentAvailability,
} from '@/types/studentProfile';

export interface RecommendationInput {
  course: CourseId;
  stage: JourneyStage;
  priority: StudentPriority;
  availability: StudentAvailability;
}

export interface RecommendedSection {
  label: string;
  href: string;
  reason: string;
}

export interface Recommendation {
  sections: RecommendedSection[];
  pitfalls: string[];
  balanceMessage: string;
}

const prioritySections: Record<StudentPriority, RecommendedSection> = {
  mercado: {
    label: 'Carreira e estagios',
    href: '/carreira',
    reason: 'Reune orientacoes de estagio, preparacao para processos seletivos e trilhas de mercado.',
  },
  pesquisa: {
    label: 'Vida academica',
    href: '/academico',
    reason: 'Concentra iniciacao cientifica, monitoria PAD e caminhos de aprofundamento academico.',
  },
  empreendedorismo: {
    label: 'Carreira e projetos',
    href: '/carreira',
    reason: 'Apresenta entidades, projetos proprios e oportunidades de empreender dentro da faculdade.',
  },
  cicloBasico: {
    label: 'Vida academica',
    href: '/academico',
    reason: 'Traz apoio para calculo, programacao e aprovacao nas materias do ciclo basico.',
  },
};

const stageSections: Record<JourneyStage, RecommendedSection> = {
  calouro: {
    label: 'Guia do calouro',
    href: '/calouros',
    reason: 'Centraliza matricula, moradia, bandejao e os primeiros passos no campus.',
  },
  meio: {
    label: 'Estudos com inteligencia artificial',
    href: '/estudos-ia',
    reason: 'Ajuda a organizar estudos e acelerar creditos com apoio de ferramentas de estudo.',
  },
  formando: {
    label: 'Carreira e estagios',
    href: '/carreira',
    reason: 'Apoia estagio supervisionado, trabalho de conclusao e transicao para o mercado.',
  },
};

const campusSection: RecommendedSection = {
  label: 'Vida no campus',
  href: '/campus',
  reason: 'Mostra servicos, contatos e apoio ao bem-estar para equilibrar a rotina.',
};

const stagePitfalls: Record<JourneyStage, string[]> = {
  calouro: [
    'Acumular materias dificeis sem acompanhar o ritmo do ciclo basico.',
    'Entrar em muitas entidades antes de firmar a rotina de estudos.',
  ],
  meio: [
    'Perder prazos de iniciacao cientifica e de inscricao em monitoria PAD.',
    'Assumir estagio, projetos e disciplinas pesadas ao mesmo tempo.',
  ],
  formando: [
    'Deixar horas complementares e documentacao de colacao para a ultima hora.',
    'Conciliar estagio e trabalho de conclusao sem reservar tempo de descanso.',
  ],
};

function buildBalanceMessage(input: RecommendationInput): string {
  const base =
    'Equilibre desempenho academico e bem-estar. Reserve horarios de descanso e evite acumular atividades alem do que a sua rotina comporta.';

  if (input.availability === 'alta') {
    return `${base} Mesmo com bastante tempo livre, escolha poucas frentes e leve cada uma com profundidade, pois assumir tudo de uma vez costuma levar a sobrecarga.`;
  }

  if (input.availability === 'baixa') {
    return `${base} Com pouco tempo livre, priorize uma unica frente alem das aulas e proteja seu descanso para manter a saude mental.`;
  }

  return `${base} Com tempo moderado, concentre a energia em uma ou duas atividades extracurriculares bem escolhidas.`;
}

export function buildRecommendation(input: RecommendationInput): Recommendation {
  const sections: RecommendedSection[] = [];
  const seen = new Set<string>();

  const push = (section: RecommendedSection) => {
    if (!seen.has(section.href)) {
      seen.add(section.href);
      sections.push(section);
    }
  };

  push(prioritySections[input.priority]);
  push(stageSections[input.stage]);
  push(campusSection);

  const pitfalls = [...stagePitfalls[input.stage]];

  if (input.availability === 'alta' && input.priority !== 'cicloBasico') {
    pitfalls.push('Dizer sim a todas as oportunidades e comprometer o foco e o descanso.');
  }

  return {
    sections,
    pitfalls,
    balanceMessage: buildBalanceMessage(input),
  };
}
