'use client';

import React, { useState } from 'react';
import { bsiCurriculumData, tadsCurriculumData } from '@/data/academic';
import { BookOpen, Layers, Award, Sparkles, CheckCircle, ExternalLink } from 'lucide-react';
import styles from './CurriculumGrids.module.scss';

function getSubjectCatalogUrl(code: string, semesterNumber: number, customUrl?: string): string {
  if (customUrl) return customUrl;
  const currentYear = new Date().getFullYear();
  const semesterPeriod = semesterNumber % 2 === 1 ? 1 : 2;

  if (code.startsWith('ELET')) {
    return `https://www.dac.unicamp.br/portal/caderno-de-horarios/${currentYear}/${semesterPeriod}/S/G`;
  }

  return `https://www.dac.unicamp.br/portal/caderno-de-horarios/${currentYear}/${semesterPeriod}/S/G/FT#${code}`;
}

export function CurriculumGrids() {
  const [selectedCourse, setSelectedCourse] = useState<'bsi' | 'tads'>('bsi');

  const activeCurriculum = selectedCourse === 'bsi' ? bsiCurriculumData : tadsCurriculumData;
  const totalCourseCredits = activeCurriculum.reduce((acc, sem) => acc + sem.totalCredits, 0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerArea}>
        <div className={styles.headerBadge}>
          <BookOpen size={15} aria-hidden="true" />
          <span>Matriz Curricular Semestre a Semestre</span>
        </div>
        <h2 className={styles.title}>Grades Curriculares Oficiais: BSI e TADS 2026</h2>
        <p className={styles.subtitle}>
          Consulte a distribuição exata de créditos, códigos de disciplinas obrigatórias, práticas em laboratório e requisitos de extensão para cada período letivo. Clique em qualquer matéria para abrir sua turma e ementa no Caderno de Horários da DAC.
        </p>
      </div>

      {/* Seletor de Curso */}
      <div className={styles.tabButtons} role="tablist" aria-label="Selecione o curso para visualizar a grade curricular">
        <button
          type="button"
          role="tab"
          aria-selected={selectedCourse === 'bsi'}
          className={`${styles.tabBtn} ${selectedCourse === 'bsi' ? styles.activeTab : ''}`}
          onClick={() => setSelectedCourse('bsi')}
        >
          Grade Completa BSI, 204 Créditos em 8 Semestres
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={selectedCourse === 'tads'}
          className={`${styles.tabBtn} ${selectedCourse === 'tads' ? styles.activeTab : ''}`}
          onClick={() => setSelectedCourse('tads')}
        >
          Grade Atualizada TADS 2026, Noturno em 6 Semestres
        </button>
      </div>

      {/* Grid de Semestres */}
      <div className={styles.semestersGrid}>
        {activeCurriculum.map((semester) => (
          <div key={semester.semesterNumber} className={styles.semesterCard}>
            <div className={styles.semesterHeader}>
              <h3 className={styles.semesterTitle}>{semester.semesterLabel}</h3>
              <span className={styles.creditsBadge}>{semester.totalCredits} créditos</span>
            </div>

            <ul className={styles.subjectsList}>
              {semester.subjects.map((sub, idx) => {
                const catalogUrl = getSubjectCatalogUrl(sub.code, semester.semesterNumber, sub.catalogUrl);
                return (
                  <li key={`${sub.code}-${idx}`} className={styles.subjectRow}>
                    <a
                      href={catalogUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.subjectLink}
                      title={`Consultar horários e ementa de ${sub.code} no Caderno DAC`}
                    >
                      <div className={styles.subjectInfo}>
                        <span className={styles.subjectCode}>
                          {sub.code}
                          <ExternalLink size={10} className={styles.externalIcon} aria-hidden="true" />
                        </span>
                        <span className={styles.subjectName} title={sub.name}>
                          {sub.name}
                        </span>
                      </div>

                      <div className={styles.subjectMeta}>
                        {sub.type === 'eletiva' && (
                          <span className={`${styles.typeTag} ${styles.eletiva}`}>Eletiva</span>
                        )}
                        {sub.type === 'extensao' && (
                          <span className={`${styles.typeTag} ${styles.extensao}`}>Extensão</span>
                        )}
                        {sub.type === 'pratica' && (
                          <span className={`${styles.typeTag} ${styles.pratica}`}>Prática</span>
                        )}
                        <span className={styles.subjectCredits}>{sub.credits} cr</span>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Callouts com Regras Específicas por Curso */}
      {selectedCourse === 'bsi' ? (
        <div className={styles.curriculumCallout}>
          <h4>Regras de Disciplinas Eletivas do Bacharelado em Sistemas de Informação</h4>
          <p>
            Além do núcleo comum obrigatório, os estudantes de BSI devem integralizar vinte créditos eletivos distribuídos nas seguintes categorias reconhecidas pela comissão de graduação:
          </p>
          <ul>
            <li>Iniciação Científica I e II: SI901 e SI902</li>
            <li>Iniciação Tecnológica I e II: SI903 e SI904</li>
            <li>Programa de Apoio Didático Monitoria I e II: SI905 e SI906</li>
            <li>Atividades Complementares: SI909</li>
            <li>Qualquer disciplina com código EI voltada a empreendedorismo e inovação</li>
          </ul>
        </div>
      ) : (
        <div className={styles.curriculumCallout}>
          <h4>Particularidades do Projeto Pedagógico 2026 de TADS</h4>
          <p>
            O curso de Tecnologia em Análise e Desenvolvimento de Sistemas é ministrado integralmente no turno noturno e totaliza seis semestres letivos, com forte ênfase na curricularização da extensão universitária:
          </p>
          <ul>
            <li>Atividades práticas em algoritmos e laboratório de ferramentas de programação no primeiro ano</li>
            <li>Créditos de extensão obrigatórios incorporados em disciplinas como Interação Humano Computador, Gestão de Projetos e Projeto Integrador</li>
            <li>Total de dezesseis créditos dedicados a atividades complementares de extensão e práticas orientadas no último semestre letivo</li>
          </ul>
        </div>
      )}
    </div>
  );
}
