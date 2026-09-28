'use client';

import React, { useState } from 'react';
import { Copy, Check, Sparkles, ExternalLink } from 'lucide-react';
import { geminiSyllabusPrompt } from '@/data/prompts';
import styles from './PromptBox.module.scss';

export function PromptBox() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(geminiSyllabusPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.titleInfo}>
          <div className={styles.iconBox}>
            <Sparkles size={18} />
          </div>
          <div>
            <h4 className={styles.title}>Prompt Estruturado para o Google Gemini ou NotebookLM</h4>
            <p className={styles.subtitle}>
              Suba o PDF do plano de aula no Google AI Studio ou no Gemini e cole o prompt abaixo
            </p>
          </div>
        </div>

        <div className={styles.actions}>
          <button
            onClick={handleCopy}
            className={`${styles.copyButton} ${copied ? styles.copied : ''}`}
            aria-label="Copiar prompt completo"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span>{copied ? 'Prompt Copiado' : 'Copiar Prompt'}</span>
          </button>
          <a
            href="https://aistudio.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.studioLink}
          >
            <span>Google AI Studio</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <div className={styles.promptArea}>
        <pre className={styles.pre}>
          <code>{geminiSyllabusPrompt}</code>
        </pre>
      </div>

      <div className={styles.steps}>
        <h5 className={styles.stepsTitle}>Como Usar em Tres Passos Rapidos</h5>
        <ol className={styles.stepsList}>
          <li>Baixe o PDF do plano de ensino ou cronograma disponibilizado pelo docente no Moodle.</li>
          <li>Acesse o Google Gemini ou o Google AI Studio e anexe o arquivo PDF junto com o prompt copiado.</li>
          <li>Copie a resposta estruturada para importar seus compromissos no Google Agenda ou Apple Calendar.</li>
        </ol>
      </div>
    </div>
  );
}
