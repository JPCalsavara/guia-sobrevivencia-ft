import React from 'react';
import { CalendarDays, UserRound } from 'lucide-react';
import type { MuralQuestion } from '@/data/mural';
import { UpvoteButton } from './UpvoteButton';
import { CommentThread } from './CommentThread';
import styles from './mural.module.scss';

interface MuralQuestionCardProps {
  question: MuralQuestion;
  voted: boolean;
  onToggleVote: () => void;
}

function formatarData(iso: string): string {
  const data = new Date(iso);
  if (Number.isNaN(data.getTime())) {
    return iso;
  }
  return data.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
}

export function MuralQuestionCard({ question, voted, onToggleVote }: MuralQuestionCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardMain}>
        <UpvoteButton count={question.upvotes} voted={voted} onToggle={onToggleVote} />

        <div className={styles.cardContent}>
          <span className={styles.cardCategoryBadge}>{question.categoryLabel}</span>
          <h3 className={styles.cardTitle}>{question.titulo}</h3>
          <p className={styles.cardDescription}>{question.descricao}</p>

          <div className={styles.cardMeta}>
            {question.autor && (
              <span className={styles.cardMetaItem}>
                <UserRound size={14} aria-hidden="true" />
                {question.autor}
              </span>
            )}
            <span className={styles.cardMetaItem}>
              <CalendarDays size={14} aria-hidden="true" />
              {formatarData(question.createdAt)}
            </span>
          </div>
        </div>
      </div>

      <CommentThread comments={question.comments} officialAnswer={question.officialAnswer} />
    </article>
  );
}
