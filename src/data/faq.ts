export interface FaqItem {
  id: string;
  category: 'matricula' | 'academico' | 'campus' | 'carreira' | 'moradia';
  categoryLabel: string;
  question: string;
  answer: string[];
  keywords: string[];
  links?: Array<{
    label: string;
    url: string;
    external?: boolean;
  }>;
}

export const faqCategories = [
  { id: 'todas', label: 'Todas as Dúvidas' },
  { id: 'matricula', label: 'Matrícula e DAC' },
  { id: 'academico', label: 'Acadêmico e Disciplinas' },
  { id: 'campus', label: 'Campus e Serviços' },
  { id: 'carreira', label: 'Estágio e Carreira' },
  { id: 'moradia', label: 'Moradia e Apoio' }
] as const;

export const faqData: FaqItem[] = [
  {
    id: 'duvida-reprovacao-prerequisito',
    category: 'academico',
    categoryLabel: 'Acadêmico e Disciplinas',
    question: 'O que acontece se eu reprovar em uma disciplina que é pré-requisito?',
    answer: [
      'Você não poderá cursar as disciplinas posteriores da grade que exigem esse conteúdo até obter aprovação na disciplina trancada ou reprovada.',
      'A recomendação dos coordenadores é rematricular na matéria reprovada na primeira oportunidade possível para evitar o efeito cascata no tempo de integralização do curso.',
      'Fique atento ao Coeficiente de Progressão CP, pois reprovações sucessivas podem reduzir o índice e aproximar o discente do limite máximo de semestres letivos permitido pelo catálogo do curso.'
    ],
    keywords: ['reprovação', 'pré-requisito', 'grade', 'coeficiente de progressão', 'integralização', 'dac'],
    links: [
      { label: 'Regras Acadêmicas e Integralização', url: '/academico#coeficientes-metricas' },
      { label: 'Grade DAC Online', url: 'https://grade.daconline.unicamp.br/login/', external: true }
    ]
  },
  {
    id: 'duvida-diferenca-bsi-tads',
    category: 'academico',
    categoryLabel: 'Acadêmico e Disciplinas',
    question: 'Qual a principal diferença entre os cursos BSI e TADS?',
    answer: [
      'O Bacharelado em Sistemas de Informação possui duração média de quatro anos, turno integral diurno com alta densidade teórica, dois ciclos formais de Trabalho de Conclusão de Curso e foco em formação científica ampla.',
      'A Tecnologia em Análise e Desenvolvimento de Sistemas é ministrada no período noturno com duração de três anos, alta aderência imediata ao mercado corporativo, projeto prático de sistemas e ampla flexibilidade para realização de estágio desde os primeiros semestres.'
    ],
    keywords: ['bsi', 'tads', 'diferença', 'noturno', 'integral', 'mercado', 'tcc', 'estágio'],
    links: [
      { label: 'Comparativo Detalhado BSI versus TADS', url: '/academico#bsi-vs-tads' }
    ]
  },
  {
    id: 'duvida-trancamento-matricula',
    category: 'matricula',
    categoryLabel: 'Matrícula e DAC',
    question: 'Como funciona o trancamento de matrícula ou desistência de disciplina na DAC?',
    answer: [
      'O cancelamento de matrícula em disciplinas isoladas deve ser solicitado pelo sistema e-DAC dentro do prazo estipulado pelo calendário acadêmico oficial da Unicamp, respeitando a carga horária mínima obrigatória do semestre.',
      'O trancamento geral do semestre letivo exige requerimento específico e justificativa formal, sendo permitido por período determinado de acordo com o regimento geral de graduação.',
      'Após o encerramento do prazo de desistência no calendário oficial, notas baixas ou ausências configuram reprovação por nota ou frequência no histórico escolar.'
    ],
    keywords: ['trancamento', 'desistência', 'cancelamento', 'calendário acadêmico', 'e-dac', 'disciplina'],
    links: [
      { label: 'Portal e-DAC e SIGA', url: 'https://sistemas.dac.unicamp.br/siga/', external: true }
    ]
  },
  {
    id: 'duvida-coeficientes-cr-cp',
    category: 'matricula',
    categoryLabel: 'Matrícula e DAC',
    question: 'O que significam os coeficientes CR e CP emitidos no histórico escolar?',
    answer: [
      'O Coeficiente de Rendimento CR reflete a média ponderada das notas obtidas em todas as disciplinas cursadas, utilizando a quantidade de créditos como peso matemático.',
      'O Coeficiente de Progressão CP mensura a porcentagem de créditos já integralizados pelo estudante em relação ao total exigido para a conclusão da graduação.',
      'O Coeficiente de Rendimento Padronizado CRP é utilizado internamente pela Diretoria Acadêmica para classificar a prioridade nas vagas durante os períodos de matrícula em disciplinas concorridas.'
    ],
    keywords: ['cr', 'cp', 'crp', 'coeficiente de rendimento', 'coeficiente de progressão', 'histórico'],
    links: [
      { label: 'Guia de Métricas e Coeficientes', url: '/academico#coeficientes-metricas' }
    ]
  },
  {
    id: 'duvida-atestado-e-carteirinha',
    category: 'matricula',
    categoryLabel: 'Matrícula e DAC',
    question: 'Como emitir o atestado de matrícula oficial e obter a carteirinha estudantil?',
    answer: [
      'O atestado de matrícula com código de validação digital deve ser emitido instantaneamente no portal e-DAC na seção de Documentos Oficiais.',
      'A identidade estudantil oficial da Unicamp está disponível em formato digital no aplicativo móvel da universidade para celulares com sistema Android e iOS.',
      'O cartão físico com chip de aproximação é confeccionado pela Diretoria Acadêmica para os calouros no início do ano letivo e serve para liberação das catracas do Restaurante Universitário e empréstimo de livros na biblioteca.'
    ],
    keywords: ['carteirinha', 'atestado de matrícula', 'e-dac', 'aplicativo unicamp', 'documentos'],
    links: [
      { label: 'Acesso ao Portal e-DAC', url: 'https://sistemas.dac.unicamp.br/siga/', external: true }
    ]
  },
  {
    id: 'duvida-bandejao-saldo-pix',
    category: 'campus',
    categoryLabel: 'Campus e Serviços',
    question: 'Como recarregar o saldo do Restaurante Universitário com Pix?',
    answer: [
      'A recarga do cartão do bandejão é realizada pelo sistema da Funcamp ou pelo totem de atendimento instalado na entrada do refeitório da Faculdade de Tecnologia.',
      'Ao gerar a cobrança por Pix no sistema online, o saldo costuma ser compensado em poucos minutos na carteira digital do estudante.',
      'O valor da refeição subsidiada para estudantes de graduação é de três reais no almoço e no jantar, contemplando prato principal, guarnição, salada, sobremesa e suco.'
    ],
    keywords: ['bandejão', 'restaurante universitário', 'ru', 'saldo', 'pix', 'funcamp', 'preço'],
    links: [
      { label: 'Cardápio e Informações do RU', url: '/campus#bandejao-ru' }
    ]
  },
  {
    id: 'duvida-circular-fretado-limeira',
    category: 'campus',
    categoryLabel: 'Campus e Serviços',
    question: 'Como funciona o transporte gratuito entre a FT, a FCA e o campus de Barão Geraldo?',
    answer: [
      'Entre a FT Campus 1 e a FCA Campus 2 opera a linha circular gratuita municipal da Unicamp em diversos horários ao longo da manhã, tarde e noite.',
      'Para deslocamento até Campinas no campus Barão Geraldo, a universidade oferece a Linha 84 do fretado intercampi, que exige reserva antecipada pelo sistema da Prefeitura Universitária de Limeira.',
      'As reservas da Linha 84 abrem sempre no período da tarde do dia útil anterior e as vagas são preenchidas por ordem de solicitação.'
    ],
    keywords: ['circular', 'fretado', 'linha 84', 'intercampi', 'fca', 'barão geraldo', 'transporte gratuito'],
    links: [
      { label: 'Horários e Paradas do Transporte', url: '/campus#transporte-limeira' },
      { label: 'Sistema de Reserva da Linha 84', url: 'https://sistemas.prefeituralimeira.unicamp.br/intercamp/', external: true }
    ]
  },
  {
    id: 'duvida-salas-laboratorios',
    category: 'campus',
    categoryLabel: 'Campus e Serviços',
    question: 'Onde consulto a sala das minhas aulas e os laboratórios de informática liberados?',
    answer: [
      'A consulta oficial de ensalamento é atualizada continuamente no sistema de salas da FT em sistemas.ft.unicamp.br/salas, organizado pelos blocos PA e PB.',
      'Os laboratórios de informática do Bloco de Laboratórios LP ficam abertos nos intervalos para estudo e desenvolvimento de trabalhos práticos.',
      'Para impressão de trabalhos e cotas gratuitas semestrais, utilize o sistema WifiPrint gerenciado pela Coordenadoria de TIC da faculdade.'
    ],
    keywords: ['salas', 'alocação', 'laboratórios', 'bloco pa', 'bloco pb', 'impressão', 'wifiprint'],
    links: [
      { label: 'Sistema de Alocação de Salas da FT', url: 'https://sistemas.ft.unicamp.br/salas', external: true },
      { label: 'Coordenadoria de TIC da FT', url: 'https://www.ft.unicamp.br/tic', external: true }
    ]
  },
  {
    id: 'duvida-estagio-requisitos',
    category: 'carreira',
    categoryLabel: 'Estágio e Carreira',
    question: 'A partir de qual semestre posso estagiar e como validar o contrato na FT?',
    answer: [
      'Alunos do curso TADS noturno podem iniciar estágio não obrigatório desde os períodos iniciais, dada a compatibilidade de horário noturno.',
      'Alunos do curso BSI integral devem atentar para a carga horária presencial diurna e compatibilizar as matérias com o limite máximo de trinta horas semanais estipulado pela Lei do Estágio.',
      'O Termo de Compromisso de Estágio deve ser gerado pela empresa ou agente de integração e submetido para assinatura da Comissão de Estágios da FT antes do início efetivo das atividades laborais.'
    ],
    keywords: ['estágio', 'termo de compromisso', 'contrato', 'comissão de estágios', 'horas', 'bsi', 'tads'],
    links: [
      { label: 'Orientações de Carreira e Estágio', url: '/carreira#orientacoes-estagio' },
      { label: 'Modelo de Currículo em LaTeX', url: '/carreira#modelo-curriculo-latex' }
    ]
  },
  {
    id: 'duvida-colacao-formatura',
    category: 'carreira',
    categoryLabel: 'Estágio e Carreira',
    question: 'Qual a diferença entre a colação de grau oficial da DAC e o baile de formatura?',
    answer: [
      'A colação de grau oficial organizada pela Diretoria Acadêmica da Unicamp é o ato público, gratuito e institucional indispensável para a emissão e expedição do diploma universitário reconhecido pelo Ministério da Educação.',
      'A festa comemorativa de formatura, incluindo baile de gala, jantar e beca com fotos de estúdio, é uma iniciativa puramente festiva e facultativa contratada por comissão independente de estudantes com empresas do setor de eventos.'
    ],
    keywords: ['formatura', 'colação de grau', 'dac', 'diploma', 'festa', 'baile'],
    links: [
      { label: 'Checklist de Formatura e Colação de Grau', url: '/academico#checklist-formatura' }
    ]
  },
  {
    id: 'duvida-moradia-estudantil',
    category: 'moradia',
    categoryLabel: 'Moradia e Apoio',
    question: 'Onde encontrar repúblicas e moradias estudantis confiáveis próximas à FT?',
    answer: [
      'A região da Vila Cristovam, Vila Anita e Jardim Morro Azul concentra a maior quantidade de repúblicas tradicionais de estudantes da Faculdade de Tecnologia da Unicamp.',
      'O portal disponibiliza o mapa interativo e diretório com contatos de repúblicas estruturadas, kitnets mobiliadas e opções com despesas inclusas de internet, água e energia elétrica.',
      'Sempre visite o imóvel pessoalmente ou converse com estudantes veteranos moradores do local antes de efetuar adiantamento de valores de caução ou reserva.'
    ],
    keywords: ['moradia', 'república', 'kitnet', 'vila cristovam', 'aluguel', 'quarto'],
    links: [
      { label: 'Mapa e Guia de Moradia', url: '/campus#moradia-limeira' }
    ]
  },
  {
    id: 'duvida-bolsas-sae-deape',
    category: 'moradia',
    categoryLabel: 'Moradia e Apoio',
    question: 'Como solicitar bolsas de permanência estudantil e auxílio moradia no SAE?',
    answer: [
      'O Serviço de Apoio ao Estudante SAE e o DEAPE abrem editais semestrais para concessão da Bolsa Auxílio Social BAS, Auxílio Moradia e Isenção de Taxa do Restaurante Universitário.',
      'O processo seletivo avalia critérios socioeconômicos mediante envio de documentação comprobatória da composição e renda familiar do estudante.',
      'Fique atento aos prazos publicados na página oficial do SAE Unicamp para não perder as datas de inscrição e entrega de formulários.'
    ],
    keywords: ['bolsa', 'sae', 'deape', 'bas', 'auxílio social', 'permanência', 'isenção ru', 'moradia'],
    links: [
      { label: 'Bolsas e Permanência Estudantil', url: '/calouros#bolsas-sociais-deape' },
      { label: 'Portal Oficial do SAE Unicamp', url: 'https://www.sae.unicamp.br', external: true }
    ]
  }
];
