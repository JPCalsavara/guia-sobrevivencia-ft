'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { linksData, ResourceLink } from '@/data/links';
import { Link2, Search, ExternalLink } from 'lucide-react';
import styles from './links.module.scss';

export default function LinksPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'Todos os Recursos' },
    { key: 'ft', label: 'Faculdade de Tecnologia FT' },
    { key: 'unicamp', label: 'Sistemas Centrais Unicamp' },
    { key: 'prefeitura', label: 'Prefeitura e Limeira' },
    { key: 'organizacoes', label: 'Organizações Estudantis' },
    { key: 'ferramentas', label: 'Ferramentas de Estudo' },
  ];

  const filtered = linksData.filter((item: ResourceLink) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term) ||
      (item.badge && item.badge.toLowerCase().includes(term));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.container}>
      <section className={styles.pageHeader}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.headerBadge}>
            <Link2 size={16} />
            <span>Diretório de Links Oficiais</span>
          </div>

          <h1 className={styles.pageTitle}>
            Índice Central de Sistemas, Portais e Serviços da Unicamp
          </h1>

          <p className={styles.pageDescription}>
            Acesse rapidamente todos os sistemas acadêmicos da DAC, serviços da FT, canais de transporte e plataformas essenciais em um catálogo unificado.
          </p>
        </motion.div>
      </section>

      {/* Barra de Busca e Filtros */}
      <section className={styles.filterSection} aria-label="Filtros de busca">
        <div className={styles.searchBar}>
          <Search size={18} className={styles.searchIcon} aria-hidden="true" />
          <input
            id="search-resources-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por nome de sistema, serviço ou assunto..."
            className={styles.searchInput}
            aria-label="Buscar por nome de sistema ou serviço"
          />
        </div>

        <div className={styles.categoryFilters} role="group" aria-label="Filtrar recursos por categoria">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setSelectedCategory(cat.key)}
              className={`${styles.filterBtn} ${selectedCategory === cat.key ? styles.filterActive : ''}`}
              aria-pressed={selectedCategory === cat.key}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div
          role="status"
          aria-live="polite"
          style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}
        >
          {filtered.length} recursos disponíveis
        </div>
      </section>

      {/* Grid de Links */}
      <section className={styles.linksGrid} aria-label="Catálogo de links">
        {filtered.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.linkCard} ${styles[`card_${link.category}`] || ''}`}
            aria-label={`${link.title} em nova janela`}
          >
            <div className={styles.cardHeader}>
              {link.badge && (
                <span className={`${styles.badge} ${styles[`badge_${link.category}`] || ''}`}>
                  {link.badge}
                </span>
              )}
              <ExternalLink size={16} className={styles.extIcon} aria-hidden="true" />
            </div>

            <h3 className={styles.cardTitle}>{link.title}</h3>
            <p className={styles.cardDesc}>{link.description}</p>
            <span className={styles.urlDomain}>{link.url}</span>
          </a>
        ))}

        {filtered.length === 0 && (
          <div className={styles.emptyState}>
            <p>Nenhum recurso encontrado para o termo pesquisado.</p>
          </div>
        )}
      </section>
    </div>
  );
}
