'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LatexCodeBlock } from '@/components/LatexCodeBlock/LatexCodeBlock';
import { JourneyFilter, JourneyStage } from '@/components/JourneyFilter/JourneyFilter';
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
  Shield,
  Lock,
  Terminal,
  Cpu,
  Instagram,
  Database,
  Server,
  Building2,
  Laptop,
  Landmark,
  Factory,
  PlaySquare,
  Lightbulb,
  Award,
  Globe,
  Languages,
  Rocket,
  Trophy,
  Users,
  GraduationCap
} from 'lucide-react';
import { useJourneyStage } from '@/hooks/useJourneyStage';
import { useSectionOrdering } from '@/hooks/useSectionOrdering';
import { JourneyStageHeader } from '@/components/JourneyStageHeader/JourneyStageHeader';
import { SecondarySectionsToggle } from '@/components/SecondarySectionsToggle/SecondarySectionsToggle';
import { DocSidebar, TopicItem } from '@/components/DocSidebar/DocSidebar';
import { MobileTopicPills } from '@/components/MobileTopicPills/MobileTopicPills';
import {
  internshipVsTraineeData,
  companiesShowcaseData,
  appleDeveloperAcademyData,
  marketVsResearchData,
  hackathonGuideData
} from '@/data/careerExpanded';
import styles from './carreira.module.scss';

