---
name: content-to-card
description: Transforma ideias, links, videos e notas de conteudo diretamente em um cartao executivo no GitHub Issues sem burocracia de especificacoes pesadas.
model: claude-3-7-sonnet
---

# Content to Card

Esta skill automatiza a transformacao imediata de solicitacoes de conteudo em cartoes executivos prontos para desenvolvimento no GitHub Issues.

## Fluxo de Execucao

### 1. Receber as Anotacoes do Desenvolvedor
O desenvolvedor fornece notas brutas, topicos, links de videos do YouTube, artigos ou sugestoes de pesquisa.

### 2. Mapeamento Editorial e Arquitetural
A skill identifica automaticamente as rotas e arquivos impactados, alem de garantir a conformidade com a ADR 0001 antes de redigir a especificacao final.

### 3. Publicacao da Issue
Utilizando a API MCP ou comando do gh cli, a skill cria a nova solicitacao no repositorio sob a aba de Issues. O titulo deve ser objetivo e o corpo deve incluir a listagem das operacoes necessarias em formato de checkboxes de markdown.

### 4. Execucao pelo Git Flow Gatekeeper
Apos a criacao da issue a branch de trabalho devera ser batizada no modelo descrito na ADR 0003 e a execucao e conduzida com a skill respectiva.
