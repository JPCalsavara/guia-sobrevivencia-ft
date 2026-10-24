// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { createSearchEngine } from '../services/searchEngine';
import { askGeminiSearch } from '../services/searchEngine/geminiAdapter';

function buildFakeFetch(text: string): typeof globalThis.fetch {
  const fake = async () =>
    ({
      ok: true,
      json: async () => ({
        candidates: [{ content: { parts: [{ text }] } }],
      }),
    }) as unknown as Response;
  return fake as unknown as typeof globalThis.fetch;
}

describe('Costura SearchEngine', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('searchLocal', () => {
    const engine = createSearchEngine();

    it('deve retornar vazio para buscas vazias ou apenas espacos', () => {
      expect(engine.searchLocal('')).toEqual([]);
      expect(engine.searchLocal('   ')).toEqual([]);
    });

    it('deve encontrar documentos com e sem acento ao buscar cardapio', () => {
      const comAcento = engine.searchLocal('cardápio');
      const semAcento = engine.searchLocal('cardapio');
      expect(comAcento.length).toBeGreaterThan(0);
      expect(semAcento.length).toBeGreaterThan(0);
    });

    it('deve encontrar informacoes academicas como BSI e TADS', () => {
      const results = engine.searchLocal('bsi tads');
      expect(results.length).toBeGreaterThan(0);
      expect(results.some((doc) => doc.id.includes('bsi-vs-tads') || doc.title.toLowerCase().includes('bsi'))).toBe(true);
    });

    it('deve encontrar recursos de carreira como latex', () => {
      const results = engine.searchLocal('latex');
      expect(results.length).toBeGreaterThan(0);
      expect(results[0].id).toContain('curriculo-latex');
    });

    it('deve encontrar referencias de IA e Karpathy', () => {
      const results = engine.searchLocal('karpathy');
      expect(results.length).toBeGreaterThan(0);
      expect(results.some((doc) => doc.id.includes('fundamentos') || doc.keywords.includes('karpathy'))).toBe(true);
    });

    it('deve encontrar a secao de Maratona de Programacao', () => {
      const results = engine.searchLocal('maratona');
      expect(results.length).toBeGreaterThan(0);
      expect(results.some((doc) => doc.id.includes('maratona'))).toBe(true);
    });
  });

  describe('ask', () => {
    it('deve extrair os documentos do marcador DOCUMENTOS_RELEVANTES', async () => {
      const fakeFetch = buildFakeFetch(
        'Resposta objetiva do assistente.\nDOCUMENTOS_RELEVANTES: academico-bsi-vs-tads'
      );
      const result = await askGeminiSearch('bsi tads', 'AIzaChaveFalsa', fakeFetch);
      expect(result.answer).toBe('Resposta objetiva do assistente.');
      expect(result.recommendedDocs.some((doc) => doc.id === 'academico-bsi-vs-tads')).toBe(true);
    });

    it('deve cair no fallback local quando nenhum ID e retornado', async () => {
      const fakeFetch = buildFakeFetch('Resposta sem marcador de documentos.');
      const result = await askGeminiSearch('latex', 'AIzaChaveFalsa', fakeFetch);
      expect(result.answer).toBe('Resposta sem marcador de documentos.');
      expect(result.recommendedDocs.length).toBeGreaterThan(0);
      expect(result.recommendedDocs[0].id).toContain('curriculo-latex');
    });

    it('deve lançar erro quando a chave de API esta ausente', async () => {
      const engine = createSearchEngine();
      await expect(engine.ask('latex')).rejects.toThrow('Chave de API do Gemini não configurada.');
    });
  });
});
