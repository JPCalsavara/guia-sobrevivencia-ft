'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle, ExternalLink, Award, RotateCcw } from 'lucide-react';
import { graduationChecklistData } from '@/data/academic';
import styles from './ChecklistFormatura.module.scss';

const STORAGE_KEY = 'ft_checklist_graduation';

export function ChecklistFormatura() {
  const [completedItems, setCompletedItems] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setCompletedItems(JSON.parse(saved));
      }
    } catch {
      // Ignora erro de leitura
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const toggleItem = (id: string) => {
    setCompletedItems((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Ignora erro de gravacao
      }
      return next;
    });
  };

  const resetChecklist = () => {
    setCompletedItems([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignora erro
    }
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
            <h3 className={styles.title}>Checklist Interativo de Integralização Curricular</h3>
            <p className={styles.subtitle}>
              Acompanhe os cinco requisitos fundamentais da DAC com progresso salvo no seu navegador
            </p>
          </div>
        </div>

        <div className={styles.headerActions}>
          {count > 0 && (
            <button
              onClick={resetChecklist}
              className={styles.resetButton}
              title="Limpar seleções salvas"
            >
              <RotateCcw size={14} />
              <span>Reiniciar</span>
            </button>
          )}

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
      </div>

        <div className={styles.progressArea}>
          <div className={styles.progressText}>
            <span className={styles.progressLabel}>Status do seu progresso</span>
            <span className={styles.progressCount}>{count} de {total} requisitos cumpridos, {percentage}%</span>
          </div>
          <div
            className={styles.progressBar}
            role="progressbar"
            aria-valuenow={percentage}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Progresso de integralização curricular"
          >
            <div className={styles.progressFill} style={{ width: `${percentage}%` }} />
          </div>
        </div>

        <div className={styles.list} role="group" aria-label="Requisitos de integralização curricular">
          {graduationChecklistData.map((item) => {
            const isDone = completedItems.includes(item.id);
            return (
              <button
                key={item.id}
                type="button"
                role="checkbox"
                aria-checked={isDone}
                onClick={() => toggleItem(item.id)}
                className={`${styles.item} ${isDone ? styles.itemDone : ''}`}
                aria-label={`${item.title}. ${item.description}`}
              >
                <div className={styles.checkButton} aria-hidden="true">
                  {isDone ? (
                    <CheckCircle2 size={22} className={styles.checkedIcon} />
                  ) : (
                    <Circle size={22} className={styles.uncheckedIcon} />
                  )}
                </div>

                <div className={styles.itemContent}>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                  <p className={styles.itemDesc}>{item.description}</p>
                  <p className={styles.itemDetail}>{item.detail}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
  );
}
