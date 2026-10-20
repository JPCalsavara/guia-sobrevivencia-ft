# ADR 0010: Fluxo de Branches Git-Flow com Integracao em Dev e Promocao Controlada para Main

## Status
Aceito

## Data
2026-10-19

## Contexto

O Guia de Sobrevivencia da Faculdade de Tecnologia da Unicamp adota esteiras automatizadas de integracao continua e lancamento de versoes oficiais. Inicialmente, o fluxo permitia que branches de desenvolvimento abrissem requisicoes de mudanca direcionadas diretamente a branch principal main.

Com o crescimento da equipe de desenvolvedores e a atuacao intensiva de agentes autonomos, a abertura de requisicoes diretamente na branch principal gera riscos de instabilidade em producao, dificulta a homologacao conjunta de multiplas funcionalidades antes de lancar uma nova versao e pode disparar rotinas de lancamento de release sem a devida validacao em ambiente integrado.

Faz-se necessario estabelecer uma separacao clara entre a branch de desenvolvimento e integracao continua e a branch de producao estavel, instituindo mecanismos tecnicos que impecam o envio prematuro de mudancas a branch principal.

## Decisao

Fica estabelecido o fluxo de trabalho git-flow com duas branches permanentes e promocao controlada:

1. Estrutura de Branches Permanentes:
   A branch dev e a ramificacao de integracao continua, homologacao e recepcao de todas as novas entregas de codigo.
   A branch main e a ramificacao de producao estavel, contendo exclusivamente codigo homologado e marcadores de versao oficial.

2. Origem das Branches de Trabalho:
   Todas as branches de funcionalidade, correcao ou refatoracao devem ser criadas a partir da branch dev, utilizando a nomenclatura padronizada tipo/ID-da-issue-titulo conforme a ADR 0003.

3. Destino Obrigatorio das Requisicoes de Mudanca:
   Todo Pull Request decorrente de uma branch de trabalho deve ter como destino obrigatorio a branch dev. E terminantemente proibido abrir requisicoes de branches de funcionalidade diretamente para a branch main.

4. Bloqueio Automatizado no Pipeline de Integracao:
   A esteira do GitHub Actions valida a branch de destino de cada requisicao. Se o destino for a branch main, a branch de origem deve ser obrigatoriamente a branch dev. Qualquer requisicao de branch de trabalho direcionada a main tera sua esteira reprovada com erro explicativo, impedindo a realizacao da mesclagem.

5. Promocao Controlada para Producao:
   A promocao de alteracoes da branch dev para a branch main ocorre exclusivamente por meio de um Pull Request formal com origem em dev e destino em main. Essa requisicao e submetida a suite de testes e a revisao do AI Gatekeeper antes de ser mesclada via Squash and Merge, momento em que a automacao de versao publica o novo release oficial.

6. Conformidade com a ADR 0001:
   Toda a documentacao, titulos de requisicoes, notas de comissoes e arquivos de configuracao devem cumprir a ausencia total de parenteses, travessoes e emojis.

## Consequencias

Positivas:
Isolamento efetivo da branch de producao contra instabilidades transitorias de desenvolvimento.
Possibilidade de testar a integracao de multiplas funcionalidades na branch dev antes de promover a versao oficial na branch main.
Controle previsivel sobre o momento exato de geracao de releases pelo pipeline automatizado.

Negativas:
Adicao de uma etapa formal de promocao no ciclo de entrega, exigindo a abertura e aprovacao de um Pull Request de dev para main.
