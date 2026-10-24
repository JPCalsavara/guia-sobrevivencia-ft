'use client';

import { usePreferences } from './PreferencesProvider';

// Wrapper fino de compatibilidade sobre usePreferences, mantem a assinatura
// consumida por Navbar, StudentProfileModal, CurriculumGrids e app/page.
export function useStudentProfile() {
  const { profile, setProfile, clearProfile, isLoaded } = usePreferences();
  return { profile, setProfile, clearProfile, isLoaded };
}
