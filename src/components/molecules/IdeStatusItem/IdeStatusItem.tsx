import React from 'react';
import styles from './IdeStatusItem.module.scss';

export interface IdeStatusItemProps {
  icon?: React.ReactNode;
  label: string;
  tooltip?: string;
  highlight?: boolean;
}

export function IdeStatusItem({ icon, label, tooltip, highlight }: IdeStatusItemProps) {
  return (
    <div
      className={`${styles.statusItem} ${highlight ? styles.highlight : ''}`}
      title={tooltip || label}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
    </div>
  );
}
