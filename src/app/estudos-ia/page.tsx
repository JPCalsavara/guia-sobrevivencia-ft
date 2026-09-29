'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PromptBox } from '@/components/PromptBox/PromptBox';
import {
  Cpu,
  Brain,
  Terminal,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Workflow
} from 'lucide-react';
import { DocSidebar, TopicItem } from '@/components/DocSidebar/DocSidebar';
import styles from './estudos-ia.module.scss';

const aiTopics: TopicItem[] = [
  {
    id: 'notebooklm-cerebro',
    title: 'Google NotebookLM',
    subtopics: [
      { id: 'notebooklm-cerebro', title: 'Segundo Cérebro Acadêmico' },
    ],
  },
  {
    id: 'prompts-estruturados',
    title: 'Prompts Estruturados',
    subtopics: [
      { id: 'prompts-estruturados', title: 'Extrator de Planos de Aula' },
    ],
  },
  {
    id: 'metodologias-estudo',
    title: 'Metodologias de Estudo',
    subtopics: [
      { id: 'metodologias-estudo', title: 'Construção Manual e Feynman' },
    ],
  },
  {
    id: 'boas-praticas-ia',
    title: 'Boas Práticas de IA',
    subtopics: [
      { id: 'boas-praticas-ia', title: 'Tabela de Práticas Acadêmicas' },
    ],
  },
  {
    id: 'transicao-agentes',
    title: 'Agentes de Código',
    subtopics: [
      { id: 'transicao-agentes', title: 'Chatbots versus Agentes e MCP' },
    ],
  },
];

