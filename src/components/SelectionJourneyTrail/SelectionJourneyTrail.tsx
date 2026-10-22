'use client';

import React, { useState } from 'react';
import { Linkedin, ExternalLink } from 'lucide-react';
import { SelectionStage, VeteranProfile, companiesShowcaseData } from '@/data/careerExpanded';
import styles from './SelectionJourneyTrail.module.scss';

interface SelectionJourneyTrailProps {
  stages: SelectionStage[];
  veterans: VeteranProfile[];
}

export function SelectionJourneyTrail({ stages, veterans }: SelectionJourneyTrailProps) {
  const orderedStages = [...stages].sort((a, b) => a.order - b.order);
  const [activeStageId, setActiveStageId] = useState<string>(orderedStages[0]?.id ?? '');

  return (
    <div className={styles.trailContainer}>
      <div className={styles.trailBlock} aria-labelledby="trilha-fases-heading">
        <h3 id="trilha-fases-heading" className={styles.sectionLabel}>
          Trilha das Fases do Processo Seletivo
        </h3>
        <p className={styles.sectionIntro}>
          Percorra as etapas em ordem cronologica. Selecione um passo para ver os detalhes de cada fase.
        </p>

        <ol className={styles.stageList} aria-label="Fases do processo seletivo em ordem cronologica">
          {orderedStages.map((stage) => {
            const isActive = stage.id === activeStageId;
            return (
              <li key={stage.id} className={styles.stageItem}>
                <button
                  type="button"
                  onClick={() => setActiveStageId(stage.id)}
                  className={`${styles.stageButton} ${isActive ? styles.stageButtonActive : ''}`}
                  aria-expanded={isActive}
                  aria-label={`Fase ${stage.order} de ${orderedStages.length}: ${stage.title}`}
                >
                  <span className={styles.stageOrder} aria-hidden="true">{stage.order}</span>
                  <span className={styles.stageTexts}>
                    <span className={styles.stageCategory}>{stage.category}</span>
                    <span className={styles.stageTitle}>{stage.title}</span>
                    <span className={styles.stageSummary}>{stage.summary}</span>
                  </span>
                </button>
                {isActive && (
                  <p className={styles.stageDetail}>{stage.detail}</p>
                )}
              </li>
            );
          })}
        </ol>
      </div>

      <div className={styles.veteransBlock} aria-labelledby="rede-veteranos-heading">
        <h3 id="rede-veteranos-heading" className={styles.sectionLabel}>
          Rede de Veteranos por Empresa
        </h3>
        <p className={styles.sectionIntro}>
          Egressos da FT que atuam nestas empresas. Conecte-se pelo LinkedIn para trocar experiencias.
        </p>

        <div className={styles.companiesGrid}>
          {companiesShowcaseData.map((company) => {
            const companyVeterans = veterans.filter((veteran) => veteran.companyId === company.id);
            if (companyVeterans.length === 0) {
              return null;
            }
            return (
              <div key={company.id} className={styles.companyCard}>
                <div className={styles.companyHeader}>
                  <span className={styles.companyTag}>{company.tag}</span>
                  <h4 className={styles.companyName}>{company.name}</h4>
                </div>

                <ul className={styles.veteranList}>
                  {companyVeterans.map((veteran) => (
                    <li key={veteran.id} className={styles.veteranItem}>
                      <span className={styles.veteranName}>{veteran.displayName}</span>
                      <span className={styles.veteranMeta}>{veteran.course} - {veteran.role}</span>
                      <a
                        href={veteran.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.veteranLink}
                        aria-label={`Abrir o perfil de LinkedIn de ${veteran.displayName} da empresa ${company.name} em nova janela`}
                      >
                        <Linkedin size={14} aria-hidden="true" />
                        <span>Perfil no LinkedIn</span>
                        <ExternalLink size={12} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
