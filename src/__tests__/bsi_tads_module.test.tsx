import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BsiTadsModule } from '../components/BsiTadsModule/BsiTadsModule';

describe('Componente BsiTadsModule', () => {
  it('deve renderizar o quadro comparativo e o texto de publico alvo na variante academico', () => {
    render(<BsiTadsModule variant="academico" />);

    expect(screen.getByText('Quadro Comparativo Direto entre BSI e TADS')).toBeDefined();
    expect(screen.getByText(/vestibulandos, calouros e alunos de TADS/i)).toBeDefined();
    expect(screen.getByText('Publico alvo deste comparativo')).toBeDefined();
  });

  it('deve renderizar o quadro comparativo e o texto de publico alvo na variante ingressantes', () => {
    render(<BsiTadsModule variant="ingressantes" />);

    expect(screen.getByText('Quadro Comparativo Direto entre BSI e TADS')).toBeDefined();
    expect(screen.getByText(/vestibulandos e futuros ingressantes/i)).toBeDefined();
    expect(screen.getByText('Para quem ainda vai escolher o curso')).toBeDefined();
  });
});
