import React from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import type { MuralAnswer, MuralComment } from '@/data/mural';
import { OfficialAnswer } from './OfficialAnswer';
import styles from './mural.module.scss';

interface CommentThreadProps {
  comments: MuralComment[];
  officialAnswer?: MuralAnswer;
}

export function CommentThread({ comments, officialAnswer }: CommentThreadProps) {
  const total = comments.length;
  const resumo =
    total === 0
      ? 'Ver discussao da comunidade'
      : total === 1
        ? 'Ver 1 comentario da comunidade'
        : `Ver ${total} comentarios da comunidade`;

  return (
    <details className={styles.thread}>
      <summary className={styles.threadSummary}>
        <span>
          <MessageCircle
            size={16}
            aria-hidden="true"
            style={{ marginRight: '0.4rem', verticalAlign: 'middle' }}
          />
          {resumo}
        </span>
        <ChevronDown size={18} className={styles.threadToggleIcon} aria-hidden="true" />
      </summary>

      <div className={styles.threadBody}>
        {officialAnswer && <OfficialAnswer answer={officialAnswer} />}

        {total > 0 ? (
          <ul className={styles.commentList}>
            {comments.map((comment) => (
              <li key={comment.id} className={styles.commentItem}>
                {comment.autor && (
                  <span className={styles.commentAuthor}>{comment.autor}</span>
                )}
                <p className={styles.commentText}>{comment.conteudo}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.commentEmpty}>
            Ainda nao ha comentarios da comunidade para esta duvida.
          </p>
        )}
      </div>
    </details>
  );
}
