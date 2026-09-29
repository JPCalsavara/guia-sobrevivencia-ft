'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LatexCodeBlock } from '@/components/LatexCodeBlock/LatexCodeBlock';
import {
  Briefcase,
  Calendar,
  Code2,
  Cloud,
  FileText,
  Linkedin,
  Github,
  Layers,
  Video,
  Youtube,
  Compass,
  ExternalLink,
  ShieldCheck,
  Instagram,
  Database,
  Server
} from 'lucide-react';
import { DocSidebar, TopicItem } from '@/components/DocSidebar/DocSidebar';
import styles from './carreira.module.scss';

const careerTopics: TopicItem[] = [
  {
    id: 'sazonalidade-estagio',
    title: 'Sazonalidade e Feiras',
    subtopics: [
      { id: 'sazonalidade-estagio', title: 'Janela de Contratação' },
      { id: 'requisito-legal', title: 'Elegibilidade Institucional' },
    ],
  },
  {
    id: 'testes-tecnicos',
    title: 'Testes Técnicos de Entrada',
    subtopics: [
      { id: 'testes-tecnicos', title: 'Estruturas de Dados e Lógica' },
    ],
  },
  {
    id: 'curriculo-latex',
    title: 'Currículo em LaTeX',
    subtopics: [
      { id: 'curriculo-latex', title: 'Template ATS de Página Única' },
    ],
  },
  {
    id: 'entrevistas-pitch',
    title: 'Entrevistas e Pitch',
    subtopics: [
      { id: 'entrevistas-pitch', title: 'Vídeo e Estrutura de Pitch' },
      { id: 'perguntas-entrevistas', title: 'As Sete Perguntas Centrais' },
    ],
  },
  {
    id: 'portfolio-github',
    title: 'Presença Profissional',
    subtopics: [
      { id: 'portfolio-github', title: 'LinkedIn e Portfólio GitHub' },
    ],
  },
  {
    id: 'computacao-nuvem',
    title: 'Computação em Nuvem',
    subtopics: [
      { id: 'computacao-nuvem', title: 'Vouchers e Créditos Estudantis' },
    ],
  },
  {
    id: 'roadmap-sh',
    title: 'Roadmaps e Projetos',
    subtopics: [
      { id: 'roadmap-sh', title: 'Trilhas do Roadmap.sh' },
      { id: 'projetos-reais', title: 'Projetos com Requisitos Reais' },
    ],
  },
  {
    id: 'trilhas-aprendizado',
    title: 'Trilhas Tecnológicas',
    subtopics: [
      { id: 'trilhas-aprendizado', title: 'Dev Full Stack versus Dados e IA' },
    ],
  },
  {
    id: 'devops-ciberseguranca',
    title: 'DevOps e Cibersegurança',
    subtopics: [
      { id: 'devops-ciberseguranca', title: 'Docker e Liga LICS Unicamp' },
    ],
  },
  {
    id: 'canais-recomendados',
    title: 'Canais Recomendados',
    subtopics: [
      { id: 'canais-recomendados', title: 'Criadores de Conteúdo Técnico' },
    ],
  },
];

