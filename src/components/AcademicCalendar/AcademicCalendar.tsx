'use client';

import React, { useState, useMemo } from 'react';
import {
  Calendar,
  Search,
  ExternalLink,
  Clock,
  AlertTriangle,
  BookOpen,
  FileText
} from 'lucide-react';
import {
  academicMilestonesData,
  canonicalAcademicResources,
  MilestoneCategory,
  AcademicMilestone
} from '@/data/academicCalendar';
import styles from './AcademicCalendar.module.scss';

interface CategoryFilterOption {
  key: string;
  label: string;
}

const CATEGORY_OPTIONS: CategoryFilterOption[] = [
  { key: 'all', label: 'Todos os Marcos' },
  { key: 'matricula', label: 'Matricula e Turmas' },
  { key: 'aulas', label: 'Aulas e Recesso' },
  { key: 'trancamento', label: 'Trancamento' },
  { key: 'avaliacoes', label: 'Avaliacoes e Notas' },
  { key: 'conclusao', label: 'Conclusao e Formatura' },
];

export function AcademicCalendar() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredMilestones = useMemo(() => {
    return academicMilestonesData.filter((milestone: AcademicMilestone) => {
      const matchesCategory =
        selectedCategory === 'all' || milestone.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase();
      const titleMatch = milestone.title.toLowerCase().includes(query);
      const descMatch = milestone.description.toLowerCase().includes(query);
      const periodMatch = milestone.typicalPeriod.toLowerCase().includes(query);
      const guidanceMatch = milestone.actionGuidance.toLowerCase().includes(query);

      return titleMatch || descMatch || periodMatch || guidanceMatch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className={styles.wrapper} id="painel-calendario-academico">
      <div className={styles.canonicalHeader}>
        <div className={styles.canonicalTitleArea}>
          <h3 className={styles.canonicalTitle}>
            <Calendar size={20} aria-hidden="true" />
            Fontes Canonicas e Calendario Oficial da DAC
          </h3>
          <p className={styles.canonicalSubtitle}>
            Conforme a ADR 0004, datas operacionais e prazos pontuais sao atualizados dinamicamente pelos orgaos centrais da Unicamp. Consulte os enderecos oficiais abaixo para acessar o calendario integral em tempo real e o regimento vigente.
          </p>
        </div>

        <div className={styles.canonicalGrid}>
          {canonicalAcademicResources.map((resource) => (
            <a
              key={resource.id}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.canonicalCard}
              title={`Acessar ${resource.title}`}
            >
              <div>
                <div className={styles.canonicalCardHeader}>
                  <span className={styles.canonicalCardTitle}>{resource.title}</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </div>
                <p className={styles.canonicalCardDesc}>{resource.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.controlsArea}>
        <div className={styles.searchBox}>
          <Search size={16} className={styles.searchIcon} aria-hidden="true" />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Pesquisar por marco academico, matricula, trancamento ou exames..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Filtrar marcos academicos por palavra chave"
          />
        </div>

        <div className={styles.filtersBar} role="group" aria-label="Filtro por categoria de marcos academicos">
          {CATEGORY_OPTIONS.map((opt) => (
            <button
              key={opt.key}
              type="button"
              className={`${styles.filterBtn} ${selectedCategory === opt.key ? styles.filterActive : ''}`}
              onClick={() => setSelectedCategory(opt.key)}
              aria-pressed={selectedCategory === opt.key}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <span className={styles.resultsCount}>
          Exibindo {filteredMilestones.length} de {academicMilestonesData.length} marcos semestrais
        </span>
      </div>

      {filteredMilestones.length === 0 ? (
        <div className={styles.emptyState}>
          Nenhum marco academico correspondente aos criterios informados foi localizado.
        </div>
      ) : (
        <div className={styles.milestonesGrid}>
          {filteredMilestones.map((milestone) => (
            <article key={milestone.id} className={styles.milestoneCard}>
              <div className={styles.cardTop}>
                <div className={styles.cardHeader}>
                  <span className={styles.categoryTag}>{milestone.categoryLabel}</span>
                  <span className={styles.periodBadge}>
                    <Clock size={12} aria-hidden="true" />
                    Ciclo Semestral
                  </span>
                </div>

                <h4 className={styles.milestoneTitle}>{milestone.title}</h4>
                <p className={styles.milestoneDesc}>{milestone.description}</p>

                <div className={styles.guidanceBox}>
                  <span className={styles.boxLabel}>Epoca Habitual</span>
                  <span className={styles.boxText}>{milestone.typicalPeriod}</span>
                </div>

                <div className={styles.guidanceBox}>
                  <span className={styles.boxLabel}>Procedimento no e-DAC</span>
                  <span className={styles.boxText}>{milestone.actionGuidance}</span>
                </div>

                <div className={styles.riskBox}>
                  <span className={styles.riskLabel}>
                    <AlertTriangle size={12} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} aria-hidden="true" />
                    Risco Critico
                  </span>
                  <span className={styles.boxText}>{milestone.criticalRisk}</span>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <a
                  href={milestone.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.officialLink}
                >
                  Regulamento na DAC
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
