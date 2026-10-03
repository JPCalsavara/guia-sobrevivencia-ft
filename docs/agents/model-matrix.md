# Matriz de Selecao de Modelos de IA e Playbook de Priorizacao

Este documento estabelece a distribuicao recomendada de modelos de inteligencia artificial e o fluxo integrado de priorizacao de tarefas no Guia de Sobrevivencia da FT.

## 1. Familias e Niveis de Modelos de IA

1. Claude 3.7 Sonnet: Modelo de referencia para redacao de especificacoes completas to-spec, refatoracoes aprofundadas no ecossistema React e SCSS, design de interfaces e revisao semantica de codigo.
2. Claude 3.5 Haiku: Modelo veloz indicado para correcoes mecanicas pontuais, ajustes de lint e triagem rapida de alteracoes.
3. Gemini Pro: Modelo de alta capacidade cognitiva para orquestracao de fluxos, decomposicao sistemica, entrevistas grill-me e diagnostico de causas raiz em problemas complexos.
4. Gemini Flash: Modelo de execucao rapida com ampla janela de contexto, ideal para pesquisas exploratorias no repositorio, ingestao de logs e confeccao de suites de testes unitarios.
5. Gemini Flash-Lite: Modelo de custo zero adotado na automacao do AI Quality Gatekeeper via GitHub Actions para aprovacao agil de Pull Requests.

## 2. Matriz de Atividades e Modelos Recomendados

| Fase do Ciclo | Atividade Especifica | Modelo Primario | Modelo Alternativo | Justificativa Tecnica |
| :--- | :--- | :--- | :--- | :--- |
| Planejamento | Conducao de entrevistas grill-me e planos tecnicos | Gemini Pro | Claude 3.7 Sonnet | Raciocinio aprofundado para exploracao da arvore de decisoes e consistencia com o dominio |
| Especificacao | Redacao da especificacao funcional to-spec | Claude 3.7 Sonnet | Gemini Pro | Capacidade superior de estruturar user stories e contratos de interface detalhados |
| Decomposicao | Fatiamento em tickets verticais to-tickets | Claude 3.7 Sonnet | Gemini Pro | Mapeamento cirurgico de dependencias e fatiamento vertical em tracer bullets |
| Pesquisa | Varredura de codigo e leitura de multiplos arquivos | Gemini Flash | Claude 3.5 Haiku | Agilidade de busca no repositorio sem consumo desnecessario de cotas cognitivas |
| Desenvolvimento | Codificacao de modulos React e estilizacao SCSS | Claude 3.7 Sonnet | Gemini Pro | Refinamento estetico superior, modularizacao CSS rigorosa e tipagem TypeScript estrita |
| Desenvolvimento | Ajustes rapidos de regras, lints e nomes | Claude 3.5 Haiku | Gemini Flash | Resposta instantanea para correcoes sintaticas pontuais |
| Testes | Casos de borda, sincronizacao e estados concorrentes | Gemini Pro | Claude 3.7 Sonnet | Prevencao de condicoes de corrida e garantia de conformidade com a ADR 0001 |
| Testes | Testes unitarios padrao e massas de dados | Gemini Flash | Claude 3.5 Haiku | Confeccao agil de mocks e assercoes estruturais em Vitest |
| Code Review | Validacao semantica de aderencia a especificacao | Claude 3.7 Sonnet | Gemini Pro | Confronto rigoroso entre os requisitos do card e as mudancas reais do diff |
| Code Review | Checagem de padroes sintaticos e estilo | Gemini Flash | Claude 3.5 Haiku | Deteccao veloz de desvios nas diretrizes do repositorio |
| Diagnostico | Formulacao de hipoteses em bugs obscuros | Gemini Pro | Claude 3.7 Sonnet | Analise de causa raiz em camadas de renderizacao e containing block |
| Automacao CI | AI Quality Gatekeeper no GitHub Actions | Gemini Flash-Lite | Nao aplicavel | Execucao em nuvem sem custo e com alta velocidade no fluxo git-flow |

## 3. Playbook de Criacao e Priorizacao de Cards

O ciclo de gestao de tarefas do projeto integra as habilidades to-spec e to-tickets ao fluxo executivo do git-flow-gatekeeper em tres niveis:

### Nivel 1: Especificacao Geral da Feature
Ao conceber uma nova funcionalidade ou grande refatoracao, execute a sintese do escopo com to-spec no diretorio local:
- Caminho: `.scratch/<feature-slug>/spec.md`
- Conteudo: declaracao do problema, solucao do ponto de vista do usuario, historias de usuario detalhadas e decisoes de arquitetura.
- Modelo recomendado: Claude 3.7 Sonnet.

### Nivel 2: Decomposicao em Tickets Verticais com Grafo de Bloqueio
Apos aprovar a especificacao, utilize to-tickets para fatiar o trabalho em tracer bullets independentes:
- Caminho: `.scratch/<feature-slug>/issues/01-<slug>.md`, `.scratch/<feature-slug>/issues/02-<slug>.md`, etc.
- Regra de fatiamento: cada ticket deve cortar todas as camadas necessarias da aplicacao de ponta a ponta e ser verificavel isoladamente.
- Declaracao de bloqueio: cada arquivo declara explicitamente no cabecalho a linha `Blocked by: NN` para estabelecer a ordem de precedencia.
- Regra de refatoracao ampla: mudancas de alto impacto mecanico devem seguir a sequencia expandir-migrar-contrair.

### Nivel 3: Promocao do Card Prioritario para docs/next
Para iniciar a implementacao de um lote de trabalho:
1. Inspecione os tickets em `.scratch/<feature-slug>/issues/` e identifique a fronteira desbloqueada, isto e, os tickets cujas dependencias ja estao resolvidas.
2. Promova o ticket prioritario da fronteira gerando o cartao executivo em `docs/next/<nome-da-tarefa>.md`.
3. Estruture o cartao com caixas de selecao numeradas para cada subetapa.
4. Execute o desenvolvimento em branch dedicada acompanhada de testes unitarios.
5. Ao concluir, execute o ciclo com git-flow-gatekeeper, que roda a suite de testes, aciona o AI Gatekeeper, remove o cartao finalizado em docs/next e publica o Pull Request.

## 4. Regras de Ouro na Priorizacao

1. Fronteira Desbloqueada Primeiro: Jamais inicie tarefas que dependam de contratos ou dados ainda nao concluidos.
2. Contratos e Infraestrutura antes de Telas: Modele interfaces TypeScript, rotas de API e persistencia de dados antes de polir elementos puramente visuais.
3. Fatias Pequenas e Verificaveis: Cada card em docs/next deve representar uma unidade entregavel e testavel com zero quebras em producao.
