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
});
