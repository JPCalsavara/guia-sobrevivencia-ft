# Planejamento de Novas Funcionalidades do Guia FT

Este documento consolida as diretrizes de produto, arquitetura e monetizacao planejadas para os proximos ciclos de desenvolvimento do portal.

Todas as especificacoes textuais seguem rigorosamente a ADR 0001, com proibicao estrita de parenteses, travessoes e emojis decorativos.

---

## 1. Mapa Interativo Territorial de Limeira

### Objetivo
Substituir a visualizacao estatica de bairros por um mapa web interativo e responsivo, permitindo ao estudante visualizar pontos de interesse no entorno do Campus 1 da FT e do Campus 2 da FCA.

### Recursos e Arquitetura Tecnica
- **Biblioteca Base:** Leaflet com tiles do OpenStreetMap, garantindo carregamento rapido, gratuidade permanente e sem necessidade de chaves de API pagas.
- **Filtros por Camadas Ativas:**
  - Camada de Moradia: Republicas cadastradas, kitnets e condominios estudantis.
  - Camada de Transporte: Ponto do circular gratuito Paschoal Marmo, paradas de onibus municipais e ponto do fretado Intercampi Linha 84.
  - Camada de Alimentacao: Restaurante Universitario da FT, marmitarias, padarias e restaurantes por quilo na Conego Manuel Alves.
  - Camada de Servicos: Agencias bancarias, farmacias, supermercados e papelarias.
- **Card Informativo ao Clicar:** Cada marcador abre um modal com endereco completo, distancia a pe ate a portaria da FT, faixa media de precos e link para rotas no Google Maps.

---

## 2. Mural de Moradia Estudantil e Monetizacao por Afiliacao

### Objetivo
Criar um ecossistema sustentavel de busca de moradia para novos alunos, viabilizando receita financeira por meio de parcerias com imobiliarias, proprietarios e empresas de locacao residencial em Limeira.

### Modelo de Negocio e Rastreamento
- **Mural de Vagas:** Vitrine categorizada de vagas em republicas, quartos individuais, kitnets e apartamentos para locacao com contratos especificos para estudantes.
- **Monetizacao por Clique e Lead:** Links parametrizados com identificador UTM e redirecionamento de contatos para corretores parceiros com cobranca de comissao por lead qualificado gerado.
- **Comissao por Conversao de Contrato:** Parcerias de afiliacao com imobiliarias de Limeira como Roque, Prates, Destaque e plataformas de garantia locaticia, com repasse de percentual a cada contrato firmado via portal.
- **Selo de Republica Verificada:** Criacao de programa voluntario de checagem com fotos reais, depoimentos de veteranos e avaliacao de seguranca.

---

## 3. Guia Comercial e de Servicos Essenciais em Limeira

### Objetivo
Mapear todos os estabelecimentos fundamentais para o dia a dia e sobrevivencia do graduando que acabou de mudar para Limeira.

### Categorias de Estabelecimentos Mapeados
- **Supermercados e Atacarejos:** Unidades de grande porte e mercados de bairro nas proximidades da FT, como Enxuto, Pague Menos, Savegnago e Assai, indicando facilidade de acesso a pe ou por circular.
- **Padarias e Cafes:** Padarias tradicionais da regiao da Vila Cristovam, Vila Anita e Centro com horarios de funcionamento e opcoes de cafe da manha rapido antes das primeiras aulas.
- **Lojas de Materiais de Construcao e Eletrica:** Locais para compra de extensoes, chuveiros, lampadas, adaptadores de tomada e ferramentas para reparos urgentes na instalacao de repúblicas.
- **Agencias Bancarias e Caixas Eletronicos:** Pontos de atendimento do Santander, Banco do Brasil, Caixa Economica Federal e caixas da rede Banco24Horas proximos a faculdade.
- **Agencias dos Correios:** Agencias centrais para retirada de encomendas, cartas e envio de documentacoes fisicas.
- **Restaurantes, Marmitarias e Bares:** Guia gastronômico estudantil com opcoes economicas para almoco fora do bandejao e pontos tradicionais de integracao universitaria e confraternizacoes de fim de periodo.

---

## 4. Expansao Multi-Curso da Faculdade de Tecnologia

### Objetivo
Evoluir a plataforma de um guia centrado em BSI e TADS para uma solucao integrada que atenda a totalidade dos cursos de graduacao da FT Unicamp.

### Cursos a Serem Incorporados
- **Engenharia Ambiental:** Matriz curricular, laboratorios de saneamento e recursos hidricos, projetos de campo e oportunidades de estagio em sustentabilidade.
- **Engenharia de Transportes:** Estrutura de materias, laboratorios de logistica e planejamento de vias, estagios em concessionarias e orgaos publicos de mobilidade.
- **Engenharia de Telecomunicacoes:** Linhas de transmissao, redes opticas, sistemas sem fio, estagios em operadoras e multinacionais do setor.
- **Tecnologia em Saneamento Ambiental:** Formacao tecnologica, analise quimica de efluentes, tratamento de aguas e operacoes industriais.

### Arquitetura de Abas por Curso
- **Navegacao Dedicada:** Criacao de abas ou hubs isolados para cada graduacao, com matrizes curriculares completas, requisitos de estagio proprios e checklist de formatura correspondente.
- **Grade DAC Canônica:** Tabela interativa com codigos de disciplinas e ementas sincronizadas diretamente com o catalogo do ano vigente de cada engenharia e tecnologia.

---

## 5. Reformulacao da Navegacao Superior: Hover e Contexto do Estudante

### Objetivo
Aprimorar a experiencia de uso eliminando o botao generico de topicos e substituindo por menus inteligentes sob cursor e filtro contextual individual.

### Diretrizes de Interacao
- **Subtopicos em Hover:** Ao passar o cursor do mouse sobre qualquer item da barra de navegacao, como Calouros, Academico, Carreira ou Campus, abre-se instantaneamente um painel dropdown leve listando todos os subtopicos daquela secao com links diretos.
- **Remocao do Botao Topicos:** O atual botao generico de topicos do cabecalho e descartado para liberar espaco visual na barra superior.
- **Seletor de Contexto do Aluno no Cabecalho:**
  - Novo seletor persistente na barra de navegacao com dois menus suspensos compactos: Curso Selecionado e Semestre Atual.
  - Ao definir, por exemplo, Bacharelado em Sistemas de Informacao e Quarto Semestre, toda a experiencia do portal se adapta automaticamente:
    - Oculta materias e alertas que nao pertencem a sua fase.
    - Exibe primeiro as disciplinas que o aluno precisa cursar no periodo.
    - Personaliza o fluxo sem misturar informacoes de ingressantes com regras exclusivas de concluintes.
  - O contexto fica salvo no armazenamento local do navegador para manter as preferencias nas visitas seguintes.
