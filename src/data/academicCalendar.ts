export type MilestoneCategory = 'matricula' | 'aulas' | 'trancamento' | 'avaliacoes' | 'conclusao';

export interface AcademicMilestone {
  id: string;
  category: MilestoneCategory;
  categoryLabel: string;
  title: string;
  description: string;
  typicalPeriod: string;
  actionGuidance: string;
  criticalRisk: string;
  officialUrl: string;
}

export interface CanonicalResource {
  id: string;
  title: string;
  description: string;
  url: string;
}

export const canonicalAcademicResources: CanonicalResource[] = [
  {
    id: 'dac-calendario-oficial',
    title: 'Calendario Escolar Oficial da DAC',
    description: 'Tabela completa em tempo real com todas as datas vigentes aprovadas pela Camara de Ensino de Graduacao da Unicamp.',
    url: 'https://www.dac.unicamp.br/portal/calendario',
  },
  {
    id: 'edac-portal',
    title: 'Portal de Servicos e-DAC',
    description: 'Sistema institucional para solicitacao de matricula, alteracao de turmas, desistencia e emissao de historicos escolares.',
    url: 'https://www.dac.unicamp.br/portal/sistemas/e-dac',
  },
  {
    id: 'dac-regimento-graduacao',
    title: 'Regimento Geral dos Cursos de Graduacao',
    description: 'Regulamentacao oficial com as normas de aproveitamento, limites de trancamento, criterios de jubilamento e direitos discentes.',
    url: 'https://www.dac.unicamp.br/portal/graduacao/regimento-geral',
  },
  {
    id: 'dac-catalogos-cursos',
    title: 'Catalogos dos Cursos de Graduacao',
    description: 'Estruturas curriculares integrais dos cursos da Faculdade de Tecnologia vigentes por ano de ingresso do estudante.',
    url: 'https://www.dac.unicamp.br/portal/graduacao/catalogos-de-cursos',
  },
];

