'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, ListFilter, X, FileText } from 'lucide-react';
import styles from './DocSidebar.module.scss';

export interface SubTopicItem {
  id: string;
  title: string;
}

export interface TopicItem {
  id: string;
  title: string;
  subtopics?: SubTopicItem[];
}

interface DocSidebarProps {
  topics: TopicItem[];
  title?: string;
}

export function DocSidebar({ topics, title = 'Estrutura da Página' }: DocSidebarProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showFloatingPill, setShowFloatingPill] = useState(false);
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const allIds: string[] = [];
    topics.forEach((t) => {
      allIds.push(t.id);
      if (t.subtopics) {
        t.subtopics.forEach((st) => allIds.push(st.id));
      }
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      setShowFloatingPill(window.scrollY > 200);

      for (let i = allIds.length - 1; i >= 0; i--) {
        const id = allIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(id);
            return;
          }
        }
      }

      if (allIds.length > 0 && window.scrollY < 200) {
        setActiveId(allIds[0]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [topics]);

  const toggleGroup = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCollapsedGroups((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    window.location.hash = id;
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
    }
  };

  // Encontra o título do tópico ativo para a barra mobile
  const activeTopic = topics.find((t) => {
    if (t.id === activeId) return true;
    return t.subtopics?.some((st) => st.id === activeId);
  });

  return (
    <nav className={styles.sidebarWrapper} aria-label="Sumário da página">
      {/* Botão Gatilho Estático no Topo no Mobile */}
      <button
        type="button"
        onClick={() => setIsMobileOpen(true)}
        className={styles.mobileTriggerBar}
        aria-expanded={isMobileOpen}
        aria-controls="doc-sidebar-tree"
      >
        <span className={styles.mobileTriggerLabel}>
          <ListFilter size={16} aria-hidden="true" />
          <span>Tópicos da Página</span>
        </span>
        {activeTopic && (
          <span className={styles.mobileCurrentTopic}>
            {activeTopic.title}
          </span>
        )}
      </button>

      {/* Floating Pill Inferior no Mobile */}
      <div className={`${styles.floatingPillWrapper} ${showFloatingPill ? styles.visible : ''}`}>
        <button
          type="button"
          onClick={() => setIsMobileOpen(true)}
          className={styles.floatingPillBtn}
          aria-expanded={isMobileOpen}
          aria-controls="doc-sidebar-tree"
          aria-label="Abrir sumário rápido de tópicos da página"
        >
          <div className={styles.pillIconBadge}>
            <ListFilter size={15} aria-hidden="true" />
          </div>
          <div className={styles.pillContent}>
            <span className={styles.pillLabel}>Tópico Atual</span>
            <span className={styles.pillTopicTitle}>
              {activeTopic ? activeTopic.title : title}
            </span>
          </div>
          <ChevronRight size={15} className={styles.pillChevron} aria-hidden="true" />
        </button>
      </div>

      {/* Backdrop Mobile */}
      <div
        className={`${styles.mobileBackdrop} ${isMobileOpen ? styles.open : ''}`}
        onClick={() => setIsMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Menu Principal estilo File Outline */}
      <div
        id="doc-sidebar-tree"
        className={`${styles.sidebarContainer} ${isMobileOpen ? styles.open : ''}`}
      >
        {/* Cabeçalho do Outline */}
        <div className={styles.outlineHeader}>
          <div className={styles.outlineTitleGroup}>
            <ChevronDown size={16} className={styles.headerChevron} aria-hidden="true" />
            <FileText size={15} className={styles.headerFileIcon} aria-hidden="true" />
            <span className={styles.outlineTitle}>{title}</span>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileOpen(false)}
            className={styles.closeMobileBtn}
            aria-label="Fechar índice de tópicos"
          >
            <X size={18} />
          </button>
        </div>

        {/* Árvore de Itens */}
        <ul className={styles.treeList}>
          {topics.map((topic) => {
            const hasChildren = Boolean(topic.subtopics && topic.subtopics.length > 0);
            const isCollapsed = Boolean(collapsedGroups[topic.id]);
            const isMainActive = activeId === topic.id;
            const hasActiveChild = topic.subtopics?.some((st) => st.id === activeId);
            const isHighlighted = isMainActive || hasActiveChild;

            return (
              <li key={topic.id} className={styles.treeItem}>
                <div className={`${styles.itemRow} ${isHighlighted ? styles.highlighted : ''}`}>
                  {hasChildren ? (
                    <button
                      type="button"
                      onClick={(e) => toggleGroup(topic.id, e)}
                      className={styles.chevronToggleBtn}
                      aria-label={isCollapsed ? `Expandir ${topic.title}` : `Recolher ${topic.title}`}
                      aria-expanded={!isCollapsed}
                    >
                      {isCollapsed ? (
                        <ChevronRight size={14} aria-hidden="true" />
                      ) : (
                        <ChevronDown size={14} aria-hidden="true" />
                      )}
                    </button>
                  ) : (
                    <span className={styles.chevronPlaceholder} aria-hidden="true" />
                  )}

                  <a
                    href={`#${topic.id}`}
                    onClick={(e) => handleLinkClick(e, topic.id)}
                    className={`${styles.itemLink} ${isMainActive ? styles.active : ''}`}
                  >
                    <span>{topic.title}</span>
                  </a>
                </div>

                {/* Subitens com Linha Guia Vertical Conectiva */}
                {hasChildren && !isCollapsed && (
                  <div className={styles.subgroupWrapper}>
                    <div className={styles.verticalGuideLine} aria-hidden="true" />
                    <ul className={styles.subgroupList}>
                      {topic.subtopics!.map((subtopic) => {
                        const isSubActive = activeId === subtopic.id;
                        return (
                          <li key={subtopic.id} className={styles.subgroupItem}>
                            <a
                              href={`#${subtopic.id}`}
                              onClick={(e) => handleLinkClick(e, subtopic.id)}
                              className={`${styles.subgroupLink} ${isSubActive ? styles.activeSub : ''}`}
                            >
                              <span>{subtopic.title}</span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
