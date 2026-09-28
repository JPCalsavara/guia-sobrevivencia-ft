export const geminiSyllabusPrompt = `Voce e um assistente especializado em organizacao academica universitaria.
Analise o arquivo PDF deste plano de aula da disciplina e extraia todos os eventos avaliativos relevantes.

Estruture sua resposta estritamente em formato JSON contendo uma lista de objetos com os seguintes campos:
1. title: Titulo claro do evento, como Prova 1, Entrega de Laboratorio, Projeto Semestral ou Exame Final.
2. date: Data do evento no formato AAAA-MM-DD.
3. time: Horario de inicio no formato HH:MM caso esteja informado, ou deixe vazio.
4. description: Resumo curto sobre o conteudo abordado ou instrucoes de entrega.
5. location: Sala ou laboratorio indicado pelo docente, caso exista.

Regras importantes:
- Considere o fuso horario oficial de Brasilia.
- Caso o plano cite semanas em vez de datas exatas, tente estimar a data a partir da data de inicio das aulas do semestre vigente.
- Retorne apenas o bloco JSON sem introducoes ou comentarios adicionais.`;

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
