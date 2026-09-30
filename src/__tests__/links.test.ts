import { describe, it, expect } from 'vitest';
import { linksData, LinkCategory } from '../data/links';

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

  it('deve contemplar todas as nove categorias tematicas', () => {
    const expectedCategories: LinkCategory[] = [
      'alimentacao',
      'transporte',
      'matricula',
      'aulas',
      'intercambio',
      'iniciacao-cientifica',
      'permanencia',
      'organizacoes',
      'carreira-tecnologia'
    ];

    const presentCategories = new Set(linksData.map((l) => l.category));
    expectedCategories.forEach((cat) => {
      expect(presentCategories.has(cat)).toBe(true);
    });
  });

  it('deve conter links essenciais de alimentacao, carteirinha e transporte', () => {
    const intercamp = linksData.find((l) => l.id === 'intercamp-info');
    const circular = linksData.find((l) => l.id === 'circular-info');
    const ru = linksData.find((l) => l.id === 'ru-cardapio');
    const appServicos = linksData.find((l) => l.id === 'app-servicos-unicamp');
    const recargaPix = linksData.find((l) => l.id === 'recarga-ru-funcamp');
    const souLimeira = linksData.find((l) => l.id === 'sou-limeira-transporte');

    expect(intercamp).toBeDefined();
    expect(circular).toBeDefined();
    expect(ru).toBeDefined();
    expect(appServicos).toBeDefined();
    expect(recargaPix).toBeDefined();
    expect(souLimeira).toBeDefined();
  });

  it('deve conter links de matricula, caderno de horarios, moodle e classroom', () => {
    const gradeLink = linksData.find((l) => l.id === 'grade-daconline');
    const cadernoLink = linksData.find((l) => l.id === 'dac-caderno-horarios');
    const moodleLink = linksData.find((l) => l.id === 'moodle-unicamp');
    const classroomLink = linksData.find((l) => l.id === 'google-classroom-unicamp');

    expect(gradeLink).toBeDefined();
    expect(cadernoLink).toBeDefined();
    expect(moodleLink).toBeDefined();
    expect(classroomLink).toBeDefined();
  });

  it('deve conter links de intercambio DERI e iniciacao cientifica PIBIC e FAPESP', () => {
    const deri = linksData.find((l) => l.id === 'deri-intercambio');
    const pibic = linksData.find((l) => l.id === 'prp-pibic');
    const fapesp = linksData.find((l) => l.id === 'fapesp-sage');

    expect(deri).toBeDefined();
    expect(pibic).toBeDefined();
    expect(fapesp).toBeDefined();
  });

  it('deve conter link da carteirinha digital COTIL e link da AUPE Unicamp', () => {
    const carteirinhaCotil = linksData.find((l) => l.id === 'carteirinha-digital-cotil');
    const aupeLink = linksData.find((l) => l.id === 'aupe-unicamp-link');

    expect(carteirinhaCotil).toBeDefined();
    expect(carteirinhaCotil?.category).toBe('alimentacao');
    expect(carteirinhaCotil?.url).toBe('https://www.cotil.unicamp.br/servicos_digitais/carteirinha-digital-unicamp/');

    expect(aupeLink).toBeDefined();
    expect(aupeLink?.category).toBe('organizacoes');
    expect(aupeLink?.url).toBe('https://www.instagram.com/aupe.unicamp/');

    const nexusLink = linksData.find((l) => l.id === 'nexus-girls-unicamp-link');
    expect(nexusLink).toBeDefined();
    expect(nexusLink?.category).toBe('organizacoes');
    expect(nexusLink?.url).toBe('https://www.instagram.com/nexus.girls_unicamp/');
  });
});
