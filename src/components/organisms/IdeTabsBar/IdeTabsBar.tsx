'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { IdeTabItem } from '@/components/molecules/IdeTabItem/IdeTabItem';
import styles from './IdeTabsBar.module.scss';

export interface IdeTabConfig {
  href: string;
  filename: string;
}

export const IDE_TABS_CONFIG: IdeTabConfig[] = [
  { href: '/', filename: 'apresentacao.md' },
  { href: '/calouros', filename: 'calouros.ts' },
  { href: '/academico', filename: 'academico.tex' },
  { href: '/carreira', filename: 'carreira.rs' },
  { href: '/campus', filename: 'campus.py' },
  { href: '/duvidas', filename: 'duvidas.sql' },
  { href: '/estatisticas', filename: 'métricas.json' },
  { href: '/estudos-ia', filename: 'estudos_ia.py' },
  { href: '/links', filename: 'links_uteis.yaml' },
];

export function IdeTabsBar() {
  const pathname = usePathname();

  return (
    <nav className={styles.tabsBar} aria-label="Abas de arquivos abertos na IDE">
      <div className={styles.scrollArea}>
        {IDE_TABS_CONFIG.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <IdeTabItem
              key={tab.href}
              href={tab.href}
              filename={tab.filename}
              isActive={isActive}
            />
          );
        })}
      </div>
    </nav>
  );
}
