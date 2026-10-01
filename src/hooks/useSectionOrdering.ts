'use client';

import { useState, useEffect } from 'react';
import { JourneyStage } from '@/components/JourneyFilter/JourneyFilter';

interface SectionStageConfig {
  stage: JourneyStage;
}

export function useSectionOrdering(
  journeyStage: JourneyStage,
  sectionStageMap: Record<string, SectionStageConfig>,
  allSectionIds: string[]
) {
  const [isSecondaryOpen, setIsSecondaryOpen] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      if (typeof window === 'undefined') return;
      const hash = window.location.hash.replace('#', '');
      if (hash && journeyStage !== 'all') {
        const targetSection = allSectionIds.find((id) => id === hash);
        if (targetSection && sectionStageMap[targetSection]?.stage !== journeyStage) {
          setIsSecondaryOpen(true);
        }
      }
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();

    return () => {
      window.removeEventListener('hashchange', handleHash);
    };
  }, [journeyStage, sectionStageMap, allSectionIds]);

  useEffect(() => {
    setIsSecondaryOpen(false);
  }, [journeyStage]);

  const prioritySections = allSectionIds.filter(
    (id) => sectionStageMap[id]?.stage === journeyStage
  );
  const secondarySections = allSectionIds.filter(
    (id) => sectionStageMap[id]?.stage !== journeyStage
  );

  const getSectionStyle = (id: string): React.CSSProperties => {
    if (journeyStage === 'all') {
      return {};
    }

    const isPriority = sectionStageMap[id]?.stage === journeyStage;
    if (isPriority) {
      const priorityIndex = prioritySections.indexOf(id);
      return {
        order: 2 + priorityIndex,
        display: 'block',
      };
    }

    const secondaryIndex = secondarySections.indexOf(id);
    return {
      order: 20 + secondaryIndex,
      display: isSecondaryOpen ? 'block' : 'none',
    };
  };

  return {
    isSecondaryOpen,
    setIsSecondaryOpen,
    prioritySections,
    secondarySections,
    getSectionStyle,
  };
}
