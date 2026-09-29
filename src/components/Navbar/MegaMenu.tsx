'use client';

import React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  GraduationCap,
  FlaskConical,
  Globe,
  MapPin,
  Building2,
  Bus,
  Users2,
  Briefcase,
  Code2,
  Cpu,
  Brain,
  ExternalLink,
  Calendar,
  Layers
} from 'lucide-react';
import styles from './MegaMenu.module.scss';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className={styles.backdrop} onClick={onClose} aria-hidden="true" />
      <div
        className={styles.megaMenuContainer}
        role="dialog"
        aria-label="Menu estruturado com tópicos do Guia FT"
      >
        <div className={styles.innerWrapper}>
          {/* Coluna 1: Vida Acadêmica e Cursos */}
          <div className={styles.menuColumn}>
            <div className={styles.columnHeader}>
              <BookOpen size={18} className={styles.colIcon} aria-hidden="true" />
              <h3 className={styles.columnTitle}>Vida Acadêmica e Cursos</h3>
            </div>

            <div className={styles.subgroup}>
              <h4 className={styles.subgroupTitle}>Estrutura e Coeficientes</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/academico#bsi-vs-tads" onClick={onClose} className={styles.menuLink}>
                    <span>BSI versus TADS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/academico#coeficientes-dac" onClick={onClose} className={styles.menuLink}>
                    <span>CR, CP e Vetores Horários DAC</span>
                  </Link>
                </li>
                <li>
                  <Link href="/academico#calculo-geometria" onClick={onClose} className={styles.menuLink}>
                    <span>Cálculo I e Geometria Analítica</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.subgroup}>
              <h4 className={styles.subgroupTitle}>Integralização e Formatura</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/academico#checklist-formatura" onClick={onClose} className={styles.menuLink}>
                    <span>Checklist de Formatura</span>
                  </Link>
                </li>
                <li>
                  <Link href="/academico#estrategia-carreira" onClick={onClose} className={styles.menuLink}>
                    <span>Estratégia de Conclusão e Estágio</span>
                  </Link>
                </li>
                <li>
                  <Link href="/academico#noturno-bsi" onClick={onClose} className={styles.menuLink}>
                    <span>Transição Noturno no BSI</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Coluna 2: Pesquisa, Extensão e Mobilidade */}
          <div className={styles.menuColumn}>
            <div className={styles.columnHeader}>
              <FlaskConical size={18} className={styles.colIcon} aria-hidden="true" />
              <h3 className={styles.columnTitle}>Pesquisa e Mobilidade</h3>
            </div>

            <div className={styles.subgroup}>
              <h4 className={styles.subgroupTitle}>Iniciação e Monitoria</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/academico#monitoria-pad" onClick={onClose} className={styles.menuLink}>
                    <span>Monitoria PAD com Bolsa e Voluntária</span>
                  </Link>
                </li>
                <li>
                  <Link href="/academico#iniciacao-cientifica" onClick={onClose} className={styles.menuLink}>
                    <span>Iniciação Científica PIBIC e FAPESP</span>
                  </Link>
                </li>
                <li>
                  <Link href="/academico#horas-extensao" onClick={onClose} className={styles.menuLink}>
                    <span>Horas de Extensão e Complementares</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.subgroup}>
              <h4 className={styles.subgroupTitle}>Relações Internacionais</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/academico#intercambio-deri" onClick={onClose} className={styles.menuLink}>
                    <span>Fluxo Completo de Intercâmbio DERI</span>
                  </Link>
                </li>
                <li>
                  <Link href="/academico#intercambio-potsdam" onClick={onClose} className={styles.menuLink}>
                    <span>Estudo de Caso Edital Potsdam</span>
                  </Link>
                </li>
                <li>
                  <Link href="/academico#intercambio-bolsas" onClick={onClose} className={styles.menuLink}>
                    <span>Bolsas Santander e Erasmus Mais</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Coluna 3: Campus, Carreira e IA */}
          <div className={styles.menuColumn}>
            <div className={styles.columnHeader}>
              <MapPin size={18} className={styles.colIcon} aria-hidden="true" />
              <h3 className={styles.columnTitle}>Campus, Carreira e IA</h3>
            </div>

            <div className={styles.subgroup}>
              <h4 className={styles.subgroupTitle}>Infraestrutura e Vida</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/campus#ferramentas-ti" onClick={onClose} className={styles.menuLink}>
                    <span>Laboratórios TIC e Cota WifiPrint</span>
                  </Link>
                </li>
                <li>
                  <Link href="/campus#transporte-alimentacao" onClick={onClose} className={styles.menuLink}>
                    <span>Restaurante Universitário e Circular</span>
                  </Link>
                </li>
                <li>
                  <Link href="/campus#entidades-estudantis" onClick={onClose} className={styles.menuLink}>
                    <span>Diretório de Organizações Estudantis</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.subgroup}>
              <h4 className={styles.subgroupTitle}>Mercado e Inteligência Artificial</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/carreira#sazonalidade-estagio" onClick={onClose} className={styles.menuLink}>
                    <span>Sazonalidade e Feiras de Contratação</span>
                  </Link>
                </li>
                <li>
                  <Link href="/carreira#portfolio-github" onClick={onClose} className={styles.menuLink}>
                    <span>Portfólio GitHub e Currículo LaTeX</span>
                  </Link>
                </li>
                <li>
                  <Link href="/estudos-ia#notebooklm-cerebro" onClick={onClose} className={styles.menuLink}>
                    <span>Google NotebookLM e Prompts com IA</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Coluna 4: Mais Acessados e Portais Oficiais */}
          <div className={`${styles.menuColumn} ${styles.columnHighlighted}`}>
            <div className={styles.columnHeader}>
              <ExternalLink size={18} className={styles.colIcon} aria-hidden="true" />
              <h3 className={styles.columnTitle}>Mais Acessados</h3>
            </div>

            <div className={styles.subgroup}>
              <h4 className={styles.subgroupTitle}>Portais Acadêmicos da DAC</h4>
              <ul className={styles.quickLinksList}>
                <li>
                  <a
                    href="https://www.dac.unicamp.br/portal/caderno-de-horarios/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.quickLink}
                  >
                    <span>Caderno de Horários DAC</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://grade.daconline.unicamp.br/login/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.quickLink}
                  >
                    <span>Grade DAC Online</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://sistemas.ft.unicamp.br/salas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.quickLink}
                  >
                    <span>Alocação de Salas FT</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.internationaloffice.unicamp.br/intercambio/editais/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.quickLink}
                  >
                    <span>Editais Abertos da DERI</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://sistemas.prefeituralimeira.unicamp.br/RU/view/site/cardapio.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.quickLink}
                  >
                    <span>Cardápio do Restaurante Universitário</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://sistemas.prefeituralimeira.unicamp.br/intercamp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.quickLink}
                  >
                    <span>Reserva Fretado Intercampi</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
