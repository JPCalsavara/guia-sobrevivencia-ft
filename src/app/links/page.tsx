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
            Acesse rapidamente todos os sistemas acadêmicos da DAC, serviços da FT, horários de transporte e plataformas essenciais em um catálogo unificado.
          </p>
        </motion.div>
      </section>

      {/* Barra de Busca e Filtros */}
      <section className={styles.filterSection}>
        <div className={styles.searchBar}>
          <Search size={18} className={styles.searchIcon} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por nome de sistema, serviço ou assunto..."
            className={styles.searchInput}
          />
        </div>

        <div className={styles.categoryFilters}>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`${styles.filterBtn} ${selectedCategory === cat.key ? styles.filterActive : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid de Links */}
      <section className={styles.linksGrid}>
        {filtered.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkCard}
          >
            <div className={styles.cardHeader}>
              {link.badge && <span className={styles.badge}>{link.badge}</span>}
              <ExternalLink size={16} className={styles.extIcon} />
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
