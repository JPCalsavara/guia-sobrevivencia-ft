'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon, Menu, X, BookOpen, Briefcase, Cpu, MapPin, ExternalLink, Link2, Home, Compass } from 'lucide-react';
import styles from './Navbar.module.scss';

export function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('ft_theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('ft_theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const navLinks = [
    { href: '/', label: 'Início', icon: Home },
    { href: '/academico', label: 'Acadêmico', icon: BookOpen },
    { href: '/carreira', label: 'Carreira', icon: Briefcase },
    { href: '/estudos-ia', label: 'Estudos e IA', icon: Cpu },
    { href: '/campus', label: 'Campus e Vida', icon: MapPin },
    { href: '/links', label: 'Links Úteis', icon: Link2 },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand} aria-label="Página inicial do Guia FT Unicamp">
          <div className={styles.brandIconWrapper}>
            <Compass size={22} className={styles.brandIcon} />
          </div>
          <div className={styles.brandTextGroup}>
            <span className={styles.brandTitle}>Guia FT</span>
            <span className={styles.brandSubtitle}>Unicamp</span>
          </div>
        </Link>

        <nav className={styles.desktopNav}>
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navItem} ${isActive ? styles.active : ''}`}
              >
                <Icon size={16} />
                <span className={styles.navLabel}>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Alternar tema claro e escuro"
            title="Alternar tema"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link
            href="https://grade.daconline.unicamp.br/login/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.gradeLink}
          >
            <span>Grade DAC</span>
            <ExternalLink size={14} />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={styles.menuToggle}
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={styles.mobileNav}>
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`${styles.mobileNavItem} ${isActive ? styles.mobileActive : ''}`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
          <Link
            href="https://grade.daconline.unicamp.br/login/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className={styles.mobileGradeLink}
          >
            <span>Grade DAC Online</span>
            <ExternalLink size={16} />
          </Link>
        </div>
      )}
    </header>
  );
}
