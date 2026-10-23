'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  StudentProfile,
  CourseId,
  computeJourneyStage,
  computeJourneyStageFromYear,
  COURSE_MAX_YEARS,
} from '@/types/studentProfile';
import { JourneyStage } from '@/components/JourneyFilter/JourneyFilter';
import { STORAGE_KEYS } from './storageKeys';
import { applyTheme, applyFontSize, applyColorFilter } from './applyAttributes';
import type { ThemeOption, FontSizeOption, ColorFilterOption } from './types';

interface PreferencesContextValue {
  // Tema
  theme: ThemeOption;
  toggleTheme: () => void;
  setTheme: (theme: ThemeOption) => void;
  // Acessibilidade
  fontSize: FontSizeOption;
  setFontSize: (size: FontSizeOption) => void;
  colorFilter: ColorFilterOption;
  setColorFilter: (filter: ColorFilterOption) => void;
  vlibrasActive: boolean;
  toggleVlibras: () => void;
  resetAccessibility: () => void;
  // Perfil do estudante
  profile: StudentProfile;
  setProfile: (course: CourseId, year: number, semester?: number | null) => void;
  clearProfile: () => void;
  isLoaded: boolean;
  // Fase da jornada
  journeyStage: JourneyStage;
  selectJourneyStage: (stage: JourneyStage) => void;
  isJourneyInitialized: boolean;
}

const defaultProfile: StudentProfile = {
  course: null,
  year: null,
  semester: null,
  stage: null,
};

const VALID_JOURNEY_STAGES: JourneyStage[] = ['all', 'calouro', 'meio', 'formando'];

const PreferencesContext = createContext<PreferencesContextValue>({
  theme: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
  fontSize: 'normal',
  setFontSize: () => {},
  colorFilter: 'none',
  setColorFilter: () => {},
  vlibrasActive: false,
  toggleVlibras: () => {},
  resetAccessibility: () => {},
  profile: defaultProfile,
  setProfile: () => {},
  clearProfile: () => {},
  isLoaded: false,
  journeyStage: 'all',
  selectJourneyStage: () => {},
  isJourneyInitialized: false,
});

