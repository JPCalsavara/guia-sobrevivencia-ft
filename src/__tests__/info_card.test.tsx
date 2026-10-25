import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { InfoCard } from '../components/InfoCard/InfoCard';
import { CardGrid } from '../components/CardGrid/CardGrid';

describe('Componente InfoCard', () => {
  it('deve renderizar titulo e corpo', () => {
    render(<InfoCard title="Matricula Virtual" body="Faca sua matricula no portal da DAC." />);

    expect(screen.getByText('Matricula Virtual')).toBeDefined();
    expect(screen.getByText('Faca sua matricula no portal da DAC.')).toBeDefined();
  });

  it('deve iniciar o detalhe secundario recolhido e expandir via clique alternando aria-expanded', () => {
    render(
      <InfoCard
        title="Bandejao"
        body="Resumo curto sobre o restaurante universitario."
        detail="Detalhe secundario com informacoes adicionais."
        detailLabel="Ver mais detalhes"
      />
    );

    const toggle = screen.getByRole('button', { name: 'Ver mais detalhes' });
    expect(toggle.getAttribute('aria-expanded')).toBe('false');

    fireEvent.click(toggle);
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(screen.getByText('Detalhe secundario com informacoes adicionais.')).toBeDefined();

    fireEvent.click(toggle);
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });

  it('o botao de expansao deve ter rotulo acessivel', () => {
    render(
      <InfoCard
        title="Moradia"
        body="Resumo sobre moradia estudantil."
        detail="Lista de imobiliarias parceiras."
        detailLabel="Ver opcoes de moradia"
      />
    );

    expect(screen.getByRole('button', { name: 'Ver opcoes de moradia' })).toBeDefined();
  });
});

describe('Componente CardGrid', () => {
  it('deve renderizar todos os filhos', () => {
    render(
      <CardGrid>
        <InfoCard title="Primeiro" body="Corpo um." />
        <InfoCard title="Segundo" body="Corpo dois." />
        <InfoCard title="Terceiro" body="Corpo tres." />
      </CardGrid>
    );

    expect(screen.getByText('Primeiro')).toBeDefined();
    expect(screen.getByText('Segundo')).toBeDefined();
    expect(screen.getByText('Terceiro')).toBeDefined();
  });
});
