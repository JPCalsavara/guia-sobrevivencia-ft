import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

function hexToRgb(hex: string): [number, number, number] {
  const cleanHex = hex.replace('#', '').trim();
  const fullHex = cleanHex.length === 3
    ? cleanHex.split('').map((c) => c + c).join('')
    : cleanHex;

  const num = parseInt(fullHex, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return [r, g, b];
}

function getRelativeLuminance(rgb: [number, number, number]): number {
  const srgb = rgb.map((val) => {
    const channel = val / 255;
    return channel <= 0.03928
      ? channel / 12.92
      : Math.pow((channel + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
}

function getContrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  const lum1 = getRelativeLuminance(rgb1);
  const lum2 = getRelativeLuminance(rgb2);

  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);

  return (brightest + 0.05) / (darkest + 0.05);
}

describe('Testes de Acessibilidade Cromatica WCAG 2.1 e Contraste nos Botoes', () => {
  const draculaBg = '#282a36';
  const draculaSurface = '#21222c';
  const draculaForeground = '#f8f8f2';
  const draculaCyan = '#8be9fd';
  const draculaGreen = '#50fa7b';
  const institutionalBlue = '#1e40af';
  const white = '#ffffff';

  it('deve garantir que texto branco sobre ciano falha severamente e que o texto escuro atinge nivel AAA', () => {
    const failedWhiteContrast = getContrastRatio(draculaCyan, white);
    expect(failedWhiteContrast).toBeLessThan(3.0);

    const compliantDarkContrast = getContrastRatio(draculaCyan, draculaBg);
    expect(compliantDarkContrast).toBeGreaterThanOrEqual(7.0);
  });

  it('deve validar razao de contraste AAA no botao primario no modo claro institucional', () => {
    const lightModeButtonContrast = getContrastRatio(institutionalBlue, white);
    expect(lightModeButtonContrast).toBeGreaterThanOrEqual(7.0);
  });

  it('deve validar razao de contraste AAA no botao de destaque verde Dracula com texto escuro', () => {
    const greenButtonContrast = getContrastRatio(draculaGreen, draculaBg);
    expect(greenButtonContrast).toBeGreaterThanOrEqual(7.0);
  });

  it('deve validar razao de contraste minima de sete para um no corpo de texto Dracula sobre fundo', () => {
    const bodyTextContrast = getContrastRatio(draculaForeground, draculaBg);
    expect(bodyTextContrast).toBeGreaterThanOrEqual(7.0);

    const cardTextContrast = getContrastRatio(draculaForeground, draculaSurface);
    expect(cardTextContrast).toBeGreaterThanOrEqual(7.0);
  });

  it('deve validar que globals.scss define os tokens semanticos on-primary no modo claro e no modo escuro', () => {
    const globalsPath = path.resolve(process.cwd(), 'src/styles/globals.scss');
    const globalsContent = fs.readFileSync(globalsPath, 'utf8');

    expect(globalsContent).toContain('--on-primary: #ffffff;');
    expect(globalsContent).toContain('--on-primary: #{$dracula-bg};');
  });

  it('deve validar que os botoes principais utilizam a variavel on-primary e nao branco estatico', () => {
    const pageModulePath = path.resolve(process.cwd(), 'src/app/page.module.scss');
    const pageModuleContent = fs.readFileSync(pageModulePath, 'utf8');

    const navbarModulePath = path.resolve(process.cwd(), 'src/components/Navbar/Navbar.module.scss');
    const navbarModuleContent = fs.readFileSync(navbarModulePath, 'utf8');

    expect(pageModuleContent).toContain('color: var(--on-primary);');
    expect(navbarModuleContent).toContain('color: var(--on-primary);');
  });
});
