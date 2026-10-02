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
  {
    criterion: 'Rotina e Inserção no Mercado de Trabalho',
    bsi: 'Maioria reside em Limeira nos anos iniciais e realiza estágio formal no quarto ano letivo, pois as turmas noturnas de TADS não possuem vagas para BSI',
    tads: 'Muitos estudantes viajam diariamente de cidades vizinhas em ida e volta até o final do curso, trabalhando ou estagiando mais cedo por necessidade e disponibilidade noturna',
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
    description: 'Cumprir os créditos exigidos entre eletivas de bloco e eletivas livres presenciais',
    detail: 'Eletivas gerais podem ser cursadas na FCA em Limeira ou nos institutos de Barão Geraldo, com aulas e avaliações presenciais, não sendo admitido abater estágio nem atividades complementares.',
  },
  {
    id: 'extensao',
    title: 'Atividades Complementares e Curricularização da Extensão',
    description: 'Comprovar a carga regulamentar no e-DAC conforme o catálogo de ingresso',
    detail: 'Em BSI e TADS as disciplinas obrigatórias já suprem os dez por cento de extensão. Verifique no e-DAC se seu catálogo exige SI918, para ingressantes até 2022, ou SI919 e SI920 a partir de 2023. Certificados de atividades complementares podem ser enviados durante todo o semestre letivo até quinze dias antes da semana de estudos.',
  },
  {
    id: 'tcc-estagio',
    title: 'Conclusão Aprovada de TCC ou Estágio Supervisionado',
    description: 'Apresentar monografia ou estágio formal contemporâneo homologado via DEAPE',
    detail: 'Em BSI é necessária a aprovação de TCC perante banca e estágio SI916. Em TADS cursa-se estágio SI917 ou projeto prático. O estágio remunerado precisa ser realizado no mesmo semestre da matrícula para aproveitamento. Alunos CLT devem abrir estágio obrigatório não remunerado de dez semanas em BSI ou seis semanas em TADS.',
  },
  {
    id: 'quitacao-biblioteca',
    title: 'Regularidade Cadastral e Nada Consta na Biblioteca',
    description: 'Garantir quitação de empréstimos e pendências no sistema SBU e na DAC',
    detail: 'A emissão da declaração de nada consta é requisito prévio para a liberação da colação de grau.',
  },
];

export interface PadComparison {
  criterion: string;
  withScholarship: string;
  withoutScholarship: string;
}

export const padComparisonData: PadComparison[] = [
  {
    criterion: 'Remuneração Financeira',
    withScholarship: 'Bolsa mensal concedida pela PRG com pagamento direto em conta corrente',
    withoutScholarship: 'Atividade voluntária sem remuneração financeira',
  },
  {
    criterion: 'Certificado Oficial da PRG',
    withScholarship: 'Emitido formalmente pela Pró-Reitoria de Graduação ao término do período letivo',
    withoutScholarship: 'Emitido formalmente pela Pró-Reitoria de Graduação ao término do período letivo',
  },
  {
    criterion: 'Aproveitamento como Atividades Complementares',
    withScholarship: 'Validação de créditos na DAC conforme os limites do regulamento do catálogo',
    withoutScholarship: 'Validação de créditos na DAC conforme os limites do regulamento do catálogo',
  },
  {
    criterion: 'Carga Horária Semanal',
    withScholarship: 'De oito a doze horas semanais com flexibilidade acordada com o docente',
    withoutScholarship: 'De oito a doze horas semanais com flexibilidade acordada com o docente',
  },
  {
    criterion: 'Acúmulo com Outras Bolsas',
    withScholarship: 'Vedado acumular com outras bolsas institucionais de graduação da universidade',
    withoutScholarship: 'Permitido conciliar com bolsas de auxílio social ou bolsas de pesquisa científica',
  },
  {
    criterion: 'Critério Básico de Seleção',
    withScholarship: 'Aprovação prévia na matéria com nota destacada, avaliação do Coeficiente de Rendimento e seleção pelo docente',
    withoutScholarship: 'Aprovação prévia na matéria com nota destacada, avaliação do Coeficiente de Rendimento e seleção pelo docente',
  },
];

