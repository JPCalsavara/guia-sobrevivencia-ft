import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { StudentProfileProvider } from '../contexts/StudentProfileContext';
import { WelcomeQuizModal } from '../components/WelcomeQuizModal/WelcomeQuizModal';
import { welcomeQuizSteps } from '../data/welcomeQuiz';
import { buildRecommendation } from '../lib/quizRecommendation';
import {
  CourseId,
  JourneyStage,
  StudentPriority,
  StudentAvailability,
} from '../types/studentProfile';

describe('Logica de recomendacao do quiz', () => {
  const courses: CourseId[] = ['bsi', 'tads'];
  const stages: JourneyStage[] = ['calouro', 'meio', 'formando'];
  const priorities: StudentPriority[] = ['mercado', 'pesquisa', 'empreendedorismo', 'cicloBasico'];
  const availabilities: StudentAvailability[] = ['baixa', 'media', 'alta'];

  it('retorna secoes, armadilhas e mensagem de equilibrio nao vazias para toda combinacao', () => {
    courses.forEach((course) => {
      stages.forEach((stage) => {
        priorities.forEach((priority) => {
          availabilities.forEach((availability) => {
            const rec = buildRecommendation({ course, stage, priority, availability });
            expect(rec.sections.length).toBeGreaterThanOrEqual(1);
            rec.sections.forEach((section) => {
              expect(section.href.startsWith('/')).toBe(true);
              expect(section.label.length).toBeGreaterThan(0);
              expect(section.reason.length).toBeGreaterThan(0);
            });
            expect(rec.pitfalls.length).toBeGreaterThanOrEqual(1);
            expect(rec.balanceMessage.length).toBeGreaterThan(0);
          });
        });
      });
    });
  });

  it('nao repete secoes com o mesmo destino', () => {
    const rec = buildRecommendation({
      course: 'bsi',
      stage: 'formando',
      priority: 'mercado',
      availability: 'alta',
    });
    const hrefs = rec.sections.map((s) => s.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });

  it('enfatiza a saude mental quando a disponibilidade e alta', () => {
    const rec = buildRecommendation({
      course: 'bsi',
      stage: 'meio',
      priority: 'mercado',
      availability: 'alta',
    });
    expect(rec.balanceMessage.toLowerCase()).toContain('sobrecarga');
  });
});

describe('Dados do quiz de boas vindas', () => {
  it('expoe quatro passos com opcoes nao vazias', () => {
    expect(welcomeQuizSteps.length).toBe(4);
    welcomeQuizSteps.forEach((step) => {
      expect(step.title.length).toBeGreaterThan(0);
      expect(step.question.length).toBeGreaterThan(0);
      expect(step.options.length).toBeGreaterThanOrEqual(2);
      step.options.forEach((option) => {
        expect(String(option.value).length).toBeGreaterThan(0);
        expect(option.label.length).toBeGreaterThan(0);
        expect(option.description.length).toBeGreaterThan(0);
      });
    });
  });

  it('segue a ordem curso, momento, interesse e carga', () => {
    expect(welcomeQuizSteps.map((s) => s.id)).toEqual(['curso', 'momento', 'interesse', 'carga']);
  });
});

describe('Componente WelcomeQuizModal', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('abre automaticamente na primeira visita e exibe o primeiro passo', () => {
    render(
      <StudentProfileProvider>
        <WelcomeQuizModal />
      </StudentProfileProvider>
    );

    expect(screen.getByText('Boas vindas ao Guia FT')).toBeDefined();
    expect(screen.getByText('Qual e o seu curso')).toBeDefined();
    expect(screen.getByText('Passo 1 de 4')).toBeDefined();
  });

  it('avanca ate o cartao executivo, exibe o aviso de saude mental e salva o perfil', () => {
    render(
      <StudentProfileProvider>
        <WelcomeQuizModal />
      </StudentProfileProvider>
    );

    fireEvent.click(screen.getByText('Sistemas de Informacao'));
    fireEvent.click(screen.getByText('Avancar'));

    fireEvent.click(screen.getByText('No meio do curso'));
    fireEvent.click(screen.getByText('Avancar'));

    fireEvent.click(screen.getByText('Mercado corporativo'));
    fireEvent.click(screen.getByText('Avancar'));

    fireEvent.click(screen.getByText('Bastante tempo livre'));
    fireEvent.click(screen.getByText('Ver plano'));

    expect(screen.getByText('Seu plano sugerido')).toBeDefined();
    expect(screen.getByText('Equilibrio e saude mental')).toBeDefined();
    expect(screen.getByText('Secoes para consultar primeiro')).toBeDefined();

    fireEvent.click(screen.getByText('Salvar e aplicar'));

    const stored = JSON.parse(localStorage.getItem('ft_student_profile') || '{}');
    expect(stored.course).toBe('bsi');
    expect(stored.year).toBe(2);
    expect(stored.semester).toBe(4);
    expect(stored.stage).toBe('meio');
  });

  it('permite pular o diagnostico e fechar o modal', () => {
    render(
      <StudentProfileProvider>
        <WelcomeQuizModal />
      </StudentProfileProvider>
    );

    fireEvent.click(screen.getByText('Pular diagnostico'));
    expect(screen.queryByText('Qual e o seu curso')).toBeNull();
    expect(localStorage.getItem('ft_student_profile')).toBeNull();
  });

  it('nao abre automaticamente quando o quiz ja foi concluido', () => {
    localStorage.setItem(
      'ft_student_profile',
      JSON.stringify({
        course: 'bsi',
        year: 2,
        semester: 4,
        stage: 'meio',
      })
    );

    render(
      <StudentProfileProvider>
        <WelcomeQuizModal />
      </StudentProfileProvider>
    );

    expect(screen.queryByText('Boas vindas ao Guia FT')).toBeNull();
  });
});
