'use client';

import React, { useState } from 'react';
import { CheckCircle2, Circle, ExternalLink, Award } from 'lucide-react';
import { graduationChecklistData } from '@/data/academic';
import styles from './ChecklistFormatura.module.scss';

export function ChecklistFormatura() {
  const [completedItems, setCompletedItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setCompletedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const total = graduationChecklistData.length;
  const count = completedItems.length;
  const percentage = Math.round((count / total) * 100);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <Award size={22} className={styles.awardIcon} />
          <div>
            <h3 className={styles.title}>Checklist Interativo de Integralizacao Curricular</h3>
            <p className={styles.subtitle}>
              Acompanhe os cinco requisitos fundamentais exigidos pela DAC para a concessao do diploma
            </p>
          </div>
        </div>

        <a
          href="https://grade.daconline.unicamp.br/login/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.gradeButton}
        >
          <span>Conferir na Grade DAC Online</span>
          <ExternalLink size={14} />
        </a>
      </div>

      <div className={styles.progressArea}>
        <div className={styles.progressText}>
          <span className={styles.progressLabel}>Status do seu progresso</span>
          <span className={styles.progressCount}>{count} de {total} requisitos cumpridos, {percentage}%</span>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${percentage}%` }} />
        </div>
      </div>

      <div className={styles.list}>
        {graduationChecklistData.map((item) => {
          const isDone = completedItems.includes(item.id);
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`${styles.item} ${isDone ? styles.itemDone : ''}`}
            >
              <button
                type="button"
                className={styles.checkButton}
                aria-label={`Alternar estado do requisito ${item.title}`}
              >
                {isDone ? (
                  <CheckCircle2 size={22} className={styles.checkedIcon} />
                ) : (
                  <Circle size={22} className={styles.uncheckedIcon} />
                )}
              </button>

              <div className={styles.itemContent}>
                <h4 className={styles.itemTitle}>{item.title}</h4>
                <p className={styles.itemDesc}>{item.description}</p>
                <p className={styles.itemDetail}>{item.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
