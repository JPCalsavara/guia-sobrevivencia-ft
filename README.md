# Guia do Estudante da Faculdade de Tecnologia da Unicamp

Portal informativo, academico e de integracao estudantil desenvolvido para os graduandos da Faculdade de Tecnologia da Unicamp, com enfase nos cursos de Bacharelado em Sistemas de Informacao e Tecnologia em Analise e Desenvolvimento de Sistemas.

A plataforma foi projetada com arquitetura mobile first, conformidade de acessibilidade digital nivel AA das diretrizes WCAG e diretrizes arquiteturais estritas registradas em decisoes de projeto.

---

## 1. Como Rodar o Site

### Pre-requisitos
- Node.js versao 18 ou superior.
- Gerenciador de pacotes npm.
- Docker instalado, opcional, caso deseje executar os scripts de ciencia de dados e graficos sem instalar Python e bibliotecas no sistema operacional.

### Passo a Passo

1. Instalar as dependencias do projeto:
```bash
npm install
```

2. Executar em modo de desenvolvimento:
```bash
npm run dev
```
Acesse `http://localhost:3000` no seu navegador para visualizar a aplicacao.

3. Executar a suite de testes automatizados:
```bash
npm test
```
A suite valida conformidade com as decisoes arquiteturais, integridade dos dados curriculares de BSI e TADS, funcionamento dos links canonicos e mecanismos de busca vetorial.

4. Compilar e rodar a versao de producao:
```bash
npm run build
npm start
```

---

## 2. Estrutura das Informacoes e do Projeto

### Modulos de Conteudo do Portal

- `/calouros`: Guia de acolhimento e sobrevivencia para ingressantes, englobando moradia estudantil em Limeira, funcionamento do Restaurante Universitario, linhas do circular, carteirinha DAC e suporte social.
- `/academico`: Informacoes estruturais dos cursos de computacao da FT, comparativo entre BSI e TADS, explicacao matematica dos coeficientes CR e CP, regras da monitoria PAD com bolsa e voluntaria, linha do tempo da Iniciacao Cientifica PIBIC e FAPESP, aproveitamento de artigo publicado como substituto de monografia no TCC e intercambio pela DERI.
- `/campus`: Infraestrutura física do campus de Limeira, mapas de blocos, laboratorios de informatica, biblioteca, refeitorio e unidades de atendimento a saude.
- `/carreira`: Programas de estagio curricular obrigatorio e nao obrigatorio, convenios do SAE, feiras de recrutamento, trilhas tecnicas recomendadas e modelos de curriculo em LaTeX.
- `/estudos-ia`: Referenciais formativos e boas praticas para o emprego etico, critico e produtivo de ferramentas de Inteligencia Artificial nos estudos de graduacao.
- `/links`: Diretorio centralizado com hiperlinks canonicos que apontam diretamente para os portais oficiais da Unicamp, evitando dados volateis obsoletos.

### Organizacao de Diretorios

```
guia-sobrevivencia-ft/
├── data/
│   ├── analytics_snapshot.json    # Amostra de metricas de trafego
│   └── telemetry_events.json      # Registro de interacoes por componente
├── docs/
│   └── adr/                       # Registro de decisoes arquiteturais de 0001 a 0007
├── scripts/
│   ├── analisar_telemetria.py     # Script de ciencia de dados para correlacao e graficos
│   ├── analytics_optimizer.py     # Otimizador continuo de rotas baseado em metricas
│   └── vectorize-search.mjs       # Indexador de busca vetorial semantica
├── src/
│   ├── app/                       # Rotas e paginas da aplicacao no padrao App Router
│   │   ├── api/telemetry/         # Endpoint serverless para recebimento de telemetria
│   │   ├── academico/             # Pagina de orientacao curricular e regras da DAC
│   │   ├── calouros/              # Pagina de acolhimento de ingressantes
│   │   ├── campus/                # Pagina com dados e mapa do campus de Limeira
│   │   ├── carreira/              # Pagina sobre estagio, curriculo e mercado
│   │   ├── estudos-ia/            # Pagina de guias e prompts para graduandos
│   │   └── links/                 # Catalogo de links institucionais canonicos
│   ├── components/                # Componentes reutilizaveis de interface
│   ├── data/                      # Estruturas de dados tipadas em TypeScript
│   ├── hooks/                     # Custom hooks, incluindo useTopicTracker
│   └── styles/                    # Folhas de estilo modulares em SCSS
└── CONTEXT.md                     # Glossario do dominio e relacao das ADRs
```

---

## 3. Como Rodar e Visualizar os Analytics

O projeto conta com uma arquitetura de telemetria hibrida, combinando observabilidade na nuvem com processamento analitico local:

1. **Em Producao na Vercel:** O Vercel Analytics e o Speed Insights monitoram em tempo real visitantes unicos, volume por rota, distribuicao de navegadores e sinais vitais da web sem coletar dados sensiveis dos alunos.
2. **No Navegador e Celular:** O hook nativo `useTopicTracker` monitora o campo de visao do estudante via IntersectionObserver, registrando secoes lidas por mais de dois segundos, profundidade de rolagem e cliques em modelos de e-mail.
3. **No Servidor:** Os eventos sao enviados em segundo plano para `/api/telemetry` e gravados em `data/telemetry_events.json`.

### Executando a Analise Estatistica e Gerando os Graficos

#### Metodo Recomendado: Via Script Shell e Container Docker Leve
Para rodar a analise com Pandas e Matplotlib sem precisar instalar Python ou pacotes no computador, basta executar o script shell pronto ou o atalho do npm:

```bash
./scripts/run_analytics_docker.sh
```

Ou alternativamente:

```bash
npm run analytics:docker
```

#### Metodo Alternativo: Via Ambiente Virtual Python Local
Caso prefira rodar diretamente no seu ambiente Linux:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install pandas matplotlib
python3 scripts/analisar_telemetria.py
```

### O que o Script Analisa e Responde

O script processa os dados de telemetria e responde estatisticamente quais assuntos sao mais vistos e quais sao as causas do engajamento:
- **Efeito de Posicao na Pagina:** Calcula a correlacao entre profundidade de rolagem e tempo de leitura para diferenciar conteudos vistos por estarem no topo daqueles buscados intencionalmente.
- **Engajamento Ativo:** Mede a correlacao entre o tempo de permanencia no cartao e a acao pratica de copiar modelos de e-mail de PAD e Iniciacao Cientifica.
- **Perfil Mobile:** Compara o comportamento de leitura e retencao entre telas de celulares e computadores.

### Localizacao dos Graficos Gerados

As figuras geradas em alta resolucao sao salvas automaticamente no diretorio `scratch/graficos/`:
1. `scratch/graficos/ranking_assuntos_e_retencao.png`: Grafico de barras comparando volume bruto de acessos com o tempo mediano de leitura por assunto.
2. `scratch/graficos/correlacao_engajamento.png`: Matriz de correlacao de Pearson com mapa de calor relacionando as variaveis de uso.
3. `scratch/graficos/comportamento_mobile_vs_desktop.png`: Distribuicao proporcional de acessos por tipo de dispositivo em cada topico.

---

## 4. Otimizacao Continua Baseada em Metricas

Para rodar o diagnostico estrategico de rotas que gera o arquivo `src/data/analyticsInsights.json`:

```bash
python3 scripts/analytics_optimizer.py
```

Esse script classifica rotas de alta demanda e rotas que necessitam de maior exposicao visual na interface, conforme a ADR 0006.
