---
name: content-to-card
description: Transforma ideias, links, videos e notas de conteudo diretamente em um cartao executivo pronto para desenvolvimento em docs/next sem burocracia de especificacoes pesadas.
model: claude-3-7-sonnet
---

# Content to Card

Esta skill automatiza a transformacao imediata de solicitacoes de conteudo em cartoes executivos prontos para desenvolvimento no Guia de Sobrevivencia da FT.

## Proposito

Muitas entregas do projeto consistem na adicao ou expansao de conteudos editoriais, tais como:
1. Guias de carreira, comparativos salariais e analises de mercado.
2. Curadoria de links, artigos e videos educativos de referencia.
3. Dicas academicas, orientacoes de estagio e grade curricular.
4. Perguntas frequentes e boas praticas de estudo.

Para esses cenarios, a elaboracao formal de especificacoes complexas com dezenas de historias de usuario e desnecessaria. Esta skill extrai os temas centrais e gera diretamente o cartao executivo em `docs/kanban/todo/<slug>.md`.

## Fluxo de Execucao

### 1. Receber as Anotacoes do Desenvolvedor
O desenvolvedor fornece notas brutas, topicos, links de videos do YouTube, artigos ou sugestoes de pesquisa.

### 2. Mapeamento Editorial e Arquitetural
A skill identifica automaticamente:
- **Pagina de Destino:** Identifica qual rota do portal recebera o conteudo, como `/carreira`, `/academico`, `/calouros`, `/estudos-ia`, `/links` ou `/duvidas`.
- **Arquivos de Dados:** Mapeia quais catalogos em `src/data/` devem ser atualizados, como `links.ts`, `headerTopics.ts`, `searchIndex.ts`, `faq.ts` ou `academic.ts`.
- **Conformidade com ADR 0001:** Assegura que nenhum texto utilize parenteses, travessoes ou emojis.

### 3. Publicacao do Cartao em docs/next
Gera o arquivo `docs/kanban/todo/<slug-da-tarefa>.md` contendo:
- Titulo e objetivo claro.
- Paginas e arquivos impactados.
- Checklist numerado de subetapas com caixas de selecao nao marcadas.
- Roteiro de testes automatizados e verificacao manual.

### 4. Execucao pelo Git Flow Gatekeeper
Com o cartao criado em `docs/kanban/todo/`, o desenvolvimento pode ser iniciado imediatamente na branch dedicada e concluido pela skill `git-flow-gatekeeper`.
