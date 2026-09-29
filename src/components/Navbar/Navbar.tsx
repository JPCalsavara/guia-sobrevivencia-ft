'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon, Menu, X, BookOpen, Briefcase, Cpu, MapPin, ExternalLink, Link2, Home, Compass, Layers, ChevronDown, Search } from 'lucide-react';
import { MegaMenu } from './MegaMenu';
import { SearchModal } from '../SearchModal/SearchModal';
import styles from './Navbar.module.scss';

export function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

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
    { href: '/campus', label: 'Campus e Vida', icon: MapPin },
    { href: '/carreira', label: 'Carreira', icon: Briefcase },
    { href: '/estudos-ia', label: 'Estudos e IA', icon: Cpu },
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

        <nav className={styles.desktopNav} aria-label="Navegação principal">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navItem} ${isActive ? styles.active : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon size={16} aria-hidden="true" />
                <span className={styles.navLabel}>{item.label}</span>
              </Link>
            );
          })}

          <button
            type="button"
            onClick={() => setMegaMenuOpen(!megaMenuOpen)}
            className={`${styles.navItem} ${styles.megaMenuTrigger} ${megaMenuOpen ? styles.active : ''}`}
            aria-expanded={megaMenuOpen}
            aria-label="Abrir menu estruturado de tópicos do guia"
          >
            <Layers size={16} aria-hidden="true" />
            <span className={styles.navLabel}>Tópicos</span>
            <ChevronDown
              size={13}
              aria-hidden="true"
              style={{
                transform: megaMenuOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s ease',
              }}
            />
          </button>
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            onClick={() => setSearchModalOpen(true)}
            className={styles.searchTrigger}
            aria-label="Abrir busca no guia e assistente de inteligência artificial"
            title="Buscar no guia ou consultar com IA, atalho Ctrl K"
          >
            <Search size={18} aria-hidden="true" />
            <span className={styles.searchShortcutBadge}>Ctrl K</span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label={theme === 'dark' ? 'Alternar para tema claro' : 'Alternar para tema escuro'}
            title="Alternar tema"
          >
            {theme === 'dark' ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
          </button>

          <Link
            href="https://grade.daconline.unicamp.br/login/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.gradeLink}
            aria-label="Acessar Grade DAC Online em nova janela"
          >
            <span>Grade DAC</span>
            <ExternalLink size={14} aria-hidden="true" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={styles.menuToggle}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
          >
            {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-nav-panel"
          className={styles.mobileNav}
          aria-label="Navegação móvel"
        >
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              setSearchModalOpen(true);
            }}
            className={styles.mobileSearchTrigger}
          >
            <Search size={18} aria-hidden="true" />
            <span>Buscar ou Consultar com IA</span>
          </button>

          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`${styles.mobileNavItem} ${isActive ? styles.mobileActive : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon size={18} aria-hidden="true" />
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
            aria-label="Acessar Grade DAC Online em nova janela"
          >
            <span>Grade DAC Online</span>
            <ExternalLink size={16} aria-hidden="true" />
          </Link>
        </nav>
      )}

      <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
    </header>
  );
}
