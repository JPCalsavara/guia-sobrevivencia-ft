import React from 'react';
import Link from 'next/link';
import { Tag, GitBranch, ExternalLink, HeartHandshake, Mail, Github, CheckCircle2 } from 'lucide-react';
import { versionsData } from '@/data/versions';
import { PROJECT_SUPPORT_EMAIL, PROJECT_CONTRIBUTING_URL } from '@/data/contacts';
import styles from './versoes.module.scss';

export const metadata = {
  title: 'Historico de Versoes e Apoio | Guia FT',
  description: 'Acompanhe o historico de versoes, notas de lancamento e descubra formas de apoiar o desenvolvimento continuo do Guia de Sobrevivencia da FT Unicamp.',
};

export default function VersoesPage() {
  return (
    <div className={styles.container}>
      <header className={styles.pageHeader}>
        <div className={styles.headerBadge}>
          <Tag size={14} aria-hidden="true" />
          <span>Releases e Ciclo Semantico</span>
        </div>
        <h1 className={styles.pageTitle}>Historico de Versoes do Projeto</h1>
        <p className={styles.pageDescription}>
          Consulte o registro cronologico de cada atualizacao publicada no Guia de Sobrevivencia da FT, com melhorias, adicoes de conteudo e correcoes validadas pela comunidade academica da Faculdade de Tecnologia da Unicamp.
        </p>
      </header>

      {/* Linha do Tempo das Versões */}
      <section className={styles.timeline} aria-label="Linha do tempo de versoes">
        {versionsData.map((rel) => (
          <article key={rel.tag} className={styles.timelineItem}>
            <div className={styles.timelineMarker} aria-hidden="true" />
            <div className={styles.releaseCard}>
              <div className={styles.cardHeader}>
                <div className={styles.versionTagGroup}>
                  <span className={styles.versionBadge}>{rel.tag}</span>
                  <span className={`${styles.releaseTypeBadge} ${styles[rel.type]}`}>
                    {rel.type}
                  </span>
                </div>
                <time className={styles.releaseDate}>{rel.date}</time>
              </div>

              <h2 className={styles.releaseTitle}>{rel.title}</h2>

              <ul className={styles.highlightsList}>
                {rel.highlights.map((item, index) => (
                  <li key={index} className={styles.highlightItem}>
                    <CheckCircle2 size={15} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={rel.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubLink}
                aria-label={`Ver release ${rel.tag} no GitHub em nova janela`}
              >
                <span>Ver release completa no GitHub</span>
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </section>

      {/* Seção Como Apoiar e Colaborar */}
      <section className={styles.supportSection} aria-label="Como apoiar o projeto">
        <div className={styles.supportHeader}>
          <HeartHandshake size={28} className={styles.supportIcon} aria-hidden="true" />
          <div>
            <h2 className={styles.supportTitle}>Como Apoiar e Ajudar o Projeto</h2>
          </div>
        </div>

        <p className={styles.supportDesc}>
          O Guia de Sobrevivencia da FT e uma iniciativa estudantil de codigo aberto feita por alunos e para alunos da Unicamp. Seu apoio e essencial para manter o catalogo atualizado, corrigir links quebrados e enriquecer os roteiros academicos.
        </p>

        <div className={styles.supportGrid}>
          <div className={styles.supportCard}>
            <div>
              <h3 className={styles.supportCardTitle}>Contribuir com Codigo ou Conteudo</h3>
              <p className={styles.supportCardText}>
                Abra uma issue para sugerir novos recursos, relatar correcoes ou enviar um Pull Request no repositorio oficial do projeto.
              </p>
            </div>
            <a
              href={PROJECT_CONTRIBUTING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.supportActionSecondary}
            >
              <Github size={16} aria-hidden="true" />
              <span>Abrir Repositorio no GitHub</span>
            </a>
          </div>

          <div className={styles.supportCard}>
            <div>
              <h3 className={styles.supportCardTitle}>Canal de Apoio e Contato Institucional</h3>
              <p className={styles.supportCardText}>
                Envie suas sugestoes, correcoes de disciplinas, duvidas ou propostas de colaboracao institucional diretamente por email.
              </p>
            </div>
            <a
              href={`mailto:${PROJECT_SUPPORT_EMAIL}?subject=Apoio%20ao%20Guia%20de%20Sobrevivencia%20FT`}
              className={styles.supportActionBtn}
            >
              <Mail size={16} aria-hidden="true" />
              <span>Enviar Email de Contato Institucional</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
