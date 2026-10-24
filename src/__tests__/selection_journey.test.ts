import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  selectionJourneyData,
  veteransNetworkData,
  companiesShowcaseData
} from '@/data/careerExpanded';
import { SelectionJourneyTrail } from '@/components/SelectionJourneyTrail/SelectionJourneyTrail';

describe('Trilha de fases do processo seletivo e rede de veteranos', () => {
  const forbiddenPunctuation = /[\u2014\u2013]/;
  const parenthesesPattern = /[()]/;
  const emojiPattern = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

  it('deve conter as seis fases com order crescente de 1 a 6 sem lacunas', () => {
    expect(selectionJourneyData.length).toBe(6);

    const orders = selectionJourneyData.map((stage) => stage.order).sort((a, b) => a - b);
    expect(orders).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('nao deve conter travessao, parentese ou emoji nos textos das fases em conformidade com ADR 0001', () => {
    selectionJourneyData.forEach((stage) => {
      [stage.title, stage.summary, stage.detail, stage.category].forEach((text) => {
        expect(text).not.toMatch(forbiddenPunctuation);
        expect(text).not.toMatch(parenthesesPattern);
        expect(text).not.toMatch(emojiPattern);
      });
    });
  });

  it('todo companyId de veterano deve existir em companiesShowcaseData', () => {
    const companyIds = companiesShowcaseData.map((company) => company.id);
    veteransNetworkData.forEach((veteran) => {
      expect(companyIds).toContain(veteran.companyId);
    });
  });

  it('nenhum veterano deve expor telefone ou e-mail por privacidade da issue', () => {
    const forbiddenKeys = ['phone', 'telefone', 'email', 'e-mail'];
    veteransNetworkData.forEach((veteran) => {
      forbiddenKeys.forEach((key) => {
        expect(Object.prototype.hasOwnProperty.call(veteran, key)).toBe(false);
      });
    });
  });

  it('todo linkedinUrl deve comecar com https e ter hostname terminando em linkedin.com', () => {
    veteransNetworkData.forEach((veteran) => {
      expect(veteran.linkedinUrl.startsWith('https://')).toBe(true);
      const url = new URL(veteran.linkedinUrl);
      expect(url.hostname.endsWith('linkedin.com')).toBe(true);
    });
  });

  it('cada empresa deve ter ao menos um veterano vinculado', () => {
    companiesShowcaseData.forEach((company) => {
      const hasVeteran = veteransNetworkData.some((veteran) => veteran.companyId === company.id);
      expect(hasVeteran).toBe(true);
    });
  });
});

describe('Render do componente SelectionJourneyTrail', () => {
  it('renderiza as seis fases na ordem com lista semantica e aria-label nos passos', () => {
    render(
      React.createElement(SelectionJourneyTrail, {
        stages: selectionJourneyData,
        veterans: veteransNetworkData
      })
    );

    const orderedStages = [...selectionJourneyData].sort((a, b) => a.order - b.order);

    const stageList = screen.getByLabelText('Fases do processo seletivo em ordem cronologica');
    expect(stageList.tagName).toBe('OL');

    const stageItems = stageList.querySelectorAll('li');
    expect(stageItems.length).toBe(6);

    orderedStages.forEach((stage, index) => {
      const step = screen.getByLabelText(
        `Fase ${stage.order} de ${orderedStages.length}: ${stage.title}`
      );
      expect(step).toBeDefined();
      expect(stageItems[index].textContent).toContain(stage.title);
    });
  });

  it('cada link de veterano aponta para hostname linkedin.com com rel noopener noreferrer', () => {
    const { container } = render(
      React.createElement(SelectionJourneyTrail, {
        stages: selectionJourneyData,
        veterans: veteransNetworkData
      })
    );

    const links = Array.from(container.querySelectorAll('a'));
    expect(links.length).toBe(veteransNetworkData.length);

    links.forEach((link) => {
      const href = link.getAttribute('href') ?? '';
      const url = new URL(href);
      expect(url.hostname.endsWith('linkedin.com')).toBe(true);
      expect(link.getAttribute('rel')).toBe('noopener noreferrer');
      expect(link.getAttribute('target')).toBe('_blank');
    });
  });
});
