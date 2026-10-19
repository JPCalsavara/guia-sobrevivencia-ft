'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sun,
  Moon,
  Menu,
  X,
  BookOpen,
  Briefcase,
  Cpu,
  MapPin,
  Link2,
  Home,
  Compass,
  ChevronDown,
  Search,
  GraduationCap,
  HelpCircle,
  ArrowRight,
  Sparkles,
  Mail,
} from 'lucide-react';
import { headerNavSections } from '@/data/headerTopics';
import { useStudentProfile } from '@/contexts/StudentProfileContext';
import { COURSE_SHORT_NAMES } from '@/types/studentProfile';
import { StudentProfileModal } from '../StudentProfileModal/StudentProfileModal';
import { SearchModal } from '../SearchModal/SearchModal';
import styles from './Navbar.module.scss';

const sectionIcons: Record<string, React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>> = {
  calouros: GraduationCap,
  academico: BookOpen,
  carreira: Briefcase,
  campus: MapPin,
  duvidas: HelpCircle,
  'estudos-ia': Cpu,
  links: Link2,
};

export function Navbar() {
  const pathname = usePathname();
  const { profile } = useStudentProfile();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileSections, setExpandedMobileSections] = useState<Record<string, boolean>>({});
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setActiveDropdown(null);
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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (sectionId: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(sectionId);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileSection = (sectionId: string) => {
    setExpandedMobileSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const profileButtonText =
    profile.course && profile.year
      ? `${COURSE_SHORT_NAMES[profile.course]} · ${profile.year}º Ano`
      : profile.course && profile.semester
        ? `${COURSE_SHORT_NAMES[profile.course]} · ${Math.ceil(profile.semester / 2)}º Ano`
        : profile.course
          ? COURSE_SHORT_NAMES[profile.course]
          : 'Meu Curso';

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
        <Link href="/" className={styles.brand} aria-label="Pagina inicial do Guia FT Unicamp">
          <div className={styles.brandIconWrapper}>
            <Compass size={22} className={styles.brandIcon} />
          </div>
          <div className={styles.brandTextGroup}>
            <span className={styles.brandTitle}>Guia FT</span>
            <span className={styles.brandSubtitle}>Unicamp</span>
          </div>
        </Link>

        {/* Navegação Desktop com Menus Suspensos de Topicos */}
        <nav className={styles.desktopNav} aria-label="Navegacao principal">
          <Link
            href="/"
            className={`${styles.navItem} ${pathname === '/' ? styles.active : ''}`}
            aria-current={pathname === '/' ? 'page' : undefined}
          >
            <Home size={15} aria-hidden="true" />
            <span className={styles.navLabel}>Inicio</span>
          </Link>

          {headerNavSections.map((section) => {
            const Icon = sectionIcons[section.id] || BookOpen;
            const isActive = pathname.startsWith(section.href);
            const isDropdownOpen = activeDropdown === section.id;

            return (
              <div
                key={section.id}
                className={styles.dropdownWrapper}
                onMouseEnter={() => handleMouseEnter(section.id)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={section.href}
                  className={`${styles.navItemWithDropdown} ${isActive ? styles.active : ''} ${
                    isDropdownOpen ? styles.isOpen : ''
                  }`}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                  aria-current={isActive ? 'page' : undefined}
                  onFocus={() => handleMouseEnter(section.id)}
                >
                  <Icon size={15} aria-hidden="true" />
                  <span className={styles.navLabel}>{section.label}</span>
                  <ChevronDown
                    size={12}
                    className={`${styles.chevronIcon} ${isDropdownOpen ? styles.rotated : ''}`}
                    aria-hidden="true"
                  />
                </Link>

                {isDropdownOpen && (
                  <div
                    className={styles.dropdownMenu}
                    role="menu"
                    aria-label={`Topicos de ${section.label}`}
                  >
                    <div className={styles.dropdownHeader}>
                      <div className={styles.dropdownTitleRow}>
                        <h4 className={styles.dropdownTitle}>{section.label}</h4>
                        <Link
                          href={section.href}
                          onClick={() => setActiveDropdown(null)}
                          className={styles.dropdownAllLink}
                        >
                          <span>Ver secao</span>
                          <ArrowRight size={11} aria-hidden="true" />
                        </Link>
                      </div>
                      <p className={styles.dropdownDesc}>{section.description}</p>
                    </div>

                    <ul className={styles.dropdownList} role="none">
                      {section.topics.map((topic) => {
                        const isRecommended = Boolean(
                          profile.stage && topic.recommendedStages?.includes(profile.stage)
                        );

                        return (
                          <li key={topic.id} role="none">
                            <Link
                              href={topic.href}
                              role="menuitem"
                              onClick={() => setActiveDropdown(null)}
                              className={`${styles.dropdownTopicLink} ${
                                isRecommended ? styles.recommended : ''
                              }`}
                            >
                              <span className={styles.topicTitleText}>{topic.title}</span>
                              {isRecommended ? (
                                <span className={styles.recommendedTag}>Fase</span>
                              ) : (
                                <span className={styles.topicTag}>{topic.tag}</span>
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Ações Rápidas no Cabeçalho */}
        <div className={styles.actions}>
          {/* Botão de Perfil: Curso e Semestre */}
          <button
            type="button"
            onClick={() => setProfileModalOpen(true)}
            className={`${styles.profileTrigger} ${profile.course ? styles.hasProfile : ''}`}
            aria-label="Definir curso e periodo letivo"
            title="Selecionar curso e semestre academico"
          >
            <GraduationCap size={17} aria-hidden="true" />
            <span className={styles.profileLabel}>{profileButtonText}</span>
          </button>

          {/* Busca Rápida */}
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

          {/* Alternador de Tema */}
          <button
            type="button"
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label={theme === 'dark' ? 'Alternar para tema claro' : 'Alternar para tema escuro'}
            title="Alternar tema"
          >
            {theme === 'dark' ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
          </button>


          {/* Botão Menu Mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={styles.menuToggle}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegacao' : 'Abrir menu de navegacao'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
          >
            {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>

      {/* Painel de Navegação Mobile */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav-panel"
          className={styles.mobileNav}
          aria-label="Navegacao movel"
        >


          {/* Link Início */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`${styles.mobileNavItem} ${pathname === '/' ? styles.mobileActive : ''}`}
            aria-current={pathname === '/' ? 'page' : undefined}
          >
            <Home size={18} aria-hidden="true" />
            <span>Inicio</span>
          </Link>

          {/* Acordeões de Seção no Mobile */}
          {headerNavSections.map((section) => {
            const Icon = sectionIcons[section.id] || BookOpen;
            const isExpanded = Boolean(expandedMobileSections[section.id]);
            const isActive = pathname.startsWith(section.href);

            return (
              <div key={section.id} className={styles.mobileSectionGroup}>
                <button
                  type="button"
                  className={`${styles.mobileSectionHeader} ${isExpanded ? styles.expanded : ''} ${
                    isActive ? styles.mobileActive : ''
                  }`}
                  onClick={() => toggleMobileSection(section.id)}
                  aria-expanded={isExpanded}
                >
                  <div className={styles.mobileSectionTitle}>
                    <Icon size={18} aria-hidden="true" />
                    <span>{section.label}</span>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`${styles.chevronIcon} ${isExpanded ? styles.rotated : ''}`}
                    aria-hidden="true"
                  />
                </button>

                {isExpanded && (
                  <ul className={styles.mobileSectionList}>
                    <li>
                      <Link
                        href={section.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`${styles.mobileTopicLink} ${styles.mobileMainLink}`}
                      >
                        <span>Acessar pagina completa</span>
                        <ArrowRight size={13} aria-hidden="true" />
                      </Link>
                    </li>
                    {section.topics.map((topic) => {
                      const isRecommended = Boolean(
                        profile.stage && topic.recommendedStages?.includes(profile.stage)
                      );
                      return (
                        <li key={topic.id}>
                          <Link
                            href={topic.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={styles.mobileTopicLink}
                          >
                            <span>{topic.title}</span>
                            {isRecommended && <span className={styles.recommendedTag}>Fase</span>}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}

          {/* Link Contatos e Atendimento */}
          <Link
            href="/campus#contatos-atendimento"
            onClick={() => setMobileMenuOpen(false)}
            className={styles.mobileNavItem}
          >
            <Mail size={18} aria-hidden="true" />
            <span>Contatos e Atendimento</span>
          </Link>

          {/* Alternador de Tema no Drawer Mobile */}
          <button
            type="button"
            onClick={toggleTheme}
            className={styles.mobileThemeToggle}
            aria-label={theme === 'dark' ? 'Alternar para tema claro' : 'Alternar para tema escuro'}
          >
            <div className={styles.mobileThemeContent}>
              {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
              <span>{theme === 'dark' ? 'Tema Claro' : 'Tema Escuro'}</span>
            </div>
            <span className={styles.mobileThemeBadge}>{theme === 'dark' ? 'Escuro' : 'Claro'}</span>
          </button>
        </nav>
      )}

      {/* Modais */}
      <StudentProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
      />
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </>
  );
}
