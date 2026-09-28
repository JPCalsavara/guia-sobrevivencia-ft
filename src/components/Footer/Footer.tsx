import React from 'react';
import Link from 'next/link';
import { GraduationCap, ExternalLink, Heart } from 'lucide-react';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <div className={styles.brandLogo}>
              <div className={styles.brandIcon}>
                <GraduationCap size={20} />
              </div>
              <span className={styles.brandName}>Guia FT Unicamp</span>
            </div>
            <p className={styles.brandDesc}>
              Plataforma independente de orientacao academica e carreira organizada por estudantes da Faculdade de Tecnologia da Universidade Estadual de Campinas, Campus 1 Limeira.
            </p>
            <div className={styles.madeWith}>
              <span>Construido para a comunidade academica da FT</span>
            </div>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Navegacao</h4>
            <ul className={styles.linksList}>
              <li><Link href="/">Inicio e Apresentacao</Link></li>
              <li><Link href="/academico">Regras Academicas e BSI vs TADS</Link></li>
              <li><Link href="/carreira">Estagios e Modelo de Curriculo</Link></li>
              <li><Link href="/estudos-ia">Estudos com Gemini e NotebookLM</Link></li>
              <li><Link href="/campus">Salas, Bandejao e Organizacoes</Link></li>
              <li><Link href="/links">Diretorio de Links Oficiais</Link></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Sistemas da FT</h4>
            <ul className={styles.linksList}>
              <li>
                <a href="https://sistemas.ft.unicamp.br/salas" target="_blank" rel="noopener noreferrer">
                  <span>Alocacao de Salas</span>
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
                  <span>Cardapio do Bandejao</span>
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
            Guia do Calouro da Faculdade de Tecnologia da Unicamp. Este material e mantido de forma colaborativa e nao substitui as normas oficiais publicadas pela Diretoria Academica.
          </p>
        </div>
      </div>
    </footer>
  );
}