export interface CourseSubject {
  code: string;
  name: string;
  credits: number;
  type: 'obrigatoria' | 'eletiva' | 'extensao' | 'pratica';
  note?: string;
  catalogUrl?: string;
}

export interface SemesterCurriculum {
  semesterNumber: number;
  semesterLabel: string;
  totalCredits: number;
  subjects: CourseSubject[];
}

// Matriz Curricular Completa de BSI: 204 créditos distribuídos em 8 semestres
export const bsiCurriculumData: SemesterCurriculum[] = [
  {
    semesterNumber: 1,
    semesterLabel: '1º Semestre',
    totalCredits: 28,
    subjects: [
      { code: 'EB101', name: 'Cálculo I', credits: 6, type: 'obrigatoria' },
      { code: 'SI100', name: 'Algoritmos e Programação de Computadores I', credits: 4, type: 'obrigatoria' },
      { code: 'SI101', name: 'Fundamentos de Sistemas de Informação', credits: 2, type: 'obrigatoria' },
      { code: 'SI102', name: 'Seminários I', credits: 2, type: 'obrigatoria' },
      { code: 'SI120', name: 'Lógica Matemática', credits: 4, type: 'obrigatoria' },
      { code: 'ST008', name: 'Metodologia do Trabalho Científico', credits: 2, type: 'obrigatoria' },
      { code: 'TT106', name: 'Organização e Arquitetura de Computadores', credits: 4, type: 'obrigatoria' },
      { code: 'TT350', name: 'Administração de Empresas', credits: 4, type: 'obrigatoria' },
    ],
  },
  {
    semesterNumber: 2,
    semesterLabel: '2º Semestre',
    totalCredits: 28,
    subjects: [
      { code: 'EB102', name: 'Geometria Analítica e Álgebra Linear', credits: 6, type: 'obrigatoria' },
      { code: 'SI200', name: 'Algoritmos e Programação de Computadores II', credits: 4, type: 'obrigatoria' },
      { code: 'SI201', name: 'Estruturas de Dados I', credits: 4, type: 'obrigatoria' },
      { code: 'SI220', name: 'Matemática Discreta', credits: 4, type: 'obrigatoria' },
      { code: 'SI250', name: 'Economia e Finanças', credits: 4, type: 'obrigatoria' },
      { code: 'ST266', name: 'Engenharia de Software I', credits: 2, type: 'obrigatoria' },
      { code: 'ST468', name: 'Cálculo Numérico', credits: 4, type: 'obrigatoria' },
    ],
  },
  {
    semesterNumber: 3,
    semesterLabel: '3º Semestre',
    totalCredits: 28,
    subjects: [
      { code: 'SI300', name: 'Programação Orientada a Objetos I', credits: 4, type: 'obrigatoria' },
      { code: 'SI304', name: 'Engenharia de Software II', credits: 4, type: 'obrigatoria' },
      { code: 'SI350', name: 'Teoria Geral de Sistemas', credits: 2, type: 'obrigatoria' },
      { code: 'ST211', name: 'Estatística', credits: 4, type: 'obrigatoria' },
      { code: 'ST567', name: 'Banco de Dados I', credits: 4, type: 'obrigatoria' },
      { code: 'ST568', name: 'Redes de Comunicação I', credits: 4, type: 'obrigatoria' },
      { code: 'TT304', name: 'Sistemas Operacionais', credits: 4, type: 'obrigatoria' },
      { code: 'ELET-01', name: 'Créditos Eletivos Livres', credits: 2, type: 'eletiva', note: 'Disciplinas eletivas da FT ou de outros institutos da Unicamp' },
    ],
  },
  {
    semesterNumber: 4,
    semesterLabel: '4º Semestre',
    totalCredits: 26,
    subjects: [
      { code: 'SI305', name: 'Análise de Sistemas de Informação I', credits: 4, type: 'obrigatoria' },
      { code: 'SI400', name: 'Programação Orientada a Objetos II', credits: 4, type: 'obrigatoria' },
      { code: 'SI401', name: 'Programação para a Web', credits: 4, type: 'obrigatoria' },
      { code: 'SI450', name: 'Administração da Produção', credits: 2, type: 'obrigatoria' },
      { code: 'ST562', name: 'Estruturas de Arquivos', credits: 4, type: 'obrigatoria' },
      { code: 'ST767', name: 'Banco de Dados II', credits: 4, type: 'obrigatoria' },
      { code: 'ELET-02', name: 'Créditos Eletivos Livres', credits: 4, type: 'eletiva' },
    ],
  },
  {
    semesterNumber: 5,
    semesterLabel: '5º Semestre',
    totalCredits: 30,
    subjects: [
      { code: 'SI404', name: 'Introdução a Interfaces Humano Computador', credits: 2, type: 'obrigatoria' },
      { code: 'SI405', name: 'Análise de Sistemas de Informação II', credits: 4, type: 'obrigatoria' },
      { code: 'TT060', name: 'Gestão de Projetos', credits: 4, type: 'obrigatoria' },
      { code: 'ELET-03', name: 'Créditos Eletivos do Catálogo', credits: 20, type: 'eletiva', note: 'Disciplinas eletivas avançadas de computação, iniciação científica ou monitoria' },
    ],
  },
  {
    semesterNumber: 6,
    semesterLabel: '6º Semestre',
    totalCredits: 20,
    subjects: [
      { code: 'ELET-04', name: 'Créditos Eletivos do Catálogo', credits: 20, type: 'eletiva', note: 'Disciplinas eletivas avançadas de computação, iniciação científica ou monitoria' },
    ],
  },
  {
    semesterNumber: 7,
    semesterLabel: '7º Semestre',
    totalCredits: 30,
    subjects: [
      { code: 'SI700', name: 'Programação para Dispositivos Móveis', credits: 4, type: 'obrigatoria' },
      { code: 'SI701', name: 'Introdução a Multimídia', credits: 2, type: 'obrigatoria' },
      { code: 'SI702', name: 'Inteligência Artificial', credits: 4, type: 'obrigatoria' },
      { code: 'SI703', name: 'Governança e Planejamento Estratégico de TI', credits: 2, type: 'obrigatoria' },
      { code: 'SI704', name: 'Seminários II', credits: 2, type: 'obrigatoria' },
      { code: 'SI916', name: 'Estágio em Computação', credits: 10, type: 'obrigatoria', note: 'Estágio curricular supervisionado formal contemporâneo homologado via DEAPE' },
      { code: 'SI912', name: 'Trabalho de Conclusão de Curso I', credits: 6, type: 'obrigatoria', note: 'Definição de tema, orientador e proposta inicial' },
    ],
  },
  {
    semesterNumber: 8,
    semesterLabel: '8º Semestre',
    totalCredits: 14,
    subjects: [
      { code: 'SI800', name: 'Empreendedorismo e Inovação', credits: 2, type: 'obrigatoria' },
      { code: 'SI801', name: 'Introdução a Auditoria e Segurança de Sistemas de Informação', credits: 2, type: 'obrigatoria' },
      { code: 'SI913', name: 'Trabalho de Conclusão de Curso II', credits: 6, type: 'obrigatoria', note: 'Monografia final e defesa perante banca examinadora' },
      { code: 'TT050', name: 'Sistemas de Apoio à Decisão', credits: 4, type: 'obrigatoria' },
    ],
  },
];

