import { describe, it, expect } from 'vitest';
import {
  muralSeedData,
  muralCategories,
  muralSortOptions
} from '../data/mural';

describe('Mural de Dúvidas: Validação dos Dados Semente', () => {
  const forbiddenPunctuation = /[—–]/;
  const parenthesesPattern = /[()]/;
  const emojiPattern = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
  const validCategories = ['matricula', 'academico', 'campus', 'carreira', 'moradia'];

  it('deve conter as opções de categoria fundamentais', () => {
    const ids = muralCategories.map((c) => c.id);
    expect(ids).toContain('todas');
    expect(ids).toContain('matricula');
    expect(ids).toContain('academico');
    expect(ids).toContain('campus');
    expect(ids).toContain('carreira');
    expect(ids).toContain('moradia');
  });

  it('deve expor as quatro modalidades de ordenação', () => {
    const ids = muralSortOptions.map((o) => o.id);
    expect(ids).toContain('mais-votadas');
    expect(ids).toContain('recentes');
    expect(ids).toContain('respondidas');
    expect(ids).toContain('em-aberto');
  });

  it('deve conter no mínimo seis questões canônicas', () => {
    expect(muralSeedData.length).toBeGreaterThanOrEqual(6);
  });

  it('todas as questões devem possuir identificador único e categoria válida', () => {
    const ids = new Set<string>();

    muralSeedData.forEach((question) => {
      expect(ids.has(question.id)).toBe(false);
      ids.add(question.id);

      expect(validCategories).toContain(question.category);
      expect(question.categoryLabel.length).toBeGreaterThan(0);
      expect(question.titulo.length).toBeGreaterThan(5);
      expect(question.descricao.length).toBeGreaterThan(10);
      expect(typeof question.upvotes).toBe('number');
      expect(Array.isArray(question.comments)).toBe(true);
    });
  });

  it('deve possuir ao menos uma questão com resposta oficial e ao menos uma em aberto', () => {
    const comResposta = muralSeedData.filter(
      (q) => q.officialAnswer && q.officialAnswer.isOfficial === true
    );
    const emAberto = muralSeedData.filter((q) => !q.officialAnswer);

    expect(comResposta.length).toBeGreaterThanOrEqual(1);
    expect(emAberto.length).toBeGreaterThanOrEqual(1);
  });

  it('respostas oficiais devem indicar rótulo institucional', () => {
    muralSeedData.forEach((question) => {
      if (question.officialAnswer) {
        expect(question.officialAnswer.authorRole.length).toBeGreaterThan(0);
        expect(question.officialAnswer.conteudo.length).toBeGreaterThan(10);
      }
    });
  });

  it('links institucionais devem apontar para domínios oficiais da Unicamp', () => {
    const canonicalDomains = ['unicamp.br', 'dac.unicamp.br', 'ft.unicamp.br'];

    muralSeedData.forEach((question) => {
      if (question.officialAnswer) {
        const matches = question.officialAnswer.conteudo.match(/https?:\/\/[^\s]+/g) || [];
        matches.forEach((rawUrl) => {
          const url = new URL(rawUrl);
          const isOfficial = canonicalDomains.some((d) => url.hostname.endsWith(d));
          expect(isOfficial).toBe(true);
        });
      }
    });
  });

  it('os textos das questões não devem violar o ADR 0001', () => {
    muralSeedData.forEach((question) => {
      [question.titulo, question.descricao, question.categoryLabel].forEach((text) => {
        expect(text).not.toMatch(forbiddenPunctuation);
        expect(text).not.toMatch(parenthesesPattern);
        expect(text).not.toMatch(emojiPattern);
      });

      if (question.officialAnswer) {
        expect(question.officialAnswer.conteudo).not.toMatch(forbiddenPunctuation);
        expect(question.officialAnswer.conteudo).not.toMatch(parenthesesPattern);
        expect(question.officialAnswer.conteudo).not.toMatch(emojiPattern);
        expect(question.officialAnswer.authorRole).not.toMatch(forbiddenPunctuation);
        expect(question.officialAnswer.authorRole).not.toMatch(parenthesesPattern);
        expect(question.officialAnswer.authorRole).not.toMatch(emojiPattern);
      }

      question.comments.forEach((comment) => {
        expect(comment.conteudo).not.toMatch(forbiddenPunctuation);
        expect(comment.conteudo).not.toMatch(parenthesesPattern);
        expect(comment.conteudo).not.toMatch(emojiPattern);
      });
    });
  });
});
