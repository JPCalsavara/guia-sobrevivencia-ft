---
name: git-flow-gatekeeper
description: Orquestra o ciclo git-flow completo com branch baseada na ADR 0003 e ADR 0010, executa a suite de testes e o AI Gatekeeper, vincula e cria o Pull Request formal no GitHub para a branch dev e conduz a promocao para a branch main aplicando Squash and Merge.
---

# Skill Git-Flow Gatekeeper

Esta skill coordena o fluxo de entrega continua de codigo integrando testes automatizados, avaliacao pelo AI Gatekeeper e submissao de Pull Requests orientada a Issues, em conformidade com as diretrizes da ADR 0001, ADR 0003, ADR 0004, ADR 0008, ADR 0010 e ADR 0011.

## Procedimento Operacional Padrao

### 1. Criacao e Gerenciamento da Branch de Trabalho
- Todo trabalho de desenvolvimento deve ser realizado em uma branch isolada criada a partir da branch dev, respeitando a ADR 0010.
- A nomenclatura segue o padrao da ADR 0003: `tipo/ID-da-issue-titulo`.
- E terminantemente proibido criar branches de funcionalidade a partir da main ou comitar diretamente na main.

### 2. Execucao de Testes e Extracao de Diff
- Execute a suite de testes Vitest e registre a saida completa em arquivo de log.
- Extraia a diferenca entre a branch de trabalho e a branch dev.

### 3. Avaliacao com o AI Gatekeeper
- Execute o motor do AI Gatekeeper para auditoria de codigo, qualidade e conformidade arquitetural.

### 4. Ciclo de Auto-Recuperacao em Caso de Falha
- Analise os relatorios e logs gerados caso ocorra falha de testes ou reprovacao.
- Corrija as inconsistencias e reexecute os passos necessarios ate a completa aprovacao antes de abrir o Pull Request.

### 5. Finalizacao e Submissao do Pull Request para Dev
- Registre o commit no padrao Conventional Commits respeitando a ADR 0001: `tipo ID-da-issue: descricao curta`.
- Envie a branch de trabalho para o repositorio remoto no GitHub.
- Crie o Pull Request oficial utilizando a interface de linha de comando do GitHub com destino exclusivo na branch dev:
  `gh pr create --base dev --head <branch-de-trabalho> --title "..." --body "..."`
- O texto do corpo do PR deve conter obrigatoriamente a declaracao `Closes #ID` e respeitar a ADR 0001.
- A esteira de CI do GitHub Actions bloqueia automaticamente qualquer tentativa de direcionar branches de funcionalidade diretamente para a branch main.

### 6. Homologacao e Squash and Merge em Dev
- Acompanhe a esteira de CI no GitHub Actions com os testes e o parecer do Gatekeeper.
- Realize o Squash and Merge na branch dev e descarte a branch temporaria:
  `gh pr merge <numero-pr> --squash --delete-branch`

### 7. Promocao de Dev para Main e Geracao de Release
- Apos a conclusao e homologacao das entregas na branch dev, abra um Pull Request formal com origem em dev e destino em main:
  `gh pr create --base main --head dev --title "release: promocao de dev para main" --body "..."`
- Aguarde a conclusao dos testes e do parecer do Gatekeeper.
- Realize a mesclagem na main via Squash and Merge.
- O pipeline no GitHub Actions detectara a atualizacao na main e publicara o novo release oficial com tag SemVer.