// Matriz Curricular Atualizada de TADS Projeto Pedagógico 2026: 6 semestres no turno noturno
export const tadsCurriculumData: SemesterCurriculum[] = [
  {
    semesterNumber: 1,
    semesterLabel: 'Semestre 1',
    totalCredits: 18,
    subjects: [
      { code: 'SI220', name: 'Matemática Discreta', credits: 4, type: 'obrigatoria' },
      { code: 'SI100', name: 'Algoritmos e Programação de Computadores I', credits: 4, type: 'obrigatoria' },
      { code: 'SI103', name: 'Laboratório de Ferramentas de Programação', credits: 4, type: 'pratica' },
      { code: 'TT106', name: 'Organização e Arquitetura de Computadores', credits: 4, type: 'obrigatoria' },
      { code: 'SI104', name: 'Atividades Práticas em Algoritmos', credits: 2, type: 'pratica' },
    ],
  },
  {
    semesterNumber: 2,
    semesterLabel: 'Semestre 2',
    totalCredits: 18,
    subjects: [
      { code: 'ST211', name: 'Estatística', credits: 4, type: 'obrigatoria' },
      { code: 'SI305', name: 'Análise de Sistemas de Informação I', credits: 4, type: 'obrigatoria' },
      { code: 'SI206', name: 'Engenharia de Software I', credits: 4, type: 'obrigatoria' },
      { code: 'SI205', name: 'Ciência, Tecnologia e Sociedade', credits: 2, type: 'obrigatoria' },
      { code: 'SI204', name: 'Algoritmos e Programação de Computadores II', credits: 2, type: 'obrigatoria' },
      { code: 'UNIV-01', name: 'Eletiva Livre Qualquer Disciplina Unicamp', credits: 2, type: 'eletiva' },
    ],
  },
  {
    semesterNumber: 3,
    semesterLabel: 'Semestre 3',
    totalCredits: 20,
    subjects: [
      { code: 'SI306', name: 'Matemática para Ciência de Dados', credits: 4, type: 'obrigatoria' },
      { code: 'SI300', name: 'Programação Orientada a Objetos I', credits: 4, type: 'obrigatoria' },
      { code: 'SI304', name: 'Engenharia de Software II', credits: 4, type: 'obrigatoria' },
      { code: 'ST567', name: 'Banco de Dados I', credits: 4, type: 'obrigatoria' },
      { code: 'SI404', name: 'Introdução a Interfaces Humano Computador', credits: 2, type: 'obrigatoria' },
      { code: 'UNIV-02', name: 'Eletiva Livre Qualquer Disciplina Unicamp', credits: 2, type: 'eletiva' },
    ],
  },
  {
    semesterNumber: 4,
    semesterLabel: 'Semestre 4',
    totalCredits: 22,
    subjects: [
      { code: 'SI201', name: 'Estruturas de Dados I', credits: 4, type: 'obrigatoria' },
      { code: 'SI400', name: 'Programação Orientada a Objetos II', credits: 4, type: 'obrigatoria' },
      { code: 'TT304', name: 'Sistemas Operacionais', credits: 4, type: 'obrigatoria' },
      { code: 'ST767', name: 'Banco de Dados II', credits: 4, type: 'obrigatoria' },
      { code: 'SI406', name: 'Atividades Práticas em Interação Humano Computador', credits: 2, type: 'extensao', note: 'Contém carga horária de extensão curricularizada' },
      { code: 'SI401', name: 'Programação para a Web', credits: 4, type: 'obrigatoria' },
    ],
  },
  {
    semesterNumber: 5,
    semesterLabel: 'Semestre 5',
    totalCredits: 24,
    subjects: [
      { code: 'ST568', name: 'Redes de Comunicação I', credits: 4, type: 'obrigatoria' },
      { code: 'SI405', name: 'Análise de Sistemas de Informação II', credits: 4, type: 'obrigatoria' },
      { code: 'TT060', name: 'Gestão de Projetos', credits: 4, type: 'extensao', note: 'Com créditos de extensão incorporados' },
      { code: 'SI702', name: 'Inteligência Artificial', credits: 4, type: 'obrigatoria' },
      { code: 'SI010', name: 'Estruturas de Dados II', credits: 4, type: 'obrigatoria' },
      { code: 'SI503', name: 'Projeto Integrador', credits: 4, type: 'extensao', note: 'Prática integradora com entregáveis reais' },
    ],
  },
  {
    semesterNumber: 6,
    semesterLabel: 'Semestre 6',
    totalCredits: 32,
    subjects: [
      { code: 'SI700', name: 'Programação para Dispositivos Móveis', credits: 4, type: 'obrigatoria' },
      { code: 'SI602', name: 'Introdução ao Aprendizado de Máquina', credits: 4, type: 'obrigatoria' },
      { code: 'SI800', name: 'Empreendedorismo e Inovação', credits: 2, type: 'extensao' },
      { code: 'SI603', name: 'Processamento Paralelo e Distribuído', credits: 4, type: 'obrigatoria' },
      { code: 'SI919', name: 'Atividades Complementares de Extensão', credits: 4, type: 'extensao' },
      { code: 'SI920', name: 'Atividades Complementares', credits: 12, type: 'obrigatoria' },
      { code: 'UNIV-03', name: 'Eletiva Livre Qualquer Disciplina Unicamp', credits: 2, type: 'eletiva' },
    ],
  },
];

