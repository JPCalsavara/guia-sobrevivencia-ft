# ADR 0011: Arquitetura Modular Desacoplada e Orientada a Dominios

## Status
Aceito

## Data
2026-10-19

## Contexto

O Guia de Sobrevivencia da Faculdade de Tecnologia da Unicamp e um portal de acolhimento e suporte a comunidade discente, integrando informacoes de cursos de graduacao, rotinas academicas da DAC, mapa do campus, transporte, alimentacao, estagios e vivencia universitaria em Limeira.

Com a expansao continua do projeto, conduzida tanto por contribuidores humanos quanto por agentes autonomos de engenharia de software, torna-se essencial delimitar os pilares da arquitetura do sistema. O modelo deve assegurar baixo acoplamento entre os dados institucionais e as telas visuais, prevenir regressoes de interface, viabilizar a reutilizacao extensiva de componentes e blindar o sistema contra informacoes efemeras e instaveis.

## Decisao

Adotar a Arquitetura Modular Desacoplada e Orientada a Dominios, estruturada sobre o framework Next.js e TypeScript, organizada nas seguintes camadas de responsabilidade:

1. Camada de Dominio e Dados Canonicos:
   Localizada no diretorio src/data, centraliza as estruturas de dados imutaveis, modelos conceituais e tipagens formais de TypeScript.
   Conforme a ADR 0004, e terminantemente proibido manter informacoes volateis fixadas no codigo estatico, tais como horarios minuciosos de onibus, cardapios especificos ou calendarios transitarios. Toda referencia institucional deve vincular-se a URLs canonicas e oficiais de dominios da Unicamp, DAC e prefeituras.

2. Camada de Componentes Modulares e Design System:
   Localizada nos diretorios src/components e src/styles, adota o padrao de componentes reutilizaveis, altamente coesos e desacoplados.
   Cada componente deve encapsular sua apresentacao visual utilizando SCSS Modules, isolando classes e evitando colisoes no escopo global.
   Todos os estilos devem consumir os tokens compartilhados de design definidos em src/styles, englobando paleta cromatica acessivel, tipografia institucional, escalas de espacamento e raios de borda.
   Conforme a ADR 0002, a construcao de interfaces deve seguir a abordagem mobile-first, priorizando telas portateis antes de resolucoes expandidas.
   Conforme a ADR 0003, todos os componentes devem atender aos criterios de acessibilidade digital WCAG AA, com navegabilidade completa por teclado, indicadores semanticos via atributos ARIA, suporte a leitores de tela e adaptacoes para daltonismo e contraste.

3. Camada de Apresentacao e Rotas:
   Localizada no diretorio src/app, utiliza o App Router do Next.js.
   As paginas atuam estritamente como orquestradoras declarativas de componentes de dominio, configuracao de metadados, estrutura semantica e integracao com servicos globais, evitando acumulacao de logica de negocios nos controladores de rota.

4. Camada de Servicos e Busca Vetorial Desacoplada:
   O motor de busca local opera de forma autonoma e eficiente, consumindo o indice compilado em src/data/searchIndex.ts por meio do script de vetorizacao.
   A integracao com servicos externos de inteligencia artificial opera como camada consultiva desacoplada, preservando a operacao plena de todas as buscas locais mesmo na ausencia de conectividade com a rede externa.

5. Camada de Governanca, Qualidade e Conformidade:
   Todas as camadas sao inspecionadas continuamente por testes automatizados em src/__tests__ utilizando a ferramenta Vitest.
   A esteira de validacao conta com o AI Quality Gatekeeper e o Context Harness, auditando a fidelidade com as diretrizes do projeto e impondo a observancia irrestrita da ADR 0001, mantendo a redacao livre de marcas artificiais como parenteses, travessoes e emojis.

## Consequencias

Positivas:
Modularidade elevada, permitindo que agentes e desenvolvedores adicionem novas paginas e componentes sem impactar funcionalidades existentes.
Resiliencia contra desatualizacoes de rotinas externas da universidade devido a centralizacao em fontes canonicas.
Alta manutenibilidade decorrente do isolamento de estilos com SCSS Modules e contratos tipados em TypeScript.
Experiencia de usuario fluida, inclusiva e veloz em qualquer dispositivo.

Negativas:
Exige rigor dos colaboradores na definicao de contratos de tipos e manutencao constante da suite de testes para cada nova funcionalidade adicionada.
