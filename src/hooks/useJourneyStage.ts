'use client';

import { useState, useEffect, useCallback } from 'react';
import { JourneyStage } from '@/components/JourneyFilter/JourneyFilter';

const STORAGE_KEY = 'guia_ft_journey_stage';

export function useJourneyStage(initialStage: JourneyStage = 'all') {
  const [stage, setStage] = useState<JourneyStage>(initialStage);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const faseParam = params.get('fase') as JourneyStage | null;
    const validStages: JourneyStage[] = ['all', 'calouro', 'meio', 'formando'];

    if (faseParam && validStages.includes(faseParam)) {
      setStage(faseParam);
      try {
        localStorage.setItem(STORAGE_KEY, faseParam);
      } catch {
        // Ignora erros de armazenamento local restrito
      }
      setIsInitialized(true);
      return;
    }

    try {
      const saved = localStorage.getItem(STORAGE_KEY) as JourneyStage | null;
      if (saved && validStages.includes(saved)) {
        setStage(saved);
      }
    } catch {
      // Ignora erros de armazenamento local restrito
    }
    setIsInitialized(true);
  }, []);

  const selectStage = useCallback((newStage: JourneyStage) => {
    setStage(newStage);
    try {
      localStorage.setItem(STORAGE_KEY, newStage);
    } catch {
      // Ignora erros de armazenamento local restrito
    }

    const url = new URL(window.location.href);
    if (newStage === 'all') {
      url.searchParams.delete('fase');
    } else {
      url.searchParams.set('fase', newStage);
    }
    window.history.replaceState({}, '', url.toString());
  }, []);

  return { stage, selectStage, isInitialized };
}
