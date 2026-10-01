'use client';

import React from 'react';
import { Share2, Copy, Check } from 'lucide-react';
import { useClipboardCopy } from '@/hooks/useClipboardCopy';
import styles from './ShareWhatsAppButton.module.scss';

export interface ShareWhatsAppButtonProps {
  title: string;
  sectionId?: string;
  path?: string;
  customMessage?: string;
}

export function ShareWhatsAppButton({
  title,
  sectionId,
  path = '',
  customMessage,
}: ShareWhatsAppButtonProps) {
  const { copied, copy } = useClipboardCopy();

  const getFullUrl = () => {
    if (typeof window === 'undefined') {
      return '';
    }
    const origin = window.location.origin;
    const targetPath = path || window.location.pathname;
    const hash = sectionId ? `#${sectionId}` : '';
    return `${origin}${targetPath}${hash}`;
  };

  const handleShareWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = getFullUrl();
    const message = customMessage || `${title}. Confira no Guia da FT Unicamp: ${url}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = getFullUrl();
    copy(url);
  };

  return (
    <div className={styles.shareContainer}>
      <button
        type="button"
        onClick={handleShareWhatsApp}
        className={styles.whatsAppButton}
        title="Compartilhar este tópico no WhatsApp"
        aria-label={`Compartilhar tópico ${title} no WhatsApp`}
      >
        <svg
          viewBox="0 0 24 24"
          width="15"
          height="15"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.whatsAppIcon}
          aria-hidden="true"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
        <span>Compartilhar</span>
      </button>

      <button
        type="button"
        onClick={handleCopyLink}
        className={`${styles.copyLinkButton} ${copied ? styles.copied : ''}`}
        title="Copiar link direto para esta seção"
        aria-label={`Copiar link direto para o tópico ${title}`}
      >
        {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
        <span>{copied ? 'Link Copiado' : 'Copiar Link'}</span>
      </button>
    </div>
  );
}
