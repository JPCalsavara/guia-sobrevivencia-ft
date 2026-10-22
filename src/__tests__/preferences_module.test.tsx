import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PreferencesProvider, usePreferences } from '../modules/preferences';
import { STORAGE_KEYS } from '../modules/preferences/storageKeys';

function PreferencesConsumer() {
  const {
    theme,
    toggleTheme,
    fontSize,
    setFontSize,
    colorFilter,
    setColorFilter,
    vlibrasActive,
    toggleVlibras,
    resetAccessibility,
    profile,
    setProfile,
    clearProfile,
    journeyStage,
    selectJourneyStage,
    isJourneyInitialized,
  } = usePreferences();

  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <span data-testid="font">{fontSize}</span>
      <span data-testid="filter">{colorFilter}</span>
      <span data-testid="vlibras">{String(vlibrasActive)}</span>
      <span data-testid="course">{profile.course || 'nenhum'}</span>
      <span data-testid="stage">{profile.stage || 'nenhum'}</span>
      <span data-testid="journey">{journeyStage}</span>
      <span data-testid="journey-init">{String(isJourneyInitialized)}</span>

      <button type="button" onClick={toggleTheme}>toggle-theme</button>
      <button type="button" onClick={() => setFontSize('large')}>set-font-large</button>
      <button type="button" onClick={() => setColorFilter('protanopia')}>set-filter-prot</button>
      <button type="button" onClick={() => setColorFilter('none')}>set-filter-none</button>
      <button type="button" onClick={toggleVlibras}>toggle-vlibras</button>
      <button type="button" onClick={resetAccessibility}>reset-a11y</button>
      <button type="button" onClick={() => setProfile('bsi', 1, 2)}>set-bsi-1</button>
      <button type="button" onClick={() => setProfile('tads', 3, 6)}>set-tads-3</button>
      <button type="button" onClick={clearProfile}>clear-profile</button>
      <button type="button" onClick={() => selectJourneyStage('calouro')}>journey-calouro</button>
      <button type="button" onClick={() => selectJourneyStage('all')}>journey-all</button>
    </div>
  );
}

function renderModule() {
  return render(
    <PreferencesProvider>
      <PreferencesConsumer />
    </PreferencesProvider>
  );
}

describe('Modulo de preferencias, tema', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    document.documentElement.removeAttribute('data-font-size');
    document.documentElement.removeAttribute('data-color-filter');
  });

  it('aplica o tema light na montagem quando nao ha valor salvo', () => {
    renderModule();
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(screen.getByTestId('theme').textContent).toBe('light');
  });

  it('alterna o tema, persiste em ft_theme e seta data-theme', () => {
    renderModule();
    fireEvent.click(screen.getByText('toggle-theme'));
    expect(screen.getByTestId('theme').textContent).toBe('dark');
    expect(localStorage.getItem(STORAGE_KEYS.THEME)).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');

    fireEvent.click(screen.getByText('toggle-theme'));
    expect(screen.getByTestId('theme').textContent).toBe('light');
    expect(localStorage.getItem(STORAGE_KEYS.THEME)).toBe('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('le o tema salvo na montagem', () => {
    localStorage.setItem(STORAGE_KEYS.THEME, 'dark');
    renderModule();
    expect(screen.getByTestId('theme').textContent).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});

describe('Modulo de preferencias, acessibilidade', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-font-size');
    document.documentElement.removeAttribute('data-color-filter');
  });

  it('setFontSize persiste e aplica data-font-size', () => {
    renderModule();
    fireEvent.click(screen.getByText('set-font-large'));
    expect(screen.getByTestId('font').textContent).toBe('large');
    expect(localStorage.getItem(STORAGE_KEYS.ACCESSIBILITY_FONT)).toBe('large');
    expect(document.documentElement.getAttribute('data-font-size')).toBe('large');
  });

  it('setColorFilter com valor aplica e com none remove o atributo', () => {
    renderModule();
    fireEvent.click(screen.getByText('set-filter-prot'));
    expect(document.documentElement.getAttribute('data-color-filter')).toBe('protanopia');
    expect(localStorage.getItem(STORAGE_KEYS.ACCESSIBILITY_FILTER)).toBe('protanopia');

    fireEvent.click(screen.getByText('set-filter-none'));
    expect(document.documentElement.getAttribute('data-color-filter')).toBeNull();
    expect(localStorage.getItem(STORAGE_KEYS.ACCESSIBILITY_FILTER)).toBe('none');
  });

  it('toggleVlibras alterna e persiste ft_accessibility_vlibras', () => {
    renderModule();
    fireEvent.click(screen.getByText('toggle-vlibras'));
    expect(screen.getByTestId('vlibras').textContent).toBe('true');
    expect(localStorage.getItem(STORAGE_KEYS.ACCESSIBILITY_VLIBRAS)).toBe('true');
  });

  it('resetAccessibility volta tudo ao padrao', () => {
    renderModule();
    fireEvent.click(screen.getByText('set-font-large'));
    fireEvent.click(screen.getByText('set-filter-prot'));
    fireEvent.click(screen.getByText('toggle-vlibras'));

    fireEvent.click(screen.getByText('reset-a11y'));
    expect(screen.getByTestId('font').textContent).toBe('normal');
    expect(screen.getByTestId('filter').textContent).toBe('none');
    expect(screen.getByTestId('vlibras').textContent).toBe('false');
    expect(document.documentElement.getAttribute('data-color-filter')).toBeNull();
    expect(document.documentElement.getAttribute('data-font-size')).toBe('normal');
  });
});

