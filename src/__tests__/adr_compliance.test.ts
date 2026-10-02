import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { linksData } from '../data/links';
import { courseComparisonData, graduationChecklistData, padComparisonData } from '../data/academic';
import { organizationsData } from '../data/organizations';
import { geminiSyllabusPrompt } from '../data/prompts';
import { searchIndex } from '../data/searchIndex';
import { faqData } from '../data/faq';

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

    padComparisonData.forEach((row) => {
      expect(row.criterion).not.toMatch(forbiddenPunctuation);
      expect(row.criterion).not.toMatch(parenthesesPattern);
      expect(row.withScholarship).not.toMatch(forbiddenPunctuation);
      expect(row.withScholarship).not.toMatch(parenthesesPattern);
      expect(row.withoutScholarship).not.toMatch(forbiddenPunctuation);
      expect(row.withoutScholarship).not.toMatch(parenthesesPattern);
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

  it('textos de searchIndex não devem violar o ADR 0001', () => {
    searchIndex.forEach((doc) => {
      expect(doc.title).not.toMatch(forbiddenPunctuation);
      expect(doc.title).not.toMatch(parenthesesPattern);
      expect(doc.title).not.toMatch(emojiPattern);

      expect(doc.summary).not.toMatch(forbiddenPunctuation);
      expect(doc.summary).not.toMatch(parenthesesPattern);
      expect(doc.summary).not.toMatch(emojiPattern);

      doc.keywords.forEach((kw) => {
        expect(kw).not.toMatch(forbiddenPunctuation);
        expect(kw).not.toMatch(parenthesesPattern);
        expect(kw).not.toMatch(emojiPattern);
      });
    });
  });

  it('textos de faqData não devem violar o ADR 0001', () => {
    faqData.forEach((item) => {
      expect(item.question).not.toMatch(forbiddenPunctuation);
      expect(item.question).not.toMatch(parenthesesPattern);
      expect(item.question).not.toMatch(emojiPattern);

      item.answer.forEach((p) => {
        expect(p).not.toMatch(forbiddenPunctuation);
        expect(p).not.toMatch(parenthesesPattern);
        expect(p).not.toMatch(emojiPattern);
      });

      item.keywords.forEach((kw) => {
        expect(kw).not.toMatch(forbiddenPunctuation);
        expect(kw).not.toMatch(parenthesesPattern);
        expect(kw).not.toMatch(emojiPattern);
      });

      if (item.links) {
        item.links.forEach((l) => {
          expect(l.label).not.toMatch(forbiddenPunctuation);
          expect(l.label).not.toMatch(parenthesesPattern);
          expect(l.label).not.toMatch(emojiPattern);
        });
      }
    });
  });

  it('documentos ADR e CONTEXT.md não devem violar o ADR 0001', () => {
    const docs = [
      'docs/adr/0001-estilo-textual-sem-marcas-artificiais.md',
      'docs/adr/0002-responsividade-mobile-first.md',
      'docs/adr/0003-acessibilidade-digital-wcag.md',
      'docs/adr/0004-desacoplamento-de-informacoes-volateis.md',
      'docs/adr/0005-concisao-e-clareza-orientada-a-essencia.md',
      'docs/adr/0006-otimizacao-continua-guiada-por-telemetria.md',
      'docs/adr/0007-hospedagem-na-vercel-com-analytics-integrado.md',
      'docs/adr/0008-versionamento-semantico-releases-automaticos-e-protecao-de-branch.md',
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

describe('Conformidade com ADR 0004: Desacoplamento de Informações Voláteis', () => {
  it('não deve conter horários exatos de refeições ou transporte hardcoded nas páginas de campus e links', () => {
    const campusFile = fs.readFileSync(path.resolve(process.cwd(), 'src/app/campus/page.tsx'), 'utf8');
    const linksFile = fs.readFileSync(path.resolve(process.cwd(), 'src/app/links/page.tsx'), 'utf8');
    const calourosFile = fs.readFileSync(path.resolve(process.cwd(), 'src/app/calouros/page.tsx'), 'utf8');

    // Nao deve conter frases com horarios rigidos transcritos no texto
    expect(campusFile).not.toMatch(/onze às catorze/i);
    expect(campusFile).not.toMatch(/dezessete e trinta/i);
    expect(campusFile).not.toMatch(/seis e quarenta até/i);
    expect(campusFile).not.toMatch(/15 páginas/i);

    // Links page e Calouros page nao devem prometer horarios no texto estatico
    expect(linksFile).not.toMatch(/horários de transporte/i);
    expect(calourosFile).not.toMatch(/onze às catorze/i);
    expect(calourosFile).not.toMatch(/dezessete e trinta/i);
  });

  it('todos os links para servicos de transporte e refeicao devem apontar para dominios canonicos oficiais', () => {
    const canonicalDomains = [
      'unicamp.br',
      'prefeituralimeira.unicamp.br',
      'ft.unicamp.br',
      'dac.unicamp.br'
    ];

    const criticalLinks = linksData.filter((l) =>
      ['intercamp-info', 'intercamp-reserva', 'circular-info', 'circular-horarios', 'ru-info', 'ru-cardapio'].includes(l.id)
    );

    expect(criticalLinks.length).toBe(6);
    criticalLinks.forEach((link) => {
      const url = new URL(link.url);
      const isOfficial = canonicalDomains.some((d) => url.hostname.endsWith(d));
      expect(isOfficial).toBe(true);
    });
  });
});

describe('Conformidade com ADR 0003: Acessibilidade Digital e Recursos Ativos', () => {
  it('o layout global deve conter link de salto para conteudo, id no main e AccessibilityWidget', () => {
    const layoutContent = fs.readFileSync(path.resolve(process.cwd(), 'src/app/layout.tsx'), 'utf8');
    expect(layoutContent).toContain('skipLink');
    expect(layoutContent).toContain('href="#main-content"');
    expect(layoutContent).toContain('id="main-content"');
    expect(layoutContent).toContain('AccessibilityWidget');
  });

  it('as folhas de estilo globais devem conter foco visivel, skipLink e reducao de movimento', () => {
    const scssContent = fs.readFileSync(path.resolve(process.cwd(), 'src/styles/globals.scss'), 'utf8');
    expect(scssContent).toContain(':focus-visible');
    expect(scssContent).toContain('.skipLink');
    expect(scssContent).toContain('prefers-reduced-motion');
    expect(scssContent).toContain('data-font-size');
    expect(scssContent).toContain('data-color-filter');
  });

  it('o AccessibilityWidget deve prover suporte a daltonismo, escala de fonte e auxilio auditivo', () => {
    const widgetContent = fs.readFileSync(
      path.resolve(process.cwd(), 'src/components/AccessibilityWidget/AccessibilityWidget.tsx'),
      'utf8'
    );
    expect(widgetContent).toContain('protanopia');
    expect(widgetContent).toContain('deuteranopia');
    expect(widgetContent).toContain('tritanopia');
    expect(widgetContent).toContain('achromatopsia');
    expect(widgetContent).toContain('high-contrast-yellow');
    expect(widgetContent).toContain('normal');
    expect(widgetContent).toContain('large');
    expect(widgetContent).toContain('extralarge');
    expect(widgetContent).toContain('VLibras');
  });
});
