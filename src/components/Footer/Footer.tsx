import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <div className={styles.brandLogos}>
              <Image
                src="/images/logo-ft-horizontal.png"
                alt="Faculdade de Tecnologia"
                width={160}
                height={40}
                className={styles.ftLogo}
              />
            </div>
            <p className={styles.brandDesc}>
              Plataforma de orientação acadêmica e carreira organizada para a comunidade discente da Faculdade de Tecnologia da Universidade Estadual de Campinas, Campus 1 Limeira.
            </p>
            <div className={styles.madeWith}>
              <span>Construído para a comunidade acadêmica da FT</span>
            </div>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Navegação</h4>
            <ul className={styles.linksList}>
              <li><Link href="/">Início e Apresentação</Link></li>
              <li><Link href="/academico">Regras Acadêmicas e BSI vs TADS</Link></li>
              <li><Link href="/carreira">Estágios e Modelo de Currículo</Link></li>
              <li><Link href="/estudos-ia">Estudos com Gemini e NotebookLM</Link></li>
              <li><Link href="/campus">Salas, Bandejão e Organizações</Link></li>
              <li><Link href="/links">Diretório de Links Oficiais</Link></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Sistemas da FT</h4>
            <ul className={styles.linksList}>
              <li>
                <a href="https://sistemas.ft.unicamp.br/salas" target="_blank" rel="noopener noreferrer">
                  <span>Alocação de Salas</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://sistemas.ft.unicamp.br/intranet" target="_blank" rel="noopener noreferrer">
                  <span>Intranet FT</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://www.ft.unicamp.br/tic" target="_blank" rel="noopener noreferrer">
                  <span>Coordenadoria de TIC</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://www.ft.unicamp.br" target="_blank" rel="noopener noreferrer">
                  <span>Portal Oficial da FT</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Sistemas Centrais</h4>
            <ul className={styles.linksList}>
              <li>
                <a href="https://grade.daconline.unicamp.br/login/" target="_blank" rel="noopener noreferrer">
                  <span>Grade DAC Online</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://sistemas.dac.unicamp.br/siga/" target="_blank" rel="noopener noreferrer">
                  <span>Portal e-DAC e SIGA</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://moodle.unicamp.br" target="_blank" rel="noopener noreferrer">
                  <span>Moodle Unicamp</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://sistemas.prefeituralimeira.unicamp.br/RU/view/site/cardapio.php" target="_blank" rel="noopener noreferrer">
                  <span>Cardápio do Bandejão</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://sistemas.prefeituralimeira.unicamp.br/intercamp/" target="_blank" rel="noopener noreferrer">
                  <span>Reserva Fretado Linha 84</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copy}>
            Guia do Calouro da Faculdade de Tecnologia da Unicamp. Este material é mantido de forma colaborativa e não substitui as normas oficiais publicadas pela Diretoria Acadêmica da Unicamp.
          </p>
        </div>
      </div>
    </footer>
  );
}