const careerTopics: TopicItem[] = [
  {
    id: 'sazonalidade-estagio',
    title: 'Sazonalidade e Feiras',
    subtopics: [
      { id: 'sazonalidade-estagio', title: 'Janela de Contratação' },
      { id: 'feiras-recrutamento-agosto', title: 'Feiras de Carreiras em Agosto' },
      { id: 'programas-estagio-frequencia', title: 'Programas de Estágio Estruturados' },
      { id: 'requisito-legal', title: 'Elegibilidade Institucional' },
    ],
  },
  {
    id: 'trainee-vs-estagio',
    title: 'Estágio versus Trainee e Júnior',
    subtopics: [
      { id: 'comparativo-estagio-trainee-junior', title: 'Matriz Comparativa das Modalidades' },
      { id: 'processos-seletivos-trainee', title: 'Processos Seletivos e Liderança' },
    ],
  },
  {
    id: 'testes-tecnicos',
    title: 'Testes Técnicos e Maratona',
    subtopics: [
      { id: 'testes-tecnicos', title: 'Estruturas de Dados e Lógica' },
      { id: 'maratona-programacao', title: 'Maratona de Programação e ICPC' },
    ],
  },
  {
    id: 'hackathons-bootcamps',
    title: 'Hackathons e Apple Developer Academy',
    subtopics: [
      { id: 'guia-hackathons-squads', title: 'Guia de Hackathons e Squads' },
      { id: 'hackathon-itau-agentes', title: 'Hackathon Itaú Batalha de Agentes' },
      { id: 'apple-developer-academy', title: 'Apple Developer Academy Campinas' },
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
    id: 'empresas-tech-programas',
    title: 'Vitrine Tech e Mercado vs Pesquisa',
    subtopics: [
      { id: 'vitrine-empresas-tech', title: 'Vitrine de Empresas Líderes' },
      { id: 'mercado-vs-pesquisa', title: 'Mercado versus Pesquisa Acadêmica' },
    ],
  },
  {
    id: 'empreendedorismo-inova-desafio',
    title: 'Inovação e Empreendedorismo',
    subtopics: [
      { id: 'inova-unicamp-hub', title: 'Agência de Inovação Inova' },
      { id: 'desafio-unicamp-edicao', title: 'Competição Desafio Unicamp' },
      { id: 'empresas-filhas-unicamp', title: 'Ecossistema de Empresas Filhas' },
      { id: 'si800-disciplina', title: 'Conexão Curricular SI800' },
    ],
  },
  {
    id: 'idiomas-confucio-cel',
    title: 'Idiomas Estrangeiros',
    subtopics: [
      { id: 'instituto-confucio-mandarim', title: 'Instituto Confúcio e Mandarim' },
      { id: 'cel-idiomas-gratuitos', title: 'Centro de Ensino de Línguas CEL' },
      { id: 'hsk-bolsas-china', title: 'Exames HSK e Bolsas Internacionais' },
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
    id: 'ciberseguranca-hacking-etico',
    title: 'Cibersegurança e Hacking Ético',
    subtopics: [
      { id: 'ciberseguranca-hacking-etico', title: 'Fundamentos, Especializações e Brenno M.' },
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

const sectionStageMap: Record<string, { stage: JourneyStage; label: string }> = {
  'sazonalidade-estagio': { stage: 'formando', label: 'Foco: Formando, 7º e 8º Semestres' },
  'trainee-vs-estagio': { stage: 'formando', label: 'Foco: Formando, 7º e 8º Semestres' },
  'testes-tecnicos': { stage: 'meio', label: 'Foco: Meio de Curso, 3º ao 6º Semestre' },
  'hackathons-bootcamps': { stage: 'meio', label: 'Foco: Meio de Curso, 3º ao 6º Semestre' },
  'curriculo-latex': { stage: 'formando', label: 'Foco: Formando, 7º e 8º Semestres' },
  'entrevistas-pitch': { stage: 'formando', label: 'Foco: Formando, 7º e 8º Semestres' },
  'portfolio-github': { stage: 'calouro', label: 'Foco: Calouro, 1º e 2º Semestres' },
  'empresas-mercado': { stage: 'formando', label: 'Foco: Formando, 7º e 8º Semestres' },
  'empresas-tech-programas': { stage: 'formando', label: 'Foco: Formando, 7º e 8º Semestres' },
  'empreendedorismo-inova-desafio': { stage: 'meio', label: 'Foco: Meio de Curso, 3º ao 6º Semestre' },
  'idiomas-confucio-cel': { stage: 'calouro', label: 'Foco: Calouro, 1º e 2º Semestres' },
  'computacao-nuvem': { stage: 'meio', label: 'Foco: Meio de Curso, 3º ao 6º Semestre' },
  'roadmap-sh': { stage: 'meio', label: 'Foco: Meio de Curso, 3º ao 6º Semestre' },
  'trilhas-aprendizado': { stage: 'meio', label: 'Foco: Meio de Curso, 3º ao 6º Semestre' },
  'devops-ciberseguranca': { stage: 'calouro', label: 'Foco: Calouro, 1º e 2º Semestres' },
  'ciberseguranca-hacking-etico': { stage: 'meio', label: 'Foco: Meio de Curso, 3º ao 6º Semestre' },
  'canais-recomendados': { stage: 'calouro', label: 'Foco: Calouro, 1º e 2º Semestres' },
};

const allCareerSectionIds = [
  'sazonalidade-estagio',
  'trainee-vs-estagio',
  'testes-tecnicos',
  'hackathons-bootcamps',
  'curriculo-latex',
  'entrevistas-pitch',
  'portfolio-github',
  'empresas-mercado',
  'empresas-tech-programas',
  'empreendedorismo-inova-desafio',
  'idiomas-confucio-cel',
  'computacao-nuvem',
  'roadmap-sh',
  'trilhas-aprendizado',
  'devops-ciberseguranca',
  'ciberseguranca-hacking-etico',
  'canais-recomendados',
];

export default function CarreiraPage() {
  const { stage: journeyStage, selectStage: setJourneyStage } = useJourneyStage('all');
  const {
    isSecondaryOpen,
    setIsSecondaryOpen,
    secondarySections,
    getSectionStyle,
  } = useSectionOrdering(journeyStage, sectionStageMap, allCareerSectionIds);

  const displayedTopics = journeyStage === 'all'
    ? careerTopics
    : [
        ...careerTopics.filter((t) => sectionStageMap[t.id]?.stage === journeyStage),
        ...careerTopics.filter((t) => sectionStageMap[t.id]?.stage !== journeyStage),
      ];

  const renderStageBadge = (sectionId: string) => {
    const meta = sectionStageMap[sectionId];
    if (!meta) return null;
    const isSelected = journeyStage !== 'all' && meta.stage === journeyStage;
    return (
      <div className={styles.stageFocusBadge}>
        {isSelected ? `Etapa em Destaque: ${meta.label}` : meta.label}
      </div>
    );
  };

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
          <DocSidebar topics={displayedTopics} title="Carreira e Mercado" />
        </aside>

        <div className={styles.mainContentArea}>
          {/* Navegação Rápida por Pílulas no Topo para Mobile */}
          <MobileTopicPills topics={displayedTopics} />

          {/* Seletor Interativo de Momento da Graduação */}
          <JourneyFilter
            currentStage={journeyStage}
            onSelectStage={setJourneyStage}
            pageContext="carreira"
          />

          {journeyStage !== 'all' && (
            <div id="trilha-prioritaria" style={{ order: 1 }}>
              <JourneyStageHeader
                stage={journeyStage}
                pageContext="carreira"
                onReset={() => setJourneyStage('all')}
              />
            </div>
          )}

          {/* Sazonalidade e Feiras de Estágio */}
          <section
            id="sazonalidade-estagio"
            style={getSectionStyle('sazonalidade-estagio')}
            className={`${styles.sectionBlock} ${journeyStage !== 'all' && sectionStageMap['sazonalidade-estagio']?.stage === journeyStage ? styles.highlightStage : ''}`}
          >
            {renderStageBadge('sazonalidade-estagio')}
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
              <h3 className={styles.timelineTitle}>Modalidades e Elegibilidade</h3>
              <p className={styles.timelineDesc}>
                Para estágios não obrigatórios remunerados, o estudante pode iniciar a partir do terceiro semestre com tramitação prévia via sistema da DEAPE e limite de trinta horas semanais. O estágio obrigatório curricular corresponde a SI916 em BSI e SI917 em TADS.
              </p>
            </div>

            <div className={styles.timelineItem}>
              <span className={styles.periodBadge}>Concomitância e CLT</span>
              <h3 className={styles.timelineTitle}>Validação e Casos de Vínculo Formal</h3>
              <p className={styles.timelineDesc}>
                O estágio remunerado precisa ser concomitante com a matrícula na disciplina de estágio no mesmo semestre. Estudantes contratados via CLT devem abrir estágio obrigatório não remunerado de dez semanas para BSI ou seis semanas para TADS. O curso de BSI foi desenhado pela coordenação para o estágio ocorrer no quarto ano, evitando quebra da matriz curricular com tentativas frustradas de migração para o noturno.
              </p>
            </div>
          </div>

          {/* Feiras de Carreiras em Destaque */}
          <div id="feiras-recrutamento-agosto" className={styles.fairsContainer}>
            <div className={styles.fairsSubHeader}>
              <h3 className={styles.fairsSubTitle}>Principais Feiras de Carreiras e Recrutamento em Agosto</h3>
              <p className={styles.fairsSubDesc}>
                Participe dos maiores eventos de conexões corporativas, entregue currículos e converse diretamente com gestores e recrutadores
              </p>
            </div>

            <div className={styles.fairsGrid}>
              <div className={styles.fairCard}>
                <div>
                  <div className={styles.fairHeader}>
                    <span className={styles.fairBadge}>Limeira FT e FCA</span>
                    <Instagram size={18} className={styles.instagramIcon} aria-hidden="true" />
                  </div>
                  <h4 className={styles.fairTitle}>Feira Unicamp Limeira</h4>
                  <p className={styles.fairDesc}>
                    Feira de tecnologia e carreiras dos campi de Limeira realizada no mês de agosto. Conecta os alunos da FT e da FCA com indústrias regionais, polos corporativos e startups inovadoras.
                  </p>
                </div>
                <a
                  href="https://www.instagram.com/feiraunicamplimeira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.fairActionBtn}
                  aria-label="Acessar Instagram da Feira Unicamp Limeira em nova janela"
                >
                  <Instagram size={14} aria-hidden="true" />
                  <span>Instagram Feira Limeira</span>
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              </div>

              <div className={styles.fairCard}>
                <div>
                  <div className={styles.fairHeader}>
                    <span className={styles.fairBadge}>Unicamp Barão Geraldo</span>
                    <Instagram size={18} className={styles.instagramIcon} aria-hidden="true" />
                  </div>
                  <h4 className={styles.fairTitle}>Workshop Integrativo WI</h4>
                  <p className={styles.fairDesc}>
                    A maior feira de estágios da Unicamp, sediada anualmente em agosto no campus de Campinas. Reúne dezenas de estandes de gigantes de tecnologia, consultorias e bancos de investimento.
                  </p>
                </div>
                <a
                  href="https://www.instagram.com/workshopintegrativo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.fairActionBtn}
                  aria-label="Acessar Instagram do Workshop Integrativo Unicamp em nova janela"
                >
                  <Instagram size={14} aria-hidden="true" />
                  <span>Instagram do WI</span>
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              </div>

              <div className={styles.fairCard}>
                <div>
                  <div className={styles.fairHeader}>
                    <span className={styles.fairBadge}>São Paulo Capital</span>
                    <Instagram size={18} className={styles.instagramIcon} aria-hidden="true" />
                  </div>
                  <h4 className={styles.fairTitle}>Conferências Na Prática</h4>
                  <p className={styles.fairDesc}>
                    Grandes conferências de carreira da Fundação Estudar sediadas na capital paulista. Contam com processo seletivo prévio para participação e conexões diretas com líderes e recrutadores de destaque.
                  </p>
                </div>
                <a
                  href="https://www.instagram.com/napraticaorg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.fairActionBtn}
                  aria-label="Acessar Instagram do Na Pratica em nova janela"
                >
                  <Instagram size={14} aria-hidden="true" />
                  <span>Instagram Na Prática</span>
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Programas de Estágio Estruturados */}
          <div id="programas-estagio-frequencia" className={styles.fairsContainer} style={{ marginTop: '2.5rem' }}>
            <div className={styles.fairsSubHeader}>
              <h3 className={styles.fairsSubTitle}>Onde e Quando Procurar: Principais Programas de Estágio Estruturados</h3>
              <p className={styles.fairsSubDesc}>
                Conheça a periodicidade dos processos seletivos para planejar suas inscrições com antecedência e não perder as janelas de abertura
              </p>
            </div>

            <div className={styles.programsGrid}>
              <div className={styles.programCard}>
                <div className={styles.programCardTop}>
                  <div className={styles.programHeader}>
                    <span className={`${styles.programFrequencyBadge} ${styles.badgeBlue}`}>2 Vezes por Ano</span>
                    <Building2 size={18} className={styles.programIcon} aria-hidden="true" />
                  </div>
                  <h4 className={styles.programTitle}>Programa de Estágio Agibank</h4>
                  <p className={styles.programDesc}>
                    O Agi abre turmas semestrais, tipicamente com seleções ocorrendo no começo do ano e no meio do ano, para posições em tecnologia, engenharia de software, produtos digitais e operações.
                  </p>
                </div>
                <a
                  href="https://carreiras.agibank.com.br/estagio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.programActionBtn}
                  aria-label="Acessar portal de estágio do Agibank em nova janela"
                >
                  <span>Portal de Estágio Agi</span>
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              </div>

              <div className={styles.programCard}>
                <div className={styles.programCardTop}>
                  <div className={styles.programHeader}>
                    <span className={`${styles.programFrequencyBadge} ${styles.badgePurple}`}>1 Vez por Ano</span>
                    <Building2 size={18} className={styles.programIcon} aria-hidden="true" />
                  </div>
                  <h4 className={styles.programTitle}>Programa de Estágio Nubank</h4>
                  <p className={styles.programDesc}>
                    O Nubank abre processo seletivo anual altamente concorrido. As etapas incluem testes práticos de raciocínio, lógica de programação e resolução de problemas no estilo LeetCode, seguidos por entrevistas técnicas e de cultura.
                  </p>
                </div>
                <a
                  href="https://estagio.nubank.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.programActionBtn}
                  aria-label="Acessar portal de estágio do Nubank em nova janela"
                >
                  <span>Portal de Estágio Nubank</span>
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              </div>

              <div className={styles.programCard}>
                <div className={styles.programCardTop}>
                  <div className={styles.programHeader}>
                    <span className={`${styles.programFrequencyBadge} ${styles.badgeGreen}`}>1 Vez por Ano</span>
                    <Building2 size={18} className={styles.programIcon} aria-hidden="true" />
                  </div>
                  <h4 className={styles.programTitle}>Programa de Estágio CI e T</h4>
                  <p className={styles.programDesc}>
                    Abertura anual tradicionalmente na janela de agosto a outubro para formação de turmas no início do ano seguinte, oferecendo oportunidades em desenvolvimento de software com presença forte no polo de Campinas e vagas remotas.
                  </p>
                </div>
                <a
                  href="https://ciandt.com/br/pt-br/carreiras/programa-de-estagio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.programActionBtn}
                  aria-label="Acessar portal de estágio da CI e T em nova janela"
                >
                  <span>Portal de Estágio CI e T</span>
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              </div>

              <div className={styles.programCard}>
                <div className={styles.programCardTop}>
                  <div className={styles.programHeader}>
                    <span className={`${styles.programFrequencyBadge} ${styles.badgeAmber}`}>Inscrição Contínua</span>
                    <Building2 size={18} className={styles.programIcon} aria-hidden="true" />
                  </div>
                  <h4 className={styles.programTitle}>Estágio Corporativo Itaú Unibanco</h4>
                  <p className={styles.programDesc}>
                    O Itaú opera com banco de talentos aberto o ano todo. Você submete sua candidatura inicial e o currículo permanece ativo para convocações contínuas conforme a abertura de vagas nos times de tecnologia e negócios.
                  </p>
                </div>
                <a
                  href="https://carreiras.itau.com.br/vaga/sao-paulo/programa-de-estagio-corporativo-2026/35299/97432985872"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.programActionBtn}
                  aria-label="Acessar estágio corporativo do Itau em nova janela"
                >
                  <span>Candidatura Contínua Itaú</span>
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              </div>

              <div className={styles.programCard}>
                <div className={styles.programCardTop}>
                  <div className={styles.programHeader}>
                    <span className={`${styles.programFrequencyBadge} ${styles.badgeCyan}`}>Estágio de Férias e Verão</span>
                    <Building2 size={18} className={styles.programIcon} aria-hidden="true" />
                  </div>
                  <h4 className={styles.programTitle}>Estágio de Férias BTG Pactual</h4>
                  <p className={styles.programDesc}>
                    Ideal para quem estuda em período integral e não tem 30 horas semanais livres durante os semestres letivos. O programa proporciona imersão prática intensiva em São Paulo durante os recessos de verão e de inverno.
                  </p>
                </div>
                <a
                  href="https://conteudo.btgpactual.com/estagio-de-ferias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.programActionBtn}
                  aria-label="Acessar estágio de férias do BTG Pactual em nova janela"
                >
                  <span>Portal BTG Férias</span>
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estágio versus Trainee versus Efetivo Júnior */}
      <section
        id="trainee-vs-estagio"
        style={getSectionStyle('trainee-vs-estagio')}
        className={`${styles.sectionBlock} ${journeyStage !== 'all' && sectionStageMap['trainee-vs-estagio']?.stage === journeyStage ? styles.highlightStage : ''}`}
      >
        {renderStageBadge('trainee-vs-estagio')}
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Briefcase size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Comparativo: Estágio versus Trainee versus Efetivo Júnior</h2>
              <p className={styles.cardSubtitle}>
                Diferenciação de momentos na graduação, regimes de trabalho, faixas de remuneração e objetivos de carreira
              </p>
            </div>
          </div>

          <p className={styles.pageDescription} style={{ marginBottom: '1.5rem' }}>
            Planejar os passos finais da graduação na FT exige compreender as distinções entre as portas de entrada no mercado corporativo de tecnologia. Enquanto o estágio prioriza aprendizado com carga horária protegida por lei, os programas de trainee buscam acelerar jovens talentos para posições executivas e de liderança técnica sob regime integral.
          </p>

          {/* Subtópico 1: Matriz Comparativa */}
          <div id="comparativo-estagio-trainee-junior" style={{ marginTop: '2rem' }}>
            <h3 className={styles.cardTitle} style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>
              Matriz Comparativa das Modalidades de Contratação
            </h3>
            <p className={styles.cardSubtitle} style={{ marginBottom: '1rem' }}>
              Parâmetros regulatórios, remuneração média e níveis de exigência em cada trilha
            </p>

            <div className={styles.comparisonTableWrapper}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th>Critério</th>
                    <th>Estágio de Graduação</th>
                    <th>Programa de Trainee</th>
                    <th>Efetivo Júnior CLT</th>
                  </tr>
                </thead>
                <tbody>
                  {internshipVsTraineeData.map((row, idx) => (
                    <tr key={idx}>
                      <td><strong>{row.criterion}</strong></td>
                      <td>{row.estagio}</td>
                      <td>{row.trainee}</td>
                      <td>{row.junior}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Subtópico 2: Processos Seletivos de Trainee */}
          <div id="processos-seletivos-trainee" style={{ marginTop: '2.5rem' }}>
            <h3 className={styles.cardTitle} style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>
              Estrutura dos Processos Seletivos de Trainee e Foco em Liderança
            </h3>
            <p className={styles.cardSubtitle} style={{ marginBottom: '1.25rem' }}>
              Etapas eliminatórias, dinâmicas de grupo, resolução de casos de negócio e painéis executivos
            </p>

            <div className={styles.timelineGrid}>
              <div className={styles.timelineItem}>
                <span className={styles.periodBadge}>Fase 1: Triagem e Testes</span>
                <h4 className={styles.timelineTitle}>Fit Cultural e Raciocínio Lógico</h4>
                <p className={styles.timelineDesc}>
                  Avaliações online de alinhamento de valores com a companhia, lógica matemática, interpretação estruturada de dados e proficiência em inglês.
                </p>
              </div>

              <div className={styles.timelineItem}>
                <span className={styles.periodBadge}>Fase 2: Imersão em Grupo</span>
                <h4 className={styles.timelineTitle}>Dinâmicas e Business Cases</h4>
                <p className={styles.timelineDesc}>
                  Resolução colaborativa de problemas reais de negócios em equipes interdisciplinares, com análise de liderança situacional, adaptabilidade e comunicação.
                </p>
              </div>

              <div className={styles.timelineItem}>
                <span className={styles.periodBadge}>Fase 3: Apresentação Final</span>
                <h4 className={styles.timelineTitle}>Painel com Diretores e C-Level</h4>
                <p className={styles.timelineDesc}>
                  Apresentação de projeto individual ou de squad perante a diretoria executiva, defendendo viabilidade financeira, arquitetura de software e impacto estratégico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testes Técnicos */}
      <section
        id="testes-tecnicos"
        style={getSectionStyle('testes-tecnicos')}
        className={`${styles.sectionBlock} ${journeyStage !== 'all' && sectionStageMap['testes-tecnicos']?.stage === journeyStage ? styles.highlightStage : ''}`}
      >
        {renderStageBadge('testes-tecnicos')}
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

          {/* Maratona de Programação SBC e ICPC */}
          <div id="maratona-programacao" className={styles.maratonaBox}>
            <div className={styles.maratonaHeader}>
              <div className={styles.maratonaHeaderLeft}>
                <Trophy size={22} className={styles.headerIcon} />
                <div>
                  <h3 className={styles.maratonaTitle}>Maratona de Programação e Preparação ICPC SBC</h3>
                  <p className={styles.maratonaSubtitle}>
                    Treinamento algorítmico intensivo, raciocínio sob pressão e aceleração para entrevistas de Big Tech
                  </p>
                </div>
              </div>
              <a
                href="https://maratona.sbc.org.br/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.maratonaActionBtn}
              >
                <span>Site Oficial SBC</span>
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            </div>

            <div className={styles.maratonaGrid}>
              <div className={styles.maratonaCard}>
                <h4 className={styles.maratonaCardTitle}>Regras e Dinâmica da Prova</h4>
                <p>
                  Times de três alunos com um computador individual compartilhado por cinco horas ininterruptas. O caderno traz de 10 a 13 problemas desafiadores em ordem mista de complexidade. Cada problema solucionado com resposta aceita concede à equipe um balão colorido representativo.
                </p>
              </div>

              <div className={styles.maratonaCard}>
                <h4 className={styles.maratonaCardTitle}>Impacto em Entrevistas de Big Tech</h4>
                <p>
                  As fases técnicas de triagem de gigantes como Google, Meta, Uber e Mercado Livre utilizam problemas com matrizes, grafos, busca em largura, filas de prioridade e programação dinâmica idênticos aos exercícios da maratona, exigindo estimativa precisa de complexidade Big O.
                </p>
              </div>

              <div className={styles.maratonaCard}>
                <h4 className={styles.maratonaCardTitle}>Plataformas de Treino e Tradição Unicamp</h4>
                <p>
                  Utilize o Beecrowd para fixar a base com enunciados em português e o Codeforces ou LeetCode para desafios avançados com limites severos de memória e tempo. A Unicamp possui histórico vitorioso de classificação para a final mundial, com treinos abertos no campus.
                </p>
              </div>
            </div>

            <div className={styles.maratonaLinksRow}>
              <span className={styles.maratonaLinksLabel}>Portais recomendados para praticar:</span>
              <div className={styles.maratonaChips}>
                <a
                  href="https://beecrowd.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.maratonaChip}
                >
                  <span>Beecrowd Brasil</span>
                  <ExternalLink size={11} aria-hidden="true" />
                </a>
                <a
                  href="https://codeforces.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.maratonaChip}
                >
                  <span>Codeforces Rounds</span>
                  <ExternalLink size={11} aria-hidden="true" />
                </a>
                <a
                  href="https://leetcode.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.maratonaChip}
                >
                  <span>LeetCode Interview</span>
                  <ExternalLink size={11} aria-hidden="true" />
                </a>
                <a
                  href="https://maratona.sbc.org.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.maratonaChip}
                >
                  <span>SBC Maratona</span>
                  <ExternalLink size={11} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hackathons, Bootcamps e Apple Developer Academy */}
      <section
        id="hackathons-bootcamps"
        style={getSectionStyle('hackathons-bootcamps')}
        className={`${styles.sectionBlock} ${journeyStage !== 'all' && sectionStageMap['hackathons-bootcamps']?.stage === journeyStage ? styles.highlightStage : ''}`}
      >
        {renderStageBadge('hackathons-bootcamps')}
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Trophy size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Hackathons Universitários, Bootcamps e Apple Developer Academy</h2>
              <p className={styles.cardSubtitle}>
                Maratonas de desenvolvimento de fim de semana, squads multidisciplinares e capacitação avançada em ecossistema Apple
              </p>
            </div>
          </div>

          <p className={styles.pageDescription} style={{ marginBottom: '1.5rem' }}>
            Hackathons e programas imersivos são os aceleradores mais rápidos de aprendizado prático e portfólio para estudantes de computação da FT. Em vinte e quatro a quarenta e oito horas intensivas, equipes constroem soluções funcionais para desafios reais, estabelecendo contato direto com recrutadores técnicos de grandes empresas.
          </p>

          {/* Subtópico 1: Guia de Hackathons e Squads */}
          <div id="guia-hackathons-squads" style={{ marginTop: '2rem' }}>
            <h3 className={styles.cardTitle} style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>
              {hackathonGuideData.title}
            </h3>
            <p className={styles.cardSubtitle} style={{ marginBottom: '1rem' }}>
              {hackathonGuideData.description}
            </p>

            <div className={styles.squadGrid}>
              {hackathonGuideData.squadRoles.map((item, idx) => (
                <div key={idx} className={styles.squadCard}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <Users size={16} style={{ color: 'var(--ft-green)' }} />
                    <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{item.role}</strong>
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Subtópico 2: Hackathon Itaú Batalha de Agentes */}
          <div id="hackathon-itau-agentes" style={{ marginTop: '2.5rem' }}>
            <div className={styles.skillItem} style={{ borderLeft: '4px solid var(--ft-green)' }}>
              <div className={styles.skillItemHeader}>
                <div>
                  <span className={styles.periodBadge}>Maratona em Destaque</span>
                  <h3 className={styles.skillTitle} style={{ marginTop: '0.25rem' }}>
                    {hackathonGuideData.featuredHackathon.title}
                  </h3>
                </div>
                <a
                  href={hackathonGuideData.featuredHackathon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.companyLink}
                  aria-label="Acessar página do Hackathon Itaú Batalha de Agentes em nova janela"
                >
                  <span>Página Oficial do Evento</span>
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: '0.75rem' }}>
                {hackathonGuideData.featuredHackathon.description}
              </p>
            </div>
          </div>

          {/* Subtópico 3: Apple Developer Academy */}
          <div id="apple-developer-academy" style={{ marginTop: '2.5rem' }}>
            <div className={styles.academyCard}>
              <div className={styles.skillItemHeader}>
                <div>
                  <span className={`${styles.skillBadge} ${styles.green}`}>Residência Tecnológica Internacional</span>
                  <h3 className={styles.skillTitle} style={{ marginTop: '0.35rem' }}>
                    Apple Developer Academy em Campinas
                  </h3>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                    Parceria {appleDeveloperAcademyData.partnership} e {appleDeveloperAcademyData.institution} • {appleDeveloperAcademyData.duration}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a
                    href={appleDeveloperAcademyData.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.companyLink}
                    aria-label="Acessar site oficial da Apple Developer Academy Campinas em nova janela"
                  >
                    <Globe size={13} aria-hidden="true" />
                    <span>Site Oficial</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                  <a
                    href={appleDeveloperAcademyData.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.companyLink}
                    aria-label="Acessar Instagram da Apple Developer Academy Campinas em nova janela"
                  >
                    <Instagram size={13} aria-hidden="true" />
                    <span>Instagram</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </div>
              </div>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: '1rem' }}>
                {appleDeveloperAcademyData.description}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginTop: '1.25rem' }}>
                <div style={{ backgroundColor: 'var(--surface-color)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>
                    Benefícios e Suporte ao Aluno:
                  </strong>
                  <ul style={{ margin: '0 0 0 1.25rem', fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {appleDeveloperAcademyData.benefits.map((b, bIdx) => (
                      <li key={bIdx} style={{ marginBottom: '0.35rem' }}>{b}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ backgroundColor: 'var(--surface-color)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>
                    Competências Desenvolvidas:
                  </strong>
                  <ul style={{ margin: '0 0 0 1.25rem', fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {appleDeveloperAcademyData.skills.map((s, sIdx) => (
                      <li key={sIdx} style={{ marginBottom: '0.35rem' }}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Currículo em LaTeX */}
      <section
        id="curriculo-latex"
        style={getSectionStyle('curriculo-latex')}
        className={`${styles.sectionBlock} ${journeyStage !== 'all' && sectionStageMap['curriculo-latex']?.stage === journeyStage ? styles.highlightStage : ''}`}
      >
        {renderStageBadge('curriculo-latex')}
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
      <section
        id="entrevistas-pitch"
        style={getSectionStyle('entrevistas-pitch')}
        className={`${styles.sectionBlock} ${journeyStage !== 'all' && sectionStageMap['entrevistas-pitch']?.stage === journeyStage ? styles.highlightStage : ''}`}
      >
        {renderStageBadge('entrevistas-pitch')}
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
      <section
        id="portfolio-github"
        style={getSectionStyle('portfolio-github')}
        className={`${styles.sectionBlock} ${journeyStage !== 'all' && sectionStageMap['portfolio-github']?.stage === journeyStage ? styles.highlightStage : ''}`}
      >
        {renderStageBadge('portfolio-github')}
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

            <div className={styles.cvVideoCard}>
              <div>
                <div className={styles.cvVideoHeader}>
                  <span className={styles.cvVideoBadge}>Git e GitHub na Prática</span>
                  <Youtube size={18} color="#dc2626" aria-hidden="true" />
                </div>
                <h3 className={styles.cvVideoTitle}>Fernanda Kipper: Guia Prático de Git e GitHub do Zero</h3>
                <p className={styles.cvVideoDesc}>
                  Aprenda comandos essenciais como commit, branch, merge e pull request na prática para versionar projetos acadêmicos e profissionais.
                </p>
              </div>
              <a
                href="https://www.youtube.com/watch?v=pyM5QLS2h6M"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cvVideoBtn}
                aria-label="Assistir aula de Git e GitHub da Fernanda Kipper no YouTube em nova janela"
              >
                <Youtube size={15} aria-hidden="true" />
                <span>Assistir Aula de Git e GitHub</span>
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* O Ecossistema de Empresas e Modelos de Trabalho */}
      <section
        id="empresas-mercado"
        style={getSectionStyle('empresas-mercado')}
        className={`${styles.sectionBlock} ${journeyStage !== 'all' && sectionStageMap['empresas-mercado']?.stage === journeyStage ? styles.highlightStage : ''}`}
      >
        {renderStageBadge('empresas-mercado')}
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

      {/* Vitrine de Empresas Tech e Mercado versus Pesquisa */}
      <section
        id="empresas-tech-programas"
        style={getSectionStyle('empresas-tech-programas')}
        className={`${styles.sectionBlock} ${journeyStage !== 'all' && sectionStageMap['empresas-tech-programas']?.stage === journeyStage ? styles.highlightStage : ''}`}
      >
        {renderStageBadge('empresas-tech-programas')}
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Building2 size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Vitrine de Empresas Tech e Carreira Corporativa versus Pesquisa</h2>
              <p className={styles.cardSubtitle}>
                Perfis de contratação de referências do setor e análise comparativa entre emprego corporativo e carreira acadêmica
              </p>
            </div>
          </div>

          <p className={styles.pageDescription} style={{ marginBottom: '1.5rem' }}>
            Para além dos modelos gerais de contratação, entender as exigências específicas de empresas que lideram a transformação tecnológica no país permite direcionar seus estudos, projetos de portfólio e decisões de carreira com segurança.
          </p>

          {/* Subtópico 1: Vitrine de Empresas Líderes */}
          <div id="vitrine-empresas-tech" style={{ marginTop: '2rem' }}>
            <h3 className={styles.cardTitle} style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>
              Vitrine de Empresas Líderes em Tecnologia e Seus Programas
            </h3>
            <p className={styles.cardSubtitle} style={{ marginBottom: '1rem' }}>
              Cultura, trilhas de formação, critérios seletivos e canais oficiais de recrutamento
            </p>

            <div className={styles.companyShowcaseGrid}>
              {companiesShowcaseData.map((company) => (
                <div key={company.id} className={styles.companyCard}>
                  <div className={styles.companyCardTop}>
                    <span className={styles.companyTag}>{company.tag}</span>
                    <h4 className={styles.companyName}>{company.name}</h4>
                    <p className={styles.companyDesc}>{company.description}</p>
                  </div>

                  <div className={styles.companyDetailBlock}>
                    <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      Programas e Oportunidades:
                    </strong>
                    <span>{company.programs}</span>
                  </div>

                  <div className={styles.companyDetailBlock}>
                    <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      Perfil Desejado:
                    </strong>
                    <span>{company.hiringProfile}</span>
                  </div>

                  <a
                    href={company.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.companyLink}
                    aria-label={`Acessar portal oficial de carreiras de ${company.name} em nova janela`}
                  >
                    <span>Carreiras {company.name}</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Subtópico 2: Matriz Decisória Mercado vs Pesquisa */}
          <div id="mercado-vs-pesquisa" style={{ marginTop: '2.5rem' }}>
            <h3 className={styles.cardTitle} style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>
              Matriz Decisória: Carreira no Mercado Corporativo versus Pesquisa Acadêmica
            </h3>
            <p className={styles.cardSubtitle} style={{ marginBottom: '1rem' }}>
              Quadro analítico para apoiar a reflexão entre emprego corporativo e pós-graduação estrita
            </p>

            <div className={styles.comparisonTableWrapper}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th>Dimensão Analisada</th>
                    <th>Carreira no Mercado Corporativo</th>
                    <th>Carreira em Pesquisa e Academia</th>
                  </tr>
                </thead>
                <tbody>
                  {marketVsResearchData.map((row, idx) => (
                    <tr key={idx}>
                      <td><strong>{row.criterion}</strong></td>
                      <td>{row.mercado}</td>
                      <td>{row.pesquisa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Empreendedorismo, Inova Unicamp e Desafio Unicamp */}
      <section
        id="empreendedorismo-inova-desafio"
        style={getSectionStyle('empreendedorismo-inova-desafio')}
        className={`${styles.sectionBlock} ${journeyStage !== 'all' && sectionStageMap['empreendedorismo-inova-desafio']?.stage === journeyStage ? styles.highlightStage : ''}`}
      >
        {renderStageBadge('empreendedorismo-inova-desafio')}
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Rocket size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Inovação, Agência Inova e o Desafio Unicamp</h2>
              <p className={styles.cardSubtitle}>
                Modelagem de negócios, patentes protegidas, mentorias com o mercado e o ecossistema de empresas filhas
              </p>
            </div>
          </div>

          <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            A Unicamp é uma das universidades mais empreendedoras da América Latina. Por meio da Agência de Inovação Inova Unicamp, os estudantes têm acesso a programas de incentivo à criação de startups de base tecnológica, proteção de propriedade intelectual e competições com premiações expressivas.
          </p>

          <div className={styles.skillsGrid}>
            <div id="inova-unicamp-hub" className={styles.skillItem}>
              <div className={styles.skillItemHeader}>
                <div className={`${styles.skillIconWrap} ${styles.blue}`}>
                  <Lightbulb size={20} />
                </div>
                <span className={styles.skillBadge}>Inovação</span>
              </div>
              <h3 className={styles.skillTitle}>Agência de Inovação Inova Unicamp</h3>
              <p className={styles.skillDesc}>
                Responsável por gerir as patentes e marcas registradas da universidade, além de conectar pesquisadores ao setor produtivo. A Inova oferece oficinas de propriedade intelectual, suporte para licenciamento de software e programas contínuos de fomento ao empreendedorismo jovem.
              </p>
            </div>

            <div id="desafio-unicamp-edicao" className={styles.skillItem}>
              <div className={styles.skillItemHeader}>
                <div className={`${styles.skillIconWrap} ${styles.green}`}>
                  <Award size={20} />
                </div>
                <span className={`${styles.skillBadge} ${styles.green}`}>Competição</span>
              </div>
              <h3 className={styles.skillTitle}>Competição Desafio Unicamp</h3>
              <p className={styles.skillDesc}>
                Competição anual de modelagem de negócios baseada em tecnologias reais patenteadas pela Unicamp. As equipes recebem capacitação com a metodologia Lean Startup, contam com mentoria direta de executivos seniores do mercado e disputam prêmios financeiros e aceleração em incubadoras.
              </p>
            </div>

            <div id="empresas-filhas-unicamp" className={styles.skillItem}>
              <div className={styles.skillItemHeader}>
                <div className={`${styles.skillIconWrap} ${styles.purple}`}>
                  <Building2 size={20} />
                </div>
                <span className={`${styles.skillBadge} ${styles.purple}`}>Ecossistema</span>
              </div>
              <h3 className={styles.skillTitle}>Rede de Empresas Filhas da Unicamp</h3>
              <p className={styles.skillDesc}>
                Comunidade formada por startups e multinacionais fundadas por alunos, ex-alunos e docentes da universidade, incluindo casos notáveis como CI e T, Movile, iFood e QuintoAndar. Essa rede mantém parceria ativa com a universidade e contrata centenas de estagiários anualmente.
              </p>
            </div>

            <div id="si800-disciplina" className={styles.skillItem}>
              <div className={styles.skillItemHeader}>
                <div className={`${styles.skillIconWrap} ${styles.amber}`}>
                  <FileText size={20} />
                </div>
                <span className={`${styles.skillBadge} ${styles.amber}`}>Currículo FT</span>
              </div>
              <h3 className={styles.skillTitle}>Conexão Curricular com a Disciplina SI800</h3>
              <p className={styles.skillDesc}>
                A disciplina SI800, intitulada Empreendedorismo e Inovação, integra a grade curricular dos cursos de computação da FT. Nela os estudantes desenvolvem protótipos de produtos viáveis e planos de negócios com créditos de extensão curricularizados, conectando a teoria às iniciativas da Inova.
              </p>
            </div>
          </div>

          <div className={styles.roadmapCardsGrid} style={{ marginTop: '1.5rem' }}>
            <div className={styles.roadmapCard}>
              <div className={styles.roadmapCardHeader}>
                <span className={styles.roadmapBadge}>Inovação</span>
                <h3 className={styles.roadmapCardTitle}>Portal Oficial da Inova Unicamp</h3>
                <p className={styles.roadmapCardDesc}>
                  Acompanhe editais de inovação, vitrine de tecnologias licenciáveis, programas de mentoria e notícias do ecossistema empreendedor.
                </p>
              </div>
              <div className={styles.roadmapCardFooter}>
                <a
                  href="https://www.inova.unicamp.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardInlineLink}
                >
                  <span>Acessar Inova Unicamp</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className={styles.roadmapCard}>
              <div className={styles.roadmapCardHeader}>
                <span className={styles.roadmapBadge}>Competição</span>
                <h3 className={styles.roadmapCardTitle}>Edital do Desafio Unicamp</h3>
                <p className={styles.roadmapCardDesc}>
                  Regulamento completo da competição de modelagem de negócios, datas de formação de equipes, catálogo de tecnologias e prêmios.
                </p>
              </div>
              <div className={styles.roadmapCardFooter}>
                <a
                  href="https://www.inova.unicamp.br/desafio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardInlineLink}
                >
                  <span>Ver Desafio Unicamp</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estudo de Idiomas Estrangeiros em Limeira e Barão Geraldo */}
      <section
        id="idiomas-confucio-cel"
        style={getSectionStyle('idiomas-confucio-cel')}
        className={`${styles.sectionBlock} ${journeyStage !== 'all' && sectionStageMap['idiomas-confucio-cel']?.stage === journeyStage ? styles.highlightStage : ''}`}
      >
        {renderStageBadge('idiomas-confucio-cel')}
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Globe size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Estudo de Línguas Estrangeiras em Limeira e Barão Geraldo</h2>
              <p className={styles.cardSubtitle}>
                Acesso altamente acessível a cursos de Mandarim no Instituto Confúcio e matérias gratuitas de idiomas no CEL da Unicamp
              </p>
            </div>
          </div>

          <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            O domínio de idiomas é um dos maiores diferenciais competitivos para carreiras globais de tecnologia e intercâmbio acadêmico. Como estudante da Unicamp, você conta com oportunidades presenciais e online de alto nível com subsídio institucional integral ou taxas muito reduzidas.
          </p>

          <div className={styles.skillsGrid}>
            <div id="instituto-confucio-mandarim" className={styles.skillItem}>
              <div className={styles.skillItemHeader}>
                <div className={`${styles.skillIconWrap} ${styles.blue}`}>
                  <Languages size={20} />
                </div>
                <span className={styles.skillBadge}>Mandarim</span>
              </div>
              <h3 className={styles.skillTitle}>Instituto Confúcio na Unicamp: Mandarim</h3>
              <p className={styles.skillDesc}>
                Fruto de convênio oficial com o Ministério da Educação da China e a Universidade Jiaotong de Pequim. Oferece turmas de Mandarim lecionadas por professores nativos com material didático internacional. Os alunos da Unicamp contam com valores de matrícula extremamente acessíveis e descontos institucionais.
              </p>
            </div>

            <div id="cel-idiomas-gratuitos" className={styles.skillItem}>
              <div className={styles.skillItemHeader}>
                <div className={`${styles.skillIconWrap} ${styles.green}`}>
                  <FileText size={20} />
                </div>
                <span className={`${styles.skillBadge} ${styles.green}`}>Gratuito</span>
              </div>
              <h3 className={styles.skillTitle}>Centro de Ensino de Línguas CEL Unicamp</h3>
              <p className={styles.skillDesc}>
                O CEL oferece disciplinas regulares totalmente gratuitas de Alemão, Espanhol, Francês, Hebraico, Inglês, Italiano, Japonês, Russo e Português Língua Adicional. As matérias são cursadas como disciplinas eletivas livres com créditos contabilizados no histórico escolar, havendo turmas ofertadas em Barão Geraldo e nos campi de Limeira, além de provas semestrais de nivelamento.
              </p>
            </div>

            <div id="hsk-bolsas-china" className={styles.skillItem}>
              <div className={styles.skillItemHeader}>
                <div className={`${styles.skillIconWrap} ${styles.purple}`}>
                  <Award size={20} />
                </div>
                <span className={`${styles.skillBadge} ${styles.purple}`}>Bolsas e HSK</span>
              </div>
              <h3 className={styles.skillTitle}>Certificação HSK e Bolsas de Estudo na China</h3>
              <p className={styles.skillDesc}>
                O Instituto Confúcio é centro aplicador oficial dos testes de proficiência HSK e HSKK. Estudantes que se destacam nas aulas podem concorrer a bolsas completas de intercâmbio, incluindo programas de imersão de verão ou semestres letivos em universidades chinesas de ponta.
              </p>
            </div>
          </div>

          <div className={styles.roadmapCardsGrid} style={{ marginTop: '1.5rem' }}>
            <div className={styles.roadmapCard}>
              <div className={styles.roadmapCardHeader}>
                <span className={styles.roadmapBadge}>Mandarim</span>
                <h3 className={styles.roadmapCardTitle}>Portal do Instituto Confúcio Unicamp</h3>
                <p className={styles.roadmapCardDesc}>
                  Consulte turmas abertas, níveis de Mandarim, cronograma de matrícula com desconto estudantil e calendário dos exames HSK.
                </p>
              </div>
              <div className={styles.roadmapCardFooter}>
                <a
                  href="https://www.institutoconfucio.unicamp.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardInlineLink}
                >
                  <span>Acessar Instituto Confúcio</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className={styles.roadmapCard}>
              <div className={styles.roadmapCardHeader}>
                <span className={styles.roadmapBadge}>Línguas DAC</span>
                <h3 className={styles.roadmapCardTitle}>Centro de Ensino de Línguas CEL</h3>
                <p className={styles.roadmapCardDesc}>
                  Orientações para testes de nivelamento, oferta semestral de disciplinas de línguas e aproveitamento de créditos eletivos na DAC.
                </p>
              </div>
              <div className={styles.roadmapCardFooter}>
                <a
                  href="https://www.cel.unicamp.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardInlineLink}
                >
                  <span>Acessar Portal do CEL</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className={styles.roadmapCard}>
              <div className={styles.roadmapCardHeader}>
                <span className={styles.roadmapBadge}>Disciplinas DAC</span>
                <h3 className={styles.roadmapCardTitle}>Catálogo de Disciplinas CEL</h3>
                <p className={styles.roadmapCardDesc}>
                  Consulte a grade horária oficial das turmas de línguas para planejar sua matrícula de eletivas livres via DAC.
                </p>
              </div>
              <div className={styles.roadmapCardFooter}>
                <a
                  href="https://www.cel.unicamp.br/disciplinas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardInlineLink}
                >
                  <span>Disciplinas e Horários</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className={styles.roadmapCard}>
              <div className={styles.roadmapCardHeader}>
                <span className={styles.roadmapBadge}>Instagram</span>
                <h3 className={styles.roadmapCardTitle}>Instagram Instituto Confúcio</h3>
                <p className={styles.roadmapCardDesc}>
                  Avisos rápidos sobre abertura de turmas presenciais e virtuais, eventos culturais, workshops de caligrafia e oportunidades na China.
                </p>
              </div>
              <div className={styles.roadmapCardFooter}>
                <a
                  href="https://www.instagram.com/confucio.unicamp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardInlineLink}
                >
                  <span>Ver @confucio.unicamp</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trilhas e Computação em Nuvem */}
      <section
        id="computacao-nuvem"
        style={getSectionStyle('computacao-nuvem')}
        className={`${styles.sectionBlock} ${journeyStage !== 'all' && sectionStageMap['computacao-nuvem']?.stage === journeyStage ? styles.highlightStage : ''}`}
      >
        {renderStageBadge('computacao-nuvem')}
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

          {/* AWS Builder Center e Benefícios Estudantis da Comunidade AWS */}
          <div className={styles.companyTipsCallout} style={{ marginTop: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div>
                <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>AWS Builder Center para Estudantes da Unicamp</h4>
                <p style={{ margin: '0.25rem 0 0', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Doze meses de acesso ao AWS Skill Builder Pro, créditos progressivos na nuvem e vouchers integrais de certificação
                </p>
              </div>
              <a
                href="https://bit.ly/4w1pxMi"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.roadmapActionButton}
                aria-label="Acessar cadastro do AWS Builder Center para estudantes em nova janela"
              >
                <span>Acessar AWS Builder Center</span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>

            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
              Ao se cadastrar na plataforma como estudante da Unicamp, você obtém aprovação sem necessidade de informar cartão de crédito ou dados bancários. O programa integra a comunidade oficial da AWS e disponibiliza uma trilha gamificada com vinte e um badges de engajamento técnico:
            </p>

            <div className={styles.cloudGrid}>
              <div className={styles.cloudCard}>
                <h3 className={styles.cloudTitle}>Doze Meses de Skill Builder Pro</h3>
                <p className={styles.cloudText}>
                  Acesso liberado a cursos práticos, laboratórios autoguiados e simulados preparatórios oficiais da Amazon Web Services para aprimorar sua formação técnica.
                </p>
              </div>

              <div className={styles.cloudCard}>
                <h3 className={styles.cloudTitle}>Créditos Progressivos na Nuvem</h3>
                <p className={styles.cloudText}>
                  Ao conquistar sete badges por meio de publicações e comentários em Spaces, você recebe dez dólares em créditos na AWS. Ao atingir catorze badges, ganha mais vinte dólares adicionais.
                </p>
              </div>

              <div className={styles.cloudCard}>
                <h3 className={styles.cloudTitle}>Voucher Gratuito para Exames</h3>
                <p className={styles.cloudText}>
                  Ao completar os vinte e um badges de engajamento, você ganha um voucher integral para realizar certificações de nível foundational em computação em nuvem ou inteligência artificial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roteiros Visuais e Ideias de Projetos no Roadmap.sh */}
      <section
        id="roadmap-sh"
        style={getSectionStyle('roadmap-sh')}
        className={`${styles.sectionBlock} ${journeyStage !== 'all' && sectionStageMap['roadmap-sh']?.stage === journeyStage ? styles.highlightStage : ''}`}
      >
        {renderStageBadge('roadmap-sh')}
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
      <section
        id="trilhas-aprendizado"
        style={getSectionStyle('trilhas-aprendizado')}
        className={`${styles.sectionBlock} ${journeyStage !== 'all' && sectionStageMap['trilhas-aprendizado']?.stage === journeyStage ? styles.highlightStage : ''}`}
      >
        {renderStageBadge('trilhas-aprendizado')}
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
                Ciência foca em modelagem estatística, hipóteses e algoritmos preditivos. Engenharia foca em pipelines confiáveis e ingestão escalável. Participe da Liga de Ciência de Dados da Unicamp Liga DS para atuar em projetos práticos com dados reais e aproveite a especialização Michigan gratuita via Coursera Unicamp.
              </p>
              <div className={styles.skillTagsRow}>
                <span className={styles.skillTag}>Python</span>
                <span className={styles.skillTag}>Pandas</span>
                <span className={styles.skillTag}>Liga DS</span>
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
                  href="https://www.coursera.org/partners/unicamp"
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
                <a
                  href="https://www.instagram.com/ligadsunicamp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.trackActionBtn} ${styles.purple}`}
                  aria-label="Acessar Instagram da Liga de Ciencia de Dados da Unicamp em nova janela"
                >
                  <span>Liga DS Unicamp</span>
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
                Em vez de acumular certificados puramente teóricos, implemente soluções com código público no GitHub ou ingresse em projetos de desenvolvimento na Atria Jr., empresa júnior da FT que constrói software e consultoria para clientes reais, gerando comprovação prática no currículo.
              </p>
              <div className={styles.skillTagsRow}>
                <span className={styles.skillTag}>GitHub</span>
                <span className={styles.skillTag}>Atria Jr. FT</span>
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
                <a
                  href="https://atriajr.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.trackActionBtn} ${styles.green}`}
                  aria-label="Acessar portal oficial da Atria Jr em nova janela"
                >
                  <span>Projetos Atria Jr.</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps, Cloud e Cibersegurança com Recomendação da LICS */}
      <section
        id="devops-ciberseguranca"
        style={getSectionStyle('devops-ciberseguranca')}
        className={`${styles.sectionBlock} ${journeyStage !== 'all' && sectionStageMap['devops-ciberseguranca']?.stage === journeyStage ? styles.highlightStage : ''}`}
      >
        {renderStageBadge('devops-ciberseguranca')}
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

      {/* Trilha de Cibersegurança e Hacking Ético com Curadoria de Brenno M. */}
      <section
        id="ciberseguranca-hacking-etico"
        style={getSectionStyle('ciberseguranca-hacking-etico')}
        className={`${styles.sectionBlock} ${journeyStage !== 'all' && sectionStageMap['ciberseguranca-hacking-etico']?.stage === journeyStage ? styles.highlightStage : ''}`}
      >
        {renderStageBadge('ciberseguranca-hacking-etico')}
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Shield size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Trilha de Cibersegurança e Hacking Ético: Roadmap e Curadoria Editorial</h2>
              <p className={styles.cardSubtitle}>
                Fundamentos indispensáveis de computação, especializações práticas e centros de excelência recomendados
              </p>
            </div>
          </div>

          {/* Card de Honra Editorial ao Brenno M. */}
          <div className={styles.brennoHonorCard}>
            <div className={styles.brennoHeader}>
              <span className={styles.brennoBadge}>Curadoria Especializada e Agradecimento</span>
              <h3 className={styles.brennoTitle}>Agradecimento Editorial ao Especialista Brenno M.</h3>
            </div>
            <p className={styles.brennoDesc}>
              A estruturação desta trilha foi construída a partir da curadoria pública e dos artigos de referência técnica de Brenno M., profissional de destaque em segurança ofensiva e pesquisa de vulnerabilidades. Seus artigos oferecem uma visão pragmática para quem deseja ingressar no universo hacker sem cair no ruído de promessas milagrosas e marketing superficial de cursos.
            </p>
            <div className={styles.brennoLinksRow}>
              <a
                href="https://www.linkedin.com/in/brennocm/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.trackActionBtn} ${styles.green}`}
              >
                <Linkedin size={14} />
                <span>Perfil de Brenno M. no LinkedIn</span>
                <ExternalLink size={12} />
              </a>
              <a
                href="https://brennocm.github.io/articles/pt-br/tips/hacking.html"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.trackActionBtn}
              >
                <span>Artigo: Quero ser hacker, e agora?</span>
                <ExternalLink size={12} />
              </a>
              <a
                href="https://brennocm.github.io/articles/pt-br/tips/suggested-courses.html"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.trackActionBtn}
              >
                <span>Artigo: Cursos e Treinamentos Recomendados</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Pilares Fundamentais */}
          <h3 className={styles.channelsSubheading}>Pilares Fundamentais de Ciência da Computação</h3>
          <p className={styles.cardSubtitle} style={{ marginBottom: '1rem' }}>
            Não existe atalho para cibersegurança sem sólidos alicerces técnicos. Antes de executar qualquer ferramenta pronta, o estudante deve compreender a fundo os mecanismos de computação:
          </p>

          <div className={styles.skillsGrid}>
            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Organização e Arquitetura de Computadores</h3>
              <p className={styles.skillDesc}>
                Funcionamento dos componentes da CPU, registradores gerais, ponteiros de instrução, registradores de pilha, fluxo de execução, barramentos de memória volátil RAM e diferenças entre arquiteturas x86 e ARM.
              </p>
            </div>

            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Sistemas Operacionais e Chamadas de Kernel</h3>
              <p className={styles.skillDesc}>
                Gerenciamento de processos, escalonador, memória virtual, privilégios de usuário e anéis de execução de kernel versus userland em ambientes operacionais Linux e Windows.
              </p>
            </div>

            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Redes de Computadores e Protocolos</h3>
              <p className={styles.skillDesc}>
                Modelo de camadas, arquitetura TCP IP, protocolos fundamentais como DNS, DHCP, HTTP e SSH, roteamento, inspeção profunda de pacotes com Wireshark e segmentação defensiva com firewalls.
              </p>
            </div>

            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Programação e Estruturas de Dados em C</h3>
              <p className={styles.skillDesc}>
                Controle direto e manual de memória, aritmética de ponteiros, alocação dinâmica com malloc e free, além da identificação de vulnerabilidades clássicas de corrupção de memória como estouro de buffer.
              </p>
            </div>

            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Princípios de Segurança da Informação</h3>
              <p className={styles.skillDesc}>
                Tríade fundamental de confidencialidade, integridade e disponibilidade, modelos de controle de acesso discricionário e mandatório e criptografia básica simétrica e assimétrica.
              </p>
            </div>
          </div>

          {/* Especializações Técnicas */}
          <h3 className={styles.channelsSubheading} style={{ marginTop: '2rem' }}>Especializações Técnicas e Práticas no Mercado</h3>
          <div className={styles.skillsGrid}>
            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Web Hacking e Segurança de Aplicações</h3>
              <p className={styles.skillDesc}>
                Desenvolvimento web, métodos e cabeçalhos HTTP, APIs REST e bancos de dados relacionais e não relacionais. Estudo profundo do Top 10 OWASP com exploração e mitigação de injeções SQL, Cross-Site Scripting, SSRF, IDOR e falhas de controle de acesso. Certificações de mercado recomendadas incluem eWPT, OSWE e BSCP da PortSwigger.
              </p>
              <div className={styles.trackActions}>
                <a
                  href="https://portswigger.net/web-security"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.trackActionBtn}
                >
                  <span>PortSwigger Academy</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Infrastructure Hacking e Active Directory</h3>
              <p className={styles.skillDesc}>
                Segurança de redes corporativas centradas em ambientes de domínio Windows Server. Enumeração de florestas Active Directory, ataques contra tickets Kerberos como AS-REP Roasting e Kerberoasting, delegações irrestritas, pós-exploração e movimentação lateral. Certificações de referência incluem OSCP, CRTO e PNPT.
              </p>
              <div className={styles.trackActions}>
                <a
                  href="https://www.offsec.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.trackActionBtn}
                >
                  <span>OffSec Treinamentos</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Mobile Hacking e Engenharia Reversa</h3>
              <p className={styles.skillDesc}>
                Arquitetura do sistema Android, ciclo de vida de componentes como Activities, Services e Broadcast Receivers. Descompilação de pacotes APK com Jadx e Ghidra, bypass de verificações de root e SSL Pinning via hooking dinâmico com Frida e Objection.
              </p>
            </div>
          </div>

          {/* Curadoria de Centros de Treinamento */}
          <h3 className={styles.channelsSubheading} style={{ marginTop: '2rem' }}>Curadoria de Centros de Treinamento sem Ruído Comercial</h3>
          <p className={styles.cardSubtitle} style={{ marginBottom: '1rem' }}>
            Para fugir de cursos superficiais e promessas irreais de formação em poucas semanas, Brenno M. selecionou instituições nacionais e internacionais reconhecidas pela comunidade profissional:
          </p>

          <div className={styles.skillsGrid}>
            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Instituições e Academias Brasileiras</h3>
              <p className={styles.skillDesc}>
                Centros nacionais com instrutores atuantes e laboratórios práticos: Desec Security com forte foco em testes de invasão e infraestrutura; Sec4US com cursos avançados em perícia forense, análise de malware e defesa; GoHacking com treinamentos práticos de pentest corporativo. Outras entidades idôneas incluem CECYBER, ACADITI, Clavis Segurança da Informação e Daryus.
              </p>
              <div className={styles.trackActions}>
                <a
                  href="https://desecsecurity.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.trackActionBtn}
                >
                  <span>Desec Security</span>
                  <ExternalLink size={12} />
                </a>
                <a
                  href="https://sec4us.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.trackActionBtn}
                >
                  <span>Sec4US</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Instituições e Laboratórios Internacionais</h3>
              <p className={styles.skillDesc}>
                Plataformas de classe global: OffSec para segurança ofensiva com a certificação prática OSCP; PortSwigger Web Security Academy com laboratórios gratuitos de OWASP; TCM Security e INE Security com treinamentos acessíveis e práticos; Hack The Box Academy e TryHackMe com ambientes gamificados de máquinas virtuais; PentesterLab e SANS Institute para formações avançadas de alta especialização.
              </p>
              <div className={styles.trackActions}>
                <a
                  href="https://academy.hackthebox.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.trackActionBtn}
                >
                  <span>Hack The Box</span>
                  <ExternalLink size={12} />
                </a>
                <a
                  href="https://tryhackme.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.trackActionBtn}
                >
                  <span>TryHackMe</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canais Recomendados */}
      <section
        id="canais-recomendados"
        style={getSectionStyle('canais-recomendados')}
        className={`${styles.sectionBlock} ${journeyStage !== 'all' && sectionStageMap['canais-recomendados']?.stage === journeyStage ? styles.highlightStage : ''}`}
      >
        {renderStageBadge('canais-recomendados')}
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

      {journeyStage !== 'all' && secondarySections.length > 0 && (
        <SecondarySectionsToggle
          isOpen={isSecondaryOpen}
          onToggle={() => setIsSecondaryOpen(!isSecondaryOpen)}
          count={secondarySections.length}
          title="Demais Tópicos de Carreira"
          subtitle="Conteúdos profissionais voltados para outros momentos da formação"
        />
      )}
        </div>
      </div>
    </div>
  );
}
