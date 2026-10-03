export interface HeaderSubTopic {
  id: string;
  title: string;
  href: string;
  tag: string;
  recommendedStages?: Array<'calouro' | 'meio' | 'formando'>;
}

export interface HeaderNavSection {
  id: string;
  label: string;
  href: string;
  description: string;
  topics: HeaderSubTopic[];
}

export const headerNavSections: HeaderNavSection[] = [
  {
    id: 'calouros',
    label: 'Calouros',
    href: '/calouros',
    description: 'Passo a passo completo com matricula, RA, moradia, bandejao, salas de aula e bolsas sociais da DEAPE.',
    topics: [
      {
        id: 'acabei-de-passar',
        title: 'Matricula Virtual e Primeiros Passos',
        href: '/calouros#acabei-de-passar',
        tag: 'Ingresso',
        recommendedStages: ['calouro'],
      },
      {
        id: 'unicamp-limeira-ft',
        title: 'Campus FT versus FCA em Limeira',
        href: '/calouros#unicamp-limeira-ft',
        tag: 'Campus',
        recommendedStages: ['calouro'],
      },
      {
        id: 'moradia-calouros',
        title: 'Onde Morar em Limeira e Imobiliarias',
        href: '/calouros#moradia-calouros',
        tag: 'Moradia',
        recommendedStages: ['calouro'],
      },
      {
        id: 'salas-aulas-ft',
        title: 'Salas de Aula e Laboratorios TIC',
        href: '/calouros#salas-aulas-ft',
        tag: 'Infraestrutura',
        recommendedStages: ['calouro'],
      },
      {
        id: 'bandejao-recarga',
        title: 'Restaurante Universitario e Recarga Pix',
        href: '/calouros#bandejao-recarga',
        tag: 'Refeicao',
        recommendedStages: ['calouro'],
      },
      {
        id: 'transporte-circular',
        title: 'Transporte e Onibus Circular Gratuito',
        href: '/calouros#transporte-circular',
        tag: 'Transporte',
        recommendedStages: ['calouro'],
      },
      {
        id: 'bolsas-sociais-deape',
        title: 'Bolsas Sociais de Apoio da DEAPE',
        href: '/calouros#bolsas-sociais-deape',
        tag: 'Beneficios',
        recommendedStages: ['calouro'],
      },
    ],
  },
  {
    id: 'academico',
    label: 'Academico',
    href: '/academico',
    description: 'Normas oficiais da DAC, diferencas curriculares, coeficientes CR e CP e regras de formatura.',
    topics: [
      {
        id: 'bsi-vs-tads',
        title: 'Comparativo Sistemas de Informacao versus TADS',
        href: '/academico#bsi-vs-tads',
        tag: 'Cursos',
        recommendedStages: ['calouro', 'meio'],
      },
      {
        id: 'grade-curricular',
        title: 'Matriz Curricular Semestre a Semestre',
        href: '/academico#grade-curricular',
        tag: 'Grade',
        recommendedStages: ['calouro', 'meio'],
      },
      {
        id: 'coeficientes-dac',
        title: 'Coeficientes CR, CP e Vetores Horarios',
        href: '/academico#coeficientes-dac',
        tag: 'Metricas',
        recommendedStages: ['meio', 'formando'],
      },
      {
        id: 'alerta-prog1-tranca-tudo',
        title: 'Alerta Critico de Programacao Um',
        href: '/academico#alerta-prog1-tranca-tudo',
        tag: 'Ciclo Basico',
        recommendedStages: ['calouro'],
      },
      {
        id: 'monitoria-pad',
        title: 'Monitoria PAD e Mentoria PMU',
        href: '/academico#monitoria-pad',
        tag: 'Apoio',
        recommendedStages: ['calouro', 'meio'],
      },
      {
        id: 'iniciacao-cientifica',
        title: 'Iniciacao Cientifica PIBIC e FAPESP',
        href: '/academico#iniciacao-cientifica',
        tag: 'Pesquisa',
        recommendedStages: ['meio'],
      },
      {
        id: 'horas-extensao',
        title: 'Horas de Extensao e Atividades Complementares',
        href: '/academico#horas-extensao',
        tag: 'Extensao',
        recommendedStages: ['meio', 'formando'],
      },
      {
        id: 'checklist-formatura',
        title: 'Checklist de Formatura e Colacao Oficial',
        href: '/academico#checklist-formatura',
        tag: 'Formatura',
        recommendedStages: ['formando'],
      },
    ],
  },
  {
    id: 'carreira',
    label: 'Carreira',
    href: '/carreira',
    description: 'Sazonalidade de estagios, curriculo em pagina unica no Overleaf, hackathons e conexao com empresas.',
    topics: [
      {
        id: 'sazonalidade-estagio',
        title: 'Sazonalidade e Feiras de Contratacao',
        href: '/carreira#sazonalidade-estagio',
        tag: 'Estagio',
        recommendedStages: ['meio', 'formando'],
      },
      {
        id: 'trainee-vs-estagio',
        title: 'Comparativo Estagio versus Trainee versus Junior',
        href: '/carreira#trainee-vs-estagio',
        tag: 'Modalidades',
        recommendedStages: ['formando'],
      },
      {
        id: 'curriculo-latex',
        title: 'Curriculo em Pagina Unica no Overleaf',
        href: '/carreira#curriculo-latex',
        tag: 'Curriculo',
        recommendedStages: ['meio', 'formando'],
      },
      {
        id: 'hackathons-bootcamps',
        title: 'Hackathons Universitarios e Bootcamps',
        href: '/carreira#hackathons-bootcamps',
        tag: 'Eventos',
        recommendedStages: ['calouro', 'meio'],
      },
      {
        id: 'apple-developer-academy',
        title: 'Residencia Apple Developer Academy',
        href: '/carreira#apple-developer-academy',
        tag: 'Inovacao',
        recommendedStages: ['calouro', 'meio'],
      },
      {
        id: 'empresas-tech-programas',
        title: 'Vitrine de Empresas Lideres em Tecnologia',
        href: '/carreira#empresas-tech-programas',
        tag: 'Empresas',
        recommendedStages: ['meio', 'formando'],
      },
      {
        id: 'ciberseguranca-hacking-etico',
        title: 'Trilha de Cibersegurança e Hacking Ético',
        href: '/carreira#ciberseguranca-hacking-etico',
        tag: 'Segurança',
        recommendedStages: ['calouro', 'meio', 'formando'],
      },
      {
        id: 'salarios-2026-mercado',
        title: 'Pesquisa Salarial 2026 e Remuneração',
        href: '/carreira#salarios-2026-mercado',
        tag: 'Salários',
        recommendedStages: ['meio', 'formando'],
      },
      {
        id: 'trabalhar-na-gringa',
        title: 'Trabalho Remoto Internacional na Gringa',
        href: '/carreira#trabalhar-na-gringa',
        tag: 'Internacional',
        recommendedStages: ['meio', 'formando'],
      },
      {
        id: 'bsi-vs-tads-coordenacao',
        title: 'BSI versus TADS com a Coordenação',
        href: '/carreira#bsi-vs-tads-coordenacao',
        tag: 'Coordenação',
        recommendedStages: ['calouro', 'meio', 'formando'],
      },
      {
        id: 'mercado-ia-devs-produto',
        title: 'Mercado de IA e Devs de Produto',
        href: '/carreira#mercado-ia-devs-produto',
        tag: 'Tecnologia',
        recommendedStages: ['meio', 'formando'],
      },
      {
        id: 'carreira-em-y-lideranca',
        title: 'Carreira em Y: Especialista ou Gestor',
        href: '/carreira#carreira-em-y-lideranca',
        tag: 'Liderança',
        recommendedStages: ['formando'],
      },
    ],
  },
  {
    id: 'campus',
    label: 'Campus',
    href: '/campus',
    description: 'Infraestrutura de salas, biblioteca, laboratorios TIC, servicos municipais e vida universitaria.',
    topics: [
      {
        id: 'infraestrutura-salas',
        title: 'Alocacao de Salas na Intranet da FT',
        href: '/campus#infraestrutura-salas',
        tag: 'Salas',
        recommendedStages: ['calouro', 'meio', 'formando'],
      },
      {
        id: 'biblioteca-sbu-ft',
        title: 'Biblioteca Setorial e Cabines de Estudo',
        href: '/campus#biblioteca-sbu-ft',
        tag: 'Estudos',
        recommendedStages: ['calouro', 'meio'],
      },
      {
        id: 'ferramentas-ti',
        title: 'Laboratorios TIC e Cota WifiPrint',
        href: '/campus#ferramentas-ti',
        tag: 'Laboratorios',
        recommendedStages: ['calouro', 'meio'],
      },
      {
        id: 'transporte-alimentacao',
        title: 'Bandejao e Fretado Intercampi',
        href: '/campus#transporte-alimentacao',
        tag: 'Servicos',
        recommendedStages: ['calouro', 'meio', 'formando'],
      },
      {
        id: 'entidades-estudantis',
        title: 'Diretorio de Organizacoes Estudantis',
        href: '/campus#entidades-estudantis',
        tag: 'Entidades',
        recommendedStages: ['calouro', 'meio'],
      },
      {
        id: 'moradia-mapa',
        title: 'Mapa Interativo de Moradia Estudantil',
        href: '/campus#moradia-mapa',
        tag: 'Habitacao',
        recommendedStages: ['calouro'],
      },
    ],
  },
  {
    id: 'duvidas',
    label: 'Duvidas',
    href: '/duvidas',
    description: 'Respostas rapidas para perguntas recorrentes sobre procedimentos academicos e formulario de suporte.',
    topics: [
      {
        id: 'perguntas-frequentes',
        title: 'Perguntas Frequentes sobre DAC e Vida FT',
        href: '/duvidas#perguntas-frequentes',
        tag: 'FAQ',
        recommendedStages: ['calouro', 'meio', 'formando'],
      },
      {
        id: 'mandar-duvida',
        title: 'Mande sua Duvida para a Equipe do Guia',
        href: '/duvidas#mandar-duvida',
        tag: 'Suporte',
        recommendedStages: ['calouro', 'meio', 'formando'],
      },
    ],
  },
  {
    id: 'estudos-ia',
    label: 'IA',
    href: '/estudos-ia',
    description: 'Inteligencia artificial para acelerar o estudo academico, geracao de cronogramas e dominio de codigo.',
    topics: [
      {
        id: 'notebooklm-cerebro',
        title: 'Google NotebookLM como Segundo Cerebro',
        href: '/estudos-ia#notebooklm-cerebro',
        tag: 'Metodologia',
        recommendedStages: ['calouro', 'meio'],
      },
      {
        id: 'prompts-estruturados',
        title: 'Prompts Estruturados para Engenharia de Software',
        href: '/estudos-ia#prompts-estruturados',
        tag: 'Engenharia',
        recommendedStages: ['meio', 'formando'],
      },
      {
        id: 'metodologias-estudo',
        title: 'Metodo Feynman e Aprendizado Ativo',
        href: '/estudos-ia#metodologias-estudo',
        tag: 'Estudo',
        recommendedStages: ['calouro', 'meio'],
      },
      {
        id: 'transicao-agentes',
        title: 'Transicao de Assistentes para Agentes Autonomos',
        href: '/estudos-ia#transicao-agentes',
        tag: 'Tendencias',
        recommendedStages: ['meio', 'formando'],
      },
    ],
  },
  {
    id: 'links',
    label: 'Links Uteis',
    href: '/links',
    description: 'Central consolidada de acessos rapidos a portais oficiais da Unicamp, DAC e servicos estudantis.',
    topics: [
      {
        id: 'categoria-duvidas-links',
        title: 'Central de Duvidas por Area Tematica',
        href: '/duvidas#lista-duvidas',
        tag: 'Duvidas',
        recommendedStages: ['calouro', 'meio', 'formando'],
      },
      {
        id: 'categoria-dac',
        title: 'Portais Oficiais da DAC e Caderno de Horarios',
        href: '/links#categoria-dac',
        tag: 'Oficial',
        recommendedStages: ['calouro', 'meio', 'formando'],
      },
      {
        id: 'categoria-estudos',
        title: 'Ferramentas de Estudo e Produtividade',
        href: '/links#categoria-estudos',
        tag: 'Estudo',
        recommendedStages: ['calouro', 'meio'],
      },
      {
        id: 'categoria-carreira',
        title: 'Recursos de Carreira e Vagas Tecnologicas',
        href: '/links#categoria-carreira',
        tag: 'Carreira',
        recommendedStages: ['meio', 'formando'],
      },
      {
        id: 'categoria-servicos',
        title: 'Servicos de Transporte e Alimentacao',
        href: '/links#categoria-servicos',
        tag: 'Campus',
        recommendedStages: ['calouro', 'meio', 'formando'],
      },
      {
        id: 'contatos-atendimento-suporte',
        title: 'Contatos e Atendimento Institucional',
        href: '/campus#contatos-atendimento',
        tag: 'Contatos',
        recommendedStages: ['calouro', 'meio', 'formando'],
      },
    ],
  },
];
