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

export interface SalarySurveyLevel {
  nivel: string;
  salarioMedio: string;
  faixaMercado: string;
  regimeComum: string;
  focoPrincipal: string;
}

export interface CareerRegimeComparison {
  regime: string;
  caracteristicas: string;
  vantagens: string;
}

export interface DegreeRoiComparison {
  aspecto: string;
  graduacaoUnicamp: string;
  cursosRapidosBootcamps: string;
}

export interface SalarySurvey2026 {
  title: string;
  description: string;
  sourceUrl: string;
  niveis: SalarySurveyLevel[];
  regimes: CareerRegimeComparison[];
  roiGraduacao: DegreeRoiComparison[];
}

export const salarySurvey2026Data: SalarySurvey2026 = {
  title: 'Pesquisa Salarial de Programadores 2026 e Panorama de Remuneracao',
  description: 'Levantamento consolidado a partir da Pesquisa Salarial de Programadores do Codigo Fonte TV e indicadores das principais empresas de tecnologia do pais, revelando a distribuicao de renda real na area de desenvolvimento.',
  sourceUrl: 'https://share.google/Zio2FDrLT2Hvtk0AJ',
  niveis: [
    {
      nivel: 'Estagiario',
      salarioMedio: '2400 reais mensais',
      faixaMercado: '1800 a 3500 reais mensais',
      regimeComum: 'Termo de Compromisso de Estagio com trinta horas semanais',
      focoPrincipal: 'Aprendizado de regras de negocio e colaboracao em ambiente de desenvolvimento produtivo'
    },
    {
      nivel: 'Desenvolvedor Junior',
      salarioMedio: '4800 reais mensais',
      faixaMercado: '3500 a 6500 reais mensais',
      regimeComum: 'CLT com beneficios ou PJ inicial',
      focoPrincipal: 'Resolucao de tarefas pontuais com supervisao e suporte da lideranca tecnica'
    },
    {
      nivel: 'Desenvolvedor Pleno',
      salarioMedio: '8500 reais mensais',
      faixaMercado: '7000 a 12000 reais mensais',
      regimeComum: 'CLT ou PJ estruturado',
      focoPrincipal: 'Autonomia completa na entrega de funcionalidades e desenho de componentes'
    },
    {
      nivel: 'Desenvolvedor Senior',
      salarioMedio: '14500 reais mensais',
      faixaMercado: '12000 a 20000 reais mensais',
      regimeComum: 'CLT senior ou PJ com contabilidade dedicada',
      focoPrincipal: 'Decisoes de arquitetura, garantia de confiabilidade de sistemas e mentoria da equipe'
    },
    {
      nivel: 'Especialista ou Staff',
      salarioMedio: '22000 reais mensais',
      faixaMercado: '18000 a 30000 reais mensais',
      regimeComum: 'PJ executivo ou CLT de lideranca tecnica',
      focoPrincipal: 'Impacto transversal em multiplas squads, definicao de padroes e resolucao de gargalos criticos'
    },
    {
      nivel: 'Atuacao Remota Internacional na Gringa',
      salarioMedio: '35000 reais mensais equivalentes a seis mil dolares',
      faixaMercado: '4000 a 9000 dolares mensais',
      regimeComum: 'Prestacao de servicos internacional B2B',
      focoPrincipal: 'Comunicacao assincrona fluida em ingles e entrega de engenharia de software de ponta'
    }
  ],
  regimes: [
    {
      regime: 'CLT em Empresas de Produto Tecnologico',
      caracteristicas: 'Contrato formal com fundo de garantia, ferias remuneradas, decimo terceiro e plano de saude premium.',
      vantagens: 'Estabilidade juridica, previsibilidade financeira e participacao em lucros e resultados expressiva.'
    },
    {
      regime: 'Prestacao de Servicos PJ Nacional',
      caracteristicas: 'Emissao de notas fiscais atraves de empresa aberta no Simples Nacional com anexo apropriado.',
      vantagens: 'Valor liquido mensal superior e maior flexibilidade para manter contratos concomitantes.'
    },
    {
      regime: 'Cooperativas de Trabalho em TI',
      caracteristicas: 'Associacao cooperada comum em instituicoes bancarias e consultorias governamentais.',
      vantagens: 'Menor tributacao sobre repasses liquidos, porem sem vinculo celetista de longo prazo.'
    }
  ],
  roiGraduacao: [
    {
      aspecto: 'Filtro Inicial de Contratacao',
      graduacaoUnicamp: 'Acesso imediato a feiras corporativas exclusivas e programas estruturados de estagio de empresas lideres.',
      cursosRapidosBootcamps: 'Dificuldade severa para ultrapassar a triagem de inteligencia artificial em vagas disputadas.'
    },
    {
      aspecto: 'Profundidade em Fundamentos',
      graduacaoUnicamp: 'Dominio de estruturas de dados, algoritmos, compiladores, redes e arquitetura de computadores.',
      cursosRapidosBootcamps: 'Foco superficial em sintaxe e bibliotecas que se tornam obsoletas em poucos anos.'
    },
    {
      aspecto: 'Teto de Carreira de Longo Prazo',
      graduacaoUnicamp: 'Transicao fluida para posicoes de Staff Engineer, diretoria tecnica e pos-graduacao estrita no exterior.',
      cursosRapidosBootcamps: 'Estagnacao profissional em cargos intermediarios por falta de solidez conceitual.'
    }
  ]
};

