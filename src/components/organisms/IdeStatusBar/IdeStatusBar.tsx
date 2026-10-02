'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { GitBranch, CheckCircle2, Tag, MapPin, Code2 } from 'lucide-react';
import { IdeStatusItem } from '@/components/molecules/IdeStatusItem/IdeStatusItem';
import { StatusDot } from '@/components/atoms/StatusDot/StatusDot';
import packageInfo from '../../../../package.json';
import styles from './IdeStatusBar.module.scss';

export function IdeStatusBar() {
  const pathname = usePathname();

  const getLanguageLabel = (path: string) => {
    switch (path) {
      case '/':
        return 'Markdown';
      case '/academico':
        return 'LaTeX Document';
      case '/calouros':
        return 'TypeScript React';
      case '/carreira':
        return 'Rust Engine';
      case '/campus':
        return 'Python Script';
      case '/duvidas':
        return 'PostgreSQL SQL';
      case '/estatisticas':
        return 'JSON Schema';
      case '/estudos-ia':
        return 'Python Jupyter';
      case '/links':
        return 'YAML Manifest';
      default:
        return 'TypeScript React';
    }
  };

  return (
    <footer className={styles.statusBar} aria-label="Barra de status estilo editor de código">
      <div className={styles.leftGroup}>
        <IdeStatusItem
          icon={<GitBranch size={13} style={{ color: 'var(--dracula-purple, #bd93f9)' }} />}
          label="main"
          tooltip="Ramo de produção do Guia FT"
        />
        <IdeStatusItem
          icon={<CheckCircle2 size={13} style={{ color: 'var(--dracula-green, #50fa7b)' }} />}
          label="0 erros, 0 avisos"
          tooltip="Integridade de código e ADR 0001 validada"
          highlight
        />
        <IdeStatusItem
          icon={<Tag size={13} style={{ color: 'var(--dracula-cyan, #8be9fd)' }} />}
          label={`v${packageInfo.version}`}
          tooltip="Versão semântica ativa do portal"
        />
      </div>

      <div className={styles.rightGroup}>
        <IdeStatusItem
          icon={<MapPin size={13} style={{ color: 'var(--dracula-pink, #ff79c6)' }} />}
          label="FT Limeira"
          tooltip="Faculdade de Tecnologia da Unicamp, Campus 1"
        />
        <IdeStatusItem
          label="UTF-8"
          tooltip="Codificação de caracteres padronizada"
        />
        <IdeStatusItem
          icon={<Code2 size={13} style={{ color: 'var(--dracula-yellow, #f1fa8c)' }} />}
          label={getLanguageLabel(pathname)}
          tooltip="Sintaxe do arquivo correspondente"
        />
        <div className={styles.dotWrap}>
          <StatusDot status="online" label="Online" />
        </div>
      </div>
    </footer>
  );
}
