import { describe, it, expect } from 'vitest';
import { linksData } from '../data/links';

describe('Catalogo de Links e Recursos', () => {
  it('deve conter links cadastrados com campos obrigatorios preenchidos', () => {
    expect(linksData.length).toBeGreaterThan(15);
    linksData.forEach((link) => {
      expect(link.id).toBeTruthy();
      expect(link.title).toBeTruthy();
      expect(link.description).toBeTruthy();
      expect(link.url).toMatch(/^https?:\/\//);
      expect(link.category).toBeTruthy();
    });
  });

  it('deve conter o link para a Grade DAC Online', () => {
    const gradeLink = linksData.find((l) => l.id === 'grade-daconline');
    expect(gradeLink).toBeDefined();
    expect(gradeLink?.url).toBe('https://grade.daconline.unicamp.br/login/');
  });

  it('deve conter os links essenciais da Prefeitura de Limeira', () => {
    const intercamp = linksData.find((l) => l.id === 'intercamp-info');
    const circular = linksData.find((l) => l.id === 'circular-info');
    const ru = linksData.find((l) => l.id === 'ru-cardapio');

    expect(intercamp).toBeDefined();
    expect(circular).toBeDefined();
    expect(ru).toBeDefined();
  });

  it('deve conter o link para o Caderno de Horários da DAC', () => {
    const cadernoLink = linksData.find((l) => l.id === 'dac-caderno-horarios');
    expect(cadernoLink).toBeDefined();
    expect(cadernoLink?.url).toBe('https://www.dac.unicamp.br/portal/caderno-de-horarios/');
  });
});
