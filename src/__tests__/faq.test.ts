import { describe, it, expect } from 'vitest';
import { faqData, faqCategories } from '../data/faq';

describe('Portal de Dúvidas: Validação de Dados e Regras de Negócio', () => {
  it('deve conter as categorias fundamentais de dúvidas', () => {
    const categoryIds = faqCategories.map((c) => c.id);
    expect(categoryIds).toContain('todas');
    expect(categoryIds).toContain('matricula');
    expect(categoryIds).toContain('academico');
    expect(categoryIds).toContain('campus');
    expect(categoryIds).toContain('carreira');
    expect(categoryIds).toContain('moradia');
  });

  it('deve possuir catálogo consistente com no mínimo dez dúvidas estruturadas', () => {
    expect(faqData.length).toBeGreaterThanOrEqual(10);
  });

  it('todas as dúvidas devem possuir identificador único e categoria válida', () => {
    const ids = new Set<string>();
    const validCategories = ['matricula', 'academico', 'campus', 'carreira', 'moradia'];

    faqData.forEach((item) => {
      expect(ids.has(item.id)).toBe(false);
      ids.add(item.id);

      expect(validCategories).toContain(item.category);
      expect(item.categoryLabel.length).toBeGreaterThan(0);
      expect(item.question.length).toBeGreaterThan(10);
      expect(item.answer.length).toBeGreaterThan(0);
      expect(item.keywords.length).toBeGreaterThan(0);
    });
  });

  it('todas as respostas devem conter parágrafos não vazios', () => {
    faqData.forEach((item) => {
      item.answer.forEach((paragraph) => {
        expect(paragraph.trim().length).toBeGreaterThan(15);
      });
    });
  });

  it('links associados às dúvidas devem possuir formato e rótulo válidos', () => {
    faqData.forEach((item) => {
      if (item.links && item.links.length > 0) {
        item.links.forEach((link) => {
          expect(link.label.trim().length).toBeGreaterThan(0);
          expect(link.url.startsWith('/') || link.url.startsWith('https://')).toBe(true);
        });
      }
    });
  });
});
