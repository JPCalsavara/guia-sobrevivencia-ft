import { describe, it, expect } from 'vitest';
import { generateDailyReportData, formatReportText } from '../../scripts/daily-analytics-report.mjs';

describe('Relatório Diário de Analytics e Sugestões de Melhoria', () => {
  const forbiddenPunctuation = /[—–]/;
  const parenthesesPattern = /[()]/;
  const emojiPattern = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

  it('deve compilar metricas de audiencia e gerar recomendacoes estruturadas', () => {
    const reportData = generateDailyReportData();

    expect(reportData).toBeDefined();
    expect(reportData.totalVisitantesSnapshot).toBeGreaterThan(0);
    expect(reportData.totalVisualizacoesSnapshot).toBeGreaterThan(0);
    expect(Array.isArray(reportData.topTopics)).toBe(true);
    expect(Array.isArray(reportData.melhoriasRecomendadas)).toBe(true);
    expect(reportData.melhoriasRecomendadas.length).toBeGreaterThanOrEqual(3);
  });

  it('o relatorio formatado deve conter destinatario institucional j197837@dac.unicamp.br e todas as secoes', () => {
    const reportData = generateDailyReportData();
    const text = formatReportText(reportData);

    expect(text).toContain('Destinatario: j197837@dac.unicamp.br');
    expect(text).toContain('1. METRICAS GERAIS DE AUDIENCIA');
    expect(text).toContain('2. SECOES MAIS ACESSADAS');
    expect(text).toContain('3. ROTAS MAIS FREQUENTES NO PORTAL');
    expect(text).toContain('4. DUVIDAS SUBMETIDAS POR ALUNOS');
    expect(text).toContain('5. RECOMENDACOES DE MELHORIA ORIENTADAS POR DADOS');
  });

  it('todas as recomendacoes de melhoria devem respeitar rigorosamente a ADR 0001', () => {
    const reportData = generateDailyReportData();

    reportData.melhoriasRecomendadas.forEach((rec) => {
      expect(rec).not.toMatch(forbiddenPunctuation);
      expect(rec).not.toMatch(parenthesesPattern);
      expect(rec).not.toMatch(emojiPattern);
    });

    const fullText = formatReportText(reportData);
    expect(fullText).not.toMatch(forbiddenPunctuation);
    expect(fullText).not.toMatch(parenthesesPattern);
    expect(fullText).not.toMatch(emojiPattern);
  });
});
