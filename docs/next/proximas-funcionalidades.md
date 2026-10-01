# Planejamento de Novas Funcionalidades do Guia FT

Este documento consolida as diretrizes de produto, arquitetura, monetizacao e expansao territorial planejadas para os proximos ciclos de desenvolvimento do portal.

Todas as especificacoes textuais seguem rigorosamente a ADR 0001, com proibicao estrita de parenteses, travessoes e emojis decorativos.

---

## 1. Mapa Interativo e Catalogo no Modelo FTPA

### Inspiracao de Interface e Usabilidade
Apresentacao visual e interativa inspirada na arquitetura do aplicativo FT de Portas Abertas da Unicamp, disponivel em https://ulisses.ft.unicamp.br/apps/ftpa/, combinando navegacao nativa rapida, suporte a instalacao como aplicativo progressivo PWA e visualizacao fluida de pontos de interesse.

### Recursos e Arquitetura do Mapa
- **Biblioteca Base:** Leaflet integrada com tiles leves do OpenStreetMap, garantindo alta velocidade de carregamento, navegabilidade mobile e isencao de custos com chaves de API.
- **Filtros por Camadas Dinamicas:**
  - Camada de Moradia Estudantil: Republicas cadastradas, kitnets, apartamentos e condominios residenciais.
  - Camada de Transporte e Mobilidade: Pontos do onibus circular gratuito Paschoal Marmo e FCA, paradas de onibus municipais e estacao do fretado Intercampi Linha 84.
  - Camada de Alimentacao: Restaurantes Universitarios da FT e da FCA, marmitarias, padarias, lanchonetes e restaurantes por quilo na Conego Manuel Alves e entorno do campus.
  - Camada de Servicos Locais: Agencias bancarias, caixas eletronicos, farmacias, supermercados, papelarias e materiais de construcao.
- **Ficha Rica de Detalhes ao Clicar no Ponto:**
  - Cada ponto no mapa ou no mural abre uma gaveta lateral ou modal estruturado com abas de informacoes.
  - Para imoveis: fotos do local, modalidades de quartos individuais ou compartilhados, valor mensal do aluguel, custo de condominio e IPTU, despesas inclusas como internet, agua, luz e gas, regras de convivencia, notas e avaliacoes de veteranos e botao de contato direto via WhatsApp com o locador.
  - Para comércios e alimentacao: media de avaliacoes da comunidade estudantil e Google, faixa de preco, horarios de funcionamento na semana e fins de semana, endereco com atalho para o Google Maps, link oficial para pedidos no iFood, site institucional e telefone WhatsApp.

---

## 2. Mural de Moradia Estudantil e Plano de Monetizacao

### Objetivo
Criar uma plataforma autossustentavel de hospedagem universitaria em Limeira que gere receita financeira recorrente por meio de comissoes, servicos de valor agregado e parcerias comerciais.

### Pilares de Monetizacao

#### Pilar 1: Afiliacao e Comissao Imobiliaria por Conversao
- **Parcerias com Imobiliarias Locais:** Acordos comerciais com imobiliarias consolidadas de Limeira como Imobiliaria Roque, Prates Imoveis e Destaque Imoveis.
- **Comissao por Contrato Fechado:** Repasse de dez a vinte por cento do valor do primeiro aluguel para locacoes intermediadas pelo portal mediante link rastreado com parametros UTM ou cupom institucional.
- **Comissao por Lead Qualificado:** Cobranca por contato verificado encaminhado diretamente para proprietarios de kitnets e administradores de republicas particulares.
- **Integracao com Garantias Locaticias:** Parceria com servicos de fianca simplificada para universitarios, gerando receita de afiliados a cada seguro fianca ou titulo de capitalizacao emitido.

#### Pilar 2: Planos de Destaque Pago para Imoveis e Republicas
- **Selo de Republica Verificada:** Criacao de auditoria voluntaria com checagem presencial ou por chamada de video, depoimentos de ex-moradores e vistoria basica de instalacoes eletricas e de seguranca.
- **Posicionamento Premium:** Republicas e proprietarios podem pagar assinatura mensal fixa para figurar no topo do mural e receber marcadores luminosos destacados no mapa interativo.

#### Pilar 3: Parcerias com o Comercio Local e Cupons Estudantis
- **Assinatura para Estabelecimentos de Limeira:** Supermercados, padarias, restaurantes por quilo, marmitarias, lojas de construcao e bares universitarios contratam plano de presenca no guia.
- **Cupons Exclusivos para Alunos da Unicamp:** Os comercios parceiros oferecem condicoes especiais, como desconto de dez por cento no almoco ou na compra de materiais de reforma para republicas, ampliando o engajamento estudantil e justificando a recorrencia do plano para o comerciante.

#### Pilar 4: Afiliados de Delivery e Compras de Republica
- **Integracao com Aplicativos de Entrega:** Botoes de pedido direcionados para plataformas como iFood e Ze Delivery vinculados a programas de parceiros.
- **Kits de Montagem de Republica:** Links de afiliados em lojas de comercio eletronico para compra de itens indispensaveis, como colchoes, escrivaninhas, ventiladores, adaptadores de tomada e roteadores de internet.

---

## 3. Guia Comercial e de Servicos Essenciais em Limeira

