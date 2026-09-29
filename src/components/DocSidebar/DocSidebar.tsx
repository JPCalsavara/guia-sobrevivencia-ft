'use client';

import React, { useState, useEffect } from 'react';
import { ListFilter, X, ChevronRight, Bookmark } from 'lucide-react';
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
}

export function DocSidebar({ topics }: DocSidebarProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    // Lista todos os IDs monitorados
    const allIds: string[] = [];
    topics.forEach((t) => {
      allIds.push(t.id);
      if (t.subtopics) {
        t.subtopics.forEach((st) => allIds.push(st.id));
      }
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
    }
  };

  // Encontra o titulo do topico ativo para exibir na barra mobile
  const activeTopic = topics.find((t) => {
    if (t.id === activeId) return true;
    return t.subtopics?.some((st) => st.id === activeId);
  });

  return (
    <nav className={styles.sidebarWrapper} aria-label="Sumário da página">
      {/* Gatilho Mobile */}
      <button
        type="button"
        onClick={() => setIsMobileOpen(true)}
        className={styles.mobileTriggerBar}
        aria-expanded={isMobileOpen}
        aria-controls="doc-sidebar-menu"
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

      {/* Backdrop Mobile */}
      <div
        className={`${styles.mobileBackdrop} ${isMobileOpen ? styles.open : ''}`}
        onClick={() => setIsMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Menu Principal */}
      <div
        id="doc-sidebar-menu"
        className={`${styles.sidebarContainer} ${isMobileOpen ? styles.open : ''}`}
      >
        <div className={styles.sidebarHeader}>
          <div className={styles.sidebarTitle}>
            <Bookmark size={14} aria-hidden="true" />
            <span>Nesta Página</span>
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

        <ul className={styles.topicList}>
          {topics.map((topic) => {
            const isMainActive = activeId === topic.id;
            const hasActiveChild = topic.subtopics?.some((st) => st.id === activeId);
            const isTopicSelected = isMainActive || hasActiveChild;

            return (
              <li key={topic.id} className={styles.topicItem}>
                <a
                  href={`#${topic.id}`}
                  onClick={(e) => handleLinkClick(e, topic.id)}
                  className={`${styles.topicLink} ${isTopicSelected ? styles.active : ''}`}
                >
                  <ChevronRight
                    size={14}
                    className={styles.topicIcon}
                    aria-hidden="true"
                    style={{
                      transform: isTopicSelected ? 'rotate(90deg)' : 'none',
                      transition: 'transform 0.2s ease',
                    }}
                  />
                  <span>{topic.title}</span>
                </a>

                {/* Subtópicos */}
                {topic.subtopics && topic.subtopics.length > 0 && isTopicSelected && (
                  <ul className={styles.subtopicList}>
                    {topic.subtopics.map((subtopic) => {
                      const isSubActive = activeId === subtopic.id;
                      return (
                        <li key={subtopic.id}>
                          <a
                            href={`#${subtopic.id}`}
                            onClick={(e) => handleLinkClick(e, subtopic.id)}
                            className={`${styles.subtopicLink} ${isSubActive ? styles.active : ''}`}
                          >
                            <span>{subtopic.title}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
