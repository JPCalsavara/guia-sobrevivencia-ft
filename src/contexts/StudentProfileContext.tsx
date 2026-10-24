'use client';
// Reexportacao fina para preservar os imports existentes.
// A logica de perfil agora vive no modulo de preferencias, que e a unica
// costura com o armazenamento local. O StudentProfileProvider e um alias do
// PreferencesProvider e o CustomEvent global de perfil foi eliminado.
export { PreferencesProvider as StudentProfileProvider, useStudentProfile } from '@/modules/preferences';
