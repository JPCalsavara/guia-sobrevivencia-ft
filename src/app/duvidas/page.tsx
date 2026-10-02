'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  HelpCircle,
  Search,
  X,
  ChevronDown,
  ExternalLink,
  BookOpen,
  Send,
  MessageCircleQuestion,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { faqData, faqCategories, FaqItem } from '@/data/faq';
import { DuvidasForm } from './DuvidasForm';
import { TopicItem } from '@/components/DocSidebar/DocSidebar';
import styles from './duvidas.module.scss';

const duvidasTopics: TopicItem[] = [
  {
    id: 'duvidas-academicas-dac',
    title: 'Dúvidas Acadêmicas e Matrícula',
    subtopics: [
      { id: 'duvidas-matricula-dac', title: 'Regras da DAC, Trancamento e Coeficientes' },
      { id: 'duvidas-reprovacao-prerequisitos', title: 'Pré-requisitos e Reprovações' }
    ]
  },
  {
    id: 'duvidas-campus-vivencia',
    title: 'Dúvidas de Campus e Cotidiano',
    subtopics: [
      { id: 'duvidas-bandejao-transporte', title: 'Bandejão com Pix e Linha 84 Intercampi' },
      { id: 'duvidas-moradia-auxilios', title: 'Moradia Estudantil e Bolsas SAE' }
    ]
  },
  {
    id: 'duvidas-carreira-formacao',
    title: 'Dúvidas de Carreira e Formatura',
    subtopics: [
      { id: 'duvidas-estagio-contratos', title: 'Estágios e Termo de Compromisso' },
      { id: 'duvidas-formatura-colacao', title: 'Colação de Grau Oficial e Diploma' }
    ]
  },
  {
    id: 'mandar-duvida',
    title: 'Envio de Dúvidas',
    subtopics: [
      { id: 'mandar-duvida', title: 'Mande sua Dúvida para a Equipe' }
    ]
  }
];

export default function DuvidasPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('todas');

  const filteredItems = useMemo(() => {
    return faqData.filter((item) => {
      const matchesCategory =
        activeCategory === 'todas' || item.category === activeCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const matchQuestion = item.question.toLowerCase().includes(q);
      const matchAnswer = item.answer.some((p) => p.toLowerCase().includes(q));
      const matchKeywords = item.keywords.some((k) => k.toLowerCase().includes(q));

      return matchQuestion || matchAnswer || matchKeywords;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className={styles.container}>
      <header className={styles.pageHeader}>
        <div className={styles.headerBadge}>
          <MessageCircleQuestion size={14} aria-hidden="true" />
          <span>Central de Orientação Discente</span>
        </div>
        <h1 className={styles.pageTitle}>Portal de Dúvidas Comuns da FT</h1>
        <p className={styles.pageDescription}>
          Respostas diretas e consolidadas para as perguntas mais recorrentes da comunidade acadêmica sobre matrículas na DAC, regras de reprovação, bandejão, transporte intercampi, estágios, moradia e formatura na Faculdade de Tecnologia da Unicamp.
        </p>
      </header>

      {/* Barra de Busca e Filtro por Categorias */}
      <section className={styles.searchAndFilterBar} aria-label="Filtros e busca de dúvidas">
        <div className={styles.searchBox}>
          <Search size={18} className={styles.searchIcon} aria-hidden="true" />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Buscar por assunto, palavra-chave ou dúvida..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Buscar nas dúvidas frequentes"
          />
          {searchQuery && (
            <button
              type="button"
              className={styles.searchClearBtn}
              onClick={() => setSearchQuery('')}
              aria-label="Limpar campo de busca"
            >
              <X size={16} aria-hidden="true" />
            </button>
          )}
        </div>

        <div className={styles.categoriesScroll} role="tablist" aria-label="Categorias de dúvidas">
          {faqCategories.map((cat) => {
            const count =
              cat.id === 'todas'
                ? faqData.length
                : faqData.filter((i) => i.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`${styles.categoryPill} ${isActive ? styles.activePill : ''}`}
              >
                <span>{cat.label}</span>
                <span className={styles.pillCount}>{count}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Contador de Resultados */}
      <div className={styles.resultsCount} aria-live="polite">
        <span>Exibindo {filteredItems.length} {filteredItems.length === 1 ? 'dúvida respondida' : 'dúvidas respondidas'}</span>
        {searchQuery && <span>para a busca &quot;{searchQuery}&quot;</span>}
      </div>

      {/* Lista de Dúvidas em Accordion */}
      {filteredItems.length > 0 ? (
        <div className={styles.faqList} id="lista-duvidas">
          {filteredItems.map((item) => (
            <details key={item.id} id={item.id} className={styles.faqCard}>
              <summary className={styles.faqSummary}>
                <div className={styles.faqHeaderGroup}>
                  <span className={styles.faqCategoryBadge}>{item.categoryLabel}</span>
                  <h2 className={styles.faqQuestion}>{item.question}</h2>
                </div>
                <ChevronDown size={20} className={styles.faqToggleIcon} aria-hidden="true" />
              </summary>

              <div className={styles.faqBody}>
                {item.answer.map((paragrafo, index) => (
                  <p key={index} className={styles.faqParagraph}>
                    {paragrafo}
                  </p>
                ))}

                {item.links && item.links.length > 0 && (
                  <div className={styles.faqLinksContainer}>
                    <span className={styles.faqLinksTitle}>Links e Guias Relacionados</span>
                    <ul className={styles.faqLinksList}>
                      {item.links.map((link, lIndex) => (
                        <li key={lIndex}>
                          {link.external ? (
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.faqLinkItem}
                              aria-label={`${link.label} em nova janela`}
                            >
                              <span>{link.label}</span>
                              <ExternalLink size={12} aria-hidden="true" />
                            </a>
                          ) : (
                            <Link href={link.url} className={styles.faqLinkItem}>
                              <span>{link.label}</span>
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <HelpCircle size={36} style={{ color: 'var(--text-muted)', marginBottom: '0.75rem' }} aria-hidden="true" />
          <h3 className={styles.emptyStateTitle}>Nenhuma dúvida encontrada</h3>
          <p className={styles.emptyStateDesc}>
            Não encontramos perguntas correspondentes aos termos digitados. Experimente buscar palavras diferentes ou registre sua pergunta no formulário logo abaixo.
          </p>
        </div>
      )}

      {/* Seção de Envio de Novas Dúvidas */}
      <DuvidasForm />
    </div>
  );
}
