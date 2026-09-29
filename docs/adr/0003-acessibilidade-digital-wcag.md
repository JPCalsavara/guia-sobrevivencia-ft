# Acessibilidade digital em conformidade com WCAG nível AA

## Contexto

O Guia da Faculdade de Tecnologia da Unicamp atende a uma comunidade plural composta por discentes, docentes, colaboradores e visitantes externos, muitos dos quais utilizam tecnologias assistivas, navegação exclusiva por teclado ou demandam níveis específicos de contraste visual.

A ausência de semântica estrutural adequada, a falta de foco visível em elementos interativos e combinações de cores com baixo contraste representam barreiras que impedem o acesso autônomo e igualitário às informações acadêmicas e aos serviços do campus.

## Decisão

Todas as páginas, componentes e recursos da plataforma devem cumprir os seguintes critérios de acessibilidade:

1. O projeto adota conformidade com o padrão internacional WCAG versão dois ponto um no nível AA.
2. As combinações de cores entre primeiro plano e fundo devem atingir razão de contraste mínima de quatro vírgula cinco para um em textos convencionais, e três para um em textos grandes ou elementos de interface ativos, tanto no modo claro institucional quanto no modo escuro.
3. Todas as funcionalidades interativas devem ser plenamente operáveis por meio de teclado, com anéis de foco evidentes e perceptíveis em qualquer estado de seleção, sem reter o cursor em armadilhas de navegação.
4. O código deve priorizar elementos nativos do HTML para demarcar cabeçalhos, navegações, seções, botões e formulários, organizando títulos em ordem hierárquica sequencial sem omissão de níveis.
5. Recursos visuais informativos devem conter descrição textual equivalente, enquanto ícones meramente decorativos devem ser sinalizados como invisíveis para leitores de tela.
6. O processo de desenvolvimento deve incorporar ferramentas automatizadas de análise estática de acessibilidade e checagens contínuas nos fluxos de validação de código.
7. A interface deve disponibilizar um botão flutuante discreto com acesso a um painel de preferências de acessibilidade ativa, plenamente operável por teclado e tecnologias assistivas.
8. O painel deve oferecer filtros de adaptação de cores para daltonismo nos perfis de protanopia, deuteranopia, tritanopia, acromatopsia em tons de cinza e alto contraste amarelo sobre fundo escuro, acompanhados de seletor de escala tipográfica em degraus com persistência no navegador.
9. A plataforma deve prover auxílio a pessoas com deficiência auditiva por meio de integração ativável sob demanda com o ecossistema oficial do VLibras para tradução em Língua Brasileira de Sinais.

## Consequências

A aplicação assegura navegação inclusiva, previsível e acessível para todas as pessoas, eliminando barreiras de leitura e operação. O desenvolvimento passa a exigir rigor na seleção de paletas de cor, na escrita de HTML semântico e na revisão regular das árvores de componentes.
