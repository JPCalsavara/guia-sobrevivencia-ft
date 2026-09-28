'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TableBsiTads } from '@/components/TableBsiTads/TableBsiTads';
import { ChecklistFormatura } from '@/components/ChecklistFormatura/ChecklistFormatura';
import {
  BookOpen,
  Calendar,
  AlertTriangle,
  Clock,
  TrendingUp,
  FileCheck2,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';
import styles from './academico.module.scss';

export default function AcademicoPage() {
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
            <BookOpen size={16} />
            <span>Guia Academico e Regras Curriculares</span>
          </div>

          <h1 className={styles.pageTitle}>
            Estrutura Academica, Coeficientes e Estrategia de Formatura na FT
          </h1>

          <p className={styles.pageDescription}>
            Compreenda os coeficientes CR e CP, as diferencas entre os cursos de computacao, os prazos regulamentares da DAC e como planejar sua grade para conciliar estudos e estagio com seguranca.
          </p>
        </motion.div>
      </section>

      {/* BSI vs TADS */}
      <section className={styles.sectionBlock}>
        <TableBsiTads />
      </section>

      {/* Regras da DAC e Coeficientes */}
      <section className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <TrendingUp size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Coeficientes Academicos e Vetores da DAC</h2>
              <p className={styles.cardSubtitle}>
                Entenda as metricas que definem sua prioridade de matricula e o aproveitamento de creditos
              </p>
            </div>
          </div>

          <div className={styles.rulesGrid}>
            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>CR, Coeficiente de Rendimento</h3>
              <p className={styles.ruleText}>
                Media ponderada de todas as notas obtidas pelo estudante ao longo da graduacao, ponderada pelos creditos de cada disciplina. O CR e o criterio decisivo na classificacao de vagas disputadas no e-DAC, selecao de bolsas de pesquisa e editais de intercambio.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>CP, Coeficiente de Progressao</h3>
              <p className={styles.ruleText}>
                Percentual acumulado do curso ja concluido em relacao ao total de creditos exigidos no catalogo. O CP e utilizado em processos seletivos de estagio e transferencias internas entre unidades.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Vetores de Carga Horaria</h3>
              <p className={styles.ruleText}>
                Cada disciplina possui quatro vetores de horas semanais: Teoria, Pratica, Laboratorio e Orientacao. Um vetor dois zero zero dois representa duas horas de aulas teoricas em sala e duas horas de atividades praticas ou de orientacao autônoma.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Creditos e Horas Semestrais</h3>
              <p className={styles.ruleText}>
                Cada credito na Unicamp corresponde a quinze horas de atividades ao longo do semestre letivo. Uma materia com quatro creditos representa sessenta horas de dedicacao semestral, distribuidas em quatro horas semanais de aula.
              </p>
            </div>
          </div>

          <div className={styles.eletivasArea}>
            <h3 className={styles.eletivasTitle}>Eletivas do Catalogo versus Eletivas Livres</h3>
            <p className={styles.eletivasDesc}>
              Para se formar, voce precisara cumprir creditos eletivos alem das disciplinas obrigatorias:
            </p>
            <ul className={styles.eletivasList}>
              <li>
                <strong>Eletivas do Catalogo:</strong> Disciplinas tecnicas oferecidas pela propria FT, como topicos em computacao em nuvem, bancos de dados avancados e mineracao de dados. Elas abatem diretamente a cota de eletivas tecnicas do curso.
              </li>
              <li>
                <strong>Eletivas Livres:</strong> Disciplinas cursadas em qualquer instituto da Unicamp, incluindo cursos na FCA em Limeira ou no Instituto de Computacao em Barao Geraldo, alem de linguas estrangeiras no Centro de Ensino de Linguas.
              </li>
            </ul>

            <div className={styles.gradeLinkBox}>
              <div>
                <span className={styles.gradeLinkTitle}>Acompanhe seu historico oficial na Grade DAC Online</span>
                <span className={styles.gradeLinkDesc}>Consulte quais creditos ja foram validados e o que falta integralizar</span>
              </div>
              <a
                href="https://grade.daconline.unicamp.br/login/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.gradeButton}
              >
                <span>Acessar Grade DAC</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist de Formatura */}
      <section className={styles.sectionBlock}>
        <ChecklistFormatura />
      </section>

      {/* Estrategia de Desacelerar o Curso */}
      <section className={styles.sectionBlock}>
        <div className={styles.strategyCard}>
          <div className={styles.strategyHeader}>
            <ShieldAlert size={24} className={styles.strategyIcon} />
            <div>
              <h2 className={styles.strategyTitle}>
                Estrategia de Curso: Por Que Concluir a Graduacao sem Estagio Pode Prejudicar Sua Carreira
              </h2>
              <p className={styles.strategySub}>
                Entenda como a legislacao de estagio e a dinamica do mercado de tecnologia influenciam o momento ideal de formatura
              </p>
            </div>
          </div>

          <div className={styles.strategyBody}>
            <div className={styles.strategyPoint}>
              <h3 className={styles.pointTitle}>A Barreira das Vagas de Desenvolvedor Junior</h3>
              <p className={styles.pointDesc}>
                A maioria das vagas de desenvolvedor junior no mercado nacional exige experiencia comprovada previa de um a dois anos em projetos corporativos. Programas de estagio aceitam estudantes em formacao, pagam bolsas competitivas e possuem indices elevados de efetivacao.
              </p>
            </div>

            <div className={styles.strategyPoint}>
              <h3 className={styles.pointTitle}>A Lei do Estagio, Lei 11.788 de 2008</h3>
              <p className={styles.pointDesc}>
                O vinculo de estagio exige matricula regular ativa na universidade. No momento em que o aluno cola grau, o contrato de estagio e compulsoriamente rescindido por determinacao legal. Se a empresa nao efetivar imediatamente, o recem-formado perde o direito de concorrer a novas vagas de estagio.
              </p>
            </div>

            <div className={styles.strategyPoint}>
              <h3 className={styles.pointTitle}>Como Estender a Graduacao com Seguranca</h3>
              <p className={styles.pointDesc}>
                O catalogo de Sistemas de Informacao estabelece prazo padrao de oito semestres e teto maximo de quatorze semestres. Para TADS, o prazo padrao e de seis semestres e o teto e de dez semestres. Ha ampla margem antes de risco de jubilamento. Desacelerar a matricula para duas ou tres materias por semestre viabiliza um estagio diurno de alto rendimento sem esgotamento mental.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
