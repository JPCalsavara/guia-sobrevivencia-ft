'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { linksData, ResourceLink } from '@/data/links';
import { Link2, Search, ExternalLink } from 'lucide-react';
import { DocSidebar, TopicItem } from '@/components/DocSidebar/DocSidebar';
import styles from './links.module.scss';

const linksTopics: TopicItem[] = [
  {
    id: 'categoria-ft',
    title: 'Faculdade de Tecnologia',
    subtopics: [
      { id: 'categoria-ft', title: 'Portais e Serviços FT' },
    ],
  },
  {
    id: 'categoria-unicamp',
    title: 'Sistemas Centrais DAC',
    subtopics: [
      { id: 'categoria-unicamp', title: 'DAC, SIGA e e-DAC' },
    ],
  },
  {
    id: 'categoria-prefeitura',
    title: 'Prefeitura e Transporte',
    subtopics: [
      { id: 'categoria-prefeitura', title: 'Circular e Intercampi' },
    ],
  },
  {
    id: 'categoria-organizacoes',
    title: 'Organizações Estudantis',
    subtopics: [
      { id: 'categoria-organizacoes', title: 'Entidades e Ligas Acadêmicas' },
    ],
  },
  {
    id: 'categoria-ferramentas',
    title: 'Ferramentas de Estudo',
    subtopics: [
      { id: 'categoria-ferramentas', title: 'Softwares e Plataformas' },
    ],
  },
];

const categoryMeta: Record<string, { label: string; subtitle: string }> = {
  ft: {
    label: 'Faculdade de Tecnologia FT',
    subtitle: 'Portais institucionais, intranet, bibliotecas e suporte de TI local',
  },
  unicamp: {
    label: 'Sistemas Centrais Unicamp',
    subtitle: 'DAC, SIGA, e-DAC, Moodle, carteirinha digital e serviços centrais',
  },
  prefeitura: {
    label: 'Prefeitura e Limeira',
    subtitle: 'Transporte circular gratuito, fretado intercampi e Restaurante Universitário',
  },
  organizacoes: {
    label: 'Organizações Estudantis',
    subtitle: 'Centros acadêmicos, atléticas, empresas juniores e ligas de estudo',
  },
  ferramentas: {
    label: 'Ferramentas de Estudo',
    subtitle: 'Plataformas de notas, simuladores de grade horária e repositórios acadêmicos',
  },
};

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

  const activeCategories = selectedCategory === 'all'
    ? ['ft', 'unicamp', 'prefeitura', 'organizacoes', 'ferramentas']
    : [selectedCategory];

  const filterItem = (item: ResourceLink) => {
    const term = searchTerm.toLowerCase();
    return (
      item.title.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term) ||
      Boolean(item.badge && item.badge.toLowerCase().includes(term))
    );
  };

  const totalMatches = linksData.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesCategory && filterItem(item);
  }).length;

  return (
    <div className={styles.container}>
      {/* Header */}
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

      {/* Conteúdo com Barra Lateral Esquerda */}
      <div className={styles.contentWithSidebar}>
        <aside className={styles.sidebarAside}>
          <DocSidebar topics={linksTopics} title="Diretório de Links" />
        </aside>

        <div className={styles.mainContentArea}>
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
              {totalMatches} recursos disponíveis
            </div>
          </section>

          {/* Seções por Categoria */}
          {activeCategories.map((catKey) => {
            const items = linksData
              .filter((item) => item.category === catKey)
              .filter(filterItem);

            if (items.length === 0) return null;

            const meta = categoryMeta[catKey] || { label: catKey, subtitle: '' };

            return (
              <section key={catKey} id={`categoria-${catKey}`} className={styles.categorySection}>
                <div className={styles.categoryHeader}>
                  <h2 className={styles.categoryTitle}>{meta.label}</h2>
                  {meta.subtitle && <p className={styles.categorySubtitle}>{meta.subtitle}</p>}
                </div>

                <div className={styles.linksGrid} aria-label={`Catálogo de links da categoria ${meta.label}`}>
                  {items.map((link) => (
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
                </div>
              </section>
            );
          })}

          {totalMatches === 0 && (
            <div className={styles.emptyState}>
              <p>Nenhum recurso encontrado para o termo pesquisado.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