// Procedimentos Oficiais de Estágio na FT Unicamp
export interface InternshipStep {
  stepNumber: number;
  title: string;
  description: string;
  detail: string;
}

export const ftInternshipProceduresData: InternshipStep[] = [
  {
    stepNumber: 1,
    title: 'Verificação da Modalidade: Obrigatório versus Não Obrigatório',
    description: 'Definição se o estágio terá aproveitamento em disciplinas curriculares ou atuação profissional livre',
    detail: 'No estágio obrigatório, o estudante precisa estar matriculado nas disciplinas curriculares vigentes, sendo SI916 para BSI e SI917 para TADS. O estágio remunerado só é aproveitado como obrigatório se for realizado de forma contemporânea no mesmo semestre letivo da matrícula.',
  },
  {
    stepNumber: 2,
    title: 'Cadastro Exclusivo no Sistema de Estágio da DEAPE',
    description: 'Registro do plano de trabalho da empresa e dados do aluno na plataforma oficial',
    detail: 'Tanto para estágios remunerados quanto não remunerados, a formalização ocorre via sistema da DEAPE. A empresa cadastrada insere o Plano de Atividades com a descrição das tarefas técnicas que serão desempenhadas.',
  },
  {
    stepNumber: 3,
    title: 'Avaliação da Correlação pelo Coordenador de Curso',
    description: 'Análise de compatibilidade entre as tarefas corporativas e o perfil pedagógico do curso',
    detail: 'A coordenação do curso de graduação da FT analisa o plano de estágio via sistema DEAPE. Para aprovação, o estágio deve demonstrar correlação direta com tecnologia e respeitar os limites da Lei Federal 11.788 de 2008.',
  },
  {
    stepNumber: 4,
    title: 'Assinatura e Entrega do Termo de Compromisso',
    description: 'Protocolo formal do documento antes do primeiro dia de atuação na empresa',
    detail: 'Após o deferimento eletrônico, o termo de compromisso de estágio gerado pelo sistema deve ser assinado pelo aluno, pela empresa e pela universidade, sendo protocolado junto à DEAPE e à FT antes do início das atividades.',
  },
  {
    stepNumber: 5,
    title: 'Acompanhamento e Elaboração do Relatório Final',
    description: 'Validação de aprendizagem com parecer do supervisor corporativo',
    detail: 'Ao término do período acordado, o estudante faz o envio do Relatório Final de Estágio no sistema DEAPE, com a avaliação e assinatura do supervisor da empresa e a validação do professor responsável para concessão dos créditos.',
  },
  {
    stepNumber: 6,
    title: 'Procedimento para Estudantes com Vínculo CLT',
    description: 'Abertura de estágio obrigatório não remunerado para quem já possui carteira assinada',
    detail: 'Estudantes com contrato CLT devem abrir formalmente termo de estágio obrigatório não remunerado junto à empresa para cumprir as horas curriculares, com duração de dez semanas para BSI ou seis semanas para TADS. É fundamental verificar previamente se a empresa aceita firmar o termo e atentar para o limite legal de até dois anos de estágio na mesma organização.',
  },
];

