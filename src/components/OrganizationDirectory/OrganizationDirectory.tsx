'use client';

import React, { useState } from 'react';
import { organizationsData, Organization } from '@/data/organizations';
import { ExternalLink, Instagram, Globe, Users, Linkedin } from 'lucide-react';
import styles from './OrganizationDirectory.module.scss';

interface CategoryConfig {
  key: Organization['category'];
  id: string;
  label: string;
  subtitle: string;
}

const CATEGORY_CONFIGS: CategoryConfig[] = [
  {
    key: 'empresa_junior',
    id: 'org-empresa-junior',
    label: 'Empresa Júnior',
    subtitle: 'Consultoria empresarial, desenvolvimento de software e soluções para o mercado',
  },
  {
    key: 'ligas',
    id: 'org-ligas',
    label: 'Ligas Acadêmicas',
    subtitle: 'Grupos de estudo aprofundado em cibersegurança, mercado financeiro, startups e carreira',
  },
  {
    key: 'extensao',
    id: 'org-extensao',
    label: 'Extensão e Ação Social',
    subtitle: 'Projetos comunitários, inclusão tecnológica, educação popular e voluntariado',
  },
  {
    key: 'centro_academico',
    id: 'org-centro-academico',
    label: 'Centro Acadêmico',
    subtitle: 'Representação discente, recepção de calouros e interlocução com a coordenação',
  },
  {
    key: 'atletica',
    id: 'org-atletica',
    label: 'Atlética e Esportes',
    subtitle: 'Treinos esportivos, modalidades de quadra e integração universitária',
  },
  {
    key: 'republica',
    id: 'org-republica',
    label: 'Repúblicas e Moradia',
    subtitle: 'Associação de repúblicas, acolhimento de novos moradores e integração estudantil',
  },
];

export function OrganizationDirectory() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const visibleConfigs = selectedCategory === 'all'
    ? CATEGORY_CONFIGS
    : CATEGORY_CONFIGS.filter((cfg) => cfg.key === selectedCategory);

  return (
    <div className={styles.wrapper}>
      {/* Botões de Filtro */}
      <div className={styles.filtersArea} role="group" aria-label="Filtrar entidades por categoria">
        <button
          type="button"
          onClick={() => setSelectedCategory('all')}
          className={`${styles.filterButton} ${selectedCategory === 'all' ? styles.filterActive : ''}`}
          aria-pressed={selectedCategory === 'all'}
        >
          Todas as Entidades
        </button>
        {CATEGORY_CONFIGS.map((cfg) => (
          <button
            key={cfg.key}
            type="button"
            onClick={() => setSelectedCategory(cfg.key)}
            className={`${styles.filterButton} ${selectedCategory === cfg.key ? styles.filterActive : ''}`}
            aria-pressed={selectedCategory === cfg.key}
          >
            {cfg.label}
          </button>
        ))}
      </div>

      {/* Seções por Categoria */}
      {visibleConfigs.map((cfg) => {
        const orgs = organizationsData.filter((org) => org.category === cfg.key);
        if (orgs.length === 0) return null;

        return (
          <section key={cfg.key} id={cfg.id} className={styles.categorySection}>
            <div className={styles.categoryHeader}>
              <div className={styles.categoryTitleArea}>
                <h3 className={styles.categoryTitle}>{cfg.label}</h3>
                <p className={styles.categorySubtitle}>{cfg.subtitle}</p>
              </div>
              <span className={styles.categoryCount}>
                {orgs.length} {orgs.length === 1 ? 'organização' : 'organizações'}
              </span>
            </div>

            <div className={styles.grid}>
              {orgs.map((org: Organization) => (
                <div key={org.id} className={`${styles.card} ${styles[`card_${org.category}`] || ''}`}>
                  <div className={styles.cardHeader}>
                    <span className={`${styles.categoryBadge} ${styles[`cat_${org.category}`] || ''}`}>
                      {org.categoryLabel}
                    </span>
                    <Users size={18} className={styles.orgIcon} aria-hidden="true" />
                  </div>

                  <h4 className={styles.orgName}>{org.name}</h4>
                  <p className={styles.orgDesc}>{org.description}</p>

                  <div className={styles.cardFooter}>
                    {org.instagramUrl && (
                      <a
                        href={org.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkButton}
                        title={`Acessar Instagram de ${org.name}`}
                        aria-label={`Acessar Instagram de ${org.name} em nova janela`}
                      >
                        <Instagram size={14} aria-hidden="true" />
                        <span>Instagram</span>
                        <ExternalLink size={12} aria-hidden="true" />
                      </a>
                    )}
                    {org.linkedinUrl && (
                      <a
                        href={org.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkButtonLinkedin}
                        title={`Acessar LinkedIn de ${org.name}`}
                        aria-label={`Acessar LinkedIn de ${org.name} em nova janela`}
                      >
                        <Linkedin size={14} aria-hidden="true" />
                        <span>LinkedIn</span>
                        <ExternalLink size={12} aria-hidden="true" />
                      </a>
                    )}
                    {org.websiteUrl && (
                      <a
                        href={org.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkButtonWebsite}
                        title={`Acessar site de ${org.name}`}
                        aria-label={`Acessar site de ${org.name} em nova janela`}
                      >
                        <Globe size={14} aria-hidden="true" />
                        <span>Website</span>
                        <ExternalLink size={12} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
