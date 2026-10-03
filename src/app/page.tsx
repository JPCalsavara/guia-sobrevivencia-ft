'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Briefcase,
  Cpu,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Compass,
  ExternalLink,
  Users,
  GraduationCap,
  ChevronDown,
  Search,
  Eye,
  Link2,
} from 'lucide-react';
import { useStudentProfile } from '@/contexts/StudentProfileContext';
import styles from './page.module.scss';

export default function HomePage() {
  const hubPillars = [
    {
      id: 'academico',
      title: 'Estrutura Acadêmica e Regras da DAC',
      subtitle: 'BSI versus TADS, Coeficientes CR e CP, Grade DAC Online e Estratégia de Formatura',
      description: 'Entenda os limites de integralização, o impacto do CR na disputa por turmas noturnas e os cinco requisitos obrigatórios para colar grau.',
      href: '/academico',
      icon: BookOpen,
      badge: 'Acadêmico',
      color: 'blue',
    },
    {
      id: 'carreira',
      title: 'Carreira, Estágio e Currículo em LaTeX',
      subtitle: 'Sazonalidade de Processos Seletivos, Template para Overleaf e Trilhas Tecnológicas',
      description: 'Prepare seu currículo de página única otimizado para sistemas de triagem, confira o calendário de contratações e acesse benefícios para estudantes.',
      href: '/carreira',
      icon: Briefcase,
      badge: 'Carreira',
      color: 'emerald',
    },
    {
      id: 'estudos-ia',
      title: 'Inteligência Artificial nos Estudos e Código',
      subtitle: 'Extração de Planos de Aula, Google Gemini, NotebookLM e Método Feynman',
      description: 'Utilize prompts estruturados para converter ementas em cronogramas de estudo e domine a transição de assistentes para agentes autônomos.',
      href: '/estudos-ia',
      icon: Cpu,
      badge: 'Metodologia',
      color: 'blue',
    },
    {
      id: 'campus',
      title: 'Campus, Espaços e Convivência em Limeira',
      subtitle: 'Reserva e Alocação de Salas na FT, Bandejão, Circular e Organizações Estudantis',
      description: 'Consulte ocupação de salas na intranet, descubra como justificar espaços maiores e conheça as entidades estudantis e serviços de transporte.',
      href: '/campus',
      icon: MapPin,
      badge: 'Vida no Campus',
      color: 'emerald',
    },
  ];

  const { profile } = useStudentProfile();
  const [selectedStage, setSelectedStage] = useState<'bixo' | 'cursando' | 'formando'>('bixo');

  useEffect(() => {
    if (profile.stage === 'calouro') {
      setSelectedStage('bixo');
    } else if (profile.stage === 'meio') {
      setSelectedStage('cursando');
    } else if (profile.stage === 'formando') {
      setSelectedStage('formando');
    }
  }, [profile.stage]);

  const stageQuickTracks = {
    bixo: {
      label: 'Bixo: 1º e 2º Semestres',
      description: 'Foco inicial em ambientação, moradia, sobrevivência no ciclo básico e adaptação universitária',
      ctaText: 'Acessar Trilha do Ingressante',
      ctaLink: '/calouros',
      topics: [
        {
          title: 'Onde Morar em Limeira',
          desc: 'Bairros lado FT versus lado FCA, principais avenidas e lista de imobiliárias',
          link: '/calouros#moradia-calouros',
          tag: 'Moradia',
        },
        {
          title: 'Alerta Crítico: Programação 1 Tranca a Grade',
          desc: 'Entenda o efeito cascata da retenção em TI e os plantões semanais de monitoria PAD',
          link: '/academico#alerta-prog1-tranca-tudo',
          tag: 'Ciclo Básico',
        },
        {
          title: 'Transporte e Ônibus Circular Gratuito',
          desc: 'Horários do circular entre FT e FCA e reserva do fretado Linha 84 para Campinas',
          link: '/calouros#transporte-circular',
          tag: 'Transporte',
        },
      ],
    },
    cursando: {
      label: 'Cursando: 3º ao 6º Semestres',
      description: 'Foco em aceleração curricular, monitoria, bolsas de pesquisa e integralização de extensão',
      ctaText: 'Acessar Guia Acadêmico para Cursando',
      ctaLink: '/academico?stage=cursando',
      topics: [
        {
          title: 'Monitoria PAD e Mentoria PMU',
          desc: 'Requisitos para monitoria voluntária ou remunerada e modelo de e-mail pronto para docentes',
          link: '/academico?stage=cursando#monitoria-pad',
          tag: 'Monitoria',
        },
        {
          title: 'Iniciação Científica e Linha do Tempo',
          desc: 'Contato antecipado com orientador no meio do segundo semestre e bolsas PIBIC ou FAPESP',
          link: '/academico?stage=cursando#iniciacao-cientifica',
          tag: 'Pesquisa',
        },
        {
          title: 'Horas Complementares e Extensão Obrigatória',
          desc: 'Cumprimento dos 10% de extensão na grade e prazos para envio de certificados',
          link: '/academico?stage=cursando#horas-extensao',
          tag: 'Extensão',
        },
      ],
    },
    formando: {
      label: 'Formando: 7º e 8º Semestres',
      description: 'Foco em estágio supervisionado, defesa de TCC, colação de grau oficial e formatura',
      ctaText: 'Acessar Guia de Formatura e Carreira',
      ctaLink: '/academico?stage=formando',
      topics: [
        {
          title: 'Checklist de Formatura e 5 Requisitos DAC',
          desc: 'Cem por cento de créditos, aprovação em TCC, estágio, extensão e regularidade no Enade',
          link: '/academico?stage=formando#checklist-formatura',
          tag: 'Integralização',
        },
        {
          title: 'Cerimônia de Formatura e Colação de Grau',
          desc: 'Solenidade oficial pública e gratuita na FT, becas, colação em gabinete e diploma digital',
          link: '/academico?stage=formando#cerimonia-formatura-colacao',
          tag: 'Colação',
        },
        {
          title: 'Sazonalidade de Contratações e Trâmite DEAPE',
          desc: 'Regra de concomitância do estágio remunerado, normas para CLT e feiras de recrutamento',
          link: '/carreira?stage=formando#sazonalidade-estagio',
          tag: 'Carreira',
        },
      ],
    },
  };

  return (
    <div className={styles.container}>
      {/* Hero Section Institucional - Preenche a primeira dobra da tela junto com o Header */}
      <section className={styles.heroSection}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={styles.heroContent}
        >
          <div className={styles.heroBadge}>
            <GraduationCap size={16} />
            <span>Faculdade de Tecnologia da Unicamp, Campus 1 Limeira</span>
          </div>

          <h1 className={styles.heroTitle}>
            Guia do Estudante da Faculdade de Tecnologia
          </h1>

          <p className={styles.heroDescription}>
            Orientações diretas sobre normas acadêmicas da DAC, conciliação de estágios em tecnologia, ferramentas de produtividade para os estudos e integração à vida universitária na FT.
          </p>

          <div className={styles.heroActions}>
            <Link href="/calouros" className={styles.primaryButton}>
              <span>Guia do Calouro e Ingressante</span>
              <ArrowRight size={18} />
            </Link>

            <Link href="/academico" className={styles.secondaryButton}>
              <span>Guia Acadêmico da DAC</span>
              <BookOpen size={18} />
            </Link>

            <a href="#como-usar-o-guia" className={styles.tertiaryButton}>
              <span>Como Navegar e Acessibilidade</span>
              <Compass size={18} />
            </a>
          </div>
        </motion.div>

        <a href="#conteudo-portal" className={styles.scrollIndicator} aria-label="Rolar para explorar o portal">
          <span>Explorar o Guia</span>
          <ChevronDown size={18} className={styles.scrollArrow} />
        </a>
      </section>

      <div id="conteudo-portal">
        {/* Banner Visual com Imagem Real da FT */}
        <section className={styles.campusHighlightSection}>
          <div className={styles.campusHighlightCard}>
            <div className={styles.campusImageWrapper}>
              <Image
                src="/images/biblioteca.png"
                alt="Instalações da Biblioteca da Faculdade de Tecnologia da Unicamp"
                width={540}
                height={320}
                className={styles.campusImage}
              />
            </div>
            <div className={styles.campusHighlightContent}>
              <span className={styles.campusHighlightBadge}>Campus 1 Limeira</span>
              <h2 className={styles.campusHighlightTitle}>
                Tradição, Tecnologia e Sustentabilidade
              </h2>
              <p className={styles.campusHighlightText}>
                A Faculdade de Tecnologia conecta formação acadêmica ao polo tecnológico regional, com laboratórios especializados da TIC, biblioteca setorial com cabines de estudo e integração com empresas de software.
              </p>
              <div className={styles.campusLinks}>
                <Link href="/campus" className={styles.campusTextLink}>
                  <span>Conhecer a infraestrutura de salas e laboratórios</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Guia de Uso do Portal, Acessibilidade e Filtros de Jornada */}
        <section id="como-usar-o-guia" className={styles.guideSection}>
          <div className={styles.guideCard}>
            <div className={styles.guideHeader}>
              <div className={styles.guideBadge}>
                <Compass size={14} aria-hidden="true" />
                <span>Navegação Inteligente e Acessibilidade</span>
              </div>
              <h2 className={styles.guideTitle}>
                Como Navegar no Guia e Recursos Inclusivos
              </h2>
              <p className={styles.guideSubtitle}>
                Aprenda a explorar os conteúdos de acordo com o momento da sua graduação, utilize a busca semântica instantânea e configure as ferramentas de acessibilidade
              </p>
            </div>

            {/* Três Ferramentas do Portal */}
            <div className={styles.resourcesGrid}>
              <div className={styles.resourceCard}>
                <div className={styles.resourceIconBox}>
                  <Search size={20} aria-hidden="true" />
                </div>
                <h3 className={styles.resourceTitle}>Busca Semântica pela Lupa</h3>
                <p className={styles.resourceDesc}>
                  Pressione o atalho Ctrl K ou toque no ícone de lupa no topo para pesquisar códigos de matérias, nomes de professores, siglas da Unicamp e tópicos regimentais com destaque visual imediato.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    const event = new KeyboardEvent('keydown', { key: 'k', ctrlKey: true });
                    window.dispatchEvent(event);
                  }}
                  className={styles.resourceAction}
                  aria-label="Abrir barra de busca instantânea"
                >
                  <span>Testar busca agora</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </button>
              </div>

              <div className={styles.resourceCard}>
                <div className={styles.resourceIconBox}>
                  <Eye size={20} aria-hidden="true" />
                </div>
                <h3 className={styles.resourceTitle}>Acessibilidade Inclusiva WCAG AA</h3>
                <p className={styles.resourceDesc}>
                  Utilize o botão flutuante no canto inferior direito para ativar contraste especial para daltonismo, aumentar a tipografia em degraus e acionar tradução em Libras com o VLibras. O portal é totalmente navegável via tecla Tab.
                </p>
                <span className={styles.resourceAction} style={{ cursor: 'default' }}>
                  <span>Disponível no botão flutuante</span>
                </span>
              </div>

              <div className={styles.resourceCard}>
                <div className={styles.resourceIconBox}>
                  <Link2 size={20} aria-hidden="true" />
                </div>
                <h3 className={styles.resourceTitle}>Central Canônica de Links</h3>
                <p className={styles.resourceDesc}>
                  Acesse em um único ponto os sistemas essenciais: Grade DAC Online, SIGA, cardápio do RU, salas da FT, horários do fretado Linha 84, catálogo do CEL e acervo da Biblioteca SBU.
                </p>
                <Link href="/links" className={styles.resourceAction} aria-label="Acessar o diretório de links úteis">
                  <span>Abrir diretório de links</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Seletor de Jornada Interativo */}
            <div className={styles.stageFilterBox}>
              <h3 className={styles.stageFilterTitle}>
                Explore os Tópicos pelo Momento do seu Curso
              </h3>
              <p className={styles.stageFilterSub}>
                Selecione o seu momento para filtrar prioridades imediatas e acessar os guias internos com visualização customizada
              </p>

              <div className={styles.stageTabList} role="tablist" aria-label="Filtrar tópicos por momento da graduação">
                {(['bixo', 'cursando', 'formando'] as const).map((stage) => (
                  <button
                    key={stage}
                    type="button"
                    role="tab"
                    aria-selected={selectedStage === stage}
                    onClick={() => setSelectedStage(stage)}
                    className={`${styles.stageTabBtn} ${selectedStage === stage ? styles.activeStage : ''}`}
                  >
                    <span>{stageQuickTracks[stage].label}</span>
                  </button>
                ))}
              </div>

              <p className={styles.stageDescription}>
                {stageQuickTracks[selectedStage].description}
              </p>

              <div className={styles.stageTopicsGrid}>
                {stageQuickTracks[selectedStage].topics.map((t, idx) => (
                  <Link key={idx} href={t.link} className={styles.stageTopicCard}>
                    <div>
                      <div className={styles.stageTopicHeader}>
                        <span className={styles.stageTopicTag}>{t.tag}</span>
                      </div>
                      <h4 className={styles.stageTopicTitle}>{t.title}</h4>
                      <p className={styles.stageTopicDesc}>{t.desc}</p>
                    </div>
                    <span className={styles.stageTopicAction}>
                      <span>Acessar tópico</span>
                      <ArrowRight size={14} aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>

              <div className={styles.stageCtaRow}>
                <Link href={stageQuickTracks[selectedStage].ctaLink} className={styles.stageCtaBtn}>
                  <span>{stageQuickTracks[selectedStage].ctaText}</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Manifesto e Propósito */}
        <section className={styles.manifestoSection}>
          <div className={styles.manifestoCard}>
            <div className={styles.manifestoIcon}>
              <Compass size={28} />
            </div>
            <div className={styles.manifestoText}>
              <h2 className={styles.manifestoTitle}>O Propósito Deste Portal</h2>
              <p className={styles.manifestoParagraph}>
                O ingresso na universidade pública exige navegar por normas burocráticas, planejamento de turnos e busca de estágio. Este portal reúne as informações essenciais em um único ponto, permitindo escolhas estratégicas para sua trajetória acadêmica e profissional.
              </p>
            </div>
          </div>
        </section>

        {/* Grid de Pilares Principais */}
        <section className={styles.pillarsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Áreas Temáticas do Guia</h2>
            <p className={styles.sectionSubtitle}>
              Selecione uma das seções abaixo para acessar orientações aprofundadas, tabelas e ferramentas
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            {hubPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className={styles.pillarCard}
                >
                  <div className={styles.pillarHeader}>
                    <span className={`${styles.pillarBadge} ${styles[pillar.color]}`}>
                      {pillar.badge}
                    </span>
                    <div className={styles.pillarIconBox}>
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <h4 className={styles.pillarSub}>{pillar.subtitle}</h4>
                  <p className={styles.pillarDesc}>{pillar.description}</p>

                  <Link href={pillar.href} className={styles.pillarLink}>
                    <span>Acessar seção completa</span>
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Recursos e Acesso Rápido */}
        <section className={styles.quickAccessSection}>
          <div className={styles.quickCard}>
            <div className={styles.quickHeader}>
              <ShieldCheck size={24} className={styles.quickIcon} />
              <div>
                <h3 className={styles.quickTitle}>Sistemas de Uso Frequente na Unicamp</h3>
                <p className={styles.quickSub}>Acesse diretamente os portais oficiais de gestão e acompanhamento</p>
              </div>
            </div>

            <div className={styles.quickGrid}>
              <a
                href="https://grade.daconline.unicamp.br/login/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.quickItem}
              >
                <div className={styles.quickItemContent}>
                  <span className={styles.quickItemName}>Grade DAC Online</span>
                  <span className={styles.quickItemDesc}>Acompanhamento curricular e integralização</span>
                </div>
                <ExternalLink size={16} />
              </a>

              <a
                href="https://sistemas.ft.unicamp.br/salas"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.quickItem}
              >
                <div className={styles.quickItemContent}>
                  <span className={styles.quickItemName}>Alocação de Salas FT</span>
                  <span className={styles.quickItemDesc}>Consulta de ocupação de salas e anfiteatros</span>
                </div>
                <ExternalLink size={16} />
              </a>

              <a
                href="https://sistemas.prefeituralimeira.unicamp.br/RU/view/site/cardapio.php"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.quickItem}
              >
                <div className={styles.quickItemContent}>
                  <span className={styles.quickItemName}>Cardápio do Bandejão</span>
                  <span className={styles.quickItemDesc}>Refeições diárias no Campus 1 e Campus 2</span>
                </div>
                <ExternalLink size={16} />
              </a>

              <a
                href="https://sistemas.prefeituralimeira.unicamp.br/intercamp/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.quickItem}
              >
                <div className={styles.quickItemContent}>
                  <span className={styles.quickItemName}>Reserva Intercamp Linha 84</span>
                  <span className={styles.quickItemDesc}>Fretado gratuito entre Limeira e Campinas</span>
                </div>
                <ExternalLink size={16} />
              </a>
            </div>

            <div className={styles.quickAllLinksRow}>
              <Link href="/links" className={styles.quickAllLinksBtn} aria-label="Ver todos os links e sistemas no diretório completo">
                <span>Ver Todos os Sistemas no Diretório Completo de Links</span>
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
