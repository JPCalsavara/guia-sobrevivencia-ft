# Fluxo de Desenvolvimento Integrado de Agentes

Este documento estabelece o fluxo oficial de desenvolvimento no Guia de Sobrevivencia da Faculdade de Tecnologia da Unicamp, integrando refinamento, implementacao, revisao e git-flow conforme a ADR 0003, ADR 0004, ADR 0010 e ADR 0011.

## Visao Geral das Etapas

O ciclo de entrega de software e estruturado em quatro etapas sequenciais:

1. Refinamento Tecnico com Grill-Me
2. Implementacao Orientada a Especificacao e Testes
3. Revisao de Codigo e AI Gatekeeper
4. Ciclo Git-Flow com Integracao em Dev e Promocao para Main

## Detalhamento das Etapas

### 1. Refinamento Tecnico com Grill-Me

Objetivo: Eliminar ambiguidades, esclarecer requisitos de Interacao Humano-Computador, identificar impactos na comunidade discente e planejar contratos arquiteturais antes de escrever codigo.

Procedimento:
- Ativacao da skill grill-me ou plan-with-grill para entrevistar o requisitante.
- Analise de aderencia as decisoes arquiteturais do projeto:
  Conformidade com a ADR 0001: ausencia total de parenteses, travessoes e emojis no texto.
  Conformidade com a ADR 0002: design mobile-first e responsividade.
  Conformidade com a ADR 0003: acessibilidade WCAG AA.
  Conformidade com a ADR 0004: proibicao de dados volateis no codigo, exigindo links para fontes canonicas oficiais da DAC ou Unicamp.
  Conformidade com a ADR 0011: decomposicao em camadas modulares e orientadas a dominios.
- Conclusao da especificacao formal e publicacao direta no GitHub Issues com criterios de aceite detalhados e atribuicao da etiqueta ready-for-agent.

### 2. Implementacao Orientada a Especificacao e Testes

Objetivo: Construir a solucao com isolamento em branch, testes automatizados e modularidade.

Procedimento:
- Criacao de branch de trabalho a partir da branch dev, utilizando a nomenclatura padronizada tipo/ID-da-issue-titulo conforme a ADR 0003 e a ADR 0010. Exemplos: feature/25-mural-de-duvidas ou fix/12-correcao-layout.
- Nunca criar branches a partir da main para desenvolvimento ativo de funcionalidades.
- Construcao orientada a testes com Vitest, implementando contratos de tipos TypeScript, fontes de dados em src/data e componentes modulares com SCSS Modules em src/components.
- Execucao do script de vetorizacao para atualizar indices de busca sempre que novos topicos ou rotas forem adicionados.

### 3. Revisao de Codigo e AI Gatekeeper

Objetivo: Garantir conformidade integral com padroes de qualidade antes de abrir a requisicao para integracao.

Procedimento:
- Execucao local da suite de testes completa com npm test, assegurando 100% de aprovacao em todos os arquivos de teste.
- Extracao da diferenca de codigo em relacao a branch dev.
- Execucao do motor do AI Gatekeeper para analisar eventuais regressoes, violacoes de acessibilidade ou presenca de marcas proibidas pela ADR 0001.
- Ciclo de auto-recuperacao: caso qualquer teste ou verificacao falhe, o agente deve corrigir o codigo de imediato e reexecutar a validacao ate a completa homologacao.

### 4. Ciclo Git-Flow com Integracao em Dev e Promocao para Main

Objetivo: Integrar as alteracoes de forma segura, rastreavel e sem degradar a estabilidade da producao.

Procedimento de Integracao na Branch Dev:
- Comissao de codigo no padrao Conventional Commits respeitando a ADR 0001: tipo ID-da-issue: descricao curta.
- Envio da branch de trabalho para o repositorio remoto no GitHub.
- Abertura de Pull Request direcionado obrigatoriamente para a branch dev.
- O corpo do Pull Request deve conter a clausula Closes #ID para vincular o fechamento da issue.
- E proibido direcionar o Pull Request de uma branch de trabalho diretamente para a branch main. A esteira automatizada bloqueia e rejeita qualquer tentativa desse tipo.
- A esteira de CI do GitHub Actions executa os testes e o AI Gatekeeper.
- Apos aprovacao, realiza-se o Squash and Merge na branch dev, removendo a branch de trabalho temporaria.

Procedimento de Promocao para a Branch Main:
- Apos a integracao e estabilizacao na branch dev, abre-se um Pull Request formal com origem em dev e destino em main.
- O Pull Request de promocao passa pela esteira de CI e recebe o parecer final do AI Gatekeeper.
- Apos a aprovacao, realiza-se a mesclagem na branch main, disparando o workflow automatizado de release que gera a tag de versao oficial e publica o release no GitHub.
- Sincronizacao local e remota das branches dev e main para manter paridade.
