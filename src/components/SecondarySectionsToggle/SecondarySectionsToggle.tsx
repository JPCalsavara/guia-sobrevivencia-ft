'use client';

import React from 'react';
import { ChevronDown, Layers } from 'lucide-react';
import styles from './SecondarySectionsToggle.module.scss';

interface SecondarySectionsToggleProps {
  isOpen: boolean;
  onToggle: () => void;
  count: number;
  title?: string;
  subtitle?: string;
}

export function SecondarySectionsToggle({
  isOpen,
  onToggle,
  count,
  title = 'Demais Tópicos da Graduação',
  subtitle = 'Conteúdos complementares e assuntos voltados para outros momentos do curso',
}: SecondarySectionsToggleProps) {
  return (
    <div className={styles.wrapper} style={{ order: 10 }}>
      <button
        type="button"
        onClick={onToggle}
        className={styles.triggerCard}
        aria-expanded={isOpen}
      >
        <div className={styles.leftContent}>
          <div className={styles.iconBadge}>
            <Layers size={20} aria-hidden="true" />
          </div>
          <div className={styles.titleArea}>
            <h3 className={styles.title}>
              {title} [{count} seções]
            </h3>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
        </div>

        <div className={styles.rightAction}>
          <span className={styles.actionLabel}>
            {isOpen ? 'Ocultar Outros Tópicos' : 'Mostrar Outros Tópicos'}
          </span>
          <ChevronDown
            size={18}
            className={`${styles.chevron} ${isOpen ? styles.rotated : ''}`}
            aria-hidden="true"
          />
        </div>
      </button>
    </div>
  );
}
