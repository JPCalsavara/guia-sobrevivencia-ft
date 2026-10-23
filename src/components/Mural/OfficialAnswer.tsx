import React from 'react';
import { BadgeCheck } from 'lucide-react';
import type { MuralAnswer } from '@/data/mural';
import styles from './mural.module.scss';

interface OfficialAnswerProps {
  answer: MuralAnswer;
}

export function OfficialAnswer({ answer }: OfficialAnswerProps) {
  return (
    <div
      className={styles.officialAnswer}
      role="note"
      aria-label="Resposta oficial da gestao do Guia FT"
    >
      <span className={styles.officialBadge}>
        <BadgeCheck size={14} aria-hidden="true" />
        <span>Resposta oficial da gestao</span>
      </span>
      <span className={styles.officialRole}>{answer.authorRole}</span>
      <p className={styles.officialText}>{answer.conteudo}</p>
    </div>
  );
}
