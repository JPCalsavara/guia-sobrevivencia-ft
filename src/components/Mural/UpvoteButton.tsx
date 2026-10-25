'use client';

import React from 'react';
import { ChevronUp } from 'lucide-react';
import styles from './mural.module.scss';

interface UpvoteButtonProps {
  count: number;
  voted: boolean;
  onToggle: () => void;
}

export function UpvoteButton({ count, voted, onToggle }: UpvoteButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={voted}
      aria-label={voted ? 'Remover apoio desta duvida' : 'Apoiar esta duvida'}
      className={`${styles.upvote} ${voted ? styles.upvoteActive : ''}`}
    >
      <ChevronUp size={18} aria-hidden="true" />
      <span className={styles.upvoteCount} aria-live="polite">
        {count}
      </span>
      <span className={styles.upvoteLabel}>Apoios</span>
    </button>
  );
}
