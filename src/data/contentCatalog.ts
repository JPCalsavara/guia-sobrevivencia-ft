import type { TopicItem } from '../components/DocSidebar/DocSidebar';

export type SearchCategory =
  | 'academico'
  | 'campus'
  | 'carreira'
  | 'estudos-ia'
  | 'links'
  | 'duvidas'
  | 'estatisticas';

export type JourneyStage = 'calouro' | 'meio' | 'formando';

export interface CatalogSubTopic {
  id: string;
  title: string;
  summary: string;
  keywords?: string[];
}

export interface CatalogTopic {
  id: string;
  title: string;
  keywords?: string[];
  subtopics: CatalogSubTopic[];
}

export interface CatalogSection {
  id: string;
  category: SearchCategory;
  label: string;
  href: string;
  page: string;
  basePath: string;
  topics: CatalogTopic[];
}

export interface HeaderSubTopic {
  id: string;
  title: string;
  href: string;
  tag: string;
  recommendedStages?: JourneyStage[];
}

export interface HeaderNavSection {
  id: string;
  label: string;
  href: string;
  description: string;
  topics: HeaderSubTopic[];
}

export const contentCatalog: CatalogSection[] = [
  {
    id: "academico",
    category: "academico",
    label: "Academico",
    href: "/academico",
    page: "Acadêmico",
    basePath: "/academico",
    topics: [
      {
        id: "bsi-vs-tads",
        title: "BSI versus TADS",
        subtopics: [
          {
            id: "bsi-vs-tads",
            title: "Matriz Comparativa",
            summary: "BSI versus TADS, foco em Matriz Comparativa na Faculdade de Tecnologia da Unicamp.",
            keywords: ["bsi","tads","sistemas de informacao","analise e desenvolvimento de sistemas","noturno","integral"],
          },
          {
            id: "grade-curricular",
            title: "Grades Curriculares BSI e TADS",
            summary: "BSI versus TADS, foco em Grades Curriculares BSI e TADS na Faculdade de Tecnologia da Unicamp.",
          },
        ],
      },
      {
        id: "coeficientes-dac",
        title: "Coeficientes e Métricas DAC",
        subtopics: [
          {
            id: "coeficientes-metricas",
            title: "CR, CP e Vetores Horários",
            summary: "CR, Coeficiente de Rendimento Média ponderada das notas pelos créditos cursados.",
            keywords: ["cr","cp","coeficiente de rendimento","coeficiente de progressao","vetores horarios","dac"],
          },
          {
            id: "coeficientes-eletivas",
            title: "Eletivas do Catálogo e Livres",
            summary: "Estrutura de Eletivas e Disciplinas Extracurriculares Para integralizar sua graduação, o cumprimento de créditos eletivos divide-se em blocos com finalidades pedagógicas distintas: Eletivas de Bloco Específico: Disciplinas vinculadas a eixos formativos obrigatórios definidos pelo curso, abrangendo o bloco de Trabalho de Conclusão de Curso como SI912 e SI913, e o bloco de Estágio Supervisionado como SI916 em BSI ou SI917 em TADS.",
          },
          {
            id: "cel-linguas-estrangeiras",
            title: "Línguas Estrangeiras no CEL",
            summary: "Aulas de Línguas Estrangeiras no Centro de Ensino de Línguas CEL Disciplinas semestrais gratuitas com créditos eletivos no histórico escolar e catálogo oficial Para fazer aulas de língua estrangeira na Unicamp, você se inscreve nas disciplinas do Centro de Ensino de Línguas CEL.",
          },
        ],
      },
      {
        id: "calendario-academico",
        title: "Calendario Academico e DAC",
        subtopics: [
          {
            id: "calendario-academico",
            title: "Marcos Semestrais e Fontes Canonicas",
            summary: "Calendario Academico e Marcos Criticos do Semestre Ciclo semestral de matricula, desistencia, trancamento e exames finais conectado diretamente as fontes canonicas da DAC A integralizacao curricular na Unicamp exige o acompanhamento constante dos prazos regimentais estabelecidos pela Diretoria Academica.",
          },
        ],
      },
      {
        id: "calculo-geometria",
        title: "Cálculo e o Efeito Cascata de Prog 1",
        subtopics: [
          {
            id: "alerta-prog1-tranca-tudo",
            title: "Programação 1: O Cálculo da TI",
            summary: "Cálculo e o Efeito Cascata de Prog 1, foco em Programação 1: O Cálculo da TI na Faculdade de Tecnologia da Unicamp.",
          },
          {
            id: "calculo-plantoes",
            title: "Plantões PAD e Provas Antigas",
            summary: "Plantões Semanais de PAD e PED na FT A faculdade disponibiliza monitores do Programa de Apoio Didático e pós-graduandos do PED.",
          },
          {
            id: "calculo-metodologia",
            title: "Padrões de Resolução e Regra 48h",
            summary: "A Regra das Quarenta e Oito Horas Cálculo diferencial e álgebra linear exigem memória muscular.",
          },
          {
            id: "calculo-canais",
            title: "Canais do Professor Ferretto",
            summary: "Canais Recomendados do Professor Ferretto e Apoio Didático Cálculo 1 Professor Ferretto: Curso Completo de Cálculo 1 Playlist passo a passo com aulas graduais cobrindo limites, derivadas, regras da cadeia e técnicas de integração para superar o primeiro ano na FT.",
          },
        ],
      },
      {
        id: "checklist-formatura",
        title: "Checklist e Formatura",
        subtopics: [
          {
            id: "checklist-formatura",
            title: "Etapas de Integralização",
            summary: "Checklist e Formatura, foco em Etapas de Integralização na Faculdade de Tecnologia da Unicamp.",
            keywords: ["formatura","colacao de grau","integralizacao","diploma","tcc","estagio obrigatorio"],
          },
          {
            id: "cerimonia-formatura-colacao",
            title: "Cerimônia e Colação de Grau",
            summary: "Cerimônia de Formatura e Colação de Grau na FT Unicamp Rito oficial solene, colação extraordinária em gabinete, emissão do diploma digital e distinção com a comissão festiva A colação de grau é o ato acadêmico obrigatório pelo qual a universidade outorga formalmente o título universitário ao estudante que concluiu com aprovação todos os requisitos de integralização do currículo.",
          },
        ],
      },
      {
        id: "tcc-pos-graduacao-pif",
        title: "TCC e Pós-Graduação PIF",
        subtopics: [
          {
            id: "tcc-procedimentos",
            title: "Regulamento e Etapas de TCC",
            summary: "Procedimentos Oficiais de TCC no SIGA DAC Desde o cadastro da proposta até o depósito da versão final com a ficha catalográfica da Biblioteca da FT, todo o fluxo é documentado no sistema SIGA: TCC na FT Unicamp e Aceleração de Pós-Graduação com o PIF Regulamentos de Trabalho de Conclusão de Curso para BSI e TADS, trâmites no SIGA, substituição por artigo científico e ingresso antecipado no mestrado O Trabalho de Conclusão de Curso é o ápice da formação acadêmica e técnica.",
          },
          {
            id: "tcc-substituicao-artigo",
            title: "Substituição por Artigo Científico",
            summary: "Substituição da Monografia por Artigo Científico Instrução Normativa de Publicação A Faculdade de Tecnologia autoriza formalmente que a monografia tradicional de TCC seja substituída por um artigo científico original, desde que aceito para publicação ou submetido a periódico indexado ou congresso qualificado da área de computação.",
          },
          {
            id: "pif-pos-graduacao",
            title: "Aceleração de Mestrado via PIF",
            summary: "Programa Integrado de Formação PIF: Adiantando o Mestrado na Graduação Regulado pela Deliberação CEPE-A-22 de 2001, o PIF é uma oportunidade estratégica para estudantes que almejam carreira em pesquisa acadêmica ou pós-graduação estrita na Unicamp: TCC na FT Unicamp e Aceleração de Pós-Graduação com o PIF Regulamentos de Trabalho de Conclusão de Curso para BSI e TADS, trâmites no SIGA, substituição por artigo científico e ingresso antecipado no mestrado O Trabalho de Conclusão de Curso é o ápice da formação acadêmica e técnica.",
          },
          {
            id: "pos-graduacao-ft-ic",
            title: "Mestrado e Doutorado FT e IC",
            summary: "Estrutura de Mestrado e Doutorado na FT e no IC A Unicamp oferece programas de pós-graduação estrita com excelência internacional para quem deseja seguir carreira em pesquisa científica ou aprofundamento tecnológico avançado: TCC na FT Unicamp e Aceleração de Pós-Graduação com o PIF Regulamentos de Trabalho de Conclusão de Curso para BSI e TADS, trâmites no SIGA, substituição por artigo científico e ingresso antecipado no mestrado O Trabalho de Conclusão de Curso é o ápice da formação acadêmica e técnica.",
            keywords: ["mestrado tecnologia ft","pos graduacao computacao ic","doutorado unicamp","poscomp"],
          },
          {
            id: "bolsas-posgraduacao",
            title: "Bolsas de Pesquisa CAPES, CNPq e FAPESP",
            summary: "Bolsas de Pós-Graduação CAPES, CNPq e FAPESP Para dedicação integral às pesquisas de mestrado e doutorado, agências de fomento estaduais e federais disponibilizam auxílios financeiros mensais com critérios de mérito acadêmico: TCC na FT Unicamp e Aceleração de Pós-Graduação com o PIF Regulamentos de Trabalho de Conclusão de Curso para BSI e TADS, trâmites no SIGA, substituição por artigo científico e ingresso antecipado no mestrado O Trabalho de Conclusão de Curso é o ápice da formação acadêmica e técnica.",
            keywords: ["bolsa fapesp mestrado","bolsa capes","bolsa cnpq","pos graduacao fapesp","remuneracao pesquisa"],
          },
          {
            id: "tcc-links-oficiais",
            title: "Links Oficiais e Manuais SIGA",
            summary: "Links Oficiais e Manuais de TCC e PIF Portal de TCC e Estágio da FT Página oficial da Secretaria de Graduação da FT com regulamentos de TCC, instruções normativas, modelos de documentos e calendários de entrega.",
          },
        ],
      },
      {
        id: "monitoria-pad",
        title: "Monitoria PAD na FT",
        keywords: ["pad","monitoria","bolsa pad","apoio didatico","prg","monitor voluntario"],
        subtopics: [
          {
            id: "pad-requisitos",
            title: "Requisitos e Atribuições",
            summary: "Requisitos de Ingresso Estar matriculado regularmente na Unicamp, ter sido aprovado na matéria com bom rendimento e obter o aval do professor responsável pela turma.",
          },
          {
            id: "pad-comparativo",
            title: "Remunerada versus Voluntária",
            summary: "Monitoria PAD na FT, foco em Remunerada versus Voluntária na Faculdade de Tecnologia da Unicamp.",
          },
          {
            id: "pad-cronograma",
            title: "Ciclo Semestral e Cronograma",
            summary: "Etapas do Ciclo Semestral e Cronograma da PRG 1 Manifestação de Interesse e Alinhamento Procure o professor da disciplina que você concluiu com nota destacada para manifestar interesse em atuar como monitor e confirmar a oferta de vagas com bolsa ou voluntárias no próximo semestre.",
          },
          {
            id: "pad-email",
            title: "Modelo de E-mail de Contato",
            summary: "Monitoria PAD na FT, foco em Modelo de E-mail de Contato na Faculdade de Tecnologia da Unicamp.",
          },
          {
            id: "mentoria-pmu",
            title: "PMU Mentoria e Apoio Ingressante",
            summary: "PMU: Programa de Mentoria da Unicamp e Apoio ao Ingressante Iniciativa da DEAPE que conecta veteranos bolsistas aos calouros para acolhimento e orientação acadêmica Criado institucionalmente pela Diretoria Executiva de Apoio e Permanência Estudantil, o PMU promove a adaptação e o sucesso dos ingressantes por meio da mentoria entre pares.",
          },
        ],
      },
      {
        id: "bolsas-permanencia-deape",
        title: "Bolsas Sociais e Permanência",
        subtopics: [
          {
            id: "bolsas-permanencia-deape",
            title: "BAS, Moradia e Isenção do RU",
            summary: "Bolsas Sociais e Permanência Estudantil da DEAPE Apoio financeiro, moradia e alimentação gratuita para estudantes de graduação com vulnerabilidade socioeconômica A Diretoria Executiva de Apoio e Permanência Estudantil, que sucedeu o antigo SAE, gerencia os programas de assistência estudantil da Unicamp.",
          },
        ],
      },
      {
        id: "horas-extensao",
        title: "Horas e Extensão",
        subtopics: [
          {
            id: "horas-conceitos",
            title: "Complementares versus Extensão",
            summary: "O Que São Atividades Complementares São atividades extracurriculares que enriquecem o repertório formativo individual do estudante ao longo do curso.",
          },
          {
            id: "horas-tabela",
            title: "Tabela Comparativa de Extensão",
            summary: "Quadro Comparativo: Atividades Complementares, Extensão e Disciplinas da Grade Critério de Avaliação Atividades Complementares Gerais SI920 Atividades Complementares de Extensão SI919 Extensão nas Obrigatórias da Grade Objetivo Central Enriquecimento formativo e profissional autônomo do estudante Ações extensionistas desenvolvidas pelo aluno junto à sociedade externa Formação técnica curricular com projetos integrados à comunidade Público Beneficiado O próprio estudante no ambiente acadêmico ou corporativo Comunidade externa, escolas públicas, ONGs e cidadãos Sociedade e setor produtivo conectados à disciplina Como Cumprir Cursos livres, congressos, monitoria PAD e iniciação científica Oficinas comunitárias, projetos da FT e iniciativas sociais Matrícula e aprovação nas disciplinas obrigatórias da FT com carga de extensão Prazo de Comprovação Envio de certificados no e-DAC até quinze dias antes da semana de estudos Envio de certificados com comprovação de impacto social externo Automático no histórico escolar após a aprovação na matéria Horas Complementares versus Horas de Extensão Diferenças conceituais, formas de comprovação e regulamentos oficiais em PDF dos catálogos de Sistemas de Informação.",
          },
          {
            id: "horas-regulamentos",
            title: "Regulamentos Oficiais em PDF",
            summary: "Regulamentos Oficiais de Sistemas de Informação em PDF PDF Oficial Regulamento SI918, Catálogo 2018 Tabela de pontuação e critérios de convalidação de horas complementares para estudantes ingressantes no catálogo 2018.",
          },
        ],
      },
      {
        id: "estrategia-carreira",
        title: "Estratégia e Estágio",
        subtopics: [
          {
            id: "estrategia-carreira",
            title: "Lei do Estágio e Formatura",
            summary: "Estratégia de Curso: Por Que Concluir a Graduação sem Estágio Pode Prejudicar Sua Carreira Entenda como a legislação de estágio e a dinâmica do mercado de tecnologia influenciam o momento ideal de formatura A Barreira das Vagas Júnior Vagas júnior costumam exigir um a dois anos de vivência corporativa prévia.",
          },
          {
            id: "procedimentos-estagio-ft",
            title: "Procedimentos de Estágio na FT",
            summary: "Procedimentos Oficiais de Estágio na FT Unicamp Passo a passo burocrático e prazos regulamentares via sistema da DEAPE para validação legal do termo de compromisso e relatórios semestrais Todo estágio realizado por estudantes da Faculdade de Tecnologia precisa obrigatoriamente ser formalizado antes do início efetivo das atividades laborais.",
          },
        ],
      },
      {
        id: "noturno-bsi",
        title: "Realidade do Noturno no BSI",
        subtopics: [
          {
            id: "noturno-bsi",
            title: "Lotação TADS e 4º Ano",
            summary: "Realidade do Noturno e Planejamento do Estágio no BSI Orientações da coordenação sobre a lotação das turmas de TADS, limites do CR e estruturação do estágio no quarto ano Lotação Integral das Turmas Noturnas de TADS As salas do curso noturno de TADS operam com capacidade física máxima preenchida exclusivamente pelos próprios alunos de TADS.",
          },
        ],
      },
      {
        id: "iniciacao-cientifica",
        title: "Iniciação Científica",
        subtopics: [
          {
            id: "ic-cronograma",
            title: "Linha do Tempo Anual",
            summary: "Meio do 2º Semestre a Março 1.",
          },
          {
            id: "ic-modalidades",
            title: "PIBIC, FAPESP e Voluntária",
            summary: "Modalidade Duração e Carga Compatibilidade com Estágio Requisitos e Benefícios PIBIC e PIBITI CNPq ou DEAPE Unicamp 12 meses, de setembro a agosto.",
          },
          {
            id: "ic-selecao",
            title: "Critérios de Avaliação e Linha de Corte",
            summary: "Composição da Nota no Edital PIBIC A Pró-Reitoria de Pesquisa avalia as propostas com base em três pilares ponderados: o mérito acadêmico do estudante calculado pelo Coeficiente de Rendimento, a qualidade e viabilidade do projeto de pesquisa de doze meses, e o currículo Lattes do docente orientador.",
          },
          {
            id: "ic-contato",
            title: "Mapeamento e Modelo de Contato",
            summary: "Você Não Precisa Ter Uma Ideia Pronta O maior receio dos calouros é achar que precisam propor um projeto inovador do zero.",
          },
        ],
      },
      {
        id: "intercambio-deri",
        title: "Intercâmbio e Editais DERI",
        subtopics: [
          {
            id: "intercambio-analise-editais",
            title: "Análise de Editais e Proficiência",
            summary: "Como Analisar os Editais da DERI: Cada Caso é Singular Não existe um regulamento universal para todas as universidades parceiras.",
          },
          {
            id: "intercambio-fluxo",
            title: "Fluxo em Seis Fases",
            summary: "Fluxo Passo a Passo para Realizar Intercâmbio na Unicamp O planejamento exige antecedência mínima de um a dois anos antes do embarque.",
          },
          {
            id: "intercambio-diferenciais",
            title: "Diferenciais para Aprovação",
            summary: "Diferenciais Competitivos para Conquistar a Vaga e Bolsas Pequenos detalhes no histórico e na trajetória acadêmica separam os classificados dos suplentes nos editais concorridos: CR Elevado desde o Primeiro Ano Como o CR lidera a fórmula de classificação da DERI, médias acima de sete vírgula cinco garantem grande vantagem para vagas em universidades disputadas e bolsas de auxílio financeiro.",
          },
          {
            id: "intercambio-potsdam",
            title: "Estudo de Caso Edital Potsdam",
            summary: "Estudo de Caso Oficial: Edital DERI 85 de 2026 e Universidade de Potsdam Alemanha Isenção de Mensalidades Nível B2 Para exemplificar o funcionamento real dos processos seletivos da Unicamp, analisamos o Edital DERI número 85 de 2026 e o Factsheet UP 2026 e 2027 referentes ao acordo de cooperação acadêmica com a Universität Potsdam, localizada no estado de Brandemburgo, na Alemanha, vizinha a Berlim: Isenção Integral de Taxas Acadêmicas O acordo bilateral assegura gratuidade completa de mensalidades escolares na Universität Potsdam.",
          },
          {
            id: "intercambio-bolsas",
            title: "Modalidades de Bolsas",
            summary: "Modalidades de Bolsas e Auxílios Financeiros de Intercâmbio Mesmo em conjunturas com menor disponibilidade de recursos internos, a DERI oferece canais com bolsas de manutenção e benefícios expressivos: Bolsas Santander de Mobilidade Internacional Editais anuais concorridos promovidos em parceria com o Santander Universidades, como o Santander Graduação e Top Espanha.",
          },
        ],
      },
    ],
  },
  {
    id: "calouros",
    category: "academico",
    label: "Calouros",
    href: "/calouros",
    page: "Calouros",
    basePath: "/calouros",
    topics: [
      {
        id: "acabei-de-passar",
        title: "Acabei de Passar: Primeiros Passos",
        subtopics: [
          {
            id: "acabei-de-passar",
            title: "Matrícula Virtual e Confirmação",
            summary: "Acabei de Passar: Primeiros Passos Ações obrigatórias para garantir sua vaga e ativar suas credenciais acadêmicas.",
            keywords: ["aprovado","primeiros passos","matricula","ra","dga","dac","boas vindas"],
          },
          {
            id: "obter-ra-carteirinha",
            title: "Registro Acadêmico e Carteirinha",
            summary: "Matrícula Virtual DAC Acesse o portal da Diretoria Acadêmica no prazo do edital para envio da documentação digital e confirmação expressa de interesse na vaga.",
          },
          {
            id: "senhas-email-dac",
            title: "Senhas e E-mail Institucional",
            summary: "Senhas e E-mail Institucional Crie sua senha central no e-DAC para desbloquear sua conta institucional com domínio dac.",
          },
        ],
      },
      {
        id: "unicamp-limeira-ft",
        title: "Unicamp Limeira: FT versus FCA",
        subtopics: [
          {
            id: "unicamp-limeira-ft",
            title: "Localização do Campus 1 FT",
            summary: "Unicamp Limeira: Faculdade de Tecnologia versus FCA A Unicamp possui duas faculdades em Limeira com endereços e cursos completamente distintos.",
            keywords: ["campus 1","fca","campus 2","localizacao","diferenca","jardim morro azul"],
          },
          {
            id: "diferenca-ft-fca",
            title: "Diferenças Cruciais entre FT e FCA",
            summary: "Campus 1 Faculdade de Tecnologia FT Rua Paschoal Marmo, 1888, Jardim Nova Itália.",
          },
        ],
      },
      {
        id: "moradia-calouros",
        title: "Onde Morar: Bairros e Imobiliárias",
        subtopics: [
          {
            id: "moradia-calouros",
            title: "Bairros Próximos e Lado FT",
            summary: "Onde Morar em Limeira: Bairros, Ruas e Imobiliárias Guia estratégico para calouros escolherem moradia perto da FT, principais avenidas e imobiliárias locais Recomendado FT Bairros Lado FT Vila Cristovam, Jardim Nova Itália, Vila Anita e Morro Azul ficam no entorno imediato da faculdade.",
          },
          {
            id: "principais-ruas-limeira",
            title: "Avenidas Cônego e Fabrício",
            summary: "Avenida Cônego Manuel Alves Principal artéria de ligação entre a FT e a região central de Limeira.",
          },
          {
            id: "imobiliarias-e-contratos",
            title: "Imobiliárias e Aluguel",
            summary: "Principais Imobiliárias de Limeira para Estudantes Imobiliárias mais utilizadas por universitários da FT para locação de apartamentos, casas e kitnets Imobiliária Roque Uma das mais tradicionais de Limeira, com forte catálogo de casas e apartamentos na Vila Cristovam, Nova Itália e Centro.",
          },
        ],
      },
      {
        id: "calourada-recepcao",
        title: "Calourada e Trote Solidário",
        subtopics: [
          {
            id: "calourada-recepcao",
            title: "Recepção e Integração Estudantil",
            summary: "Calourada, Recepção e Trote Solidário Semana de acolhimento estudantil, regras regimentais e cultura solidária na Unicamp.",
            keywords: ["trote","integracao","kit bixo","veteranos","recepcao","calourada"],
          },
          {
            id: "trote-solidario-regras",
            title: "Trote Solidário e Proibições",
            summary: "Semana de Recepção A faculdade e as entidades preparam encontros com coordenadores, visitas guiadas aos laboratórios e gincanas para apresentação dos cursos e integração com os veteranos.",
          },
        ],
      },
      {
        id: "salas-aulas-ft",
        title: "Aulas e Espaços Físicos na FT",
        subtopics: [
          {
            id: "salas-aulas-ft",
            title: "PAs, SAs e LPs da Faculdade",
            summary: "Onde e Como Funcionam as Aulas na FT Entenda a nomenclatura dos espaços físicos: anfiteatros PA, salas menores SA e laboratórios LP.",
            keywords: ["salas de aula","bloco pa","bloco pb","laboratorios","tic","intranet ft"],
          },
          {
            id: "laboratorios-tic",
            title: "Laboratórios de Programação",
            summary: "PAs Prédios Anfiteatros Espaços maiores em formato de auditório, identificados de PA01 em diante.",
          },
          {
            id: "consulta-salas-online",
            title: "Consulta de Salas em Tempo Real",
            summary: "Online Consulta de Salas em Tempo Real A FT mantém um sistema web na intranet onde você pesquisa o código da sua matéria ou horário e vê exatamente em qual PA, SA ou LP sua aula foi alocada no dia.",
          },
        ],
      },
      {
        id: "ambientes-estudo",
        title: "Moodle, Classroom e Agenda",
        subtopics: [
          {
            id: "ambientes-estudo",
            title: "Moodle para Conteúdo das Aulas",
            summary: "Onde Ficam os Conteúdos: Moodle e Google Classroom Plataformas digitais oficiais onde professores publicam slides, listas, prazos e notas.",
            keywords: ["moodle","google classroom","ead","atividades","materiais","disciplinas"],
          },
          {
            id: "classroom-google-dac",
            title: "Google Classroom e e-DAC",
            summary: "Moodle Unicamp Ambiente virtual padrão da universidade.",
          },
          {
            id: "automacao-google-calendar",
            title: "Automação para o Google Calendar",
            summary: "Automação: Plano de Ensino e Avaliações no Google Calendar Converta o cronograma avaliativo em PDF da disciplina em eventos de agenda com alarmes vinte e quatro horas antes Na primeira semana letiva, cada professor disponibiliza no Moodle o Plano de Desenvolvimento da Disciplina, também chamado de Plano de Ensino ou Syllabus.",
          },
        ],
      },
      {
        id: "bandejao-recarga",
        title: "Restaurante Universitário e Saldo",
        subtopics: [
          {
            id: "bandejao-recarga",
            title: "Funcionamento do RU na FT",
            summary: "Restaurante Universitário e Recarga do Saldo Alimentação subsidiada de qualidade com recarga instantânea de saldo via Pix.",
            keywords: ["restaurante universitario","ru","funcamp","pix","saldo","refeicoes"],
          },
          {
            id: "compra-recarga-creditos",
            title: "Como Recarregar via Pix",
            summary: "Estrutura do RU na FT O Restaurante Universitário do Campus 1 oferece almoço e jantar completos com prato principal, guarnição, opção vegetariana, saladas, suco e sobremesa em todos os dias letivos.",
          },
          {
            id: "catracas-app-servicos",
            title: "Acesso às Catracas com App",
            summary: "Recarga por Pix ou Dinheiro A recarga de créditos é feita gerando a chave Pix diretamente pelo aplicativo de carteirinha com inserção rápida de saldo, ou presencialmente em dinheiro no caixa do restaurante.",
          },
        ],
      },
      {
        id: "transporte-circular",
        title: "Transporte e Linhas Circulares",
        subtopics: [
          {
            id: "transporte-circular",
            title: "Circular Gratuito FT e FCA",
            summary: "Transporte e Linhas Circulares Circular gratuito FT e FCA, fretado intercampi Linha 84 e ônibus urbano municipal.",
            keywords: ["circular gratuito","linha 84","intercampi","sou limeira","onibus"],
          },
          {
            id: "fretado-linha-84",
            title: "Fretado Linha 84 para Campinas",
            summary: "Circular Gratuito FT e FCA A prefeitura universitária mantém ônibus circular gratuito conectando o Campus 1 no Jardim Nova Itália ao Campus 2 na FCA em múltiplos horários diários durante o período letivo.",
          },
          {
            id: "onibus-municipal-limeira",
            title: "Ônibus Urbano e Passe Escolar",
            summary: "Ônibus Urbano SOU Limeira O transporte coletivo da cidade possui linhas frequentes ligando a Rodoviária de Limeira e os bairros residenciais aos portões da FT, com direito a passe escolar com meia tarifa.",
          },
        ],
      },
      {
        id: "apoio-monitorias-pmu",
        title: "Monitorias PAD e Mentoria PMU",
        subtopics: [
          {
            id: "apoio-monitorias-pmu",
            title: "Plantões de Dúvidas PAD e PED",
            summary: "Monitorias PAD e Mentoria PMU Apoio pedagógico com veteranos de turmas anteriores e mentoria individual para ingressantes Atenção Calouro: Programação 1 Tranca a Grade Curricular Assim como Cálculo 1 é o gargalo clássico nas engenharias, Programação 1 desempenha esse papel na computação da FT.",
            keywords: ["monitoria","pad","ped","pmu","mentoria","reforco","deape"],
          },
          {
            id: "mentoria-pmu-ingressantes",
            title: "Mentoria PMU da DEAPE",
            summary: "Plantões de Dúvidas PAD O Programa de Apoio Didático conta com alunos de semestres adiantados que oferecem plantões presenciais e virtuais para resolver listas de exercícios e tirar dúvidas teóricas.",
          },
          {
            id: "como-ser-monitor",
            title: "Como Ser Monitor no Futuro",
            summary: "Plantões de Pós-Graduação PED Monitores mestrandos e doutorandos colaboram com os docentes nas aulas de laboratório e oferecem reforço avançado nas disciplinas fundamentais de exatas e computação.",
          },
        ],
      },
      {
        id: "bolsas-sociais-deape",
        title: "Bolsas Sociais e Permanência",
        subtopics: [
          {
            id: "bolsas-sociais-deape",
            title: "Bolsa Auxílio-Social BAS",
            summary: "Bolsas Sociais e Permanência Estudantil da DEAPE Apoio financeiro, moradia e alimentação gratuita para estudantes com vulnerabilidade socioeconômica.",
            keywords: ["bas","auxilio social","moradia","deape","isencao ru","baef"],
          },
          {
            id: "moradia-alimentacao-gratis",
            title: "Moradia e Refeições Gratuitas",
            summary: "Bolsa Auxílio-Social BAS Concede benefício financeiro mensal para estudantes que atendem aos critérios socioeconômicos, com dedicação de dez a quinze horas semanais em projetos da faculdade.",
          },
          {
            id: "inscricao-sig-deape",
            title: "Inscrição no Sistema SIG-DEAPE",
            summary: "Inscrição no Sistema SIG-DEAPE Ingressantes contam com edital próprio aberto no primeiro semestre.",
          },
        ],
      },
      {
        id: "organizacoes-e-ic",
        title: "Organizações Estudantis e IC",
        subtopics: [
          {
            id: "organizacoes-e-ic",
            title: "Feira de Entidades e Inscrições",
            summary: "Organizações Estudantis e Iniciação Científica Desenvolvimento profissional em empresas juniores, ligas acadêmicas e pesquisa científica.",
            keywords: ["entidades","ligas","atria jr","lics","semeia code","enactus","cvu","pibic","pesquisa"],
          },
          {
            id: "iniciacao-cientifica-calouro",
            title: "Iniciação Científica PIBIC",
            summary: "Feira de Entidades Nas primeiras semanas de aula, as organizações estudantis montam estandes na faculdade para apresentar projetos e abrir inscrições para novos membros.",
          },
        ],
      },
      {
        id: "beneficios-tecnologia",
        title: "Benefícios Digitais e Ferramentas",
        subtopics: [
          {
            id: "beneficios-tecnologia",
            title: "AWS Builder Center para Alunos",
            summary: "Benefícios Digitais e Ferramentas Gratuitas Vantagens exclusivas desbloqueadas imediatamente com o seu e-mail institucional.",
            keywords: ["aws","builder center","cloud","skill builder","certificacao","creditos","github pack"],
          },
          {
            id: "github-pack-google",
            title: "GitHub Pack e Google Workspace",
            summary: "AWS Builder Center para Alunos Cadastro gratuito na comunidade AWS sem necessidade de cartão.",
          },
        ],
      },
    ],
  },
  {
    id: "campus",
    category: "campus",
    label: "Campus",
    href: "/campus",
    page: "Campus",
    basePath: "/campus",
    topics: [
      {
        id: "campus-galeria",
        title: "Galeria do Campus",
        subtopics: [
          {
            id: "campus-galeria",
            title: "Biblioteca e Auditório",
            summary: "Estudo e Pesquisa Biblioteca Setorial da FT Acervo especializado de tecnologia, cabines individuais silenciosas para estudo e salas de reunião para trabalhos acadêmicos em grupo.",
          },
        ],
      },
      {
        id: "biblioteca-sbu-ft",
        title: "Biblioteca FT e SBU",
        subtopics: [
          {
            id: "biblioteca-sbu-ft",
            title: "Apresentação e Acervo",
            summary: "Biblioteca Setorial da FT e Sistema SBU Unicamp Biblioteca Prof.",
          },
          {
            id: "biblioteca-emprestimo-malote",
            title: "Empréstimo e Malote Intercampi",
            summary: "Circulação e Malote Empréstimo Unificado e Malote Intercampi Com seu RA e senha de biblioteca cadastrados no primeiro acesso, você retira livros físicos em qualquer uma das 29 bibliotecas da Unicamp.",
          },
          {
            id: "biblioteca-estudo-espacos",
            title: "Salas de Estudo e Cabines",
            summary: "Ambientes Espaços de Estudo Individual e Coletivo A unidade oferece cabines individuais silenciosas para concentração, mesas amplas com tomadas acessíveis para notebooks, salas fechadas para reuniões e elaboração de trabalhos acadêmicos em grupo, além de computadores integrados à rede universitária para pesquisa de acervo e consultas rápidas.",
          },
          {
            id: "biblioteca-bases-tcc",
            title: "Bases Digitais e Ficha TCC",
            summary: "Pesquisa e TCC Bases Digitais, VPN e Ficha Catalográfica Acesso aos periódicos da Capes, IEEE Xplore, ScienceDirect e e-books especializados no campus ou remotamente via VPN do CCUEC.",
          },
          {
            id: "biblioteca-redes-contato",
            title: "Instagram Oficial e Canais",
            summary: "Comunicação Canal Oficial no Instagram e Atendimento O perfil oficial @bibliotecaftctl é o canal mais ágil para acompanhar avisos de horários especiais em períodos de provas ou recessos acadêmicos, chegada de novos títulos para computação e engenharias, ofertas de treinamentos para levantamento bibliográfico e programações culturais do campus.",
          },
        ],
      },
      {
        id: "ferramentas-ti",
        title: "Ferramentas de TI e Acessos",
        subtopics: [
          {
            id: "ferramentas-ti",
            title: "Laboratórios da TIC",
            summary: "Ferramentas de Tecnologia da Informação da FT Credenciais de acesso para computadores, laboratórios da TIC e serviços digitais da Unicamp Acesso aos Laboratórios da TIC Login nos computadores físicos com usuário do RA e senha cadastrada na coordenadoria de TIC, distinta da senha central da DAC.",
            keywords: ["dtic","laboratorios","computadores","senhas","rede","informatica"],
          },
          {
            id: "cota-impressao",
            title: "Cota de Impressão e WifiPrint",
            summary: "Laboratórios de Ensino, Cota de Impressão e WifiPrint Como imprimir documentos pelo celular ou notebook, locais das impressoras e cota mensal da DTIC Requer Rede Wi-Fi da FT Como Funciona o WifiPrint Serviço de envio de arquivos para impressão diretamente do seu aparelho conectado à rede local.",
            keywords: ["impressao","wifiprint","dtic","cotas","paginas","scanner","laboratorio"],
          },
        ],
      },
      {
        id: "infraestrutura-salas",
        title: "Infraestrutura e Salas",
        subtopics: [
          {
            id: "infraestrutura-salas",
            title: "Consulta de Ocupação",
            summary: "Infraestrutura Física e Alocação de Salas na FT Como consultar horários vagos, regras de ocupação e procedimentos para solicitar espaços Consulta em Tempo Real Quadro de ocupação de salas e anfiteatros disponível em tempo real.",
          },
          {
            id: "justificativas-salas",
            title: "Justificativas de Espaço",
            summary: "Como Justificar uma Sala Maior para Poucas Pessoas perante a Administração Pedidos com foco apenas em número de presentes costumam ser alocados em salas menores.",
          },
        ],
      },
      {
        id: "transporte-alimentacao",
        title: "Alimentação e Transporte",
        subtopics: [
          {
            id: "transporte-alimentacao",
            title: "Restaurante Universitário",
            summary: "Alimentação e Transporte Universitário em Limeira Diretrizes sobre alimentação universitária, transporte circular gratuito e fretado intercampi Restaurante Universitário na FT Almoço e jantar nos dias úteis na FT.",
            keywords: ["bandejao","ru","cardapio","refeicoes","almoco","jantar","creditos","carteirinha"],
          },
          {
            id: "circular-fretado",
            title: "Circular FT e FCA e Intercampi",
            summary: "Circular Gratuito FT e FCA Transporte gratuito contínuo entre os campi de Limeira mantido pela Prefeitura Universitária.",
            keywords: ["circular","fretado","intercampi","linha 84","barao geraldo","onibus","reserva"],
          },
        ],
      },
      {
        id: "entidades-estudantis",
        title: "Organizações Estudantis",
        subtopics: [
          {
            id: "org-empresa-junior",
            title: "Empresa Júnior",
            summary: "Diretório de Entidades e Organizações Estudantis Conheça as empresas juniores, centro acadêmico, atlética, ligas e projetos de extensão.",
          },
          {
            id: "org-ligas",
            title: "Ligas Acadêmicas",
            summary: "Diretório de Entidades e Organizações Estudantis Conheça as empresas juniores, centro acadêmico, atlética, ligas e projetos de extensão.",
          },
          {
            id: "org-extensao",
            title: "Extensão e Ação Social",
            summary: "Diretório de Entidades e Organizações Estudantis Conheça as empresas juniores, centro acadêmico, atlética, ligas e projetos de extensão.",
          },
          {
            id: "org-centro-academico",
            title: "Centro Acadêmico",
            summary: "Diretório de Entidades e Organizações Estudantis Conheça as empresas juniores, centro acadêmico, atlética, ligas e projetos de extensão.",
          },
          {
            id: "org-atletica",
            title: "Atlética e Esportes",
            summary: "Diretório de Entidades e Organizações Estudantis Conheça as empresas juniores, centro acadêmico, atlética, ligas e projetos de extensão.",
          },
          {
            id: "org-republica",
            title: "Repúblicas e Moradia",
            summary: "Diretório de Entidades e Organizações Estudantis Conheça as empresas juniores, centro acadêmico, atlética, ligas e projetos de extensão.",
          },
        ],
      },
      {
        id: "vida-festas",
        title: "Vida Noturna e Festas",
        subtopics: [
          {
            id: "vida-festas",
            title: "Rolê Limeira e Locais",
            summary: "Vida Noturna, Integração e Festas Universitárias Calendário tradicional, principais casas de eventos e orientações para curtir com segurança em Limeira Canal Oficial Perfil Rolimeira Principal canal de cobertura, avisos de lotes e divulgação das festas e calouradas dos campi de Limeira.",
          },
        ],
      },
      {
        id: "moradia-convivencia",
        title: "Moradia e Habitação",
        subtopics: [
          {
            id: "moradia-mapa",
            title: "Mapa da Região Universitária",
            summary: "Moradia e Habitação, foco em Mapa da Região Universitária na Faculdade de Tecnologia da Unicamp.",
          },
          {
            id: "moradia-modalidades",
            title: "Modalidades e Preços",
            summary: "Modalidades de Moradia Estudantil e Faixas de Preço Comparativo completo entre república, pensionato, kitnet individual e apartamento compartilhado em Limeira República Estudantil República Tradicional R 450 a R 750 por mês com contas inclusas Localização Típica Jardim Nova Itália, Vila Cristovam, Jardim Morro Azul e proximidades do Morar Mais.",
          },
          {
            id: "moradia-predios",
            title: "Prédios e Condomínios",
            summary: "Prédios e Condomínios Mapeados em Limeira Principais edifícios habitados por estudantes universitários com análise de logística e bandeco Condomínio Clube Condomínio Morar Mais Limeira Próximo ao anel viário e rodovia Condomínio fechado com apartamentos de dois e três dormitórios, buscado por grupos que dividem aluguel entre duas a quatro pessoas.",
          },
          {
            id: "moradia-bairros",
            title: "Bairros e Avenidas",
            summary: "Avenidas de Convivência e Bairros Universitários As duas principais artérias da vida estudantil e a divisão estratégica entre o Lado FT e o Lado FCA Avenida Cônego Manuel Alves Principal eixo comercial e gastronômico que atende os estudantes da FT no trajeto até o centro.",
          },
          {
            id: "moradia-imobiliarias",
            title: "Imobiliárias e Contratos",
            summary: "Imobiliárias Locais e Orientações para Locação Canais oficiais das imobiliárias mais procuradas por estudantes e recomendações para assinar contrato sem dor de cabeça Imobiliária Roque Uma das mais tradicionais de Limeira, com ampla oferta de casas e apartamentos na Vila Cristovam, Jardim Nova Itália e Centro.",
          },
        ],
      },
    ],
  },
  {
    id: "carreira",
    category: "carreira",
    label: "Carreira",
    href: "/carreira",
    page: "Carreira",
    basePath: "/carreira",
    topics: [
      {
        id: "sazonalidade-estagio",
        title: "Sazonalidade e Feiras",
        subtopics: [
          {
            id: "sazonalidade-estagio",
            title: "Janela de Contratação",
            summary: "Sazonalidade de Contratações e Feiras de Carreiras O calendário anual das principais empresas de tecnologia e instituições financeiras Agosto a Outubro Janela Principal de Contratação Período em que ocorrem as maiores feiras de estágio da Unicamp e os eventos da Liestag em Limeira.",
          },
          {
            id: "feiras-recrutamento-agosto",
            title: "Feiras de Carreiras em Agosto",
            summary: "Principais Feiras de Carreiras e Recrutamento em Agosto Participe dos maiores eventos de conexões corporativas, entregue currículos e converse diretamente com gestores e recrutadores Limeira FT e FCA Feira Unicamp Limeira Feira de tecnologia e carreiras dos campi de Limeira realizada no mês de agosto.",
          },
          {
            id: "programas-estagio-frequencia",
            title: "Programas de Estágio Estruturados",
            summary: "Onde e Quando Procurar: Principais Programas de Estágio Estruturados Conheça a periodicidade dos processos seletivos para planejar suas inscrições com antecedência e não perder as janelas de abertura 2 Vezes por Ano Programa de Estágio Agibank O Agi abre turmas semestrais, tipicamente com seleções ocorrendo no começo do ano e no meio do ano, para posições em tecnologia, engenharia de software, produtos digitais e operações.",
          },
          {
            id: "requisito-legal",
            title: "Elegibilidade Institucional",
            summary: "Requisito Legal Modalidades e Elegibilidade Para estágios não obrigatórios remunerados, o estudante pode iniciar a partir do terceiro semestre com tramitação prévia via sistema da DEAPE e limite de trinta horas semanais.",
          },
        ],
      },
      {
        id: "trainee-vs-estagio",
        title: "Estágio ou Trainee e Júnior",
        keywords: ["trainee","estagio","clt","junior","salario executivo","processo seletivo trainee"],
        subtopics: [
          {
            id: "comparativo-estagio-trainee-junior",
            title: "Matriz Comparativa das Modalidades",
            summary: "Matriz Comparativa das Modalidades de Contratação Parâmetros regulatórios, remuneração média e níveis de exigência em cada trilha Critério Estágio de Graduação Programa de Trainee Efetivo Júnior CLT Comparativo: Estágio ou Trainee ou Efetivo Júnior Diferenciação de momentos na graduação, regimes de trabalho, faixas de remuneração e objetivos de carreira Planejar os passos finais da graduação na FT exige compreender as distinções entre as portas de entrada no mercado corporativo de tecnologia.",
            keywords: ["comparativo estagio trainee","diferenca estagio clt","salario trainee","remuneracao","carga horaria"],
          },
          {
            id: "processos-seletivos-trainee",
            title: "Processos Seletivos e Liderança",
            summary: "Estrutura dos Processos Seletivos de Trainee e Foco em Liderança Etapas eliminatórias, dinâmicas de grupo, resolução de casos de negócio e painéis executivos Fase 1: Triagem e Testes Fit Cultural e Raciocínio Lógico Avaliações online de alinhamento de valores com a companhia, lógica matemática, interpretação estruturada de dados e proficiência em inglês.",
            keywords: ["processo seletivo trainee","dinamica de grupo","business case","painel executivo","fit cultural"],
          },
        ],
      },
      {
        id: "testes-tecnicos",
        title: "Testes Técnicos e Maratona",
        subtopics: [
          {
            id: "testes-tecnicos",
            title: "Estruturas de Dados e Lógica",
            summary: "O Que é Avaliado nos Testes Técnicos de Entrada Padrões de questões e exercícios práticos exigidos nas primeiras fases de seleção Estruturas de Dados Fundamentais Domínio de tabelas hash e mapas chave-valor para buscas em tempo constante, além de manipulação limpa de matrizes, listas encadeadas e pilhas.",
          },
          {
            id: "maratona-programacao",
            title: "Maratona de Programação e ICPC",
            summary: "Maratona de Programação e Preparação ICPC SBC Treinamento algorítmico intensivo, raciocínio sob pressão e aceleração para entrevistas de Big Tech Site Oficial SBC Regras e Dinâmica da Prova Times de três alunos com um computador individual compartilhado por cinco horas ininterruptas.",
            keywords: ["maratona","icpc","sbc","beecrowd","codeforces","leetcode","programacao competitiva","algoritmos","estruturas de dados"],
          },
        ],
      },
      {
        id: "hackathons-bootcamps",
        title: "Hackathons e Apple Developer Academy",
        keywords: ["hackathon","maratona de programacao","bootcamp","apple developer academy","squads"],
        subtopics: [
          {
            id: "guia-hackathons-squads",
            title: "Guia de Hackathons e Squads",
            summary: "Hackathons Universitários, Bootcamps e Apple Developer Academy Maratonas de desenvolvimento de fim de semana, squads multidisciplinares e capacitação avançada em ecossistema Apple Hackathons e programas imersivos são os aceleradores mais rápidos de aprendizado prático e portfólio para estudantes de computação da FT.",
            keywords: ["guia hackathon","como montar squad","equipe multidisciplinar","pitch","prototipo"],
          },
          {
            id: "hackathon-itau-agentes",
            title: "Hackathon Itaú Batalha de Agentes",
            summary: "Maratona em Destaque Página Oficial do Evento Hackathons Universitários, Bootcamps e Apple Developer Academy Maratonas de desenvolvimento de fim de semana, squads multidisciplinares e capacitação avançada em ecossistema Apple Hackathons e programas imersivos são os aceleradores mais rápidos de aprendizado prático e portfólio para estudantes de computação da FT.",
            keywords: ["hackathon itau","batalha de agentes","inteligencia artificial","agentes autonomos","itau tecnologia"],
          },
          {
            id: "apple-developer-academy",
            title: "Apple Developer Academy Campinas",
            summary: "Residência Tecnológica Internacional Apple Developer Academy em Campinas Parceria e • Site Oficial Instagram Benefícios e Suporte ao Aluno: Competências Desenvolvidas: Hackathons Universitários, Bootcamps e Apple Developer Academy Maratonas de desenvolvimento de fim de semana, squads multidisciplinares e capacitação avançada em ecossistema Apple Hackathons e programas imersivos são os aceleradores mais rápidos de aprendizado prático e portfólio para estudantes de computação da FT.",
            keywords: ["apple developer academy","instituto eldorado","campinas","swift","swiftui","ios","macbook"],
          },
        ],
      },
      {
        id: "curriculo-latex",
        title: "Currículo em LaTeX",
        subtopics: [
          {
            id: "curriculo-latex",
            title: "Template ATS de Página Única",
            summary: "Modelo de Currículo em LaTeX: Formato devcelio resume template Currículo de página única compatível com leitores automáticos de triagem ATS, estruturado com macros modulares e educação no topo para estudantes.",
            keywords: ["curriculo","latex","devcelio","ats","overleaf","cv","modelo"],
          },
        ],
      },
      {
        id: "entrevistas-pitch",
        title: "Entrevistas e Pitch",
        subtopics: [
          {
            id: "entrevistas-pitch",
            title: "Vídeo e Estrutura de Pitch",
            summary: "Vídeo de Apresentação e Entrevistas de Estágio Como estruturar seu pitch pessoal e dominar as sete perguntas fundamentais de processos seletivos Assistir Vídeo no YouTube Estrutura do Pitch Pessoal de Entrada 1.",
          },
          {
            id: "perguntas-entrevistas",
            title: "As Sete Perguntas Centrais",
            summary: "As 7 Principais Perguntas em Entrevistas Fale sobre você: Conte sua história em ordem cronológica resumida, ligando suas escolhas até a Unicamp.",
          },
        ],
      },
      {
        id: "portfolio-github",
        title: "Presença Profissional",
        subtopics: [
          {
            id: "portfolio-github",
            title: "LinkedIn e Portfólio GitHub",
            summary: "Construção de Presença Profissional: LinkedIn e GitHub Como apresentar sua trajetória técnica de forma objetiva sem clichês vazios Diretrizes para o LinkedIn Utilize título objetivo focado em tecnologias praticadas, por exemplo: Graduando em Sistemas de Informação na Unicamp, foco em Java, Spring Boot e React.",
          },
          {
            id: "videos-cv-linkedin",
            title: "Vídeos de LinkedIn e CV",
            summary: "LinkedIn que Contrata Augusto Galego: Como Fazer um LinkedIn que Contrata Orientações objetivas sobre posicionamento de perfil, palavras-chave para recrutadores de tecnologia e como expor projetos acadêmicos com relevância.",
          },
        ],
      },
      {
        id: "empresas-mercado",
        title: "Empresas e Modelos de Trabalho",
        subtopics: [
          {
            id: "empresas-remotas-tech",
            title: "Empresas Tech e Trabalho Remoto",
            summary: "Empresas de Tecnologia e Trabalho Remoto Companhias com cultura de trabalho distribuído, processos estruturados e forte tradição de absorção de talentos da Unicamp CI&T Remoto Grande parceira da comunidade acadêmica da Unicamp com seu programa de estágio Next Gen totalmente remoto.",
          },
          {
            id: "empresas-financeiras",
            title: "Bancos e Fintechs",
            summary: "Instituições Financeiras e Fintechs Bancos e operadoras financeiras com alta remuneração, desafios de escala crítica e diferentes regimes de presença Itaú Unibanco Híbrido Atuação em formato híbrido com polos em São Paulo e cidades próximas.",
          },
          {
            id: "empresas-industrias",
            title: "Polo Industrial e Consultorias",
            summary: "Polo Industrial Regional, Consultorias e Startups Oportunidades em multinacionais automotivas de Limeira e cidades vizinhas, fábricas de software e ecossistemas empreendedores Hyundai Motor Brasil Piracicaba Grande planta fabril automobilística situada em Piracicaba, próxima de Limeira.",
          },
        ],
      },
      {
        id: "empresas-tech-programas",
        title: "Vitrine Tech e Mercado ou Pesquisa",
        keywords: ["empresas tech","tractian","itau","stone","qi tech","agibank","mercado versus pesquisa"],
        subtopics: [
          {
            id: "vitrine-empresas-tech",
            title: "Vitrine de Empresas Líderes",
            summary: "Vitrine de Empresas Líderes em Tecnologia e Seus Programas Cultura, trilhas de formação, critérios seletivos e canais oficiais de recrutamento Vitrine de Empresas Tech e Carreira Corporativa ou Pesquisa Perfis de contratação de referências do setor e análise comparativa entre emprego corporativo e carreira acadêmica Para além dos modelos gerais de contratação, entender as exigências específicas de empresas que lideram a transformação tecnológica no país permite direcionar seus estudos, projetos de portfólio e decisões de carreira com segurança.",
            keywords: ["tractian","itau tecnologia","recruta stone","qi tech","agibank","programas estagio tecnologia"],
          },
          {
            id: "mercado-vs-pesquisa",
            title: "Mercado ou Pesquisa Acadêmica",
            summary: "Matriz Decisória: Carreira no Mercado Corporativo ou Pesquisa Acadêmica Quadro analítico para apoiar a reflexão entre emprego corporativo e pós-graduação estrita Dimensão Analisada Carreira no Mercado Corporativo Carreira em Pesquisa e Academia Vitrine de Empresas Tech e Carreira Corporativa ou Pesquisa Perfis de contratação de referências do setor e análise comparativa entre emprego corporativo e carreira acadêmica Para além dos modelos gerais de contratação, entender as exigências específicas de empresas que lideram a transformação tecnológica no país permite direcionar seus estudos, projetos de portfólio e decisões de carreira com segurança.",
            keywords: ["mercado corporativo versus pesquisa","pesquisa cientifica","carreira mercado ou mestrado","fapesp versus clt"],
          },
        ],
      },
      {
        id: "empreendedorismo-inova-desafio",
        title: "Inovação e Empreendedorismo",
        subtopics: [
          {
            id: "inova-unicamp-hub",
            title: "Agência de Inovação Inova",
            summary: "Inovação Agência de Inovação Inova Unicamp Responsável por gerir as patentes e marcas registradas da universidade, além de conectar pesquisadores ao setor produtivo.",
          },
          {
            id: "desafio-unicamp-edicao",
            title: "Competição Desafio Unicamp",
            summary: "Competição Competição Desafio Unicamp Competição anual de modelagem de negócios baseada em tecnologias reais patenteadas pela Unicamp.",
          },
          {
            id: "empresas-filhas-unicamp",
            title: "Ecossistema de Empresas Filhas",
            summary: "Ecossistema Rede de Empresas Filhas da Unicamp Comunidade formada por startups e multinacionais fundadas por alunos, ex-alunos e docentes da universidade, incluindo casos notáveis como CI e T, Movile, iFood e QuintoAndar.",
          },
          {
            id: "si800-disciplina",
            title: "Conexão Curricular SI800",
            summary: "Currículo FT Conexão Curricular com a Disciplina SI800 A disciplina SI800, intitulada Empreendedorismo e Inovação, integra a grade curricular dos cursos de computação da FT.",
          },
        ],
      },
      {
        id: "idiomas-confucio-cel",
        title: "Idiomas Estrangeiros",
        subtopics: [
          {
            id: "instituto-confucio-mandarim",
            title: "Instituto Confúcio e Mandarim",
            summary: "Mandarim Instituto Confúcio na Unicamp: Mandarim Fruto de convênio oficial com o Ministério da Educação da China e a Universidade Jiaotong de Pequim.",
          },
          {
            id: "cel-idiomas-gratuitos",
            title: "Centro de Ensino de Línguas CEL",
            summary: "Gratuito Centro de Ensino de Línguas CEL Unicamp O CEL oferece disciplinas regulares totalmente gratuitas de Alemão, Espanhol, Francês, Hebraico, Inglês, Italiano, Japonês, Russo e Português Língua Adicional.",
          },
          {
            id: "hsk-bolsas-china",
            title: "Exames HSK e Bolsas Internacionais",
            summary: "Bolsas e HSK Certificação HSK e Bolsas de Estudo na China O Instituto Confúcio é centro aplicador oficial dos testes de proficiência HSK e HSKK.",
          },
        ],
      },
      {
        id: "computacao-nuvem",
        title: "Computação em Nuvem",
        subtopics: [
          {
            id: "computacao-nuvem",
            title: "Vouchers e Créditos Estudantis",
            summary: "Computação em Nuvem na Graduação e Vouchers Gratuitos Aproveite os convênios universitários para estudar tecnologias de nuvem sem custo Créditos Gratuitos com E-mail DAC Seu e-mail institucional dá acesso gratuito a AWS Educate e Google Cloud Innovators para executar laboratórios em nuvem sem exigir cartão de crédito.",
          },
        ],
      },
      {
        id: "projetos-portfolio",
        title: "Projetos Praticos",
        subtopics: [
          {
            id: "projetos-portfolio",
            title: "Desafios por Nivel",
            summary: "Projetos Praticos e Construcao de Portfolio Especificacoes reais para implementar, hospedar e provar sua proficiencia tecnica Projetos Reais na Atria Jr.",
          },
          {
            id: "projetos-web-cloud",
            title: "Web e Computacao em Nuvem",
            summary: "Projetos Praticos e Construcao de Portfolio Especificacoes reais para implementar, hospedar e provar sua proficiencia tecnica Projetos Reais na Atria Jr.",
          },
          {
            id: "projetos-dados-seguranca",
            title: "Dados e Segurança",
            summary: "Projetos Praticos e Construcao de Portfolio Especificacoes reais para implementar, hospedar e provar sua proficiencia tecnica Projetos Reais na Atria Jr.",
          },
        ],
      },
      {
        id: "roadmap-sh",
        title: "Roadmaps e Projetos",
        subtopics: [
          {
            id: "roadmap-sh",
            title: "Trilhas do Roadmap.sh",
            summary: "sh: O Que Estudar e Ideias de Projetos Práticos Guias comunitários completos por carreira e repositório de ideias de projetos para construir portfólio real Acessar roadmap.",
          },
          {
            id: "projetos-reais",
            title: "Projetos com Requisitos Reais",
            summary: "Portfólio Real Projetos com Requisitos Reais Catálogo com especificações técnicas graduais para construir aplicações completas em vez de copiar tutoriais prontos.",
          },
        ],
      },
      {
        id: "trilhas-aprendizado",
        title: "Trilhas Tecnológicas",
        subtopics: [
          {
            id: "trilhas-aprendizado",
            title: "Dev, Cloud AWS, Dados e Portfólio",
            summary: "Trilhas Tecnológicas: Dev, Cloud AWS, Dados e Portfólio Direções técnicas estruturadas para acelerar sua formação prática e inserção no mercado Web e Software Trilha Dev: TypeScript First e Full Stack Unifique o ecossistema frontend e backend com a mesma sintaxe tipada.",
            keywords: ["coursera","michigan","ciencia de dados","pandas","scikit learn","full stack","devops"],
          },
        ],
      },
      {
        id: "devops-infraestrutura",
        title: "DevOps e Infraestrutura",
        subtopics: [
          {
            id: "devops-infraestrutura",
            title: "Docker e Liga LICS Unicamp",
            summary: "DevOps e Infraestrutura Agil na Universidade Praticas de automação de infraestrutura, esteiras de entrega continua e orquestracao de conteineres Praticas de DevOps e Containers Aprenda a padronizar ambientes locais com Docker e Docker Compose, automatizar testes em esteiras de integracao continua e provisionar recursos na nuvem de forma reprodutivel utilizando infraestrutura como codigo.",
          },
        ],
      },
      {
        id: "seguranca-informacao",
        title: "Segurança da Informação",
        subtopics: [
          {
            id: "seguranca-informacao",
            title: "Fundamentos, Especializações e Brenno M.",
            summary: "Trilha de Segurança da Informação e Hacking Ético Roadmap técnico, grupos de estudo universitários e fundamentos de computação para ofensiva cibernética Cibersegurança e Recomendação da LICS Participe da LICS, Liga de Cibersegurança da Unicamp.",
          },
        ],
      },
      {
        id: "salarios-2026-mercado",
        title: "Pesquisa Salarial 2026",
        subtopics: [
          {
            id: "salarios-2026-mercado",
            title: "Faixas Salariais 2026",
            summary: "Consulte o mapeamento consolidado do mercado nacional realizado pelo.",
          },
          {
            id: "regimes-contratacao",
            title: "Regimes CLT, PJ e Cooperativas",
            summary: "Consulte o mapeamento consolidado do mercado nacional realizado pelo.",
          },
          {
            id: "roi-graduacao-unicamp",
            title: "Retorno sobre Investimento da Graduação",
            summary: "Consulte o mapeamento consolidado do mercado nacional realizado pelo.",
          },
        ],
      },
      {
        id: "trabalhar-na-gringa",
        title: "Trabalho na Gringa",
        subtopics: [
          {
            id: "trabalhar-na-gringa",
            title: "Contratação Remota Internacional",
            summary: "Trabalho na Gringa, foco em Contratação Remota Internacional na Faculdade de Tecnologia da Unicamp.",
          },
          {
            id: "requisitos-vagas-gringa",
            title: "Inglês e Portfólio",
            summary: "Requisitos Eliminatorios para Vagas Internacionais Plataformas Recomendadas para Candidatura.",
          },
          {
            id: "tributacao-pj-exterior",
            title: "Tributação e Câmbio",
            summary: "Aspectos Tributarios e Fechamento de Cambio no Brasil.",
          },
        ],
      },
      {
        id: "bsi-vs-tads-coordenacao",
        title: "BSI ou TADS Coordenador",
        subtopics: [
          {
            id: "bsi-vs-tads-coordenacao",
            title: "Visão da Coordenação",
            summary: "BSI ou TADS Coordenador, foco em Visão da Coordenação na Faculdade de Tecnologia da Unicamp.",
          },
          {
            id: "comparativo-matrizes-tempo",
            title: "Tempo e Matriz Curricular",
            summary: "Eixo Avaliado Bacharelado em Sistemas de Informação Tecnologia em Análise e Desenvolvimento de Sistemas Orientacao da Coordenacao.",
          },
        ],
      },
      {
        id: "mercado-ia-devs-produto",
        title: "Mercado de IA e Devs de Produto",
        subtopics: [
          {
            id: "mercado-ia-devs-produto",
            title: "Mercado Pós-Pandemia",
            summary: "Mercado de IA e Devs de Produto, foco em Mercado Pós-Pandemia na Faculdade de Tecnologia da Unicamp.",
          },
          {
            id: "ia-verdade-programacao",
            title: "O Falso Fim da Programação",
            summary: "Mitos ou Realidade da Inteligência Artificial na Engenharia.",
          },
          {
            id: "era-devs-produto",
            title: "A Era dos Devs de Produto",
            summary: "Mercado de IA e Devs de Produto, foco em A Era dos Devs de Produto na Faculdade de Tecnologia da Unicamp.",
          },
        ],
      },
      {
        id: "carreira-em-y-lideranca",
        title: "Carreira em Y",
        subtopics: [
          {
            id: "carreira-em-y-lideranca",
            title: "Especialista ou Gestão",
            summary: "Trilha Especialista Tecnico Trilha Gestao e Lideranca.",
          },
          {
            id: "autoavaliacao-trilha-y",
            title: "Autoavaliação de Afinidade",
            summary: "Autoavaliacao para Reflexao de Carreira Trilha Especialista Tecnico Trilha Gestao e Lideranca.",
          },
          {
            id: "videos-referencia-carreira",
            title: "Vídeos de Referência",
            summary: "Vídeos Recomendados sobre Carreira, IA e Mercado Pesquisa Fonte: Abrir pesquisa Trilha Especialista Tecnico Trilha Gestao e Lideranca.",
          },
        ],
      },
      {
        id: "canais-recomendados",
        title: "Canais Recomendados",
        subtopics: [
          {
            id: "canais-nacionais",
            title: "Criadores em Português",
            summary: "Criadores de Conteúdo em Português Fundamentos e Carreira Fabio Akita Série &apos;Começando aos 40&apos; com lições sobre fundamentos de programação para iniciantes, persistência e maturidade profissional.",
          },
          {
            id: "canais-internacionais",
            title: "Canais Internacionais em Inglês",
            summary: "Canais e Criadores Internacionais em Inglês Cursos Completos freeCodeCamp.",
          },
        ],
      },
    ],
  },
  {
    id: "estudos-ia",
    category: "estudos-ia",
    label: "IA",
    href: "/estudos-ia",
    page: "IA",
    basePath: "/estudos-ia",
    topics: [
      {
        id: "notebooklm-cerebro",
        title: "Google NotebookLM",
        subtopics: [
          {
            id: "notebooklm-cerebro",
            title: "Segundo Cérebro Acadêmico",
            summary: "Google NotebookLM: Seu Segundo Cérebro Acadêmico Como estudar com modelos que operam ancorados exclusivamente nos materiais das disciplinas da FT Ancoragem Estrita em Documentos O NotebookLM responde fundamentado apenas nos arquivos enviados pelo estudante, minimizando alucinações e citando as páginas exatas de referência.",
            keywords: ["notebooklm","segundo cerebro","slides","provas antigas","simulados","moodle"],
          },
        ],
      },
      {
        id: "prompts-estruturados",
        title: "Prompts Estruturados",
        subtopics: [
          {
            id: "prompts-estruturados",
            title: "Extrator de Planos de Aula",
            summary: "Prompts Estruturados, foco em Extrator de Planos de Aula na Faculdade de Tecnologia da Unicamp.",
          },
        ],
      },
      {
        id: "metodologias-estudo",
        title: "Metodologias de Estudo",
        subtopics: [
          {
            id: "metodologias-estudo",
            title: "Construção Manual e Feynman",
            summary: "Método: Construa na Mão Primeiro, Refatore com IA Depois Evite gerar código do zero com ferramentas automatizadas no aprendizado inicial: Etapa 1, Construção Manual: Implemente a lógica inicial de algoritmos, conexões com bancos e estruturas linha por linha para fixar fluxo e sintaxe.",
          },
        ],
      },
      {
        id: "boas-praticas-ia",
        title: "Boas Práticas de IA",
        subtopics: [
          {
            id: "boas-praticas-ia",
            title: "Tabela de Práticas Acadêmicas",
            summary: "Boas Práticas no Uso Acadêmico de IA Como potencializar seu aprendizado sem atrofiar seu raciocínio crítico e capacidade técnica Prática Prejudicial Prática Recomendada.",
          },
        ],
      },
      {
        id: "transicao-agentes",
        title: "Agentes de Código",
        subtopics: [
          {
            id: "transicao-agentes",
            title: "Chatbots versus Agentes e MCP",
            summary: "IA no Desenvolvimento: Chatbots versus Agentes de Código A evolução de janelas de chat no navegador para ferramentas integradas ao ambiente de trabalho Chatbots no Navegador Ambiente reativo no navegador com cópia manual de trechos, sem acesso aos arquivos locais ou comandos do terminal.",
          },
        ],
      },
      {
        id: "fundamentos-ia-canais",
        title: "Fundamentos e Redes Neurais",
        subtopics: [
          {
            id: "fundamentos-ia-canais",
            title: "Canais Internacionais de IA",
            summary: "Fundamentos de Redes Neurais e Inteligência Artificial Canais internacionais de referência para compreender a teoria matemática e a engenharia de modelos de linguagem Redes Neurais e LLMs Andrej Karpathy Série Neural Networks Zero to Hero, construindo redes neurais, retropropagação e modelos GPT do zero em código Python puro.",
            keywords: ["karpathy","3blue1brown","statquest","redes neurais","gpt do zero","matematica visual","llm"],
          },
        ],
      },
    ],
  },
  {
    id: "links",
    category: "links",
    label: "Links Úteis",
    href: "/links",
    page: "Links Úteis",
    basePath: "/links",
    topics: [
      {
        id: "categoria-alimentacao",
        title: "Alimentação e RU",
        subtopics: [
          {
            id: "categoria-alimentacao",
            title: "Restaurante Universitário e Saldo",
            summary: "Alimentação e RU, foco em Restaurante Universitário e Saldo na Faculdade de Tecnologia da Unicamp.",
            keywords: ["bandejao","ru","cardapio","refeicoes","funcamp","pix","saldo","carteirinha"],
          },
        ],
      },
      {
        id: "categoria-transporte",
        title: "Transporte e Mobilidade",
        subtopics: [
          {
            id: "categoria-transporte",
            title: "Circular e Intercampi Linha 84",
            summary: "Transporte e Mobilidade, foco em Circular e Intercampi Linha 84 na Faculdade de Tecnologia da Unicamp.",
            keywords: ["circular","fretado","intercampi","linha 84","onibus","reserva","sou limeira"],
          },
        ],
      },
      {
        id: "categoria-matricula",
        title: "Matrícula e Vida Acadêmica",
        subtopics: [
          {
            id: "categoria-matricula",
            title: "DAC, SIGA e Atendimento",
            summary: "Matrícula e Vida Acadêmica, foco em DAC, SIGA e Atendimento na Faculdade de Tecnologia da Unicamp.",
            keywords: ["dac","matricula","siga","edac","grade online","caderno de horarios"],
          },
        ],
      },
      {
        id: "categoria-aulas",
        title: "Aulas e Ambientes Virtuais",
        subtopics: [
          {
            id: "categoria-aulas",
            title: "Moodle, Classroom e Salas da FT",
            summary: "Aulas e Ambientes Virtuais, foco em Moodle, Classroom e Salas da FT na Faculdade de Tecnologia da Unicamp.",
            keywords: ["moodle","google classroom","salas","pa","sa","lp","tic","wifiprint"],
          },
        ],
      },
      {
        id: "categoria-intercambio",
        title: "Intercâmbio e DERI",
        subtopics: [
          {
            id: "categoria-intercambio",
            title: "Editais e Guias de Preparação",
            summary: "Intercâmbio e DERI, foco em Editais e Guias de Preparação na Faculdade de Tecnologia da Unicamp.",
            keywords: ["deri","intercambio","mobilidade","toefl","ielts","crp"],
          },
        ],
      },
      {
        id: "categoria-iniciacao-cientifica",
        title: "Iniciação Científica",
        subtopics: [
          {
            id: "categoria-iniciacao-cientifica",
            title: "PIBIC e FAPESP SAGe",
            summary: "Iniciação Científica, foco em PIBIC e FAPESP SAGe na Faculdade de Tecnologia da Unicamp.",
            keywords: ["pibic","fapesp","prp","pesquisa","iniciacao cientifica","bolsa ic"],
          },
        ],
      },
      {
        id: "categoria-permanencia",
        title: "Permanência e DEAPE",
        subtopics: [
          {
            id: "categoria-permanencia",
            title: "BAS, Mentoria PMU e Moradia",
            summary: "Permanência e DEAPE, foco em BAS, Mentoria PMU e Moradia na Faculdade de Tecnologia da Unicamp.",
            keywords: ["deape","bas","bolsa auxilio social","pmu","moradia","isencao ru"],
          },
        ],
      },
      {
        id: "categoria-organizacoes",
        title: "Organizações Estudantis",
        subtopics: [
          {
            id: "categoria-organizacoes",
            title: "Centros, Atlética e Ligas",
            summary: "Organizações Estudantis, foco em Centros, Atlética e Ligas na Faculdade de Tecnologia da Unicamp.",
            keywords: ["centros academicos","cat","atletica","aaatu","lics","liga ds"],
          },
        ],
      },
      {
        id: "categoria-carreira-tecnologia",
        title: "Carreira e Tecnologia",
        subtopics: [
          {
            id: "categoria-carreira-tecnologia",
            title: "AWS, GitHub e Ferramentas",
            summary: "Carreira e Tecnologia, foco em AWS, GitHub e Ferramentas na Faculdade de Tecnologia da Unicamp.",
            keywords: ["aws","builder center","github pack","overleaf","latex","roadmap","carreira"],
          },
        ],
      },
    ],
  },
  {
    id: "duvidas",
    category: "duvidas",
    label: "Dúvidas",
    href: "/duvidas",
    page: "Dúvidas",
    basePath: "/duvidas",
    topics: [
      {
        id: "duvidas-academicas-dac",
        title: "Dúvidas Acadêmicas e Matrícula",
        subtopics: [
          {
            id: "duvidas-matricula-dac",
            title: "Regras da DAC, Trancamento e Coeficientes",
            summary: "Dúvidas Acadêmicas e Matrícula, foco em Regras da DAC, Trancamento e Coeficientes na Faculdade de Tecnologia da Unicamp.",
            keywords: ["duvidas","perguntas","faq","dac","trancamento","desistencia","coeficientes","cr","cp"],
          },
          {
            id: "duvidas-reprovacao-prerequisitos",
            title: "Pré-requisitos e Reprovações",
            summary: "Dúvidas Acadêmicas e Matrícula, foco em Pré-requisitos e Reprovações na Faculdade de Tecnologia da Unicamp.",
            keywords: ["reprovacao","prerequisito","grade","recuperacao","integralizacao"],
          },
        ],
      },
      {
        id: "duvidas-campus-vivencia",
        title: "Dúvidas de Campus e Cotidiano",
        subtopics: [
          {
            id: "duvidas-bandejao-transporte",
            title: "Bandejão com Pix e Linha 84 Intercampi",
            summary: "Dúvidas de Campus e Cotidiano, foco em Bandejão com Pix e Linha 84 Intercampi na Faculdade de Tecnologia da Unicamp.",
            keywords: ["bandejao","ru","saldo","pix","funcamp","circular","linha 84","intercampi"],
          },
          {
            id: "duvidas-moradia-auxilios",
            title: "Moradia Estudantil e Bolsas SAE",
            summary: "Dúvidas de Campus e Cotidiano, foco em Moradia Estudantil e Bolsas SAE na Faculdade de Tecnologia da Unicamp.",
            keywords: ["moradia","republicas","kitnets","aluguel","sae","deape","bolsa bas","isencao ru"],
          },
        ],
      },
      {
        id: "duvidas-carreira-formacao",
        title: "Dúvidas de Carreira e Formatura",
        subtopics: [
          {
            id: "duvidas-estagio-contratos",
            title: "Estágios e Termo de Compromisso",
            summary: "Dúvidas de Carreira e Formatura, foco em Estágios e Termo de Compromisso na Faculdade de Tecnologia da Unicamp.",
            keywords: ["estagio","contrato","termo de compromisso","horas","bsi","tads","comissao de estagios"],
          },
          {
            id: "duvidas-formatura-colacao",
            title: "Colação de Grau Oficial e Diploma",
            summary: "Dúvidas de Carreira e Formatura, foco em Colação de Grau Oficial e Diploma na Faculdade de Tecnologia da Unicamp.",
            keywords: ["formatura","colacao de grau","diploma","baile","beca","mec","dac"],
          },
        ],
      },
      {
        id: "mandar-duvida",
        title: "Envio de Dúvidas",
        subtopics: [
          {
            id: "mandar-duvida",
            title: "Mande sua Dúvida para a Equipe",
            summary: "Envio de Dúvidas, foco em Mande sua Dúvida para a Equipe na Faculdade de Tecnologia da Unicamp.",
            keywords: ["mandar duvida","enviar pergunta","contato","google chat","email","duvidas frequentes","suporte"],
          },
        ],
      },
    ],
  },
  {
    id: "estatisticas",
    category: "estatisticas",
    label: "Estatísticas",
    href: "/estatisticas",
    page: "Estatísticas",
    basePath: "/estatisticas",
    topics: [
      {
        id: "metricas-audiencia",
        title: "Métricas de Audiência",
        subtopics: [
          {
            id: "metricas-audiencia",
            title: "Visitantes e Tempo de Permanência",
            summary: "Visualizações no Período Páginas e tópicos consultados Visitantes no Período Estudantes e pesquisadores Permanência Média Tempo dedicado por conteúdo Taxa de Interação Cliques em links e simuladores Evolução da Audiência no Período de Distribuição de visualizações e visitantes únicos computados em produção Visualizações Visitantes Acesso por Tipo de Dispositivo Proporção de estudantes navegando via celular versus computador Smartphones e Tablets: % Computadores de Mesa: % A alta proporção móvel fundamenta a presença das novas pílulas de navegação rápida exclusivas para telas compactas.",
          },
          {
            id: "acesso-dispositivos",
            title: "Acesso por Dispositivo Mobile e Desktop",
            summary: "Visualizações no Período Páginas e tópicos consultados Visitantes no Período Estudantes e pesquisadores Permanência Média Tempo dedicado por conteúdo Taxa de Interação Cliques em links e simuladores Evolução da Audiência no Período de Distribuição de visualizações e visitantes únicos computados em produção Visualizações Visitantes Acesso por Tipo de Dispositivo Proporção de estudantes navegando via celular versus computador Smartphones e Tablets: % Computadores de Mesa: % A alta proporção móvel fundamenta a presença das novas pílulas de navegação rápida exclusivas para telas compactas.",
          },
        ],
      },
      {
        id: "termometro-discente",
        title: "Termômetro Discente",
        subtopics: [
          {
            id: "termometro-discente",
            title: "Pesquisa e Anseios dos Alunos da FT",
            summary: "Termometro Discente: Indicadores da FT Mapeamento de anseios, momentos no curso e desafios observados na comunidade academica da Faculdade de Tecnologia da Unicamp.",
          },
        ],
      },
    ],
  },
];

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
        title: 'Comparativo Sistemas de Informação versus TADS',
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
        id: 'calendario-academico',
        title: 'Calendario Academico e Marcos Oficiais DAC',
        href: '/academico#calendario-academico',
        tag: 'Calendario',
        recommendedStages: ['calouro', 'meio', 'formando'],
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
        title: 'Comparativo Estagio ou Trainee ou Junior',
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
        id: 'seguranca-informacao',
        title: 'Trilha de Segurança da Informação',
        href: '/carreira#seguranca-informacao',
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
        title: 'BSI ou TADS com a Coordenação',
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
    description: 'Inteligência artificial para acelerar o estudo academico, geracao de cronogramas e domínio de codigo.',
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

export function getPageTopics(sectionId: string): TopicItem[] {
  const section = contentCatalog.find((s) => s.id === sectionId);
  if (!section) return [];
  return section.topics.map((topic) => ({
    id: topic.id,
    title: topic.title,
    subtopics: topic.subtopics.map((sub) => ({ id: sub.id, title: sub.title })),
  }));
}

export function getHeaderNavSections(): HeaderNavSection[] {
  return headerNavSections;
}
