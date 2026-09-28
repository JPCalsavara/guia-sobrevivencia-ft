export const geminiSyllabusPrompt = `Voce e um assistente especializado em organizacao academica universitaria.
Analise o arquivo PDF deste plano de aula da disciplina e extraia todos os eventos avaliativos relevantes, como provas, entregas de trabalhos, seminarios e exames.

Retorne dois blocos estruturados:

Bloco 1, Codigo iCalendar padrao RFC 5545:
Gere um arquivo de texto com extensao ics completo iniciando com BEGIN:VCALENDAR e finalizando com END:VCALENDAR contendo cada avaliacao em um bloco VEVENT com SUMMARY, DESCRIPTION, DTSTART, DTEND e alarmes programados para vinte e quatro horas antes.

Bloco 2, Resumo em Tabela:
Apresente uma tabela simples com Data, Horario, Titulo da Avaliacao, Peso ou Criterio e Local caso informado.

Regras importantes:
- Considere o fuso horario oficial de America Sao Paulo.
- Caso o plano cite semanas em vez de datas exatas, estime a data a partir da data de inicio das aulas do semestre vigente.
- Mantenha a saida limpa e direta para que o arquivo ics possa ser salvo e importado no Google Agenda ou Apple Calendar.`;

export const latexResumeTemplate = `\\documentclass[letterpaper,10pt]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{hyperref}
\\usepackage{enumitem}

\\pagestyle{empty}
\\raggedright
\\setlength{\\tabcolsep}{0in}

\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1.0in}
\\addtolength{\\topmargin}{-0.5in}
\\addtolength{\\textheight}{1.0in}

\\titleformat{\\section}{\\large\\bfseries\\scshape}{}{0em}{}[\\titlerule]

\\begin{document}

\\begin{center}
    {\\LARGE \\textbf{Seu Nome Completo}} \\\\ \\vspace{2pt}
    Limeira, SP $\\cdot$ 19 99999 9999 $\\cdot$ \\href{mailto:seu.email@dac.unicamp.br}{seu.email@dac.unicamp.br} \\\\
    \\href{https://linkedin.com/in/seuperfil}{linkedin.com/in/seuperfil} $\\cdot$ \\href{https://github.com/seuperfil}{github.com/seuperfil}
\\end{center}

\\section{Formacao Academica}
\\textbf{Universidade Estadual de Campinas, UNICAMP} \\hfill Limeira, SP \\\\
\\textit{Bacharelado em Sistemas de Informacao ou Tecnologia em ADS} \\hfill Conclusao Prevista: Dez 2028 \\\\
$\\cdot$ Disciplinas Relevantes: Estruturas de Dados, Engenharia de Software, Bancos de Dados, Redes.

\\section{Habilidades Tecnicas}
\\textbf{Linguagens:} Java, TypeScript, Python, C++, SQL. \\\\
\\textbf{Frameworks e Ferramentas:} React, Next.js, Node.js, Spring Boot, AWS, Docker, Git. \\\\
\\textbf{Idiomas:} Ingles Intermediario ou Avancado para leitura e conversacao tecnica.

\\section{Projetos em Destaque}
\\textbf{Guia do Calouro FT Unicamp} $|$ \\textit{Next.js, TypeScript, Sass, Framer Motion} \\hfill 2026 \\\\
\\begin{itemize}[leftmargin=*,noitemsep,topsep=0pt]
    \\item Desenvolvimento de plataforma web voltada para orientacao academica e carreira na universidade.
    \\item Implementacao de componentes interativos e organizacao de recursos institucionais para calouros.
\\end{itemize}

\\vspace{4pt}
\\textbf{API de Gerenciamento Bancario} $|$ \\textit{Java, Spring Boot, PostgreSQL, Docker} \\hfill 2026 \\\\
\\begin{itemize}[leftmargin=*,noitemsep,topsep=0pt]
    \\item Construcao de API RESTful com autenticacao segura e regras de negocio para transacoes.
    \\item Modelagem de banco de dados relacional com integridade referencial e testes automatizados.
\\end{itemize}

\\section{Extracurricular e Lideranca}
\\textbf{Atria Jr. ou Centro Academico CDI} \\hfill Limeira, SP \\\\
\\textit{Membro ou Desenvolvedor Trainee} \\hfill Mar 2026 ate o Momento \\\\
\\begin{itemize}[leftmargin=*,noitemsep,topsep=0pt]
    \\item Colaboracao no desenvolvimento de interfaces com Next.js em equipe estruturada.
    \\item Participacao em dinâmicas de revisao de codigo e levantamento de requisitos tecnicos.
\\end{itemize}

\\end{document}`;