export const academicMilestonesData: AcademicMilestone[] = [
  {
    id: 'matricula-regular',
    category: 'matricula',
    categoryLabel: 'Matricula e Turmas',
    title: 'Matricula Regular em Disciplinas',
    description: 'Periodo semestral no qual o discente solicita vagas nas disciplinas obrigatorias e eletivas planejadas para o periodo letivo subsequente.',
    typicalPeriod: 'Ocorre em janeiro para o primeiro semestre e em julho para o segundo semestre letivo.',
    actionGuidance: 'Acessar o sistema e-DAC, selecionar as turmas pretendidas de acordo com o catalogo e salvar o comprovante gerado.',
    criticalRisk: 'A ausencia de solicitacao de matricula no prazo regimental acarreta cancelamento de vinculo com a universidade por abandono de curso.',
    officialUrl: 'https://www.dac.unicamp.br/portal/sistemas/e-dac',
  },
  {
    id: 'alteracao-matricula',
    category: 'matricula',
    categoryLabel: 'Matricula e Turmas',
    title: 'Alteracao de Matricula e Vagas Remanescentes',
    description: 'Janela especial para inclusao de novas disciplinas com vagas disponiveis e ajuste de turmas com choque de horarios.',
    typicalPeriod: 'Realizada nos primeiros dias letivos de cada semestre apos a divulgacao do resultado da matricula regular.',
    actionGuidance: 'Verificar no e-DAC as turmas com vagas abertas na FT e formalizar o pedido de adicao antes do fechamento do periodo.',
    criticalRisk: 'Perda da oportunidade de cursar materias pre-requisito vitais para a progressao da grade curricular no semestre.',
    officialUrl: 'https://www.dac.unicamp.br/portal/sistemas/e-dac',
  },
  {
    id: 'desistencia-disciplinas',
    category: 'matricula',
    categoryLabel: 'Matricula e Turmas',
    title: 'Desistencia de Disciplina sem Reprovacao',
    description: 'Direito do estudante de cancelar a inscricao em uma disciplina cursada no semestre sem registro de nota vermelha no historico escolar.',
    typicalPeriod: 'Estabelecida tradicionalmente ate a quarta semana de aulas do periodo letivo correspondente.',
    actionGuidance: 'Solicitar o cancelamento pelo e-DAC observando a carga horaria minima semanal exigida pelo curso.',
    criticalRisk: 'Ultrapassar a data limite impede o cancelamento, obrigando a conclusao da materia com risco de impacto negativo no Coeficiente de Rendimento.',
    officialUrl: 'https://www.dac.unicamp.br/portal/graduacao/regimento-geral',
  },
  {
    id: 'inicio-aulas',
    category: 'aulas',
    categoryLabel: 'Aulas e Periodo Letivo',
    title: 'Inicio do Periodo Letivo',
    description: 'Abertura oficial das atividades academicas, apresentacao dos planos de ensino pelos docentes e inicio da contagem de frequencia escolar.',
    typicalPeriod: 'Principio de marco para o primeiro semestre e principio de agosto para o segundo semestre letivo.',
    actionGuidance: 'Acompanhar o mural de salas no saguao da FT, confirmar o horario das turmas e consultar as ementas no Google Classroom ou Moodle.',
    criticalRisk: 'Faltas registradas nas semanas iniciais comprometem a frequencia minima obrigatoria de setenta e cinco por cento para aprovacao.',
    officialUrl: 'https://www.dac.unicamp.br/portal/calendario',
  },
  {
    id: 'recesso-escolar',
    category: 'aulas',
    categoryLabel: 'Aulas e Periodo Letivo',
    title: 'Recesso Escolar Intersemestral',
    description: 'Intervalo de descanso e preparacao academica entre os semestres letivos sem aulas regulares na graduacao.',
    typicalPeriod: 'Mes de julho entre semestres e periodo de fim de ano entre dezembro e fevereiro.',
    actionGuidance: 'Utilizar a janela para revisao de conteudos, planejamento de estagios, preparacao para maratonas de programacao e projetos pessoais.',
    criticalRisk: 'Desatencao aos prazos de matricula do semestre subsequente que costumam ocorrer durante o periodo de recesso.',
    officialUrl: 'https://www.dac.unicamp.br/portal/calendario',
  },
  {
    id: 'termino-aulas',
    category: 'aulas',
    categoryLabel: 'Aulas e Periodo Letivo',
    title: 'Encerramento Oficial das Aulas Regulares',
    description: 'Ultimo dia de exposicao de aulas teoricas e praticas antes do inicio da semana de exames finais.',
    typicalPeriod: 'Final de junho para o primeiro semestre e final de novembro para o segundo semestre.',
    actionGuidance: 'Verificar com cada professor a situacao de presencas e a media parcial antes do inicio do periodo de provas substitutivas e exames.',
    criticalRisk: 'Nao comparecer ao fechamento das notas parciais impede eventuais recursos sobre registros de faltas indevidas.',
    officialUrl: 'https://www.dac.unicamp.br/portal/calendario',
  },
  {
    id: 'trancamento-parcial',
    category: 'trancamento',
    categoryLabel: 'Trancamento e Afastamento',
    title: 'Trancamento Parcial de Disciplinas',
    description: 'Mecanismo regimental para cancelamento de materias em casos extraordinarios previstos no regulamento academico da universidade.',
    typicalPeriod: 'Disponivel ate o encerramento do primeiro terco do semestre letivo com avaliacao da coordenacao.',
    actionGuidance: 'Registrar justificativa detalhada no e-DAC e comprovar manutencao do numero minimo de creditos obrigatorios no curso.',
    criticalRisk: 'O cancelamento nao autorizado acarreta reprovacao por nota zero e prejuizo severo no calculo do CR.',
    officialUrl: 'https://www.dac.unicamp.br/portal/graduacao/regimento-geral',
  },
  {
    id: 'trancamento-total',
    category: 'trancamento',
    categoryLabel: 'Trancamento e Afastamento',
    title: 'Trancamento Geral de Matricula do Curso',
    description: 'Suspensao temporaria e formal de todas as atividades academicas com garantia de preservacao da vaga no curso da FT.',
    typicalPeriod: 'Solicitavel durante o semestre letivo antes do inicio do periodo de exames finais, respeitando o limite maximo de semestres.',
    actionGuidance: 'Abrir processo administrativo no e-DAC indicando o motivo e apresentar declaracoes exigidas pela Diretoria Academica.',
    criticalRisk: 'O esgotamento do prazo maximo de trancamentos permitidos pelo catalogo leva ao desligamento definitivo da universidade por jubilamento.',
    officialUrl: 'https://www.dac.unicamp.br/portal/graduacao/regimento-geral',
  },
  {
    id: 'periodo-exames',
    category: 'avaliacoes',
    categoryLabel: 'Avaliacoes e Notas',
    title: 'Periodo de Exames Finais',
    description: 'Semana reservada exclusivamente para realizacao de exames finais por discentes com media semestral entre cinco e seis.',
    typicalPeriod: 'Primeira quinzena de julho para o primeiro semestre e primeira quinzena de dezembro para o segundo.',
    actionGuidance: 'Consultar o ensalamento oficial de exames no portal da FT e revisar as listas de exercicios aplicadas ao longo do semestre.',
    criticalRisk: 'A ausencia nao justificada no exame final resulta em nota zero na avaliacao e consequente reprovacao na materia.',
    officialUrl: 'https://www.dac.unicamp.br/portal/calendario',
  },
  {
    id: 'divulgacao-notas',
    category: 'avaliacoes',
    categoryLabel: 'Avaliacoes e Notas',
    title: 'Lancamento de Conceitos e Medias no e-DAC',
    description: 'Data limite para que o corpo docente submeta as notas definitivas e frequencias no sistema central da Diretoria Academica.',
    typicalPeriod: 'Dias imediatamente posteriores a conclusao da semana oficial de exames finais.',
    actionGuidance: 'Acessar o boletim do e-DAC para checagem imediata dos conceitos e solicitar revisao de prova se houver divergencia.',
    criticalRisk: 'Expiracao do prazo regimental para solicitacao formal de revisao de nota perante o departamento responsavel.',
    officialUrl: 'https://www.dac.unicamp.br/portal/sistemas/e-dac',
  },
  {
    id: 'solicitacao-formatura',
    category: 'conclusao',
    categoryLabel: 'Conclusao e Formatura',
    title: 'Confirmacao de Formatura e Colacao de Grau',
    description: 'Procedimento formal para estudantes no ultimo ano letivo confirmarem a integralizacao curricular e a participacao na colacao de grau.',
    typicalPeriod: 'Meados de maio para concluintes do primeiro semestre e meados de outubro para concluintes do segundo.',
    actionGuidance: 'Conferir o cumprimento de todos os requisitos no checklist do e-DAC e confirmar presenca na cerimonia oficial da FT.',
    criticalRisk: 'Pendencias documentais ou ausencia de solicitacao impedem a outorga legal de grau e a emissao do diploma no prazo esperado.',
    officialUrl: 'https://www.dac.unicamp.br/portal/graduacao/colacao-de-grau',
  },
  {
    id: 'envio-documentos-diploma',
    category: 'conclusao',
    categoryLabel: 'Conclusao e Formatura',
    title: 'Validacao Documental para Diploma Digital',
    description: 'Etapa final de homologacao de certidoes de nascimento, documentos de identificacao e historicos para emissao do diploma em formato digital.',
    typicalPeriod: 'Nos trinta dias anteriores a data designada para a colacao de grau oficial.',
    actionGuidance: 'Realizar upload dos documentos em alta resolucao no sistema da DAC e acompanhar a verificacao de autenticidade.',
    criticalRisk: 'Documentos ilegiveis ou desatualizados atrasam o registro do diploma digital nos sistemas oficiais do MEC.',
    officialUrl: 'https://www.dac.unicamp.br/portal/graduacao/colacao-de-grau',
  },
];
