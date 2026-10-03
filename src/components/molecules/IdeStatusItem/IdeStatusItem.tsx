import React from 'react';
import styles from './IdeStatusItem.module.scss';

export interface IdeStatusItemProps {
  icon?: React.ReactNode;
  label: string;
  tooltip?: string;
  highlight?: boolean;
  className?: string;
}

export function IdeStatusItem({ icon, label, tooltip, highlight, className }: IdeStatusItemProps) {
  return (
    <div
      className={`${styles.statusItem} ${highlight ? styles.highlight : ''} ${className || ''}`.trim()}
      title={tooltip || label}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
    </div>
  );
}
