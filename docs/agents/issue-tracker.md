# Issue tracker: GitHub Issues

Conforme estipulado pela ADR 0004, o rastreamento de tarefas, issues e especificacoes neste repositorio utiliza nativamente as funcionalidades do GitHub Issues. Toda a antiga infraestrutura de Kanban baseada em arquivos Markdown locais no diretorio de documentacao foi substituida.

## Integracao de Agentes

1. As ferramentas e skills de agentes autonomos devem operar exclusivamente via API do MCP do Gitlab/GitHub para listar, buscar, comentar e fechar Issues.
2. Nenhuma especificacao pendente de desenvolvimento reside no espaco de disco do projeto local.
3. As PRs abertas pelos agentes ou contribuidores humanos devem declarar a palavra chave "Closes #ID" no corpo para atrelar a solucao.

## Fluxo de Integracao de Codigo e Branches

Conforme estipulado pela ADR 0003, o modelo de mesclagem e ramificacao impoe:
- Nome da Branch: `<tipo>/<ID-da-issue>-<titulo>`.
- Estrategia de Fusao: Somente _Squash and Merge_ deve ser empregada para integrar alteracoes de codigo de um request a ramificacao de producao. 
- Mensagem de Commit: Ao concluir, o commit sintetizado seguira o formato imperativo e linear: `<tipo> <ID-da-issue>: <descricao>`. O uso de parenteses nesse padrao esta suspenso por forca da ADR 0001.

## Excecoes

Ate a maturidade total de todos os bots operacionais, se uma ferramenta for incapaz temporariamente de se conectar com o servidor do GitHub, podera adotar a criacao de artefatos efemeros na pasta brain, mas sua destinacao final tem de ser a migracao via console cli para o GitHub.
