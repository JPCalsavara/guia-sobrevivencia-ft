import React from 'react';
import {
  FileText,
  Code2,
  BookOpen,
  Cpu,
  Database,
  Layers,
  BarChart3,
  Flame,
  FileCode
} from 'lucide-react';

export interface FileIconProps {
  filename: string;
  size?: number;
}

export function FileIcon({ filename, size = 15 }: FileIconProps) {
  if (filename.endsWith('.md')) {
    return <FileText size={size} style={{ color: 'var(--dracula-cyan, #8be9fd)' }} aria-hidden="true" />;
  }
  if (filename.endsWith('.ts') || filename.endsWith('.tsx')) {
    return <Code2 size={size} style={{ color: 'var(--dracula-green, #50fa7b)' }} aria-hidden="true" />;
  }
  if (filename.endsWith('.tex')) {
    return <BookOpen size={size} style={{ color: 'var(--dracula-purple, #bd93f9)' }} aria-hidden="true" />;
  }
  if (filename.endsWith('.rs')) {
    return <Cpu size={size} style={{ color: 'var(--dracula-orange, #ffb86c)' }} aria-hidden="true" />;
  }
  if (filename.endsWith('.py')) {
    return <FileCode size={size} style={{ color: 'var(--dracula-yellow, #f1fa8c)' }} aria-hidden="true" />;
  }
  if (filename.endsWith('.sql')) {
    return <Database size={size} style={{ color: 'var(--dracula-pink, #ff79c6)' }} aria-hidden="true" />;
  }
  if (filename.endsWith('.json')) {
    return <BarChart3 size={size} style={{ color: 'var(--dracula-yellow, #f1fa8c)' }} aria-hidden="true" />;
  }
  if (filename.endsWith('.yaml') || filename.endsWith('.yml')) {
    return <Layers size={size} style={{ color: 'var(--dracula-pink, #ff79c6)' }} aria-hidden="true" />;
  }
  return <Flame size={size} style={{ color: 'var(--dracula-cyan, #8be9fd)' }} aria-hidden="true" />;
}
