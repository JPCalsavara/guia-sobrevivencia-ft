import React from 'react';
import Link from 'next/link';
import styles from './IdeStatusItem.module.scss';

export interface IdeStatusItemProps {
  icon?: React.ReactNode;
  label: string;
  tooltip?: string;
  highlight?: boolean;
  className?: string;
  href?: string;
}

export function IdeStatusItem({ icon, label, tooltip, highlight, className, href }: IdeStatusItemProps) {
  const content = (
    <>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
    </>
  );

  const combinedClass = `${styles.statusItem} ${highlight ? styles.highlight : ''} ${href ? styles.linkItem : ''} ${className || ''}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClass} title={tooltip || label}>
        {content}
      </Link>
    );
  }

  return (
    <div
      className={combinedClass}
      title={tooltip || label}
    >
      {content}
    </div>
  );
}