// Procedimentos Oficiais de TCC na FT Unicamp
export interface TccStep {
  stepNumber: number;
  title: string;
  description: string;
  detail: string;
}

export const ftTccProceduresData: TccStep[] = [
  {
    stepNumber: 1,
    title: 'Matrícula nas Disciplinas de TCC',
    description: 'Inscrição formal via SIGA DAC conforme a estrutura curricular do curso',
    detail: 'No curso de Sistemas de Informação, o estudante deve cursar SI912 referente ao TCC I para elaboração da proposta e fundamentação, seguido de SI913 referente ao TCC II para implementação e defesa final. No curso de Análise e Desenvolvimento de Sistemas, o aluno pode optar pelo projeto de conclusão ou pelo estágio supervisionado.',
  },
  {
    stepNumber: 2,
    title: 'Definição do Docente Orientador e Tema',
    description: 'Alinhamento do projeto acadêmico ou tecnológico com um professor da FT',
    detail: 'O aluno entra em contato direto com docentes cujas linhas de pesquisa coincidam com seus interesses. É possível contar também com um coorientador externo ou pós-graduando, desde que haja um docente responsável da Faculdade de Tecnologia.',
  },
  {
    stepNumber: 3,
    title: 'Cadastro Eletrônico da Proposta no SIGA',
    description: 'Submissão formal do plano de trabalho dentro dos prazos fixados no calendário',
    detail: 'O estudante deve preencher os dados do projeto no módulo de TCC do SIGA, indicando título, resumo, cronograma e orientador. O professor orientador precisa validar e aprovar eletronicamente a submissão para que a proposta seja homologada.',
  },
  {
    stepNumber: 4,
    title: 'Desenvolvimento do Trabalho e Defesa perante Banca',
    description: 'Execução do projeto e avaliação pública por docentes examinadores',
    detail: 'Ao final de TCC II, o estudante redige a monografia e agenda a apresentação pública da banca examinadora composta pelo orientador e membros convidados especialistas no tema.',
  },
  {
    stepNumber: 5,
    title: 'Substituição da Monografia por Artigo Científico',
    description: 'Aproveitamento de artigo técnico ou científico em conferência ou periódico',
    detail: 'A Instrução Normativa da FT permite substituir o modelo clássico de monografia por um artigo científico aceito para publicação ou submetido a eventos e periódicos qualificados da área, com anuência formal do orientador e da comissão de graduação.',
  },
  {
    stepNumber: 6,
    title: 'Depósito Final e Homologação na Biblioteca',
    description: 'Envio da versão corrigida no sistema SIGA e integração ao acervo digital',
    detail: 'Após a defesa e a incorporação das recomendações da banca examinadora, o arquivo final em PDF é enviado via SIGA com a ficha catalográfica emitida pela Biblioteca da FT para homologação da colação de grau.',
  },
];

