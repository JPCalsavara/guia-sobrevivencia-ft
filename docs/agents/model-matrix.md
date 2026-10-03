# Matriz de Selecao de Modelos de IA por Tarefa

Este documento estabelece a distribuicao recomendada de modelos de inteligencia artificial para cada atividade do ciclo de desenvolvimento no Guia de Sobrevivencia da FT.

## 1. Visao Geral dos Niveis de Modelos

1. Pro: Indicado para raciocinio arquitetural aprofundado, decomposicao de sistemas, compreensao de dependencias cruzadas e diagnostico de comportamentos complexos.
2. Flash: Indicado para velocidade elevada, processamento de contexto medio, buscas direcionadas e geracao de codigo padronizado com suites de testes.
3. Flash-Lite: Indicado para operacoes de custo minimo e resposta imediata, execucao automatizada em esteiras de CI e triagem rapida de alteracoes.

## 2. Matriz de Atividades e Modelos Recomendados

| Fase do Ciclo | Atividade Especifica | Modelo Recomendado | Justificativa Tecnica |
| :--- | :--- | :--- | :--- |
| Planejamento | Arquitetura, ADRs e entrevistas grill-me | Pro | Garante profundidade conceitual, exploracao da arvore de decisoes e consistencia com o dominio do projeto |
| Planejamento | Levantamento de fatos e leitura de arquivos | Flash | Rapidez na varredura do repositorio sem desperdicio de cotas cognitivas |
| Desenvolvimento | Codificacao central e refatoracoes estruturais | Pro | Minimiza regressoes e assegura aderencia rigorosa aos padroes de tipos e regras de modularizacao |
| Desenvolvimento | Criacao de componentes visuais simples | Flash | Implementacao agil de interfaces a partir de layouts e especificacoes bem definidas |
| Testes | Casos de borda, estados reativos e modais | Pro | Cobertura precisa de condicoes concorrentes, navegacao e conformidade com ADR 0001 |
| Testes | Testes unitarios padrao e massas de dados | Flash | Geracao rapida de suites com Vitest e React Testing Library |
| Code Review | Validacao semantica da especificacao | Pro | Confronta o escopo original com a implementacao real para assegurar entrega completa |
| Code Review | Analise de regras locais, linter e estilos | Flash | Identifica desvios sintaticos e violacoes de diretrizes com alta agilidade |
| Diagnostico | Formulacao de hipoteses em bugs dificeis | Pro | Analise causal avancada de anomalias em camadas CSS e arvore de renderizacao |
| Diagnostico | Rastreamento de logs e pesquisa no codigo | Flash | Busca eficiente de referencias e ocorrencias pontuais no ecossistema |
| Automacao CI | AI Quality Gatekeeper no GitHub Actions | Flash-Lite | Analise automatizada em nuvem com custo zero e tempo de resposta veloz |

## 3. Diretrizes de Invocacao de Subagentes

1. O orquestrador principal opera prioritariamente com o modelo Pro para conduzir o raciocinio e coordenar as fases.
2. Tarefas de pesquisa de dados ou leitura sequencial de multiplos arquivos devem ser delegadas para subagentes do tipo research utilizando o modelo Flash.
3. Em tarefas de revisao dupla, a analise de conformidade arquitetural utiliza o modelo Flash, enquanto a analise funcional de produto utiliza o modelo Pro.
