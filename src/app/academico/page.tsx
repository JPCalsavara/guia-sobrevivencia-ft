'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TableBsiTads } from '@/components/TableBsiTads/TableBsiTads';
import { CurriculumGrids } from '@/components/CurriculumGrids/CurriculumGrids';
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
  Globe,
  Users,
  ClipboardCheck,
  GitMerge,
  Layers,
  AlertTriangle,
} from 'lucide-react';
import { useClipboardCopy } from '@/hooks/useClipboardCopy';
import { DocSidebar, TopicItem } from '@/components/DocSidebar/DocSidebar';
import { padComparisonData, ftInternshipProceduresData } from '@/data/academic';
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

const padEmailTemplateText = `Prezado Professor ou Professora [Nome do Docente],

Meu nome é [Seu Nome Completo], sou estudante do curso de [Sistemas de Informação ou Análise e Desenvolvimento de Sistemas] na Faculdade de Tecnologia da Unicamp, RA [Seu RA].

Concluí a disciplina [Código e Nome da Disciplina] no semestre [Xº semestre de 20XX] com bom aproveitamento e grande identificação com a ementa lecionada.

Escrevo para manifestar meu interesse em atuar como monitor do Programa de Apoio Didático, PAD, na sua turma no próximo período letivo. Tenho interesse tanto na modalidade com bolsa quanto na modalidade voluntária sem bolsa, com disponibilidade para realizar plantões de dúvidas presenciais ou remotos e apoiar a resolução de exercícios dos estudantes.

Anexo meu histórico escolar atualizado emitido pelo e-DAC para verificação do rendimento acadêmico na matéria.

Agradeço desde já pela atenção e coloco-me à disposição para conversar a respeito.

Atenciosamente,
[Seu Nome Completo]
RA: [Seu RA]
E-mail: [seu.email]@dac.unicamp.br`;

const academicTopics: TopicItem[] = [
  {
    id: 'bsi-vs-tads',
    title: 'BSI versus TADS',
    subtopics: [
      { id: 'bsi-vs-tads', title: 'Matriz Comparativa' },
      { id: 'grade-curricular', title: 'Grades Curriculares BSI e TADS' },
    ],
  },
  {
    id: 'coeficientes-dac',
    title: 'Coeficientes e Métricas DAC',
    subtopics: [
      { id: 'coeficientes-metricas', title: 'CR, CP e Vetores Horários' },
      { id: 'coeficientes-eletivas', title: 'Eletivas do Catálogo e Livres' },
    ],
  },
  {
    id: 'calculo-geometria',
    title: 'Cálculo I e Geometria Analítica',
    subtopics: [
      { id: 'calculo-plantoes', title: 'Plantões PAD e Provas Antigas' },
      { id: 'calculo-metodologia', title: 'Regra 48h e Simulados com IA' },
    ],
  },
  {
    id: 'checklist-formatura',
    title: 'Checklist de Formatura',
    subtopics: [
      { id: 'checklist-formatura', title: 'Etapas de Integralização' },
    ],
  },
  {
    id: 'monitoria-pad',
    title: 'Monitoria PAD na FT',
    subtopics: [
      { id: 'pad-requisitos', title: 'Requisitos e Atribuições' },
      { id: 'pad-comparativo', title: 'Remunerada versus Voluntária' },
      { id: 'pad-cronograma', title: 'Ciclo Semestral e Cronograma' },
      { id: 'pad-email', title: 'Modelo de E-mail de Contato' },
    ],
  },
  {
    id: 'horas-extensao',
    title: 'Horas e Extensão',
    subtopics: [
      { id: 'horas-conceitos', title: 'Complementares versus Extensão' },
      { id: 'horas-regulamentos', title: 'Regulamentos Oficiais em PDF' },
    ],
  },
  {
    id: 'estrategia-carreira',
    title: 'Estratégia e Estágio',
    subtopics: [
      { id: 'estrategia-carreira', title: 'Lei do Estágio e Formatura' },
      { id: 'procedimentos-estagio-ft', title: 'Procedimentos de Estágio na FT' },
    ],
  },
  {
    id: 'noturno-bsi',
    title: 'Transição Noturno no BSI',
    subtopics: [
      { id: 'noturno-bsi', title: 'Equivalências TADS e Rotina' },
    ],
  },
  {
    id: 'iniciacao-cientifica',
    title: 'Iniciação Científica',
    subtopics: [
      { id: 'ic-cronograma', title: 'Linha do Tempo Anual' },
      { id: 'ic-modalidades', title: 'PIBIC, FAPESP e Voluntária' },
      { id: 'ic-selecao', title: 'Critérios de Avaliação e Linha de Corte' },
      { id: 'ic-contato', title: 'Mapeamento e Modelo de Contato' },
    ],
  },
  {
    id: 'intercambio-deri',
    title: 'Intercâmbio e Editais DERI',
    subtopics: [
      { id: 'intercambio-fluxo', title: 'Fluxo em Seis Fases' },
      { id: 'intercambio-diferenciais', title: 'Diferenciais para Aprovação' },
      { id: 'intercambio-potsdam', title: 'Estudo de Caso Edital Potsdam' },
      { id: 'intercambio-bolsas', title: 'Modalidades de Bolsas' },
    ],
  },
];

