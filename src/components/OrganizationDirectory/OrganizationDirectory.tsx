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
      <div className={styles.filtersArea}>
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`${styles.filterButton} ${selectedCategory === cat.key ? styles.filterActive : ''}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((org: Organization) => (
          <div key={org.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.categoryBadge}>{org.categoryLabel}</span>
              <Users size={18} className={styles.orgIcon} />
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
                >
                  <Instagram size={14} />
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
                >
                  <Globe size={14} />
                  <span>Site Oficial</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
