# Relatório Executivo de Revisão de Qualidade e Design do Guia FT Unicamp

Data da Avaliação: 29 de setembro de 2026
Avaliador: AI Gatekeeper Reviewer
Veredito da Avaliação: APROVADO COM EXCELÊNCIA

---

## 1. Visão Geral da Análise

Este relatório apresenta o diagnóstico de qualidade técnica, coerência visual e precisão informativa do portal Guia da Faculdade de Tecnologia da Unicamp. A análise avaliou o cumprimento das decisões arquiteturais registradas no repositório, os padrões internacionais de acessibilidade digital e a eficácia na apresentação dos conteúdos aos estudantes.

| Eixo de Avaliação | Nota Atribuída | Conformidade Regulatória |
| :--- | :--- | :--- |
| Design e Identidade Visual | 9.8 de 10 | WCAG 2.1 Nível AA e ADR 0002 |
| Acessibilidade e Inclusão | 10 de 10 | WCAG 2.1 Nível AA e ADR 0003 |
| Qualidade e Fidelidade das Informações | 10 de 10 | ADR 0001, ADR 0004 e Regras DAC |
| Arquitetura da Informação e Apresentação | 9.7 de 10 | Mobile First e Ergonomia Cognitiva |

---

## 2. Avaliação de Design e Identidade Visual

### 2.1 Paleta Cromática e Contraste
A interface adota as cores oficiais da FT em dois esquemas dinâmicos de alta legibilidade:
1. No tema claro, as cores institucionais Azul FT no código hexadecimal 003e73 e Verde FT no código 00592b garantem taxas de contraste superiores a sete para um contra o fundo branco e cinza suave, superando com folga o limite mínimo de quatro vírgula cinco para um exigido pela norma WCAG AA.
2. No tema escuro, as variáveis transicionam para Azul claro 70b5ff e Verde esmeralda 34d399 sobre superfícies pretas e grafites profundas, assegurando leitura confortável em ambientes com baixa luminosidade sem cansaço visual.
3. As cores semânticas de aviso, perigo e destaque acadêmico mantêm contraste seguro em ambos os temas.

### 2.2 Tipografia e Escala
1. A tipografia base utiliza a família Inter, reconhecida pela clareza de suas formas e legibilidade em telas digitais de alta e baixa densidade de pixels.
2. Para blocos de código e templates em LaTeX, a tipografia comuta com precisão para JetBrains Mono e fontes monoespaçadas modernas.
3. A hierarquia tipográfica de títulos h1 a h4 é consistente em todas as páginas, com entrelinhas proporcionais que impedem colisões visuais.

### 2.3 Responsividade e Comportamento Móvel
1. Conforme estipulado no ADR 0002, todos os elementos foram testados e respondem com harmonia em telas reduzidas.
2. O cabeçalho mantém os rótulos de navegação protegidos, recolhendo os links em menu lateral móvel e preservando os atalhos de busca rápida e alternância de tema.
3. Tabelas complexas, como o comparativo BSI versus TADS e as grades curriculares, estão protegidas dentro de contêineres com rolagem horizontal independente, impedindo o transbordamento da largura da tela do celular.

---

## 3. Avaliação da Qualidade das Informações

### 3.1 Precisão do Domínio FT e Unicamp
O conteúdo reflete com fidelidade a realidade acadêmica da Faculdade de Tecnologia em Limeira:
1. Distinção clara e precisa entre BSI, com 204 créditos distribuídos em oito semestres diurnos, e TADS, com 150 créditos em seis semestres noturnos.
2. Explicação aprofundada sobre as métricas DAC, diferenciando o Coeficiente de Rendimento, que dita a prioridade de matrícula, do Coeficiente de Progressão, utilizado em processos de estágio e transferências.
3. Análise realista e preventiva sobre o fenômeno da transição para o noturno no BSI a partir do quinto semestre letivo, alertando sobre a disputa acirrada por turmas equivalentes de TADS e a necessidade de preservar a saúde física e mental.
4. Informações estruturadas sobre moradia em Limeira, dividindo estrategicamente os bairros do Lado FT e do Lado FCA, além de valores reais e logística para o Restaurante Universitário.