export interface RemoteWorkRequirement {
  titulo: string;
  detalhe: string;
}

export interface RemoteWorkPlatform {
  nome: string;
  modelo: string;
  url: string;
}

export interface TaxAspect {
  conceito: string;
  explicacao: string;
}

export interface RemoteGlobalWork {
  title: string;
  description: string;
  requisitos: RemoteWorkRequirement[];
  plataformas: RemoteWorkPlatform[];
  tributacao: TaxAspect[];
}

export const remoteGlobalWorkData: RemoteGlobalWork = {
  title: 'Guia Completo para Trabalhar na Gringa do Brasil',
  description: 'Passo a passo pratico para discentes e egressos da FT conquistarem contratos remotos de engenharia de software para empresas dos Estados Unidos e Europa, recebendo em moeda forte.',
  requisitos: [
    {
      titulo: 'Ingles Instrumental para Negocios e Engenharia',
      detalhe: 'A pronuncia perfeita nao e exigida, mas a capacidade de explicar decisoes tecnicas, debater trade-offs em reunioes e redigir documentacao tecnica clara e mandatoria.'
    },
    {
      titulo: 'Portfolio Relevante e Codigo Publico no GitHub',
      detalhe: 'Projetos reais com testes automatizados, esteiras de integracao continua e codigo em conformidade com padroes de producao superam meros exercicios academicos.'
    },
    {
      titulo: 'Dominio de Comunicacao Assincrona e Documentacao',
      detalhe: 'Trabalhar em fusos horarios distintos exige autonomia na resolucao de bloqueios, escrita concisa em pull requests e organizacao de tarefas.'
    },
    {
      titulo: 'Preparacao Rigorosa para Entrevistas com Live Coding',
      detalhe: 'Resolucao consistente de problemas de estruturas de dados e algoritmos em plataformas como LeetCode e HackerRank em nivel medio.'
    }
  ],
  plataformas: [
    {
      nome: 'Wellfound, antigo AngelList Talent',
      modelo: 'Vagas diretas em startups globais em estagio inicial e de alto crescimento.',
      url: 'https://wellfound.com'
    },
    {
      nome: 'LinkedIn Internacional com Filtro Remoto',
      modelo: 'Conexao com recrutadores tecnicos internacionais e postulacao em vagas nos Estados Unidos.',
      url: 'https://www.linkedin.com/jobs'
    },
    {
      nome: 'Toptal e Turing',
      modelo: 'Redes de alocacao com processo seletivo tecnico previo e projetos internacionais selecionados.',
      url: 'https://www.turing.com'
    }
  ],
  tributacao: [
    {
      conceito: 'Abertura de Empresa PJ no Brasil',
      explicacao: 'Criacao de pessoa juridica com CNAE de desenvolvimento de software enquadrada no regime do Simples Nacional ou Lucro Presumido.'
    },
    {
      conceito: 'Isencao de PIS, COFINS e ISS na Exportacao de Servicos',
      explicacao: 'A prestacao de servicos de tecnologia faturada para o exterior goza de desoneracao de tributos municipais e federais conforme legislacao tributaria vigente.'
    },
    {
      conceito: 'Conta de Recebimento Internacional e Fechamento de Cambio',
      explicacao: 'Utilizacao de plataformas de cambio especializadas com taxas reduzidas e emissao de invoice comercial para cada pagamento.'
    }
  ]
};

