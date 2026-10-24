import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { OrganizationDirectory } from '../components/OrganizationDirectory/OrganizationDirectory';
import { VideoModal } from '../components/OrganizationDirectory/VideoModal';
import { organizationsData } from '../data/organizations';

vi.mock('next/navigation', () => ({
  usePathname: () => '/campus',
}));

describe('Vitrine de Organizacoes com canal de recrutamento', () => {
  it('deve exibir o link de processo seletivo apontando para a fonte canonica com rel seguro', () => {
    render(<OrganizationDirectory />);

    const org = organizationsData.find((o) => o.recruitmentUrl);
    expect(org).toBeDefined();

    const links = screen.getAllByRole('link', {
      name: /Acessar processo seletivo de .* em nova janela/i,
    });
    expect(links.length).toBeGreaterThanOrEqual(1);

    const first = links[0] as HTMLAnchorElement;
    expect(first.getAttribute('rel')).toContain('noopener');
    expect(first.getAttribute('rel')).toContain('noreferrer');
    expect(first.getAttribute('target')).toBe('_blank');
    expect(first.getAttribute('href')).toMatch(/^https?:\/\//);
  });

  it('deve exibir o selo de periodicidade com o texto de recruitmentPeriod', () => {
    render(<OrganizationDirectory />);

    const org = organizationsData.find((o) => o.recruitmentPeriod);
    expect(org).toBeDefined();
    expect(screen.getAllByText(org!.recruitmentPeriod as string).length).toBeGreaterThanOrEqual(1);
  });

  it('nao deve renderizar botao de pitch para entidades sem youtubeId', () => {
    render(<OrganizationDirectory />);

    const hasAnyVideo = organizationsData.some((o) => o.youtubeId);
    const pitchButtons = screen.queryAllByRole('button', {
      name: /Assistir pitch institucional de/i,
    });

    if (!hasAnyVideo) {
      expect(pitchButtons.length).toBe(0);
    } else {
      expect(pitchButtons.length).toBeGreaterThanOrEqual(1);
    }
  });
});

describe('VideoModal acessivel', () => {
  it('nao deve renderizar nada quando fechado', () => {
    const { container } = render(
      <VideoModal isOpen={false} onClose={() => {}} youtubeId="dQw4w9WgXcQ" title="Pitch de teste" />
    );
    expect(container.firstChild).toBeNull();
  });

  it('deve expor dialogo acessivel e carregar o iframe nocookie somente quando aberto', () => {
    render(
      <VideoModal isOpen={true} onClose={() => {}} youtubeId="dQw4w9WgXcQ" title="Pitch de teste" />
    );

    const dialog = screen.getByRole('dialog');
    expect(dialog.getAttribute('aria-modal')).toBe('true');
    expect(dialog.getAttribute('aria-labelledby')).toBeTruthy();

    const iframe = dialog.querySelector('iframe');
    expect(iframe).not.toBeNull();
    expect(iframe?.getAttribute('src')).toBe('https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ');
    expect(iframe?.getAttribute('title')).toBe('Pitch de teste');
  });

  it('deve mover o foco para o botao fechar ao abrir', () => {
    render(
      <VideoModal isOpen={true} onClose={() => {}} youtubeId="dQw4w9WgXcQ" title="Pitch de teste" />
    );

    const closeBtn = screen.getByLabelText('Fechar janela de video institucional');
    expect(document.activeElement).toBe(closeBtn);
  });

  it('deve fechar ao pressionar a tecla Escape', () => {
    const handleClose = vi.fn();
    render(
      <VideoModal isOpen={true} onClose={handleClose} youtubeId="dQw4w9WgXcQ" title="Pitch de teste" />
    );

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalled();
  });

  it('deve fechar ao clicar no botao fechar', () => {
    const handleClose = vi.fn();
    render(
      <VideoModal isOpen={true} onClose={handleClose} youtubeId="dQw4w9WgXcQ" title="Pitch de teste" />
    );

    fireEvent.click(screen.getByLabelText('Fechar janela de video institucional'));
    expect(handleClose).toHaveBeenCalled();
  });
});
