'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GraduationCap, Sun, Moon, Menu, X, BookOpen, Briefcase, Cpu, MapPin, ExternalLink } from 'lucide-react';
import styles from './Navbar.module.scss';

export function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('ft_theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('ft_theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const navLinks = [
    { href: '/', label: 'Inicio', icon: GraduationCap },
    { href: '/academico', label: 'Academico', icon: BookOpen },
    { href: '/carreira', label: 'Carreira', icon: Briefcase },
    { href: '/estudos-ia', label: 'Estudos e IA', icon: Cpu },
    { href: '/campus', label: 'Campus e Vida', icon: MapPin },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <GraduationCap size={22} />
          </div>
          <div className={styles.logoText}>
            <span className={styles.brandTitle}>Guia FT</span>
            <span className={styles.brandSubtitle}>Unicamp Limeira</span>
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
                <span>{item.label}</span>
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
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
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
            aria-label="Abrir menu de navegacao"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
