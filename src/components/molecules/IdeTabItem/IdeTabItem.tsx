'use client';

import React from 'react';
import Link from 'next/link';
import { FileIcon } from '@/components/atoms/FileIcon/FileIcon';
import styles from './IdeTabItem.module.scss';

export interface IdeTabItemProps {
  filename: string;
  href: string;
  isActive: boolean;
}

export function IdeTabItem({ filename, href, isActive }: IdeTabItemProps) {
  return (
    <Link
      href={href}
      className={`${styles.tabItem} ${isActive ? styles.active : ''}`}
      aria-current={isActive ? 'page' : undefined}
    >
      <FileIcon filename={filename} size={14} />
      <span className={styles.filename}>{filename}</span>
      <span className={styles.tabIndicator} aria-hidden="true" />
    </Link>
  );
}
