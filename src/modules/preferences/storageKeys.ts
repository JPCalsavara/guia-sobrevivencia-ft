// Chaves de armazenamento local centralizadas do modulo de preferencias.
// Os nomes sao mantidos identicos aos usados antes da refatoracao para
// preservar as preferencias ja salvas nos navegadores dos usuarios.
export const STORAGE_KEYS = {
  THEME: 'ft_theme',
  ACCESSIBILITY_FONT: 'ft_accessibility_font',
  ACCESSIBILITY_FILTER: 'ft_accessibility_filter',
  ACCESSIBILITY_VLIBRAS: 'ft_accessibility_vlibras',
  STUDENT_PROFILE: 'ft_student_profile',
  JOURNEY_STAGE: 'guia_ft_journey_stage',
} as const;