function readStoredProfile(): StudentProfile | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.STUDENT_PROFILE);
    if (!stored) return null;
    const parsed = JSON.parse(stored);
    if (parsed && (parsed.course === 'bsi' || parsed.course === 'tads')) {
      const course = parsed.course as CourseId;
      let year = typeof parsed.year === 'number' ? parsed.year : null;
      let semester = typeof parsed.semester === 'number' ? parsed.semester : null;
      if (!year && typeof semester === 'number') {
        year = Math.min(Math.max(1, Math.ceil(semester / 2)), COURSE_MAX_YEARS[course]);
      }
      if (!semester && typeof year === 'number') {
        semester = year * 2;
      }
      const stage = year
        ? computeJourneyStageFromYear(year, course)
        : computeJourneyStage(semester);
      return { course, year, semester, stage };
    }
  } catch {
    // Ignora erro de leitura do armazenamento local
  }
  return null;
}

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeOption>('light');
  const [fontSize, setFontSizeState] = useState<FontSizeOption>('normal');
  const [colorFilter, setColorFilterState] = useState<ColorFilterOption>('none');
  const [vlibrasActive, setVlibrasActive] = useState(false);
  const [profile, setProfileState] = useState<StudentProfile>(defaultProfile);
  const [isLoaded, setIsLoaded] = useState(false);
  const [journeyStage, setJourneyStageState] = useState<JourneyStage>('all');
  const [isJourneyInitialized, setIsJourneyInitialized] = useState(false);

  // Leitura inicial do armazenamento e aplicacao dos atributos de dado.
  useEffect(() => {
    // Tema
    try {
      const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) as ThemeOption | null;
      if (savedTheme === 'light' || savedTheme === 'dark') {
        setThemeState(savedTheme);
        applyTheme(savedTheme);
      } else {
        applyTheme('light');
      }
    } catch {
      applyTheme('light');
    }

    // Acessibilidade
    try {
      const savedFont = localStorage.getItem(STORAGE_KEYS.ACCESSIBILITY_FONT) as FontSizeOption | null;
      if (savedFont) {
        setFontSizeState(savedFont);
        applyFontSize(savedFont);
      }

      const savedFilter = localStorage.getItem(STORAGE_KEYS.ACCESSIBILITY_FILTER) as ColorFilterOption | null;
      if (savedFilter) {
        setColorFilterState(savedFilter);
        applyColorFilter(savedFilter);
      }

      const savedVlibras = localStorage.getItem(STORAGE_KEYS.ACCESSIBILITY_VLIBRAS);
      if (savedVlibras === 'true') {
        setVlibrasActive(true);
      }
    } catch {
      // Ignora erro de leitura do armazenamento local
    }

    // Perfil do estudante
    const storedProfile = readStoredProfile();
    if (storedProfile) {
      setProfileState(storedProfile);
    }
    setIsLoaded(true);

    // Fase da jornada, prioridade ao parametro fase na querystring.
    const params = new URLSearchParams(window.location.search);
    const faseParam = params.get('fase') as JourneyStage | null;

    if (faseParam && VALID_JOURNEY_STAGES.includes(faseParam)) {
      setJourneyStageState(faseParam);
      try {
        localStorage.setItem(STORAGE_KEYS.JOURNEY_STAGE, faseParam);
      } catch {
        // Ignora erros de armazenamento local restrito
      }
      setIsJourneyInitialized(true);
      return;
    }

    try {
      if (storedProfile?.stage && VALID_JOURNEY_STAGES.includes(storedProfile.stage)) {
        setJourneyStageState(storedProfile.stage);
        setIsJourneyInitialized(true);
        return;
      }

      const saved = localStorage.getItem(STORAGE_KEYS.JOURNEY_STAGE) as JourneyStage | null;
      if (saved && VALID_JOURNEY_STAGES.includes(saved)) {
        setJourneyStageState(saved);
      }
    } catch {
      // Ignora erros de armazenamento local restrito
    }
    setIsJourneyInitialized(true);
  }, []);

  const setTheme = useCallback((next: ThemeOption) => {
    setThemeState(next);
    try {
      localStorage.setItem(STORAGE_KEYS.THEME, next);
    } catch {
      // Ignora falha de escrita no armazenamento
    }
    applyTheme(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((current) => {
      const next = current === 'light' ? 'dark' : 'light';
      try {
        localStorage.setItem(STORAGE_KEYS.THEME, next);
      } catch {
        // Ignora falha de escrita no armazenamento
      }
      applyTheme(next);
      return next;
    });
  }, []);

  const setFontSize = useCallback((size: FontSizeOption) => {
    setFontSizeState(size);
    try {
      localStorage.setItem(STORAGE_KEYS.ACCESSIBILITY_FONT, size);
    } catch {
      // Ignora falha de escrita no armazenamento
    }
    applyFontSize(size);
  }, []);

  const setColorFilter = useCallback((filter: ColorFilterOption) => {
    setColorFilterState(filter);
    try {
      localStorage.setItem(STORAGE_KEYS.ACCESSIBILITY_FILTER, filter);
    } catch {
      // Ignora falha de escrita no armazenamento
    }
    applyColorFilter(filter);
  }, []);

  const toggleVlibras = useCallback(() => {
    setVlibrasActive((current) => {
      const next = !current;
      try {
        localStorage.setItem(STORAGE_KEYS.ACCESSIBILITY_VLIBRAS, String(next));
      } catch {
        // Ignora falha de escrita no armazenamento
      }
      return next;
    });
  }, []);

  const resetAccessibility = useCallback(() => {
    setFontSize('normal');
    setColorFilter('none');
    setVlibrasActive(false);
    try {
      localStorage.removeItem(STORAGE_KEYS.ACCESSIBILITY_VLIBRAS);
    } catch {
      // Ignora falha de remocao no armazenamento
    }
  }, [setFontSize, setColorFilter]);

  const setProfile = useCallback((course: CourseId, year: number, customSemester?: number | null) => {
    const maxYear = COURSE_MAX_YEARS[course];
    const validYear = Math.min(Math.max(1, year), maxYear);
    const semester = typeof customSemester === 'number' ? customSemester : validYear * 2;
    const stage = computeJourneyStageFromYear(validYear, course);
    const updated: StudentProfile = { course, year: validYear, semester, stage };
    setProfileState(updated);
    try {
      localStorage.setItem(STORAGE_KEYS.STUDENT_PROFILE, JSON.stringify(updated));
    } catch {
      // Ignora falha de escrita no armazenamento
    }
    // Deriva a fase da jornada no mesmo estado React, sem CustomEvent global.
    // Nao escreve o parametro fase na URL, mantendo o comportamento anterior.
    if (stage && VALID_JOURNEY_STAGES.includes(stage)) {
      setJourneyStageState(stage);
    }
  }, []);

  const clearProfile = useCallback(() => {
    setProfileState(defaultProfile);
    try {
      localStorage.removeItem(STORAGE_KEYS.STUDENT_PROFILE);
    } catch {
      // Ignora falha de remocao no armazenamento
    }
  }, []);

  const selectJourneyStage = useCallback((newStage: JourneyStage) => {
    setJourneyStageState(newStage);
    try {
      localStorage.setItem(STORAGE_KEYS.JOURNEY_STAGE, newStage);
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

  return (
    <PreferencesContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme,
        fontSize,
        setFontSize,
        colorFilter,
        setColorFilter,
        vlibrasActive,
        toggleVlibras,
        resetAccessibility,
        profile,
        setProfile,
        clearProfile,
        isLoaded,
        journeyStage,
        selectJourneyStage,
        isJourneyInitialized,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  return useContext(PreferencesContext);
}
