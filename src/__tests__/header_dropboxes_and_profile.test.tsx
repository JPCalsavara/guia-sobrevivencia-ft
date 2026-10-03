import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { headerNavSections } from '../data/headerTopics';
import {
  computeJourneyStage,
  computeJourneyStageFromYear,
  COURSE_MAX_SEMESTERS,
  COURSE_MAX_YEARS,
  COURSE_NAMES,
  COURSE_SHORT_NAMES,
} from '../types/studentProfile';
import { StudentProfileProvider, useStudentProfile } from '../contexts/StudentProfileContext';
import { StudentProfileModal } from '../components/StudentProfileModal/StudentProfileModal';
import { Navbar } from '../components/Navbar/Navbar';

// Mock do next/navigation
vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Dados Estruturados de Topicos do Cabecalho', () => {
  it('deve conter as sete secoes fundamentais do portal', () => {
    const sectionIds = headerNavSections.map((s) => s.id);
    expect(sectionIds).toContain('calouros');
    expect(sectionIds).toContain('academico');
    expect(sectionIds).toContain('carreira');
    expect(sectionIds).toContain('campus');
    expect(sectionIds).toContain('duvidas');
    expect(sectionIds).toContain('estudos-ia');
    expect(sectionIds).toContain('links');
  });

  it('cada secao deve conter lista de topicos validos com ancoras diretas', () => {
    headerNavSections.forEach((section) => {
      expect(section.topics.length).toBeGreaterThanOrEqual(2);
      section.topics.forEach((topic) => {
        expect(topic.href).toMatch(/^(\/[a-z-]+#|[a-z-]+#)/);
        expect(topic.title.length).toBeGreaterThan(0);
        expect(topic.tag.length).toBeGreaterThan(0);
      });
    });
  });
});

describe('Calculos e Tipagem de Perfil do Estudante', () => {
  it('deve calcular corretamente o estagio da graduacao por semestre', () => {
    expect(computeJourneyStage(1)).toBe('calouro');
    expect(computeJourneyStage(2)).toBe('calouro');
    expect(computeJourneyStage(3)).toBe('meio');
    expect(computeJourneyStage(5)).toBe('meio');
    expect(computeJourneyStage(6)).toBe('meio');
    expect(computeJourneyStage(7)).toBe('formando');
    expect(computeJourneyStage(8)).toBe('formando');
    expect(computeJourneyStage(null)).toBeNull();
  });

  it('deve calcular corretamente o estagio da graduacao por ano letivo', () => {
    expect(computeJourneyStageFromYear(1, 'bsi')).toBe('calouro');
    expect(computeJourneyStageFromYear(2, 'bsi')).toBe('meio');
    expect(computeJourneyStageFromYear(3, 'bsi')).toBe('meio');
    expect(computeJourneyStageFromYear(4, 'bsi')).toBe('formando');
    expect(computeJourneyStageFromYear(1, 'tads')).toBe('calouro');
    expect(computeJourneyStageFromYear(2, 'tads')).toBe('meio');
    expect(computeJourneyStageFromYear(3, 'tads')).toBe('formando');
    expect(computeJourneyStageFromYear(null, 'bsi')).toBeNull();
  });

  it('deve respeitar limites maximos de semestres e anos por curso', () => {
    expect(COURSE_MAX_SEMESTERS.bsi).toBe(8);
    expect(COURSE_MAX_SEMESTERS.tads).toBe(6);
    expect(COURSE_MAX_YEARS.bsi).toBe(4);
    expect(COURSE_MAX_YEARS.tads).toBe(3);
  });
});

function ProfileConsumerTestComponent() {
  const { profile, setProfile, clearProfile } = useStudentProfile();
  return (
    <div>
      <span data-testid="course-display">{profile.course || 'nenhum'}</span>
      <span data-testid="year-display">{profile.year || 0}</span>
      <span data-testid="semester-display">{profile.semester || 0}</span>
      <span data-testid="stage-display">{profile.stage || 'nenhum'}</span>
      <button type="button" onClick={() => setProfile('bsi', 1, 2)}>
        Definir BSI 1
      </button>
      <button type="button" onClick={() => setProfile('tads', 3, 6)}>
        Definir TADS 3
      </button>
      <button type="button" onClick={clearProfile}>
        Limpar
      </button>
    </div>
  );
}

describe('Contexto de Perfil do Estudante', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('deve inicializar com valores nulos e persistir alteracoes no localStorage', () => {
    render(
      <StudentProfileProvider>
        <ProfileConsumerTestComponent />
      </StudentProfileProvider>
    );

    expect(screen.getByTestId('course-display').textContent).toBe('nenhum');
    expect(screen.getByTestId('year-display').textContent).toBe('0');
    expect(screen.getByTestId('semester-display').textContent).toBe('0');

    fireEvent.click(screen.getByText('Definir BSI 1'));

    expect(screen.getByTestId('course-display').textContent).toBe('bsi');
    expect(screen.getByTestId('year-display').textContent).toBe('1');
    expect(screen.getByTestId('semester-display').textContent).toBe('2');
    expect(screen.getByTestId('stage-display').textContent).toBe('calouro');

    const stored = JSON.parse(localStorage.getItem('ft_student_profile') || '{}');
    expect(stored.course).toBe('bsi');
    expect(stored.year).toBe(1);
    expect(stored.stage).toBe('calouro');

    fireEvent.click(screen.getByText('Limpar'));
    expect(screen.getByTestId('course-display').textContent).toBe('nenhum');
    expect(localStorage.getItem('ft_student_profile')).toBeNull();
  });
});

describe('Componente StudentProfileModal', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('deve renderizar opcoes de curso e anos validos', () => {
    const handleClose = vi.fn();
    render(
      <StudentProfileProvider>
        <StudentProfileModal isOpen={true} onClose={handleClose} />
      </StudentProfileProvider>
    );

    expect(screen.getByText('Qual é o seu Curso e Ano?')).toBeDefined();
    expect(screen.getByText('BSI')).toBeDefined();
    expect(screen.getByText('TADS')).toBeDefined();

    // Clica em TADS para ajustar anos
    fireEvent.click(screen.getByText('TADS'));
    expect(screen.getByText('3º Ano')).toBeDefined();

    // Clica em Salvar
    fireEvent.click(screen.getByText('Salvar Preferência'));
    expect(handleClose).toHaveBeenCalled();
  });
});

describe('Componente Navbar com Menus Suspensos e Botao de Curso', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('deve renderizar o cabecalho com o botao Meu Curso', () => {
    render(
      <StudentProfileProvider>
        <Navbar />
      </StudentProfileProvider>
    );

    expect(screen.getByLabelText('Definir curso e periodo letivo')).toBeDefined();
    expect(screen.getByText('Meu Curso')).toBeDefined();
  });

  it('deve abrir modal ao clicar no botao de perfil', () => {
    render(
      <StudentProfileProvider>
        <Navbar />
      </StudentProfileProvider>
    );

    const profileBtn = screen.getByLabelText('Definir curso e periodo letivo');
    fireEvent.click(profileBtn);

    expect(screen.getByText('Qual é o seu Curso e Ano?')).toBeDefined();
  });
});