export interface BsiVsTadsComparison {
  eixo: string;
  bsi: string;
  tads: string;
  recomendacaoCoordenador: string;
}

export interface BsiVsTadsCoordinator {
  title: string;
  description: string;
  coordenadorNome: string;
  comparativos: BsiVsTadsComparison[];
}

export const bsiVsTadsCoordinatorData: BsiVsTadsCoordinator = {
  title: 'BSI versus TADS: Comparativo Estratégico com a Coordenação',
  description: 'Analise detalhada orientada pelas diretrizes do coordenador Professor Guilherme para apoiar os alunos na escolha de curso, momento de transicao e planejamento de carreira na Faculdade de Tecnologia.',
  coordenadorNome: 'Professor Guilherme',
  comparativos: [
    {
      eixo: 'Tempo de Formacao e Carga Horaria',
      bsi: 'Quatro anos de duracao com matriz ampla e diversificada.',
      tads: 'Tres anos de duracao com formacao tecnologica acelerada e foco pratico.',
      recomendacaoCoordenador: 'Estudantes que necessitam de insercao rapida no mercado se beneficiam do ritmo dinamico de TADS.'
    },
    {
      eixo: 'Profundidade Teorica e Matematica',
      bsi: 'Carga matematica robusta incluindo calculo diferencial, algebra linear, estatistica e fundamentos de administracao.',
      tads: 'Matematica e logica aplicadas diretamente ao desenvolvimento de software sem calculo avancado.',
      recomendacaoCoordenador: 'Quem deseja migrar posteriormente para ciencia de dados ou pos-graduacao academica encontra no BSI melhor preparo.'
    },
    {
      eixo: 'Momento de Liberacao para Estagio',
      bsi: 'Liberado a partir do quarto semestre, permitindo concentracao nos fundamentos do ciclo basico.',
      tads: 'Liberado logo apos o primeiro ano letivo, no segundo semestre, acelerando a vivencia em empresas.',
      recomendacaoCoordenador: 'TADS permite estagiar mais cedo, exigindo autodisciplina do discente para conciliar trabalho e faculdade.'
    },
    {
      eixo: 'Reconhecimento Internacional e Diplomas',
      bsi: 'Grau de Bacharel com equivalencia imediata a Bachelor of Science em processos de visto e universidades do exterior.',
      tads: 'Grau de Tecnologo com plena validade de curso superior no Brasil, necessitando de comprovacao de creditos em alguns paises.',
      recomendacaoCoordenador: 'Ambos os cursos abrem portas para carreiras globais quando acompanhados de solidos projetos praticos.'
    }
  ]
};

export interface PostPandemicShift {
  periodo: string;
  contexto: string;
  perfilBuscado: string;
}

export interface AiMythReality {
  mito: string;
  realidade: string;
  impactoNaFT: string;
}

export interface ProductEngineerProfile {
  conceito: string;
  atributos: string[];
}

export interface PostPandemicAndAiMarket {
  title: string;
  description: string;
  pandemiaVsHoje: PostPandemicShift[];
  mitosIA: AiMythReality[];
  desenvolvedorDeProduto: ProductEngineerProfile;
}

