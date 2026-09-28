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
  Workflow,
  Sparkles,
  Layers
} from 'lucide-react';
import styles from './estudos-ia.module.scss';

export default function EstudosIaPage() {
  const practiceComparisons = [
    {
      bad: 'Pedir solucao pronta de listas de exercicios para entrega no Moodle.',
      good: 'Resolver primeiro no papel e solicitar a IA apenas indicacao do ponto de partida logico.',
    },
    {
      bad: 'Copiar blocos inteiros de codigo sem compreender os parâmetros internos.',
      good: 'Solicitar explicacao detalhada sobre cada parâmetro e comportamento de bibliotecas novas.',
    },
    {
      bad: 'Usar modelos abertos sem o contexto especifico da disciplina da FT.',
      good: 'Ancorar o contexto diretamente nos slides oficiais fornecidos pelo docente via NotebookLM.',
    },
    {
      bad: 'Delegar a escrita integral de relatorios de laboratorio e monografias.',
      good: 'Escrever o texto autoral e utilizar a IA apenas para revisao sintatica e consistencia gramatical.',
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
            Uso Estrategico de Inteligencia Artificial nos Estudos e no Desenvolvimento
          </h1>

          <p className={styles.pageDescription}>
            Aprenda a transformar o NotebookLM e o Google Gemini em mentores de aprendizado ativo, extraia cronogramas de planos de aula em segundos e domine a transicao para agentes de codigo.
          </p>
        </motion.div>
      </section>

      {/* NotebookLM */}
      <section className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Brain size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Google NotebookLM: Seu Segundo Cerebro Academico</h2>
              <p className={styles.cardSubtitle}>
                Como estudar com modelos que operam ancorados exclusivamente nos materiais das disciplinas da FT
              </p>
            </div>
          </div>

          <div className={styles.notebookGrid}>
            <div className={styles.notebookCard}>
              <h3 className={styles.notebookTitle}>Ancoragem Estrita em Documentos</h3>
              <p className={styles.notebookText}>
                Diferente de chatbots tradicionais que geram respostas genericas da internet, o NotebookLM responde fundamentado apenas nos arquivos enviados pelo estudante, minimizando alucinacoes e citando as paginas exatas de referencia.
              </p>
            </div>

            <div className={styles.notebookCard}>
              <h3 className={styles.notebookTitle}>Organizacao por Disciplina</h3>
              <p className={styles.notebookText}>
                Crie um caderno digital dedicado para cada materia do semestre. Carregue os slides do Moodle, as notas de aula, as listas de exercicios e as provas de semestres anteriores disponibilizadas pelos veteranos.
              </p>
            </div>

            <div className={styles.notebookCard}>
              <h3 className={styles.notebookTitle}>Simulados no Padrao do Docente</h3>
              <p className={styles.notebookText}>
                Solicite a elaboracao de questoes dissertativas baseadas nas provas antigas. Isso permite treinar a linguagem e a profundidade de raciocinio exigidas especificamente pelo professor da disciplina.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PromptBox para Extracao de Planos de Aula */}
      <section className={styles.sectionBlock}>
        <PromptBox />
      </section>

      {/* Metodo Construa na Mao e Feynman */}
      <section className={styles.sectionBlock}>
        <div className={styles.methodsGrid}>
          <div className={styles.methodCard}>
            <div className={styles.methodHeader}>
              <Workflow size={22} className={styles.methodIcon} />
              <h3 className={styles.methodTitle}>Metodo: Construa na Mao Primeiro, Refatore com IA Depois</h3>
            </div>
            <p className={styles.methodText}>
              Evite gerar codigo do zero com ferramentas automatizadas no inicio do aprendizado. O processo que consolida os fundamentos divide-se em duas etapas:
            </p>
            <ol className={styles.methodSteps}>
              <li>
                <strong>Etapa 1, Construcao Manual:</strong> Implemente a logica inicial de algoritmos, conexoes com bancos de dados e estruturas de dados linha por linha. Isso garante que voce entenda o fluxo de execucao e a sintaxe da linguagem.
              </li>
              <li>
                <strong>Etapa 2, Refatoracao Assistida:</strong> Submeta seu codigo funcionando a IA para avaliar boas praticas de arquitetura, tratamento de excecoes, vulnerabilidades de seguranca e otimizacao de complexidade assintotica.
              </li>
            </ol>
          </div>

          <div className={styles.methodCard}>
            <div className={styles.methodHeader}>
              <Lightbulb size={22} className={styles.methodIcon} />
              <h3 className={styles.methodTitle}>Metodo Socratico e Tecnica Feynman</h3>
            </div>
            <p className={styles.methodText}>
              Utilize a inteligencia artificial como um interlocutor critico para testar a profundidade da sua compreensao teorica:
            </p>
            <ul className={styles.methodSteps}>
              <li>
                <strong>Tecnica Feynman:</strong> Explique um conceito teorico complexo, como balanceamento de arvores ou protocolos de transporte de rede, e peca para o modelo identificar falhas ou imprecisoes no seu raciocinio.
              </li>
              <li>
                <strong>Rubber Duck Socratico:</strong> Diante de erros de compilacao ou bugs dificeis, envie o log de erro e solicite que a IA faca perguntas guiadas sobre a arquitetura do programa em vez de fornecer a correcao direta.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tabela de Boas Praticas */}
      <section className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <h2 className={styles.cardTitle}>Boas Praticas no Uso Academico de IA</h2>
          <p className={styles.cardSubtitle}>
            Como potencializar seu aprendizado sem atrofiar seu raciocinio critico e capacidade tecnica
          </p>

          <div className={styles.practicesTable}>
            <div className={styles.tableHead}>
              <span className={styles.headBad}>Pratica Prejudicial</span>
              <span className={styles.headGood}>Pratica Recomendada</span>
            </div>

            {practiceComparisons.map((row, idx) => (
              <div key={idx} className={styles.tableRow}>
                <div className={styles.badCell}>
                  <XCircle size={18} className={styles.badIcon} />
                  <span>{row.bad}</span>
                </div>
                <div className={styles.goodCell}>
                  <CheckCircle2 size={18} className={styles.goodIcon} />
                  <span>{row.good}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbots vs Agentes Autonomos */}
      <section className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Terminal size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>IA no Desenvolvimento: Chatbots versus Agentes de Codigo</h2>
              <p className={styles.cardSubtitle}>
                A evolucao de janelas de chat no navegador para ferramentas integradas ao ambiente de trabalho
              </p>
            </div>
          </div>

          <div className={styles.agentsGrid}>
            <div className={styles.agentCard}>
              <h3 className={styles.agentTitle}>Chatbots no Navegador</h3>
              <p className={styles.agentDesc}>
                Ambiente reativo e isolado do disco local. O desenvolvedor precisa copiar manualmente trechos de codigo entre o navegador e seu editor, sem acesso do modelo aos arquivos do projeto ou aos comandos do terminal.
              </p>
            </div>

            <div className={styles.agentCard}>
              <h3 className={styles.agentTitle}>Agentes Autonomos e Ciclo ReAct</h3>
              <p className={styles.agentDesc}>
                Sistemas que inspecionam a arvore de diretorios, editam arquivos diretamente no disco e executam testes automatizados e linters para validar as modificacoes antes da entrega final.
              </p>
            </div>

            <div className={styles.agentCard}>
              <h3 className={styles.agentTitle}>Ferramentas e Protocolo MCP</h3>
              <p className={styles.agentDesc}>
                O Model Context Protocol estabelece um padrao aberto para conectar modelos a bancos de dados, servidores de documentacao e terminais de comando, transformando a IA em assistente integrado.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
