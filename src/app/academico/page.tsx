'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TableBsiTads } from '@/components/TableBsiTads/TableBsiTads';
import { ChecklistFormatura } from '@/components/ChecklistFormatura/ChecklistFormatura';
import {
  BookOpen,
  TrendingUp,
  ExternalLink,
  ShieldAlert,
  GraduationCap,
  FlaskConical,
  Calendar,
  Mail,
  Copy,
  Check,
  CheckCircle2,
  Clock,
  FileText
} from 'lucide-react';
import { useClipboardCopy } from '@/hooks/useClipboardCopy';
import styles from './academico.module.scss';

const emailTemplateText = `Prezado Professor [Nome do Docente],

Meu nome é [Seu Nome Completo], sou estudante do [Xº] semestre do curso de [Sistemas de Informação ou Análise e Desenvolvimento de Sistemas] na Faculdade de Tecnologia da Unicamp, RA [Seu RA].

Acompanho suas publicações acadêmicas e possuo grande interesse de pesquisa nas áreas de [citar a linha de pesquisa ou laboratório do professor, por exemplo: Inteligência Artificial, Sistemas Distribuídos, Otimização ou Engenharia de Software].

Gostaria de verificar a oportunidade de desenvolver um projeto de Iniciação Científica sob sua orientação, seja vinculado a editais institucionais como o PIBIC ou como pesquisador voluntário em seu grupo de estudos. Possuo disponibilidade de [15 a 20] horas semanais para dedicação às atividades.

Anexo a este e-mail meu histórico escolar atualizado emitido pelo e-DAC e meu currículo para apreciação. Caso seja oportuno, coloco-me à disposição para uma conversa presencial na FT ou por videochamada.

Agradeço pela atenção e pelo tempo dispensado.

Atenciosamente,
[Seu Nome Completo]
RA: [Seu RA]
E-mail: [seu.email]@dac.unicamp.br`;

