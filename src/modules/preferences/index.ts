// API publica do modulo de preferencias e estado da jornada.
// Unica costura entre a aplicacao e o armazenamento local mais os atributos
// de dado no documentElement para tema, acessibilidade, perfil e fase.
export { PreferencesProvider, usePreferences } from './PreferencesProvider';
export { useStudentProfile } from './useStudentProfile';
export { useJourneyStage } from './useJourneyStage';
export { STORAGE_KEYS } from './storageKeys';
export type { ThemeOption, FontSizeOption, ColorFilterOption } from './types';
