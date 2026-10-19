import { describe, it, expect } from 'vitest';
import {
  internshipVsTraineeData,
  companiesShowcaseData,
  appleDeveloperAcademyData,
  marketVsResearchData,
  hackathonGuideData,
  careerSurveyData,
  remoteGlobalWorkData,
  bsiVsTadsCoordinatorData,
  postPandemicAndAiMarketData,
  careerYMatrixData,
  careerVideosData,
  careerProjectsData
} from '@/data/careerExpanded';
import { linksData } from '@/data/links';

describe('Career Expanded Data Integration', () => {
  const forbiddenPunctuation = /[\u2014\u2013]/;
  const parenthesesPattern = /[\x28\x29]/;
  const emojiPattern = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

  it('should map all careerVideosData to linksData correctly', () => {
    careerVideosData.forEach((video) => {
      const linkId = `video-${video.id}`;
      const foundLink = linksData.find((l) => l.id === linkId);
      expect(foundLink).toBeDefined();
      expect(foundLink?.url).toBe(video.url);
    });
  });

  it('deve conter o comparativo completo entre estagio, trainee e junior em conformidade com ADR 0001', () => {
    expect(internshipVsTraineeData.length).toBeGreaterThanOrEqual(5);

    internshipVsTraineeData.forEach((row) => {
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

  it('deve contemplar as empresas lideres e validar regras da ADR 0001', () => {
    const ids = companiesShowcaseData.map((c) => c.id);
    expect(ids).toContain('tractian');
    expect(ids).toContain('itau');

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

  it('deve possuir os dados da Apple Developer Academy limpos', () => {
    expect(appleDeveloperAcademyData.institution).toContain('Eldorado');
    
    appleDeveloperAcademyData.benefits.forEach((b) => {
      expect(b).not.toMatch(forbiddenPunctuation);
      expect(b).not.toMatch(parenthesesPattern);
      expect(b).not.toMatch(emojiPattern);
    });
  });

  it('deve conter a matriz comparativa entre mercado e pesquisa', () => {
    marketVsResearchData.forEach((row) => {
      expect(row.criterion).not.toMatch(forbiddenPunctuation);
      expect(row.criterion).not.toMatch(parenthesesPattern);
      expect(row.mercado).not.toMatch(forbiddenPunctuation);
      expect(row.mercado).not.toMatch(parenthesesPattern);
      expect(row.pesquisa).not.toMatch(forbiddenPunctuation);
      expect(row.pesquisa).not.toMatch(parenthesesPattern);
    });
  });

  it('deve validar dados de hackathons', () => {
    expect(hackathonGuideData.featuredHackathon.title).not.toMatch(parenthesesPattern);
  });

  it('deve conter a pesquisa salarial centralizada e sem dados brutos', () => {
    expect(careerSurveyData.title).not.toMatch(parenthesesPattern);
    expect(careerSurveyData.title).not.toMatch(forbiddenPunctuation);
    expect(careerSurveyData.source).not.toMatch(parenthesesPattern);
    expect(careerSurveyData.url.startsWith('https://')).toBe(true);
  });

  it('deve conter o guia de trabalho remoto na gringa limpo', () => {
    remoteGlobalWorkData.requisitos.forEach((req) => {
      expect(req.titulo).not.toMatch(parenthesesPattern);
      expect(req.detalhe).not.toMatch(parenthesesPattern);
    });
  });

  it('deve conter o comparativo BSI versus TADS com a coordenacao', () => {
    bsiVsTadsCoordinatorData.comparativos.forEach((comp) => {
      expect(comp.eixo).not.toMatch(parenthesesPattern);
      expect(comp.bsi).not.toMatch(parenthesesPattern);
      expect(comp.tads).not.toMatch(parenthesesPattern);
    });
  });

  it('deve conter a analise do mercado pos-pandemia limpa', () => {
    postPandemicAndAiMarketData.mitosIA.forEach((m) => {
      expect(m.mito).not.toMatch(parenthesesPattern);
      expect(m.realidade).not.toMatch(parenthesesPattern);
    });
  });

  it('deve conter a matriz de carreira em Y e curadoria de videos', () => {
    expect(careerYMatrixData.trilhaEspecialista.length).toBeGreaterThanOrEqual(3);
    careerVideosData.forEach((vid) => {
      expect(vid.title).not.toMatch(parenthesesPattern);
      expect(vid.url.startsWith('https://')).toBe(true);
    });
  });

  it('deve validar o catalogo de projetos por nivel técnico em conformidade com ADR 0001', () => {
    careerProjectsData.forEach(cat => {
      expect(cat.category).not.toMatch(parenthesesPattern);
      cat.projects.forEach(proj => {
        expect(proj.title).not.toMatch(parenthesesPattern);
        expect(proj.title).not.toMatch(forbiddenPunctuation);
        expect(proj.description).not.toMatch(parenthesesPattern);
      });
    });
  });
});
