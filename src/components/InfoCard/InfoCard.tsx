'use client';

import React, { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './InfoCard.module.scss';

type HeadingLevel = 'h2' | 'h3' | 'h4' | 'h5';

interface InfoCardProps {
  title: string;
  body: React.ReactNode;
  headingLevel?: HeadingLevel;
  icon?: React.ReactNode;
  detail?: React.ReactNode;
  detailLabel?: string;
}

export function InfoCard({
  title,
  body,
  headingLevel = 'h3',
  icon,
  detail,
  detailLabel = 'Ver mais detalhes',
}: InfoCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const detailId = useId();
  const Heading = headingLevel;

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        {icon ? (
          <span className={styles.icon} aria-hidden="true">
            {icon}
          </span>
        ) : null}
        <Heading className={styles.title}>{title}</Heading>
      </div>

      <div className={styles.body}>{body}</div>

      {detail ? (
        <div className={styles.detailWrapper}>
          <button
            type="button"
            className={styles.detailToggle}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls={detailId}
          >
            <span>{detailLabel}</span>
            <ChevronDown
              size={18}
              className={`${styles.chevron} ${isOpen ? styles.rotated : ''}`}
              aria-hidden="true"
            />
          </button>
          <div
            id={detailId}
            className={styles.detail}
            hidden={!isOpen}
          >
            {detail}
          </div>
        </div>
      ) : null}
    </article>
  );
}
