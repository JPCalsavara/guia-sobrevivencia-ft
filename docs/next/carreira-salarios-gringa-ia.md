# Card de Conteudo: Salarios 2026, Trabalho Internacional, Carreira em Y e Mercado de IA

## 1. Objetivo da Tarefa
Expandir a trilha de carreira discente na pagina `/carreira` e no catalogo de links com temas contemporaneos cruciais para os alunos da Faculdade de Tecnologia da Unicamp: analise da Pesquisa Salarial de 2026, atuacao remota para empresas internacionais, comparacao BSI versus TADS com a coordenacao, a relevancia da graduacao no cenario pos-pandemia, o impacto real da inteligencia artificial na profissao e a bifurcacao da carreira em Y.

## 2. Paginas e Arquivos de Dados Impactados
- Pagina de Destino: `src/app/carreira/page.tsx` e `src/app/carreira/carreira.module.scss`.
- Catalogo de Links: `src/data/links.ts`.
- Topicos do Cabecalho: `src/data/headerTopics.ts`.
- Indice de Busca: `src/data/searchIndex.ts` via `npm run vectorize`.
- Testes Automatizados: `src/__tests__/career_expanded.test.ts` e `src/__tests__/adr_compliance.test.ts`.

## 3. Checklist de Execucao Editorial e Tecnica

### Etapa 1: Panorama Salarial 2026 e Dados de Remuneracao
- [ ] Compilar sintese da Pesquisa Salarial de Programadores 2026 do Codigo Fonte TV com faixas salariais medias para estagiarios, juniores, plenos, seniores e especialistas.
- [ ] Detalhar diferencas de remuneracao entre regime CLT nacional, cooperativas, consultorias e empresas de tecnologia de produto.
- [ ] Registrar cartao explicativo sobre o retorno sobre investimento da graduacao na FT em comparacao com cursos rapidos.

### Etapa 2: Guia de Trabalho Remoto Internacional para a Gringa
- [ ] Estruturar secao pratica de como alunos e egressos da Unicamp alcancam vagas internacionais em dolares e euros.
- [ ] Mapear requisitos eliminatorios: proficiencia instrumental em ingles, portfolio no GitHub com projetos consistentes, dominio de estruturas de dados e comunicacao assincrona.
- [ ] Explicar modelos de contratacao PJ internacional, intermediarios de pagamento e aspectos tributarios basicos.

### Etapa 3: BSI versus TADS na Visao da Coordenacao e Mercado
- [ ] Inserir comparativo estrategico entre Bacharelado em Sistemas de Informacao e Tecnologia em Analise e Desenvolvimento de Sistemas abordando duracao, profundidade teorica e posicionamento profissional.
- [ ] Destacar orientacoes de carreira baseadas no coordenador Professor Guilherme para direcionar o aluno segundo seu momento de vida e objetivo.

### Etapa 4: O Mercado Pos-Pandemia e o Falso Fim da Programacao por IA
- [ ] Redigir reflexao pragmatica sobre o contraste entre o mercado acelerado da pandemia e a busca atual por solidez tecnica e fundamentos.
- [ ] Desmistificar a tese de extincao dos programadores pela inteligencia artificial: analise de como agentes e LLMs amplificam desenvolvedores que dominam logica, arquitetura e resolucao de problemas reais.
- [ ] Apresentar o conceito da Era dos Desenvolvedores de Produto: profissionais que unem codigo rigoroso, compreensao de produto e impacto no negocio.

### Etapa 5: Carreira em Y: Especialista versus Gestor
- [ ] Criar matriz explicativa das duas ramificacoes pos-senioridade:
  - Trilha Especialista: Staff Engineer, Principal Engineer e arquiteto de software.
  - Trilha Gestao: Tech Lead, Engineering Manager e lideranca de squads.
- [ ] Fornecer autoavaliacao para o discente identificar sua afinidade entre lideranca tecnica profunda ou gestao de pessoas e operacoes.

### Etapa 6: Curadoria de Videos e Recursos Audiovisuais
- [ ] Cadastrar na secao de midias e em `src/data/links.ts` os videos de referencia do Codigo Fonte TV, Fabiana Santana e demais produtores tecnicos relevantes sobre salarios, IA e carreira internacional.
- [ ] Assegurar integridade estrita de links externos com `target="_blank"` e `rel="noopener noreferrer"`.

## 4. Validacao e Testes de Conformidade
- [ ] Executar `npm run vectorize` para sincronizar os novos termos na busca unificada.
- [ ] Executar `npm test` para assegurar aprovacao em 100% dos testes.
- [ ] Garantir total conformidade com a ADR 0001: ausencia rigorosa de parenteses, travessoes e emojis no texto.
- [ ] Executar ciclo via `git-flow-gatekeeper` para acionamento do AI Gatekeeper e submissao do Pull Request.
