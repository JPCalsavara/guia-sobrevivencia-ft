import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AudienceAxisBar } from '../components/AudienceAxisBar/AudienceAxisBar';
import { audienceProfiles } from '../data/audienceProfiles';

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe('Componente AudienceAxisBar', () => {
  it('deve renderizar os quatro labels de perfil', () => {
    render(<AudienceAxisBar />);

    audienceProfiles.forEach((profile) => {
      expect(screen.getByText(profile.label)).toBeDefined();
    });
  });

  it('cada cartao deve possuir um link com href valido para ancora tematica', () => {
    render(<AudienceAxisBar />);

    const links = screen.getAllByRole('link');
    expect(links.length).toBe(audienceProfiles.length);

    links.forEach((link) => {
      const href = link.getAttribute('href') ?? '';
      expect(href).toMatch(/^\/[a-z-]+#[a-z0-9-]+$/);
    });

    audienceProfiles.forEach((profile) => {
      const expectedHref = profile.anchors[0].href;
      const match = links.some((link) => link.getAttribute('href') === expectedHref);
      expect(match).toBe(true);
    });
  });
});
