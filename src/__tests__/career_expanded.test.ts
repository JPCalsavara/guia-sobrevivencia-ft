import { describe, it, expect } from 'vitest';
import {
  internshipVsTraineeData,
  companiesShowcaseData,
  appleDeveloperAcademyData,
  marketVsResearchData,
  hackathonGuideData
} from '../data/careerExpanded';

describe('Dados Expandidos de Carreira, Hackathons e Trainee', () => {
  const forbiddenPunctuation = /[—–]/;
  const parenthesesPattern = /[()]/;
  const emojiPattern = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

  it('deve conter o comparativo completo entre estagio, trainee e junior', () => {
    expect(internshipVsTraineeData.length).toBeGreaterThanOrEqual(5);

    internshipVsTraineeData.forEach((row) => {
      expect(row.criterion.length).toBeGreaterThan(0);
      expect(row.estagio.length).toBeGreaterThan(0);
      expect(row.trainee.length).toBeGreaterThan(0);
      expect(row.junior.length).toBeGreaterThan(0);

      expect(row.criterion).not.toMatch(forbiddenPunctuation);
      expect(row.criterion).not.toMatch(parenthesesPattern);
      expect(row.criterion).not.toMatch(emojiPattern);

      expect(row.estagio).not.toMatch(forbiddenPunctuation);
      expect(row.estagio).not.toMatch(parenthesesPattern);
      expect(row.estagio).not.toMatch(emojiPattern);

      expect(row.trainee).not.toMatch(forbiddenPunctuation);
      expect(row.trainee).not.toMatch(parenthesesPattern);
      expect(row.trainee).not.toMatch(emojiPattern);

      expect(row.junior).not.toMatch(forbiddenPunctuation);
      expect(row.junior).not.toMatch(parenthesesPattern);
      expect(row.junior).not.toMatch(emojiPattern);
    });
  });

  it('deve contemplar as cinco empresas lideres requeridas', () => {
    const ids = companiesShowcaseData.map((c) => c.id);
    expect(ids).toContain('tractian');
    expect(ids).toContain('itau');
    expect(ids).toContain('stone');
    expect(ids).toContain('qitech');
    expect(ids).toContain('agibank');

    companiesShowcaseData.forEach((comp) => {
      expect(comp.name).not.toMatch(forbiddenPunctuation);
      expect(comp.name).not.toMatch(parenthesesPattern);
      expect(comp.name).not.toMatch(emojiPattern);

      expect(comp.description).not.toMatch(forbiddenPunctuation);
      expect(comp.description).not.toMatch(parenthesesPattern);
      expect(comp.description).not.toMatch(emojiPattern);

      expect(comp.officialUrl.startsWith('https://')).toBe(true);
    });
  });

  it('deve possuir os dados oficiais e links da Apple Developer Academy Campinas', () => {
    expect(appleDeveloperAcademyData.institution).toContain('Eldorado');
    expect(appleDeveloperAcademyData.partnership).toBe('Apple');
    expect(appleDeveloperAcademyData.websiteUrl).toBe('https://developeracademy.eldorado.org.br/campinas/');
    expect(appleDeveloperAcademyData.instagramUrl).toBe('https://www.instagram.com/developeracademy.cps/');
    expect(appleDeveloperAcademyData.benefits.length).toBeGreaterThanOrEqual(3);

    appleDeveloperAcademyData.benefits.forEach((b) => {
      expect(b).not.toMatch(forbiddenPunctuation);
      expect(b).not.toMatch(parenthesesPattern);
      expect(b).not.toMatch(emojiPattern);
    });
  });

  it('deve conter a matriz comparativa entre mercado e pesquisa', () => {
    expect(marketVsResearchData.length).toBeGreaterThanOrEqual(4);

    marketVsResearchData.forEach((row) => {
      expect(row.criterion).not.toMatch(forbiddenPunctuation);
      expect(row.criterion).not.toMatch(parenthesesPattern);
      expect(row.mercado).not.toMatch(forbiddenPunctuation);
      expect(row.mercado).not.toMatch(parenthesesPattern);
      expect(row.pesquisa).not.toMatch(forbiddenPunctuation);
      expect(row.pesquisa).not.toMatch(parenthesesPattern);
    });
  });

  it('deve conter o guia de hackathons e a referencia ao Hackathon Itau Batalha de Agentes', () => {
    expect(hackathonGuideData.featuredHackathon.title).toContain('Batalha de Agentes');
    expect(hackathonGuideData.featuredHackathon.url).toBe(
      'https://sejatrainee.com.br/hackathon-itau-batalha-de-agentes/'
    );
    expect(hackathonGuideData.squadRoles.length).toBeGreaterThanOrEqual(3);
  });
});
