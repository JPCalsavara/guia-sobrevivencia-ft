import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { localPartnersData, LocalPartnerCategory } from '../data/localPartners';
import { PartnerShowcase } from '../components/PartnerShowcase/PartnerShowcase';

const validCategories: LocalPartnerCategory[] = ['restaurante', 'imobiliaria', 'pensionato'];
const officialUrlPattern = /^https:\/\/([\w.-]+\.[a-z]{2,}|wa\.me|api\.whatsapp\.com)/i;
const volatileDataPattern = /R\$|reais|cardapio|cardápio|\d+\s*por\s*quilo|%/i;

describe('Vitrine de Parceiros Locais de Limeira', () => {
  it('deve conter no minimo seis parceiros', () => {
    expect(localPartnersData.length).toBeGreaterThanOrEqual(6);
  });

  it('cada parceiro deve ter campos obrigatorios nao vazios e verified booleano', () => {
    localPartnersData.forEach((partner) => {
      expect(partner.id).toBeTruthy();
      expect(partner.name).toBeTruthy();
      expect(partner.category).toBeTruthy();
      expect(partner.categoryLabel).toBeTruthy();
      expect(partner.description).toBeTruthy();
      expect(partner.studentBenefit).toBeTruthy();
      expect(partner.referenceAddress).toBeTruthy();
      expect(partner.officialUrl).toBeTruthy();
      expect(typeof partner.verified).toBe('boolean');
    });
  });

  it('category deve pertencer ao conjunto restaurante, imobiliaria ou pensionato', () => {
    localPartnersData.forEach((partner) => {
      expect(validCategories).toContain(partner.category);
    });
  });

  it('deve cobrir as tres categorias exigidas', () => {
    const categories = new Set(localPartnersData.map((p) => p.category));
    validCategories.forEach((cat) => {
      expect(categories.has(cat)).toBe(true);
    });
  });

  it('todos os ids devem ser unicos', () => {
    const ids = localPartnersData.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('officialUrl deve apontar para website, wa.me ou api.whatsapp.com', () => {
    localPartnersData.forEach((partner) => {
      expect(partner.officialUrl).toMatch(officialUrlPattern);
    });
  });

  it('deve existir ao menos um parceiro verificado e ao menos um nao verificado', () => {
    expect(localPartnersData.some((p) => p.verified)).toBe(true);
    expect(localPartnersData.some((p) => !p.verified)).toBe(true);
  });

  it('nao deve transcrever precos nem cardapios voláteis nos textos', () => {
    localPartnersData.forEach((partner) => {
      expect(partner.description).not.toMatch(volatileDataPattern);
      expect(partner.studentBenefit).not.toMatch(volatileDataPattern);
    });
  });
});

describe('Componente PartnerShowcase: integridade e acessibilidade', () => {
  it('deve renderizar os botoes de filtro com aria-pressed', () => {
    render(React.createElement(PartnerShowcase));
    const todos = screen.getByRole('button', { name: 'Todos os Parceiros' });
    expect(todos.getAttribute('aria-pressed')).toBe('true');

    const restaurantes = screen.getByRole('button', { name: 'Restaurantes' });
    expect(restaurantes.getAttribute('aria-pressed')).toBe('false');
    fireEvent.click(restaurantes);
    expect(restaurantes.getAttribute('aria-pressed')).toBe('true');
  });

  it('deve exibir o distintivo de estabelecimento verificado para parceiro verificado', () => {
    render(React.createElement(PartnerShowcase));
    const verifiedCount = localPartnersData.filter((p) => p.verified).length;
    expect(screen.getAllByText('Estabelecimento verificado').length).toBe(verifiedCount);
  });

  it('cada parceiro deve ter um botao de contato acessivel apontando para a officialUrl', () => {
    render(React.createElement(PartnerShowcase));
    localPartnersData.forEach((partner) => {
      const link = screen.getByLabelText(
        `Consultar condicoes e precos de ${partner.name} na fonte oficial em nova janela`
      );
      expect(link.getAttribute('href')).toBe(partner.officialUrl);
      expect(link.getAttribute('target')).toBe('_blank');
      expect(link.getAttribute('rel')).toBe('noopener noreferrer');
    });
  });
});
