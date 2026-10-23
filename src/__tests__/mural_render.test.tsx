import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { MuralBoard } from '../components/Mural/MuralBoard';
import { muralSeedData } from '../data/mural';

describe('MuralBoard renderizacao do mural interativo', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('deve renderizar as questoes semente com titulos e botoes de apoio', () => {
    render(<MuralBoard seedData={muralSeedData} />);

    muralSeedData.forEach((question) => {
      expect(screen.getByText(question.titulo)).toBeDefined();
    });

    const botoesApoio = screen.getAllByRole('button', { name: /apoiar esta duvida/i });
    expect(botoesApoio.length).toBe(muralSeedData.length);
  });

  it('deve incrementar o contador e refletir aria-pressed ao acionar o UpvoteButton', () => {
    render(<MuralBoard seedData={muralSeedData} />);

    const primeiraQuestao = [...muralSeedData].sort((a, b) => b.upvotes - a.upvotes)[0];
    const article = screen.getByText(primeiraQuestao.titulo).closest('article');
    expect(article).not.toBeNull();

    const botao = within(article as HTMLElement).getByRole('button', {
      name: /apoiar esta duvida/i
    });

    expect(botao.getAttribute('aria-pressed')).toBe('false');
    const contador = within(article as HTMLElement).getByText(String(primeiraQuestao.upvotes));
    expect(contador.getAttribute('aria-live')).toBe('polite');

    fireEvent.click(botao);

    expect(
      within(article as HTMLElement).getByText(String(primeiraQuestao.upvotes + 1))
    ).toBeDefined();
    expect(
      within(article as HTMLElement).getByRole('button', { name: /remover apoio desta duvida/i }).getAttribute('aria-pressed')
    ).toBe('true');
  });

  it('deve exibir a resposta oficial com distintivo institucional ao expandir', () => {
    render(<MuralBoard seedData={muralSeedData} />);

    const distintivos = screen.getAllByText('Resposta oficial da gestao');
    expect(distintivos.length).toBeGreaterThan(0);

    const notas = screen.getAllByRole('note', {
      name: /resposta oficial da gestao do guia ft/i
    });
    expect(notas.length).toBeGreaterThan(0);
  });

  it('deve listar comentarios da comunidade ao expandir a secao de comentarios', () => {
    const questaoComComentario = muralSeedData.find((q) => q.comments.length > 0);
    expect(questaoComComentario).toBeDefined();

    render(<MuralBoard seedData={muralSeedData} />);

    const article = screen
      .getByText((questaoComComentario as typeof muralSeedData[number]).titulo)
      .closest('article');
    const details = (article as HTMLElement).querySelector('details');
    expect(details).not.toBeNull();

    fireEvent.click((details as HTMLDetailsElement).querySelector('summary') as HTMLElement);

    const comentario = (questaoComComentario as typeof muralSeedData[number]).comments[0];
    expect(within(article as HTMLElement).getByText(comentario.conteudo)).toBeDefined();
  });

  it('deve reordenar a lista ao mudar o filtro de ordenacao para recentes', () => {
    render(<MuralBoard seedData={muralSeedData} />);

    const esperadoRecente = [...muralSeedData].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )[0];

    const select = screen.getByLabelText('Ordenar por');
    fireEvent.change(select, { target: { value: 'recentes' } });

    const titulos = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent);
    expect(titulos[0]).toBe(esperadoRecente.titulo);
  });

  it('deve exibir erro acessivel ao enviar o formulario de nova questao vazio', () => {
    render(<MuralBoard seedData={muralSeedData} />);

    const botaoPublicar = screen.getByRole('button', { name: /publicar no mural/i });
    fireEvent.click(botaoPublicar);

    const alerta = screen.getByRole('alert');
    expect(alerta).toBeDefined();
    expect(alerta.textContent).toContain('Corrija os campos abaixo');
  });
});
