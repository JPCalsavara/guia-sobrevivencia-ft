export interface MuralComment {
  id: string;
  autor?: string;
  conteudo: string;
  timestamp: string;
}

export interface MuralAnswer {
  id: string;
  conteudo: string;
  timestamp: string;
  isOfficial: boolean;
  authorRole: string;
}

export interface MuralQuestion {
  id: string;
  titulo: string;
  descricao: string;
  autor?: string;
  category: 'matricula' | 'academico' | 'campus' | 'carreira' | 'moradia';
  categoryLabel: string;
  upvotes: number;
  createdAt: string;
  officialAnswer?: MuralAnswer;
  comments: MuralComment[];
}

export const muralCategories = [
  { id: 'todas', label: 'Todas as Dúvidas' },
  { id: 'matricula', label: 'Matrícula e DAC' },
  { id: 'academico', label: 'Acadêmico e Disciplinas' },
  { id: 'campus', label: 'Campus e Serviços' },
  { id: 'carreira', label: 'Estágio e Carreira' },
  { id: 'moradia', label: 'Moradia e Apoio' }
] as const;

export const muralSortOptions = [
  { id: 'mais-votadas', label: 'Mais votadas' },
  { id: 'recentes', label: 'Mais recentes' },
  { id: 'respondidas', label: 'Respondidas pela gestão' },
  { id: 'em-aberto', label: 'Ainda em aberto' }
] as const;

export const muralSeedData: MuralQuestion[] = [
  {
    id: 'mural-matricula-reajuste-disciplinas',
    titulo: 'Como funciona o reajuste de matrícula na primeira semana de aula?',
    descricao:
      'Quero entender o passo a passo do reajuste de disciplinas pelo sistema da DAC logo no início do semestre e quais os prazos para incluir ou retirar matérias sem prejuízo no histórico.',
    autor: 'Calouro do noturno',
    category: 'matricula',
    categoryLabel: 'Matrícula e DAC',
    upvotes: 42,
    createdAt: '2024-02-10T13:00:00.000Z',
    officialAnswer: {
      id: 'mural-resposta-reajuste-disciplinas',
      conteudo:
        'O reajuste de matrícula ocorre na primeira semana letiva pelo portal da DAC. Nesse período é possível incluir ou retirar disciplinas respeitando a carga horária mínima do semestre. Acompanhe os prazos no calendário acadêmico em https://www.dac.unicamp.br para evitar reprovação por frequência.',
      timestamp: '2024-02-11T09:30:00.000Z',
      isOfficial: true,
      authorRole: 'Coordenadoria de Graduação da FT'
    },
    comments: [
      {
        id: 'mural-comentario-reajuste-01',
        autor: 'Veterano do BSI',
        conteudo: 'No meu primeiro semestre consegui ajustar tudo pelo portal sem precisar ir presencialmente à secretaria.',
        timestamp: '2024-02-11T12:00:00.000Z'
      }
    ]
  },
  {
    id: 'mural-academico-coeficiente-progressao',
    titulo: 'O coeficiente de progressão influencia a prioridade na matrícula?',
    descricao:
      'Ouvi dizer que o coeficiente de progressão pesa na hora de disputar vagas em disciplinas concorridas. Gostaria de confirmar como esse índice é calculado e se ele realmente define a ordem de prioridade.',
    autor: 'Estudante do terceiro semestre',
    category: 'academico',
    categoryLabel: 'Acadêmico e Disciplinas',
    upvotes: 31,
    createdAt: '2024-02-14T18:20:00.000Z',
    officialAnswer: {
      id: 'mural-resposta-coeficiente-progressao',
      conteudo:
        'O coeficiente de progressão mede a porcentagem de créditos já integralizados em relação ao total exigido pelo curso. Ele compõe o cálculo de prioridade na matrícula junto a outros índices. Detalhes oficiais estão disponíveis em https://www.dac.unicamp.br para consulta do catálogo do curso.',
      timestamp: '2024-02-15T10:00:00.000Z',
      isOfficial: true,
      authorRole: 'Diretoria Acadêmica'
    },
    comments: []
  },
  {
    id: 'mural-campus-laboratorios-horario',
    titulo: 'Os laboratórios de informática ficam abertos aos sábados?',
    descricao:
      'Preciso usar os laboratórios do bloco de laboratórios para desenvolver trabalhos em grupo nos fins de semana e queria saber se existe liberação aos sábados e qual o horário de funcionamento.',
    autor: 'Grupo de projeto integrador',
    category: 'campus',
    categoryLabel: 'Campus e Serviços',
    upvotes: 17,
    createdAt: '2024-02-20T21:45:00.000Z',
    comments: [
      {
        id: 'mural-comentario-laboratorios-01',
        autor: 'Monitor de laboratório',
        conteudo: 'Na minha experiência o acesso aos sábados depende de agendamento prévio com a coordenadoria de TIC da faculdade.',
        timestamp: '2024-02-21T08:15:00.000Z'
      }
    ]
  },
  {
    id: 'mural-carreira-estagio-noturno',
    titulo: 'Dá para conciliar estágio de manhã com o curso integral do BSI?',
    descricao:
      'Recebi uma proposta de estágio presencial no período da manhã mas estou no curso integral. Alguém conseguiu ajustar a grade para não ultrapassar o limite de horas semanais da Lei do Estágio?',
    autor: 'Estudante do BSI integral',
    category: 'carreira',
    categoryLabel: 'Estágio e Carreira',
    upvotes: 9,
    createdAt: '2024-02-25T16:10:00.000Z',
    comments: []
  },
  {
    id: 'mural-moradia-republica-primeiro-semestre',
    titulo: 'Vale a pena fechar república antes de conhecer a cidade?',
    descricao:
      'Sou de outra cidade e estou em dúvida se fecho uma república à distância ou se espero chegar para visitar os imóveis pessoalmente antes de assinar qualquer contrato de aluguel.',
    autor: 'Ingressante de outra cidade',
    category: 'moradia',
    categoryLabel: 'Moradia e Apoio',
    upvotes: 24,
    createdAt: '2024-03-01T11:30:00.000Z',
    officialAnswer: {
      id: 'mural-resposta-republica-primeiro-semestre',
      conteudo:
        'Recomendamos visitar o imóvel presencialmente e conversar com estudantes veteranos moradores antes de adiantar valores de caução ou reserva. Oriente-se também pelos canais de apoio ao estudante divulgados em https://www.ft.unicamp.br para evitar golpes de aluguel.',
      timestamp: '2024-03-02T14:00:00.000Z',
      isOfficial: true,
      authorRole: 'Serviço de Apoio ao Estudante'
    },
    comments: [
      {
        id: 'mural-comentario-republica-01',
        autor: 'Moradora da Vila Cristovam',
        conteudo: 'Esperei chegar para visitar e foi a melhor decisão, pois muitas fotos de anúncio não correspondiam ao imóvel real.',
        timestamp: '2024-03-02T18:40:00.000Z'
      }
    ]
  },
  {
    id: 'mural-academico-trancamento-semestre',
    titulo: 'Quais os impactos de trancar o semestre inteiro no histórico?',
    descricao:
      'Estou pensando em trancar o semestre por motivos de saúde e gostaria de entender se isso aparece no histórico escolar e se afeta o tempo máximo de integralização do curso.',
    autor: 'Estudante do quarto semestre',
    category: 'academico',
    categoryLabel: 'Acadêmico e Disciplinas',
    upvotes: 13,
    createdAt: '2024-03-05T09:05:00.000Z',
    comments: []
  }
];
