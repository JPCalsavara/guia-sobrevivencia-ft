'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  GraduationCap,
  Sparkles,
  Check,
  RotateCcw,
  BookOpen,
  TrendingUp,
  Award,
} from 'lucide-react';
import { useStudentProfile } from '@/contexts/StudentProfileContext';
import {
  CourseId,
  COURSE_NAMES,
  COURSE_SHORT_NAMES,
  COURSE_MAX_SEMESTERS,
  computeJourneyStage,
} from '@/types/studentProfile';
import styles from './StudentProfileModal.module.scss';

interface StudentProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StudentProfileModal({ isOpen, onClose }: StudentProfileModalProps) {
  const { profile, setProfile, clearProfile } = useStudentProfile();
  const [selectedCourse, setSelectedCourse] = useState<CourseId>('bsi');
  const [selectedSemester, setSelectedSemester] = useState<number>(1);

  useEffect(() => {
    if (profile.course) {
      setSelectedCourse(profile.course);
    }
    if (profile.semester) {
      setSelectedSemester(profile.semester);
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

  const maxSemesters = COURSE_MAX_SEMESTERS[selectedCourse];
  const validSemester = Math.min(selectedSemester, maxSemesters);

  const handleSelectCourse = (course: CourseId) => {
    setSelectedCourse(course);
    if (selectedSemester > COURSE_MAX_SEMESTERS[course]) {
      setSelectedSemester(COURSE_MAX_SEMESTERS[course]);
    }
  };

  const currentStage = computeJourneyStage(validSemester);

  const getStageDescription = () => {
    if (currentStage === 'calouro') {
      return {
        title: 'Fase Ingressante ou Calouro',
        desc: 'Foco inicial em matricula, habitacao, salas de aula, bandejao e reforco em calculo e programacao.',
        icon: GraduationCap,
      };
    }
    if (currentStage === 'meio') {
      return {
        title: 'Fase Intermediaria ou Cursando',
        desc: 'Foco em aceleracao de creditos, monitoria PAD, iniciacao cientifica e horas de extensao.',
        icon: TrendingUp,
      };
    }
    return {
      title: 'Fase Final ou Formando',
      desc: 'Foco em estagio supervisionado, TCC, horas complementares e colacao de grau oficial.',
      icon: Award,
    };
  };

  const stageMeta = getStageDescription();
  const StageIcon = stageMeta.icon;

  const handleSave = () => {
    setProfile(selectedCourse, validSemester);
    onClose();
  };

  const handleClear = () => {
    clearProfile();
    setSelectedCourse('bsi');
    setSelectedSemester(1);
    onClose();
  };

  return (
    <>
      <div className={styles.backdrop} onClick={onClose} aria-hidden="true" />
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="student-profile-modal-title"
      >
        <div className={styles.modalHeader}>
          <div className={styles.headerTitleGroup}>
            <div className={styles.badge}>
              <Sparkles size={13} aria-hidden="true" />
              <span>Personalizacao da Jornada</span>
            </div>
            <h2 id="student-profile-modal-title" className={styles.title}>
              Qual e o seu Curso e Semestre?
            </h2>
            <p className={styles.description}>
              Informe seu curso e o periodo letivo para sincronizar os filtros de conteudo e receber destaque nos temas mais urgentes.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className={styles.closeBtn}
            aria-label="Fechar janela de selecao de perfil"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Escolha do Curso */}
        <div className={styles.section}>
          <label className={styles.sectionLabel}>Curso de Graduacao</label>
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

        {/* Escolha do Semestre */}
        <div className={styles.section}>
          <label className={styles.sectionLabel}>Periodo Letivo Atual</label>
          <div className={styles.semesterGrid} role="group" aria-label="Selecione seu semestre letivo">
            {Array.from({ length: maxSemesters }, (_, i) => i + 1).map((sem) => {
              const isSelected = validSemester === sem;
              return (
                <button
                  key={sem}
                  type="button"
                  className={`${styles.semesterBtn} ${isSelected ? styles.active : ''}`}
                  onClick={() => setSelectedSemester(sem)}
                  aria-pressed={isSelected}
                >
                  <span>{sem}º Sem</span>
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
            <span>Salvar Preferencia</span>
          </button>
        </div>
      </div>
    </>
  );
}
