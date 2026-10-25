import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import {
  useSectionCoordinator,
  SectionDescriptor,
} from '@/sectionCoordinator/useSectionCoordinator';
import { JourneyStage } from '@/components/JourneyFilter/JourneyFilter';

const sections: SectionDescriptor[] = [
  { id: 'intro-calouro', stage: 'calouro' },
  { id: 'adaptacao-calouro', stage: 'calouro' },
  { id: 'intercambio-meio', stage: 'meio' },
  { id: 'tcc-formando', stage: 'formando' },
];

function setHash(value: string) {
  window.location.hash = value;
  window.dispatchEvent(new HashChangeEvent('hashchange'));
}

describe('useSectionCoordinator', () => {
  beforeEach(() => {
    window.location.hash = '';
  });

  it('retorna estilo vazio para todas as secoes quando o estagio e all', () => {
    const { result } = renderHook(() =>
      useSectionCoordinator({ journeyStage: 'all', sections })
    );

    for (const section of sections) {
      expect(result.current.getSectionProps(section.id).style).toEqual({});
    }
  });

  it('ordena secoes prioritarias a partir de 2 e marca display block', () => {
    const { result } = renderHook(() =>
      useSectionCoordinator({ journeyStage: 'calouro', sections })
    );

    expect(result.current.getSectionProps('intro-calouro').style).toEqual({
      order: 2,
      display: 'block',
    });
    expect(result.current.getSectionProps('adaptacao-calouro').style).toEqual({
      order: 3,
      display: 'block',
    });
    expect(result.current.prioritySectionIds).toEqual([
      'intro-calouro',
      'adaptacao-calouro',
    ]);
  });

  it('ordena secoes secundarias a partir de 20 e mantem ocultas ate abrir', () => {
    const { result } = renderHook(() =>
      useSectionCoordinator({ journeyStage: 'calouro', sections })
    );

    expect(result.current.getSectionProps('intercambio-meio').style).toEqual({
      order: 20,
      display: 'none',
    });
    expect(result.current.getSectionProps('tcc-formando').style).toEqual({
      order: 21,
      display: 'none',
    });
    expect(result.current.secondarySectionIds).toEqual([
      'intercambio-meio',
      'tcc-formando',
    ]);
    expect(result.current.hasSecondarySections).toBe(true);
  });

  it('abre as secoes secundarias ao alternar e ao definir aberto', () => {
    const { result } = renderHook(() =>
      useSectionCoordinator({ journeyStage: 'calouro', sections })
    );

    act(() => {
      result.current.toggleSecondary();
    });
    expect(result.current.isSecondaryOpen).toBe(true);
    expect(result.current.getSectionProps('intercambio-meio').style.display).toBe(
      'block'
    );

    act(() => {
      result.current.setSecondaryOpen(false);
    });
    expect(result.current.isSecondaryOpen).toBe(false);
    expect(result.current.getSectionProps('intercambio-meio').style.display).toBe(
      'none'
    );
  });

  it('expoe a ordem do cabecalho prioritario em 1 e do toggle em 10', () => {
    const { result } = renderHook(() =>
      useSectionCoordinator({ journeyStage: 'calouro', sections })
    );

    expect(result.current.priorityHeaderProps.style.order).toBe(1);
    expect(result.current.secondaryToggleProps.style.order).toBe(10);
    expect(result.current.secondaryToggleProps.count).toBe(2);
  });

  it('fecha as secoes secundarias ao trocar de estagio', () => {
    const { result, rerender } = renderHook(
      ({ journeyStage }: { journeyStage: JourneyStage }) =>
        useSectionCoordinator({ journeyStage, sections }),
      { initialProps: { journeyStage: 'calouro' as JourneyStage } }
    );

    act(() => {
      result.current.setSecondaryOpen(true);
    });
    expect(result.current.isSecondaryOpen).toBe(true);

    rerender({ journeyStage: 'meio' });
    expect(result.current.isSecondaryOpen).toBe(false);
  });

  it('mantem a gaveta fechada quando o hash aponta para secao do estagio ativo', () => {
    window.location.hash = '#intro-calouro';
    const { result } = renderHook(() =>
      useSectionCoordinator({ journeyStage: 'calouro', sections })
    );

    expect(result.current.isSecondaryOpen).toBe(false);
  });

  it('mantem a gaveta fechada quando o hash aponta para id desconhecido', () => {
    window.location.hash = '#secao-inexistente';
    const { result } = renderHook(() =>
      useSectionCoordinator({ journeyStage: 'calouro', sections })
    );

    expect(result.current.isSecondaryOpen).toBe(false);
  });

  it('abre a gaveta ao receber um evento hashchange para secao de outro estagio', () => {
    const { result } = renderHook(() =>
      useSectionCoordinator({ journeyStage: 'calouro', sections })
    );

    expect(result.current.isSecondaryOpen).toBe(false);

    act(() => {
      setHash('#intercambio-meio');
    });

    expect(result.current.isSecondaryOpen).toBe(true);
  });
});
