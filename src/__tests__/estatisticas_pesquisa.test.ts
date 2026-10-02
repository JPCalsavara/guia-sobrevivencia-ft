import { describe, it, expect } from 'vitest';
import { computeAggregates, PesquisaResposta } from '../lib/pesquisa';

describe('Pesquisa e Estatísticas da FT', () => {
  it('computa agregados com precisao percentual para respostas da pesquisa', () => {
    const mockVotes: PesquisaResposta[] = [
      { momentoCurso: 'calouro', maiorDesafio: 'materias_exatas', objetivoCarreira: 'mercado_bigtech' },
      { momentoCurso: 'calouro', maiorDesafio: 'materias_exatas', objetivoCarreira: 'startups_negocios' },
      { momentoCurso: 'meio', maiorDesafio: 'conciliacao_estagio', objetivoCarreira: 'mercado_bigtech' },
      { momentoCurso: 'formando', maiorDesafio: 'conciliacao_estagio', objetivoCarreira: 'posgrad_pesquisa' },
    ];

    const aggregates = computeAggregates(mockVotes);

    expect(aggregates.totalVotos).toBe(4);
    expect(aggregates.momentoCurso.calouro.count).toBe(2);
    expect(aggregates.momentoCurso.calouro.pct).toBe(50);
    expect(aggregates.momentoCurso.meio.count).toBe(1);
    expect(aggregates.momentoCurso.meio.pct).toBe(25);
    expect(aggregates.momentoCurso.formando.count).toBe(1);
    expect(aggregates.momentoCurso.formando.pct).toBe(25);

    expect(aggregates.maiorDesafio.materias_exatas.count).toBe(2);
    expect(aggregates.maiorDesafio.materias_exatas.pct).toBe(50);
    expect(aggregates.maiorDesafio.conciliacao_estagio.count).toBe(2);
    expect(aggregates.maiorDesafio.conciliacao_estagio.pct).toBe(50);

    expect(aggregates.objetivoCarreira.mercado_bigtech.count).toBe(2);
    expect(aggregates.objetivoCarreira.mercado_bigtech.pct).toBe(50);
    expect(aggregates.objetivoCarreira.posgrad_pesquisa.count).toBe(1);
    expect(aggregates.objetivoCarreira.posgrad_pesquisa.pct).toBe(25);
  });

  it('lida com listas vazias sem disparar excecoes de divisao por zero', () => {
    const emptyVotes: PesquisaResposta[] = [];
    const aggregates = computeAggregates(emptyVotes);

    expect(aggregates.totalVotos).toBe(1);
    expect(aggregates.momentoCurso.calouro.count).toBe(0);
    expect(aggregates.momentoCurso.calouro.pct).toBe(0);
  });

  it('valida que todos os labels das alternativas estao preenchidos sem caracteres proibidos', () => {
    const mockVotes: PesquisaResposta[] = [
      { momentoCurso: 'calouro', maiorDesafio: 'transporte_moradia', objetivoCarreira: 'mercado_bigtech' }
    ];
    const aggregates = computeAggregates(mockVotes);

    const checkProhibited = (text: string) => {
      expect(text).not.toMatch(/[()—–]/);
      expect(text).not.toMatch(/[\uD800-\uDBFF][\uDC00-\uDFFF]/);
    };

    Object.values(aggregates.momentoCurso).forEach((item) => checkProhibited(item.label));
    Object.values(aggregates.maiorDesafio).forEach((item) => checkProhibited(item.label));
    Object.values(aggregates.objetivoCarreira).forEach((item) => checkProhibited(item.label));
  });
});
