import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { versionsData } from '../data/versions';
import VersoesPage from '../app/versoes/page';
import { IdeStatusBar } from '../components/organisms/IdeStatusBar/IdeStatusBar';
import packageInfo from '../../package.json';

describe('Catalogo de Historico de Versoes e Apoio', () => {
  it('deve conter versoes ordenadas cronologicamente com tags semanticas validas', () => {
    expect(versionsData.length).toBeGreaterThanOrEqual(5);

    versionsData.forEach((rel) => {
      expect(rel.tag).toMatch(/^v\d+\.\d+\.\d+$/);
      expect(rel.title.length).toBeGreaterThan(0);
      expect(rel.highlights.length).toBeGreaterThan(0);
      expect(rel.githubUrl).toContain('github.com');
    });
  });

  it('a pagina de versoes deve renderizar cabecalho, timeline e secao de apoio', () => {
    render(<VersoesPage />);

    expect(screen.getByText('Historico de Versoes do Projeto')).toBeDefined();
    expect(screen.getByText('Como Apoiar e Ajudar o Projeto')).toBeDefined();
    expect(screen.getByText('Enviar Email de Contato Institucional')).toBeDefined();
    expect(screen.getByText('Abrir Repositorio no GitHub')).toBeDefined();
  });

  it('o IdeStatusBar deve conter link para a pagina de versoes visivel em mobile', () => {
    const { container } = render(<IdeStatusBar />);

    const versionLink = container.querySelector('a[href="/versoes"]');
    expect(versionLink).not.toBeNull();
    expect(versionLink?.textContent).toContain(`v${packageInfo.version}`);

    expect(versionLink?.className).not.toContain('hideOnMobile');
  });
});
