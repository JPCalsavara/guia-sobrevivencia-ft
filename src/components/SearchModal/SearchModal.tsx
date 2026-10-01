'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Search,
  X,
  Sparkles,
  Key,
  Loader2,
  Trash2,
  ArrowRight,
  ShieldCheck,
  Check,
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import {
  performLocalSearch,
  askGeminiSearch,
  getStoredApiKey,
  setStoredApiKey,
  clearStoredApiKey,
  AiSearchResult
} from '@/services/geminiSearch';
import { SearchDocument } from '@/data/searchIndex';
import styles from './SearchModal.module.scss';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QUICK_SUGGESTIONS = [
  'Restaurante Universitário',
  'BSI versus TADS',
  'Fretado Intercampi',
  'Horas Complementares',
  'Currículo em LaTeX',
  'Canais de Programação',
  'Plantões de Cálculo e PAD',
  'Iniciação Científica'
];

function formatCleanSummary(doc: SearchDocument): string {
  if (!doc.summary || doc.summary.includes('id=') || doc.summary.includes('style=') || doc.summary.includes('className=')) {
    return `${doc.title} na Faculdade de Tecnologia da Unicamp.`;
  }
  return doc.summary;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [tempKeyInput, setTempKeyInput] = useState('');
  const [showKeyConfig, setShowKeyConfig] = useState(false);
  const [keySavedFeedback, setKeySavedFeedback] = useState(false);
  const [isSearchingAi, setIsSearchingAi] = useState(false);
  const [aiResult, setAiResult] = useState<AiSearchResult | null>(null);
  const [aiError, setAiError] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const localResults = performLocalSearch(query);

  useEffect(() => {
    if (isOpen) {
      const stored = getStoredApiKey();
      setApiKey(stored);
      setTempKeyInput(stored);
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setAiResult(null);
      setAiError(null);
      setShowKeyConfig(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSaveKey = () => {
    const clean = tempKeyInput.trim();
    if (!clean) return;
    setStoredApiKey(clean);
    setApiKey(clean);
    setKeySavedFeedback(true);
    setTimeout(() => {
      setKeySavedFeedback(false);
      setShowKeyConfig(false);
    }, 1200);
  };

  const handleClearKey = () => {
    clearStoredApiKey();
    setApiKey('');
    setTempKeyInput('');
    setKeySavedFeedback(false);
  };

  const handleTriggerAiSearch = async () => {
    if (!query.trim()) return;
    if (!apiKey.trim()) {
      setShowKeyConfig(true);
      return;
    }

    setIsSearchingAi(true);
    setAiError(null);
    setAiResult(null);

    try {
      const result = await askGeminiSearch(query, apiKey);
      setAiResult(result);
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Falha na comunicacao com o Gemini.';
      setAiError(errorMsg);
    } finally {
      setIsSearchingAi(false);
    }
  };

  const handleKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (query.trim()) {
        handleTriggerAiSearch();
      }
    }
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setQuery(suggestion);
    setAiResult(null);
    setAiError(null);
    inputRef.current?.focus();
  };

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Titulo acessivel para leitores de tela */}
        <h2 id="search-modal-title" className={styles.visuallyHidden}>
          Buscar no Guia FT ou Consultar com IA
        </h2>

        {/* Cabecalho de busca com campo de largura total */}
        <div className={styles.searchHeader}>
          <Search size={22} className={styles.searchIcon} aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            className={styles.searchInput}
            placeholder="O que você procura no guia? Digite um termo ou pergunta..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setAiError(null);
            }}
            onKeyDown={handleKeyDownInput}
            aria-label="Campo de pesquisa no guia"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setAiResult(null);
                setAiError(null);
                inputRef.current?.focus();
              }}
              className={styles.clearButton}
              aria-label="Limpar termo digitado"
              title="Limpar busca"
            >
              <X size={18} />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className={styles.closeButton}
            aria-label="Fechar janela de busca"
            title="Fechar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Barra superior de acoes */}
        <div className={styles.toolbar}>
          <div className={styles.toolbarHint}>
            <span>Busca instantânea em tópicos e serviços da FT</span>
          </div>

          <button
            type="button"
            onClick={handleTriggerAiSearch}
            disabled={isSearchingAi || !query.trim()}
            className={styles.aiButton}
            title="Perguntar ao modelo Gemini usando o catalogo oficial do guia"
          >
            {isSearchingAi ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                <span>Consultando IA...</span>
              </>
            ) : (
              <>
                <Sparkles size={14} />
                <span>Consultar com IA</span>
                <span className={styles.aiKbd}>Enter</span>
              </>
            )}
          </button>
        </div>

        {/* Corpo principal */}
        <div className={styles.modalBody}>
          {/* Caixa de configuracao de chave caso a IA seja acionada sem chave ou pelo rodape */}
          {showKeyConfig && (
            <div className={styles.keyConfigBox}>
              <div className={styles.keyConfigHeader}>
                <div className={styles.keyConfigTitle}>
                  <ShieldCheck size={16} color="var(--ft-green)" />
                  <span>Configuração da Chave Google Gemini</span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowKeyConfig(false)}
                  className={styles.clearButton}
                  aria-label="Fechar painel de chave"
                >
                  <X size={16} />
                </button>
              </div>

              <p className={styles.keyConfigDesc}>
                Sua chave fica salva apenas no seu navegador local, sem envio para servidores intermediários. Obtenha sua credencial gratuita em{' '}
                <a
                  href="https://aistudio.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  aistudio.google.com
                </a>
                .
              </p>

              <div className={styles.keyInputRow}>
                <input
                  type="password"
                  className={styles.keyInputField}
                  placeholder="Cole sua chave aqui..."
                  value={tempKeyInput}
                  onChange={(e) => setTempKeyInput(e.target.value)}
                  aria-label="Chave de API do Google Gemini"
                />
                <button
                  type="button"
                  onClick={handleSaveKey}
                  className={styles.saveKeyBtn}
                >
                  {keySavedFeedback ? <Check size={14} /> : 'Salvar'}
                </button>
                {apiKey && (
                  <button
                    type="button"
                    onClick={handleClearKey}
                    className={styles.clearKeyBtn}
                    title="Remover chave salva"
                  >
                    <Trash2 size={14} />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Erro da IA */}
          {aiError && (
            <div className={styles.aiResponseBlock} style={{ borderLeftColor: 'var(--danger)', borderColor: 'rgba(220, 38, 38, 0.3)' }}>
              <div className={styles.aiResponseHeader} style={{ color: 'var(--danger)' }}>
                <span>Aviso da Consulta de IA</span>
              </div>
              <p className={styles.aiResponseText}>{aiError}</p>
            </div>
          )}

          {/* Resposta do Gemini */}
          {aiResult && (
            <div className={styles.aiResponseBlock}>
              <div className={styles.aiResponseHeader}>
                <Sparkles size={16} />
                <span>Resposta do Assistente Inteligente</span>
              </div>
              <div className={styles.aiResponseText}>{aiResult.answer}</div>

              {aiResult.recommendedDocs.length > 0 && (
                <div className={styles.aiLinksSection}>
                  <span className={styles.aiLinksTitle}>Seções recomendadas para você acessar:</span>
                  <div className={styles.aiLinksGrid}>
                    {aiResult.recommendedDocs.map((doc) => (
                      <Link
                        key={doc.id}
                        href={doc.url}
                        onClick={onClose}
                        className={styles.aiLinkChip}
                      >
                        <span>{doc.title}</span>
                        <ArrowRight size={12} />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Resultados da busca local enquanto o estudante digita */}
          {query.trim() && (
            <div>
              <div className={styles.resultsHeader}>
                <span className={styles.sectionTitle}>Conteúdos Encontrados no Guia</span>
                <span className={styles.resultsCount}>
                  {localResults.length} {localResults.length === 1 ? 'seção' : 'seções'}
                </span>
              </div>

              {localResults.length > 0 ? (
                <ul className={styles.resultsList}>
                  {localResults.map((doc: SearchDocument) => (
                    <li key={doc.id}>
                      <Link
                        href={doc.url}
                        onClick={onClose}
                        className={styles.resultItem}
                      >
                        <div className={styles.resultContent}>
                          <div className={styles.resultBadgesRow}>
                            <span className={styles.pageBadge}>{doc.page}</span>
                            {doc.subtopic && doc.subtopic !== doc.title && (
                              <span className={styles.subtopicBadge}>{doc.subtopic}</span>
                            )}
                          </div>
                          <h3 className={styles.resultTitle}>{doc.title}</h3>
                          <p className={styles.resultSummary}>{formatCleanSummary(doc)}</p>
                        </div>
                        <ChevronRight size={18} className={styles.resultArrow} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                !isSearchingAi && (
                  <div className={styles.emptyState}>
                    <p>Nenhum resultado direto encontrado para este termo.</p>
                    <p style={{ marginTop: '0.35rem', color: 'var(--text-muted)' }}>
                      Tente termos gerais como bandejão, circular, horas, bsi, tads, estágio ou clique no botão Consultar com IA acima.
                    </p>
                  </div>
                )
              )}
            </div>
          )}

          {/* Estado inicial quando o campo esta vazio */}
          {!query.trim() && !aiResult && (
            <div className={styles.initialStateWrapper}>
              <span className={styles.suggestionsTitle}>Tópicos frequentes para explorar:</span>

              <div className={styles.suggestionsGrid}>
                {QUICK_SUGGESTIONS.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => handleSelectSuggestion(item)}
                    className={styles.suggestionChip}
                  >
                    <span>{item}</span>
                  </button>
                ))}
              </div>

              <div className={styles.helpTip}>
                <p>
                  <strong>Como funciona:</strong> Digite termos acadêmicos, dúvidas sobre bolsas, alimentação ou procedimentos. A busca local traz resultados imediatos e você também pode usar o botão Consultar com IA para respostas completas em linguagem natural.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Rodape limpo com atalhos e opcao discreta para chave */}
        <div className={styles.footerHint}>
          <button
            type="button"
            onClick={() => setShowKeyConfig(!showKeyConfig)}
            className={styles.keyConfigFooterBtn}
            title="Gerenciar chave do Google Gemini"
          >
            <Key size={13} />
            <span>{apiKey ? 'Chave IA configurada' : 'Configurar Chave IA'}</span>
          </button>

          <div className={styles.footerShortcuts}>
            <span>Navegue com o teclado</span>
            <span className={styles.kbd}>Esc</span>
          </div>
        </div>
      </div>
    </div>
  );
}
