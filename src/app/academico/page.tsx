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
  Youtube,
  Lightbulb,
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
      { id: 'calculo-metodologia', title: 'Padrões de Resolução e Regra 48h' },
      { id: 'calculo-canais', title: 'Canais do Professor Ferretto' },
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
      { id: 'horas-tabela', title: 'Tabela Comparativa de Extensão' },
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
                Média ponderada das notas pelos créditos cursados. É o critério principal para disputar vagas de turmas no e-DAC, bolsas de pesquisa e editais de intercâmbio.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>CP, Coeficiente de Progressão</h3>
              <p className={styles.ruleText}>
                Percentual de créditos concluídos em relação ao total exigido para formar. Utilizado na triagem de vagas de estágio corporativo e transferências internas.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Vetores de Carga Horária</h3>
              <p className={styles.ruleText}>
                Indica a distribuição semanal em Teoria, Prática, Laboratório e Orientação. Um vetor dois zero zero dois representa duas horas de teoria e duas de prática ou orientação.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Créditos e Carga Semestral</h3>
              <p className={styles.ruleText}>
                Cada crédito equivale a quinze horas de atividades semestrais. Uma disciplina de quatro créditos exige sessenta horas no semestre, ou quatro horas semanais.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Matrícula e Caderno de Horários</h3>
              <p className={styles.ruleText}>
                A consulta de turmas ofertadas, horários e vagas do seu curso é feita diretamente pelo portal do Caderno de Horários da DAC nos períodos de matrícula.
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
                A faculdade disponibiliza monitores do Programa de Apoio Didático e pós-graduandos do PED. Comparecer semanalmente aos plantões tira dúvidas acumuladas e treina a resolução detalhada de exercícios antes das semanas de prova.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>2. O Banco de Provas Antigas do CDI</h3>
              <p className={styles.ruleText}>
                O estilo de cobrança dos professores da FT costuma seguir padrões consolidados ao longo dos anos. Obtenha as provas dos últimos semestres com o Centro Acadêmico CDI para simular o tempo de resolução e o formato exato das questões.
              </p>
            </div>

            <div id="calculo-metodologia" className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>3. A Regra das Quarenta e Oito Horas</h3>
              <p className={styles.ruleText}>
                Cálculo diferencial e álgebra linear exigem memória muscular. Resolva a lista de exercícios indicada pelo professor em até quarenta e oito horas após a aula teórica, evitando o acúmulo de conteúdo na véspera da avaliação.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>4. Mapeamento de Padrões: Começo, Meio e Fim</h3>
              <p className={styles.ruleText}>
                Cálculo avalia o reconhecimento de padrões estruturados. Crie resumos agrupando os exercícios por tipo e resolva sempre em três fases claras: Começo identificando a família da função e simplificando algebricamente, Meio aplicando o teorema ou regra passo a passo com rigor na notação, e Fim reduzindo ao formato mais limpo e checando a coerência da resposta obtida.
              </p>
            </div>
          </div>

          <h3 id="calculo-canais" className={styles.categoryTitle} style={{ marginTop: '2rem', marginBottom: '1rem' }}>
            <Youtube size={18} />
            Canais Recomendados do Professor Ferretto e Apoio Didático
          </h3>

          <div className={styles.studyChannelsGrid}>
            <a
              href="https://www.youtube.com/watch?v=DkCHV5Kbx4o&list=PLTPg64KdGgYhACfQUtMf3CuhWOfLoTf_a"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.studyChannelCard}
            >
              <div className={styles.channelHeader}>
                <Youtube size={20} className={styles.youtubeRedIcon} />
                <span className={styles.channelBadge}>Cálculo 1</span>
              </div>
              <h4 className={styles.channelTitle}>Professor Ferretto: Curso Completo de Cálculo 1</h4>
              <p className={styles.channelDesc}>
                Playlist passo a passo com aulas graduais cobrindo limites, derivadas, regras da cadeia e técnicas de integração para superar o primeiro ano na FT.
              </p>
              <span className={styles.channelLinkText}>
                <span>Acessar Playlist Oficial</span>
                <ExternalLink size={12} />
              </span>
            </a>

            <a
              href="https://www.youtube.com/playlist?list=PLTPg64KdGgYhYpS5nXdFgdqEZMAC5lARB"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.studyChannelCard}
            >
              <div className={styles.channelHeader}>
                <Youtube size={20} className={styles.youtubeRedIcon} />
                <span className={`${styles.channelBadge} ${styles.green}`}>Nivelamento</span>
              </div>
              <h4 className={styles.channelTitle}>Professor Ferretto: Matemática Básica Essencial</h4>
              <p className={styles.channelDesc}>
                Mais de setenta por cento dos erros em Cálculo decorrem de lacunas em fatoração, produtos notáveis e frações. Esta playlist constrói a base necessária.
              </p>
              <span className={styles.channelLinkText}>
                <span>Acessar Nivelamento</span>
                <ExternalLink size={12} />
              </span>
            </a>

            <div className={styles.studyChannelCard}>
              <div className={styles.channelHeader}>
                <Lightbulb size={20} className={styles.toolIcon} />
                <span className={`${styles.channelBadge} ${styles.purple}`}>Revisão com IA</span>
              </div>
              <h4 className={styles.channelTitle}>Simulados Ativos no Google NotebookLM</h4>
              <p className={styles.channelDesc}>
                Submeta o texto das suas anotações de aula e listas de exercícios ao NotebookLM para gerar questionários interativos e testar seu domínio antes das provas.
              </p>
              <span className={styles.channelNoteText}>
                Ferramenta gratuita para autoavaliação
              </span>
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
            O Programa de Apoio Didático viabiliza a atuação de graduandos como monitores em matérias exigentes como Cálculo e Programação. A atividade reforça o aprendizado dos colegas e desenvolve a didática e o domínio do próprio monitor.
          </p>

          <div id="pad-requisitos" className={styles.rulesGrid} style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Requisitos de Ingresso</h3>
              <p className={styles.ruleText}>
                Estar matriculado regularmente na Unicamp, ter sido aprovado na matéria com bom rendimento e obter o aval do professor responsável pela turma.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Atribuições e Limites</h3>
              <p className={styles.ruleText}>
                Conduzir plantões semanais de dúvidas, auxiliar em listas e apoiar aulas práticas. É proibido ministrar aulas teóricas ou corrigir notas de provas.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Carga Horária Semanal</h3>
              <p className={styles.ruleText}>
                Dedicação de oito a doze horas semanais divididas entre plantões, reuniões com o docente e elaboração de materiais, conciliadas com sua própria grade.
              </p>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>Certificação e Benefício</h3>
              <p className={styles.ruleText}>
                Relatório final aprovado concede certificado oficial da PRG e DAC, pontuando como Atividades Complementares no histórico escolar.
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

          <h3 id="horas-tabela" className={styles.categoryTitle} style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
            <Award size={18} />
            Quadro Comparativo: Atividades Complementares versus Curricularização da Extensão
          </h3>

          <div className={styles.gdeTableContainer}>
            <table className={styles.gdeTable} aria-label="Quadro comparativo entre Atividades Complementares e Curricularização da Extensão">
              <thead>
                <tr>
                  <th scope="col">Critério de Avaliação</th>
                  <th scope="col" className={styles.tagBlue}>Atividades Complementares</th>
                  <th scope="col" className={styles.tagGreen}>Curricularização da Extensão</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Objetivo Central</th>
                  <td>Enriquecimento formativo e multidisciplinar do próprio estudante durante o curso</td>
                  <td>Aplicação prática do conhecimento universitário com impacto direto na sociedade externa</td>
                </tr>
                <tr>
                  <th scope="row">Público-Alvo e Foco</th>
                  <td>Desenvolvimento individual do aluno no ambiente acadêmico ou corporativo</td>
                  <td>Comunidade externa, escolas públicas, ONGs e cidadãos fora dos campi</td>
                </tr>
                <tr>
                  <th scope="row">Exigência Curricular</th>
                  <td>Mínimo de sessenta horas com limites de teto por modalidade no catálogo</td>
                  <td>Obrigatoriedade de dez por cento da carga horária total do curso a partir do catálogo 2020</td>
                </tr>
                <tr>
                  <th scope="row">Exemplos Válidos</th>
                  <td>Cursos online, participação em congressos, monitoria PAD, iniciação científica e ligas</td>
                  <td>Oficinas em escolas, projetos sociais da FT, consultorias comunitárias e eventos abertos</td>
                </tr>
                <tr>
                  <th scope="row">Forma de Comprovação</th>
                  <td>Certificados com CNPJ, carga horária e assinatura para convalidação na coordenação</td>
                  <td>Matrícula formal em disciplinas e projetos de extensão cadastrados na PROEC</td>
                </tr>
              </tbody>
            </table>
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
              <h3 className={styles.pointTitle}>A Barreira das Vagas Júnior</h3>
              <p className={styles.pointDesc}>
                Vagas júnior costumam exigir um a dois anos de vivência corporativa prévia. Estágios aceitam estudantes em formação, pagam bolsas competitivas e são a principal porta de efetivação na área de tecnologia.
              </p>
            </div>

            <div className={styles.strategyPoint}>
              <h3 className={styles.pointTitle}>A Lei do Estágio: Lei 11.788 de 2008</h3>
              <p className={styles.pointDesc}>
                O contrato de estágio exige vínculo estudantil ativo. Ao colar grau, o contrato é cancelado por lei. Se a empresa não efetivar, você perde o direito de concorrer a vagas de estágio e precisa disputar vagas júnior sem bagagem.
              </p>
            </div>

            <div className={styles.strategyPoint}>
              <h3 className={styles.pointTitle}>Prazos Regimentais DAC e Extensão Segura</h3>
              <p className={styles.pointDesc}>
                O catálogo de BSI fixa teto de quatorze semestres para oito ideais; TADS fixa dez semestres para seis ideais. Cursar duas ou três disciplinas por semestre permite estagiar durante o dia sem risco de jubilamento nem exaustão.
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
                <h3 className={styles.ruleTitle}>O Alerta Realista: Viagens Regionais e Rotina</h3>
              </div>
              <p className={styles.ruleText}>
                Muitos estudantes de TADS e veteranos de BSI no noturno viajam diariamente de municípios vizinhos como Americana, Santa Bárbara d&apos;Oeste e Piracicaba em vans ou ônibus intermunicipais. Encarar aulas das dezenove às vinte e duas horas e trinta minutos após oito horas diárias de trabalho ou estágio e deslocamento constante exige planejamento de sono, saúde e foco nas prioridades.
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
            A Diretoria Executiva de Relações Internacionais coordena convênios com instituições globais. O intercâmbio permite cursar disciplinas avançadas no exterior, praticar outros idiomas e convalidar créditos na FT com isenção de mensalidades estrangeiras.
          </p>

          {/* Subtópico 1: O Fluxo em Seis Fases */}
          <div id="intercambio-fluxo">
            <h3 className={styles.categoryTitle}>
              <CheckCircle2 size={18} />
              Fluxo Passo a Passo para Realizar Intercâmbio na Unicamp
            </h3>
            <p className={styles.ruleText} style={{ marginBottom: '1rem' }}>
              O planejamento exige antecedência mínima de um a dois anos antes do embarque. Siga este roteiro em seis fases:
            </p>

            <div className={styles.exchangeGrid}>
              <div className={styles.exchangePhaseCard}>
                <span className={styles.exchangePhaseBadge}>Fase 1: Idioma</span>
                <h4 className={styles.exchangePhaseTitle}>1. Preparação e Certificação no CEL</h4>
                <p className={styles.exchangePhaseDesc}>
                  A maioria dos editais exige nível B2 ou C1. A DERI aceita declarações oficiais de proficiência emitidas pelo Centro de Ensino de Línguas da Unicamp obtidas por disciplinas ou testes em Barão Geraldo.
                </p>
              </div>

              <div className={styles.exchangePhaseCard}>
                <span className={styles.exchangePhaseBadge}>Fase 2: Editais</span>
                <h4 className={styles.exchangePhaseTitle}>2. Mapeamento de Editais e Factsheets</h4>
                <p className={styles.exchangePhaseDesc}>
                  Acompanhe os editais da DERI e consulte o Factsheet da universidade parceira para checar matérias em inglês, restrições para computação, calendário e exigências de seguro saúde.
                </p>
              </div>

              <div className={styles.exchangePhaseCard}>
                <span className={styles.exchangePhaseBadge}>Fase 3: SIGA</span>
                <h4 className={styles.exchangePhaseTitle}>3. Inscrição no SIGA e Learning Agreement</h4>
                <p className={styles.exchangePhaseDesc}>
                  Submeta histórico escolar, carta de motivação e proposta de Plano de Estudos no SIGA Mobilidade. As disciplinas escolhidas no exterior devem ter afinidade com BSI ou TADS para validação na volta.
                </p>
              </div>

              <div className={styles.exchangePhaseCard}>
                <span className={styles.exchangePhaseBadge}>Fase 4: Seleção</span>
                <h4 className={styles.exchangePhaseTitle}>4. Avaliação e Classificação por Mérito</h4>
                <p className={styles.exchangePhaseDesc}>
                  O CR é o critério principal de pontuação e desempate no ranking. O CP ideal situa-se entre quarenta e oitenta por cento. Reprovações não justificadas reduzem a pontuação competitiva.
                </p>
              </div>

              <div className={styles.exchangePhaseCard}>
                <span className={styles.exchangePhaseBadge}>Fase 5: Aceite</span>
                <h4 className={styles.exchangePhaseTitle}>5. Nomination Oficial e Carta de Aceite</h4>
                <p className={styles.exchangePhaseDesc}>
                  Classificado na Unicamp, a DERI faz sua indicação formal para a universidade parceira. Você conclui a inscrição estrangeira e recebe a Carta de Aceite para solicitar o visto consular.
                </p>
              </div>

              <div className={styles.exchangePhaseCard}>
                <span className={styles.exchangePhaseBadge}>Fase 6: Embarque</span>
                <h4 className={styles.exchangePhaseTitle}>6. Matrícula de Mobilidade na DAC e Viagem</h4>
                <p className={styles.exchangePhaseDesc}>
                  Abra processo de trancamento especial por intercâmbio na DAC para preservar sua vaga e congelar a contagem de tempo de curso. Contrate o seguro internacional, emita o visto e organize o embarque.
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
              Pequenos detalhes no histórico e na trajetória acadêmica separam os classificados dos suplentes nos editais concorridos:
            </p>

            <div className={styles.rulesGrid}>
              <div className={styles.ruleCard}>
                <h4 className={styles.ruleTitle}>CR Elevado desde o Primeiro Ano</h4>
                <p className={styles.ruleText}>
                  Como o CR lidera a fórmula de classificação da DERI, médias acima de sete vírgula cinco garantem grande vantagem para vagas em universidades disputadas e bolsas de auxílio financeiro.
                </p>
              </div>

              <div className={styles.ruleCard}>
                <h4 className={styles.ruleTitle}>Proficiência Antecipada e Nível C1</h4>
                <p className={styles.ruleText}>
                  Possuir certificado do CEL ou exames válidos antes da publicação do edital permite concorrer às vagas mais procuradas e cursar disciplinas avançadas no exterior.
                </p>
              </div>

              <div className={styles.ruleCard}>
                <h4 className={styles.ruleTitle}>Iniciação Científica e Publicações</h4>
                <p className={styles.ruleText}>
                  Pesquisas com bolsa PIBIC ou FAPESP na FT enriquecem a carta de recomendação docente e são altamente valorizadas pelas comissões de seleção estrangeiras.
                </p>
              </div>

              <div className={styles.ruleCard}>
                <h4 className={styles.ruleTitle}>Plano de Estudos Coerente</h4>
                <p className={styles.ruleText}>
                  Demonstrar quais matérias internacionais equivalem às obrigatórias ou eletivas de BSI e TADS facilita a aprovação da coordenação e validação dos créditos no retorno.
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
