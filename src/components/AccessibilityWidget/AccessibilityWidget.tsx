'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Eye, Type, X, RotateCcw, Accessibility, Ear } from 'lucide-react';
import { VLibras } from '../VLibras/VLibras';
import styles from './AccessibilityWidget.module.scss';

export type FontSizeOption = 'normal' | 'large' | 'extralarge';
export type ColorFilterOption =
  | 'none'
  | 'protanopia'
  | 'deuteranopia'
  | 'tritanopia'
  | 'achromatopsia'
  | 'high-contrast-yellow';

const STORAGE_FONT_KEY = 'ft_accessibility_font';
const STORAGE_FILTER_KEY = 'ft_accessibility_filter';
const STORAGE_VLIBRAS_KEY = 'ft_accessibility_vlibras';

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState<FontSizeOption>('normal');
  const [colorFilter, setColorFilter] = useState<ColorFilterOption>('none');
  const [vlibrasActive, setVlibrasActive] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const savedFont = localStorage.getItem(STORAGE_FONT_KEY) as FontSizeOption | null;
      if (savedFont) {
        setFontSize(savedFont);
        document.documentElement.setAttribute('data-font-size', savedFont);
      }

      const savedFilter = localStorage.getItem(STORAGE_FILTER_KEY) as ColorFilterOption | null;
      if (savedFilter) {
        setColorFilter(savedFilter);
        document.documentElement.setAttribute('data-color-filter', savedFilter);
      }

      const savedVlibras = localStorage.getItem(STORAGE_VLIBRAS_KEY);
      if (savedVlibras === 'true') {
        setVlibrasActive(true);
      }
    } catch {
      // Ignora erro de acesso ao localStorage
    }
  }, []);

  const handleFontSizeChange = (size: FontSizeOption) => {
    setFontSize(size);
    try {
      localStorage.setItem(STORAGE_FONT_KEY, size);
    } catch {
      // Ignora erro
    }
    document.documentElement.setAttribute('data-font-size', size);
  };

  const handleColorFilterChange = (filter: ColorFilterOption) => {
    setColorFilter(filter);
    try {
      localStorage.setItem(STORAGE_FILTER_KEY, filter);
    } catch {
      // Ignora erro
    }
    if (filter === 'none') {
      document.documentElement.removeAttribute('data-color-filter');
    } else {
      document.documentElement.setAttribute('data-color-filter', filter);
    }
  };

  const handleToggleVlibras = () => {
    const nextState = !vlibrasActive;
    setVlibrasActive(nextState);
    try {
      localStorage.setItem(STORAGE_VLIBRAS_KEY, String(nextState));
    } catch {
      // Ignora erro
    }
  };

  const handleReset = () => {
    handleFontSizeChange('normal');
    handleColorFilterChange('none');
    setVlibrasActive(false);
    try {
      localStorage.removeItem(STORAGE_VLIBRAS_KEY);
    } catch {
      // Ignora erro
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* SVG de filtros para daltonismo */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true" focusable="false">
        <defs>
          <filter id="protanopia-filter">
            <feColorMatrix
              type="matrix"
              values="0.567, 0.433, 0, 0, 0  0.558, 0.442, 0, 0, 0  0, 0.242, 0.758, 0, 0  0, 0, 0, 1, 0"
            />
          </filter>
          <filter id="deuteranopia-filter">
            <feColorMatrix
              type="matrix"
              values="0.625, 0.375, 0, 0, 0  0.7, 0.3, 0, 0, 0  0, 0.3, 0.7, 0, 0  0, 0, 0, 1, 0"
            />
          </filter>
          <filter id="tritanopia-filter">
            <feColorMatrix
              type="matrix"
              values="0.95, 0.05, 0, 0, 0  0, 0.433, 0.567, 0, 0  0, 0.475, 0.525, 0, 0  0, 0, 0, 1, 0"
            />
          </filter>
        </defs>
      </svg>

      {/* Botao flutuante */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={styles.floatingTrigger}
        aria-label={isOpen ? 'Fechar painel de acessibilidade' : 'Abrir preferências de acessibilidade'}
        aria-expanded={isOpen}
        aria-controls="accessibility-dialog"
      >
        <Accessibility size={26} aria-hidden="true" />
      </button>

      {/* Integracao com VLibras sob demanda */}
      <VLibras enabled={vlibrasActive} />

      {/* Modal Dialog */}
      {isOpen && (
        <div
          className={styles.backdrop}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div
            id="accessibility-dialog"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="accessibility-panel-title"
            className={styles.dialog}
          >
            <div className={styles.header}>
              <div className={styles.titleArea}>
                <Accessibility size={22} className={styles.titleIcon} aria-hidden="true" />
                <h2 id="accessibility-panel-title" className={styles.panelTitle}>
                  Preferências de Acessibilidade
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className={styles.closeButton}
                aria-label="Fechar painel de acessibilidade"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            {/* Escala de Fontes */}
            <div className={styles.section}>
              <div className={styles.titleArea}>
                <Type size={16} aria-hidden="true" />
                <span className={styles.sectionTitle}>Tamanho das Fontes</span>
              </div>
              <div className={styles.buttonGroup} role="group" aria-label="Ajustar tamanho das fontes">
                <button
                  type="button"
                  onClick={() => handleFontSizeChange('normal')}
                  className={`${styles.optionButton} ${fontSize === 'normal' ? styles.active : ''}`}
                  aria-pressed={fontSize === 'normal'}
                >
                  Padrão
                </button>
                <button
                  type="button"
                  onClick={() => handleFontSizeChange('large')}
                  className={`${styles.optionButton} ${fontSize === 'large' ? styles.active : ''}`}
                  aria-pressed={fontSize === 'large'}
                >
                  Grande
                </button>
                <button
                  type="button"
                  onClick={() => handleFontSizeChange('extralarge')}
                  className={`${styles.optionButton} ${fontSize === 'extralarge' ? styles.active : ''}`}
                  aria-pressed={fontSize === 'extralarge'}
                >
                  Muito Grande
                </button>
              </div>
            </div>

            {/* Filtros de Daltonismo e Contraste */}
            <div className={styles.section}>
              <div className={styles.titleArea}>
                <Eye size={16} aria-hidden="true" />
                <span className={styles.sectionTitle}>Modos de Cor e Daltonismo</span>
              </div>
              <div className={styles.filterGrid} role="group" aria-label="Selecionar modo de cor ou daltonismo">
                <button
                  type="button"
                  onClick={() => handleColorFilterChange('none')}
                  className={`${styles.optionButton} ${colorFilter === 'none' ? styles.active : ''}`}
                  aria-pressed={colorFilter === 'none'}
                >
                  Cores Originais
                </button>
                <button
                  type="button"
                  onClick={() => handleColorFilterChange('protanopia')}
                  className={`${styles.optionButton} ${colorFilter === 'protanopia' ? styles.active : ''}`}
                  aria-pressed={colorFilter === 'protanopia'}
                >
                  Protanopia
                </button>
                <button
                  type="button"
                  onClick={() => handleColorFilterChange('deuteranopia')}
                  className={`${styles.optionButton} ${colorFilter === 'deuteranopia' ? styles.active : ''}`}
                  aria-pressed={colorFilter === 'deuteranopia'}
                >
                  Deuteranopia
                </button>
                <button
                  type="button"
                  onClick={() => handleColorFilterChange('tritanopia')}
                  className={`${styles.optionButton} ${colorFilter === 'tritanopia' ? styles.active : ''}`}
                  aria-pressed={colorFilter === 'tritanopia'}
                >
                  Tritanopia
                </button>
                <button
                  type="button"
                  onClick={() => handleColorFilterChange('achromatopsia')}
                  className={`${styles.optionButton} ${colorFilter === 'achromatopsia' ? styles.active : ''}`}
                  aria-pressed={colorFilter === 'achromatopsia'}
                >
                  Escala de Cinza
                </button>
                <button
                  type="button"
                  onClick={() => handleColorFilterChange('high-contrast-yellow')}
                  className={`${styles.optionButton} ${colorFilter === 'high-contrast-yellow' ? styles.active : ''}`}
                  aria-pressed={colorFilter === 'high-contrast-yellow'}
                >
                  Amarelo Intenso
                </button>
              </div>
            </div>

            {/* Auxilio Auditivo / VLibras */}
            <div className={styles.section}>
              <div className={styles.titleArea}>
                <Ear size={16} aria-hidden="true" />
                <span className={styles.sectionTitle}>Auxílio para Deficiência Auditiva</span>
              </div>
              <div className={styles.toggleRow}>
                <div className={styles.toggleLabelGroup}>
                  <span className={styles.toggleMainLabel}>Tradutor VLibras</span>
                  <span className={styles.toggleSubLabel}>
                    Ativar avatar oficial para tradução em Língua Brasileira de Sinais
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleToggleVlibras}
                  className={`${styles.toggleButton} ${vlibrasActive ? styles.activeToggle : ''}`}
                  aria-pressed={vlibrasActive}
                  aria-label={vlibrasActive ? 'Desativar tradutor VLibras' : 'Ativar tradutor VLibras'}
                >
                  {vlibrasActive ? 'Ativado' : 'Desativado'}
                </button>
              </div>
            </div>

            {/* Rodapé e Botao de Redefinir */}
            <div className={styles.footer}>
              <button
                type="button"
                onClick={handleReset}
                className={styles.resetButton}
                aria-label="Restaurar configurações padrão de acessibilidade"
              >
                <RotateCcw size={14} style={{ display: 'inline', marginRight: '4px' }} aria-hidden="true" />
                Redefinir Tudo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
