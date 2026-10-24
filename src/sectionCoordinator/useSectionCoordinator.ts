'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import type { CSSProperties } from 'react';
import { JourneyStage } from '@/components/JourneyFilter/JourneyFilter';

/**
 * Describes one orderable section of a guide page. The coordinator only needs
 * the id and the journey stage it belongs to in order to compute ordering and
 * visibility. Page specific copy such as labels stays in the page.
 */
export interface SectionDescriptor {
  id: string;
  stage: JourneyStage;
}

/**
 * Declarative input for the Section Coordinator. A page passes the active
 * journey stage and the ordered list of sections. Everything else is derived.
 */
export interface SectionCoordinatorConfig {
  journeyStage: JourneyStage;
  sections: SectionDescriptor[];
}

/**
 * Props ready to spread onto a page section wrapper. Today only the inline
 * style is needed by the DOM.
 */
export interface SectionProps {
  style: CSSProperties;
}

/**
 * Props for the priority header wrapper that introduces the prioritized trail.
 */
export interface PriorityHeaderProps {
  style: CSSProperties;
}

/**
 * Props for the secondary sections toggle control.
 */
export interface SecondaryToggleProps {
  style: CSSProperties;
  isOpen: boolean;
  onToggle: () => void;
  count: number;
}

/**
 * Deep module returned by useSectionCoordinator. It owns the full ordering
 * contract, the visibility of secondary sections, and hash deep linking, so
 * the pages act as declarative orchestrators free of manual order math.
 */
export interface SectionCoordinator {
  isSecondaryOpen: boolean;
  setSecondaryOpen: (open: boolean) => void;
  toggleSecondary: () => void;
  prioritySectionIds: string[];
  secondarySectionIds: string[];
  hasSecondarySections: boolean;
  getSectionProps: (id: string) => SectionProps;
  priorityHeaderProps: PriorityHeaderProps;
  secondaryToggleProps: SecondaryToggleProps;
}

export function useSectionCoordinator(
  config: SectionCoordinatorConfig
): SectionCoordinator {
  const { journeyStage, sections } = config;

  const [isSecondaryOpen, setIsSecondaryOpen] = useState(false);

  const stageById = useMemo(() => {
    const map: Record<string, JourneyStage> = {};
    for (const section of sections) {
      map[section.id] = section.stage;
    }
    return map;
  }, [sections]);

  const prioritySectionIds = useMemo(
    () => sections.filter((s) => s.stage === journeyStage).map((s) => s.id),
    [sections, journeyStage]
  );

  const secondarySectionIds = useMemo(
    () => sections.filter((s) => s.stage !== journeyStage).map((s) => s.id),
    [sections, journeyStage]
  );

  useEffect(() => {
    const handleHash = () => {
      if (typeof window === 'undefined') return;
      const hash = window.location.hash.replace('#', '');
      if (hash && journeyStage !== 'all') {
        const targetStage = stageById[hash];
        if (targetStage !== undefined && targetStage !== journeyStage) {
          setIsSecondaryOpen(true);
        }
      }
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();

    return () => {
      window.removeEventListener('hashchange', handleHash);
    };
  }, [journeyStage, stageById]);

  useEffect(() => {
    setIsSecondaryOpen(false);
  }, [journeyStage]);

  const setSecondaryOpen = useCallback((open: boolean) => {
    setIsSecondaryOpen(open);
  }, []);

  const toggleSecondary = useCallback(() => {
    setIsSecondaryOpen((open) => !open);
  }, []);

  const getSectionProps = useCallback(
    (id: string): SectionProps => {
      if (journeyStage === 'all') {
        return { style: {} };
      }

      const priorityIndex = prioritySectionIds.indexOf(id);
      if (priorityIndex !== -1) {
        return {
          style: {
            order: 2 + priorityIndex,
            display: 'block',
          },
        };
      }

      const secondaryIndex = secondarySectionIds.indexOf(id);
      return {
        style: {
          order: 20 + secondaryIndex,
          display: isSecondaryOpen ? 'block' : 'none',
        },
      };
    },
    [journeyStage, prioritySectionIds, secondarySectionIds, isSecondaryOpen]
  );

  const priorityHeaderProps: PriorityHeaderProps = useMemo(
    () => ({ style: { order: 1 } }),
    []
  );

  const secondaryToggleProps: SecondaryToggleProps = useMemo(
    () => ({
      style: { order: 10 },
      isOpen: isSecondaryOpen,
      onToggle: toggleSecondary,
      count: secondarySectionIds.length,
    }),
    [isSecondaryOpen, toggleSecondary, secondarySectionIds]
  );

  return {
    isSecondaryOpen,
    setSecondaryOpen,
    toggleSecondary,
    prioritySectionIds,
    secondarySectionIds,
    hasSecondarySections: secondarySectionIds.length > 0,
    getSectionProps,
    priorityHeaderProps,
    secondaryToggleProps,
  };
}
