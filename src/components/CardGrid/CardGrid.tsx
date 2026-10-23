import React from 'react';
import styles from './CardGrid.module.scss';

interface CardGridProps {
  children: React.ReactNode;
  className?: string;
}

export function CardGrid({ children, className }: CardGridProps) {
  return (
    <div className={`${styles.grid} ${className ?? ''}`.trim()}>
      {children}
    </div>
  );
}
