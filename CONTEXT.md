# Contexto de Domínio: Guia da Faculdade de Tecnologia da Unicamp

## Glossário do Domínio

### Estrutura Acadêmica
- **BSI:** Bacharelado em Sistemas de Informação oferecido em período diurno e integral com duração padrão de oito semestres na Faculdade de Tecnologia da Unicamp.
- **TADS:** Tecnologia em Análise e Desenvolvimento de Sistemas oferecido em período noturno com duração padrão de seis semestres na Faculdade de Tecnologia da Unicamp.
- **CR:** Coeficiente de Rendimento, média ponderada das notas de todas as disciplinas cursadas ponderadas pelos respectivos créditos na Unicamp.
- **CP:** Coeficiente de Progressão, percentual de créditos já concluídos em relação à carga total exigida pelo catálogo do curso.
- **Grade DAC Online:** Plataforma oficial mantida pela Diretoria Acadêmica para acompanhamento da integralização curricular e emissão de históricos.
- **Vetor de Disciplina:** Distribuição semanal das horas em Teoria, Prática, Laboratório e Orientação.
- **DEAPE:** Diretoria Executiva de Apoio e Permanência Estudantil, órgão oficial da Unicamp responsável pela homologação de termos de estágio e benefícios de permanência.
- **SI916 e SI917:** Disciplinas oficiais de estágio curricular supervisionado vigentes no catálogo da FT, correspondendo a SI916 para BSI e SI917 para TADS.
- **Contemporaneidade do Estágio:** Regra que exige matrícula na disciplina de estágio no mesmo semestre letivo em que o estágio remunerado é executado para que haja aproveitamento formal.
- **Estágio em Regime CLT:** Exigência formal da Unicamp de abertura de termo de estágio obrigatório não remunerado para estudantes contratados via CLT, com duração de dez semanas para BSI e seis semanas para TADS.
- **Curricularização da Extensão:** Exigência regulamentar de dez por cento da carga do curso em extensão, suprida pelas matérias obrigatórias de BSI e TADS, identificada por SI918 até o catálogo 2022 ou SI919 e SI920 a partir do catálogo 2023.
- **Armadilha da Equivalência:** Risco no qual o estudante cursa matéria equivalente fora da FT sem carga de extensão, gerando déficit irreversível de horas que impede a colação de grau.
- **Disciplina Extracurricular:** Disciplina cursada após o cumprimento de todas as eletivas, identificada com a marcação X no e-DAC, aproveitável em atividades complementares.
- **Planejamento de Iniciação Científica:** Cronograma orientado pelo corpo docente com busca de orientador até meados do segundo semestre para submissão no primeiro semestre do ano subsequente, dependente de histórico sem reprovações.
- **Colação de Grau Solene:** Cerimônia pública oficial e gratuita presidida pela Diretoria da FT e pela Secretaria de Graduação, indispensável para a outorga legal do título, juramento do curso, assinatura da ata de colação e expedição do diploma.
- **Colação em Gabinete:** Rito administrativo extraordinário e gratuito perante a diretoria para antecipação de outorga de grau em casos comprovados de aprovação em programas de pós-graduação stricto sensu ou posse em concurso público.
- **Diploma Digital DAC:** Documento acadêmico oficial emitido em formato eletrônico nativo com assinatura digital ICP-Brasil e validação em plataforma do Ministério da Educação, registrado sem custos adicionais ao formando.
- **Guia de Navegação do Portal:** Bloco explicativo com direcionamento de fluxos por momento da graduação e mapa de recursos de busca e acessibilidade.
- **Compartilhamento Dark Social:** Distribuição orgânica de links do guia por meio de canais privados de mensagens entre discentes, viabilizada por botões de compartilhamento direto no WhatsApp.

### Identidade Visual e Interface
- **Azul FT:** Cor institucional que simboliza tecnologia, computação e inovação. No modo claro, adota tom escuro profundo para contraste nítido contra o fundo branco. No modo escuro, adota tom claro para leitura contrastante no fundo escuro.
- **Verde FT:** Cor institucional que representa sustentabilidade e preservação ambiental. No modo claro, adota tom verde floresta profundo. No modo escuro, adota tom esmeralda luminoso.
- **Modo Claro Institucional:** Tema padrão inicial da plataforma com superfícies brancas e cinzas suaves, refletindo o portal oficial da universidade.
- **Modo Escuro:** Alternativa noturna disponível mediante acionamento manual do usuário.
- **Hero Section de Primeira Dobra:** Seção inicial da página que preenche integralmente a altura da janela junto com o cabeçalho.

### Dados e Conformidade
- **Fonte Canônica Oficial:** Portal, sistema ou canal mantido diretamente pela universidade, faculdade ou prefeitura responsável pela publicação de informações em tempo real.
- **Navegação Acessível:** Implementação de interface conforme as diretrizes WCAG nível AA, operável por teclado e tecnologias assistivas.
- **Painel de Acessibilidade Ativa:** Módulo interativo com botão flutuante que disponibiliza adaptação de contraste para daltonismo, redimensionamento de fontes em degraus e acionamento de tradução em Língua Brasileira de Sinais.

## Decisões Arquiteturais Registradas
- **ADR-0001:** Estilo textual sem marcas artificiais de escrita, com proibição de travessões, parênteses circulares e emojis decorativos.
- **ADR-0002:** Todos os itens têm responsividade mobile obrigatória em qualquer tela ou dispositivo.
- **ADR-0003:** Acessibilidade digital em conformidade com WCAG nível AA em todos os componentes e fluxos de navegação.
- **ADR-0004:** Desacoplamento de dados voláteis e direcionamento exclusivo para fontes canônicas oficiais.
- **ADR-0005:** Concisão e clareza orientada à essência da informação para o estudante.
- **ADR-0006:** Otimização contínua guiada por telemetria e análise de uso do portal.
- **ADR-0007:** Hospedagem na Vercel com Analytics integrado e observabilidade contínua.
- **ADR-0008:** Versionamento semântico com releases automáticos no git-flow e bloqueio de comissões diretas na branch main.
- **Vídeo Recomendado:** vídeo externo curado com título e canal fiéis ao original, sempre com `id` único em `careerExpanded.ts`.
- **Pesquisa de Mercado:** recurso externo que não é vídeo, apresentado em card próprio sem reproduzir seus números.
- **Fonte Única de Recursos:** regra de que um recurso aparece em um só arquivo de dados e os demais derivam dele.
