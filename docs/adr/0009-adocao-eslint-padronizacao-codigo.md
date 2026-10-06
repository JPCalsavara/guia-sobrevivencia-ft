# ADR 0009: Adoção do ESLint e Prettier para Padronização de Código e Linting

## Status
Aceita

## Contexto
Durante o desenvolvimento contínuo do projeto, a ausência de um linter estrito e formatador de código automatizado gera atritos na revisão de Pull Requests e inconsistências estruturais no código-fonte. O Next.js fornece uma integração básica de linting através do comando `next lint`, mas ela foi depreciada para as versões futuras como Next.js 16 e necessita de migração para a CLI padrão do ESLint.

É necessário padronizar o estilo de escrita, regras de tipagem do TypeScript, organização de imports e detecção de code smells de forma automatizada para manter a manutenibilidade a longo prazo do Guia de Sobrevivência.

## Decisão
Adotaremos a dobradinha estrutural **ESLint + Prettier** como a ferramenta oficial de linting e formatação de código do repositório.

1. **ESLint CLI**: O projeto deixará de depender do comando `next lint` para a integração em CI/CD e adotará `eslint` nativo, acoplado com os plugins do Next.js e TypeScript.
2. **Husky e Lint-Staged**: A verificação de linting passará a ocorrer nos hooks de pré-commit via `lint-staged`.
3. **Bloqueio de PR**: A integração contínua como Github Actions ou Vercel Build não aprovará Pull Requests com falhas reportadas pelo ESLint nas categorias Warning ou Error.

## Consequências

- **Positivas**: Redução drástica em revisões baseadas em "estilo de código"; identificação precoce de variáveis não declaradas, imports esquecidos e problemas de escopo; maior previsibilidade no pipeline de integração.
- **Negativas**: Curva de configuração inicial e possível necessidade de adaptar regras demasiadamente restritas com `eslint-disable` em casos excepcionais. Há uma necessidade de adaptar scripts antigos.

## Autorização
Revisado no PR pelo time de mantenedores.
