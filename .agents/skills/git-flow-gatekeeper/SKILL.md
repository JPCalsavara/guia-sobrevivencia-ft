---
name: git-flow-gatekeeper
description: Orquestra o ciclo git-flow completo, executa a suite de testes e o AI Gatekeeper, ativa loop de auto-recuperacao com ate tres iteracoes, apaga o card concluido em docs/next e cria o Pull Request formal via gh pr create.
---

# Skill Git-Flow Gatekeeper

Esta skill coordena o fluxo de entrega continua de codigo no Guia de Sobrevivencia da Faculdade de Tecnologia da Unicamp. Ela integra testes automatizados, avaliacao pelo AI Gatekeeper baseado no repositorio JPCalsavara/ai-gatekeeper, correcao autonoma de defeitos, gerenciamento de cartoes de demanda e submissao de Pull Requests.

## Procedimento Operacional Padrao

### 1. Criacao e Gerenciamento da Branch
- Garanta que todo o trabalho seja desenvolvido em uma branch isolada com prefixo feature, fix, chore ou docs.
- Nunca realize comissoes de desenvolvimento diretamente na branch main, respeitando a protecao estrita da ADR 0008.

### 2. Execucao de Testes e Extracao de Diff
- Execute a suite de testes Vitest e registre a saida completa em arquivo de log:
  ```bash
  npm test > tests.log 2>&1 || true
  ```
- Extraia a diferenca entre o ramo de trabalho e o ramo principal:
  ```bash
  git diff origin/main...HEAD > diff.txt
  ```

### 3. Avaliacao com o AI Gatekeeper
- Execute o motor do AI Gatekeeper localizado no diretorio `.gatekeeper/` ou por meio do script correspondente:
  ```bash
  python3 .gatekeeper/gatekeeper.py --target .
  ```
- O Gatekeeper analisara o diff, os logs de teste, as normas arquiteturais do Context Harness e gerara o relatorio em `report.md`.

### 4. Ciclo de Auto-Recuperacao em Caso de Falha
- Se a suite de testes registrar falhas ou o AI Gatekeeper emitir veredito de reprovacao:
  - Leia o arquivo `tests.log` e localize os tracebacks e erros de assercao.
  - Leia o arquivo `report.md` e verifique os pontos de violacao apontados pelo Tech Lead supervisor.
  - Aplique as correcoes de codigo necessarias na base.
  - Re-execute os testes e a analise do Gatekeeper.
  - O agente deve iterar autonomamente nesse ciclo por ate tres tentativas consecutivas.
  - Caso o problema persista apos a terceira iteracao, interrompa o fluxo e apresente o diagnostico detalhado ao desenvolvedor.

### 5. Remocao do Cartao Concluido em docs/next
- Apos a aprovacao completa dos testes e do AI Gatekeeper:
  - Verifique se o cartao de execucao correspondente em `docs/next/<atividade>.md` teve todas as suas tarefas finalizadas.
  - Remova o arquivo do cartao em `docs/next/` para manter a pasta limpa, contendo apenas trabalhos futuros.
  - Adicione a remocao do arquivo ao stage do git.

### 6. Submissao do Pull Request
- Registre o commit final com mensagem semantica no padrao Conventional Commits, com ausencia estrita de parenteses, travessoes e emojis segundo a ADR 0001.
- Envie a branch para o repositorio remoto:
  ```bash
  git push -u origin <nome-da-branch>
  ```
- Crie o Pull Request oficial utilizando a interface de linha de comando do GitHub:
  ```bash
  gh pr create --title "<titulo semantico>" --body "<descricao detalhada com o relatorio do gatekeeper anexado>"
  ```
