import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import type { MuralComment, MuralQuestion } from '../data/mural';
import {
  sanitizeText,
  validateQuestionInput,
  validateAnswerInput,
  upvoteQuestion,
  removeUpvoteQuestion,
  sortQuestions,
  filterQuestions,
  addComment
} from '../lib/mural';
import { useMuralVotes } from '../hooks/useMuralVotes';

function buildQuestions(): MuralQuestion[] {
  return [
    {
      id: 'q-antiga-votada',
      titulo: 'Questao antiga com muitos votos',
      descricao: 'Descricao suficientemente longa para validacao',
      category: 'academico',
      categoryLabel: 'Acadêmico e Disciplinas',
      upvotes: 50,
      createdAt: '2024-01-01T00:00:00.000Z',
      officialAnswer: {
        id: 'r-1',
        conteudo: 'Resposta oficial detalhada o suficiente',
        timestamp: '2024-01-02T00:00:00.000Z',
        isOfficial: true,
        authorRole: 'Coordenadoria'
      },
      comments: []
    },
    {
      id: 'q-recente-aberta',
      titulo: 'Questao recente sobre moradia estudantil',
      descricao: 'Outra descricao longa o bastante para passar',
      category: 'moradia',
      categoryLabel: 'Moradia e Apoio',
      upvotes: 5,
      createdAt: '2024-05-01T00:00:00.000Z',
      comments: []
    }
  ];
}

describe('Mural de Dúvidas: Lógica Pura', () => {
  it('sanitizeText remove travessão parênteses emoji e normaliza espaços', () => {
    const result = sanitizeText('Texto com — travessao (parenteses) 😀   e   espacos');
    expect(result).not.toMatch(/[—–()]/);
    expect(result).not.toMatch(/[\uD800-\uDBFF][\uDC00-\uDFFF]/);
    expect(result).not.toMatch(/\s{2,}/);
    expect(result.length).toBeGreaterThan(0);
  });

  it('validateQuestionInput rejeita vazio e abaixo do mínimo', () => {
    expect(validateQuestionInput({ titulo: '', descricao: '' }).length).toBeGreaterThan(0);
    expect(validateQuestionInput({ titulo: 'ab', descricao: 'curta' }).length).toBeGreaterThan(0);
    expect(
      validateQuestionInput({
        titulo: 'Titulo valido',
        descricao: 'Descricao com mais de dez caracteres'
      }).length
    ).toBe(0);
  });

  it('validateAnswerInput rejeita vazio e abaixo do mínimo', () => {
    expect(validateAnswerInput({ conteudo: '' }).length).toBeGreaterThan(0);
    expect(validateAnswerInput({ conteudo: 'curta' }).length).toBeGreaterThan(0);
    expect(validateAnswerInput({ conteudo: 'Resposta com tamanho adequado' }).length).toBe(0);
  });

  it('upvoteQuestion e removeUpvoteQuestion são imutáveis', () => {
    const questions = buildQuestions();
    const upvoted = upvoteQuestion(questions, 'q-recente-aberta');
    expect(upvoted).not.toBe(questions);
    expect(questions.find((q) => q.id === 'q-recente-aberta')?.upvotes).toBe(5);
    expect(upvoted.find((q) => q.id === 'q-recente-aberta')?.upvotes).toBe(6);

    const removed = removeUpvoteQuestion(upvoted, 'q-recente-aberta');
    expect(removed.find((q) => q.id === 'q-recente-aberta')?.upvotes).toBe(5);
  });

  it('removeUpvoteQuestion não gera valor negativo', () => {
    const questions: MuralQuestion[] = [
      { ...buildQuestions()[1], upvotes: 0 }
    ];
    const removed = removeUpvoteQuestion(questions, questions[0].id);
    expect(removed[0].upvotes).toBe(0);
  });

  it('sortQuestions ordena nas quatro modalidades', () => {
    const questions = buildQuestions();

    const porVotos = sortQuestions(questions, 'mais-votadas');
    expect(porVotos[0].id).toBe('q-antiga-votada');

    const porData = sortQuestions(questions, 'recentes');
    expect(porData[0].id).toBe('q-recente-aberta');

    const respondidas = sortQuestions(questions, 'respondidas');
    expect(respondidas[0].id).toBe('q-antiga-votada');

    const emAberto = sortQuestions(questions, 'em-aberto');
    expect(emAberto[0].id).toBe('q-recente-aberta');
  });

  it('filterQuestions aplica categoria e termo de busca', () => {
    const questions = buildQuestions();

    expect(filterQuestions(questions, 'todas', '').length).toBe(2);
    expect(filterQuestions(questions, 'moradia', '').length).toBe(1);

    const porTermo = filterQuestions(questions, 'todas', 'moradia');
    expect(porTermo.length).toBe(1);
    expect(porTermo[0].id).toBe('q-recente-aberta');

    expect(filterQuestions(questions, 'todas', 'inexistente').length).toBe(0);
  });

  it('addComment anexa o comentário higienizado à questão alvo', () => {
    const questions = buildQuestions();
    const comment: MuralComment = {
      id: 'c-1',
      conteudo: 'Comentario com (parenteses) e — travessao',
      timestamp: '2024-06-01T00:00:00.000Z'
    };

    const updated = addComment(questions, 'q-recente-aberta', comment);
    expect(updated).not.toBe(questions);
    const target = updated.find((q) => q.id === 'q-recente-aberta');
    expect(target?.comments.length).toBe(1);
    expect(target?.comments[0].conteudo).not.toMatch(/[—–()]/);
    expect(questions.find((q) => q.id === 'q-recente-aberta')?.comments.length).toBe(0);
  });
});

describe('Mural de Dúvidas: Hook useMuralVotes', () => {
  it('alterna o voto e evita contagem dupla', () => {
    window.localStorage.clear();
    const { result } = renderHook(() => useMuralVotes());

    expect(result.current.hasVoted('q-1')).toBe(false);

    act(() => {
      result.current.toggleVote('q-1');
    });
    expect(result.current.hasVoted('q-1')).toBe(true);
    expect(result.current.votedIds.filter((id) => id === 'q-1').length).toBe(1);

    act(() => {
      result.current.toggleVote('q-1');
    });
    expect(result.current.hasVoted('q-1')).toBe(false);
    expect(result.current.votedIds.filter((id) => id === 'q-1').length).toBe(0);
  });
});
