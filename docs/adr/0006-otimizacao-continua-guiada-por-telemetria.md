# Otimizacao continua guiada por telemetria e analise de uso

## Contexto

As decisoes de arquitetura da informação, hierarquia de navegacao e prioridade de redacao no Guia do Estudante da Faculdade de Tecnologia da Unicamp necessitam de embasamento empirico. Sem dados reais de navegacao, corre-se o risco de investir esforco em conteúdos de baixo interesse enquanto duvidas urgentes da comunidade discente permanecem desassistidas. O portal integra o Vercel Analytics em ambiente de producao, capturando métricas anonimas de visualizacoes, retencao, sistemas operacionais e dispositivos.

## Decisao

Adotar a telemetria do Vercel Analytics como insumo continuo de engenharia de software e de produto, apoiada por rotinas de analise em Python executaveis em ambiente de desenvolvimento local.

Diretrizes adotadas:

1. Execucao de scripts de diagnostico em desenvolvimento para correlacionar volumes de acesso por rota, classificando modulos de alta demanda como a secao academica e modulos que demandam maior descoberta como a secao de calouros.
2. Monitoramento constante da proporcao de dispositivos, garantindo que o expressivo volume de acessos moveis via Android receba atencao ergonomica equivalente ou superior a versao desktop.
3. Respeito irrestrito a privacidade dos estudantes, mantendo telemetria puramente estatistica sem gravacao de identificadores pessoais, cookies invasivos ou enderecos IP nominais.
4. Conformidade integral com a ADR 0001, assegurando que relatorios, textos sugeridos e documentos gerados preservem a ausencia de travessoes explicativos, parenteses e emojis decorativos.

## Consequencias

A evolucao do portal torna-se orientada a dados concretos de uso. As rotas lideres de engajamento recebem atalhos imediatos na pagina inicial, as secoes subutilizadas ganham mecanismos de impulsionamento e as decisoes de acessibilidade e layout apoiam-se na distribuicao real de navegadores e sistemas operacionais dos discentes da FT.
