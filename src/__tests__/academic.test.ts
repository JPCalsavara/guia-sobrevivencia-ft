import { describe, it, expect } from 'vitest';
import { courseComparisonData, graduationChecklistData } from '../data/academic';

describe('Dados Acadêmicos e Integralização', () => {
  it('deve conter tabela comparativa válida entre BSI e TADS', () => {
    expect(courseComparisonData.length).toBeGreaterThanOrEqual(6);
    courseComparisonData.forEach((row) => {
      expect(row.criterion).toBeTruthy();
      expect(row.bsi).toBeTruthy();
      expect(row.tads).toBeTruthy();
    });
  });

  it('deve conter os cinco requisitos obrigatórios de formatura', () => {
    expect(graduationChecklistData.length).toBe(5);
    const ids = graduationChecklistData.map((item) => item.id);
    expect(ids).toContain('obrigatorias');
    expect(ids).toContain('eletivas');
    expect(ids).toContain('extensao');
    expect(ids).toContain('tcc-estagio');
    expect(ids).toContain('quitacao-biblioteca');
  });

  it('deve conter acentuação e cedilha corretas nos textos acadêmicos', () => {
    const titles = graduationChecklistData.map((item) => item.title).join(' ');
    expect(titles).toMatch(/[áéíóúâêôãõç]/i);
    expect(titles).toContain('Obrigatórias');
    expect(titles).toContain('Créditos');
    expect(titles).toContain('Extensão');
    expect(titles).toContain('Estágio');
  });
});
