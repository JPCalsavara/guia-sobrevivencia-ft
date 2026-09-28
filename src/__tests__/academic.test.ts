import { describe, it, expect } from 'vitest';
import { courseComparisonData, graduationChecklistData } from '../data/academic';

describe('Dados Academicos e Integralizacao', () => {
  it('deve conter tabela comparativa valida entre BSI e TADS', () => {
    expect(courseComparisonData.length).toBeGreaterThanOrEqual(6);
    courseComparisonData.forEach((row) => {
      expect(row.criterion).toBeTruthy();
      expect(row.bsi).toBeTruthy();
      expect(row.tads).toBeTruthy();
    });
  });

  it('deve conter os cinco requisitos obrigatorios de formatura', () => {
    expect(graduationChecklistData.length).toBe(5);
    const ids = graduationChecklistData.map((item) => item.id);
    expect(ids).toContain('obrigatorias');
    expect(ids).toContain('eletivas');
    expect(ids).toContain('extensao');
    expect(ids).toContain('tcc-estagio');
    expect(ids).toContain('quitacao-biblioteca');
  });
});
