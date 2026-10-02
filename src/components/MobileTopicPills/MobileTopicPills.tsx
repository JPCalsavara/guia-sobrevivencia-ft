'use client';

import React, { useEffect, useState, useRef } from 'react';
import { TopicItem } from '../DocSidebar/DocSidebar';
import styles from './MobileTopicPills.module.scss';

interface MobileTopicPillsProps {
  topics: TopicItem[];
}

export function MobileTopicPills({ topics }: MobileTopicPillsProps) {
  const [activeId, setActiveId] = useState<string>(topics[0]?.id || '');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!topics || topics.length === 0) return;

    const handleScroll = () => {
      const scrollY = window.scrollY + 140;

      for (let i = topics.length - 1; i >= 0; i--) {
        const topic = topics[i];
        const el = document.getElementById(topic.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollY >= top) {
            setActiveId(topic.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [topics]);

  const handlePillClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
    }
  };

  if (!topics || topics.length === 0) return null;

  return (
    <nav className={styles.pillsWrapper} aria-label="Navegação rápida por tópicos em dispositivos móveis">
      <div className={styles.scrollArea} ref={scrollRef}>
        {topics.map((topic) => {
          const isActive = activeId === topic.id;
          return (
            <a
              key={topic.id}
              href={`#${topic.id}`}
              onClick={(e) => handlePillClick(e, topic.id)}
              className={`${styles.pillItem} ${isActive ? styles.active : ''}`}
              aria-current={isActive ? 'location' : undefined}
            >
              <span>{topic.title}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
