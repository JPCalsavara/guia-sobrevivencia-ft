export interface CareerComparisonRow {
  criterion: string;
  estagio: string;
  trainee: string;
  junior: string;
}

export const internshipVsTraineeData: CareerComparisonRow[] = [
  {
    criterion: 'Momento de Ingresso',
    estagio: 'Durante a graduacao, a partir do segundo semestre em TADS ou a partir do quarto semestre em BSI.',
    trainee: 'No ultimo ano da graduacao ou ate dois a tres anos apos a conclusao do curso superior.',
    junior: 'Imediatamente apos a formatura ou mediante efetivacao direta do estagio.'
  },
  {
    criterion: 'Carga Horaria e Regime',
    estagio: 'Maximo de trinta horas semanais, seis horas diarias, regido pela Lei Federal de Estagio.',
    trainee: 'Quarenta horas semanais em regime integral CLT com carteira de trabalho assinada.',
    junior: 'Quarenta horas semanais em regime CLT ou prestacao de servicos PJ.'
  },
  {
    criterion: 'Faixa de Remuneracao',
    estagio: 'Bolsa auxilio de 1800 a 3500 reais mensais, alem de vale transporte e recesso remunerado.',
    trainee: 'Salario executivo entre 6000 e 9000 reais mensais, bonus por metas e plano de previdencia.',
    junior: 'Salario base de mercado entre 4000 e 6500 reais mensais com beneficios corporativos padrao.'
  },
  {
    criterion: 'Objetivo Principal',
    estagio: 'Aprendizado pratico supervisionado, aplicacao de conceitos academicos e adaptacao cultural.',
    trainee: 'Aceleracao intensa de carreira para formacao de futuros lideres tecnicos e executivos.',
    junior: 'Execucao autonoma de demandas tecnicas operacionais dentro da equipe de desenvolvimento.'
  },
  {
    criterion: 'Processo Seletivo',
    estagio: 'Triagem de curriculo, testes de logica e entrevistas com lideranca tecnica imediata.',
    trainee: 'Etapas eliminatorias concorridas, dinamicas de grupo, business cases e painel com diretores.',
    junior: 'Entrevista tecnica aprofundada, revisao de codigo no GitHub e avaliacao de experiencia previa.'
  }
];

export interface CompanyShowcase {
  id: string;
  name: string;
  tag: string;
  description: string;
  programs: string;
  hiringProfile: string;
  officialUrl: string;
}

export const companiesShowcaseData: CompanyShowcase[] = [
  {
    id: 'tractian',
    name: 'Tractian',
    tag: 'Hardware IoT e IA Industrial',
    description: 'Empresa global de tecnologia com aceleracao no Vale do Silicio, desenvolvendo sensores inteligentes e plataformas preditivas para fabricas.',
    programs: 'Programas de estagio e contratacoes de tecnologia com cultura focada em alta autonomia, ritmo intenso e foco em resolucao pratica de problemas.',
    hiringProfile: 'Estudantes com perfil autodidata, forte base em logica, programacao backend em Node.js ou Go, desenvolvimento de firmware e analise de sinais.',
    officialUrl: 'https://tractian.com/carreiras'
  },
  {
    id: 'itau',
    name: 'Itaú Unibanco',
    tag: 'Maior Banco da América Latina',
    description: 'Maior instituicao financeira privada do pais, liderando processos macicos de modernizacao tecnologica para nuvem AWS e microsservicos.',
    programs: 'Programa de Estagio de Tecnologia, Programa Trainee Itau Corporativo e realizacao do Hackathon Batalha de Agentes com foco em inteligencia artificial.',
    hiringProfile: 'Graduandos de BSI, TADS e engenharias da FT interessados em sistemas distribuidos de alta escala, seguranca transacional e ciencia de dados.',
    officialUrl: 'https://www.itau.com.br/carreiras'
  },
  {
    id: 'stone',
    name: 'Stone',
    tag: 'Fintech e Meios de Pagamento',
    description: 'Empresa inovadora de servicos financeiros e infraestrutura de pagamentos com forte cultura de dono e meritocracia.',
    programs: 'Recruta Stone, processo seletivo historico aberto sem restricao de cursos focado em identificar pessoas com alta capacidade cognitiva e energia.',
    hiringProfile: 'Pessoas com paixao por resolver problemas complexos, habilidades de comunicacao, raciocinio matematico e vontade de crescer aceleradamente.',
    officialUrl: 'https://recruta.stone.com.br/'
  },
  {
    id: 'qitech',
    name: 'QI Tech',
    tag: 'Infraestrutura de Crédito e APIs',
    description: 'Primeira sociedade de credito direto autorizada pelo Banco Central do Brasil, construindo a infraestrutura para fintechs e servicos financeiros.',
    programs: 'Desafios tecnicos para universitarios, bootcamps de formacao e estagios focados em engenharia de software de baixa latencia.',
    hiringProfile: 'Desenvolvedores com interesse genuino em arquitetura de microsservicos, Python, Go, filas Kafka, seguranca criptografica e compliance regulatorio.',
    officialUrl: 'https://qitech.com.br/'
  },
  {
    id: 'agibank',
    name: 'Agibank',
    tag: 'Banco Digital e Polo Regional',
    description: 'Banco digital com grande hub corporativo e de engenharia instalado na regiao metropolitana de Campinas e proximidades de Limeira.',
    programs: 'Programa Semestral de Estagio Agi com trilhas especializadas para desenvolvimento web, mobile, ciencia de dados e ciberseguranca.',
    hiringProfile: 'Alunos da FT da Unicamp buscando oportunidades com proximidade geografica em Limeira e Campinas com plano estruturado de efetivacao.',
    officialUrl: 'https://carreiras.agibank.com.br/'
  }
];