export const postPandemicAndAiMarketData: PostPandemicAndAiMarket = {
  title: 'O Mercado Pos-Pandemia e a Verdade sobre a IA na Programacao',
  description: 'Desconstrucao de boatos alarmistas e analise serena sobre a evolucao do mercado de trabalho de tecnologia, a valorizacao dos fundamentos e a emergencia dos desenvolvedores de produto.',
  pandemiaVsHoje: [
    {
      periodo: 'O Periodo da Pandemia de 2020 a 2022',
      contexto: 'Taxas de juros em minimas historicas, contratacoes massivas sem criterios tecnicos rigorosos e promessas de salarios exorbitantes em tres meses.',
      perfilBuscado: 'Qualquer profissional com nocoes basicas de sintaxe era contratado com urgencia para compor times virtuais.'
    },
    {
      periodo: 'O Cenario Atual de 2024 a 2026',
      contexto: 'Ajuste de mercado, busca por eficiencia operacional e elevacao drastica da barra de exigencia tecnica nos processos seletivos.',
      perfilBuscado: 'Profissionais com fundamentos solidos de computacao, pensamento critico e capacidade comprovada de entrega com qualidade.'
    }
  ],
  mitosIA: [
    {
      mito: 'A inteligencia artificial vai extinguir a profissao de programador em poucos anos.',
      realidade: 'A IA substitui a digitacao mecânica de codigo repetitivo, mas e incapaz de entender contexto de negocio, definir arquitetura e auditar seguranca com responsabilidade.',
      impactoNaFT: 'O aluno da FT que aprende a pensar conceitualmente usa ferramentas de IA como copilotos para produzir o equivalente a uma squad inteira.'
    },
    {
      mito: 'Nao vale mais a pena fazer faculdade de tecnologia porque os modelos aprendem tudo.',
      realidade: 'O diploma de uma universidade publica de elite como a Unicamp ganhou ainda mais forca como indicador de consistencia, disciplina e capacidade analitica superior.',
      impactoNaFT: 'Empresas selecionam alunos da FT nao pela sintaxe que decoraram, mas pela capacidade demonstrada de resolver problemas sem solucao pronta no Google.'
    }
  ],
  desenvolvedorDeProduto: {
    conceito: 'A Era dos Desenvolvedores de Produto: O profissional de tecnologia que transcende a execucao cega de tarefas tecnicas e compreende a viabilidade financeira, a experiencia do usuario e o impacto das entregas nos indicadores da instituicao.',
    atributos: [
      'Visao Sistemica: Compreensao de como cada linha de codigo gera valor para o cliente final.',
      'Comunicacao Transversal: Dialogo claro com times de produto, design, marketing e financas.',
      'Uso Estrategico de IA: Adocao de agentes e modelos para acelerar etapas mecânicas e focar em decisoes de arquitetura.',
      'Pragmatismo na Engenharia: Preferencia por solucoes simples e manuteniveis em vez de complexidade desnecessaria.'
    ]
  }
};

export interface CareerYRole {
  cargo: string;
  foco: string;
  desafios: string;
}

export interface CareerYMatrix {
  title: string;
  description: string;
  trilhaEspecialista: CareerYRole[];
  trilhaGestao: CareerYRole[];
  perguntasAutoavaliacao: string[];
}

