import { describe, it, expect } from 'vitest';
import { organizationsData } from '../data/organizations';

describe('Diretorio de Organizacoes Estudantis', () => {
  it('deve conter entidades ativas da FT e de Limeira', () => {
    expect(organizationsData.length).toBeGreaterThanOrEqual(10);
  });

  it('deve incluir Atria Jr, CDI, AAATU, Liestag, LiUP e Semeia Code', () => {
    const ids = organizationsData.map((o) => o.id);
    expect(ids).toContain('atria-jr');
    expect(ids).toContain('cdi-ft');
    expect(ids).toContain('aaatu');
    expect(ids).toContain('liestag');
    expect(ids).toContain('liup-startups');
    expect(ids).toContain('semeia-code');
  });

  it('deve incluir IdEA Unicamp, ExpL0Ra FT e Embaixadoras da Ciência e Tecnologia', () => {
    const ids = organizationsData.map((o) => o.id);
    expect(ids).toContain('idea-unicamp');
    expect(ids).toContain('explora-ft');
    expect(ids).toContain('embaixadoras-stem');
    expect(ids).toContain('liga-mkt-unicamp');
    expect(ids).toContain('marsha-pelo-orgulho');
    expect(ids).toContain('robocamp-ft');
    expect(ids).toContain('aupe-unicamp');
    expect(ids).toContain('nexus-girls-unicamp');
  });

  it('deve conter a associacao de extensao AUPE Unicamp com instagram oficial', () => {
    const aupe = organizationsData.find((o) => o.id === 'aupe-unicamp');
    expect(aupe).toBeDefined();
    expect(aupe?.name).toContain('AUPE');
    expect(aupe?.category).toBe('extensao');
    expect(aupe?.instagramUrl).toBe('https://www.instagram.com/aupe.unicamp/');
  });

  it('deve conter o projeto Nexus Girls Unicamp com instagram oficial', () => {
    const nexus = organizationsData.find((o) => o.id === 'nexus-girls-unicamp');
    expect(nexus).toBeDefined();
    expect(nexus?.name).toBe('Nexus Girls Unicamp');
    expect(nexus?.category).toBe('extensao');
    expect(nexus?.instagramUrl).toBe('https://www.instagram.com/nexus.girls_unicamp/');
  });

  it('deve conter o site oficial do Semeia Code', () => {
    const semeia = organizationsData.find((o) => o.id === 'semeia-code');
    expect(semeia).toBeDefined();
    expect(semeia?.websiteUrl).toBe('https://semeiacode.vercel.app/');
  });

  it('deve validar URLs do LinkedIn presentes nas organizacoes', () => {
    const orgsWithLinkedin = organizationsData.filter((o) => o.linkedinUrl);
    expect(orgsWithLinkedin.length).toBeGreaterThanOrEqual(6);
    orgsWithLinkedin.forEach((org) => {
      expect(org.linkedinUrl).toMatch(/^https:\/\/(www\.)?linkedin\.com\//);
    });
  });

  it('cada organizacao deve possuir nome, categoria e descricao valida', () => {
    organizationsData.forEach((org) => {
      expect(org.name).toBeTruthy();
      expect(org.category).toBeTruthy();
      expect(org.description).toBeTruthy();
      if (org.instagramUrl) {
        expect(org.instagramUrl).toMatch(/^https:\/\/www\.instagram\.com\//);
      }
      if (org.websiteUrl) {
        expect(org.websiteUrl).toMatch(/^https?:\/\//);
      }
    });
  });

  it('o identificador de video quando presente deve ser um id curto sem caracteres de URL', () => {
    organizationsData.forEach((org) => {
      if (org.youtubeId) {
        expect(org.youtubeId.length).toBeGreaterThan(0);
        expect(org.youtubeId).not.toMatch(/[\/:?&=.\s]/);
      }
    });
  });

  it('a url de recrutamento quando presente deve apontar para canal canonico http ou https', () => {
    organizationsData.forEach((org) => {
      if (org.recruitmentUrl) {
        expect(org.recruitmentUrl).toMatch(/^https?:\/\//);
      }
    });
  });

  it('o indicador de periodicidade quando presente deve ser texto nao vazio', () => {
    organizationsData.forEach((org) => {
      if (org.recruitmentPeriod) {
        expect(org.recruitmentPeriod.trim().length).toBeGreaterThan(0);
      }
    });
  });

  it('ao menos uma entidade deve expor canal de recrutamento e periodicidade', () => {
    const withRecruitment = organizationsData.filter(
      (o) => o.recruitmentUrl && o.recruitmentPeriod
    );
    expect(withRecruitment.length).toBeGreaterThanOrEqual(1);
  });
});
