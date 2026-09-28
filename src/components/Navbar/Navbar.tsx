'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Sun, Moon, Menu, X, BookOpen, Briefcase, Cpu, MapPin, ExternalLink, Link2, Home } from 'lucide-react';
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
        <Link href="/" className={styles.logo}>
          <div className={styles.logoLogos}>
            <Image
              src="/images/logo-unicamp.png"
              alt="Logotipo Unicamp"
              width={34}
              height={34}
              className={styles.unicampLogo}
              priority
            />
            <div className={styles.divider} />
            <Image
              src={theme === 'dark' ? '/images/logo-ft-horizontal-branco.png' : '/images/logo-ft-horizontal.png'}
              alt="Logotipo Faculdade de Tecnologia Unicamp"
              width={160}
              height={44}
              className={styles.ftLogo}
              priority
            />
          </div>
          <div className={styles.brandBadge}>Guia</div>
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
