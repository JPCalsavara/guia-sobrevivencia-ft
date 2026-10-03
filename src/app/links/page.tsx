'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { linksData, ResourceLink, LinkCategory } from '@/data/links';
import { Link2, Search, ExternalLink, MessageSquare, HelpCircle } from 'lucide-react';
import { DocSidebar, TopicItem } from '@/components/DocSidebar/DocSidebar';
import styles from './links.module.scss';

const linksTopics: TopicItem[] = [
  {
    id: 'categoria-alimentacao',
    title: 'Alimentação e RU',
    subtopics: [
      { id: 'categoria-alimentacao', title: 'Restaurante Universitário e Saldo' },
    ],
  },
  {
    id: 'categoria-transporte',
    title: 'Transporte e Mobilidade',
    subtopics: [
      { id: 'categoria-transporte', title: 'Circular e Intercampi Linha 84' },
    ],
  },
  {
    id: 'categoria-matricula',
    title: 'Matrícula e Vida Acadêmica',
    subtopics: [
      { id: 'categoria-matricula', title: 'DAC, SIGA e Atendimento' },
    ],
  },
  {
    id: 'categoria-aulas',
    title: 'Aulas e Ambientes Virtuais',
    subtopics: [
      { id: 'categoria-aulas', title: 'Moodle, Classroom e Salas da FT' },
    ],
  },
  {
    id: 'categoria-intercambio',
    title: 'Intercâmbio e DERI',
    subtopics: [
      { id: 'categoria-intercambio', title: 'Editais e Guias de Preparação' },
    ],
  },
  {
    id: 'categoria-iniciacao-cientifica',
    title: 'Iniciação Científica',
    subtopics: [
      { id: 'categoria-iniciacao-cientifica', title: 'PIBIC e FAPESP SAGe' },
    ],
  },
  {
    id: 'categoria-permanencia',
    title: 'Permanência e DEAPE',
    subtopics: [
      { id: 'categoria-permanencia', title: 'BAS, Mentoria PMU e Moradia' },
    ],
  },
  {
    id: 'categoria-organizacoes',
    title: 'Organizações Estudantis',
    subtopics: [
      { id: 'categoria-organizacoes', title: 'Centros, Atlética e Ligas' },
    ],
  },
  {
    id: 'categoria-carreira-tecnologia',
    title: 'Carreira e Tecnologia',
    subtopics: [
      { id: 'categoria-carreira-tecnologia', title: 'AWS, GitHub e Ferramentas' },
    ],
  },
];

const categoryMeta: Record<LinkCategory, { label: string; subtitle: string }> = {
  alimentacao: {
    label: 'Alimentação e Restaurante Universitário',
    subtitle: 'Cardápio diário, compra de créditos via Pix pela Funcamp e aplicativo de carteirinha digital',
  },
  transporte: {
    label: 'Transporte e Mobilidade',
    subtitle: 'Circular gratuito FT e FCA, fretado intercampi Linha 84, reservas e passe escolar SOU Limeira',
  },
  matricula: {
    label: 'Matrícula e Vida Acadêmica',
    subtitle: 'Portal da Diretoria Acadêmica, matrícula virtual no SIGA, caderno de matérias e suporte ao estudante',
  },
  aulas: {
    label: 'Aulas e Ambientes Virtuais',
    subtitle: 'Moodle, Google Sala de Aula, alocação de salas em tempo real na FT, laboratórios e Wi-Fi Eduroam',
  },
  intercambio: {
    label: 'Intercâmbio e Mobilidade Internacional',
    subtitle: 'Diretoria de Relações Internacionais DERI, guias oficiais de planejamento e editais no exterior',
  },
  'iniciacao-cientifica': {
    label: 'Iniciação Científica e Pesquisa',
    subtitle: 'Editais anuais PIBIC com bolsas do CNPq, Pró-Reitoria de Pesquisa e fluxo contínuo na FAPESP',
  },
  permanencia: {
    label: 'Permanência e Apoio Estudantil',
    subtitle: 'Bolsa Auxílio-Social BAS, editais de seleção socioeconômica, mentoria PMU da DEAPE e moradia',
  },
  organizacoes: {
    label: 'Organizações Estudantis',
    subtitle: 'Centros acadêmicos, atlética universitária, empresas juniores e ligas de tecnologia em Limeira',
  },
  'carreira-tecnologia': {
    label: 'Carreira, Tecnologia e Ferramentas',
    subtitle: 'AWS Builder Center para alunos, GitHub Student Developer Pack, Overleaf, roadmaps e canais de estudo',
  },
};

const categoryOrder: LinkCategory[] = [
  'alimentacao',
  'transporte',
  'matricula',
  'aulas',
  'intercambio',
  'iniciacao-cientifica',
  'permanencia',
  'organizacoes',
  'carreira-tecnologia',
];

export default function LinksPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'Todos os Recursos' },
    { key: 'alimentacao', label: 'Alimentação e RU' },
    { key: 'transporte', label: 'Transporte' },
    { key: 'matricula', label: 'Matrícula e DAC' },
    { key: 'aulas', label: 'Aulas e Ambientes' },
    { key: 'intercambio', label: 'Intercâmbio DERI' },
    { key: 'iniciacao-cientifica', label: 'Iniciação Científica' },
    { key: 'permanencia', label: 'Permanência DEAPE' },
    { key: 'organizacoes', label: 'Organizações' },
    { key: 'carreira-tecnologia', label: 'Carreira e Tech' },
  ];

  const activeCategories: LinkCategory[] = selectedCategory === 'all'
    ? categoryOrder
    : [selectedCategory as LinkCategory];

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
            Catálogo unificado por temas cobrindo alimentação, transporte, matrícula, aulas, intercâmbio, pesquisa e ferramentas de estudo.
          </p>
        </motion.div>

        {/* Banner de Contato e Reporte de Links Quebrados */}
        <div className={styles.reportBanner}>
          <MessageSquare size={18} className={styles.reportIcon} aria-hidden="true" />
          <p className={styles.reportText}>
            Encontrou algum link fora do ar ou bug no portal? Envie uma mensagem pelo Google Chat institucional para <strong>j197837@dac.unicamp.br</strong> para que possamos corrigir rapidamente.
          </p>
        </div>

        {/* Banner de Duvidas e Atendimento */}
        <div id="duvidas" className={styles.duvidasBanner}>
          <div className={styles.duvidasInfo}>
            <HelpCircle size={20} className={styles.duvidasIcon} aria-hidden="true" />
            <div className={styles.duvidasTexts}>
              <strong className={styles.duvidasTitle}>Precisa de orientacoes especificas ou tem duvidas?</strong>
              <p className={styles.duvidasDesc}>
                Consulte nossa Central de Duvidas com respostas sobre matricula, coeficientes e prazos.
              </p>
            </div>
          </div>
          <Link href="/duvidas" className={styles.duvidasBtn}>
            <span>Acessar Duvidas</span>
            <ExternalLink size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Conteúdo com Barra Lateral Esquerda */}
      <div className={styles.contentWithSidebar}>
        <aside className={styles.sidebarAside}>
          <DocSidebar topics={linksTopics} title="Temas de Links" />
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
                      className={`${styles.linkCard} ${styles[`card_${link.category.replace('-', '_')}`] || ''}`}
                      aria-label={`${link.title} em nova janela`}
                    >
                      <div className={styles.cardHeader}>
                        {link.badge && (
                          <span className={`${styles.badge} ${styles[`badge_${link.category.replace('-', '_')}`] || ''}`}>
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