export default function EstudosIaPage() {
  const practiceComparisons = [
    {
      bad: 'Pedir solução pronta de listas de exercícios para entrega no Moodle.',
      good: 'Resolver primeiro no papel e solicitar à IA apenas indicação do ponto de partida lógico.',
    },
    {
      bad: 'Copiar blocos inteiros de código sem compreender os parâmetros internos.',
      good: 'Solicitar explicação detalhada sobre cada parâmetro e comportamento de bibliotecas novas.',
    },
    {
      bad: 'Usar modelos abertos sem o contexto específico da disciplina da FT.',
      good: 'Ancorar o contexto diretamente nos slides oficiais fornecidos pelo docente via NotebookLM.',
    },
    {
      bad: 'Delegar a escrita integral de relatórios de laboratório e monografias.',
      good: 'Escrever o texto autoral e utilizar a IA apenas para revisão sintática e consistência gramatical.',
    },
  ];

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
            <Cpu size={16} />
            <span>Metodologia de Estudos e Ferramentas Inteligentes</span>
          </div>

          <h1 className={styles.pageTitle}>
            Uso Estratégico de Inteligência Artificial nos Estudos e no Desenvolvimento
          </h1>

          <p className={styles.pageDescription}>
            Aprenda a transformar o NotebookLM e o Google Gemini em mentores de aprendizado ativo, extraia cronogramas de planos de aula em segundos e domine a transição para agentes de código.
          </p>
        </motion.div>
      </section>

      {/* Conteúdo com Barra Lateral Esquerda */}
      <div className={styles.contentWithSidebar}>
        <aside>
          <DocSidebar topics={aiTopics} title="Estudos e IA" />
        </aside>

        <div className={styles.mainContentArea}>
          {/* NotebookLM */}
          <section id="notebooklm-cerebro" className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Brain size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Google NotebookLM: Seu Segundo Cérebro Acadêmico</h2>
              <p className={styles.cardSubtitle}>
                Como estudar com modelos que operam ancorados exclusivamente nos materiais das disciplinas da FT
              </p>
            </div>
          </div>

          <div className={styles.notebookGrid}>
            <div className={styles.notebookCard}>
              <h3 className={styles.notebookTitle}>Ancoragem Estrita em Documentos</h3>
              <p className={styles.notebookText}>
                Diferente de chatbots tradicionais que geram respostas genéricas da internet, o NotebookLM responde fundamentado apenas nos arquivos enviados pelo estudante, minimizando alucinações e citando as páginas exatas de referência.
              </p>
            </div>

            <div className={styles.notebookCard}>
              <h3 className={styles.notebookTitle}>Organização por Disciplina</h3>
              <p className={styles.notebookText}>
                Crie um caderno digital dedicado para cada matéria do semestre. Carregue os slides do Moodle, as notas de aula, as listas de exercícios e as provas de semestres anteriores disponibilizadas pelos veteranos.
              </p>
            </div>

            <div className={styles.notebookCard}>
              <h3 className={styles.notebookTitle}>Simulados no Padrão do Docente</h3>
              <p className={styles.notebookText}>
                Solicite a elaboração de questões dissertativas baseadas nas provas antigas. Isso permite treinar a linguagem e a profundidade de raciocínio exigidas especificamente pelo professor da disciplina.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PromptBox para Extração de Planos de Aula */}
      <section id="prompts-estruturados" className={styles.sectionBlock}>
        <PromptBox />
      </section>

      {/* Método Construa na Mão e Feynman */}
      <section id="metodologias-estudo" className={styles.sectionBlock}>
        <div className={styles.methodsGrid}>
          <div className={styles.methodCard}>
            <div className={styles.methodHeader}>
              <Workflow size={22} className={styles.methodIcon} />
              <h3 className={styles.methodTitle}>Método: Construa na Mão Primeiro, Refatore com IA Depois</h3>
            </div>
            <p className={styles.methodText}>
              Evite gerar código do zero com ferramentas automatizadas no início do aprendizado. O processo que consolida os fundamentos divide-se em duas etapas:
            </p>
            <ol className={styles.methodSteps}>
              <li>
                <strong>Etapa 1, Construção Manual:</strong> Implemente a lógica inicial de algoritmos, conexões com bancos de dados e estruturas de dados linha por linha. Isso garante que você entenda o fluxo de execução e a sintaxe da linguagem.
              </li>
              <li>
                <strong>Etapa 2, Refatoração Assistida:</strong> Submeta seu código funcionando à IA para avaliar boas práticas de arquitetura, tratamento de exceções, vulnerabilidades de segurança e otimização de complexidade assintótica.
              </li>
            </ol>
          </div>

          <div className={styles.methodCard}>
            <div className={styles.methodHeader}>
              <Lightbulb size={22} className={styles.methodIcon} />
              <h3 className={styles.methodTitle}>Método Socrático e Técnica Feynman</h3>
            </div>
            <p className={styles.methodText}>
              Utilize a inteligência artificial como um interlocutor crítico para testar a profundidade da sua compreensão teórica:
            </p>
            <ul className={styles.methodSteps}>
              <li>
                <strong>Técnica Feynman:</strong> Explique um conceito teórico complexo, como balanceamento de árvores ou protocolos de transporte de rede, e peça para o modelo identificar falhas ou imprecisões no seu raciocínio.
              </li>
              <li>
                <strong>Rubber Duck Socrático:</strong> Diante de erros de compilação ou bugs difíceis, envie o log de erro e solicite que a IA faça perguntas guiadas sobre a arquitetura do programa em vez de fornecer a correção direta.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tabela de Boas Práticas */}
      <section id="boas-praticas-ia" className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <h2 className={styles.cardTitle}>Boas Práticas no Uso Acadêmico de IA</h2>
          <p className={styles.cardSubtitle}>
            Como potencializar seu aprendizado sem atrofiar seu raciocínio crítico e capacidade técnica
          </p>

          <div
            className={styles.practicesTable}
            role="table"
            aria-label="Comparativo de boas práticas no uso acadêmico de inteligência artificial"
          >
            <div className={styles.tableHead} role="rowgroup">
              <div role="row" style={{ display: 'contents' }}>
                <span className={styles.headBad} role="columnheader">Prática Prejudicial</span>
                <span className={styles.headGood} role="columnheader">Prática Recomendada</span>
              </div>
            </div>

            <div role="rowgroup" style={{ display: 'contents' }}>
              {practiceComparisons.map((row, idx) => (
                <div key={idx} className={styles.tableRow} role="row">
                  <div className={styles.badCell} role="cell">
                    <XCircle size={18} className={styles.badIcon} aria-hidden="true" />
                    <span>{row.bad}</span>
                  </div>
                  <div className={styles.goodCell} role="cell">
                    <CheckCircle2 size={18} className={styles.goodIcon} aria-hidden="true" />
                    <span>{row.good}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chatbots vs Agentes Autônomos */}
      <section id="transicao-agentes" className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Terminal size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>IA no Desenvolvimento: Chatbots versus Agentes de Código</h2>
              <p className={styles.cardSubtitle}>
                A evolução de janelas de chat no navegador para ferramentas integradas ao ambiente de trabalho
              </p>
            </div>
          </div>

          <div className={styles.agentsGrid}>
            <div className={styles.agentCard}>
              <h3 className={styles.agentTitle}>Chatbots no Navegador</h3>
              <p className={styles.agentDesc}>
                Ambiente reativo e isolado do disco local. O desenvolvedor precisa copiar manualmente trechos de código entre o navegador e seu editor, sem acesso do modelo aos arquivos do projeto ou aos comandos do terminal.
              </p>
            </div>

            <div className={styles.agentCard}>
              <h3 className={styles.agentTitle}>Agentes Autônomos e Ciclo ReAct</h3>
              <p className={styles.agentDesc}>
                Sistemas que inspecionam a árvore de diretórios, editam arquivos diretamente no disco e executam testes automatizados e linters para validar as modificações antes da entrega final.
              </p>
            </div>

            <div className={styles.agentCard}>
              <h3 className={styles.agentTitle}>Ferramentas e Protocolo MCP</h3>
              <p className={styles.agentDesc}>
                O Model Context Protocol estabelece um padrão aberto para conectar modelos a bancos de dados, servidores de documentação e terminais de comando, transformando a IA em assistente integrado.
              </p>
            </div>
          </div>
        </div>
      </section>
        </div>
      </div>
    </div>
  );
}
