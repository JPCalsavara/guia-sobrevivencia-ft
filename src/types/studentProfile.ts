export type CourseId = 'bsi' | 'tads';

export type JourneyStage = 'calouro' | 'meio' | 'formando';

export interface StudentProfile {
  course: CourseId | null;
  semester: number | null;
  stage: JourneyStage | null;
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
