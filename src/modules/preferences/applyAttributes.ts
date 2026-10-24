// Aplicadores de atributos de dado no documentElement.
// Esta e a unica costura que escreve data attributes de tema,
// escala tipografica e filtro de cor no documento.
import type { ThemeOption, FontSizeOption, ColorFilterOption } from './types';

export function applyTheme(theme: ThemeOption): void {
  document.documentElement.setAttribute('data-theme', theme);
}

export function applyFontSize(fontSize: FontSizeOption): void {
  document.documentElement.setAttribute('data-font-size', fontSize);
}

export function applyColorFilter(colorFilter: ColorFilterOption): void {
  if (colorFilter === 'none') {
    document.documentElement.removeAttribute('data-color-filter');
  } else {
    document.documentElement.setAttribute('data-color-filter', colorFilter);
  }
}
