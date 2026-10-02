import React from 'react';
import styles from './Badge.module.scss';

export interface BadgeProps {
  variant?: 'dracula-purple' | 'dracula-cyan' | 'dracula-green' | 'dracula-pink' | 'dracula-orange' | 'ft-green' | 'ft-blue';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function Badge({ variant = 'dracula-purple', children, icon }: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]}`}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
