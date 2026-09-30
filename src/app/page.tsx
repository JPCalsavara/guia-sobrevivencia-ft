'use client';

import React from 'react';
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
  ChevronDown
} from 'lucide-react';
import styles from './page.module.scss';

export default function HomePage() {
  const hubPillars = [
    {
      id: 'calouros',
      title: 'Guia do Calouro e Boas-Vindas',
      subtitle: 'Matrícula, RA, Salas de Aula, Bandejão, Circular, Monitorias e Bolsas DEAPE',
      description: 'O passo a passo completo para o novo ingressante: entenda a localização do Campus 1 FT Limeira, confirme sua vaga, acesse o Moodle e aproveite a calourada.',
      href: '/calouros',
      icon: GraduationCap,
      badge: 'Ingressantes',
      color: 'blue',
    },
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
          </div>
        </section>
      </div>
    </div>
  );
}
