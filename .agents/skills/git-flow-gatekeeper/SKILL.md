---
name: git-flow-gatekeeper
description: Orquestra o ciclo git-flow completo com branch baseada na ADR 0003, executa a suite de testes e o AI Gatekeeper, vincula e cria o Pull Request formal no GitHub de forma a aplicar Squash and Merge.
---

# Skill Git-Flow Gatekeeper

Esta skill coordena o fluxo de entrega continua de codigo integrando testes automatizados, avaliacao pelo AI Gatekeeper e submissao de Pull Requests orientada a Issues, de acordo com a ADR 0003 e a ADR 0004.

## Procedimento Operacional Padrao

### 1. Criacao e Gerenciamento da Branch
- Garanta que todo o trabalho seja desenvolvido em uma branch isolada padronizada pela ADR 0003 `TIPO/ID-da-issue-titulo`.
- Nunca realize comissoes de desenvolvimento diretamente na branch main, respeitando a protecao estrita da ADR 0008.

### 2. Execucao de Testes e Extracao de Diff
- Execute a suite de testes Vitest e registre a saida completa em arquivo de log.
- Extraia a diferenca entre o ramo de trabalho e o ramo principal.

### 3. Avaliacao com o AI Gatekeeper
- Execute o motor do AI Gatekeeper para relatorios.

### 4. Ciclo de Auto-Recuperacao em Caso de Falha
- Leia e corrija os relatorios e logs gerados ate que tudo fique de forma saudavel para avancar, repetindo os steps validos ate estourar o limite de tres tentativas.

### 5. Finalizacao e Submissao do Pull Request
- Registre o commit com mensagem semantica no padrao Conventional Commits. A ADR 0001 barra parenteses entao pule do prefixo direto para o id, como por exemplo, `feat 12: nome`.
- O PR dever conter expressamente o termo `Closes #ID` no texto do body.
- Envie a branch para o repositorio remoto.
- Crie o Pull Request oficial utilizando a interface de linha de comando do GitHub.