describe('Modulo de preferencias, perfil', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('setProfile persiste JSON e deriva a fase', () => {
    renderModule();
    fireEvent.click(screen.getByText('set-bsi-1'));
    expect(screen.getByTestId('course').textContent).toBe('bsi');
    expect(screen.getByTestId('stage').textContent).toBe('calouro');
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEYS.STUDENT_PROFILE) || '{}');
    expect(stored.course).toBe('bsi');
    expect(stored.year).toBe(1);
    expect(stored.stage).toBe('calouro');
  });

  it('clearProfile remove a chave e zera o perfil', () => {
    renderModule();
    fireEvent.click(screen.getByText('set-bsi-1'));
    fireEvent.click(screen.getByText('clear-profile'));
    expect(screen.getByTestId('course').textContent).toBe('nenhum');
    expect(localStorage.getItem(STORAGE_KEYS.STUDENT_PROFILE)).toBeNull();
  });
});

describe('Modulo de preferencias, eliminacao do CustomEvent', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('setProfile reflete a fase derivada sem disparar CustomEvent de perfil', () => {
    const dispatchSpy = vi.spyOn(window, 'dispatchEvent');
    renderModule();
    fireEvent.click(screen.getByText('set-tads-3'));

    expect(screen.getByTestId('journey').textContent).toBe('formando');

    const profileEvents = dispatchSpy.mock.calls.filter(
      ([event]) => event instanceof Event && event.type === 'ft_student_profile_changed'
    );
    expect(profileEvents.length).toBe(0);
    dispatchSpy.mockRestore();
  });
});

describe('Modulo de preferencias, sincronia de URL', () => {
  const originalSearch = window.location.search;

  beforeEach(() => {
    localStorage.clear();
    window.history.replaceState({}, '', '/');
  });

  afterEach(() => {
    window.history.replaceState({}, '', `/${originalSearch}`);
  });

  it('selectJourneyStage para calouro escreve fase na URL e para all remove', () => {
    const replaceSpy = vi.spyOn(window.history, 'replaceState');
    renderModule();

    fireEvent.click(screen.getByText('journey-calouro'));
    expect(new URLSearchParams(window.location.search).get('fase')).toBe('calouro');
    expect(localStorage.getItem(STORAGE_KEYS.JOURNEY_STAGE)).toBe('calouro');

    fireEvent.click(screen.getByText('journey-all'));
    expect(new URLSearchParams(window.location.search).get('fase')).toBeNull();
    expect(localStorage.getItem(STORAGE_KEYS.JOURNEY_STAGE)).toBe('all');

    expect(replaceSpy).toHaveBeenCalled();
    replaceSpy.mockRestore();
  });

  it('o parametro fase vence sobre o armazenamento na leitura inicial', () => {
    localStorage.setItem(STORAGE_KEYS.JOURNEY_STAGE, 'formando');
    window.history.replaceState({}, '', '/?fase=meio');

    renderModule();
    expect(screen.getByTestId('journey').textContent).toBe('meio');
    expect(localStorage.getItem(STORAGE_KEYS.JOURNEY_STAGE)).toBe('meio');
  });
});
