'use client';

import React from 'react';
import { Copy, Check, Sparkles, ExternalLink, Calendar } from 'lucide-react';
import { geminiSyllabusPrompt } from '@/data/prompts';
import { useClipboardCopy } from '@/hooks/useClipboardCopy';
import styles from './PromptBox.module.scss';

export function PromptBox() {
  const { copied, copy } = useClipboardCopy();

  const handleCopy = () => {
    copy(geminiSyllabusPrompt);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.titleInfo}>
          <div className={styles.iconBox}>
            <Sparkles size={18} />
          </div>
          <div>
            <h4 className={styles.title}>Prompt para Geracao de Calendario iCalendar e Tabela</h4>
            <p className={styles.subtitle}>
              Suba o PDF do plano de aula no Google Gemini ou AI Studio para extrair o arquivo de compromissos
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
        <h5 className={styles.stepsTitle}>Como Importar no Google Agenda em Tres Passos</h5>
        <ol className={styles.stepsList}>
          <li>Acesse o Google Gemini ou o AI Studio, anexe o PDF do plano de ensino do Moodle e execute o prompt acima.</li>
          <li>Copie o bloco de codigo que comeca com BEGIN:VCALENDAR e salve em um arquivo de texto com o nome aula.ics no seu computador.</li>
          <li>No Google Agenda, va em Configuracoes, selecione Importar e Exportar e envie o arquivo aula.ics para adicionar todas as provas de uma vez.</li>
        </ol>
      </div>
    </div>
  );
}
