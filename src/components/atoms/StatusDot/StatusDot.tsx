import React from 'react';
import styles from './StatusDot.module.scss';

export interface StatusDotProps {
  status?: 'online' | 'warning' | 'busy';
  label?: string;
}

export function StatusDot({ status = 'online', label }: StatusDotProps) {
  return (
    <span className={styles.wrapper}>
      <span className={`${styles.dot} ${styles[status]}`} />
      {label && <span className={styles.label}>{label}</span>}
    </span>
  );
}
