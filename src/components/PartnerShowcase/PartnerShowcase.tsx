'use client';

import React, { useState } from 'react';
import { localPartnersData, LocalPartner, LocalPartnerCategory } from '@/data/localPartners';
import { ExternalLink, MapPin, BadgeCheck, Store, ArrowUpRight } from 'lucide-react';
import styles from './PartnerShowcase.module.scss';

interface SegmentConfig {
  key: LocalPartnerCategory;
  id: string;
  label: string;
  subtitle: string;
}

const SEGMENT_CONFIGS: SegmentConfig[] = [
  {
    key: 'restaurante',
    id: 'parceiros-restaurante',
    label: 'Restaurantes',
    subtitle: 'Refeicoes e cozinhas no entorno do campus com condicoes para estudantes da FT',
  },
  {
    key: 'imobiliaria',
    id: 'parceiros-imobiliaria',
    label: 'Imobiliarias',
    subtitle: 'Apoio em locacao de kitnets, studios e apartamentos proximos da FT',
  },
  {
    key: 'pensionato',
    id: 'parceiros-pensionato',
    label: 'Pensionatos',
    subtitle: 'Quartos mobiliados e moradia economica para ingressantes em Limeira',
  },
];

function contactLabel(partner: LocalPartner): string {
  if (partner.officialUrl.includes('wa.me') || partner.officialUrl.includes('api.whatsapp.com')) {
    return 'WhatsApp comercial';
  }
  if (partner.officialUrl.includes('instagram.com')) {
    return 'Perfil oficial';
  }
  return 'Website oficial';
}

export function PartnerShowcase() {
  const [selectedSegment, setSelectedSegment] = useState<string>('all');

  const visibleConfigs = selectedSegment === 'all'
    ? SEGMENT_CONFIGS
    : SEGMENT_CONFIGS.filter((cfg) => cfg.key === selectedSegment);

  return (
    <div className={styles.wrapper}>
      <div className={styles.filtersArea} role="group" aria-label="Filtrar parceiros por segmento">
        <button
          type="button"
          onClick={() => setSelectedSegment('all')}
          className={`${styles.filterButton} ${selectedSegment === 'all' ? styles.filterActive : ''}`}
          aria-pressed={selectedSegment === 'all'}
        >
          Todos os Parceiros
        </button>
        {SEGMENT_CONFIGS.map((cfg) => (
          <button
            key={cfg.key}
            type="button"
            onClick={() => setSelectedSegment(cfg.key)}
            className={`${styles.filterButton} ${selectedSegment === cfg.key ? styles.filterActive : ''}`}
            aria-pressed={selectedSegment === cfg.key}
          >
            {cfg.label}
          </button>
        ))}
      </div>

      {visibleConfigs.map((cfg) => {
        const partners = localPartnersData.filter((partner) => partner.category === cfg.key);
        if (partners.length === 0) return null;

        return (
          <section key={cfg.key} id={cfg.id} className={styles.segmentSection}>
            <div className={styles.segmentHeader}>
              <div className={styles.segmentTitleArea}>
                <h3 className={styles.segmentTitle}>{cfg.label}</h3>
                <p className={styles.segmentSubtitle}>{cfg.subtitle}</p>
              </div>
              <span className={styles.segmentCount}>
                {partners.length} {partners.length === 1 ? 'parceiro' : 'parceiros'}
              </span>
            </div>

            <div className={styles.grid}>
              {partners.map((partner: LocalPartner) => (
                <div key={partner.id} className={`${styles.card} ${styles[`card_${partner.category}`] || ''}`}>
                  <div className={styles.cardHeader}>
                    <span className={`${styles.categoryBadge} ${styles[`cat_${partner.category}`] || ''}`}>
                      {partner.categoryLabel}
                    </span>
                    {partner.verified ? (
                      <span className={styles.verifiedBadge}>
                        <BadgeCheck size={14} aria-hidden="true" />
                        <span>Estabelecimento verificado</span>
                      </span>
                    ) : (
                      <Store size={18} className={styles.partnerIcon} aria-hidden="true" />
                    )}
                  </div>

                  <h4 className={styles.partnerName}>{partner.name}</h4>
                  <p className={styles.partnerDesc}>{partner.description}</p>

                  <p className={styles.partnerBenefit}>{partner.studentBenefit}</p>

                  <p className={styles.partnerAddress}>
                    <MapPin size={14} aria-hidden="true" />
                    <span>{partner.referenceAddress}</span>
                  </p>

                  <div className={styles.cardFooter}>
                    <a
                      href={partner.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.contactButton}
                      title={`Consultar condicoes e precos de ${partner.name} na fonte oficial`}
                      aria-label={`Consultar condicoes e precos de ${partner.name} na fonte oficial em nova janela`}
                    >
                      <span>Consultar na fonte oficial</span>
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                    <span className={styles.contactHint}>
                      <ArrowUpRight size={12} aria-hidden="true" />
                      <span>{contactLabel(partner)}</span>
                    </span>
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
