export type CourseId = 'bsi' | 'tads';

export type JourneyStage = 'calouro' | 'meio' | 'formando';

export interface StudentProfile {
  course: CourseId | null;
  year: number | null;
  semester: number | null;
  stage: JourneyStage | null;
}

export const COURSE_MAX_YEARS: Record<CourseId, number> = {
  bsi: 4,
  tads: 3,
};

export function computeJourneyStageFromYear(year: number | null, course: CourseId | null): JourneyStage | null {
  if (!year) return null;
  if (year === 1) return 'calouro';
  if (course === 'tads') {
    if (year === 2) return 'meio';
    return 'formando';
  }
  if (year <= 3) return 'meio';
  return 'formando';
}

export function computeJourneyStage(semester: number | null): JourneyStage | null {
  if (!semester) return null;
  if (semester <= 2) return 'calouro';
  if (semester <= 6) return 'meio';
  return 'formando';
}

export const COURSE_NAMES: Record<CourseId, string> = {
  bsi: 'Sistemas de Informacao',
  tads: 'Analise e Desenvolvimento de Sistemas',
};

export const COURSE_SHORT_NAMES: Record<CourseId, string> = {
  bsi: 'BSI',
  tads: 'TADS',
};

export const COURSE_MAX_SEMESTERS: Record<CourseId, number> = {
  bsi: 8,
  tads: 6,
};
