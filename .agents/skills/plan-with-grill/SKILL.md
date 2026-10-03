---
name: plan-with-grill
description: Elabora planos de implementacao tecnicos por meio de entrevista guiada com arvore de decisoes grill-me e gera o cartao executivo correspondente em docs/next.
---

# Skill Plan With Grill

Esta skill estabelece o fluxo oficial de planejamento interativo no Guia de Sobrevivencia da Faculdade de Tecnologia da Unicamp. Seu proposito e eliminar ambiguidades de requisitos antes de qualquer escrita de codigo de producao, documentando as etapas em um cartao rastreavel em `docs/next/`.

## Fluxo de Trabalho

### 1. Levantamento de Requisitos e Entrevista
- Inspecione a solicitacao do desenvolvedor e o estado atual da base de codigo.
- Identifique premissas nao esclarecidas, escolhas visuais, regras de negocio e impactos arquiteturais.
- Formule perguntas estruturadas com opcoes claras utilizando a ferramenta interativa de perguntas ou o padrao de arvore de decisoes da skill grilling.
- Para cada pergunta, apresente a recomendacao tecnica fundamentada nas ADRs vigentes, especialmente a ADR 0001 e a ADR 0008.
- Aguarde as respostas do desenvolvedor para desdobrar os nos dependentes da arvore.

### 2. Elaboracao do Artefato de Plano
- Redija o documento de planejamento tecnico no diretorio de artefatos.
- Estruture o plano com as secoes padronizadas:
  - Descricao do Objetivo
  - Revisao do Usuario Obrigatoria com alertas importantes
  - Perguntas em Aberto
  - Modificacoes Propostas divididas em camadas logicas
  - Diagramas de fluxo Mermaid quando pertinentes
  - Plano de Verificacao com testes automatizados e checagem manual
- Respeite rigorosamente a ADR 0001: ausencia total de parenteses, travessoes e emojis em todo o texto.

### 3. Registro do Cartao Executivo em docs/next
- Gere o cartao de execucao em formato markdown no caminho `docs/next/<nome-da-atividade>.md`.
- Divida o trabalho em etapas numeradas e itens com caixas de selecao nao marcadas.
- O cartao servira de guia para a execucao subsequente e sera consumido pela skill git-flow-gatekeeper.