export default function CarreiraPage() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <section className={styles.pageHeader}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.headerBadge}>
            <Briefcase size={16} />
            <span>Carreira, Estágio e Mercado de Tecnologia</span>
          </div>

          <h1 className={styles.pageTitle}>
            Planejamento Profissional, Processos Seletivos e Portfólio Técnico
          </h1>

          <p className={styles.pageDescription}>
            Entenda a sazonalidade de contratações na região, prepare seu currículo em LaTeX otimizado para triagens automáticas e conheça os caminhos para conquistar estágios competitivos.
          </p>
        </motion.div>
      </section>

      {/* Conteúdo com Barra Lateral Esquerda */}
      <div className={styles.contentWithSidebar}>
        <aside>
          <DocSidebar topics={careerTopics} title="Carreira e Mercado" />
        </aside>

        <div className={styles.mainContentArea}>
          {/* Sazonalidade e Feiras de Estágio */}
          <section id="sazonalidade-estagio" className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Calendar size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Sazonalidade de Contratações e Feiras de Carreiras</h2>
              <p className={styles.cardSubtitle}>
                O calendário anual das principais empresas de tecnologia e instituições financeiras
              </p>
            </div>
          </div>

          <div className={styles.timelineGrid}>
            <div className={styles.timelineItem}>
              <span className={styles.periodBadge}>Agosto a Outubro</span>
              <h3 className={styles.timelineTitle}>Janela Principal de Contratação</h3>
              <p className={styles.timelineDesc}>
                Período em que ocorrem as maiores feiras de estágio da Unicamp e os eventos da Liestag em Limeira. Grandes contratantes como CI e T em Campinas, além de bancos como Itaú, Bradesco e C6 Bank, abrem suas turmas para início no primeiro trimestre do ano seguinte.
              </p>
            </div>

            <div className={styles.timelineItem}>
              <span className={styles.periodBadge}>Março a Maio</span>
              <h3 className={styles.timelineTitle}>Vagas Remanescentes e Médio Porte</h3>
              <p className={styles.timelineDesc}>
                Abertura de vagas para preenchimento de posições de meio de ano e oportunidades em empresas do polo regional de Limeira, Americana, Piracicaba e Santa Bárbara d Oeste.
              </p>
            </div>

            <div id="requisito-legal" className={styles.timelineItem}>
              <span className={styles.periodBadge}>Requisito Legal</span>
              <h3 className={styles.timelineTitle}>Elegibilidade Institucional</h3>
              <p className={styles.timelineDesc}>
                Pela legislação vigente e pelas normas da DAC, o estudante precisa estar regularmente matriculado e cursando a partir do terceiro semestre letivo para estágios não obrigatórios, respeitando o teto de trinta horas semanais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testes Técnicos */}
      <section id="testes-tecnicos" className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Code2 size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>O Que é Avaliado nos Testes Técnicos de Entrada</h2>
              <p className={styles.cardSubtitle}>
                Padrões de questões e exercícios práticos exigidos nas primeiras fases de seleção
              </p>
            </div>
          </div>

          <div className={styles.skillsGrid}>
            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Estruturas de Dados Fundamentais</h3>
              <p className={styles.skillDesc}>
                Domínio de tabelas hash e mapas chave-valor para buscas em tempo constante, além de manipulação limpa de matrizes, listas encadeadas e pilhas.
              </p>
            </div>

            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Lógica e Casos Limite</h3>
              <p className={styles.skillDesc}>
                Habilidade em estruturar laços de repetição eficientes, validação de valores nulos, tratamento de coleções vazias e complexidade assintótica de algoritmos.
              </p>
            </div>

            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Programação Orientada a Objetos</h3>
              <p className={styles.skillDesc}>
                Modelagem de classes com responsabilidade única, encapsulamento de regras de negócio e organização de entidades simulando serviços corporativos reais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Currículo em LaTeX */}
      <section id="curriculo-latex" className={styles.sectionBlock}>
        <div className={styles.latexHeader}>
          <FileText size={22} className={styles.headerIcon} />
          <div>
            <h2 className={styles.latexTitle}>Modelo de Currículo em LaTeX: Formato devcelio resume template</h2>
            <p className={styles.latexSubtitle}>
              Currículo de página única compatível com leitores automáticos de triagem ATS, estruturado com macros modulares e educação no topo para estudantes
            </p>
          </div>
        </div>
        <LatexCodeBlock />
      </section>

      {/* Vídeo de Pitch e Entrevistas de Estágio */}
      <section id="entrevistas-pitch" className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.resourceHeader}>
            <div className={styles.resourceHeaderLeft}>
              <Video size={22} className={styles.headerIcon} />
              <div>
                <h2 className={styles.cardTitle}>Vídeo de Apresentação e Entrevistas de Estágio</h2>
                <p className={styles.cardSubtitle}>
                  Como estruturar seu pitch pessoal e dominar as sete perguntas fundamentais de processos seletivos
                </p>
              </div>
            </div>
            <a
              href="https://www.youtube.com/watch?v=9-Lb-OMqXzI"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.videoActionButton}
            >
              <Youtube size={18} />
              <span>Assistir Vídeo no YouTube</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <div className={styles.pitchColumns}>
            <div className={styles.pitchBox}>
              <h3 className={styles.pitchBoxTitle}>
                <Briefcase size={18} color="var(--ft-green)" />
                Estrutura do Pitch Pessoal de Entrada
              </h3>
              <div className={styles.pitchStepsList}>
                <div className={styles.pitchStepItem}>
                  <strong>1. Quem sou</strong>
                  <p>
                    Apresentação direta com nome, curso de graduação na Faculdade de Tecnologia da Unicamp em Limeira e previsão de formatura.
                  </p>
                </div>
                <div className={styles.pitchStepItem}>
                  <strong>2. O que construí</strong>
                  <p>
                    Destaque de projetos práticos hospedados no GitHub, vivência em empresa júnior ou atividades extracurriculares comprovadas.
                  </p>
                </div>
                <div className={styles.pitchStepItem}>
                  <strong>3. Onde quero chegar</strong>
                  <p>
                    Objetivo claro na área de tecnologia, como engenharia de software ou análise de dados, com foco em aprendizado rápido.
                  </p>
                </div>
                <div className={styles.pitchStepItem}>
                  <strong>4. Por que esta oportunidade</strong>
                  <p>
                    Conexão explícita entre os desafios técnicos da vaga ofertada e sua motivação em gerar valor para o time.
                  </p>
                </div>
              </div>
            </div>

            <div id="perguntas-entrevistas" className={styles.pitchBox}>
              <h3 className={styles.pitchBoxTitle}>
                <Layers size={18} color="var(--ft-blue)" />
                As 7 Principais Perguntas em Entrevistas
              </h3>
              <ul className={styles.interviewQuestionsList}>
                <li><strong>Fale sobre você:</strong> Conte sua história em ordem cronológica resumida, ligando suas escolhas até a Unicamp.</li>
                <li><strong>Qual foi seu maior desafio técnico:</strong> Descreva um projeto em que algo falhou e como você investigou a causa raiz.</li>
                <li><strong>Por que escolheu a área de tecnologia:</strong> Explique o interesse genuíno por resolver problemas práticos via código.</li>
                <li><strong>Como lida com prazos sob pressão:</strong> Demonstre priorização consciente de tarefas e comunicação preventiva com o time.</li>
                <li><strong>Quais são seus pontos de melhoria:</strong> Aponte um ponto real e a estratégia concreta que você adotou para evoluir.</li>
                <li><strong>Experiência de trabalho em grupo:</strong> Ilustre como lidou com opiniões divergentes em projetos acadêmicos ou voluntários.</li>
                <li><strong>Onde você se vê nos próximos anos:</strong> Mostre vontade de consolidação técnica e absorção contínua de boas práticas.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub e LinkedIn */}
      <section id="portfolio-github" className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Layers size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Construção de Presença Profissional: LinkedIn e GitHub</h2>
              <p className={styles.cardSubtitle}>
                Como apresentar sua trajetória técnica de forma objetiva sem clichês vazios
              </p>
            </div>
          </div>

          <div className={styles.presenceGrid}>
            <div className={styles.presenceCard}>
              <div className={styles.presenceHeader}>
                <Linkedin size={20} className={styles.linkedinIcon} />
                <h3 className={styles.presenceTitle}>Diretrizes para o LinkedIn</h3>
              </div>
              <ul className={styles.presenceList}>
                <li>Utilize título objetivo focado em tecnologias praticadas, por exemplo: Graduando em Sistemas de Informação na Unicamp, foco em Java, Spring Boot e React.</li>
                <li>Descreva projetos acadêmicos detalhando o problema resolvido, as ferramentas utilizadas e os resultados alcançados.</li>
                <li>Conecte-se com veteranos da FT, membros da Atria Jr., Liestag e recrutadores das empresas que participam das feiras universitárias.</li>
              </ul>
            </div>

            <div className={styles.presenceCard}>
              <div className={styles.presenceHeader}>
                <Github size={20} className={styles.githubIcon} />
                <h3 className={styles.presenceTitle}>Diretrizes para o GitHub</h3>
              </div>
              <ul className={styles.presenceList}>
                <li>Mantenha dois ou três repositórios principais fixados no perfil, cada um com instruções claras de instalação e execução local no arquivo README.</li>
                <li>Inclua capturas de tela funcionais e diagramas simples de arquitetura nos repositórios destacados.</li>
                <li>Evite subir projetos compostos apenas por cópias literais de exercícios de aula sem documentação ou testes.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trilhas e Computação em Nuvem */}
      <section id="computacao-nuvem" className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Cloud size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Computação em Nuvem na Graduação e Vouchers Gratuitos</h2>
              <p className={styles.cardSubtitle}>
                Aproveite os convênios universitários para estudar tecnologias de nuvem sem custo
              </p>
            </div>
          </div>

          <div className={styles.cloudGrid}>
            <div className={styles.cloudCard}>
              <h3 className={styles.cloudTitle}>Programas Acadêmicos Disponíveis</h3>
              <p className={styles.cloudText}>
                Com seu email institucional terminado em dac unicamp br, você tem acesso a programas como AWS Educate e Google Cloud Innovators, que disponibilizam créditos para laboratórios práticos na nuvem sem necessidade de cadastrar cartão de crédito.
              </p>
            </div>

            <div className={styles.cloudCard}>
              <h3 className={styles.cloudTitle}>O Valor Real de Certificações Iniciais</h3>
              <p className={styles.cloudText}>
                Provas conceituais de entrada como AWS Cloud Practitioner ajudam na passagem por filtros iniciais de triagem em consultorias. Entretanto, o que consolida contratações técnicas é a criação de aplicações reais conteinerizadas com Docker e publicadas na nuvem.
              </p>
            </div>

            <div className={styles.cloudCard}>
              <h3 className={styles.cloudTitle}>Nunca Pague em Dólar por Provas Iniciais</h3>
              <p className={styles.cloudText}>
                Estudantes não devem gastar recursos próprios com taxas de certificações básicas. Campanhas universitárias, maratonas acadêmicas e cursos preparatórios no Coursera for Campus com frequência distribuem vouchers integrais de gratuidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roteiros Visuais e Ideias de Projetos no Roadmap.sh */}
      <section id="roadmap-sh" className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.resourceHeader}>
            <div className={styles.resourceHeaderLeft}>
              <Compass size={22} className={styles.headerIcon} />
              <div>
                <h2 className={styles.cardTitle}>Roadmap.sh: O Que Estudar e Ideias de Projetos Práticos</h2>
                <p className={styles.cardSubtitle}>
                  Guias comunitários completos por carreira e repositório de ideias de projetos para construir portfólio real
                </p>
              </div>
            </div>
            <a
              href="https://roadmap.sh"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.roadmapActionButton}
            >
              <Compass size={18} />
              <span>Acessar roadmap.sh</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <div className={styles.roadmapCardsGrid}>
            <div className={styles.roadmapCard}>
              <div className={styles.roadmapCardHeader}>
                <span className={styles.roadmapBadge}>Desenvolvimento Web</span>
                <h3 className={styles.roadmapCardTitle}>Roadmap Full Stack</h3>
                <p className={styles.roadmapCardDesc}>
                  Trilha unificada com fundamentos de frontend, desenvolvimento de backend, bancos de dados e APIs.
                </p>
              </div>
              <div className={styles.roadmapCardFooter}>
                <a
                  href="https://roadmap.sh/full-stack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardInlineLink}
                >
                  <span>Acessar Trilha Full Stack</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className={styles.roadmapCard}>
              <div className={styles.roadmapCardHeader}>
                <span className={styles.roadmapBadge}>Ciência de Dados e IA</span>
                <h3 className={styles.roadmapCardTitle}>Roadmap AI e Data Scientist</h3>
                <p className={styles.roadmapCardDesc}>
                  Modelos preditivos, estatística prática, aprendizado de máquina, redes neurais e inteligência artificial aplicada.
                </p>
              </div>
              <div className={styles.roadmapCardFooter}>
                <a
                  href="https://roadmap.sh/ai-data-scientist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardInlineLink}
                >
                  <span>Acessar AI e Data Scientist</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className={styles.roadmapCard}>
              <div className={styles.roadmapCardHeader}>
                <span className={styles.roadmapBadge}>Engenharia de Dados</span>
                <h3 className={styles.roadmapCardTitle}>Roadmap Data Engineer</h3>
                <p className={styles.roadmapCardDesc}>
                  Arquitetura de pipelines de ingestão, bancos relacionais e colunares, lagos de dados e processamento em lote.
                </p>
              </div>
              <div className={styles.roadmapCardFooter}>
                <a
                  href="https://roadmap.sh/data-engineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardInlineLink}
                >
                  <span>Acessar Data Engineer</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className={styles.roadmapCard}>
              <div className={styles.roadmapCardHeader}>
                <span className={styles.roadmapBadge}>Infraestrutura e Nuvem</span>
                <h3 className={styles.roadmapCardTitle}>Roadmap DevOps</h3>
                <p className={styles.roadmapCardDesc}>
                  Esteiras de integração contínua, conteinerização com Docker, orquestração Kubernetes e automação na nuvem.
                </p>
              </div>
              <div className={styles.roadmapCardFooter}>
                <a
                  href="https://roadmap.sh/devops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardInlineLink}
                >
                  <span>Acessar Trilha DevOps</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div id="projetos-reais" className={styles.roadmapCard}>
              <div className={styles.roadmapCardHeader}>
                <span className={styles.roadmapBadge}>Portfólio Real</span>
                <h3 className={styles.roadmapCardTitle}>Projetos com Requisitos Reais</h3>
                <p className={styles.roadmapCardDesc}>
                  Catálogo com especificações técnicas graduais para construir aplicações completas em vez de copiar tutoriais prontos.
                </p>
              </div>
              <div className={styles.roadmapCardFooter}>
                <a
                  href="https://roadmap.sh/projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardInlineLink}
                >
                  <span>Ver Ideias de Projetos</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className={styles.roadmapCard}>
              <div className={styles.roadmapCardHeader}>
                <span className={styles.roadmapBadge}>Fundamentos</span>
                <h3 className={styles.roadmapCardTitle}>Ciência da Computação</h3>
                <p className={styles.roadmapCardDesc}>
                  Roteiros de arquitetura de software, design patterns, protocolos de rede, segurança e estruturas de dados essenciais.
                </p>
              </div>
              <div className={styles.roadmapCardFooter}>
                <a
                  href="https://roadmap.sh/computer-science"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardInlineLink}
                >
                  <span>Trilha de Fundamentos</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trilhas Tecnológicas com Links Práticos */}
      <section id="trilhas-aprendizado" className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Code2 size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Trilhas de Aprendizado: Engenharia de Software versus Dados</h2>
              <p className={styles.cardSubtitle}>
                Escolha uma direção técnica clara para aprofundar seus estudos extracurriculares
              </p>
            </div>
          </div>

          <div className={styles.skillsGrid}>
            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Trilha Dev: TypeScript First e Full Stack</h3>
              <p className={styles.skillDesc}>
                Unifique o ecossistema frontend e backend com a mesma sintaxe tipada. Backend em Node com Fastify, NestJS ou Express, e frontend com React e Next para produtos digitais ou Java com Spring Boot para corporativo tradicional.
              </p>
              <div className={styles.trackActions}>
                <a
                  href="https://roadmap.sh/full-stack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.trackActionBtn}
                >
                  <span>Roadmap Full Stack</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Trilha Dados e IA: Ciência versus Engenharia</h3>
              <p className={styles.skillDesc}>
                Ciência foca em modelagem estatística, hipóteses e algoritmos preditivos. Engenharia foca em pipelines confiáveis, arquitetura de dados e alta performance na ingestão.
              </p>
              <div className={styles.trackActions}>
                <a
                  href="https://www.youtube.com/watch?v=UmMBIsW7cMg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.trackActionBtn} ${styles.youtube}`}
                >
                  <Youtube size={14} />
                  <span>Vídeo: Ciência vs Engenharia</span>
                  <ExternalLink size={12} />
                </a>
                <a
                  href="https://roadmap.sh/ai-data-scientist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.trackActionBtn}
                >
                  <span>AI e Data Science</span>
                  <ExternalLink size={12} />
                </a>
                <a
                  href="https://roadmap.sh/data-engineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.trackActionBtn}
                >
                  <span>Data Engineer</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Construção de Prova de Trabalho</h3>
              <p className={styles.skillDesc}>
                Em vez de colecionar certificados teóricos, implemente projetos propostos no catálogo do roadmap.sh, publique a documentação e disponibilize o deploy funcional para recrutadores testarem.
              </p>
              <div className={styles.trackActions}>
                <a
                  href="https://roadmap.sh/projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.trackActionBtn}
                >
                  <span>Catálogo de Projetos</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps, Cloud e Cibersegurança com Recomendação da LICS */}
      <section id="devops-ciberseguranca" className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <ShieldCheck size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>DevOps, Nuvem e Cibersegurança na Universidade</h2>
              <p className={styles.cardSubtitle}>
                Práticas de infraestrutura ágil, esteiras de entrega contínua e a Liga de Cibersegurança da Unicamp
              </p>
            </div>
          </div>

          <div className={styles.skillsGrid}>
            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Práticas de DevOps e Containers</h3>
              <p className={styles.skillDesc}>
                Aprenda a padronizar ambientes locais com Docker e Docker Compose, automatizar testes em esteiras de integração contínua e provisionar recursos na nuvem de forma reprodutível.
              </p>
              <div className={styles.trackActions}>
                <a
                  href="https://roadmap.sh/devops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.trackActionBtn}
                >
                  <span>Roadmap DevOps</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Cibersegurança e Recomendação da LICS</h3>
              <p className={styles.skillDesc}>
                Participe da LICS, Liga de Cibersegurança da Unicamp. A iniciativa promove grupos de estudo, treinamentos práticos de segurança defensiva e ofensiva, além de competições de CTF no cenário nacional.
              </p>
              <div className={styles.trackActions}>
                <a
                  href="https://www.lics.tec.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.trackActionBtn} ${styles.green}`}
                >
                  <ShieldCheck size={14} />
                  <span>Portal Oficial LICS</span>
                  <ExternalLink size={12} />
                </a>
                <a
                  href="https://www.instagram.com/lics.unicamp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.trackActionBtn}
                >
                  <Instagram size={14} />
                  <span>@lics.unicamp</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Nuvem com Benefício Estudantil</h3>
              <p className={styles.skillDesc}>
                Utilize o email institucional para acessar os programas AWS Educate e Google Cloud Innovators, obtendo créditos gratuitos para executar máquinas virtuais e laboratórios sem custos pessoais.
              </p>
              <div className={styles.trackActions}>
                <a
                  href="https://aws.amazon.com/education/awseducate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.trackActionBtn}
                >
                  <span>AWS Educate</span>
                  <ExternalLink size={12} />
                </a>
                <a
                  href="https://cloud.google.com/innovators"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.trackActionBtn}
                >
                  <span>Google Innovators</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canais Recomendados */}
      <section id="canais-recomendados" className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Youtube size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Canais de Tecnologia e Criadores Recomendados</h2>
              <p className={styles.cardSubtitle}>
                Conteúdos selecionados com foco em fundamentos sólidos, preparação de carreira e realidade da indústria
              </p>
            </div>
          </div>

          <div className={styles.channelsGrid}>
            <div className={styles.channelCard}>
              <div className={styles.channelCardHeader}>
                <div>
                  <span className={styles.channelBadge}>Fundamentos e Carreira</span>
                  <h3 className={styles.channelTitle}>Fabio Akita</h3>
                </div>
                <Youtube size={20} color="#dc2626" />
              </div>
              <p className={styles.channelDesc}>
                História da computação, arquitetura de sistemas operacionais, compiladores e lições diretas sobre maturidade e evolução técnica.
              </p>
              <a
                href="https://www.youtube.com/watch?v=sx4hAHhO9CY&list=PLdsnXVqbHDUc7htGFobbZoNen3r_wm3ki"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.channelActionBtn}
              >
                <Youtube size={16} />
                <span>Assistir Playlist de Carreira</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <div className={styles.channelCard}>
              <div className={styles.channelCardHeader}>
                <div>
                  <span className={styles.channelBadge}>Iniciantes e Entrevistas</span>
                  <h3 className={styles.channelTitle}>Augusto Galego</h3>
                </div>
                <Youtube size={20} color="#dc2626" />
              </div>
              <p className={styles.channelDesc}>
                Conselhos práticos para quem está dando os primeiros passos em TI, preparação para entrevistas técnicas e cultura de engenharia.
              </p>
              <a
                href="https://www.youtube.com/watch?v=QqKqqrMlVNM"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.channelActionBtn}
              >
                <Youtube size={16} />
                <span>Assistir Vídeo para Iniciantes</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <div className={styles.channelCard}>
              <div className={styles.channelCardHeader}>
                <div>
                  <span className={styles.channelBadge}>Desenvolvimento Prático</span>
                  <h3 className={styles.channelTitle}>Fernanda Kipper Dev</h3>
                </div>
                <Youtube size={20} color="#dc2626" />
              </div>
              <p className={styles.channelDesc}>
                Projetos práticos de desenvolvimento web moderno, construções de APIs seguras com Java e Spring Boot, além de interfaces React.
              </p>
              <a
                href="https://www.youtube.com/@kipperdev"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.channelActionBtn}
              >
                <Youtube size={16} />
                <span>Acessar Canal Kipper Dev</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <div className={styles.channelCard}>
              <div className={styles.channelCardHeader}>
                <div>
                  <span className={styles.channelBadge}>Mercado e Rotina</span>
                  <h3 className={styles.channelTitle}>Mano Deyvin</h3>
                </div>
                <Youtube size={20} color="#dc2626" />
              </div>
              <p className={styles.channelDesc}>
                Visão bem-humorada e sem filtro da realidade dos times de desenvolvimento, reuniões ágeis e mercado de trabalho em tecnologia.
              </p>
              <a
                href="https://www.youtube.com/@manodeyvin"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.channelActionBtn}
              >
                <Youtube size={16} />
                <span>Acessar Canal Mano Deyvin</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <div className={styles.channelCard}>
              <div className={styles.channelCardHeader}>
                <div>
                  <span className={styles.channelBadge}>Sistemas Distribuídos</span>
                  <h3 className={styles.channelTitle}>ByteByteGo e Internacionais</h3>
                </div>
                <Youtube size={20} color="#dc2626" />
              </div>
              <p className={styles.channelDesc}>
                Diagramas visuais de arquitetura distribuída, redes com Hussein Nasser, estruturas de dados com NeetCode e produtividade com ThePrimeagen.
              </p>
              <a
                href="https://www.youtube.com/@ByteByteGo"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.channelActionBtn}
              >
                <Youtube size={16} />
                <span>Acessar ByteByteGo</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>
        </div>
      </div>
    </div>
  );
}
