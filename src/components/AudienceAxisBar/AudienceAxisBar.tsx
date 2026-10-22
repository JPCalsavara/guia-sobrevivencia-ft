'use client';

import React from 'react';
import Link from 'next/link';
import { GraduationCap, Compass, FlaskConical, Award, ArrowRight } from 'lucide-react';
import { audienceProfiles, type AudienceProfileId } from '@/data/audienceProfiles';
import styles from './AudienceAxisBar.module.scss';

const profileIcons: Record<AudienceProfileId, React.ReactNode> = {
  'futuro-ingressante': <Compass size={22} aria-hidden="true" />,
  calouro: <GraduationCap size={22} aria-hidden="true" />,
  'aluno-regular': <FlaskConical size={22} aria-hidden="true" />,
  formando: <Award size={22} aria-hidden="true" />,
};

export function AudienceAxisBar() {
  return (
    <section className={styles.wrapper} aria-labelledby="audience-axis-title">
      <div className={styles.intro}>
        <span className={styles.badge}>Perfil e Eixos Tematicos</span>
        <h2 id="audience-axis-title" className={styles.title}>
          Escolha seu Perfil e Siga pelos Eixos Estaveis do Portal
        </h2>
        <p className={styles.subtitle}>
          Cada cartao combina o seu momento na graduacao com os eixos tematicos fixos do topo do portal, levando direto ao primeiro passo recomendado.
        </p>
      </div>

      <ul className={styles.grid} role="group" aria-label="Perfis de publico do portal">
        {audienceProfiles.map((profile) => {
          const firstAnchor = profile.anchors[0];
          return (
            <li key={profile.id} className={styles.item}>
              <Link href={firstAnchor.href} className={styles.card}>
                <span className={styles.icon}>{profileIcons[profile.id]}</span>
                <span className={styles.label}>{profile.label}</span>
                <span className={styles.summary}>{profile.summary}</span>
                <span className={styles.axis}>{profile.themeAxis}</span>
                <span className={styles.action}>
                  <span>{firstAnchor.title}</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
