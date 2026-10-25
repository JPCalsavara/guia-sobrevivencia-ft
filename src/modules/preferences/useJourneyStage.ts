'use client';

import { JourneyStage } from '@/components/JourneyFilter/JourneyFilter';
import { usePreferences } from './PreferencesProvider';

// Wrapper fino de compatibilidade sobre usePreferences, mantem a assinatura
// consumida por app/academico/page e app/carreira/page.
// O argumento initialStage e mantido por compatibilidade. A fase inicial agora
// vive no PreferencesProvider, que ja aplica a prioridade de URL, perfil e
// armazenamento na montagem.
export function useJourneyStage(_initialStage: JourneyStage = 'all') {
  const { journeyStage, selectJourneyStage, isJourneyInitialized } = usePreferences();
  return { stage: journeyStage, selectStage: selectJourneyStage, isInitialized: isJourneyInitialized };
}