export default function AcademicoPage() {
  const { copied: icCopied, copy: copyIcEmail } = useClipboardCopy();
  const { copied: padCopied, copy: copyPadEmail } = useClipboardCopy();

  const handleCopyEmail = () => {
    copyIcEmail(emailTemplateText);
  };

  const handleCopyPadEmail = () => {
    copyPadEmail(padEmailTemplateText);
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

          <nav className={styles.jumpNav} aria-label="Navegação rápida pelos tópicos acadêmicos">
            <a href="#bsi-vs-tads" className={styles.jumpPill}>BSI vs TADS</a>
            <a href="#coeficientes-dac" className={styles.jumpPill}>Coeficientes e CR</a>
            <a href="#checklist-formatura" className={styles.jumpPill}>Checklist Formatura</a>
            <a href="#monitoria-pad" className={styles.jumpPill}>Monitoria PAD</a>
            <a href="#horas-extensao" className={styles.jumpPill}>Horas e Extensão</a>
            <a href="#estrategia-carreira" className={styles.jumpPill}>Estratégia e Estágio</a>
            <a href="#noturno-bsi" className={styles.jumpPill}>Transição Noturno</a>
            <a href="#iniciacao-cientifica" className={styles.jumpPill}>Iniciação Científica</a>
            <a href="#intercambio-deri" className={styles.jumpPill}>Intercâmbio DERI</a>
          </nav>
        </motion.div>
      </section>

      {/* Conteúdo com Barra Lateral Esquerda */}
      <div className={styles.contentWithSidebar}>
        <aside className={styles.sidebarAside}>
          <DocSidebar topics={academicTopics} />
        </aside>

        <div className={styles.mainContentArea}>
          {/* BSI vs TADS */}
          <section id="bsi-vs-tads" className={styles.sectionBlock}>
            <TableBsiTads />
            <div id="grade-curricular" style={{ marginTop: '2.5rem' }}>
              <CurriculumGrids />
            </div>
          </section>

      {/* Regras da DAC e Coeficientes */}
      <section id="coeficientes-dac" className={styles.sectionBlock}>
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

          <div id="coeficientes-metricas" className={styles.rulesGrid}>
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

          <div id="coeficientes-eletivas" className={styles.eletivasArea}>
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
      <section id="calculo-geometria" className={styles.sectionBlock}>
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
            <div id="calculo-plantoes" className={styles.ruleCard}>
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

            <div id="calculo-metodologia" className={styles.ruleCard}>
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
      <section id="checklist-formatura" className={styles.sectionBlock}>
        <ChecklistFormatura />
      </section>

      {/* Monitoria PAD - Com Bolsa versus Sem Bolsa e Cronograma Oficial */}
      <section id="monitoria-pad" className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Users size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Como Funciona a Monitoria: Programa de Apoio Didático PAD</h2>
              <p className={styles.cardSubtitle}>
                Requisitos de ingresso, atribuições pedagógicas, cronograma semestral da PRG e comparativo entre vagas remuneradas e voluntárias
              </p>
            </div>
          </div>

          <p className={styles.ruleText} style={{ marginBottom: '1.25rem' }}>
            O Programa de Apoio Didático, PAD, gerido pela Pró-Reitoria de Graduação PRG da Unicamp, viabiliza a atuação de estudantes de graduação como monitores acadêmicos em disciplinas curriculares da FT. A monitoria fortalece o aprendizado dos colegas em disciplinas com maior nível de exigência, como Cálculo, Geometria Analítica e Programação, ao mesmo tempo em que desenvolve a didática e o domínio conceitual do próprio monitor.
          </p>

          <div id="pad-requisitos" className={styles.rulesGrid} style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Requisitos e Quem Pode Ser Monitor</h3>
              <p className={styles.ruleText}>
                Para se candidatar a uma vaga de monitoria PAD, o estudante precisa estar regularmente matriculado em curso de graduação da Unicamp, ter concluído a disciplina de interesse com aprovação e rendimento acadêmico satisfatório, além de contar com a anuência do docente responsável.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Atribuições Semanais e Limites Regulamentares</h3>
              <p className={styles.ruleText}>
                O monitor conduz plantões de atendimento presenciais ou virtuais para esclarecer dúvidas dos alunos, auxilia na interpretação de listas de exercícios e apoia atividades práticas em laboratório. A PRG veda que o monitor ministre aulas teóricas oficiais ou aplique notas nas provas.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Carga Horária Semanal e Flexibilidade</h3>
              <p className={styles.ruleText}>
                A dedicação média estabelecida pela Pró-Reitoria de Graduação é de oito a doze horas semanais. Essa carga engloba os horários de plantão com os estudantes, o alinhamento pedagógico semanal com o professor e o preparo de materiais de reforço, respeitando os horários das suas próprias aulas.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Validação de Horas e Certificado Oficial</h3>
              <p className={styles.ruleText}>
                Ao concluir o semestre letivo e ter o relatório final aprovado pelo professor orientador, o monitor recebe certificado emitido pela PRG e DAC. A atividade pontua para o cumprimento de Atividades Complementares no histórico escolar e agrega valor técnico e didático ao currículo.
              </p>
            </div>
          </div>

          <h3 id="pad-comparativo" className={styles.categoryTitle} style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
            <Award size={18} />
            Comparativo: Modalidade com Bolsa versus Modalidade Voluntária
          </h3>

          <div className={styles.gdeTableContainer}>
            <table className={styles.gdeTable} aria-label="Comparativo entre monitoria PAD com bolsa e sem bolsa">
              <thead>
                <tr>
                  <th scope="col">Aspecto Avaliado</th>
                  <th scope="col" className={`${styles.tagBlue}`}>PAD com Bolsa</th>
                  <th scope="col" className={`${styles.tagGreen}`}>PAD sem Bolsa, Voluntário</th>
                </tr>
              </thead>
              <tbody>
                {padComparisonData.map((item) => (
                  <tr key={item.criterion}>
                    <th scope="row">{item.criterion}</th>
                    <td>
                      <span >Remunerado</span>
                      {item.withScholarship}
                    </td>
                    <td>
                      <span >Voluntário</span>
                      {item.withoutScholarship}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Etapas do Ciclo PAD com link para Cronograma PRG */}
          <h3 id="pad-cronograma" className={styles.categoryTitle} style={{ marginTop: '2rem' }}>
            <Calendar size={18} />
            Etapas do Ciclo Semestral e Cronograma da PRG
          </h3>

          <div className={styles.timelineSteps}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <h4 className={styles.stepTitle}>Manifestação de Interesse e Alinhamento</h4>
              <p className={styles.stepDesc}>
                Procure o professor da disciplina que você concluiu com nota destacada para manifestar interesse em atuar como monitor e confirmar a oferta de vagas com bolsa ou voluntárias no próximo semestre.
              </p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <h4 className={styles.stepTitle}>Inscrição no Sistema PAD da PRG</h4>
              <p className={styles.stepDesc}>
                No período fixado no cronograma semestral da PRG, acesse o portal de monitorias da Unicamp e registre sua inscrição formal na disciplina acordada com o docente.
              </p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <h4 className={styles.stepTitle}>Homologação e Início dos Plantões</h4>
              <p className={styles.stepDesc}>
                Após a seleção pelo docente e a homologação formal pela coordenação de graduação da FT e PRG, o estudante assina o termo de compromisso e inicia os plantões de atendimento aos colegas.
              </p>
            </div>
          </div>

          <div className={styles.gradeLinkBox} style={{ marginTop: '1.25rem' }}>
            <div>
              <span className={styles.gradeLinkTitle}>Cronograma Oficial do Programa PAD na PRG</span>
              <span className={styles.gradeLinkDesc}>
                Consulte as datas vigentes de submissão de projetos, inscrição de alunos monitores e homologação da DAC
              </span>
            </div>
            <a
              href="https://www.prg.unicamp.br/cronograma-pad-2026/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.gradeButton}
              aria-label="Consultar cronograma oficial do PAD na PRG em nova janela"
            >
              <span>Ver Cronograma na PRG</span>
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>

          {/* Modelo de E-mail de Contato para Monitoria */}
          <div id="pad-email" className={styles.emailBox} style={{ marginTop: '2rem' }}>
            <div className={styles.emailHeader}>
              <div className={styles.emailHeaderTitle}>
                <Mail size={18} />
                <span>Modelo de E-mail para Manifestar Interesse ao Docente</span>
              </div>
              <button
                type="button"
                onClick={handleCopyPadEmail}
                className={`${styles.copyEmailBtn} ${padCopied ? styles.copied : ''}`}
                title="Copiar modelo de e-mail de monitoria PAD"
              >
                {padCopied ? <Check size={16} /> : <Copy size={16} />}
                <span>{padCopied ? 'Copiado para a área de transferência' : 'Copiar Modelo'}</span>
              </button>
            </div>
            <pre className={styles.emailPre}>{padEmailTemplateText}</pre>
          </div>
        </div>
      </section>

      {/* Horas Complementares versus Curricularização da Extensão */}
      <section id="horas-extensao" className={styles.sectionBlock}>
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

          <div id="horas-conceitos" className={styles.rulesGrid}>
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

          <h3 id="horas-regulamentos" className={styles.categoryTitle} style={{ marginTop: '2.5rem' }}>
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
      <section id="estrategia-carreira" className={styles.sectionBlock}>
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

        {/* Procedimentos Oficiais de Estágio na FT */}
        <div id="procedimentos-estagio-ft" className={styles.blockCard} style={{ marginTop: '2rem' }}>
          <div className={styles.cardHeader}>
            <ClipboardCheck size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Procedimentos Oficiais de Estágio na FT Unicamp</h2>
              <p className={styles.cardSubtitle}>
                Passo a passo burocrático e prazos regulamentares via sistema SAE para validação legal do termo de compromisso e relatórios semestrais
              </p>
            </div>
          </div>

          <p className={styles.ruleText}>
            Todo estágio realizado por estudantes da Faculdade de Tecnologia precisa obrigatoriamente ser formalizado antes do início efetivo das atividades laborais. A tramitação é realizada através do sistema de estágio do SAE. Atividades com vínculo empregatício CLT não podem ser cadastradas diretamente como estágio pela mesma empresa sem abertura prévia de processo de Casos Especiais junto à Secretaria de Graduação da FT.
          </p>

          <div className={styles.internshipStepsGrid}>
            {ftInternshipProceduresData.map((step) => (
              <div key={step.stepNumber} className={styles.internshipStepCard}>
                <span className={styles.stepNumberBadge}>Etapa {step.stepNumber}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
                <p className={styles.stepDetail}>{step.detail}</p>
              </div>
            ))}
          </div>

          <div className={styles.gradeLinkBox} style={{ marginTop: '1.25rem' }}>
            <div>
              <span className={styles.gradeLinkTitle}>Portal Oficial de Estágios da FT Unicamp</span>
              <span className={styles.gradeLinkDesc}>
                Acesse o manual completo de procedimentos, orientações para envio de relatórios e canais de contato da Comissão Setorial de Estágios
              </span>
            </div>
            <a
              href="https://www3.ft.unicamp.br/graduacao/estagio/procedimentos/alunos"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.gradeButton}
              aria-label="Acessar portal de procedimentos de estágio da FT Unicamp em nova janela"
            >
              <span>Manual de Estágio da FT</span>
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Transição para o Noturno no BSI */}
      <section id="noturno-bsi" className={styles.sectionBlock}>
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
            <div className={`${styles.ruleCard} ${styles.ruleCardBlue}`}>
              <div className={styles.ruleCardHeader}>
                <div className={styles.ruleIconWrapper}>
                  <GitMerge size={18} aria-hidden="true" />
                </div>
                <h3 className={styles.ruleTitle}>Equivalências Oficiais com TADS no Noturno</h3>
              </div>
              <p className={styles.ruleText}>
                Disciplinas estruturantes como Bancos de Dados, Engenharia de Software, Redes de Computadores e Programação Web possuem turmas equivalentes noturnas em TADS. No período de alteração de matrícula do e-DAC, o estudante de BSI pode solicitar matrícula nessas turmas noturnas para liberar o período diurno para o estágio.
              </p>
            </div>

            <div className={`${styles.ruleCard} ${styles.ruleCardGreen}`}>
              <div className={styles.ruleCardHeader}>
                <div className={styles.ruleIconWrapper}>
                  <TrendingUp size={18} aria-hidden="true" />
                </div>
                <h3 className={styles.ruleTitle}>Adiantamento de Créditos no Ciclo Básico</h3>
              </div>
              <p className={styles.ruleText}>
                Para esvaziar a grade diurna a partir do quinto semestre sem prorrogar a graduação, é fundamental adiantar matérias nos primeiros quatro semestres e cursar eletivas noturnas na FT ou na FCA. Manter o CR alto garante prioridade no e-DAC para conquistar vagas concorridas nas turmas noturnas.
              </p>
            </div>

            <div className={`${styles.ruleCard} ${styles.ruleCardPurple}`}>
              <div className={styles.ruleCardHeader}>
                <div className={styles.ruleIconWrapper}>
                  <Layers size={18} aria-hidden="true" />
                </div>
                <h3 className={styles.ruleTitle}>O Gargalo das Matérias Exclusivas de BSI</h3>
              </div>
              <p className={styles.ruleText}>
                Determinadas disciplinas obrigatórias do catálogo de BSI não possuem correspondente noturna em TADS e só são ofertadas durante o dia, como matérias de governança de TI, cálculo numérico ou modelagem avançada. O aluno precisará planejar com antecedência para cursá-las em horários com janela livre ou alinhar acordos de presença e horários flexíveis com a empresa de estágio.
              </p>
            </div>

            <div className={`${styles.ruleCard} ${styles.ruleCardAmber}`}>
              <div className={styles.ruleCardHeader}>
                <div className={styles.ruleIconWrapper}>
                  <AlertTriangle size={18} aria-hidden="true" />
                </div>
                <h3 className={styles.ruleTitle}>O Alerta Realista: Sobrecarga e Rotina</h3>
              </div>
              <p className={styles.ruleText}>
                Cursar todas as matérias restantes exclusivamente à noite e concluir em quatro anos significa encarar cinco a seis disciplinas por semestre das dezenove às vinte e duas horas e trinta minutos, logo após seis a oito horas diárias de estágio corporativo. É uma rotina pesada que exige planejamento de saúde e foco aos fins de semana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Iniciação Científica e Pesquisa na FT */}
      <section id="iniciacao-cientifica" className={styles.sectionBlock}>
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

          <div id="ic-cronograma" className={styles.timelineGrid}>
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

          <div id="ic-modalidades" className={styles.matrixWrapper}>
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

          <div id="ic-selecao" className={styles.rulesGrid}>
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

          <div id="ic-contato" className={styles.rulesGrid}>
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
                className={`${styles.copyEmailBtn} ${icCopied ? styles.copied : ''}`}
                title="Copiar modelo de e-mail"
              >
                {icCopied ? <Check size={16} /> : <Copy size={16} />}
                <span>{icCopied ? 'Copiado para a área de transferência' : 'Copiar Modelo'}</span>
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
      <section id="intercambio-deri" className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Globe size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Intercâmbio Acadêmico e Editais da DERI Unicamp</h2>
              <p className={styles.cardSubtitle}>
                Guia prático de mobilidade internacional, certificação de idiomas, processo seletivo no SIGA e estudo de caso oficial
              </p>
            </div>
          </div>

          <p className={styles.ruleText} style={{ marginBottom: '1.5rem' }}>
            A Diretoria Executiva de Relações Internacionais, DERI, coordena todos os acordos de cooperação acadêmica e mobilidade discente da Unicamp com instituições de ensino superior nos cinco continentes. Participar de um intercâmbio durante a graduação permite cursar disciplinas avançadas de computação em universidades de prestígio global, vivenciar imersão cultural, praticar línguas estrangeiras e convalidar créditos no histórico escolar da FT com isenção total de mensalidades acadêmicas no exterior.
          </p>

          {/* Subtópico 1: O Fluxo em Seis Fases */}
          <div id="intercambio-fluxo">
            <h3 className={styles.categoryTitle}>
              <CheckCircle2 size={18} />
              Fluxo Passo a Passo para Realizar Intercâmbio na Unicamp
            </h3>
            <p className={styles.ruleText} style={{ marginBottom: '1rem' }}>
              O planejamento de mobilidade internacional exige preparação prévia com antecedência mínima de um a dois anos antes do embarque. Siga este roteiro em seis fases sequenciais:
            </p>

            <div className={styles.exchangeGrid}>
              <div className={styles.exchangePhaseCard}>
                <span className={styles.exchangePhaseBadge}>Fase 1: Idioma</span>
                <h4 className={styles.exchangePhaseTitle}>1. Preparação e Certificação no CEL</h4>
                <p className={styles.exchangePhaseDesc}>
                  O principal filtro de eliminação dos editais é a proficiência linguística. A maioria das instituições exige nível B2 ou C1 em inglês ou no idioma do país anfitrião. A DERI aceita declarações formais de proficiência emitidas pelo Centro de Ensino de Línguas da Unicamp, CEL, que podem ser obtidas cursando disciplinas de línguas ou realizando testes de nivelamento no campus de Barão Geraldo. Não deixe para realizar o teste de proficiência após a abertura do edital.
                </p>
              </div>

              <div className={styles.exchangePhaseCard}>
                <span className={styles.exchangePhaseBadge}>Fase 2: Editais</span>
                <h4 className={styles.exchangePhaseTitle}>2. Mapeamento de Editais e Factsheets</h4>
                <p className={styles.exchangePhaseDesc}>
                  Acompanhe a página de editais da DERI ao longo de todo o ano. Para cada universidade conveniada, consulte atentamente o edital publicado e o Factsheet institucional da universidade parceira. No Factsheet constam informações determinantes: calendário semestral, restrições para cursos de computação, oferta de matérias ministradas em inglês, prazos de inscrição e exigências de seguro saúde.
                </p>
              </div>

              <div className={styles.exchangePhaseCard}>
                <span className={styles.exchangePhaseBadge}>Fase 3: SIGA</span>
                <h4 className={styles.exchangePhaseTitle}>3. Inscrição no SIGA e Learning Agreement</h4>
                <p className={styles.exchangePhaseDesc}>
                  A candidatura oficial é feita pelo portal eletrônico SIGA Mobilidade da DERI. O candidato envia histórico escolar atualizado, comprovante de proficiência, carta de motivação e a proposta de Plano de Estudos, o Learning Agreement. As disciplinas selecionadas na instituição estrangeira devem guardar afinidade com a grade curricular de BSI ou TADS para posterior validação na FT.
                </p>
              </div>

              <div className={styles.exchangePhaseCard}>
                <span className={styles.exchangePhaseBadge}>Fase 4: Seleção</span>
                <h4 className={styles.exchangePhaseTitle}>4. Avaliação e Classificação por Mérito</h4>
                <p className={styles.exchangePhaseDesc}>
                  A comissão de relações internacionais avalia os candidatos aplicando fórmulas objetivas de classificação. O Coeficiente de Rendimento, CR, é o critério preponderante de pontuação e desempate. O Coeficiente de Progressão, CP, deve situar-se preferencialmente entre quarenta e oitenta por cento. Reprovações não justificadas acarretam perda de pontos na concorrência.
                </p>
              </div>

              <div className={styles.exchangePhaseCard}>
                <span className={styles.exchangePhaseBadge}>Fase 5: Aceite</span>
                <h4 className={styles.exchangePhaseTitle}>5. Nomination Oficial e Carta de Aceite</h4>
                <p className={styles.exchangePhaseDesc}>
                  Com a aprovação no ranking interno da Unicamp, a DERI formaliza a indicação do estudante, procedimento chamado de Nomination, junto à instituição internacional parceira. O estudante conclui a matrícula na universidade de destino, envia eventuais documentos complementares e recebe a Carta Oficial de Aceite, documento essencial para o visto consular.
                </p>
              </div>

              <div className={styles.exchangePhaseCard}>
                <span className={styles.exchangePhaseBadge}>Fase 6: Embarque</span>
                <h4 className={styles.exchangePhaseTitle}>6. Matrícula de Mobilidade na DAC e Viagem</h4>
                <p className={styles.exchangePhaseDesc}>
                  Com a carta de aceite em mãos, o estudante abre processo de trancamento especial por intercâmbio junto à DAC. Essa modalidade preserva a vaga na Unicamp e congela a contagem de tempo de integralização para evitar jubilamento. Em seguida, contrata seguro saúde internacional com cobertura exigida pelo país, emite o visto de estudante no consulado e organiza o embarque.
                </p>
              </div>
            </div>
          </div>

          {/* Subtópico 2: O Que É Diferencial para Entrar */}
          <div id="intercambio-diferenciais" style={{ marginTop: '2.5rem' }}>
            <h3 className={styles.categoryTitle}>
              <Award size={18} />
              Diferenciais Competitivos para Conquistar a Vaga e Bolsas
            </h3>
            <p className={styles.ruleText} style={{ marginBottom: '1.25rem' }}>
              Em editais com grande procura ou que ofertam auxílio financeiro direto, pequenos detalhes no histórico e na trajetória acadêmica separam os estudantes classificados dos suplentes:
            </p>

            <div className={styles.rulesGrid}>
              <div className={styles.ruleCard}>
                <h4 className={styles.ruleTitle}>CR Elevado desde o Primeiro Ano</h4>
                <p className={styles.ruleText}>
                  Como o Coeficiente de Rendimento é a principal métrica do ranking da DERI, candidatos com CR acima de sete vírgula cinco ou oito vírgula zero largam com ampla vantagem competitiva. Manter média alta no ciclo básico garante prioridade tanto em editais de intercâmbio quanto em solicitações de bolsas de estudo Santander e Erasmus.
                </p>
              </div>

              <div className={styles.ruleCard}>
                <h4 className={styles.ruleTitle}>Proficiência Antecipada e Nível C1</h4>
                <p className={styles.ruleText}>
                  Candidatos que já possuem o certificado de proficiência emitido pelo CEL ou por exames internacionais antes da publicação do edital conseguem escolher livremente as universidades mais concorridas. Demonstrar domínio avançado, como nível C1, amplia o leque de disciplinas aceitas no exterior, inclusive no nível de pós-graduação.
                </p>
              </div>

              <div className={styles.ruleCard}>
                <h4 className={styles.ruleTitle}>Iniciação Científica e Publicações</h4>
                <p className={styles.ruleText}>
                  Estudantes que desenvolveram pesquisa com bolsa PIBIC, PIBITI ou FAPESP na FT possuem diferencial substancial na avaliação do currículo acadêmico e na carta de recomendação de professores. Essa bagagem investigativa é altamente valorizada pelas universidades europeias e norte-americanas parceiras.
                </p>
              </div>

              <div className={styles.ruleCard}>
                <h4 className={styles.ruleTitle}>Plano de Estudos Coerente e Alinhado com a FT</h4>
                <p className={styles.ruleText}>
                  Elaborar uma proposta de estudos sólida, demonstrando quais matérias do curso estrangeiro correspondem às disciplinas obrigatórias ou eletivas de BSI e TADS, facilita o aval prévio da coordenação de graduação e convence a banca examinadora do real aproveitamento do intercâmbio.
                </p>
              </div>
            </div>
          </div>

          {/* Subtópico 3: Estudo de Caso Oficial Edital Potsdam */}
          <div id="intercambio-potsdam" className={styles.potsdamCaseBox}>
            <div className={styles.potsdamHeader}>
              <div className={styles.potsdamTitle}>
                <GraduationCap size={20} color="#2563eb" />
                <span>Estudo de Caso Oficial: Edital DERI 85 de 2026 e Universidade de Potsdam</span>
              </div>
              <div className={styles.potsdamMeta}>
                <span className={`${styles.pillTag} ${styles.tagBlue}`}>Alemanha</span>
                <span className={`${styles.pillTag} ${styles.tagGreen}`}>Isenção de Mensalidades</span>
                <span className={`${styles.pillTag} ${styles.tagAmber}`}>Nível B2</span>
              </div>
            </div>

            <p className={styles.ruleText}>
              Para exemplificar o funcionamento real dos processos seletivos da Unicamp, analisamos o <strong>Edital DERI número 85 de 2026</strong> e o <strong>Factsheet UP 2026 e 2027</strong> referentes ao acordo de cooperação acadêmica com a <strong>Universität Potsdam</strong>, localizada no estado de Brandemburgo, na Alemanha, vizinha a Berlim:
            </p>

            <div className={styles.rulesGrid} style={{ marginTop: '1.25rem' }}>
              <div className={styles.ruleCard}>
                <h4 className={styles.ruleTitle}>Isenção Integral de Taxas Acadêmicas</h4>
                <p className={styles.ruleText}>
                  O acordo bilateral assegura gratuidade completa de mensalidades escolares na Universität Potsdam. O estudante fica responsável apenas pelas despesas com passagens aéreas, alojamento estudantil e a taxa semestral administrativa da universidade alemã, a qual inclui passe livre integral no transporte público regional por trens, metrôs e ônibus em Berlim e Brandemburgo.
                </p>
              </div>

              <div className={styles.ruleCard}>
                <h4 className={styles.ruleTitle}>Semestres Letivos e Calendário Alemão</h4>
                <p className={styles.ruleText}>
                  O Factsheet da instituição anfitriã estrutura o ano acadêmico em dois semestres: o Winter Semester, semestre de inverno, com período letivo de outubro a março e aulas de outubro a meados de fevereiro, e o Summer Semester, semestre de verão, com período letivo de abril a setembro e aulas de abril a meados de julho.
                </p>
              </div>

              <div className={styles.ruleCard}>
                <h4 className={styles.ruleTitle}>Critério Linguístico e Declaração do CEL</h4>
                <p className={styles.ruleText}>
                  A Universidade de Potsdam exige comprovação formal de nível mínimo B2 no Quadro Europeu Comum de Referência para as Línguas, seja em inglês para disciplinas internacionais ou em alemão. A DERI aceita expressamente a declaração emitida pelo Centro de Ensino de Línguas da Unicamp como comprovante válido de proficiência.
                </p>
              </div>

              <div className={styles.ruleCard}>
                <h4 className={styles.ruleTitle}>Moradia e Assistência Estudantil</h4>
                <p className={styles.ruleText}>
                  O Factsheet orienta os intercambistas da Unicamp a solicitarem vaga nos dormitórios universitários geridos pela associação pública Studentenwerk Potsdam com custos consideravelmente mais acessíveis do que o mercado imobiliário privado da região metropolitana de Berlim.
                </p>
              </div>
            </div>

            {/* Grid de Links Oficiais dos PDFs de Potsdam */}
            <div className={styles.potsdamDocsGrid}>
              <a
                href="https://www.internationaloffice.unicamp.br/wp-content/uploads/sites/26/2026/09/Potsdam-852026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.potsdamDocCard}
              >
                <div className={styles.potsdamDocInfo}>
                  <span className={styles.potsdamDocName}>Edital DERI 85 de 2026 em PDF</span>
                  <span className={styles.potsdamDocDesc}>Vagas e normas de inscrição para a Universidade de Potsdam</span>
                </div>
                <ExternalLink size={16} color="#2563eb" />
              </a>

              <a
                href="https://www.internationaloffice.unicamp.br/wp-content/uploads/sites/26/2026/09/Factsheet_UP_2026-27.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.potsdamDocCard}
              >
                <div className={styles.potsdamDocInfo}>
                  <span className={styles.potsdamDocName}>Factsheet Oficial UP 2026 e 2027</span>
                  <span className={styles.potsdamDocDesc}>Prazos de nomination, alojamento, vistos e calendário semestral</span>
                </div>
                <ExternalLink size={16} color="#2563eb" />
              </a>
            </div>
          </div>

          {/* Subtópico 4: Modalidades de Bolsas e Financiamento */}
          <div id="intercambio-bolsas" style={{ marginTop: '2.5rem' }}>
            <h3 className={styles.categoryTitle}>
              <Globe size={18} />
              Modalidades de Bolsas e Auxílios Financeiros de Intercâmbio
            </h3>
            <p className={styles.ruleText} style={{ marginBottom: '1.25rem' }}>
              Mesmo em conjunturas com menor disponibilidade de recursos internos, a DERI oferece canais com bolsas de manutenção e benefícios expressivos:
            </p>

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
            </div>
          </div>

          {/* Links Oficiais para Editais e Portal DERI */}
          <div className={styles.gradeLinkBox} style={{ marginTop: '2rem' }}>
            <div>
              <span className={styles.gradeLinkTitle}>Consulta de Editais Abertos de Intercâmbio na DERI</span>
              <span className={styles.gradeLinkDesc}>Acesse a lista atualizada de editais de mobilidade internacional com inscrições em andamento</span>
            </div>
            <a
              href="https://www.internationaloffice.unicamp.br/intercambio/editais/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.gradeButton}
              aria-label="Consultar editais abertos na DERI em nova janela"
            >
              <span>Ver Editais Abertos</span>
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>

          <div className={styles.gradeLinkBox} style={{ marginTop: '1rem' }}>
            <div>
              <span className={styles.gradeLinkTitle}>Portal Oficial da Diretoria Executiva de Relações Internacionais DERI</span>
              <span className={styles.gradeLinkDesc}>Consulte os convênios vigentes, orientações de visto e boletins informativos da Diretoria</span>
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
      </div>
    </div>
  );
}
