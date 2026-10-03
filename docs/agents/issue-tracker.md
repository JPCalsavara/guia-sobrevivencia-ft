# Issue tracker: Kanban Local Markdown

O rastreamento de tarefas, *issues* e especificacoes neste repositorio utiliza arquivos Markdown organizados em um fluxo Kanban simples e transparente no diretorio `docs/kanban/`.

## Estrutura do Kanban

- `docs/kanban/todo/`: Guarda todas as tarefas, propostas e *cards* gerados (ex: via *content-to-card* ou *plan-with-grill*) que estao prontos ou aguardando fila de execucao.
- `docs/kanban/doing/`: Para onde os *cards* sao movidos manualmente ou por agentes antes do inicio da implementacao. Isso sinaliza trabalho em andamento.
- `docs/kanban/done/`: Arquivo historico permanente de tarefas entregues. O *git-flow-gatekeeper* move autonomamente os *cards* concluidos de *doing* (ou *todo*) para ca no momento do PR. Nao apague o historico.

## Convencoes

- Utilize um arquivo Markdown por tarefa (ex: `001-nome-da-feature.md`).
- A numeracao ajuda na ordenacao cronologica das entregas e no rastreamento.
- Nunca crie um documento com varias tarefas complexas de uma vez; separe-as em *cards* distintos para permitir a entrega continua paralela.

## Quando uma skill solicitar a publicacao ou leitura

Crie, mova ou leia o arquivo Markdown diretamente nos diretorios de *kanban*, respeitando seu status atual.
