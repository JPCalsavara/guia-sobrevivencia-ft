import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AcademicCalendar } from '../components/AcademicCalendar/AcademicCalendar';
import {
  academicMilestonesData,
  canonicalAcademicResources
} from '../data/academicCalendar';

describe('Painel de Calendario Academico e Marcos Oficiais DAC', () => {
  it('deve conter colecao estruturada com todos os marcos semestrais essenciais', () => {
    expect(academicMilestonesData.length).toBeGreaterThanOrEqual(10);

    const categories = new Set(academicMilestonesData.map((m) => m.category));
    expect(categories.has('matricula')).toBe(true);
    expect(categories.has('aulas')).toBe(true);
    expect(categories.has('trancamento')).toBe(true);
    expect(categories.has('avaliacoes')).toBe(true);
    expect(categories.has('conclusao')).toBe(true);
  });

  it('deve conter recursos canonicos apontando para o portal da DAC', () => {
    expect(canonicalAcademicResources.length).toBeGreaterThanOrEqual(4);

    canonicalAcademicResources.forEach((res) => {
      expect(res.url).toContain('dac.unicamp.br');
      expect(res.title.length).toBeGreaterThan(0);
      expect(res.description.length).toBeGreaterThan(0);
    });
  });

  it('deve renderizar o cabecalho canonico e os cartoes de recursos oficiais', () => {
    render(<AcademicCalendar />);

    expect(screen.getByText('Fontes Canonicas e Calendario Oficial da DAC')).toBeDefined();
    expect(screen.getByText('Calendario Escolar Oficial da DAC')).toBeDefined();
    expect(screen.getByText('Portal de Servicos e-DAC')).toBeDefined();
    expect(screen.getByText('Regimento Geral dos Cursos de Graduacao')).toBeDefined();
  });

  it('deve filtrar marcos por categoria ao clicar nos botoes de filtro', () => {
    render(<AcademicCalendar />);

    const trancamentoBtn = screen.getByRole('button', { name: 'Trancamento' });
    fireEvent.click(trancamentoBtn);

    expect(screen.getByText('Trancamento Parcial de Disciplinas')).toBeDefined();
    expect(screen.getByText('Trancamento Geral de Matricula do Curso')).toBeDefined();
    expect(screen.queryByText('Matricula Regular em Disciplinas')).toBeNull();
  });

  it('deve filtrar marcos em tempo real via busca textual por palavra chave', () => {
    render(<AcademicCalendar />);

    const searchInput = screen.getByLabelText('Filtrar marcos academicos por palavra chave');
    fireEvent.change(searchInput, { target: { value: 'colacao' } });

    expect(screen.getByText('Confirmacao de Formatura e Colacao de Grau')).toBeDefined();
    expect(screen.queryByText('Inicio do Periodo Letivo')).toBeNull();
  });

  it('deve exibir mensagem de estado vazio quando nenhuma correspondencia for encontrada', () => {
    render(<AcademicCalendar />);

    const searchInput = screen.getByLabelText('Filtrar marcos academicos por palavra chave');
    fireEvent.change(searchInput, { target: { value: 'termoinexistente999' } });

    expect(screen.getByText('Nenhum marco academico correspondente aos criterios informados foi localizado.')).toBeDefined();
  });
});