export const careerYMatrixData: CareerYMatrix = {
  title: 'Carreira em Y: Trilha Especialista versus Trilha de Gestao',
  description: 'Guia de orientacao para a bifurcacao profissional que ocorre apos a senioridade tecnica, permitindo que o desenvolvedor escolha entre lideranca tecnica aprofundada ou lideranca de pessoas e processos.',
  trilhaEspecialista: [
    {
      cargo: 'Staff Engineer',
      foco: 'Lideranca tecnica de uma unidade ou conjunto de squads, alinhando arquitetura e direcionamento tecnologico.',
      desafios: 'Influenciar desenvolvedores experientes sem autoridade hierarquica formal e desenhar solucoes escalaveis.'
    },
    {
      cargo: 'Principal Engineer',
      foco: 'Estrategia tecnologica corporativa de longo prazo, pesquisa e desenvolvimento de plataformas centrais.',
      desafios: 'Tomar decisoes de infraestrutura que impactam os proximos cinco anos da instituicao com orcamentos vultosos.'
    },
    {
      cargo: 'Arquiteto de Software ou Fellow',
      foco: 'Maxima autoridade tecnica da organizacao, padronizacao global de tecnologias e seguranca da informacao.',
      desafios: 'Conciliar inovacao tecnologica radical com a estabilidade de sistemas legados de missao critica.'
    }
  ],
  trilhaGestao: [
    {
      cargo: 'Tech Lead',
      foco: 'Papel de transicao equilibrando codificacao de modulos criticos com apoio aos liderados e desimpedimento de tarefas.',
      desafios: 'Aprender a delegar sem perder o contato com a base tecnica e intermediar expectativas de produto.'
    },
    {
      cargo: 'Engineering Manager',
      foco: 'Gestao direta de pessoas, planos de carreira, avaliacao de desempenho, contratacoes e clima organizacional.',
      desafios: 'Desenvolver pessoas, gerenciar conflitos internos e defender recursos para o time junto a diretorias.'
    },
    {
      cargo: 'Head of Engineering ou VP',
      foco: 'Gestao de multiplas gerencias de engenharia, governanca operacional e articulacao com a diretoria executiva.',
      desafios: 'Traduzir metas de faturamento e expansao corporativa em planos de engenharia viaveis.'
    }
  ],
  perguntasAutoavaliacao: [
    'Voce sente mais satisfacao ao resolver um bug complexo de concorrencia ou ao destravar o crescimento de um colega de equipe?',
    'Voce prefere passar quatro horas desenhando diagramas de arquitetura de microsservicos ou conversando individualmente com pessoas para alinhar motivacao e expectativas?',
    'Como voce lida com reunioes de alinhamento com stakeholders de negocios versus blocos ininterruptos de escrita de codigo profundo?'
  ]
};

export interface CareerVideoResource {
  id: string;
  title: string;
  channel: string;
  topic: string;
  url: string;
}

export const careerVideosData: CareerVideoResource[] = [
  {
    id: 'pesquisa-salarial-2026',
    title: 'Pesquisa Salarial de Programadores 2026',
    channel: 'Codigo Fonte TV',
    topic: 'Salarios e Mercado Nacional',
    url: 'https://share.google/Zio2FDrLT2Hvtk0AJ'
  },
  {
    id: 'era-devs-produto',
    title: 'A Era dos Desenvolvedores de Produto e o Futuro da Engenharia',
    channel: 'Codigo Fonte TV',
    topic: 'Product Engineering e Carreira em Y',
    url: 'https://www.youtube.com/watch?v=Y4Tu8Sl0iK0'
  },
  {
    id: 'trabalhar-na-gringa',
    title: 'Como Conquistar Vagas Remotas Internacionais e Ganhar em Dolares',
    channel: 'Fabiana Santana',
    topic: 'Trabalho Internacional',
    url: 'https://www.youtube.com/watch?v=-xhdkDlPBwk'
  },
  {
    id: 'ia-fim-programacao',
    title: 'A Inteligencia Artificial vai Acabar com os Programadores?',
    channel: 'Codigo Fonte TV',
    topic: 'Inteligencia Artificial e Carreira',
    url: 'https://www.youtube.com/watch?v=P6b35GAAK3Y'
  },
  {
    id: 'faculdade-ti-vale-a-pena',
    title: 'Ainda Vale a Pena Fazer Faculdade de TI ou Cursos Rapidos Bastam?',
    channel: 'Codigo Fonte TV',
    topic: 'Graduacao e Mercado',
    url: 'https://www.youtube.com/watch?v=X0fqcXLk8To'
  },
  {
    id: 'mercado-pos-pandemia',
    title: 'O Fim da Bolha de TI e o Novo Mercado Pos-Pandemia',
    channel: 'Codigo Fonte TV',
    topic: 'Mercado de Trabalho',
    url: 'https://www.youtube.com/watch?v=fbS7RFxeJqU'
  },
  {
    id: 'carreira-em-y-lideranca',
    title: 'Carreira em Y: Especialista ou Gestor de Engenharia',
    channel: 'Codigo Fonte TV',
    topic: 'Evolucao Profissional',
    url: 'https://www.youtube.com/watch?v=QyVFkGuswl4'
  }
];

