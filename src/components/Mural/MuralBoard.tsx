'use client';

import React, { useMemo, useState } from 'react';
import type { MuralQuestion } from '@/data/mural';
import { muralSortOptions } from '@/data/mural';
import {
  filterQuestions,
  removeUpvoteQuestion,
  sortQuestions,
  upvoteQuestion
} from '@/lib/mural';
import { useMuralVotes } from '@/hooks/useMuralVotes';
import { MuralFilters } from './MuralFilters';
import { MuralQuestionCard } from './MuralQuestionCard';
import { NewQuestionForm } from './NewQuestionForm';
import styles from './mural.module.scss';

interface MuralBoardProps {
  seedData: MuralQuestion[];
}

export function MuralBoard({ seedData }: MuralBoardProps) {
  const [questions, setQuestions] = useState<MuralQuestion[]>(seedData);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('todas');
  const [sortId, setSortId] = useState<string>(muralSortOptions[0].id);

  const { hasVoted, toggleVote } = useMuralVotes();

  const visibleQuestions = useMemo(() => {
    const filtered = filterQuestions(questions, category, searchTerm);
    return sortQuestions(filtered, sortId);
  }, [questions, category, searchTerm, sortId]);

  const handleToggleVote = (id: string) => {
    const alreadyVoted = hasVoted(id);
    setQuestions((current) =>
      alreadyVoted ? removeUpvoteQuestion(current, id) : upvoteQuestion(current, id)
    );
    toggleVote(id);
  };

  return (
    <div className={styles.board}>
      <MuralFilters
        searchTerm={searchTerm}
        category={category}
        sortId={sortId}
        onSearchChange={setSearchTerm}
        onCategoryChange={setCategory}
        onSortChange={setSortId}
      />

      {visibleQuestions.length > 0 ? (
        <div className={styles.list}>
          {visibleQuestions.map((question) => (
            <MuralQuestionCard
              key={question.id}
              question={question}
              voted={hasVoted(question.id)}
              onToggleVote={() => handleToggleVote(question.id)}
            />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <h3 className={styles.emptyStateTitle}>Nenhuma duvida encontrada no mural</h3>
          <p className={styles.emptyStateDesc}>
            Ajuste os filtros ou publique uma nova duvida para a comunidade da FT abaixo.
          </p>
        </div>
      )}

      <NewQuestionForm />
    </div>
  );
}
