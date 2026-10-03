'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  X,
  GraduationCap,
  Sparkles,
  Check,
  RotateCcw,
  BookOpen,
  TrendingUp,
  Award,
  FileText,
} from 'lucide-react';
import { useStudentProfile } from '@/contexts/StudentProfileContext';
import {
  CourseId,
  COURSE_NAMES,
  COURSE_SHORT_NAMES,
  COURSE_MAX_YEARS,
  computeJourneyStageFromYear,
} from '@/types/studentProfile';
import styles from './StudentProfileModal.module.scss';

interface StudentProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StudentProfileModal({ isOpen, onClose }: StudentProfileModalProps) {
  const { profile, setProfile, clearProfile } = useStudentProfile();
  const [selectedCourse, setSelectedCourse] = useState<CourseId>('bsi');
  const [selectedYear, setSelectedYear] = useState<number>(1);

  useEffect(() => {
    if (profile.course) {
      setSelectedCourse(profile.course);
    }
    if (profile.year) {
      setSelectedYear(profile.year);
    } else if (profile.semester) {
      const derived = Math.min(Math.max(1, Math.ceil(profile.semester / 2)), COURSE_MAX_YEARS[profile.course || 'bsi']);
      setSelectedYear(derived);
    }
  }, [profile, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxYears = COURSE_MAX_YEARS[selectedCourse];
  const validYear = Math.min(selectedYear, maxYears);

  const handleSelectCourse = (course: CourseId) => {
    setSelectedCourse(course);
    if (selectedYear > COURSE_MAX_YEARS[course]) {
      setSelectedYear(COURSE_MAX_YEARS[course]);
    }
  };

  const currentStage = computeJourneyStageFromYear(validYear, selectedCourse);

  const getStageDescription = () => {
    if (currentStage === 'calouro') {
      return {
        title: 'Fase Ingressante ou Calouro',
        desc: 'Foco inicial em matrícula, habitação, salas de aula, bandejão e reforço em cálculo e programação.',
        icon: GraduationCap,
      };
    }
    if (currentStage === 'meio') {
      return {
        title: 'Fase Intermediária ou Cursando',
        desc: 'Foco em aceleração de créditos, monitoria PAD, iniciação científica e horas de extensão.',
        icon: TrendingUp,
      };
    }
    return {
      title: 'Fase Final ou Formando',
      desc: 'Foco em estágio supervisionado, TCC, horas complementares e colação de grau oficial.',
      icon: Award,
    };
  };

  const stageMeta = getStageDescription();
  const StageIcon = stageMeta.icon;

  const handleSave = () => {
    setProfile(selectedCourse, validYear);
    onClose();
  };

  const handleClear = () => {
    clearProfile();
    setSelectedCourse('bsi');
    setSelectedYear(1);
    onClose();
  };

  return (
    <div
      className={styles.modalOverlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      aria-modal="true"
    >
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="student-profile-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <div className={styles.headerTitleGroup}>
            <div className={styles.badge}>
              <Sparkles size={13} aria-hidden="true" />
              <span>Personalização da Jornada</span>
            </div>
            <h2 id="student-profile-modal-title" className={styles.title}>
              Qual é o seu Curso e Ano?
            </h2>
            <p className={styles.description}>
              Informe seu curso e o ano letivo para sincronizar os filtros de conteúdo e receber destaque nos temas mais urgentes.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className={styles.closeBtn}
            aria-label="Fechar janela de seleção de perfil"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Escolha do Curso */}
        <div className={styles.section}>
          <label className={styles.sectionLabel}>Curso de Graduação</label>
          <div className={styles.courseGrid} role="radiogroup" aria-label="Selecione seu curso">
            {(['bsi', 'tads'] as CourseId[]).map((courseId) => {
              const isSelected = selectedCourse === courseId;
              return (
                <button
                  key={courseId}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  className={`${styles.courseCard} ${isSelected ? styles.active : ''}`}
                  onClick={() => handleSelectCourse(courseId)}
                >
                  <span className={styles.courseShort}>{COURSE_SHORT_NAMES[courseId]}</span>
                  <span className={styles.courseFull}>{COURSE_NAMES[courseId]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Escolha do Ano */}
        <div className={styles.section}>
          <label className={styles.sectionLabel}>Ano da Graduação</label>
          <div className={styles.yearGrid} role="group" aria-label="Selecione seu ano letivo">
            {Array.from({ length: maxYears }, (_, i) => i + 1).map((year) => {
              const isSelected = validYear === year;
              const stageTag =
                year === 1
                  ? 'Calouro'
                  : (selectedCourse === 'tads' && year === 3) || year === 4
                    ? 'Formando'
                    : 'Cursando';
              return (
                <button
                  key={year}
                  type="button"
                  className={`${styles.yearBtn} ${isSelected ? styles.active : ''}`}
                  onClick={() => setSelectedYear(year)}
                  aria-pressed={isSelected}
                >
                  <span className={styles.yearTitle}>{year}º Ano</span>
                  <span className={styles.yearSubtitle}>{stageTag}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Card Informativo do Estágio */}
        <div className={styles.stageCard}>
          <div className={styles.stageIconWrap}>
            <StageIcon size={20} aria-hidden="true" />
          </div>
          <div className={styles.stageInfo}>
            <span className={styles.stageTitle}>{stageMeta.title}</span>
            <span className={styles.stageDesc}>{stageMeta.desc}</span>
          </div>
        </div>

        {/* Banner do Formulário de Pesquisa Discente */}
        <div className={styles.surveyBanner}>
          <div className={styles.surveyBannerText}>
            <span className={styles.surveyBannerTitle}>Pesquisa Discente e Termômetro</span>
            <span className={styles.surveyBannerDesc}>
              Compartilhe seus desafios e objetivos de carreira na FT em nosso formulário público.
            </span>
          </div>
          <Link
            href="/estatisticas#termometro-discente"
            onClick={onClose}
            className={styles.surveyBannerBtn}
          >
            <FileText size={14} aria-hidden="true" />
            <span>Preencher Formulário</span>
          </Link>
        </div>

        {/* Ações */}
        <div className={styles.actions}>
          <button
            type="button"
            onClick={handleClear}
            className={styles.clearBtn}
          >
            Redefinir
          </button>
          <button
            type="button"
            onClick={handleSave}
            className={styles.saveBtn}
          >
            <Check size={16} aria-hidden="true" />
            <span>Salvar Preferência</span>
          </button>
        </div>
      </div>
    </div>
  );
}
