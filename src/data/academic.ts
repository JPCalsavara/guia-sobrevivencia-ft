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
    bsi: 'Maioria reside em repúblicas ou kitnets em Limeira nos anos iniciais, iniciando estágio formal a partir do quinto semestre',
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
      { code: 'SI910', name: 'Estágio em Computação I', credits: 10, type: 'obrigatoria', note: 'Estágio supervisionado formal com plano homologado via SAE' },
      { code: 'ELET-04', name: 'Créditos Eletivos do Catálogo', credits: 10, type: 'eletiva' },
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
      { code: 'SI911', name: 'Estágio em Computação II', credits: 10, type: 'obrigatoria' },
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
    description: 'Definição se o estágio terá aproveitamento em disciplinas curriculares ou atuação livre',
    detail: 'No estágio obrigatório, o estudante precisa estar matriculado nas disciplinas formais de estágio do curso, como SI910 e SI911 no BSI. No estágio não obrigatório, não há exigência de matrícula em disciplina específica.',
  },
  {
    stepNumber: 2,
    title: 'Cadastro Exclusivo no Sistema de Estágio do SAE',
    description: 'Registro do plano de trabalho da empresa e dados do aluno na plataforma oficial',
    detail: 'Tanto para estágios remunerados quanto voluntários, a formalização ocorre via sistema SAE. A empresa cadastrada insere o Plano de Atividades com a descrição das tarefas técnicas que serão desempenhadas.',
  },
  {
    stepNumber: 3,
    title: 'Avaliação da Correlação pelo Coordenador de Curso',
    description: 'Análise de compatibilidade entre as tarefas corporativas e o perfil pedagógico do curso',
    detail: 'A coordenação do curso de graduação da FT analisa o plano de estágio via sistema SAE. Para aprovação, o estágio deve demonstrar correlação direta com tecnologia e respeitar os limites da Lei Federal 11.788 de 2008.',
  },
  {
    stepNumber: 4,
    title: 'Assinatura e Entrega do Termo de Compromisso',
    description: 'Protocolo formal do documento antes do primeiro dia de atuação na empresa',
    detail: 'Após o deferimento eletrônico, o termo de compromisso de estágio gerado pelo sistema deve ser assinado pelo aluno, pela empresa e pela universidade, sendo protocolado no SAE da FT antes do início das atividades.',
  },
  {
    stepNumber: 5,
    title: 'Acompanhamento e Elaboração do Relatório Final',
    description: 'Validação de aprendizagem com parecer do supervisor corporativo',
    detail: 'Ao término do período acordado, o estudante faz o envio do Relatório Final de Estágio no sistema SAE, com a avaliação e assinatura do supervisor da empresa e a validação do professor responsável para concessão dos créditos.',
  },
  {
    stepNumber: 6,
    title: 'Trâmite de Casos Especiais para Vínculo CLT',
    description: 'Regulamentação para estudantes que já possuem carteira assinada na área técnica',
    detail: 'A legislação proíbe estágio regular se o estudante mantiver vínculo CLT na mesma função da vaga. Estudantes nessa condição devem procurar a Secretaria de Graduação da FT para abertura de processo de Casos Especiais.',
  },
];

