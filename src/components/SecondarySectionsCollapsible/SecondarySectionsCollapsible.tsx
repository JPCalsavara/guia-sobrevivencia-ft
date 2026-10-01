'use client';

import React, { useState } from 'react';
import { ChevronDown, Layers } from 'lucide-react';
import styles from './SecondarySectionsCollapsible.module.scss';

interface SecondarySectionsCollapsibleProps {
  title?: string;
  subtitle?: string;
  count?: number;
  children: React.ReactNode;
}

export function SecondarySectionsCollapsible({
  title = 'Demais Tópicos da Graduação',
  subtitle = 'Conteúdos complementares e assuntos voltados para outros momentos do curso',
  count,
  children,
}: SecondarySectionsCollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const checkHash = () => {
      if (typeof window === 'undefined') return;
      const hash = window.location.hash.replace('#', '');
      if (hash && contentRef.current?.querySelector(`#${hash}`)) {
        setIsOpen(true);
      }
    };

    window.addEventListener('hashchange', checkHash);
    checkHash();

    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={styles.triggerCard}
        aria-expanded={isOpen}
      >
        <div className={styles.leftContent}>
          <div className={styles.iconBadge}>
            <Layers size={20} aria-hidden="true" />
          </div>
          <div className={styles.titleArea}>
            <h3 className={styles.title}>
              {title}
              {count !== undefined ? ` [${count} seções]` : ''}
            </h3>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
        </div>

        <div className={styles.rightAction}>
          <span className={styles.actionLabel}>
            {isOpen ? 'Ocultar Seções' : 'Mostrar Seções'}
          </span>
          <ChevronDown
            size={18}
            className={`${styles.chevron} ${isOpen ? styles.rotated : ''}`}
            aria-hidden="true"
          />
        </div>
      </button>

      <div
        ref={contentRef}
        className={styles.collapsibleContent}
        style={{ display: isOpen ? 'flex' : 'none' }}
      >
        {children}
      </div>
    </div>
  );
}
