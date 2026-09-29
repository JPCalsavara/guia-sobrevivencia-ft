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
  Server,
  Building2,
  Laptop,
  Landmark,
  Factory,
  PlaySquare
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
      { id: 'videos-cv-linkedin', title: 'Vídeos de LinkedIn e CV' },
    ],
  },
  {
    id: 'empresas-mercado',
    title: 'Empresas e Modelos de Trabalho',
    subtopics: [
      { id: 'empresas-remotas-tech', title: 'Empresas Tech e Trabalho Remoto' },
      { id: 'empresas-financeiras', title: 'Bancos e Fintechs' },
      { id: 'empresas-industrias', title: 'Polo Industrial e Consultorias' },
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
      { id: 'trilhas-aprendizado', title: 'Dev, Cloud AWS, Dados e Portfólio' },
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
      { id: 'canais-nacionais', title: 'Criadores em Português' },
      { id: 'canais-internacionais', title: 'Canais Internacionais em Inglês' },
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
        <aside className={styles.sidebarAside}>
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

          {/* Aulas em Vídeo Recomendadas: LinkedIn e CV */}
          <div id="videos-cv-linkedin" className={styles.cvVideosGrid}>
            <div className={styles.cvVideoCard}>
              <div>
                <div className={styles.cvVideoHeader}>
                  <span className={styles.cvVideoBadge}>LinkedIn que Contrata</span>
                  <Youtube size={18} color="#dc2626" aria-hidden="true" />
                </div>
                <h3 className={styles.cvVideoTitle}>Augusto Galego: Como Fazer um LinkedIn que Contrata</h3>
                <p className={styles.cvVideoDesc}>
                  Orientações objetivas sobre posicionamento de perfil, palavras-chave para recrutadores de tecnologia e como expor projetos acadêmicos com relevância.
                </p>
              </div>
              <a
                href="https://www.youtube.com/watch?v=1VArcBQGTZw"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cvVideoBtn}
                aria-label="Assistir aula de LinkedIn no YouTube em nova janela"
              >
                <Youtube size={15} aria-hidden="true" />
                <span>Assistir Aula de LinkedIn</span>
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            </div>

            <div className={styles.cvVideoCard}>
              <div>
                <div className={styles.cvVideoHeader}>
                  <span className={styles.cvVideoBadge}>Estrutura de Currículo</span>
                  <Youtube size={18} color="#dc2626" aria-hidden="true" />
                </div>
                <h3 className={styles.cvVideoTitle}>Vídeo: Estrutura e Formatação de Currículo para TI</h3>
                <p className={styles.cvVideoDesc}>
                  Análise detalhada de erros comuns em currículos de tecnologia, estrutura de tópicos de impacto e formatação limpa que passa nas triagens.
                </p>
              </div>
              <a
                href="https://www.youtube.com/watch?v=8bzgIll_PT0"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cvVideoBtn}
                aria-label="Assistir vídeo de formatação de currículo no YouTube em nova janela"
              >
                <Youtube size={15} aria-hidden="true" />
                <span>Assistir Vídeo sobre Currículo</span>
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* O Ecossistema de Empresas e Modelos de Trabalho */}
      <section id="empresas-mercado" className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Building2 size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>O Ecossistema de Empresas e Modelos de Trabalho</h2>
              <p className={styles.cardSubtitle}>
                Onde os estudantes da FT costumam estagiar, particularidades de cada processo seletivo e formatos de atuação
              </p>
            </div>
          </div>

          <div className={styles.companySectorsContainer}>
            {/* Bloco 1: Tech e Trabalho Remoto */}
            <div id="empresas-remotas-tech" className={styles.companySectorBlock}>
              <div className={styles.companySectorHeader}>
                <Laptop size={20} className={styles.companySectorIcon} aria-hidden="true" />
                <div className={styles.companySectorTitleGroup}>
                  <h3 className={styles.companySectorTitle}>Empresas de Tecnologia e Trabalho Remoto</h3>
                  <p className={styles.companySectorSubtitle}>
                    Companhias com cultura de trabalho distribuído, processos estruturados e forte tradição de absorção de talentos da Unicamp
                  </p>
                </div>
              </div>

              <div className={styles.companyCardsGrid}>
                <div className={styles.companyEntityCard}>
                  <div className={styles.companyEntityHeader}>
                    <h4 className={styles.companyName}>CI&T</h4>
                    <span className={`${styles.companyWorkBadge} ${styles.remoto}`}>Remoto</span>
                  </div>
                  <p className={styles.companyDesc}>
                    Grande parceira da comunidade acadêmica da Unicamp com seu programa de estágio Next Gen totalmente remoto. Ambiente centrado em métodos ágeis, engenharia de software aplicada e projetos para clientes internacionais de grande porte.
                  </p>
                </div>

                <div className={styles.companyEntityCard}>
                  <div className={styles.companyEntityHeader}>
                    <h4 className={styles.companyName}>iFood</h4>
                    <span className={`${styles.companyWorkBadge} ${styles.remoto}`}>Remoto</span>
                  </div>
                  <p className={styles.companyDesc}>
                    Ecossistema líder de delivery com atuação predominantemente remota. O processo de seleção é altamente competitivo, com filtros rigorosos de fundamentos de programação, lógica analítica e adequação à cultura de velocidade.
                  </p>
                </div>

                <div className={styles.companyEntityCard}>
                  <div className={styles.companyEntityHeader}>
                    <h4 className={styles.companyName}>Stone</h4>
                    <span className={`${styles.companyWorkBadge} ${styles.remoto}`}>Remoto</span>
                  </div>
                  <p className={styles.companyDesc}>
                    Fintech com forte área de tecnologia remota. Possui um processo seletivo claro, transparente e dividido em etapas bem delineadas, valorizando raciocínio lógico estruturado e autonomia de entrega.
                  </p>
                </div>
              </div>
            </div>

            {/* Bloco 2: Bancos e Fintechs */}
            <div id="empresas-financeiras" className={styles.companySectorBlock}>
              <div className={styles.companySectorHeader}>
                <Landmark size={20} className={styles.companySectorIcon} aria-hidden="true" />
                <div className={styles.companySectorTitleGroup}>
                  <h3 className={styles.companySectorTitle}>Instituições Financeiras e Fintechs</h3>
                  <p className={styles.companySectorSubtitle}>
                    Bancos e operadoras financeiras com alta remuneração, desafios de escala crítica e diferentes regimes de presença
                  </p>
                </div>
              </div>

              <div className={styles.companyCardsGrid}>
                <div className={styles.companyEntityCard}>
                  <div className={styles.companyEntityHeader}>
                    <h4 className={styles.companyName}>Itaú Unibanco</h4>
                    <span className={`${styles.companyWorkBadge} ${styles.hibrido}`}>Híbrido</span>
                  </div>
                  <p className={styles.companyDesc}>
                    Atuação em formato híbrido com polos em São Paulo e cidades próximas. O fluxo de contratação funciona por inscrição prévia contínua no portal de carreiras do banco, seguida por períodos de triagem, testes e dinâmicas coletivas.
                  </p>
                </div>

                <div className={styles.companyEntityCard}>
                  <div className={styles.companyEntityHeader}>
                    <h4 className={styles.companyName}>Banco Agibank</h4>
                    <span className={`${styles.companyWorkBadge} ${styles.presencial}`}>Presencial</span>
                  </div>
                  <p className={styles.companyDesc}>
                    Instituição financeira com campus administrativo presencial localizado próximo ao Aeroporto de Viracopos em Campinas. Conta com estrutura própria de apoio a transporte e proximidade logística para alunos residentes em Limeira e região.
                  </p>
                </div>

                <div className={styles.companyEntityCard}>
                  <div className={styles.companyEntityHeader}>
                    <h4 className={styles.companyName}>EloGroup</h4>
                    <span className={`${styles.companyWorkBadge} ${styles.hibrido}`}>Híbrido e Remoto</span>
                  </div>
                  <p className={styles.companyDesc}>
                    Consultoria de gestão orientada a tecnologia e dados, com projetos de automação de processos, integração de software e estratégia corporativa. Excelente opção para estudantes que buscam visão ampla de negócio.
                  </p>
                </div>
              </div>
            </div>

            {/* Bloco 3: Polo Industrial, Consultorias e Startups */}
            <div id="empresas-industrias" className={styles.companySectorBlock}>
              <div className={styles.companySectorHeader}>
                <Factory size={20} className={styles.companySectorIcon} aria-hidden="true" />
                <div className={styles.companySectorTitleGroup}>
                  <h3 className={styles.companySectorTitle}>Polo Industrial Regional, Consultorias e Startups</h3>
                  <p className={styles.companySectorSubtitle}>
                    Oportunidades em multinacionais automotivas de Limeira e cidades vizinhas, fábricas de software e ecossistemas empreendedores
                  </p>
                </div>
              </div>

              <div className={styles.companyCardsGrid}>
                <div className={styles.companyEntityCard}>
                  <div className={styles.companyEntityHeader}>
                    <h4 className={styles.companyName}>Hyundai Motor Brasil</h4>
                    <span className={`${styles.companyWorkBadge} ${styles.presencial}`}>Piracicaba</span>
                  </div>
                  <p className={styles.companyDesc}>
                    Grande planta fabril automobilística situada em Piracicaba, próxima de Limeira. Oferece programas de estágio presenciais em tecnologia da informação industrial, automação de processos produtivos e engenharia de sistemas.
                  </p>
                </div>

                <div className={styles.companyEntityCard}>
                  <div className={styles.companyEntityHeader}>
                    <h4 className={styles.companyName}>ZF do Brasil</h4>
                    <span className={`${styles.companyWorkBadge} ${styles.presencial}`}>Limeira</span>
                  </div>
                  <p className={styles.companyDesc}>
                    Multinacional líder em tecnologia de mobilidade com grande parque fabril estabelecido em Limeira. Proporciona estágios técnicos de longa tradição voltados a redes industriais, sistemas e eletrônica embarcada.
                  </p>
                </div>

                <div className={styles.companyEntityCard}>
                  <div className={styles.companyEntityHeader}>
                    <h4 className={styles.companyName}>Mahle Metal Leve</h4>
                    <span className={`${styles.companyWorkBadge} ${styles.presencial}`}>Limeira</span>
                  </div>
                  <p className={styles.companyDesc}>
                    Gigante do setor de autopeças e pesquisa automotiva com centros em Limeira e Mogi Mirim. Tradição em formação prática de estagiários em engenharia integrada, suporte corporativo de TI e gestão da manufatura.
                  </p>
                </div>

                <div className={styles.companyEntityCard}>
                  <div className={styles.companyEntityHeader}>
                    <h4 className={styles.companyName}>Consultorias e Fábricas Tech</h4>
                    <span className={`${styles.companyWorkBadge} ${styles.flexivel}`}>Flexível</span>
                  </div>
                  <p className={styles.companyDesc}>
                    Empresas com produtos base de tecnologia ou atuação sob demanda para setores adjacentes. Representam uma porta de entrada comum e frequente para o primeiro estágio de programação de alunos da graduação.
                  </p>
                </div>

                <div className={styles.companyEntityCard}>
                  <div className={styles.companyEntityHeader}>
                    <h4 className={styles.companyName}>Startups Regionais</h4>
                    <span className={`${styles.companyWorkBadge} ${styles.flexivel}`}>Híbrido e Remoto</span>
                  </div>
                  <p className={styles.companyDesc}>
                    Modalidade menos frequente na região em comparação às indústrias tradicionais, porém presente em hubs de inovação e polos tecnológicos. Oferecem vivência direta com o ciclo do produto e grande autonomia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.companyTipsCallout}>
            <h4>Dicas Estratégicas para Inscrições no Mercado</h4>
            <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <li><strong>Vagas Remotas:</strong> Mantenha currículo ATS de página única e GitHub com projetos reais documentados e deploy ativo.</li>
              <li><strong>Bancos e Fintechs:</strong> Inscreva-se nos bancos de talentos oficiais continuamente, pois as triagens não esperam editais abertos.</li>
              <li><strong>Indústrias da Região:</strong> Participe das feiras de carreiras na FT e conecte-se com veteranos para obter indicações diretas.</li>
            </ul>
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
              <h3 className={styles.cloudTitle}>Créditos Gratuitos com E-mail DAC</h3>
              <p className={styles.cloudText}>
                Seu e-mail institucional dá acesso gratuito a AWS Educate e Google Cloud Innovators para executar laboratórios em nuvem sem exigir cartão de crédito.
              </p>
            </div>

            <div className={styles.cloudCard}>
              <h3 className={styles.cloudTitle}>Projetos Valem Mais que Provas Iniciais</h3>
              <p className={styles.cloudText}>
                Certificações de entrada ajudam na triagem, mas o que consolida a contratação técnica é publicar aplicações reais conteinerizadas com Docker na nuvem.
              </p>
            </div>

            <div className={styles.cloudCard}>
              <h3 className={styles.cloudTitle}>Não Pague por Vouchers Básicos</h3>
              <p className={styles.cloudText}>
                Maratonas universitárias, eventos acadêmicos e cursos no Coursera for Campus da Unicamp frequentemente distribuem vouchers com gratuidade integral.
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
              <h2 className={styles.cardTitle}>Trilhas Tecnológicas: Dev, Cloud AWS, Dados e Portfólio</h2>
              <p className={styles.cardSubtitle}>
                Direções técnicas estruturadas para acelerar sua formação prática e inserção no mercado
              </p>
            </div>
          </div>

          <div className={styles.skillsGrid}>
            {/* Trilha 1: Dev Full Stack */}
            <div className={styles.skillItem}>
              <div className={styles.skillItemHeader}>
                <div className={`${styles.skillIconWrap} ${styles.blue}`}>
                  <Code2 size={20} aria-hidden="true" />
                </div>
                <span className={styles.skillBadge}>Web e Software</span>
              </div>
              <h3 className={styles.skillTitle}>Trilha Dev: TypeScript First e Full Stack</h3>
              <p className={styles.skillDesc}>
                Unifique o ecossistema frontend e backend com a mesma sintaxe tipada. Backend em Node com Fastify ou NestJS, frontend com React e Next para produtos digitais ou Java com Spring Boot para corporativo tradicional.
              </p>
              <div className={styles.skillTagsRow}>
                <span className={styles.skillTag}>TypeScript</span>
                <span className={styles.skillTag}>React</span>
                <span className={styles.skillTag}>Next.js</span>
                <span className={styles.skillTag}>NestJS</span>
                <span className={styles.skillTag}>Spring Boot</span>
              </div>
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
                <a
                  href="https://roadmap.sh/backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.trackActionBtn}
                >
                  <span>Roadmap Backend</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Trilha 2: Cloud AWS */}
            <div className={`${styles.skillItem} ${styles.highlightAws}`}>
              <div className={styles.skillItemHeader}>
                <div className={`${styles.skillIconWrap} ${styles.amber}`}>
                  <Cloud size={20} aria-hidden="true" />
                </div>
                <span className={`${styles.skillBadge} ${styles.amber}`}>Cloud e DevOps</span>
              </div>
              <h3 className={styles.skillTitle}>Trilha Cloud: Fundamentos com AWS Builder</h3>
              <p className={styles.skillDesc}>
                Aprenda computação em nuvem na prática com o portal oficial de introdução da Amazon Web Services. Explore conceitos de armazenamento com S3, computação serverless com Lambda, containers e deploy ágil.
              </p>
              <div className={styles.skillTagsRow}>
                <span className={styles.skillTag}>AWS</span>
                <span className={styles.skillTag}>Serverless</span>
                <span className={styles.skillTag}>S3 e Lambda</span>
                <span className={styles.skillTag}>Docker</span>
                <span className={styles.skillTag}>CI e CD</span>
              </div>
              <div className={styles.trackActions}>
                <a
                  href="https://builder.aws.com/start?trk=b65dcd77-0177-4af3-ab7c-01d949c355a3&sc_channel=sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.trackActionBtn} ${styles.awsBtn}`}
                >
                  <span>AWS Builder Start</span>
                  <ExternalLink size={12} />
                </a>
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

            {/* Trilha 3: Dados e IA */}
            <div className={styles.skillItem}>
              <div className={styles.skillItemHeader}>
                <div className={`${styles.skillIconWrap} ${styles.purple}`}>
                  <Database size={20} aria-hidden="true" />
                </div>
                <span className={`${styles.skillBadge} ${styles.purple}`}>Dados e IA</span>
              </div>
              <h3 className={styles.skillTitle}>Trilha Dados e IA: Ciência versus Engenharia</h3>
              <p className={styles.skillDesc}>
                Ciência foca em modelagem estatística, hipóteses e algoritmos preditivos. Engenharia foca em pipelines confiáveis e ingestão escalável. Inclui especialização Michigan gratuita via Coursera Unicamp.
              </p>
              <div className={styles.skillTagsRow}>
                <span className={styles.skillTag}>Python</span>
                <span className={styles.skillTag}>Pandas</span>
                <span className={styles.skillTag}>Scikit-Learn</span>
                <span className={styles.skillTag}>SQL</span>
                <span className={styles.skillTag}>Pipelines</span>
              </div>
              <div className={styles.trackActions}>
                <a
                  href="https://www.coursera.org/specializations/data-science-python"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.trackActionBtn}
                >
                  <span>Coursera Michigan</span>
                  <ExternalLink size={12} />
                </a>
                <a
                  href="https://www.coursera.org/programs/unicamp-on-coursera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.trackActionBtn} ${styles.green}`}
                >
                  <span>Ativar Coursera</span>
                  <ExternalLink size={12} />
                </a>
                <a
                  href="https://roadmap.sh/ai-data-scientist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.trackActionBtn}
                >
                  <span>Roadmap AI</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Trilha 4: Prova de Trabalho e Portfólio */}
            <div className={styles.skillItem}>
              <div className={styles.skillItemHeader}>
                <div className={`${styles.skillIconWrap} ${styles.green}`}>
                  <Layers size={20} aria-hidden="true" />
                </div>
                <span className={`${styles.skillBadge} ${styles.green}`}>Empregabilidade</span>
              </div>
              <h3 className={styles.skillTitle}>Trilha Portfólio: Construção de Prova de Trabalho</h3>
              <p className={styles.skillDesc}>
                Em vez de colecionar certificados teóricos, implemente projetos com código público no GitHub, documentação de arquitetura clara e deploy funcional para recrutadores técnicos testarem na prática.
              </p>
              <div className={styles.skillTagsRow}>
                <span className={styles.skillTag}>GitHub</span>
                <span className={styles.skillTag}>Deploy Ativo</span>
                <span className={styles.skillTag}>README Técnico</span>
                <span className={styles.skillTag}>Projetos Reais</span>
              </div>
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
                <a
                  href="https://education.github.com/pack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.trackActionBtn}
                >
                  <span>GitHub Student Pack</span>
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

          <h3 id="canais-nacionais" className={styles.channelsSubheading}>Criadores de Conteúdo em Português</h3>
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
          </div>

          <h3 id="canais-internacionais" className={styles.channelsSubheading}>Canais e Criadores Internacionais em Inglês</h3>
          <div className={styles.channelsGrid}>
            <div className={styles.channelCard}>
              <div className={styles.channelCardHeader}>
                <div>
                  <span className={styles.channelBadge}>Cursos Completos</span>
                  <h3 className={styles.channelTitle}>freeCodeCamp.org</h3>
                </div>
                <Youtube size={20} color="#dc2626" />
              </div>
              <p className={styles.channelDesc}>
                Aulas e tutoriais aprofundados sobre desenvolvimento web moderno, backend com Python, computação em nuvem e estruturas de dados essenciais.
              </p>
              <a
                href="https://www.youtube.com/@freecodecamp"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.channelActionBtn}
              >
                <Youtube size={16} />
                <span>Acessar freeCodeCamp</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <div className={styles.channelCard}>
              <div className={styles.channelCardHeader}>
                <div>
                  <span className={styles.channelBadge}>Fundamentos de Computação</span>
                  <h3 className={styles.channelTitle}>Harvard CS50 com David Malan</h3>
                </div>
                <Youtube size={20} color="#dc2626" />
              </div>
              <p className={styles.channelDesc}>
                Aulas de introdução à ciência da computação de Harvard, explorando raciocínio algorítmico, linguagem C, Python, SQL e abstrações de sistemas.
              </p>
              <a
                href="https://www.youtube.com/@cs50"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.channelActionBtn}
              >
                <Youtube size={16} />
                <span>Acessar Harvard CS50</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <div className={styles.channelCard}>
              <div className={styles.channelCardHeader}>
                <div>
                  <span className={styles.channelBadge}>Algoritmos e Entrevistas</span>
                  <h3 className={styles.channelTitle}>NeetCode</h3>
                </div>
                <Youtube size={20} color="#dc2626" />
              </div>
              <p className={styles.channelDesc}>
                Mapeamento visual e sistemático de problemas de estruturas de dados e algoritmos com padrões para preparação de entrevistas técnicas.
              </p>
              <a
                href="https://www.youtube.com/@NeetCode"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.channelActionBtn}
              >
                <Youtube size={16} />
                <span>Acessar NeetCode</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <div className={styles.channelCard}>
              <div className={styles.channelCardHeader}>
                <div>
                  <span className={styles.channelBadge}>Arquitetura e Tendências</span>
                  <h3 className={styles.channelTitle}>Fireship</h3>
                </div>
                <Youtube size={20} color="#dc2626" />
              </div>
              <p className={styles.channelDesc}>
                Apresentações dinâmicas de ferramentas emergentes, resumo de ecossistemas em alta velocidade e cobertura de novidades da indústria tech.
              </p>
              <a
                href="https://www.youtube.com/@Fireship"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.channelActionBtn}
              >
                <Youtube size={16} />
                <span>Acessar Fireship</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <div className={styles.channelCard}>
              <div className={styles.channelCardHeader}>
                <div>
                  <span className={styles.channelBadge}>Sistemas Distribuídos</span>
                  <h3 className={styles.channelTitle}>ByteByteGo</h3>
                </div>
                <Youtube size={20} color="#dc2626" />
              </div>
              <p className={styles.channelDesc}>
                Diagramas visuais detalhados sobre arquitetura de sistemas de alta escala, mensageria, balanceamento de carga e bancos de dados distribuídos.
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

            <div className={styles.channelCard}>
              <div className={styles.channelCardHeader}>
                <div>
                  <span className={styles.channelBadge}>Backend e Protocolos</span>
                  <h3 className={styles.channelTitle}>Hussein Nasser</h3>
                </div>
                <Youtube size={20} color="#dc2626" />
              </div>
              <p className={styles.channelDesc}>
                Engenharia de backend profunda, funcionamento interno de protocolos de rede, modelo TCP, concorrência e desempenho de bancos de dados.
              </p>
              <a
                href="https://www.youtube.com/@hnasr"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.channelActionBtn}
              >
                <Youtube size={16} />
                <span>Acessar Hussein Nasser</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <div className={styles.channelCard}>
              <div className={styles.channelCardHeader}>
                <div>
                  <span className={styles.channelBadge}>Sistemas e Produtividade</span>
                  <h3 className={styles.channelTitle}>ThePrimeagen</h3>
                </div>
                <Youtube size={20} color="#dc2626" />
              </div>
              <p className={styles.channelDesc}>
                Discussões focadas em performance de código, produtividade no terminal com editores modulares e cultura prática de software.
              </p>
              <a
                href="https://www.youtube.com/@ThePrimeTimeagen"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.channelActionBtn}
              >
                <Youtube size={16} />
                <span>Acessar ThePrimeagen</span>
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
