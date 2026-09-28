'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Cpu,
  MapPin,
  ArrowRight,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Compass,
  FileCode2,
  Users
} from 'lucide-react';
import styles from './page.module.scss';

export default function HomePage() {
  const hubPillars = [
    {
      id: 'academico',
      title: 'Estrutura Academica e Regras da DAC',
      subtitle: 'BSI versus TADS, Coeficientes CR e CP, Grade DAC Online e Estrategia de Formatura',
      description: 'Entenda os limites de integralizacao, o impacto do CR na disputa por turmas noturnas e os cinco requisitos obrigatorios para colar grau.',
      href: '/academico',
      icon: BookOpen,
      badge: 'Academico',
      color: 'blue',
    },
    {
      id: 'carreira',
      title: 'Carreira, Estagio e Curriculo em LaTeX',
      subtitle: 'Sazonalidade de Processos Seletivos, Template para Overleaf e Trilhas Tecnologicas',
      description: 'Prepare seu curriculo de pagina unica otimizado para sistemas de triagem, confira o calendario de contratacoes e acesse vouchers de nuvem.',
      href: '/carreira',
      icon: Briefcase,
      badge: 'Carreira',
      color: 'emerald',
    },
    {
      id: 'estudos-ia',
      title: 'Inteligencia Artificial nos Estudos e Codigo',
      subtitle: 'Extracao de Planos de Aula, Google Gemini, NotebookLM e Metodo Feynman',
      description: 'Utilize prompts estruturados para converter ementas em cronogramas de estudo e domine a transicao de chatbots para agentes autonomos.',
      href: '/estudos-ia',
      icon: Cpu,
      badge: 'Metodologia',
      color: 'purple',
    },
    {
      id: 'campus',
      title: 'Campus, Espacos e Convivencia em Limeira',
      subtitle: 'Reserva e Alocacao de Salas na FT, Bandejao, Circular e Organizacoes Estudantis',
      description: 'Consulte ocupacao de salas na intranet, descubra como justificar espacos maiores e conheca as entidades estudantis e servicos de transporte.',
      href: '/campus',
      icon: MapPin,
      badge: 'Vida no Campus',
      color: 'red',
    },
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.heroContent}
        >
          <div className={styles.heroBadge}>
            <Sparkles size={16} />
            <span>Guia de Orientacao para Ingressantes e Veteranos</span>
          </div>

          <h1 className={styles.heroTitle}>
            Tudo o que voce precisa saber para construir sua jornada na Faculdade de Tecnologia da Unicamp
          </h1>

          <p className={styles.heroDescription}>
            Um guia direto e estrategico sobre normas academicas da DAC, conciliacao de estagios, utilizacao pratica de ferramentas de inteligencia artificial e integracao a comunidade da FT em Limeira.
          </p>

          <div className={styles.heroActions}>
            <Link href="/academico" className={styles.primaryButton}>
              <span>Iniciar pelo Guia Academico</span>
              <ArrowRight size={18} />
            </Link>

            <Link href="/campus" className={styles.secondaryButton}>
              <span>Explorar Espacos e Entidades</span>
              <Users size={18} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Manifesto e Proposito */}
      <section className={styles.manifestoSection}>
        <div className={styles.manifestoCard}>
          <div className={styles.manifestoIcon}>
            <Compass size={28} />
          </div>
          <div className={styles.manifestoText}>
            <h2 className={styles.manifestoTitle}>O Proposito Deste Portal</h2>
            <p className={styles.manifestoParagraph}>
              O ingresso na universidade publica envolve desafios que vao muito alem da sala de aula. Regras burocraticas dispersas, falta de clareza sobre turnos e estagios e a dificuldade de organizar o tempo costumam gerar ansiedade nos primeiros semestres. Este portal foi criado para reunir as informacoes essenciais em um unico local, permitindo que cada estudante tome decisoes conscientes sobre sua formacao e sua carreira desde o primeiro dia.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Pilares Principais */}
      <section className={styles.pillarsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Areas Tematicas do Guia</h2>
          <p className={styles.sectionSubtitle}>
            Selecione uma das secoes abaixo para acessar orientacoes aprofundadas, tabelas e ferramentas
          </p>
        </div>

        <div className={styles.pillarsGrid}>
          {hubPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={styles.pillarCard}
              >
                <div className={styles.pillarHeader}>
                  <span className={`${styles.pillarBadge} ${styles[pillar.color]}`}>
                    {pillar.badge}
                  </span>
                  <div className={styles.pillarIconBox}>
                    <Icon size={22} />
                  </div>
                </div>

                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <h4 className={styles.pillarSub}>{pillar.subtitle}</h4>
                <p className={styles.pillarDesc}>{pillar.description}</p>

                <Link href={pillar.href} className={styles.pillarLink}>
                  <span>Acessar secao completa</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Recursos e Acesso Rapido */}
      <section className={styles.quickAccessSection}>
        <div className={styles.quickCard}>
          <div className={styles.quickHeader}>
            <ShieldCheck size={24} className={styles.quickIcon} />
            <div>
              <h3 className={styles.quickTitle}>Sistemas de Uso Frequente na Unicamp</h3>
              <p className={styles.quickSub}>Acesse diretamente os portais oficiais de gestao e acompanhamento</p>
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
                <span className={styles.quickItemDesc}>Acompanhamento curricular e integralizacao</span>
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
                <span className={styles.quickItemName}>Alocacao de Salas FT</span>
                <span className={styles.quickItemDesc}>Consulta de ocupacao de salas e anfiteatros</span>
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
                <span className={styles.quickItemName}>Cardapio do Bandejao</span>
                <span className={styles.quickItemDesc}>Refeicoes diarias no Campus 1 e Campus 2</span>
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
  );
}
