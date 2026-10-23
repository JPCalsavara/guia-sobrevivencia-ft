'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  StudentProfile,
  CourseId,
  StudentPriority,
  StudentAvailability,
  computeJourneyStage,
  computeJourneyStageFromYear,
  COURSE_MAX_YEARS,
} from '@/types/studentProfile';

interface QuizResult {
  course: CourseId;
  year: number;
  priority: StudentPriority;
  availability: StudentAvailability;
}

interface StudentProfileContextValue {
  profile: StudentProfile;
  setProfile: (course: CourseId, year: number, semester?: number | null) => void;
  completeQuiz: (result: QuizResult) => void;
  clearProfile: () => void;
  isLoaded: boolean;
}

const STORAGE_KEY = 'ft_student_profile';

const defaultProfile: StudentProfile = {
  course: null,
  year: null,
  semester: null,
  stage: null,
  priority: null,
  availability: null,
  quizCompleted: false,
};

const StudentProfileContext = createContext<StudentProfileContextValue>({
  profile: defaultProfile,
  setProfile: () => {},
  completeQuiz: () => {},
  clearProfile: () => {},
  isLoaded: false,
});

export function StudentProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfileState] = useState<StudentProfile>(defaultProfile);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
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

          const validPriorities: StudentPriority[] = ['mercado', 'pesquisa', 'empreendedorismo', 'cicloBasico'];
          const validAvailabilities: StudentAvailability[] = ['baixa', 'media', 'alta'];
          const priority = validPriorities.includes(parsed.priority)
            ? (parsed.priority as StudentPriority)
            : null;
          const availability = validAvailabilities.includes(parsed.availability)
            ? (parsed.availability as StudentAvailability)
            : null;
          const quizCompleted = parsed.quizCompleted === true;

          setProfileState({
            course,
            year,
            semester,
            stage,
            priority,
            availability,
            quizCompleted,
          });
        }
      }
    } catch {
      // Ignora erro de leitura do armazenamento local
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const persist = (updated: StudentProfile) => {
    setProfileState(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent('ft_student_profile_changed', { detail: updated }));
    } catch {
      // Ignora falha de escrita no armazenamento
    }
  };

  const setProfile = (course: CourseId, year: number, customSemester?: number | null) => {
    const maxYear = COURSE_MAX_YEARS[course];
    const validYear = Math.min(Math.max(1, year), maxYear);
    const semester = typeof customSemester === 'number' ? customSemester : validYear * 2;
    const stage = computeJourneyStageFromYear(validYear, course);
    persist({
      course,
      year: validYear,
      semester,
      stage,
      priority: profile.priority,
      availability: profile.availability,
      quizCompleted: profile.quizCompleted,
    });
  };

  const completeQuiz = (result: QuizResult) => {
    const maxYear = COURSE_MAX_YEARS[result.course];
    const validYear = Math.min(Math.max(1, result.year), maxYear);
    const semester = validYear * 2;
    const stage = computeJourneyStageFromYear(validYear, result.course);
    persist({
      course: result.course,
      year: validYear,
      semester,
      stage,
      priority: result.priority,
      availability: result.availability,
      quizCompleted: true,
    });
  };

  const clearProfile = () => {
    setProfileState(defaultProfile);
    try {
      localStorage.removeItem(STORAGE_KEY);
      window.dispatchEvent(new CustomEvent('ft_student_profile_changed', { detail: defaultProfile }));
    } catch {
      // Ignora falha de remocao no armazenamento
    }
  };

  return (
    <StudentProfileContext.Provider value={{ profile, setProfile, completeQuiz, clearProfile, isLoaded }}>
      {children}
    </StudentProfileContext.Provider>
  );
}

export function useStudentProfile() {
  return useContext(StudentProfileContext);
}
