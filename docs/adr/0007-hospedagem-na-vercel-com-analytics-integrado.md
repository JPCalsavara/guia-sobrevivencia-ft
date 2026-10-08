# Hospedagem na Vercel com Analytics integrado e observabilidade continua

## Contexto

A manutencao do Guia do Estudante da Faculdade de Tecnologia da Unicamp exige agilidade de publicacao, estabilidade operacional e facilidade para acompanhar o estado da solucao em tempo real. Gerenciar servidores dedicados, configurar maquinas virtuais ou manter bancos de dados em nuvem impoe custos financeiros e sobrecarga de operacao desnecessarios para um projeto focado na comunidade academica.

Ao mesmo tempo, compreender como os estudantes navegam entre os topicos de graduacao, estagio, monitoria e pesquisa demanda ferramentas de telemetria confiaveis que nao degradem a experiencia no celular. A plataforma Vercel oferece integracao nativa com o framework Next.js, fluxo de entrega continua automatizado a partir do repositorio e recursos embutidos de observabilidade por meio do Vercel Web Analytics e Speed Insights.

## Decisao

Adotar a Vercel como ambiente oficial de hospedagem em nuvem do projeto, utilizando seus recursos integrados de entrega continua e analise de métricas:

1. Facilidade de implantacao continua: Toda alteracao validada no repositorio dispara compilacao automatica, geracao de rotas estaticas otimizadas e publicacao imediata em rede de distribuicao global sem necessidade de intervencao manual em servidores.
2. Acompanhamento do estado da solucao com Analytics nativo: A solucao utiliza o Vercel Analytics em producao para capturar visitantes unicos, volume de visualizacoes por pagina, distribuicao entre computadores e celulares e sistemas operacionais predominantes.
3. Complementaridade com analise local em Python: Os dados agregados de telemetria e as interacoes granulares de topicos sao processados periodicamente por scripts locais em Python no ambiente de desenvolvimento, gerando correlacoes estatisticas e graficos de retencao sem onerar a infraestrutura de producao.
4. Foco na velocidade de carregamento mobile: A hospedagem na borda serverless garante tempos de resposta minimos para estudantes conectados via redes moveis 4G ou rede sem fio institucional no campus de Limeira.
5. Conformidade com a ADR 0001: Todas as configuracoes, documentacoes tecnicas e relatorios analiticos vinculados a plataforma preservam o estilo sem travessoes, sem parenteses e sem emojis decorativos.

## Consequencias

O ciclo de desenvolvimento ganha maxima produtividade, pois a equipe foca exclusivamente na qualidade do conteudo e no design da aplicacao. O estado de saude, o desempenho de carregamento e o padrao de consumo dos discentes sao monitorados de forma centralizada e sem custos de infraestrutura, garantindo disponibilidade permanente do guia durante todo o ano letivo.
