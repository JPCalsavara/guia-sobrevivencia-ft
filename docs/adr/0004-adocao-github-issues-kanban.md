# ADR 0004: Adocao do GitHub Issues para Gerenciamento de Tarefas

## Status
Aceito

## Data
2026-10-03

## Contexto

Ate o momento, o gerenciamento de tarefas do projeto ocorria localmente atraves de arquivos Markdown armazenados nos diretorios `docs/next/` ou `docs/kanban/`. Embora esta abordagem mantivesse os dados versionados junto com o codigo facilitando o acesso nativo pelas IAs, a interface visual e o acompanhamento humano se tornaram insustentaveis. 

Nao havia integracao direta com Pull Requests fechamento automatico de tarefas e o quadro geral do projeto ficava restrito a exploracao via IDE ou linha de comando. A arquitetura exigia movimentacao manual de arquivos para rastrear o que estava pendente, em andamento ou concluido.

## Decisao

Decidimos abolir o Kanban baseado em diretorios locais `docs/kanban` e migrar integralmente a criacao e rastreamento de tarefas executivas para a ferramenta nativa de Issues do GitHub.

1. As ferramentas e skills dos agentes autonomos devem operar via API MCP para criar, listar e comentar em Issues remotas.
2. Nenhuma especificacao ou tarefa executiva pendente podera residir em arquivos `.md` locais de logistica. Todos os cartoes devem ser mapeados como issues numeradas no ambiente centralizado.
3. Para atrelar um fechamento automatico da Issue no momento da integracao, os Pull Requests deverao usar a sintaxe padrao nas descricoes: `Closes #XYZ`.

## Consequencias

- **Positivas:**
  - Organizacao visual otimizada para o time e acompanhamento nativo usando GitHub Projects.
  - Vinculacao direta de commits e PRs com a funcionalidade rastreada.
  - Simplificacao do repositorio local com a eliminacao da movimentacao sintetica de arquivos de um lado para o outro.
- **Negativas:**
  - Os agentes irao depender de conectividade externa API para consultar o escopo, inserindo uma pequena latencia comparado a leitura de disco rigido local.
