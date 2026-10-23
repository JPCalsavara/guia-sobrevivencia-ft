'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  X,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  RotateCcw,
  Compass,
  HeartPulse,
  AlertTriangle,
} from 'lucide-react';
import { useStudentProfile } from '@/contexts/StudentProfileContext';
import {
  CourseId,
  JourneyStage,
  StudentPriority,
  StudentAvailability,
} from '@/types/studentProfile';
import { welcomeQuizSteps } from '@/data/welcomeQuiz';
import { buildRecommendation } from '@/lib/quizRecommendation';
import styles from './WelcomeQuizModal.module.scss';

export const OPEN_WELCOME_QUIZ_EVENT = 'ft_open_welcome_quiz';

interface QuizAnswers {
  course: CourseId | null;
  momento: JourneyStage | null;
  interesse: StudentPriority | null;
  carga: StudentAvailability | null;
}

const emptyAnswers: QuizAnswers = {
  course: null,
  momento: null,
  interesse: null,
  carga: null,
};

export function WelcomeQuizModal() {
  const { profile, completeQuiz, isLoaded } = useStudentProfile();
  const [isOpen, setIsOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>(emptyAnswers);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (isLoaded && !profile.quizCompleted && !profile.course) {
      setIsOpen(true);
    }
  }, [isLoaded, profile.quizCompleted, profile.course]);

  useEffect(() => {
    const handleOpen = () => {
      setAnswers(emptyAnswers);
      setStepIndex(0);
      setShowResult(false);
      setIsOpen(true);
    };
    window.addEventListener(OPEN_WELCOME_QUIZ_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_WELCOME_QUIZ_EVENT, handleOpen);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const recommendation = useMemo(() => {
    if (!answers.course || !answers.momento || !answers.interesse || !answers.carga) {
      return null;
    }
    return buildRecommendation({
      course: answers.course,
      stage: answers.momento,
      priority: answers.interesse,
      availability: answers.carga,
    });
  }, [answers]);

  if (!isOpen) return null;

  const closeQuiz = () => {
    setIsOpen(false);
  };

  const restartQuiz = () => {
    setAnswers(emptyAnswers);
    setStepIndex(0);
    setShowResult(false);
  };

  const currentStep = welcomeQuizSteps[stepIndex];
  const totalSteps = welcomeQuizSteps.length;

  const isStepAnswered = (() => {
    switch (currentStep.id) {
      case 'curso':
        return answers.course !== null;
      case 'momento':
        return answers.momento !== null;
      case 'interesse':
        return answers.interesse !== null;
      case 'carga':
        return answers.carga !== null;
      default:
        return false;
    }
  })();

  const handleSelect = (value: string) => {
    switch (currentStep.id) {
      case 'curso':
        setAnswers((prev) => ({ ...prev, course: value as CourseId }));
        break;
      case 'momento':
        setAnswers((prev) => ({ ...prev, momento: value as JourneyStage }));
        break;
      case 'interesse':
        setAnswers((prev) => ({ ...prev, interesse: value as StudentPriority }));
        break;
      case 'carga':
        setAnswers((prev) => ({ ...prev, carga: value as StudentAvailability }));
        break;
    }
  };

  const currentSelectedValue = (() => {
    switch (currentStep.id) {
      case 'curso':
        return answers.course;
      case 'momento':
        return answers.momento;
      case 'interesse':
        return answers.interesse;
      case 'carga':
        return answers.carga;
      default:
        return null;
    }
  })();

  const goNext = () => {
    if (stepIndex < totalSteps - 1) {
      setStepIndex((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const goBack = () => {
    if (showResult) {
      setShowResult(false);
      return;
    }
    if (stepIndex > 0) {
      setStepIndex((prev) => prev - 1);
    }
  };

  const handleApply = () => {
    if (answers.course && answers.momento && answers.interesse && answers.carga) {
      const year =
        answers.momento === 'calouro' ? 1 : answers.momento === 'meio' ? 2 : answers.course === 'tads' ? 3 : 4;
      completeQuiz({
        course: answers.course,
        year,
        priority: answers.interesse,
        availability: answers.carga,
      });
      setIsOpen(false);
    }
  };

  return (
    <div
      className={styles.modalOverlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeQuiz();
        }
      }}
      aria-modal="true"
    >
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-quiz-title"
      >
        <div className={styles.modalHeader}>
          <div className={styles.headerTitleGroup}>
            <div className={styles.badge}>
              <Sparkles size={13} aria-hidden="true" />
              <span>Diagnostico de Perfil</span>
            </div>
            <h2 id="welcome-quiz-title" className={styles.title}>
              {showResult ? 'Seu plano sugerido' : 'Boas vindas ao Guia FT'}
            </h2>
            <p className={styles.description}>
              {showResult
                ? 'Veja por onde comecar e o que evitar neste semestre.'
                : 'Responda um diagnostico rapido para receber uma trilha personalizada.'}
            </p>
          </div>
          <button
            type="button"
            onClick={closeQuiz}
            className={styles.closeBtn}
            aria-label="Fechar diagnostico de perfil"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {!showResult && (
          <div className={styles.progress} aria-hidden="true">
            {welcomeQuizSteps.map((step, index) => (
              <span
                key={step.id}
                className={`${styles.progressDot} ${index <= stepIndex ? styles.progressActive : ''}`}
              />
            ))}
          </div>
        )}

        {!showResult && (
          <div className={styles.stepContent} key={currentStep.id}>
            <span className={styles.stepCounter}>
              Passo {stepIndex + 1} de {totalSteps}
            </span>
            <h3 className={styles.stepTitle}>{currentStep.title}</h3>
            <p className={styles.stepQuestion}>{currentStep.question}</p>

            <div
              className={styles.optionList}
              role="radiogroup"
              aria-label={currentStep.title}
            >
              {currentStep.options.map((option) => {
                const isSelected = currentSelectedValue === option.value;
                return (
                  <button
                    key={String(option.value)}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    className={`${styles.optionCard} ${isSelected ? styles.active : ''}`}
                    onClick={() => handleSelect(String(option.value))}
                  >
                    <span className={styles.optionLabel}>{option.label}</span>
                    <span className={styles.optionDesc}>{option.description}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {showResult && recommendation && (
          <div className={styles.result}>
            <div className={styles.resultBlock}>
              <div className={styles.resultBlockHeader}>
                <Compass size={16} aria-hidden="true" />
                <h3 className={styles.resultBlockTitle}>Secoes para consultar primeiro</h3>
              </div>
              <ul className={styles.sectionList}>
                {recommendation.sections.map((section) => (
                  <li key={section.href}>
                    <Link href={section.href} onClick={closeQuiz} className={styles.sectionLink}>
                      <span className={styles.sectionLabel}>{section.label}</span>
                      <span className={styles.sectionReason}>{section.reason}</span>
                      <ArrowRight size={14} className={styles.sectionArrow} aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.resultBlock}>
              <div className={styles.resultBlockHeader}>
                <AlertTriangle size={16} aria-hidden="true" />
                <h3 className={styles.resultBlockTitle}>Armadilhas para evitar</h3>
              </div>
              <ul className={styles.pitfallList}>
                {recommendation.pitfalls.map((pitfall) => (
                  <li key={pitfall} className={styles.pitfallItem}>
                    {pitfall}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.balanceCard}>
              <div className={styles.balanceIconWrap}>
                <HeartPulse size={18} aria-hidden="true" />
              </div>
              <div className={styles.balanceInfo}>
                <span className={styles.balanceTitle}>Equilibrio e saude mental</span>
                <p className={styles.balanceText}>{recommendation.balanceMessage}</p>
              </div>
            </div>
          </div>
        )}

        <div className={styles.actions}>
          {!showResult && (
            <button type="button" onClick={closeQuiz} className={styles.skipBtn}>
              Pular diagnostico
            </button>
          )}
          <div className={styles.actionsRight}>
            {(stepIndex > 0 || showResult) && (
              <button type="button" onClick={goBack} className={styles.backBtn}>
                <ArrowLeft size={15} aria-hidden="true" />
                <span>Voltar</span>
              </button>
            )}
            {!showResult ? (
              <button
                type="button"
                onClick={goNext}
                className={styles.nextBtn}
                disabled={!isStepAnswered}
              >
                <span>{stepIndex === totalSteps - 1 ? 'Ver plano' : 'Avancar'}</span>
                <ArrowRight size={15} aria-hidden="true" />
              </button>
            ) : (
              <>
                <button type="button" onClick={restartQuiz} className={styles.restartBtn}>
                  <RotateCcw size={15} aria-hidden="true" />
                  <span>Refazer</span>
                </button>
                <button type="button" onClick={handleApply} className={styles.saveBtn}>
                  <Check size={16} aria-hidden="true" />
                  <span>Salvar e aplicar</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