// Diretrizes do Programa Integrado de Formação PIF
export interface PifGuideline {
  stepNumber: number;
  title: string;
  description: string;
  detail: string;
}

export const pifGuidelinesData: PifGuideline[] = [
  {
    stepNumber: 1,
    title: 'Fundamentação Legal e Objetivo do PIF',
    description: 'Integração entre a graduação e a pós-graduação estrita na Unicamp',
    detail: 'Criado pela Deliberação CEPE-A-22 de 2001, o Programa Integrado de Formação permite a alunos de graduação com alto desempenho cursar disciplinas avançadas de mestrado, promovendo continuidade imediata na carreira acadêmica.',
  },
  {
    stepNumber: 2,
    title: 'Critérios de Elegibilidade e Rendimento Escolar',
    description: 'Exigência de Coeficiente de Rendimento elevado e percentual de curso avançado',
    detail: 'Para solicitar participação, o estudante precisa manter CR elevado, geralmente superior ao limiar estabelecido pelo programa de pós-graduação pretendido, além de ter cumprido no mínimo setenta por cento dos créditos da graduação.',
  },
  {
    stepNumber: 3,
    title: 'Inscrição como Estudante Especial na DAC',
    description: 'Solicitação formal de matrícula em disciplinas do catálogo de pós-graduação',
    detail: 'O aluno submete requerimento como Estudante Especial na Diretoria Acadêmica DAC, indicando as matérias de pós-graduação de interesse com a anuência do docente responsável pela disciplina e da coordenação do programa.',
  },
  {
    stepNumber: 4,
    title: 'Convalidação Direta de Créditos no Mestrado',
    description: 'Aproveitamento integral de créditos e notas após admissão no processo seletivo',
    detail: 'Ao ingressar oficialmente no mestrado acadêmico da FT ou de outro instituto da Unicamp, os créditos das matérias cursadas no PIF são aproveitados integralmente, possibilitando concluir a dissertação de mestrado em menos tempo.',
  },
];

