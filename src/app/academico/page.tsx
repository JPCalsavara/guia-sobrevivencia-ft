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
  FileText,
  Award,
  Moon,
  Calculator,
  Globe
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

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Matrícula Semestral e Turmas</h3>
              <p className={styles.ruleText}>
                Durante o período de inscrição em disciplinas, a escolha da turma correta depende da consulta ao Caderno de Horários da DAC. É nesse portal que você pesquisa cada disciplina ofertada para verificar as opções disponíveis e identificar qual turma corresponde ao seu curso e período.
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
                <span className={styles.gradeLinkTitle}>Consulta de turmas no Caderno de Horários da DAC</span>
                <span className={styles.gradeLinkDesc}>No momento de fazer sua matrícula, acesse este portal para pesquisar as disciplinas e conferir qual é a sua turma</span>
              </div>
              <a
                href="https://www.dac.unicamp.br/portal/caderno-de-horarios/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.gradeButton}
                aria-label="Acessar Caderno de Horários da DAC em nova janela"
              >
                <span>Caderno de Horários</span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>

            <div className={styles.gradeLinkBox} style={{ marginTop: '1rem' }}>
              <div>
                <span className={styles.gradeLinkTitle}>Acompanhe seu histórico oficial na Grade DAC Online</span>
                <span className={styles.gradeLinkDesc}>Consulte quais créditos já foram validados e o que falta integralizar</span>
              </div>
              <a
                href="https://grade.daconline.unicamp.br/login/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.gradeButton}
                aria-label="Acessar Grade DAC Online em nova janela"
              >
                <span>Acessar Grade DAC</span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sobrevivência em Cálculo I e Geometria Analítica */}
      <section className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Calculator size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Sobrevivência em Cálculo I e Geometria Analítica</h2>
              <p className={styles.cardSubtitle}>
                Método prático em quatro etapas para superar as maiores taxas de reprovação do primeiro ano
              </p>
            </div>
          </div>

          <div className={styles.rulesGrid}>
            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>1. Plantões Semanais de PAD e PED na FT</h3>
              <p className={styles.ruleText}>
                A faculdade disponibiliza monitores do Programa de Apoio Didático, alunos veteranos com excelente rendimento, e do Programa de Estágio Docente, alunos de pós-graduação. Comparecer semanalmente aos plantões tira dúvidas acumuladas e treina a resolução detalhada de exercícios antes das semanas de prova.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>2. O Banco de Provas Antigas do CDI</h3>
              <p className={styles.ruleText}>
                O estilo de cobrança dos professores da FT costuma seguir padrões consolidados ao longo dos anos. Obtenha as provas dos últimos três a cinco semestres com o Centro Acadêmico CDI ou com veteranos para simular o tempo de resolução e o formato exato das questões cobradas.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>3. A Regra das Quarenta e Oito Horas</h3>
              <p className={styles.ruleText}>
                Cálculo diferencial e álgebra linear exigem memória muscular e intuição algébrica. A melhor estratégia é resolver a lista de exercícios indicada pelo professor em até quarenta e oito horas após a aula teórica, evitando o acúmulo de matérias na véspera da avaliação.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>4. Videoaulas Didáticas e Simulados no NotebookLM</h3>
              <p className={styles.ruleText}>
                Utilize canais didáticos focados no passo a passo das equações, como Professor Aquino e Grings, para destravar dúvidas pontuais. Além disso, submeta o texto das listas de exercícios e suas anotações ao Google NotebookLM para gerar simulados e questionários interativos de autoavaliação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist de Formatura */}
      <section className={styles.sectionBlock}>
        <ChecklistFormatura />
      </section>

      {/* Horas Complementares versus Curricularização da Extensão */}
      <section className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <GraduationCap size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Horas Complementares versus Horas de Extensão</h2>
              <p className={styles.cardSubtitle}>
                Diferenças conceituais, formas de comprovação e regulamentos oficiais em PDF dos catálogos de Sistemas de Informação
              </p>
            </div>
          </div>

          <div className={styles.rulesGrid}>
            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>O Que São Atividades Complementares</h3>
              <p className={styles.ruleText}>
                São atividades extracurriculares que enriquecem o repertório formativo individual do estudante ao longo do curso. Incluem cursos livres online com certificado, participação como ouvinte em congressos acadêmicos e palestras, atuação em entidades estudantis como a Atria Empresa Júnior, LiUP, Semeia Code e Centro Acadêmico, além de monitorias acadêmicas e iniciação científica.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>O Que É a Curricularização da Extensão</h3>
              <p className={styles.ruleText}>
                Exigência legal regulamentada pela Unicamp que determina a dedicação de dez por cento da carga horária da graduação a ações com impacto direto na sociedade externa. Ao contrário das complementares, na extensão o estudante deve levar o conhecimento universitário para fora do campus, atuando em projetos comunitários, oficinas escolares ou iniciativas vinculadas à Pró-Reitoria de Extensão e Cultura.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Como Guardar e Comprovar os Certificados</h3>
              <p className={styles.ruleText}>
                Solicite sempre comprovantes com CNPJ da instituição emissora, assinatura digital ou física, data e discriminação da carga horária. Cada catálogo define limites máximos de horas por modalidade para evitar concentração em uma única atividade. A validação deve ser solicitada à coordenação do curso ou secretaria antes do semestre de colação de grau.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Como Identificar o Regulamento do Seu Catálogo</h3>
              <p className={styles.ruleText}>
                As regras exatas dependem do seu ano de ingresso na universidade. O catálogo 2018 segue a norma SI918, o catálogo 2019 adota a norma SI919 e os ingressantes a partir do catálogo 2020 cumprem as diretrizes integradas de extensão e atividades complementares estabelecidas na norma SI920.
              </p>
            </div>
          </div>

          <h3 className={styles.categoryTitle} style={{ marginTop: '2.5rem' }}>
            <FileText size={18} />
            Regulamentos Oficiais de Sistemas de Informação em PDF
          </h3>

          <div className={styles.pdfGrid}>
            <a
              href="https://www3.ft.unicamp.br/sites/default/files/graduacao/RegulamentoSI918_1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.pdfCard}
            >
              <div>
                <span className={styles.pdfBadge}>
                  <FileText size={14} />
                  <span>PDF Oficial</span>
                </span>
                <h4 className={styles.pdfCardTitle} style={{ marginTop: '0.75rem' }}>
                  Regulamento SI918, Catálogo 2018
                </h4>
                <p className={styles.pdfCardDesc}>
                  Tabela de pontuação e critérios de convalidação de horas complementares para estudantes ingressantes no catálogo 2018.
                </p>
              </div>
              <span className={styles.pdfCardAction}>
                <span>Visualizar Documento</span>
                <ExternalLink size={14} />
              </span>
            </a>

            <a
              href="https://www3.ft.unicamp.br/sites/default/files/graduacao/RegulamentoSI919.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.pdfCard}
            >
              <div>
                <span className={styles.pdfBadge}>
                  <FileText size={14} />
                  <span>PDF Oficial</span>
                </span>
                <h4 className={styles.pdfCardTitle} style={{ marginTop: '0.75rem' }}>
                  Regulamento SI919, Catálogo 2019
                </h4>
                <p className={styles.pdfCardDesc}>
                  Normativa detalhada com os limites de horas por categoria e documentação exigida para os alunos do catálogo 2019.
                </p>
              </div>
              <span className={styles.pdfCardAction}>
                <span>Visualizar Documento</span>
                <ExternalLink size={14} />
              </span>
            </a>

            <a
              href="https://www3.ft.unicamp.br/sites/default/files/graduacao/RegulamentoSI920_0.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.pdfCard}
            >
              <div>
                <span className={styles.pdfBadge}>
                  <FileText size={14} />
                  <span>PDF Oficial</span>
                </span>
                <h4 className={styles.pdfCardTitle} style={{ marginTop: '0.75rem' }}>
                  Regulamento SI920, Catálogo 2020 em Diante
                </h4>
                <p className={styles.pdfCardDesc}>
                  Diretrizes completas incorporando a curricularização da extensão universitária e o quadro de horas complementares atualizado.
                </p>
              </div>
              <span className={styles.pdfCardAction}>
                <span>Visualizar Documento</span>
                <ExternalLink size={14} />
              </span>
            </a>
          </div>
        </div>
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

      {/* Transição para o Noturno no BSI */}
      <section className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Moon size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Transição para o Noturno no BSI: Como Concluir em Quatro Anos</h2>
              <p className={styles.cardSubtitle}>
                Estratégias com equivalências em TADS, adiantamento de matérias e os alertas reais de sobrecarga
              </p>
            </div>
          </div>

          <div className={styles.rulesGrid}>
            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Equivalências Oficiais com TADS no Noturno</h3>
              <p className={styles.ruleText}>
                Disciplinas estruturantes como Bancos de Dados, Engenharia de Software, Redes de Computadores e Programação Web possuem turmas equivalentes noturnas em TADS. No período de alteração de matrícula do e-DAC, o estudante de BSI pode solicitar matrícula nessas turmas noturnas para liberar o período diurno para o estágio.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Adiantamento de Créditos no Ciclo Básico</h3>
              <p className={styles.ruleText}>
                Para esvaziar a grade diurna a partir do quinto semestre sem prorrogar a graduação, é fundamental adiantar matérias nos primeiros quatro semestres e cursar eletivas noturnas na FT ou na FCA. Manter o CR alto garante prioridade no e-DAC para conquistar vagas concorridas nas turmas noturnas.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>O Gargalo das Matérias Exclusivas de BSI</h3>
              <p className={styles.ruleText}>
                Determinadas disciplinas obrigatórias do catálogo de BSI não possuem correspondente noturna em TADS e só são ofertadas durante o dia, como matérias de governança de TI, cálculo numérico ou modelagem avançada. O aluno precisará planejar com antecedência para cursá-las em horários com janela livre ou alinhar acordos de presença e horários flexíveis com a empresa de estágio.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>O Alerta Realista: Sobrecarga e Rotina</h3>
              <p className={styles.ruleText}>
                Cursar todas as matérias restantes exclusivamente à noite e concluir em quatro anos significa encarar cinco a seis disciplinas por semestre das dezenove às vinte e duas horas e trinta minutos, logo após seis a oito horas diárias de estágio corporativo. É uma rotina pesada que exige planejamento de saúde e foco aos fins de semana.
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
            <Award size={18} />
            Seleção por Nota: CR, Reprovações e Distribuição de Bolsas
          </h3>

          <div className={styles.rulesGrid}>
            <div className={styles.ruleCard}>
              <h4 className={styles.ruleTitle}>Composição da Nota no Edital PIBIC</h4>
              <p className={styles.ruleText}>
                A Pró-Reitoria de Pesquisa avalia as propostas com base em três pilares ponderados: o mérito acadêmico do estudante calculado pelo Coeficiente de Rendimento, a qualidade e viabilidade do plano de pesquisa de doze meses, e o currículo Lattes do docente orientador. A combinação dessas notas gera a classificação final do projeto.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h4 className={styles.ruleTitle}>A Linha de Corte das Bolsas Pagas</h4>
              <p className={styles.ruleText}>
                As cotas financeiras de bolsas custeadas pelo CNPq e pela Unicamp são limitadas. Elas são concedidas aos projetos com as maiores pontuações no ranking geral até o esgotamento do orçamento disponível para cada faculdade e grande área do conhecimento.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h4 className={styles.ruleTitle}>Bolsa Remunerada versus Modalidade Voluntária</h4>
              <p className={styles.ruleText}>
                Quando uma proposta possui mérito científico aprovado pela comissão avaliadora mas a nota combinada não atinge a linha de corte das bolsas remuneradas, o projeto é contemplado na modalidade Iniciação Científica Voluntária. O estudante executa a pesquisa normalmente, recebe certificado oficial emitido pela Unicamp e valida créditos curriculares, apenas sem a remuneração mensal.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h4 className={styles.ruleTitle}>Impacto de Reprovações no PIBIC e FAPESP</h4>
              <p className={styles.ruleText}>
                No PIBIC, reprovações recentes ou por falta penalizam a pontuação do componente acadêmico do candidato, derrubando a colocação no ranking e podendo tirar a bolsa remunerada. Na FAPESP, o critério é ainda mais severo: reprovações não justificadas em disciplinas ou rendimento escolar mediano levam com frequência à rejeição sumária da solicitação de bolsa, pois a agência exige histórico de excelência continuada.
              </p>
            </div>
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

          {/* Fontes Oficiais e Referências */}
          <h3 className={styles.categoryTitle} style={{ marginTop: '2.5rem' }}>
            <ExternalLink size={18} />
            Fontes Oficiais e Regulamentações da Pesquisa
          </h3>

          <div className={styles.refLinksGrid}>
            <a
              href="https://www.prp.unicamp.br/pibic"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.refCard}
            >
              <div className={styles.refCardHeader}>
                <span className={styles.refCardTitle}>
                  Portal PIBIC da Pró-Reitoria de Pesquisa
                </span>
                <ExternalLink size={16} />
              </div>
              <p className={styles.refCardDesc}>
                Editais oficiais anuais do PIBIC e PIBITI na Unicamp, cronogramas de inscrição, critérios de avaliação de mérito e modelos de relatórios parciais e finais.
              </p>
              <span className={styles.refCardMeta}>prp.unicamp.br/pibic</span>
            </a>

            <a
              href="https://fapesp.br/bolsas/ic"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.refCard}
            >
              <div className={styles.refCardHeader}>
                <span className={styles.refCardTitle}>
                  Normas de Iniciação Científica da FAPESP
                </span>
                <ExternalLink size={16} />
              </div>
              <p className={styles.refCardDesc}>
                Instruções para bolsas de IC, exigências de dedicação exclusiva, valores mensais vigentes, reserva técnica e critérios de análise do histórico escolar.
              </p>
              <span className={styles.refCardMeta}>fapesp.br/bolsas/ic</span>
            </a>

            <a
              href="https://sage.fapesp.br"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.refCard}
            >
              <div className={styles.refCardHeader}>
                <span className={styles.refCardTitle}>
                  Sistema SAGe FAPESP
                </span>
                <ExternalLink size={16} />
              </div>
              <p className={styles.refCardDesc}>
                Plataforma oficial para submissão contínua de projetos de pesquisa, cadastro de orientadores e estudantes, envio de documentação e acompanhamento de pareceres.
              </p>
              <span className={styles.refCardMeta}>sage.fapesp.br</span>
            </a>

            <a
              href="https://www.ft.unicamp.br/pesquisa"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.refCard}
            >
              <div className={styles.refCardHeader}>
                <span className={styles.refCardTitle}>
                  Comissão de Pesquisa da FT Unicamp
                </span>
                <ExternalLink size={16} />
              </div>
              <p className={styles.refCardDesc}>
                Página da Comissão de Pesquisa da Faculdade de Tecnologia, contendo o registro de projetos de pesquisa voluntária, laboratórios locais e suporte docente.
              </p>
              <span className={styles.refCardMeta}>ft.unicamp.br/pesquisa</span>
            </a>

            <a
              href="https://www.gov.br/cnpq"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.refCard}
            >
              <div className={styles.refCardHeader}>
                <span className={styles.refCardTitle}>
                  Normas do CNPq sobre Bolsas e Estágio
                </span>
                <ExternalLink size={16} />
              </div>
              <p className={styles.refCardDesc}>
                Resolução Normativa 017 de 2006 e Portaria Conjunta CAPES e CNPq 1 de 2023, que regulamentam a possibilidade de acúmulo de bolsa de IC com estágio profissional remunerado.
              </p>
              <span className={styles.refCardMeta}>gov.br/cnpq</span>
            </a>
          </div>
        </div>
      </section>

      {/* Editais da DERI e Bolsas de Intercâmbio */}
      <section className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Globe size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Editais da DERI: Como Conseguir Bolsas de Intercâmbio</h2>
              <p className={styles.cardSubtitle}>
                Oportunidades de mobilidade internacional financiadas pela Unicamp mesmo em cenários de oscilação da BAPE
              </p>
            </div>
          </div>

          <div className={styles.rulesGrid}>
            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Bolsas Santander de Mobilidade Internacional</h3>
              <p className={styles.ruleText}>
                Editais anuais concorridos promovidos em parceria com o Santander Universidades, como o Santander Graduação e Top Espanha. Concedem auxílio financeiro direto em dinheiro e passagens para alunos com bom histórico acadêmico realizarem intercâmbio de um semestre ou cursos intensivos de idioma e cultura.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Programa Erasmus Mais com a Europa</h3>
              <p className={styles.ruleText}>
                Editais vinculados a fundos da União Europeia em parceria com universidades de Portugal, Espanha, França e Alemanha. As bolsas oferecem repasses mensais em euros para custeio de moradia e alimentação, além de isenção total das taxas escolares na instituição europeia.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Rede AUGM: Mobilidade na América Latina</h3>
              <p className={styles.ruleText}>
                O Programa Escala Estudantil da Associação de Universidades do Grupo Montevidéu reúne universidades de destaque na Argentina, Uruguai, Chile, Paraguai e Bolívia. A universidade receptora assume o compromisso de garantir acomodação e alimentação gratuitas ao estudante durante todo o intercâmbio.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Acordos Bilaterais com Isenção de Mensalidades</h3>
              <p className={styles.ruleText}>
                A Unicamp mantém centenas de convênios diretos com universidades na América do Norte, Europa e Ásia. Mesmo nos editais sem ajuda de custo mensal, o estudante fica totalmente isento das mensalidades acadêmicas que costumam custar milhares de dólares por período no exterior.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Como Preparar um Perfil Altamente Competitivo</h3>
              <p className={styles.ruleText}>
                Os editais da DERI classificam os candidatos principalmente pelo Coeficiente de Rendimento, sendo recomendado manter CR superior a sete zero ou sete cinco, e pelo Coeficiente de Progressão entre quarenta e oitenta por cento. A proficiência em idioma estrangeiro pode ser comprovada por testes gratuitos ou subsidiados realizados no Centro de Ensino de Línguas da Unicamp.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Acompanhamento Contínuo de Editais</h3>
              <p className={styles.ruleText}>
                Os editais abrem ao longo de todo o ano letivo com janelas específicas para cada hemisfério e universidade parceira. Acesse com frequência o portal da DERI e cadastre-se nos boletins informativos da Diretoria para não perder os prazos de inscrição.
              </p>
            </div>
          </div>

          <div className={styles.gradeLinkBox} style={{ marginTop: '1.5rem' }}>
            <div>
              <span className={styles.gradeLinkTitle}>Portal Oficial da Diretoria Executiva de Relações Internacionais DERI</span>
              <span className={styles.gradeLinkDesc}>Consulte os editais abertos, convênios vigentes e calendários de inscrição de intercâmbio</span>
            </div>
            <a
              href="https://www.internationaloffice.unicamp.br/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.gradeButton}
              aria-label="Acessar portal da DERI em nova janela"
            >
              <span>Acessar Portal DERI</span>
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
