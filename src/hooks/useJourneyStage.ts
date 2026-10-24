'use client';

// Reexportacao fina para preservar os imports existentes.
// A sincronia de fase agora vive no modulo de preferencias, que deriva a fase
// do perfil pelo context do React, sem addEventListener de CustomEvent global.
export { useJourneyStage } from '@/modules/preferences';
