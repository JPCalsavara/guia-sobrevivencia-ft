export interface CourseComparison {
  criterion: string;
  bsi: string;
  tads: string;
}

export const courseComparisonData: CourseComparison[] = [
  {
    criterion: 'Titulacao Oficial',
    bsi: 'Bacharelado com diploma pleno de graduacao',
    tads: 'Tecnologo com diploma pleno de graduacao',
  },
  {
    criterion: 'Duracao Sugerida',
    bsi: 'Quatro anos letivos equivalentes a oito semestres',
    tads: 'Tres anos letivos equivalentes a seis semestres',
  },
  {
    criterion: 'Prazo Maximo de Integralizacao DAC',
    bsi: 'Ate quatorze semestres antes do risco de jubilamento',
    tads: 'Ate dez semestres antes do risco de jubilamento',
  },
  {
    criterion: 'Turno Principal de Aulas',
    bsi: 'Integral e diurno com aulas pela manha e a tarde',
    tads: 'Noturno com aulas a partir das dezenove horas',
  },
  {
    criterion: 'Perfil Curricular',
    bsi: 'Maior fundamentacao teorica, calculo formal, administracao e governanca',
    tads: 'Foco intensivo em desenvolvimento web, bancos de dados e engenharia pratica',
  },
  {
    criterion: 'Requisito Final Obrigatório',
    bsi: 'Trabalho de Conclusao de Curso com monografia e banca examinadora',
    tads: 'Estagio supervisionado formal ou projeto pratico de conclusao',
  },
  {
    criterion: 'Mercado de Trabalho de Software',
    bsi: 'Concorre em igualdade de condicoes para vagas de tecnologia',
    tads: 'Concorre em igualdade de condicoes para vagas de tecnologia',
  },
  {
    criterion: 'Pos-Graduacao Estrita e Vistos no Exterior',
    bsi: 'Vantagem formal para mestrados academicos e vistos de quatro anos de curso',
    tads: 'Aceito em pos-graduacoes especializadas, mestrados profissionais e mercado global',
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
    title: 'Aprovacao em Todas as Disciplinas Obrigatorias',
    description: 'Concluir todas as materias fixadas no catalogo do seu ano de ingresso',
    detail: 'Verifique no historico do e-DAC se nao ha disciplinas obrigatorias pendentes do ciclo basico ou avancado.',
  },
  {
    id: 'eletivas',
    title: 'Cota Minima de Creditos em Disciplinas Eletivas',
    description: 'Cumprir os creditos exigidos entre eletivas do catalogo e eletivas livres',
    detail: 'Eletivas livres podem ser cursadas na FCA em Limeira ou nos institutos de Barao Geraldo, alem do Centro de Ensino de Linguas.',
  },
  {
    id: 'extensao',
    title: 'Atividades Complementares e Curricularizacao da Extensao',
    description: 'Comprovar o minimo regulamentar de sessenta horas complementares',
    detail: 'Certificados emitidos pela Atria, Liestag, Semeia Code, Enactus ou Coursera institucional contam para essa meta.',
  },
  {
    id: 'tcc-estagio',
    title: 'Conclusao Aprovada de TCC ou Estagio Supervisionado',
    description: 'Apresentar monografia ou relatorio formal de estagio conforme o curso',
    detail: 'Em BSI e necessaria a aprovacao formal em banca examinadora. Em TADS e exigido o relatorio de estagio na empresa conveniada.',
  },
  {
    id: 'quitacao-biblioteca',
    title: 'Regularidade Cadastral e Nada Consta na Biblioteca',
    description: 'Garantir quitacao de emprestimos e pendencias no sistema SBU e na DAC',
    detail: 'A emissao da declaracao de nada consta e requisito previo para a liberacao da colacao de grau.',
  },
];
