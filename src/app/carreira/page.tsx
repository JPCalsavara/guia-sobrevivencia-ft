'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LatexCodeBlock } from '@/components/LatexCodeBlock/LatexCodeBlock';
import {
  Briefcase,
  Calendar,
  Code2,
  Cloud,
  FileText,
  Linkedin,
  Github,
  Award,
  ExternalLink,
  Layers
} from 'lucide-react';
import styles from './carreira.module.scss';

export default function CarreiraPage() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <section className={styles.pageHeader}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.headerBadge}>
            <Briefcase size={16} />
            <span>Carreira, Estagio e Mercado de Tecnologia</span>
          </div>

          <h1 className={styles.pageTitle}>
            Planejamento Profissional, Processos Seletivos e Portfólio Tecnico
          </h1>

          <p className={styles.pageDescription}>
            Entenda a sazonalidade de contratacoes na regiao, prepare seu curriculo em LaTeX otimizado para triagens automaticas e conheca os caminhos para conquistar estagios competitivos.
          </p>
        </motion.div>
      </section>

      {/* Sazonalidade e Feiras de Estagio */}
      <section className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Calendar size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Sazonalidade de Contratacoes e Feiras de Carreiras</h2>
              <p className={styles.cardSubtitle}>
                O calendario anual das principais empresas de tecnologia e instituicoes financeiras
              </p>
            </div>
          </div>

          <div className={styles.timelineGrid}>
            <div className={styles.timelineItem}>
              <span className={styles.periodBadge}>Agosto a Outubro</span>
              <h3 className={styles.timelineTitle}>Janela Principal de Contratacao</h3>
              <p className={styles.timelineDesc}>
                Periodo em que ocorrem as maiores feiras de estagio da Unicamp e os eventos da Liestag em Limeira. Grandes contratantes como CI e T em Campinas, alem de bancos como Itau, Bradesco e C6 Bank, abrem suas turmas para inicio no primeiro trimestre do ano seguinte.
              </p>
            </div>

            <div className={styles.timelineItem}>
              <span className={styles.periodBadge}>Marco a Maio</span>
              <h3 className={styles.timelineTitle}>Vagas Remanescentes e Medio Porte</h3>
              <p className={styles.timelineDesc}>
                Abertura de vagas para preenchimento de posicoes de meio de ano e oportunidades em empresas do polo regional de Limeira, Americana, Piracicaba e Santa Barbara d Oeste.
              </p>
            </div>

            <div className={styles.timelineItem}>
              <span className={styles.periodBadge}>Requisito Legal</span>
              <h3 className={styles.timelineTitle}>Elegibilidade Institucional</h3>
              <p className={styles.timelineDesc}>
                Pela legislacao vigente e pelas normas da DAC, o estudante precisa estar regularmente matriculado e cursando a partir do terceiro semestre letivo para estagios nao obrigatorios, respeitando o teto de trinta horas semanais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testes Tecnicos */}
      <section className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Code2 size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>O Que e Avaliado nos Testes Tecnicos de Entrada</h2>
              <p className={styles.cardSubtitle}>
                Padroes de questoes e exercicios praticos exigidos nas primeiras fases de selecao
              </p>
            </div>
          </div>

          <div className={styles.skillsGrid}>
            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Estruturas de Dados Fundamentais</h3>
              <p className={styles.skillDesc}>
                Dominio de tabelas hash e mapas chave valor para buscas em tempo constante, alem de manipulacao limpa de matrizes, listas encadeadas e pilhas.
              </p>
            </div>

            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Logica e Casos Limite</h3>
              <p className={styles.skillDesc}>
                Habilidade em estruturar lacos de repeticao eficientes, validacao de valores nulos, tratamento de colecoes vazias e complexidade assintotica de algoritmos.
              </p>
            </div>

            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Programacao Orientada a Objetos</h3>
              <p className={styles.skillDesc}>
                Modelagem de classes com responsabilidade unica, encapsulamento de regras de negocio e organizacao de entidades simulando servicos corporativos reais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculo em LaTeX */}
      <section className={styles.sectionBlock}>
        <div className={styles.latexHeader}>
          <FileText size={22} className={styles.headerIcon} />
          <div>
            <h2 className={styles.latexTitle}>Modelo Oficial de Curriculo Academico em LaTeX</h2>
            <p className={styles.latexSubtitle}>
              Curriculo de pagina unica em formato texto estruturado, compativel com leitores automaticos de triagem e adotado por estudantes de computacao
            </p>
          </div>
        </div>
        <LatexCodeBlock />
      </section>

      {/* GitHub e LinkedIn */}
      <section className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Layers size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Construcao de Presenca Profissional: LinkedIn e GitHub</h2>
              <p className={styles.cardSubtitle}>
                Como apresentar sua trajetoria tecnica de forma objetiva sem cliches vazios
              </p>
            </div>
          </div>

          <div className={styles.presenceGrid}>
            <div className={styles.presenceCard}>
              <div className={styles.presenceHeader}>
                <Linkedin size={20} className={styles.linkedinIcon} />
                <h3 className={styles.presenceTitle}>Diretrizes para o LinkedIn</h3>
              </div>
              <ul className={styles.presenceList}>
                <li>Utilize titulo objetivo focado em tecnologias praticadas, por exemplo: Graduando em Sistemas de Informacao na Unicamp, foco em Java, Spring Boot e React.</li>
                <li>Descreva projetos academicos detalhando o problema resolvido, as ferramentas utilizadas e os resultados alcancados.</li>
                <li>Conecte-se com veteranos da FT, membros da Atria Jr., Liestag e recrutadores das empresas que participam das feiras universitarias.</li>
              </ul>
            </div>

            <div className={styles.presenceCard}>
              <div className={styles.presenceHeader}>
                <Github size={20} className={styles.githubIcon} />
                <h3 className={styles.presenceTitle}>Diretrizes para o GitHub</h3>
              </div>
              <ul className={styles.presenceList}>
                <li>Mantenha dois ou tres repositorios principais fixados no perfil, cada um com instrucoes claras de instalacao e execucao local no arquivo README.</li>
                <li>Inclua capturas de tela das telas funcionais e diagramas simples de arquitetura nos repositorios destacados.</li>
                <li>Evite subir projetos compostos apenas por copias literais de exercicios de aula sem documentacao ou testes.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trilhas e Computacao em Nuvem */}
      <section className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Cloud size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Computacao em Nuvem na Graduacao e Vouchers Gratuitos</h2>
              <p className={styles.cardSubtitle}>
                Aproveite os convenios universitarios para estudar tecnologias de nuvem sem custo
              </p>
            </div>
          </div>

          <div className={styles.cloudGrid}>
            <div className={styles.cloudCard}>
              <h3 className={styles.cloudTitle}>Programas Academicos Disponiveis</h3>
              <p className={styles.cloudText}>
                Com seu email institucional terminado em dac unicamp br, voce tem acesso a programas como AWS Educate e Google Cloud Innovators, que disponibilizam creditos para laboratorios praticos na nuvem sem necessidade de cadastrar cartao de credito.
              </p>
            </div>

            <div className={styles.cloudCard}>
              <h3 className={styles.cloudTitle}>O Valor Real de Certificacoes Iniciais</h3>
              <p className={styles.cloudText}>
                Provas conceituais de entrada como AWS Cloud Practitioner ajudam na passagem por filtros iniciais de triagem em consultorias. Entretanto, o que consolida contratacoes tecnicas e a criacao de aplicacoes reais conteinerizadas com Docker e publicadas na nuvem.
              </p>
            </div>

            <div className={styles.cloudCard}>
              <h3 className={styles.cloudTitle}>Nunca Pague em Dolar por Provas Iniciais</h3>
              <p className={styles.cloudText}>
                Estudantes nao devem gastar recursos proprios com taxas de certificacoes basicas. Campanhas universitarias, maratonas academicas e cursos preparatorios no Coursera for Campus com frequencia distribuem vouchers integrais de gratuidade.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