// Procedimentos da Cerimônia de Formatura e Colação de Grau
export interface GraduationCeremonyStep {
  stepNumber: number;
  title: string;
  category: 'oficial' | 'gabinete' | 'digital' | 'comissao';
  description: string;
  detail: string;
}

export const ftGraduationCeremonyData: GraduationCeremonyStep[] = [
  {
    stepNumber: 1,
    title: 'Conferência de Integralização e Homologação na DAC',
    category: 'oficial',
    description: 'Validação automática do cumprimento dos cinco requisitos curriculares',
    detail: 'A Diretoria Acadêmica confere o cumprimento de cem por cento dos créditos, aprovação em TCC, validação de estágio supervisionado, dez por cento de extensão universitária e regularidade no Enade. Com tudo aprovado, o formando entra na lista oficial de colação de grau.',
  },
  {
    stepNumber: 2,
    title: 'Colação de Grau Solene Oficial na FT',
    category: 'oficial',
    description: 'Cerimônia pública gratuita presidida pela Diretoria e Secretaria de Graduação',
    detail: 'Rito acadêmico obrigatório realizado no campus de Limeira sem qualquer custo para o estudante. A FT fornece as vestimentas talares, beca e capelo, para o ato solene. O formando profere o juramento oficial do curso, recebe a outorga de grau e assina a ata oficial que formaliza o término da graduação.',
  },
  {
    stepNumber: 3,
    title: 'Colação de Grau Extraordinária em Gabinete',
    category: 'gabinete',
    description: 'Antecipação do rito para formandos com posse imediata em concurso ou pós-graduação',
    detail: 'Caso o estudante já tenha cumprido todos os requisitos de integralização e necessite do diploma ou comprovante de conclusão com urgência comprovada por edital de matrícula em mestrado ou convocação de concurso público, é possível protocolar pedido fundamentado perante a Secretaria de Graduação para colação antecipada em gabinete com a Diretoria.',
  },
  {
    stepNumber: 4,
    title: 'Emissão e Registro do Diploma Digital da Unicamp',
    category: 'digital',
    description: 'Documento oficial gratuito com certificado digital no padrão ICP-Brasil',
    detail: 'Conforme a regulamentação do MEC, o diploma de graduação da Unicamp é emitido em formato eletrônico nativo pelo sistema SIGA da DAC. O arquivo conta com assinatura digital avançada, representação visual em PDF com QR Code de validação e arquivo XML assinado, possuindo fé pública sem custos adicionais de expedição.',
  },
  {
    stepNumber: 5,
    title: 'Diferença entre Rito Oficial e Comissão Festiva',
    category: 'comissao',
    description: 'Esclarecimento sobre a natureza voluntária de festas e bailes de gala',
    detail: 'A colação de grau oficial é o único rito que confere validade jurídica e permite a expedição do diploma, sendo totalmente gratuita e promovida pela faculdade. A adesão a comissões de formatura de estudantes, contratação de empresas de eventos, bailes de gala ou fotos de estúdio é voluntária e de iniciativa exclusiva dos alunos, não tendo qualquer vínculo com a universidade.',
  },
];

