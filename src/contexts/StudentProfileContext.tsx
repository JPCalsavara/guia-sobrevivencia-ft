'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  StudentProfile,
  CourseId,
  computeJourneyStage,
} from '@/types/studentProfile';

interface StudentProfileContextValue {
  profile: StudentProfile;
  setProfile: (course: CourseId, semester: number) => void;
  clearProfile: () => void;
  isLoaded: boolean;
}

const STORAGE_KEY = 'ft_student_profile';

const defaultProfile: StudentProfile = {
  course: null,
  semester: null,
  stage: null,
};

const StudentProfileContext = createContext<StudentProfileContextValue>({
  profile: defaultProfile,
  setProfile: () => {},
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
        if (parsed && (parsed.course === 'bsi' || parsed.course === 'tads') && typeof parsed.semester === 'number') {
          setProfileState({
            course: parsed.course,
            semester: parsed.semester,
            stage: computeJourneyStage(parsed.semester),
          });
        }
      }
    } catch {
      // Ignora erro de leitura do armazenamento local
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const setProfile = (course: CourseId, semester: number) => {
    const stage = computeJourneyStage(semester);
    const updated: StudentProfile = { course, semester, stage };
    setProfileState(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent('ft_student_profile_changed', { detail: updated }));
    } catch {
      // Ignora falha de escrita no armazenamento
    }
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
    <StudentProfileContext.Provider value={{ profile, setProfile, clearProfile, isLoaded }}>
      {children}
    </StudentProfileContext.Provider>
  );
}

export function useStudentProfile() {
  return useContext(StudentProfileContext);
}