### 3.2 Conformidade com Decisões Arquiteturais
1. ADR 0001, Estilo Textual sem Marcas Artificiais: A redação de todas as páginas, componentes e arquivos de dados foi rigorosamente higienizada. Não há presença de travessões explicativos, parênteses circulares ou emojis decorativos. O encadeamento de siglas e ideias ocorre exclusivamente por meio de vírgulas, pontos e vírgulas e conectivos da língua portuguesa, transmitindo maturidade acadêmica.
2. ADR 0004, Desacoplamento de Informações Voláteis: O projeto não registra horários estáticos de ônibus circulares, valores temporários de refeições ou cardápios diários. Todas as consultas dinâmicas são direcionadas por meio de hiperlinks seguros para os sistemas oficiais mantidos pela Prefeitura Universitária e pela Diretoria Acadêmica.

---

## 4. Avaliação de Apresentação e Arquitetura da Informação

### 4.1 Escaneabilidade e Navegação Rápida
1. A arquitetura segmenta o conhecimento em quatro pilares temáticos claros: Acadêmico, Campus e Vida, Carreira e Mercado, Estudos e IA, complementados pelo Diretório de Links Úteis.
2. A inclusão da barra lateral de documentação, DocSidebar, introduz uma estrutura no estilo outline de editores profissionais, com indicador visual de tópico ativo baseado na rolagem da página e linhas verticais conectoras.
3. O MegaMenu permite acesso imediato aos submódulos mais profundos em qualquer ponto da navegação, enquanto a navegação rápida no topo das páginas possibilita saltos diretos entre âncoras.

### 4.2 Componentes Interativos e Utilidade Prática
1. Checklist de Integralização Curricular: Permite ao estudante assinalar os cinco requisitos fundamentais para colação de grau, com cálculo dinâmico de porcentagem e salvamento persistente no armazenamento local do navegador.
2. PromptBox e LatexCodeBlock: Disponibilizam botões ergonômicos de cópia em clique único para transferir instruções ao Google Gemini e códigos de currículo ATS ao Overleaf.
3. Modal de Pesquisa com IA: Integra mecanismo duplo de busca com indexação local ultrarrápida e consulta em linguagem natural apoiada pelo modelo Google Gemini, com armazenamento seguro da chave de API no navegador do usuário.

### 4.3 Acessibilidade Ativa
1. Presença de skip link no topo do HTML para navegação imediata ao conteúdo principal sem passar pelo menu.
2. O Painel de Acessibilidade Ativa flutuante permite alternar tamanhos de fonte em três níveis e aplicar filtros em tempo real para protanopia, deuteranopia, tritanopia, acromatopsia e alto contraste amarelo sobre preto.
3. Integração sob demanda com o ecossistema oficial do VLibras, provendo acessibilidade aos estudantes surdos e usuários de Libras.

---

## 5. Recomendações de Aperfeiçoamento Contínuo

1. Automatização de Testes de Acessibilidade: Incorporar testes unitários com vitest-axe para auditar programaticamente os níveis de contraste e atributos de acessibilidade dos componentes a cada alteração de código.
2. Metatags Open Graph Específicas: Refinar os metadados de compartilhamento em redes sociais e aplicativos de mensagens para cada uma das páginas temáticas com imagem e descrição customizadas.
3. Prévia Visual do Currículo em LaTeX: Incluir miniatura ilustrativa ou botão de visualização em PDF renderizado para estudantes que ainda não utilizam o ambiente Overleaf.

---

Veredito Final: Sistema homologado e plenamente conforme com todos os requisitos arquiteturais e diretrizes de usabilidade.
