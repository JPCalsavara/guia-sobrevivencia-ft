'use client';

import React from 'react';
import { Copy, Check, ExternalLink, FileText, Github } from 'lucide-react';
import { latexResumeTemplate } from '@/data/prompts';
import { useClipboardCopy } from '@/hooks/useClipboardCopy';
import styles from './LatexCodeBlock.module.scss';

export function LatexCodeBlock() {
  const { copied, copy } = useClipboardCopy();

  const handleCopy = () => {
    copy(latexResumeTemplate);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.titleInfo}>
          <FileText size={18} />
          <span className={styles.fileName}>curriculo.tex</span>
          <span className={styles.badge}>Formato devcelio resume template</span>
        </div>
        <div className={styles.actions}>
          <a
            href="https://github.com/devcelio/resume-template"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubButton}
          >
            <Github size={14} />
            <span>Ver no GitHub</span>
            <ExternalLink size={12} />
          </a>
          <button
            onClick={handleCopy}
            className={`${styles.copyButton} ${copied ? styles.copied : ''}`}
            aria-label="Copiar código LaTeX completo"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span>{copied ? 'Copiado para a Área de Transferência' : 'Copiar Código LaTeX'}</span>
          </button>
          <a
            href="https://www.overleaf.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.overleafButton}
          >
            <span>Abrir Overleaf</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
      <div className={styles.codeContainer}>
        <pre className={styles.pre}>
          <code>{latexResumeTemplate}</code>
        </pre>
      </div>
    </div>
  );
}
