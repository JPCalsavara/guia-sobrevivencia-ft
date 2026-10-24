import {
  CourseId,
  JourneyStage,
  StudentPriority,
  StudentAvailability,
} from '@/types/studentProfile';

export type QuizStepId = 'curso' | 'momento' | 'interesse' | 'carga';

export interface QuizOption<T extends string | number> {
  value: T;
  label: string;
  description: string;
}

export interface QuizCourseStep {
  id: 'curso';
  title: string;
  question: string;
  options: QuizOption<CourseId>[];
}

export interface QuizMomentStep {
  id: 'momento';
  title: string;
  question: string;
  options: QuizOption<JourneyStage>[];
}

export interface QuizPriorityStep {
  id: 'interesse';
  title: string;
  question: string;
  options: QuizOption<StudentPriority>[];
}

export interface QuizAvailabilityStep {
  id: 'carga';
  title: string;
  question: string;
  options: QuizOption<StudentAvailability>[];
}

export type QuizStep =
  | QuizCourseStep
  | QuizMomentStep
  | QuizPriorityStep
  | QuizAvailabilityStep;

export const quizCourseStep: QuizCourseStep = {
  id: 'curso',
  title: 'Qual e o seu curso',
  question: 'Escolha a graduacao que voce faz na Faculdade de Tecnologia.',
  options: [
    {
      value: 'bsi',
      label: 'Sistemas de Informacao',
      description: 'Bacharelado com quatro anos de duracao e enfase em sistemas corporativos.',
    },
    {
      value: 'tads',
      label: 'Analise e Desenvolvimento de Sistemas',
      description: 'Tecnologo com tres anos de duracao e foco em desenvolvimento rapido.',
    },
  ],
};

export const quizMomentStep: QuizMomentStep = {
  id: 'momento',
  title: 'Em que momento academico voce esta',
  question: 'Isso ajuda a ajustar as prioridades da sua fase atual.',
  options: [
    {
      value: 'calouro',
      label: 'Ingressante ou calouro',
      description: 'Primeiro ano, ainda ajustando a rotina e o ciclo basico.',
    },
    {
      value: 'meio',
      label: 'No meio do curso',
      description: 'Ja venceu o ciclo basico e busca acelerar creditos e experiencia.',
    },
    {
      value: 'formando',
      label: 'Perto de formar',
      description: 'Ultimos periodos, com estagio, trabalho de conclusao e colacao a vista.',
    },
  ],
};

export const quizPriorityStep: QuizPriorityStep = {
  id: 'interesse',
  title: 'Qual e o seu interesse prioritario agora',
  question: 'Escolha o objetivo que mais pesa neste semestre.',
  options: [
    {
      value: 'mercado',
      label: 'Mercado corporativo',
      description: 'Estagio, carreira em empresas e preparacao para processos seletivos.',
    },
    {
      value: 'pesquisa',
      label: 'Pesquisa cientifica',
      description: 'Iniciacao cientifica, monitoria e aprofundamento academico.',
    },
    {
      value: 'empreendedorismo',
      label: 'Empreendedorismo',
      description: 'Criar produtos, participar de entidades e desenvolver projetos proprios.',
    },
    {
      value: 'cicloBasico',
      label: 'Foco em aprovacao no ciclo basico',
      description: 'Garantir aprovacao em calculo, programacao e nas materias iniciais.',
    },
  ],
};

export const quizAvailabilityStep: QuizAvailabilityStep = {
  id: 'carga',
  title: 'Quanta carga horaria extra voce tem',
  question: 'Considere o tempo livre alem das aulas e dos estudos obrigatorios.',
  options: [
    {
      value: 'baixa',
      label: 'Pouco tempo livre',
      description: 'Rotina cheia, com pouca margem para atividades adicionais.',
    },
    {
      value: 'media',
      label: 'Tempo moderado',
      description: 'Consegue encaixar uma ou duas atividades extracurriculares por semana.',
    },
    {
      value: 'alta',
      label: 'Bastante tempo livre',
      description: 'Dispoe de varias horas semanais para projetos e oportunidades.',
    },
  ],
};

export const welcomeQuizSteps: QuizStep[] = [
  quizCourseStep,
  quizMomentStep,
  quizPriorityStep,
  quizAvailabilityStep,
];
