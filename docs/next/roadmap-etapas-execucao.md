# Quadro de Execucao de Novas Demandas do Guia FT

Este documento consolida o planejamento executivo das novas frentes de produto, conteudos de carreira, navegacao, telemetria publica e redesign visual alinhadas para os proximos ciclos de entrega do portal.

Todas as especificacoes textuais e codigos respeitam rigorosamente a ADR 0001, com ausencia estrita de parenteses, travessoes e emojis decorativos. O fluxo de integracao segue a ADR 0008, com desenvolvimento em branch isolada, testes automatizados e releases semanticos apos mesclagem sem avanco rapido.

---

## Etapa 1: Conteudos de Carreira, Pesquisa e Pilulas de Topicos no Mobile

### 1. Novos Blocos de Conteudo na Pagina de Carreira
- [x] **Comparativo Estagio versus Trainee versus Efetivo Junior:**
  - Diferenciacao dos momentos adequados na graduacao para cada modalidade.
  - Limite legal de trinta horas semanais para estagio versus quarenta horas em regime CLT com beneficios executivos no trainee.
  - Explicacao detalhada dos processos seletivos, dinamicas de grupo, testes de fit cultural e trilhas de desenvolvimento acelerado para formacao de liderancas tecnicas.
- [x] **Guia Pratico de Hackathons e Bootcamps Universitarios:**
  - Dinamica de funcionamento das maratonas de desenvolvimento de fim de semana.
  - Estrategias para montagem de squads multidisciplinares reunindo alunos de tecnologia, design e negocios.
  - Panorama dos principais eventos da Unicamp e regiao de Campinas e Limeira.
  - Destaque para o Hackathon Itau Batalha de Agentes focado em desafios reais de negocios e inteligencia artificial.
  - Como aproveitar os bootcamps para construcao de portfolio pratico no GitHub e aceleracao de contratacao.
- [x] **Vitrine de Empresas Lideres em Tecnologia:**
  - Perfis de contratacao, cultura corporativa, requisitos tecnicos e programas de formacao de empresas de ponta:
    - **Tractian:** Cultura de ritmo acelerado estilo Vale do Silicio, monitoramento IoT e aceleracao em engenharia.
    - **Itau:** Programas de tecnologia, Batalha de Agentes, programa de trainee corporativo e engenharia de software.
    - **Stone:** Recruta Stone, processo seletivo abrangente sem pre-requisitos de curso e foco em logica e negocios.
    - **QI Tech:** Infraestrutura de credito, banking as a service, desafios praticos de arquitetura de software e APIs.
    - **Agibank:** Hub de inovacao regional em Campinas e Limeira, estagios em tecnologia e microsservicos.
- [x] **Secao Oficial da Apple Developer Academy em Campinas:**
  - Residencia tecnologica de inovacao sediada no Instituto de Pesquisas Eldorado em Campinas em cooperacao com a Apple.
  - Concessao de bolsa remunerada e disponibilizacao de equipamentos do ecossistema Apple para cada discente selecionado.
  - Capacitacao aprofundada em linguagem Swift, SwiftUI, design de produto, diretrizes de interface humana e empreendedorismo.
  - Links oficiais de inscricao no portal do Eldorado e perfil no Instagram oficial do programa.
- [x] **Matriz Decisoria: Carreira no Mercado versus Pesquisa Academica:**
  - Quadro comparativo e matriz de orientacao entre a trilha de emprego corporativo tradicional e a carreira de investigacao cientifica.
  - Analise de remuneracao inicial, flexibilidade de horarios, autonomia intelectual, ritmo de entrega e perfil individual do estudante.

### 2. Expansao Academica na Pagina de Academico
- [x] **Pos-Graduacao Academica na Unicamp:**
  - Estrutura completa de Mestrado e Doutorado na Faculdade de Tecnologia e no Instituto de Computacao.
  - Continuidade e aproveitamento do Trabalho de Conclusao de Curso.
  - Aceleracao da formacao discente via Programa Integrado de Formacao PIF.
  - Mecanismos de financiamento e bolsas de pesquisa CAPES, CNPq e FAPESP.

