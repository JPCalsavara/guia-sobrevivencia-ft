'use client';

import React from 'react';
import { Compass, GraduationCap, TrendingUp, Award } from 'lucide-react';
import styles from './JourneyFilter.module.scss';

export type JourneyStage = 'all' | 'calouro' | 'meio' | 'formando';

interface JourneyFilterProps {
  currentStage: JourneyStage;
  onSelectStage: (stage: JourneyStage) => void;
  pageContext: 'academico' | 'carreira';
}

interface StageOption {
  key: JourneyStage;
  label: string;
  badge: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>;
}

const stages: StageOption[] = [
  {
    key: 'all',
    label: 'Visão Geral',
    badge: 'Todos os Semestres',
    description: 'Acesse o conteúdo integral sem filtros de momento',
    icon: Compass,
  },
  {
    key: 'calouro',
    label: 'Calouro',
    badge: '1º e 2º Semestres',
    description: 'Matrícula, adaptação, cálculo e monitorias de apoio',
    icon: GraduationCap,
  },
  {
    key: 'meio',
    label: 'Meio de Curso',
    badge: '3º ao 6º Semestre',
    description: 'Iniciação científica, intercâmbio e certificações',
    icon: TrendingUp,
  },
  {
    key: 'formando',
    label: 'Formando',
    badge: '7º e 8º Semestres',
    description: 'Estágio obrigatório, horas complementares e TCC',
    icon: Award,
  },
];

export function JourneyFilter({ currentStage, onSelectStage, pageContext }: JourneyFilterProps) {
  return (
    <section className={styles.journeyContainer} aria-label="Seletor de momento na graduação">
      <div className={styles.journeyHeader}>
        <span className={styles.journeyTag}>Trilha por Momento Acadêmico</span>
        <h2 className={styles.journeyTitle}>Qual é a sua fase atual na Faculdade de Tecnologia?</h2>
        <p className={styles.journeySubtitle}>
          {pageContext === 'academico'
            ? 'Selecione sua etapa para destacar os procedimentos acadêmicos, monitorias e oportunidades mais relevantes para o seu semestre.'
            : 'Selecione sua etapa para direcionar seu currículo, estágios, certificações na nuvem e preparação profissional.'}
        </p>
      </div>

      <div className={styles.stageGrid} role="group" aria-label="Opções de momento da graduação">
        {stages.map((stage) => {
          const Icon = stage.icon;
          const isActive = currentStage === stage.key;

          return (
            <button
              key={stage.key}
              type="button"
              onClick={() => onSelectStage(stage.key)}
              className={`${styles.stageCard} ${isActive ? styles.stageActive : ''}`}
              aria-pressed={isActive}
            >
              <div className={styles.cardTop}>
                <div className={`${styles.iconWrap} ${isActive ? styles.iconWrapActive : ''}`}>
                  <Icon size={18} aria-hidden="true" />
                </div>
                <span className={styles.stageBadge}>{stage.badge}</span>
              </div>

              <span className={styles.stageLabel}>{stage.label}</span>
              <span className={styles.stageDesc}>{stage.description}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
