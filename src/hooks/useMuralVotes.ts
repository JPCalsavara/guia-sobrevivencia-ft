'use client';

import { useState, useCallback, useEffect } from 'react';

const STORAGE_KEY = 'guia-ft-mural-votos';

function readStoredVotes(): string[] {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.filter((item): item is string => typeof item === 'string');
    }
    return [];
  } catch {
    return [];
  }
}

function persistVotes(ids: string[]): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    // Ignora falhas de acesso ao armazenamento local
  }
}

export function useMuralVotes() {
  const [votedIds, setVotedIds] = useState<string[]>([]);

  useEffect(() => {
    setVotedIds(readStoredVotes());
  }, []);

  const hasVoted = useCallback(
    (id: string) => votedIds.includes(id),
    [votedIds]
  );

  const toggleVote = useCallback((id: string) => {
    setVotedIds((current) => {
      const next = current.includes(id)
        ? current.filter((votedId) => votedId !== id)
        : [...current, id];
      persistVotes(next);
      return next;
    });
  }, []);

  return { votedIds, hasVoted, toggleVote };
}