### 3. Navegacao Mobile com Pilulas de Topicos no Topo
- [x] **Componente MobileTopicPills:**
  - Fileira horizontal de pilulas interativas visivel exclusivamente em dispositivos moveis no topo da tela.
  - Suporte a rolagem lateral suave sem quebra de layout.
  - Rastreamento e destaque automatico do topico atualmente visivel durante a rolagem da pagina.
  - Manutencao integral da barra lateral DocSidebar nos monitores de computadores de mesa.

---

## Etapa 2: Tela Publica de Estatisticas em Producao e Pesquisa com Estudantes

### 1. Pagina Publica de Metricas do Portal
- [x] **Rota Publica `/estatisticas`:**
  - Painel transparente com metricas reais consolidadas de audiencia do portal.
  - Total de visitantes unicos, visualizacoes de pagina e tempo medio de permanencia.
  - Divisao percentual de acessos entre dispositivos moveis e computadores.
  - Ranking em tempo real das seções e topicos mais consultados pelos alunos da FT.
  - Graficos leves de distribuicao de acessos sem utilizacao de bibliotecas pesadas.

### 2. Modulo de Pesquisa e Termometro Discente
- [x] **Enquete Interativa Integrada:**
  - Modulo rapido de pesquisa discente com tres questoes fundamentais sobre momento do curso, maior desafio na rotina academica e pretensao profissional.
  - Rota de API `/api/pesquisa` para recepcao e agregacao segura dos votos.
  - Exibicao imediata dos resultados consolidados e porcentagens na propria pagina de estatisticas logo apos o voto do discente.

---

## Etapa 3: Redesign Estilo IDE com Tema Dracula, Atomic Design e Testes Responsivos

### 1. Estetica Autentica de IDE com Tema Dracula
- [ ] **Paleta Oficial Dracula no Modo Escuro:**
  - Cores autenticas do Dracula como padrao escuro: fundo principal `#282a36`, fundo secundario `#21222c`, selecao `#44475a`, texto claro `#f8f8f2`, roxo `#bd93f9`, ciano `#8be9fd`, verde `#50fa7b`, rosa `#ff79c6` e comentario `#6272a4`.
- [ ] **Elementos Visuais de Editor de Codigo:**
  - Barra superior no cabecalho simulando abas de arquivos abertos em IDE com nomes simbolicos de arquivos e icones correspondentes.
  - Barra de status no rodape estilo editor de codigo exibindo ramo git main, tag da versao ativa, codificacao UTF-8 e status da aplicacao.
  - Tipografia aprimorada com detalhes tecnicos monoespacados em atalhos e rotas.

### 2. Arquitetura Atomic Design
- [ ] **Refatoracao Modular dos Componentes:**
  - Reorganizacao dos modulos de emprego, moradia e duvidas nas camadas formais:
    - Atomos: botoes estilizados, etiquetas de status, icones de arquivo, badges de categoria.
    - Moleculas: cartoes de moradia, cartoes de estagio e trainee, acordeoes de duvidas, pilulas de navegacao.
    - Organismos: barra de abas de IDE, mural de oportunidades corporativas, barra de status inferior.

### 3. Testes Automatizados de Componentes Desktop e Mobile
- [ ] **Suite de Testes de Renderizacao Responsiva:**
  - Testes com `@testing-library/react` simulando viewports desktop de 1280 pixels e mobile de 375 pixels.
  - Validacao da presenca exclusiva de `DocSidebar` em telas amplas e da presenca exclusiva de `MobileTopicPills` em telas compactas.
  - Garantia de conformidade total com os testes de acessibilidade e ausencia de violacoes da ADR 0001.
