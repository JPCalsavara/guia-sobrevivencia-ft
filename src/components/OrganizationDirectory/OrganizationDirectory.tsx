'use client';

import React, { useState } from 'react';
import { organizationsData, Organization } from '@/data/organizations';
import { ExternalLink, Instagram, Globe, Users } from 'lucide-react';
import styles from './OrganizationDirectory.module.scss';

export function OrganizationDirectory() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'Todas as Entidades' },
    { key: 'empresa_junior', label: 'Empresa Júnior' },
    { key: 'ti', label: 'Computação e TI' },
    { key: 'atletica', label: 'Atlética e Esportes' },
    { key: 'carreira', label: 'Carreira e Negócios' },
    { key: 'extensao', label: 'Extensão e Social' },
    { key: 'comunidade_fe', label: 'Comunidades de Fé' },
    { key: 'regional', label: 'Ecossistema Regional' },
  ];

  const filtered = selectedCategory === 'all'
    ? organizationsData
    : organizationsData.filter((org) => {
        if (selectedCategory === 'extensao') {
          return org.category === 'extensao' || org.category === 'social';
        }
        return org.category === selectedCategory;
      });

  return (
    <div className={styles.wrapper}>
      <div className={styles.filtersArea} role="group" aria-label="Filtrar entidades por categoria">
        {categories.map((cat) => (
          <button
            key={cat.key}
            type="button"
            onClick={() => setSelectedCategory(cat.key)}
            className={`${styles.filterButton} ${selectedCategory === cat.key ? styles.filterActive : ''}`}
            aria-pressed={selectedCategory === cat.key}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((org: Organization) => (
          <div key={org.id} className={`${styles.card} ${styles[`card_${org.category}`] || ''}`}>
            <div className={styles.cardHeader}>
              <span className={`${styles.categoryBadge} ${styles[`cat_${org.category}`] || ''}`}>
                {org.categoryLabel}
              </span>
              <Users size={18} className={styles.orgIcon} aria-hidden="true" />
            </div>

            <h3 className={styles.orgName}>{org.name}</h3>
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
                  <span>{org.instagramHandle || 'Instagram'}</span>
                </a>
              )}

              {org.websiteUrl && (
                <a
                  href={org.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkButtonWebsite}
                  title={`Acessar site de ${org.name}`}
                  aria-label={`Acessar site oficial de ${org.name} em nova janela`}
                >
                  <Globe size={14} aria-hidden="true" />
                  <span>Site Oficial</span>
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