export interface AppleDeveloperAcademy {
  institution: string;
  partnership: string;
  duration: string;
  websiteUrl: string;
  instagramUrl: string;
  description: string;
  benefits: string[];
  skills: string[];
}

export const appleDeveloperAcademyData: AppleDeveloperAcademy = {
  institution: 'Instituto de Pesquisas Eldorado em Campinas',
  partnership: 'Apple',
  duration: 'De um a dois anos com dedicacao de quatro horas diarias',
  websiteUrl: 'https://developeracademy.eldorado.org.br/campinas/',
  instagramUrl: 'https://www.instagram.com/developeracademy.cps/',
  description: 'Programa oficial de formacao e capacitacao avancada em tecnologia sediado no Instituto Eldorado em Campinas em parceria internacional com a Apple, capacitando universitarios da regiao na criacao de solucoes digitais no ecossistema iOS.',
  benefits: [
    'Bolsa auxilio mensal competitiva concedida durante todo o periodo do programa.',
    'Emprestimo individual de kit completo da Apple incluindo MacBook, iPhone e Apple Watch durante as atividades.',
    'Mentoria direta com especialistas em design, desenvolvimento de software e negocios.',
    'Suporte e financiamento de contas de desenvolvedor para publicacao de aplicativos na App Store mundial.'
  ],
  skills: [
    'Linguagem Swift e arquitetura moderna com SwiftUI.',
    'Human Interface Guidelines e design de experiencia do usuario.',
    'Metodologias ageis de prototipagem rapida e Challenge Based Learning.',
    'Validacao de modelo de negocios e apresentacao de projetos em pitch.'
  ]
};

export interface MarketVsResearchRow {
  criterion: string;
  mercado: string;
  pesquisa: string;
}

export const marketVsResearchData: MarketVsResearchRow[] = [
  {
    criterion: 'Foco Central de Atuacao',
    mercado: 'Resolucao de problemas corporativos, entrega continua de software e criacao de valor comercial.',
    pesquisa: 'Investigacao de problemas cientificos na fronteira do conhecimento e publicacao de artigos.'
  },
  {
    criterion: 'Remuneracao e Rendimento',
    mercado: 'Salarios mais agressivos, bonificacoes semestrais por metas e progressao rapida por desempenho.',
    pesquisa: 'Bolsas de pesquisa CAPES, CNPq ou FAPESP sem vinculo empregaticio e sem retencao de impostos.'
  },
  {
    criterion: 'Ritmo e Metodologia de Trabalho',
    mercado: 'Sprints curtas de uma a duas semanas, prazos comerciais rigidos e trabalho intenso em squads.',
    pesquisa: 'Ciclos de medio e longo prazo, rigor metodologico formal, escrita acadêmica e apresentacoes em congressos.'
  },
  {
    criterion: 'Perfil Mais Indicado',
    mercado: 'Estudantes que preferem ver produtos em producao rapidamente e valorizam dinamismo financeiro.',
    pesquisa: 'Estudantes com vocacao analitica profunda, gosto pela docencia, leitura teorica e autonomia cientifica.'
  }
];

export interface HackathonSquadRole {
  role: string;
  description: string;
}

export interface HackathonGuide {
  title: string;
  description: string;
  squadRoles: HackathonSquadRole[];
  featuredHackathon: {
    title: string;
    description: string;
    url: string;
  };
}

export const hackathonGuideData: HackathonGuide = {
  title: 'Guia de Hackathons e Maratonas Tecnologicas',
  description: 'Maratonas de programacao e desenvolvimento de fim de semana, com duracao de vinte e quatro a quarenta e oito horas ininterruptas, onde grupos multidisciplinares criam prototipos funcionais para problemas reais.',
  squadRoles: [
    {
      role: 'Desenvolvedor Frontend e Mobile',
      description: 'Responsavel pela interface, fluxo visual e rapidez de navegacao no prototipo apresentado aos avaliadores.'
    },
    {
      role: 'Desenvolvedor Backend e Dados',
      description: 'Estrutura as APIs, conecta bancos de dados leves e integra modelos de inteligencia artificial da solucao.'
    },
    {
      role: 'Designer de Produto UI e UX',
      description: 'Define a identidade visual, desenha os fluxos de telas no Figma e garante acessibilidade e clareza.'
    },
    {
      role: 'Estrategista de Negocios e Pitch',
      description: 'Valida a viabilidade mercadologica, precificacao, metricas e conduz a apresentacao final de tres minutos.'
    }
  ],
  featuredHackathon: {
    title: 'Hackathon Itaú Batalha de Agentes',
    description: 'Competicao universitária promovida pelo Itau com desafios praticos de negocios e construcao de agentes autonomos com inteligencia artificial, proporcionando premiacoes expressivas e via direta de contratacao.',
    url: 'https://sejatrainee.com.br/hackathon-itau-batalha-de-agentes/'
  }
};
