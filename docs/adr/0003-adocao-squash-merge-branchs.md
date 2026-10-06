# ADR 0003: Adocao de Squash and Merge para Integracao de Branches

## Status
Aceito

## Data
2026-10-03

## Contexto

Com a adocao do fluxo de desenvolvimento baseado em issues do GitHub, os desenvolvedores trabalham em branches dedicadas `<tipo>/<ID-da-issue>-<titulo>`. Durante o desenvolvimento de uma funcionalidade ou correcao de bug, e comum que a branch acumule pequenos commits com descricoes nao padronizadas, progressos parciais, trabalhos em progresso WIP, correcoes ortograficas ou ajustes de lint.

Se usarmos o Merge Commit padrao para integrar essas branches a branch principal, todo esse historico detalhado e frequentemente irrelevante sera transferido. Isso resulta em um historico poluido, complexo e dificil de auditar, dificultando o uso de ferramentas nativas de reversao de funcionalidades e a leitura dos changelogs de release.

A equipe precisa de um historico nas branches principais que seja linear, legivel, atomico e que represente entregas de valor sobre o que foi feito, ocultando os detalhes granulares do desenvolvimento sobre como foi feito.

## Decisao

Fica determinado que todos os Pull Requests e Merge Requests integrados a branch principal devem ser mesclados utilizando a estrategia de Squash and Merge.

1. **Um Commit por Issue:** Ao realizar o merge, todos os commits da branch de desenvolvimento devem ser comprimidos em um unico commit coeso na branch principal.
2. **Padrao de Mensagem de Commit:** A mensagem do commit resultante do squash deve obrigatoriamente seguir o padrao estipulado: `<tipo> <ID-da-issue>: <descricao curta no imperativo>`. Observacao: Devido a ADR 0001, nao podemos utilizar parenteses envolvendo o ID da issue, devendo ser utilizado separacao por espacos vazios ou dois pontos.
3. **Corpo do Commit:** O corpo do commit pode conter a lista dos commits originais para registro historico e referenciar o numero do Merge Request.
4. **Descarte da Branch Fonte:** Apos o merge, a branch individual deve ser removida do repositorio remoto para nao acumular arquivos inuteis.

## Consequencias

- **Positivas:**
  - Historico do repositorio limpo, focado em entregas de alto nivel, operando como documentacao confiavel.
  - Reversao de codigo simples e segura, pois funcionalidades inteiras residem em commits atomicos.
  - Geracao de changelog baseada em historico extremamente simplificada e precisa.
- **Negativas:**
  - O historico granular com os passos exatos tomados pelo desenvolvedor se perde apos o merge e exclusao da branch. A equipe entende que esta compensacao e altamente vantajosa.
