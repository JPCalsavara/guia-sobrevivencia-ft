export interface VersionRelease {
  version: string;
  tag: string;
  date: string;
  title: string;
  highlights: string[];
  type: 'major' | 'minor' | 'patch';
  githubUrl: string;
}

export const versionsData: VersionRelease[] = [
  {
    version: '1.11.0',
    tag: 'v1.11.0',
    date: 'Outubro de 2026',
    title: 'Trilha de Ciberseguranca, IdeStatusBar Telemetrico e Filtros Temporais',
    highlights: [
      'Inclusao da trilha completa de ciberseguranca e hacking etico com reconhecimento ao pesquisador Brenno M.',
      'Metricas em tempo real no IdeStatusBar com contadores de usuarios ativos e rotulo SilvMar',
      'Painel de estatisticas com filtros temporais de vinte e quatro horas ate um ano',
      'Expansao dos menus suspensos do cabecalho com exibicao integral dos textos'
    ],
    type: 'minor',
    githubUrl: 'https://github.com/jpcalsavara/guia-sobrevivencia-ft/releases/tag/v1.11.0',
  },
  {
    version: '1.10.0',
    tag: 'v1.10.0',
    date: 'Setembro de 2026',
    title: 'Modal de Perfil Discente Integrado e Seletor Direto de Curso',
    highlights: [
      'Seletor direto de curso e ano letivo com sincronizacao persistente em armazenamento local',
      'Identificacao automatica de estagio academico entre calouro, meio de curso e formando',
      'Refinamento da paleta com contraste acessivel e compatibilidade WCAG AAA'
    ],
    type: 'minor',
    githubUrl: 'https://github.com/jpcalsavara/guia-sobrevivencia-ft/releases/tag/v1.10.0',
  },
  {
    version: '1.9.2',
    tag: 'v1.9.2',
    date: 'Setembro de 2026',
    title: 'Ajuste de Tipografia e Refinamento de Microinteracoes',
    highlights: [
      'Otimizacao do espacamento em grades de cartoes com tres elementos',
      'Ajuste fino de contrastes em blocos de citacao e descricoes de disciplinas'
    ],
    type: 'patch',
    githubUrl: 'https://github.com/jpcalsavara/guia-sobrevivencia-ft/releases/tag/v1.9.2',
  },
  {
    version: '1.9.0',
    tag: 'v1.9.0',
    date: 'Agosto de 2026',
    title: 'Central de Duvidas Frequentes e Suporte Interativo',
    highlights: [
      'Criacao do modulo de duvidas categorizadas por areas tematicas do campus',
      'Mecanismo de busca rapida em tempo real nas respostas do FAQ',
      'Canal de envio direto de questionamentos para a equipe curadora'
    ],
    type: 'minor',
    githubUrl: 'https://github.com/jpcalsavara/guia-sobrevivencia-ft/releases/tag/v1.9.0',
  },
  {
    version: '1.8.0',
    tag: 'v1.8.0',
    date: 'Julho de 2026',
    title: 'Guia de Inteligencia Artificial e Segundo Cerebro Academico',
    highlights: [
      'Integracao de roteiros praticos para uso do Google NotebookLM na FT',
      'Engenharia de prompts voltada para estruturas de dados e calculo diferencial',
      'Adocao dos principios do metodo Feynman na rotina universitaria'
    ],
    type: 'minor',
    githubUrl: 'https://github.com/jpcalsavara/guia-sobrevivencia-ft/releases/tag/v1.8.0',
  },
  {
    version: '1.7.0',
    tag: 'v1.7.0',
    date: 'Junho de 2026',
    title: 'Catalogo Integrado de Recursos e Servicos de Campus',
    highlights: [
      'Mapeamento completo de rotas da linha 84 intercampi e recarga Pix no RU',
      'Diretorio oficial de entidades estudantis, atlética e empresas juniores da FT',
      'Mapa vetorial com localizacao das salas e laboratorios de informatica'
    ],
    type: 'minor',
    githubUrl: 'https://github.com/jpcalsavara/guia-sobrevivencia-ft/releases/tag/v1.7.0',
  },
  {
    version: '1.5.0',
    tag: 'v1.5.0',
    date: 'Maio de 2026',
    title: 'Comparativo Curricular Bacharelado versus Tecnologia',
    highlights: [
      'Matriz analitica completa entre Sistemas de Informacao e TADS',
      'Orientacoes oficiais de estagio supervisionado e catalogo DAC',
      'Alertas sobre cadeias de pre requisitos e retencao'
    ],
    type: 'minor',
    githubUrl: 'https://github.com/jpcalsavara/guia-sobrevivencia-ft/releases/tag/v1.5.0',
  },
  {
    version: '1.0.0',
    tag: 'v1.0.0',
    date: 'Marco de 2026',
    title: 'Lancamento Inicial do Guia de Sobrevivencia da FT',
    highlights: [
      'Publicacao da primeira versao oficial do portal academico independente',
      'Manual de sobrevivencia para calouros com infraestrutura e rotinas da FT Limeira',
      'Arquitetura limpa com Next.js App Router e estilizacao SCSS modular'
    ],
    type: 'major',
    githubUrl: 'https://github.com/jpcalsavara/guia-sobrevivencia-ft/releases/tag/v1.0.0',
  },
];