### Objetivo
Facilitar a ambientacao do estudante disponibilizando os contatos, precos, links de delivery e avaliacoes dos principais comercios da cidade.

### Estabelecimentos Estruturados
- **Supermercados e Atacarejos:** Enxuto, Pague Menos, Savegnago, Assai e mercadinhos de bairro da Vila Cristovam e Vila Anita, indicando distancia a pe e facilidade de acesso pelo circular.
- **Padarias e Cafes:** Padaria da Vila, padarias centrais e cafes proximos a FT com opcoes de cafe da manha e lanches rapidos entre turnos de aula.
- **Lojas de Materiais de Construcao e Eletrica:** Estabelecimentos para aquisicao de cabos, extensoes, chuveiros, lampadas e ferramentas para reparos urgentes na montagem da moradia.
- **Agencias Bancarias e Caixas Eletronicos:** Santander com convenio de conta universitaria, Banco do Brasil, Caixa Economica Federal e terminais da rede Banco24Horas.
- **Agencias dos Correios:** Unidades para recebimento de encomendas e postagem de correspondencias e documentos.
- **Restaurantes, Marmitarias e Bares:** Restaurantes por quilo na Conego Manuel Alves, opcoes de marmita mensal para estudantes e pontos tradicionais de integracao universitaria proximos a Paschoal Marmo.

---

## 4. Expansao Multi-Curso da Faculdade de Tecnologia

### Objetivo
Atender todos os alunos matriculados na Faculdade de Tecnologia da Unicamp com dados curriculares oficiais de suas respectivas graduacoes.

### Cursos a Serem Adicionados
- **Engenharia Ambiental:** Matriz curricular completa, laboratorios de saneamento e recursos hidricos, projetos de campo e oportunidades de estagio em sustentabilidade.
- **Engenharia de Transportes:** Estrutura de materias, laboratorios de logistica e planejamento de vias, estagios em concessionarias e orgaos publicos de mobilidade.
- **Engenharia de Telecomunicacoes:** Linhas de transmissao, redes opticas, sistemas sem fio, estagios em operadoras e multinacionais de infraestrutura de redes.
- **Tecnologia em Saneamento Ambiental:** Formacao tecnologica, analise quimica de efluentes, tratamento de aguas e operacoes industriais.

### Arquitetura de Abas por Curso
- **Navegacao Dedicada:** Criacao de abas ou hubs isolados para cada graduacao, com matrizes curriculares completas, requisitos de estagio proprios e checklist de formatura correspondente.
- **Grade DAC Canonica:** Tabela interativa com codigos de disciplinas e ementas sincronizadas diretamente com o catalogo do ano vigente de cada engenharia e tecnologia.

---

## 5. Expansao para o Campus da FCA em Limeira

### Objetivo
Transformar a solucao no Guia Definitivo da Unicamp em Limeira, unificando a Faculdade de Tecnologia Campus 1 e a Faculdade de Ciencias Aplicadas Campus 2, alcancando uma base conjunta superior a quatro mil estudantes de graduacao.

### Diretrizes de Integracao Territorial e Academica
- **Territorio do Campus 2 da FCA:** Mapeamento dos bairros do entorno da FCA, incluindo Jardim Cidade Universitaria I e II, Chacara Antonieta e Vila Santa Rosalia.
- **Mobilidade entre Campi:** Integracao completa dos horarios e paradas do circular gratuito municipal da Unicamp que liga a FT a FCA, alem de rotas ciclomoviarias e servicos de van intercampi.
- **Novos Cursos da FCA no Portal:**
  - Administracao e Administracao Publica.
  - Engenharia de Producao e Engenharia de Manufatura.
  - Ciencias do Esporte e Nutricao.
- **Escala Comercial e de Impacto:** A expansao dobra o volume de visitantes unicos mensais da plataforma, tornando os espacos de patrocinio, parcerias com imobiliarias e integracao com o iFood consideravelmente mais atrativos e rentaveis.

---

## 6. Reformulacao da Navegacao Superior: Subtopicos em Hover e Seletor de Curso e Semestre

### Objetivo
Eliminar a sobrecarga de cliques substituindo o menu generico por submenus fluidos sob o cursor do mouse e inserindo seletor de contexto individual no cabecalho.

### Diretrizes de Interacao
- **Subtopicos em Hover:** Ao posicionar o cursor sobre qualquer link principal da barra de navegacao, como Calouros, Academico, Carreira, Campus ou Links, abre-se instantaneamente um dropdown elegante listando todos os subtopicos da secao com navegacao direta.
- **Descarte do Botao Topicos:** O atual botao generico de topicos e removido do cabecalho para simplificar a interface e liberar espaco para o seletor contextual.
- **Seletor de Contexto do Aluno no Cabecalho:**
  - Novo seletor fixo no topo com dois menus compactos: Faculdade e Curso, e Semestre Letivo Atual.
  - Ao escolher seu curso e periodo, o portal personaliza a exibicao:
    - Oculta disciplinas irrelevantes para o perfil do discente.
    - Prioriza os prazos e avisos correspondentes ao momento da jornada.
    - Evita a mistura de informacoes entre alunos da FT e da FCA, ou entre calouros e concluintes.
  - As escolhas do aluno sao salvas no armazenamento local do navegador para manter o estado ativo em todos os retornos ao site.
