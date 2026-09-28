export interface CourseComparison {
  criterion: string;
  bsi: string;
  tads: string;
}

export const courseComparisonData: CourseComparison[] = [
  {
    criterion: 'Titulação Oficial',
    bsi: 'Bacharelado com diploma pleno de graduação',
    tads: 'Tecnólogo com diploma pleno de graduação',
  },
  {
    criterion: 'Duração Sugerida',
    bsi: 'Quatro anos letivos equivalentes a oito semestres',
    tads: 'Três anos letivos equivalentes a seis semestres',
  },
  {
    criterion: 'Prazo Máximo de Integralização DAC',
    bsi: 'Até quatorze semestres antes do risco de jubilamento',
    tads: 'Até dez semestres antes do risco de jubilamento',
  },
  {
    criterion: 'Turno Principal de Aulas',
    bsi: 'Integral e diurno com aulas pela manhã e à tarde',
    tads: 'Noturno com aulas a partir das dezenove horas',
  },
  {
    criterion: 'Perfil Curricular',
    bsi: 'Maior fundamentação teórica, cálculo formal, administração e governança',
    tads: 'Foco intensivo em desenvolvimento web, bancos de dados e engenharia prática',
  },
  {
    criterion: 'Requisito Final Obrigatório',
    bsi: 'Trabalho de Conclusão de Curso com monografia e banca examinadora',
    tads: 'Estágio supervisionado formal ou projeto prático de conclusão',
  },
  {
    criterion: 'Mercado de Trabalho de Software',
    bsi: 'Concorre em igualdade de condições para vagas de tecnologia',
    tads: 'Concorre em igualdade de condições para vagas de tecnologia',
  },
  {
    criterion: 'Pós-Graduação Estrita e Vistos no Exterior',
    bsi: 'Vantagem formal para mestrados acadêmicos e vistos de quatro anos de curso',
    tads: 'Aceito em pós-graduações especializadas, mestrados profissionais e mercado global',
  },
];

export interface GraduationCheckItem {
  id: string;
  title: string;
  description: string;
  detail: string;
}

export const graduationChecklistData: GraduationCheckItem[] = [
  {
    id: 'obrigatorias',
    title: 'Aprovação em Todas as Disciplinas Obrigatórias',
    description: 'Concluir todas as matérias fixadas no catálogo do seu ano de ingresso',
    detail: 'Verifique no histórico do e-DAC se não há disciplinas obrigatórias pendentes do ciclo básico ou avançado.',
  },
  {
    id: 'eletivas',
    title: 'Cota Mínima de Créditos em Disciplinas Eletivas',
    description: 'Cumprir os créditos exigidos entre eletivas do catálogo e eletivas livres',
    detail: 'Eletivas livres podem ser cursadas na FCA em Limeira ou nos institutos de Barão Geraldo, além do Centro de Ensino de Línguas.',
  },
  {
    id: 'extensao',
    title: 'Atividades Complementares e Curricularização da Extensão',
    description: 'Comprovar o mínimo regulamentar de sessenta horas complementares',
    detail: 'Certificados emitidos pela Atria, Liestag, Semeia Code, Enactus ou Coursera institucional contam para essa meta.',
  },
  {
    id: 'tcc-estagio',
    title: 'Conclusão Aprovada de TCC ou Estágio Supervisionado',
    description: 'Apresentar monografia ou relatório formal de estágio conforme o curso',
    detail: 'Em BSI é necessária a aprovação formal em banca examinadora. Em TADS é exigido o relatório de estágio na empresa conveniada.',
  },
  {
    id: 'quitacao-biblioteca',
    title: 'Regularidade Cadastral e Nada Consta na Biblioteca',
    description: 'Garantir quitação de empréstimos e pendências no sistema SBU e na DAC',
    detail: 'A emissão da declaração de nada consta é requisito prévio para a liberação da colação de grau.',
  },
];
