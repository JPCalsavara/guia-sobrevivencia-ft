import { describe, it, expect } from 'vitest';
import { courseComparisonData, graduationChecklistData, padComparisonData } from '../data/academic';

describe('Dados Acadêmicos e Integralização', () => {
  it('deve conter tabela comparativa válida entre BSI e TADS', () => {
    expect(courseComparisonData.length).toBeGreaterThanOrEqual(6);
    courseComparisonData.forEach((row) => {
      expect(row.criterion).toBeTruthy();
      expect(row.bsi).toBeTruthy();
      expect(row.tads).toBeTruthy();
    });
  });

  it('deve conter comparativo válido entre PAD com bolsa e sem bolsa', () => {
    expect(padComparisonData.length).toBeGreaterThanOrEqual(5);
    padComparisonData.forEach((row) => {
      expect(row.criterion).toBeTruthy();
      expect(row.withScholarship).toBeTruthy();
      expect(row.withoutScholarship).toBeTruthy();
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

  it('deve validar integracao do JourneyFilter nas paginas academico e carreira', async () => {
    const fs = await import('fs');
    const path = await import('path');
    const academicoPage = fs.readFileSync(path.resolve(process.cwd(), 'src/app/academico/page.tsx'), 'utf8');
    const carreiraPage = fs.readFileSync(path.resolve(process.cwd(), 'src/app/carreira/page.tsx'), 'utf8');

    expect(academicoPage).toContain('JourneyFilter');
    expect(academicoPage).toContain('onSelectStage={setJourneyStage}');
    expect(academicoPage).toContain('highlightStage');

    expect(carreiraPage).toContain('JourneyFilter');
    expect(carreiraPage).toContain('onSelectStage={setJourneyStage}');
    expect(carreiraPage).toContain('highlightStage');
  });

  it('deve conter o alerta crítico de Programacao 1 tranca a grade', async () => {
    const fs = await import('fs');
    const path = await import('path');
    const academicoPage = fs.readFileSync(path.resolve(process.cwd(), 'src/app/academico/page.tsx'), 'utf8');

    expect(academicoPage).toContain('alerta-prog1-tranca-tudo');
    expect(academicoPage).toContain('Programação 1 Tranca Toda a Grade de TI');
    expect(academicoPage).toContain('Programação 2');
    expect(academicoPage).toContain('Estruturas de Dados');
  });

  it('deve conter links dinamicos para o Caderno de Horarios da DAC no CurriculumGrids', async () => {
    const fs = await import('fs');
    const path = await import('path');
    const gridComponent = fs.readFileSync(path.resolve(process.cwd(), 'src/components/CurriculumGrids/CurriculumGrids.tsx'), 'utf8');

    expect(gridComponent).toContain('caderno-de-horarios');
    expect(gridComponent).toContain('getFullYear');
    expect(gridComponent).toContain('/S/G/FT/');
    expect(gridComponent).toContain('target="_blank"');
    expect(gridComponent).toContain('rel="noopener noreferrer"');
  });
});