export default function AcademicoPage() {
  const { copied, copy } = useClipboardCopy();

  const handleCopyEmail = () => {
    copy(emailTemplateText);
  };

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

      {/* Iniciação Científica e Pesquisa na FT */}
      <section className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <FlaskConical size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Iniciação Científica e Pesquisa na FT</h2>
              <p className={styles.cardSubtitle}>
                Linha do tempo oficial, compatibilidade com estágio, preparação de projetos e abordagem de orientadores
              </p>
            </div>
          </div>

          <h3 className={styles.categoryTitle}>
            <Calendar size={18} />
            Linha do Tempo Anual da Iniciação Científica
          </h3>

          <div className={styles.timelineGrid}>
            <div className={styles.timelineItem}>
              <span className={styles.timelineBadge}>Janeiro a Março</span>
              <h4 className={styles.timelineTitle}>1. Mapeamento e Primeiro Contato</h4>
              <p className={styles.timelineDesc}>
                Buscar linhas de pesquisa dos docentes da FT, consultar o Lattes e enviar e-mail formal manifestando interesse acadêmico.
              </p>
            </div>

            <div className={styles.timelineItem}>
              <span className={styles.timelineBadge}>Março a Maio</span>
              <h4 className={styles.timelineTitle}>2. Inscrição e Submissão</h4>
              <p className={styles.timelineDesc}>
                Período oficial de submissão do plano de pesquisa no edital PIBIC e PIBITI via PRP Unicamp ou submissão FAPESP contínua.
              </p>
            </div>

            <div className={styles.timelineItem}>
              <span className={styles.timelineBadge}>Agosto</span>
              <h4 className={styles.timelineTitle}>3. Início da Vigência</h4>
              <p className={styles.timelineDesc}>
                Divulgação dos resultados, assinatura do termo de outorga e início oficial da bolsa com reuniões de alinhamento com o orientador.
              </p>
            </div>

            <div className={styles.timelineItem}>
              <span className={styles.timelineBadge}>Fevereiro</span>
              <h4 className={styles.timelineTitle}>4. Relatório Parcial</h4>
              <p className={styles.timelineDesc}>
                Entrega obrigatória do relatório semestral para avaliação do progresso dos experimentos e adequação do cronograma inicial.
              </p>
            </div>

            <div className={styles.timelineItem}>
              <span className={styles.timelineBadge}>Julho a Outubro</span>
              <h4 className={styles.timelineTitle}>5. Relatório Final e Congresso</h4>
              <p className={styles.timelineDesc}>
                Conclusão dos doze meses, entrega do relatório final e apresentação obrigatória de pôster no Congresso de Iniciação Científica da Unicamp.
              </p>
            </div>
          </div>

          <h3 className={styles.categoryTitle}>
            <Clock size={18} />
            Matriz de Modalidades e Compatibilidade com Estágio
          </h3>

          <div className={styles.matrixWrapper}>
            <table className={styles.matrixTable}>
              <thead>
                <tr>
                  <th>Modalidade</th>
                  <th>Duração e Carga</th>
                  <th>Compatibilidade com Estágio</th>
                  <th>Requisitos e Benefícios</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>PIBIC e PIBITI CNPq Unicamp</strong>
                  </td>
                  <td>12 meses, de agosto a julho. 20 horas semanais.</td>
                  <td>
                    <span className={styles.tagAllowed}>Permitido com anuência</span>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.8125rem' }}>
                      As normas do CNPq e da PRP Unicamp autorizam estágio simultâneo, desde que haja compatibilidade comprovada de horários, bom rendimento nas disciplinas e concordância formal por escrito do professor orientador.
                    </p>
                  </td>
                  <td>
                    Edital anual, histórico escolar com bom rendimento. Confere bolsa mensal, pontuação em seleções de mestrado e créditos de atividades complementares.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>FAPESP Fluxo Contínuo</strong>
                  </td>
                  <td>6 a 12 meses renováveis. Dedicação exclusiva.</td>
                  <td>
                    <span className={styles.tagForbidden}>Proibido</span>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.8125rem' }}>
                      A FAPESP exige dedicação estrita à pesquisa. É expressamente vedado receber remuneração por estágio profissional, emprego formal ou outra bolsa simultânea.
                    </p>
                  </td>
                  <td>
                    Submissão contínua no sistema SAGe. Exige excelente histórico escolar, ausência de reprovações recentes e plano detalhado. Oferece bolsa com valor superior e reserva técnica.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Iniciação Científica Voluntária PIC</strong>
                  </td>
                  <td>6 a 12 meses flexíveis. 10 a 20 horas semanais.</td>
                  <td>
                    <span className={styles.tagFlexible}>Totalmente liberado</span>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.8125rem' }}>
                      Sem vínculo financeiro com agências de fomento, não há impedimento legal para estagiar ou trabalhar em regime CLT simultaneamente.
                    </p>
                  </td>
                  <td>
                    Inscrição simplificada junto à Comissão de Pesquisa da FT. Garante certificado oficial de pesquisador emitido pela Unicamp e pontuação curricular.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={styles.categoryTitle}>
            <FileText size={18} />
            Preparação, Escolha do Tema e Linhas de Pesquisa
          </h3>

          <div className={styles.rulesGrid}>
            <div className={styles.ruleCard}>
              <h4 className={styles.ruleTitle}>Você Não Precisa Ter Uma Ideia Pronta</h4>
              <p className={styles.ruleText}>
                O maior receio dos calouros é achar que precisam propor um projeto inovador do zero. Na prática acadêmica, os professores já possuem linhas de pesquisa estabelecidas, projetos temáticos com financiamento e demandas abertas. Sua função é demonstrar interesse genuíno, pontualidade e disposição para aprender as ferramentas e metodologias indicadas.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h4 className={styles.ruleTitle}>Mapeando Docentes no Currículo Lattes</h4>
              <p className={styles.ruleText}>
                Acesse a Plataforma Lattes do CNPq ou o site da FT para consultar o histórico dos professores. Analise os artigos mais recentes publicados, as orientações de mestrado concluídas e os projetos em andamento para entender o foco de atuação de cada docente antes de iniciar contato.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h4 className={styles.ruleTitle}>Docentes e Áreas na Computação da FT</h4>
              <p className={styles.ruleText}>
                A FT reúne especialistas em diversas frentes: redes e sistemas operacionais com o professor Plinio Vilela, otimização e algoritmos com o professor Luis Meira, computação de alto desempenho e sistemas distribuídos com o professor Andre Gradvohl, visão computacional com o professor Marco Carvalho, e interface humano-computador e acessibilidade com o professor Celmar Silva.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h4 className={styles.ruleTitle}>Iniciação Científica e TCC</h4>
              <p className={styles.ruleText}>
                Desenvolver iniciação científica durante o terceiro ou quarto semestre acelera expressivamente a elaboração do Trabalho de Conclusão de Curso. A metodologia de pesquisa, os experimentos e a revisão bibliográfica construídos durante o projeto podem servir como alicerce direto para a monografia do TCC.
              </p>
            </div>
          </div>

          {/* Modelo de E-mail de Abordagem */}
          <div className={styles.emailBox}>
            <div className={styles.emailHeader}>
              <div className={styles.emailHeaderTitle}>
                <Mail size={18} />
                <span>Modelo de E-mail para Primeiro Contato com Orientador</span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className={`${styles.copyEmailBtn} ${copied ? styles.copied : ''}`}
                title="Copiar modelo de e-mail"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? 'Copiado para a área de transferência' : 'Copiar Modelo'}</span>
              </button>
            </div>
            <pre className={styles.emailPre}>{emailTemplateText}</pre>
          </div>
        </div>
      </section>
    </div>
  );
}
