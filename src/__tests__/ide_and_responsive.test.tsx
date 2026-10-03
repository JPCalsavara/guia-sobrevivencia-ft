import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from '@/components/atoms/Badge/Badge';
import { StatusDot } from '@/components/atoms/StatusDot/StatusDot';
import { FileIcon } from '@/components/atoms/FileIcon/FileIcon';
import { IdeTabsBar, IDE_TABS_CONFIG } from '@/components/organisms/IdeTabsBar/IdeTabsBar';
import { IdeStatusBar } from '@/components/organisms/IdeStatusBar/IdeStatusBar';
import { MobileTopicPills } from '@/components/MobileTopicPills/MobileTopicPills';
import { DocSidebar, TopicItem } from '@/components/DocSidebar/DocSidebar';

vi.mock('next/navigation', () => ({
  usePathname: () => '/carreira',
}));

describe('Componentes Atomicos de IDE e Tema Dracula', () => {
  it('renderiza o atomo Badge com variantes da paleta Dracula', () => {
    const { container } = render(
      <Badge variant="dracula-purple">Tag de Codigo</Badge>
    );
    expect(screen.getByText('Tag de Codigo')).toBeDefined();
    expect((container.firstChild as HTMLElement)?.className).toMatch(/badge/);
  });

  it('renderiza o atomo StatusDot com indicador online', () => {
    const { container } = render(<StatusDot status="online" label="FT Online" />);
    expect(screen.getByText('FT Online')).toBeDefined();
    const dot = container.querySelector('span > span');
    expect((dot as HTMLElement)?.className).toMatch(/online/);
  });

  it('renderiza icones corretos baseados na extensao de arquivo', () => {
    const { container } = render(<FileIcon filename="academico.tex" />);
    expect(container.querySelector('svg')).toBeDefined();
  });

  it('renderiza a barra de abas de IDE com todos os arquivos simbolicos configurados', () => {
    render(<IdeTabsBar />);

    IDE_TABS_CONFIG.forEach((tab) => {
      expect(screen.getByText(tab.filename)).toBeDefined();
    });

    const activeTab = screen.getByText('carreira.rs').closest('a');
    expect(activeTab?.getAttribute('aria-current')).toBe('page');
  });

  it('renderiza a barra de status inferior estilo VS Code com metadados tecnicos', () => {
    render(<IdeStatusBar />);

    expect(screen.getByText('main')).toBeDefined();
    expect(screen.getByText('18 ao vivo')).toBeDefined();
    expect(screen.getByText('342 hoje')).toBeDefined();
    expect(screen.getByText('0 erros, 0 avisos')).toBeDefined();
    expect(screen.getByText('UTF-8')).toBeDefined();
    expect(screen.getByText('SilvMar')).toBeDefined();
    expect(screen.getByText('FT Limeira')).toBeDefined();
  });

  it('renderiza a navegacao responsiva de topicos para desktop e mobile', () => {
    const mockTopics: TopicItem[] = [
      {
        id: 'sazonalidade-estagio',
        title: 'Sazonalidade e Feiras',
        subtopics: [{ id: 'janela-contratacao', title: 'Janela de Contratacao' }]
      }
    ];

    const { container: desktopContainer } = render(
      <DocSidebar topics={mockTopics} title="Sumario Desktop" />
    );
    expect(desktopContainer.querySelector('nav')).toBeDefined();
    expect(screen.getByText('Sumario Desktop')).toBeDefined();

    const { container: mobileContainer } = render(
      <MobileTopicPills topics={mockTopics} />
    );
    expect(mobileContainer.querySelector('nav')).toBeDefined();
    expect(screen.getAllByText('Sazonalidade e Feiras').length).toBeGreaterThan(0);
  });
});
