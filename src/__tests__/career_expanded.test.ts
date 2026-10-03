import { describe, it, expect } from 'vitest';
import {
  internshipVsTraineeData,
  companiesShowcaseData,
  appleDeveloperAcademyData,
  marketVsResearchData,
  hackathonGuideData,
  salarySurvey2026Data,
  remoteGlobalWorkData,
  bsiVsTadsCoordinatorData,
  postPandemicAndAiMarketData,
  careerYMatrixData,
  careerVideosData,
  careerProjectsData
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

  it('deve conter a pesquisa salarial 2026 com niveis e regimes em conformidade com ADR 0001', () => {
    expect(salarySurvey2026Data.niveis.length).toBeGreaterThanOrEqual(5);
    expect(salarySurvey2026Data.regimes.length).toBeGreaterThanOrEqual(3);
    expect(salarySurvey2026Data.roiGraduacao.length).toBeGreaterThanOrEqual(3);

    salarySurvey2026Data.niveis.forEach((lvl) => {
      expect(lvl.nivel).not.toMatch(forbiddenPunctuation);
      expect(lvl.nivel).not.toMatch(parenthesesPattern);
      expect(lvl.nivel).not.toMatch(emojiPattern);
      expect(lvl.salarioMedio).not.toMatch(parenthesesPattern);
      expect(lvl.faixaMercado).not.toMatch(parenthesesPattern);
    });

    salarySurvey2026Data.regimes.forEach((reg) => {
      expect(reg.regime).not.toMatch(parenthesesPattern);
      expect(reg.caracteristicas).not.toMatch(parenthesesPattern);
      expect(reg.vantagens).not.toMatch(parenthesesPattern);
    });
  });

  it('deve conter o guia de trabalho remoto na gringa e aspectos tributarios', () => {
    expect(remoteGlobalWorkData.requisitos.length).toBeGreaterThanOrEqual(4);
    expect(remoteGlobalWorkData.plataformas.length).toBeGreaterThanOrEqual(3);
    expect(remoteGlobalWorkData.tributacao.length).toBeGreaterThanOrEqual(3);

    remoteGlobalWorkData.requisitos.forEach((req) => {
      expect(req.titulo).not.toMatch(parenthesesPattern);
      expect(req.detalhe).not.toMatch(parenthesesPattern);
    });
  });

  it('deve conter o comparativo BSI versus TADS com a coordenacao', () => {
    expect(bsiVsTadsCoordinatorData.comparativos.length).toBeGreaterThanOrEqual(4);
    expect(bsiVsTadsCoordinatorData.coordenadorNome).toContain('Guilherme');

    bsiVsTadsCoordinatorData.comparativos.forEach((comp) => {
      expect(comp.eixo).not.toMatch(parenthesesPattern);
      expect(comp.bsi).not.toMatch(parenthesesPattern);
      expect(comp.tads).not.toMatch(parenthesesPattern);
      expect(comp.recomendacaoCoordenador).not.toMatch(parenthesesPattern);
    });
  });

  it('deve conter a analise do mercado pos-pandemia, mitos de IA e devs de produto', () => {
    expect(postPandemicAndAiMarketData.pandemiaVsHoje.length).toBeGreaterThanOrEqual(2);
    expect(postPandemicAndAiMarketData.mitosIA.length).toBeGreaterThanOrEqual(2);
    expect(postPandemicAndAiMarketData.desenvolvedorDeProduto.atributos.length).toBeGreaterThanOrEqual(3);

    postPandemicAndAiMarketData.mitosIA.forEach((m) => {
      expect(m.mito).not.toMatch(parenthesesPattern);
      expect(m.realidade).not.toMatch(parenthesesPattern);
      expect(m.impactoNaFT).not.toMatch(parenthesesPattern);
    });
  });

  it('deve conter a matriz de carreira em Y e curadoria de videos', () => {
    expect(careerYMatrixData.trilhaEspecialista.length).toBeGreaterThanOrEqual(3);
    expect(careerYMatrixData.trilhaGestao.length).toBeGreaterThanOrEqual(3);
    expect(careerYMatrixData.perguntasAutoavaliacao.length).toBeGreaterThanOrEqual(3);
    expect(careerVideosData.length).toBeGreaterThanOrEqual(5);

    careerVideosData.forEach((vid) => {
      expect(vid.title).not.toMatch(parenthesesPattern);
      expect(vid.url.startsWith('https://')).toBe(true);
    });
  });

  it('deve validar o catalogo de projetos por nivel tecnico em conformidade com ADR 0001', () => {
    expect(careerProjectsData.length).toBeGreaterThanOrEqual(4);
    
    const allProjects = careerProjectsData.flatMap(c => c.projects);
    expect(allProjects.length).toBeGreaterThanOrEqual(8);
    
    careerProjectsData.forEach(cat => {
      expect(cat.category).not.toMatch(parenthesesPattern);
      expect(cat.description).not.toMatch(parenthesesPattern);
      
      cat.projects.forEach(proj => {
        expect(['Iniciante', 'Intermediario', 'Avancado']).toContain(proj.level);
        expect(proj.title).not.toMatch(parenthesesPattern);
        expect(proj.title).not.toMatch(forbiddenPunctuation);
        expect(proj.title).not.toMatch(emojiPattern);
        expect(proj.description).not.toMatch(parenthesesPattern);
        expect(proj.description).not.toMatch(emojiPattern);
        expect(proj.tools.length).toBeGreaterThanOrEqual(2);
      });
    });
  });

});
