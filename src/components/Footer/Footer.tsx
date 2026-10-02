import React from 'react';
import Link from 'next/link';
import { ExternalLink, Compass } from 'lucide-react';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer} aria-label="Rodapé institucional">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <div className={styles.brandLogos}>
              <div className={styles.brandIconWrapper}>
                <Compass size={20} className={styles.brandIcon} aria-hidden="true" />
              </div>
              <div className={styles.brandTextGroup}>
                <span className={styles.brandTitle}>Guia FT</span>
                <span className={styles.brandSubtitle}>Unicamp</span>
              </div>
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
            <nav aria-label="Links rápidos do guia">
              <ul className={styles.linksList}>
                <li><Link href="/">Início e Apresentação</Link></li>
                <li><Link href="/academico">Regras Acadêmicas e BSI vs TADS</Link></li>
                <li><Link href="/carreira">Estágios e Modelo de Currículo</Link></li>
                <li><Link href="/estudos-ia">Estudos com Gemini e NotebookLM</Link></li>
                <li><Link href="/campus">Salas, Bandejão e Organizações</Link></li>
                <li><Link href="/duvidas">Portal de Dúvidas Comuns</Link></li>
                <li><Link href="/estatisticas">Estatísticas e Pesquisa</Link></li>
                <li><Link href="/links">Diretório de Links Oficiais</Link></li>
              </ul>
            </nav>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Sistemas da FT</h4>
            <nav aria-label="Sistemas oficiais da FT">
              <ul className={styles.linksList}>
                <li>
                  <a
                    href="https://sistemas.ft.unicamp.br/salas"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Alocação de Salas em nova janela"
                  >
                    <span>Alocação de Salas</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://sistemas.ft.unicamp.br/intranet"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Intranet FT em nova janela"
                  >
                    <span>Intranet FT</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ft.unicamp.br/tic"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Coordenadoria de TIC em nova janela"
                  >
                    <span>Coordenadoria de TIC</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ft.unicamp.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Portal Oficial da FT em nova janela"
                  >
                    <span>Portal Oficial da FT</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Sistemas Centrais</h4>
            <nav aria-label="Sistemas acadêmicos centrais">
              <ul className={styles.linksList}>
                <li>
                  <a
                    href="https://grade.daconline.unicamp.br/login/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Grade DAC Online em nova janela"
                  >
                    <span>Grade DAC Online</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://sistemas.dac.unicamp.br/siga/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Portal e-DAC e SIGA em nova janela"
                  >
                    <span>Portal e-DAC e SIGA</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://moodle.ggte.unicamp.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Moodle Unicamp em nova janela"
                  >
                    <span>Moodle Unicamp</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://sistemas.prefeituralimeira.unicamp.br/RU/view/site/cardapio.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cardápio do Bandejão em nova janela"
                  >
                    <span>Cardápio do Bandejão</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://sistemas.prefeituralimeira.unicamp.br/intercamp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Reserva Fretado Linha 84 em nova janela"
                  >
                    <span>Reserva Fretado Linha 84</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copy}>
            Guia do Calouro da Faculdade de Tecnologia da Unicamp. Este material é mantido de forma colaborativa e não substitui as normas oficiais publicadas pela Diretoria Acadêmica da Unicamp.
          </p>
          <p className={styles.bugReport}>
            Encontrou algum link quebrado ou bug? Envie uma mensagem pelo Google Chat institucional para <strong>j197837@dac.unicamp.br</strong> para reportar problemas e solicitar correções.
          </p>
          <p className={styles.credits}>
            Criado e desenvolvido por{' '}
            <a
              href="https://www.linkedin.com/in/joaopedrocalsavara/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de Joao Pedro Calsavara no LinkedIn em nova janela"
            >
              João Pedro Calsavara no LinkedIn
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
