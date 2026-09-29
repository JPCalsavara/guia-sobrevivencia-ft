// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { performLocalSearch, getStoredApiKey, setStoredApiKey, clearStoredApiKey } from '../services/geminiSearch';

describe('Serviço de Busca Local e Chave de IA', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('deve retornar vazio para buscas vazias ou apenas espacos', () => {
    expect(performLocalSearch('')).toEqual([]);
    expect(performLocalSearch('   ')).toEqual([]);
  });

  it('deve encontrar documentos por correspondencia de termos com e sem acento', () => {
    const resultsComAcento = performLocalSearch('cardápio');
    const resultsSemAcento = performLocalSearch('cardapio');

    expect(resultsComAcento.length).toBeGreaterThan(0);
    expect(resultsComAcento.some((doc) => doc.id.includes('transporte-alimentacao') || doc.keywords.includes('cardapio'))).toBe(true);
    expect(resultsSemAcento.length).toBeGreaterThan(0);
    expect(resultsSemAcento.some((doc) => doc.id.includes('transporte-alimentacao') || doc.keywords.includes('cardapio'))).toBe(true);
  });

  it('deve encontrar informacoes academicas como BSI e TADS', () => {
    const results = performLocalSearch('bsi tads');
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((doc) => doc.id.includes('bsi-vs-tads') || doc.title.toLowerCase().includes('bsi'))).toBe(true);
  });

  it('deve encontrar recursos de carreira como latex e curriculo', () => {
    const results = performLocalSearch('latex');
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].id).toContain('curriculo-latex');
  });

  it('deve encontrar referencias de IA e Karpathy', () => {
    const results = performLocalSearch('karpathy');
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((doc) => doc.id.includes('fundamentos') || doc.keywords.includes('karpathy'))).toBe(true);
  });

  it('deve salvar, recuperar e remover a chave de API no localStorage', () => {
    expect(getStoredApiKey()).toBe('');

    setStoredApiKey('AIzaSyTestKey123');
    expect(getStoredApiKey()).toBe('AIzaSyTestKey123');

    clearStoredApiKey();
    expect(getStoredApiKey()).toBe('');
  });
});
