'use client';

import React, { useState, useEffect } from 'react';
import { Bookmark, ChevronDown, ListFilter, X } from 'lucide-react';
import { TopicItem } from '@/components/DocSidebar/DocSidebar';
import styles from './TopicSubnav.module.scss';

interface TopicSubnavProps {
  topics: TopicItem[];
  threshold?: number;
}

export function TopicSubnav({ topics, threshold = 280 }: TopicSubnavProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeId, setActiveId] = useState<string>('');
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const allIds: string[] = [];
    topics.forEach((t) => {
      allIds.push(t.id);
      if (t.subtopics) {
        t.subtopics.forEach((st) => allIds.push(st.id));
      }
    });

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Visibilidade da barra fixa
      if (scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setMobileDropdownOpen(false);
      }

      // Detecção do tópico ativo para ScrollSpy
      const scrollPosition = scrollY + 160;
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

      if (allIds.length > 0 && scrollY < 300) {
        setActiveId(allIds[0]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [topics, threshold]);

  const handlePillClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
    }
  };

  // Encontra o tópico principal ativo
  const activeTopic = topics.find((t) => {
    if (t.id === activeId) return true;
    return t.subtopics?.some((st) => st.id === activeId);
  }) || topics[0];

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={styles.subnavBar}
      role="navigation"
      aria-label="Navegação rápida de tópicos da página"
    >
      <div className={styles.container}>
        {/* Lado Esquerdo: Identificador de Tópico Ativo */}
        <div className={styles.activeIndicator}>
          <Bookmark size={15} className={styles.bookmarkIcon} aria-hidden="true" />
          <span className={styles.activeTopicTitle}>
            {activeTopic?.title || 'Tópicos'}
          </span>
        </div>

        {/* Desktop: Pílulas de Rolagem Horizontal */}
        <nav className={styles.pillsScrollArea} aria-label="Lista de tópicos">
          {topics.map((t) => {
            const isSelected = t.id === activeId || t.subtopics?.some((st) => st.id === activeId);
            return (
              <a
                key={t.id}
                href={`#${t.id}`}
                onClick={(e) => handlePillClick(e, t.id)}
                className={`${styles.topicPill} ${isSelected ? styles.pillActive : ''}`}
                aria-current={isSelected ? 'location' : undefined}
              >
                <span>{t.title}</span>
              </a>
            );
          })}
        </nav>

        {/* Mobile: Gatilho Dropdown */}
        <button
          type="button"
          onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
          className={styles.mobileDropdownBtn}
          aria-expanded={mobileDropdownOpen}
          aria-controls="mobile-topics-dropdown"
          aria-label="Abrir menu de tópicos"
        >
          <ListFilter size={16} aria-hidden="true" />
          <span className={styles.mobileBtnLabel}>Tópicos</span>
          {mobileDropdownOpen ? (
            <X size={16} aria-hidden="true" />
          ) : (
            <ChevronDown size={16} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Menu Dropdown Suspenso no Mobile */}
      {mobileDropdownOpen && (
        <div id="mobile-topics-dropdown" className={styles.mobileDropdownMenu}>
          <ul className={styles.mobileTopicsList}>
            {topics.map((t) => {
              const isSelected = t.id === activeId || t.subtopics?.some((st) => st.id === activeId);
              return (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    onClick={(e) => handlePillClick(e, t.id)}
                    className={`${styles.mobileTopicItem} ${isSelected ? styles.mobileItemActive : ''}`}
                  >
                    <span>{t.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
