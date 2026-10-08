export const geminiSyllabusPrompt = `Você é um assistente especializado em organização acadêmica universitária.
Analise o arquivo PDF deste plano de aula da disciplina e extraia todos os eventos avaliativos relevantes, como provas, entregas de trabalhos, seminários e exames.

Retorne dois blocos estruturados:

Bloco 1, Código iCalendar padrão RFC 5545:
Gere um arquivo de texto com extensão ics completo iniciando com BEGIN:VCALENDAR e finalizando com END:VCALENDAR contendo cada avaliação em um bloco VEVENT com SUMMARY, DESCRIPTION, DTSTART, DTEND e alarmes programados para vinte e quatro horas antes.

Bloco 2, Resumo em Tabela:
Apresente uma tabela simples com Data, Horário, Título da Avaliação, Peso ou Critério e Local caso informado.

Regras importantes:
- Considere o fuso horário oficial de America Sao Paulo.
- Caso o plano cite semanas em vez de datas exatas, estime a data a partir da data de início das aulas do semestre vigente.
- Mantenha a saída limpa e direta para que o arquivo ics possa ser salvo e importado no Google Agenda ou Apple Calendar.`;

export const latexResumeTemplate = String.raw`% Modelo baseado no devcelio/resume-template
% Adaptado para estudantes da Faculdade de Tecnologia da Unicamp
\\documentclass[a4paper,10pt]{article}

\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}
\\usepackage[portuguese]{babel}

\\usepackage{geometry}
\\usepackage{parskip}
\\usepackage{microtype}
\\usepackage{enumitem}
\\usepackage{titlesec}
\\usepackage{array}
\\usepackage{tabularx}

\\usepackage{hyperref}
\\usepackage{bookmark}
\\usepackage{xurl}

\\geometry{top=1.5cm, bottom=1.5cm, left=1.5cm, right=1.5cm}
\\setcounter{secnumdepth}{0}
\\setlist[itemize]{
    leftmargin=0.75em,
    itemsep=0.2em,
    topsep=0.25em,
    parsep=0em,
    partopsep=0em
}

\\pagestyle{empty}

\\hypersetup{
    pdftitle={Curriculo de Tecnologia},
    pdfauthor={Seu Nome},
    colorlinks=true,
    linkcolor=black,
    urlcolor=black,
    citecolor=black,
    bookmarksdepth=2
}

\\titleformat{\\section}
{\\Large\\bfseries}
{}
{0em}
{}
[\\titlerule\\vspace{0.5ex}]

\\titleformat{\\subsection}
{\\normalsize\\bfseries}
{}
{0em}
{}
\\titlespacing*{\\subsection}{0pt}{0.35em}{0.15em}

\\newcounter{cventry}
\\newcommand{\\cventry}[4]{%
    \\refstepcounter{cventry}%
    \\phantomsection%
    \\pdfbookmark[2]{#1}{cventry-\\thecventry}%
    \\noindent\\begin{tabularx}{\\textwidth}{@{}>{\\raggedright\\arraybackslash}X >{\\raggedleft\\arraybackslash}X@{}}
    \\textbf{#1} & #2 \\\\
    \\textit{#3} & \\textit{#4} \\\\
    \\end{tabularx}
}

\\begin{document}

\\begin{center}
    {\\LARGE \\textbf{Seu Nome Completo}} \\\\ [0.1cm]
    Limeira, SP $\\cdot$ \\href{mailto:seu.email@dac.unicamp.br}{seu.email@dac.unicamp.br} $\\cdot$ \\href{https://linkedin.com/in/seuperfil}{linkedin.com/in/seuperfil} $\\cdot$ \\href{https://github.com/seuperfil}{github.com/seuperfil}
\\end{center}

\\section{Educacao}
\\cventry{Universidade Estadual de Campinas, UNICAMP}{Limeira, SP}{Bacharelado em Sistemas de Informação ou Tecnologia em ADS}{Conclusao Prevista: Dezembro de 2028}
\\begin{itemize}
    \\item Disciplinas Relevantes: Algoritmos e Estruturas de Dados, Engenharia de Software, Bancos de Dados, Redes de Computadores.
    \\item Projetos Praticos: Desenvolvimento de solucoes de software colaborativas com controle de versao via Git.
\\end{itemize}

\\section{Habilidades Tecnicas}
\\begin{itemize}
    \\item \\textbf{Linguagens e Frameworks:} TypeScript, Java, Python, React, Next.js, Spring Boot, Node.js.
    \\item \\textbf{Banco de Dados e Infraestrutura:} PostgreSQL, MySQL, Docker, Git, Linux, Nuvem AWS e Google Cloud.
    \\item \\textbf{Idiomas:} Portugues Nativo, Ingles Tecnico para Leitura e Comunicacao Profissional.
\\end{itemize}

\\section{Projetos em Destaque}
\\cventry{Guia do Calouro FT Unicamp}{Limeira, SP}{Plataforma Web com Next.js, Sass e Framer Motion}{2026}
\\begin{itemize}
    \\item Desenvolvimento de portal de orientacao estudantil com arquitetura modular e navegacao responsiva.
    \\item Implementacao de componentes interativos e organizacao de recursos institucionais para alunos.
\\end{itemize}

\\cventry{API de Gestao e Servicos}{Limeira, SP}{Servico RESTful em Java e Spring Boot com PostgreSQL}{2026}
\\begin{itemize}
    \\item Construcao de endpoints com autenticacao e validação estrita de tipos de dados.
    \\item Criacao de ambiente conteinerizado via Docker para replicacao local de banco de dados e testes.
\\end{itemize}

\\section{Atividades Extracurriculares e Lideranca}
\\cventry{Atria Jr. ou Centro Academico CDI}{Limeira, SP}{Membro ou Desenvolvedor Trainee}{Marco de 2026 ate o Momento}
\\begin{itemize}
    \\item Participacao em rotinas de desenvolvimento em equipe, revisão de codigo e alinhamento de requisitos.
    \\item Apoio a iniciativas de integracao tecnica e organizacao de eventos na Faculdade de Tecnologia.
\\end{itemize}

\\end{document}`;
