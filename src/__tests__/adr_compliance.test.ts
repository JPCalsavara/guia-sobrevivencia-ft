import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { linksData } from '../data/links';
import { courseComparisonData, graduationChecklistData } from '../data/academic';
import { organizationsData } from '../data/organizations';
import { geminiSyllabusPrompt } from '../data/prompts';

describe('Conformidade com ADR 0001: Ausência de Travessão, Parênteses e Emojis', () => {
  const forbiddenPunctuation = /[—–]/;
  const parenthesesPattern = /[()]/;
  const emojiPattern = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

  it('textos de links não devem violar o ADR 0001', () => {
    linksData.forEach((link) => {
      expect(link.title).not.toMatch(forbiddenPunctuation);
      expect(link.title).not.toMatch(parenthesesPattern);
      expect(link.title).not.toMatch(emojiPattern);

      expect(link.description).not.toMatch(forbiddenPunctuation);
      expect(link.description).not.toMatch(parenthesesPattern);
      expect(link.description).not.toMatch(emojiPattern);
    });
  });

  it('textos de academic não devem violar o ADR 0001', () => {
    courseComparisonData.forEach((row) => {
      expect(row.criterion).not.toMatch(forbiddenPunctuation);
      expect(row.criterion).not.toMatch(parenthesesPattern);
      expect(row.bsi).not.toMatch(forbiddenPunctuation);
      expect(row.bsi).not.toMatch(parenthesesPattern);
      expect(row.tads).not.toMatch(forbiddenPunctuation);
      expect(row.tads).not.toMatch(parenthesesPattern);
    });

    graduationChecklistData.forEach((item) => {
      expect(item.title).not.toMatch(forbiddenPunctuation);
      expect(item.title).not.toMatch(parenthesesPattern);
      expect(item.description).not.toMatch(forbiddenPunctuation);
      expect(item.description).not.toMatch(parenthesesPattern);
      expect(item.detail).not.toMatch(forbiddenPunctuation);
      expect(item.detail).not.toMatch(parenthesesPattern);
    });
  });

  it('textos de organizações não devem violar o ADR 0001', () => {
    organizationsData.forEach((org) => {
      expect(org.name).not.toMatch(forbiddenPunctuation);
      expect(org.name).not.toMatch(parenthesesPattern);
      expect(org.description).not.toMatch(forbiddenPunctuation);
      expect(org.description).not.toMatch(parenthesesPattern);
      expect(org.categoryLabel).not.toMatch(forbiddenPunctuation);
      expect(org.categoryLabel).not.toMatch(parenthesesPattern);
    });
  });

  it('o prompt estruturado do Gemini não deve violar o ADR 0001', () => {
    expect(geminiSyllabusPrompt).not.toMatch(forbiddenPunctuation);
    expect(geminiSyllabusPrompt).not.toMatch(parenthesesPattern);
    expect(geminiSyllabusPrompt).not.toMatch(emojiPattern);
  });

  it('documentos ADR e CONTEXT.md não devem violar o ADR 0001', () => {
    const docs = [
      'docs/adr/0001-estilo-textual-sem-marcas-artificiais.md',
      'docs/adr/0002-responsividade-mobile-first.md',
      'CONTEXT.md'
    ];
    docs.forEach((docPath) => {
      const fullPath = path.resolve(process.cwd(), docPath);
      if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        expect(content).not.toMatch(forbiddenPunctuation);
        expect(content).not.toMatch(parenthesesPattern);
      }
    });
  });
});
