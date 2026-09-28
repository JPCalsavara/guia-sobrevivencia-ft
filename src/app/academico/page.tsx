'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TableBsiTads } from '@/components/TableBsiTads/TableBsiTads';
import { ChecklistFormatura } from '@/components/ChecklistFormatura/ChecklistFormatura';
import {
  BookOpen,
  TrendingUp,
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
            <span>Guia Acadêmico e Regras Curriculares</span>
          </div>

          <h1 className={styles.pageTitle}>
            Estrutura Acadêmica, Coeficientes e Estratégia de Formatura na FT
          </h1>

          <p className={styles.pageDescription}>
            Compreenda os coeficientes CR e CP, as diferenças entre os cursos de computação, os prazos regulamentares da DAC e como planejar sua grade para conciliar estudos e estágio com segurança.
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
              <h2 className={styles.cardTitle}>Coeficientes Acadêmicos e Vetores da DAC</h2>
              <p className={styles.cardSubtitle}>
                Entenda as métricas que definem sua prioridade de matrícula e o aproveitamento de créditos
              </p>
            </div>
          </div>

          <div className={styles.rulesGrid}>
            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>CR, Coeficiente de Rendimento</h3>
              <p className={styles.ruleText}>
                Média ponderada de todas as notas obtidas pelo estudante ao longo da graduação, ponderada pelos créditos de cada disciplina. O CR é o critério decisivo na classificação de vagas disputadas no e-DAC, seleção de bolsas de pesquisa e editais de intercâmbio.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>CP, Coeficiente de Progressão</h3>
              <p className={styles.ruleText}>
                Percentual acumulado do curso já concluído em relação ao total de créditos exigidos no catálogo. O CP é utilizado em processos seletivos de estágio e transferências internas entre unidades.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Vetores de Carga Horária</h3>
              <p className={styles.ruleText}>
                Cada disciplina possui quatro vetores de horas semanais: Teoria, Prática, Laboratório e Orientação. Um vetor dois zero zero dois representa duas horas de aulas teóricas em sala e duas horas de atividades práticas ou de orientação autônoma.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Créditos e Horas Semestrais</h3>
              <p className={styles.ruleText}>
                Cada crédito na Unicamp corresponde a quinze horas de atividades ao longo do semestre letivo. Uma matéria com quatro créditos representa sessenta horas de dedicação semestral, distribuídas em quatro horas semanais de aula.
              </p>
            </div>
          </div>

          <div className={styles.eletivasArea}>
            <h3 className={styles.eletivasTitle}>Eletivas do Catálogo versus Eletivas Livres</h3>
            <p className={styles.eletivasDesc}>
              Para se formar, você precisará cumprir créditos eletivos além das disciplinas obrigatórias:
            </p>
            <ul className={styles.eletivasList}>
              <li>
                <strong>Eletivas do Catálogo:</strong> Disciplinas técnicas oferecidas pela própria FT, como tópicos em computação em nuvem, bancos de dados avançados e mineração de dados. Elas abatem diretamente a cota de eletivas técnicas do curso.
              </li>
              <li>
                <strong>Eletivas Livres:</strong> Disciplinas cursadas em qualquer instituto da Unicamp, incluindo cursos na FCA em Limeira ou no Instituto de Computação em Barão Geraldo, além de línguas estrangeiras no Centro de Ensino de Línguas.
              </li>
            </ul>

            <div className={styles.gradeLinkBox}>
              <div>
                <span className={styles.gradeLinkTitle}>Acompanhe seu histórico oficial na Grade DAC Online</span>
                <span className={styles.gradeLinkDesc}>Consulte quais créditos já foram validados e o que falta integralizar</span>
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

      {/* Estratégia de Desacelerar o Curso */}
      <section className={styles.sectionBlock}>
        <div className={styles.strategyCard}>
          <div className={styles.strategyHeader}>
            <ShieldAlert size={24} className={styles.strategyIcon} />
            <div>
              <h2 className={styles.strategyTitle}>
                Estratégia de Curso: Por Que Concluir a Graduação sem Estágio Pode Prejudicar Sua Carreira
              </h2>
              <p className={styles.strategySub}>
                Entenda como a legislação de estágio e a dinâmica do mercado de tecnologia influenciam o momento ideal de formatura
              </p>
            </div>
          </div>

          <div className={styles.strategyBody}>
            <div className={styles.strategyPoint}>
              <h3 className={styles.pointTitle}>A Barreira das Vagas de Desenvolvedor Júnior</h3>
              <p className={styles.pointDesc}>
                A maioria das vagas de desenvolvedor júnior no mercado nacional exige experiência comprovada prévia de um a dois anos em projetos corporativos. Programas de estágio aceitam estudantes em formação, pagam bolsas competitivas e possuem índices elevados de efetivação.
              </p>
            </div>

            <div className={styles.strategyPoint}>
              <h3 className={styles.pointTitle}>A Lei do Estágio, Lei 11.788 de 2008</h3>
              <p className={styles.pointDesc}>
                O vínculo de estágio exige matrícula regular ativa na universidade. No momento em que o aluno cola grau, o contrato de estágio é compulsoriamente rescindido por determinação legal. Se a empresa não efetivar imediatamente, o recém-formado perde o direito de concorrer a novas vagas de estágio.
              </p>
            </div>

            <div className={styles.strategyPoint}>
              <h3 className={styles.pointTitle}>Como Estender a Graduação com Segurança</h3>
              <p className={styles.pointDesc}>
                O catálogo de Sistemas de Informação estabelece prazo padrão de oito semestres e teto máximo de quatorze semestres. Para TADS, o prazo padrão é de seis semestres e o teto é de dez semestres. Há ampla margem antes de risco de jubilamento. Desacelerar a matrícula para duas ou três matérias por semestre viabiliza um estágio diurno de alto rendimento sem esgotamento mental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Iniciação Científica */}
      <section className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <TrendingUp size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Iniciação Científica na FT: PIBIC versus FAPESP</h2>
              <p className={styles.cardSubtitle}>
                Como iniciar na pesquisa acadêmica, prazos de submissão e linhas de pesquisa dos docentes
              </p>
            </div>
          </div>

          <div className={styles.rulesGrid}>
            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>PIBIC CNPq Unicamp</h3>
              <p className={styles.ruleText}>
                Edital institucional anual gerenciado pela Pró-Reitoria de Pesquisa com inscrições entre março e maio. A vigência é de doze meses, de agosto a julho. Permite iniciar na pesquisa acadêmica sob orientação direta de um professor da faculdade.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Bolsa FAPESP de Fluxo Contínuo</h3>
              <p className={styles.ruleText}>
                Submetida a qualquer época do ano pelo sistema SAGe. Exige histórico escolar sem reprovações recentes, Coeficiente de Rendimento elevado e estabelece regime estrito de dedicação exclusiva, sem possibilidade de estágio concorrente.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Como Iniciar o Contato</h3>
              <p className={styles.ruleText}>
                A iniciação científica depende do interesse ativo do estudante. Aproxime-se dos docentes ao final das aulas ou envie mensagem apresentando seu interesse em temas de pesquisa e disponibilidade de dedicação semanal.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Linhas de Pesquisa na Computação da FT</h3>
              <p className={styles.ruleText}>
                A faculdade conta com docentes atuando em redes de computadores e sistemas operacionais com o professor Plinio Vilela, otimização com o professor Luis Meira, sistemas distribuídos com o professor Andre Gradvohl, visão computacional com o professor Marco Carvalho e interface humano-computador com o professor Celmar Silva.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
