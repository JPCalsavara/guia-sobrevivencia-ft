# Versionamento Semantico Releases Automaticos e Protecao de Branch

## Contexto

A evolucao do Guia de Sobrevivencia da Faculdade de Tecnologia da Unicamp alcancou maturidade suficiente para estabelecer uma esteira formal de lancamentos com rastreabilidade clara de versoes. Conforme novos colaboradores e agentes adicionam topicos, rotas e melhorias, torna-se imperativo adotar um padrao estrito para classificar mudancas, proteger a branch principal contra comissoes diretas sem validacao e gerar lancamentos com tags versionadas a cada integracao de codigo no fluxo de trabalho git-flow.

A comunidade academica e os mantenedores necessitam compreender com facilidade o impacto de cada atualizacao publicada em producao, diferenciando alteracoes estruturais profundas de novas funcionalidades e correcoes pontuais.

## Decisao

Adotar a politica de Versionamento Semantico SemVer associada a automacao de releases no fluxo git-flow e protecao obrigatoria da branch main:

1. Classificacao das mudancas em tres niveis semanticos:
   Major: Incrementado quando ocorrem mudancas totais de arquitetura, reestruturacao integral de paginas ou rupturas de compatibilidade. Branches do tipo major ou breaking e comissoes com BREAKING CHANGE disparam esse incremento.
   Minor: Incrementado na adicao de novas funcionalidades, novos modulos, novas paginas completas ou expansao relevante de conteudos. Branches do tipo feature ou comissoes iniciadas por feat disparam esse incremento.
   Patch: Incrementado em correcoes de bugs, revisoes de texto, ajustes de links, refinamentos visuais de estilos e atualizacoes de documentacao. Branches do tipo fix, hotfix, docs ou content disparam esse incremento.

2. Automacao de releases a cada merge na branch main:
   Toda vez que uma branch de funcionalidade, correcao ou ajuste for mesclada na branch main pelo git-flow, o hook de pos-mesclagem executa o script de automacao de versao. O script analisa o historico de comissoes desde a tag anterior, calcula o novo numero de versao, atualiza o arquivo package.json e gera uma tag anotada no padrao vX.Y.Z.

3. Bloqueio estrito de comissoes diretas na branch main:
   O hook local de pre-comissao impede a execucao de comissoes diretas na branch main. Nenhum desenvolvedor ou agente pode efetuar alteracoes diretamente na branch principal. Qualquer alteracao deve obrigatoriamente nascer em uma branch derivada de feature, fix ou release e ser integrada por meio de git merge com registro formal. Apenas rotinas automatizadas de release devidamente sinalizadas possuem autorizacao para registrar atualizacoes de versao na main.

4. Conformidade estrita com o ADR 0001:
   Todas as tags, notas de release, comissoes e arquivos de script devem respeitar a ausencia total de travessoes, parenteses e emojis decorativos.

5. Obrigatoriedade de Pull Requests e AI Gatekeeper:
   Toda alteracao submetida para integracao na branch main exige a abertura de um Pull Request no GitHub. O pipeline de integracao continua executa a suite de testes automatizados, extrai o diff da branch e aciona o AI Gatekeeper com base nas regras do Context Harness. O merge e condicionado a aprovacao formal dos testes e ao parecer favoravel do Tech Lead supervisor do Gatekeeper, sendo impedidos envios diretos por meio do hook local de pre-push.

## Consequencias

Garante-se integridade total da branch principal, pois nenhum codigo chega a producao sem passar pelo isolamento de branches e pela esteira de testes automatizados. O historico do repositorio passa a contar com marcadores de versao confiaveis, facilitando a observabilidade de lancamentos e o acompanhamento das melhorias entregues aos estudantes da FT.
