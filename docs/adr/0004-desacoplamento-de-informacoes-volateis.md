# Desacoplamento e direcionamento canônico de informações voláteis

## Contexto

Informações operacionais do campus e da universidade sofrem alterações periódicas e frequentes. Horários de partidas do circular e do fretado intercampi, cardápios diários do restaurante universitário, tabelas de tarifas, prazos específicos do calendário letivo e contatos administrativos mudam regularmente por determinação dos órgãos gestores.

Transcrever esses dados pontuais diretamente no corpo de textos informativos ou em componentes visuais estáticos gera desatualização precoce, induz a comunidade acadêmica a equívocos em momentos críticos e impõe demanda excessiva de manutenção corretiva no código.

## Decisão

Todos os textos, componentes e estruturas de dados do projeto devem seguir os seguintes princípios em relação a informações mutáveis:

1. Fica expressamente vedada a transcrição manual de horários exatos de transporte, valores monetários temporários, cardápios alimentares do dia ou datas comemorativas passageiras no texto estático da aplicação.
2. O guia deve limitar-se a explicar a finalidade, as regras gerais de funcionamento e as instruções conceituais de acesso aos serviços oferecidos.
3. Para consulta de dados dinâmicos, a interface deve disponibilizar hiperlinks direcionados exclusivamente para as páginas oficiais e fontes canônicas mantidas pela Diretoria Acadêmica, pela Prefeitura Universitária ou pela Faculdade de Tecnologia.
4. Catálogos estruturados de dados no sistema devem armazenar apenas metadados estáveis, como títulos de serviços, orientações de uso, categorias e os endereços das fontes oficiais.
5. As revisões de código devem verificar preventivamente se novos textos ou edições não reintroduzem dados voláteis codificados diretamente nas telas.

## Consequências

O conteúdo da plataforma mantém confiabilidade duradoura e reduz a necessidade de intervenções contínuas de suporte. A comunidade discente é orientada a consultar a fonte primária sempre que necessitar de informações em tempo real, eliminando riscos decorrentes de defasagem de dados.