export interface PostgraduateProgram {
  id: string;
  name: string;
  degree: string;
  unit: string;
  description: string;
  researchLines: string[];
  selectionProcess: string;
}

export const postgraduateProgramsData: PostgraduateProgram[] = [
  {
    id: 'pos-ft-computacao-engenharia',
    name: 'Programa de Pós-Graduação em Tecnologia',
    degree: 'Mestrado e Doutorado Acadêmico',
    unit: 'Faculdade de Tecnologia da Unicamp, Campus Limeira',
    description: 'Programa multidisciplinar sediado na própria FT, com forte interseção entre ciência da computação, engenharia de software, inteligência artificial, processamento de sinais e sustentabilidade.',
    researchLines: [
      'Sistemas Inteligentes e Ciência de Dados',
      'Engenharia de Software e Sistemas Distribuídos',
      'Visão Computacional e Processamento de Imagens',
      'Tecnologia Aplicada à Saúde e Meio Ambiente'
    ],
    selectionProcess: 'Processo seletivo semestral via edital público com análise de histórico escolar, currículo Lattes, proposta de pesquisa preliminar e carta de aceite de orientador docente da FT.'
  },
  {
    id: 'pos-ic-ciencia-computacao',
    name: 'Programa de Pós-Graduação em Ciência da Computação',
    degree: 'Mestrado e Doutorado Acadêmico',
    unit: 'Instituto de Computação da Unicamp, Campus Barão Geraldo',
    description: 'Um dos programas de pós-graduação mais conceituados da América Latina, com nota máxima na avaliação da CAPES, atraindo pesquisadores de todo o mundo para investigações de ponta.',
    researchLines: [
      'Inteligência Artificial e Aprendizado de Máquina',
      'Teoria da Computação e Otimização Combinatória',
      'Sistemas de Computação e Redes de Alta Escala',
      'Segurança da Informação e Criptografia'
    ],
    selectionProcess: 'Exame Nacional de Pós-Graduação em Computação POSCOMP, avaliação de rendimento na graduação e cartas de recomendação acadêmica.'
  }
];

export interface ScholarshipInfo {
  agency: string;
  fullName: string;
  monthlyValue: string;
  duration: string;
  requirements: string;
}

export const scholarshipTypesData: ScholarshipInfo[] = [
  {
    agency: 'FAPESP',
    fullName: 'Fundação de Amparo à Pesquisa do Estado de São Paulo',
    monthlyValue: 'Valores mensais de aproximadamente 2800 reais para mestrado e 4400 reais para doutorado, acrescidos de reserva técnica para congressos e materiais.',
    duration: 'Até vinte e quatro meses no mestrado e até quarenta e oito meses no doutorado.',
    requirements: 'Projeto de pesquisa de alto mérito científico, histórico acadêmico exemplar, dedicação exclusiva e prestação de contas semestral detalhada.'
  },
  {
    agency: 'CAPES e CNPq',
    fullName: 'Coordenação de Aperfeiçoamento de Pessoal de Nível Superior e Conselho Nacional de Desenvolvimento Científico',
    monthlyValue: 'Valores padronizados federais de 2100 reais para mestrado acadêmico e 3100 reais para doutorado acadêmico.',
    duration: 'Vinte e quatro meses no mestrado e quarenta e oito meses no doutorado com renovação semestral.',
    requirements: 'Classificação no processo seletivo do programa de pós-graduação, dedicação integral às atividades do laboratório e publicação de artigos.'
  }
];


