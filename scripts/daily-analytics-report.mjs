import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
const DATA_DIR = path.join(projectRoot, 'data');
const TELEMETRY_FILE = path.join(DATA_DIR, 'telemetry_events.json');
const SNAPSHOT_FILE = path.join(DATA_DIR, 'analytics_snapshot.json');
const DUVIDAS_FILE = path.join(DATA_DIR, 'duvidas_submissoes.json');
const DESTINATION_EMAIL = 'j197837@dac.unicamp.br';

export function generateDailyReportData() {
  let telemetry = [];
  if (fs.existsSync(TELEMETRY_FILE)) {
    try {
      telemetry = JSON.parse(fs.readFileSync(TELEMETRY_FILE, 'utf8'));
    } catch {
      telemetry = [];
    }
  }

  let snapshot = {
    visitors: 0,
    page_views: 0,
    routes: {},
    devices: { mobile: 0.5, desktop: 0.5 },
    referrers: {}
  };

  if (fs.existsSync(SNAPSHOT_FILE)) {
    try {
      snapshot = JSON.parse(fs.readFileSync(SNAPSHOT_FILE, 'utf8'));
    } catch {
      // mantem valores padrao
    }
  }

  let duvidas = [];
  if (fs.existsSync(DUVIDAS_FILE)) {
    try {
      duvidas = JSON.parse(fs.readFileSync(DUVIDAS_FILE, 'utf8'));
    } catch {
      duvidas = [];
    }
  }

  // Agrupamento por topico
  const topicStats = {};
  let totalDwell = 0;
  let mobileCount = 0;
  let desktopCount = 0;
  let interactionCount = 0;

  telemetry.forEach((ev) => {
    const title = ev.topicTitle || ev.topicId || 'Outro Topico';
    if (!topicStats[title]) {
      topicStats[title] = { views: 0, totalDwell: 0, interactions: 0 };
    }
    topicStats[title].views += 1;
    topicStats[title].totalDwell += ev.dwellTimeSeconds || 0;
    if (ev.interacted) {
      topicStats[title].interactions += 1;
      interactionCount += 1;
    }
    totalDwell += ev.dwellTimeSeconds || 0;
    if (ev.isMobile) {
      mobileCount += 1;
    } else {
      desktopCount += 1;
    }
  });

  const sortedTopics = Object.entries(topicStats)
    .map(([title, st]) => ({
      title,
      views: st.views,
      avgDwell: Math.round(st.totalDwell / (st.views || 1)),
      interactions: st.interactions
    }))
    .sort((a, b) => b.views - a.views);

  const topTopics = sortedTopics.slice(0, 5);

  const sortedRoutes = Object.entries(snapshot.routes || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const totalEvents = telemetry.length;
  const mobilePct = totalEvents > 0 ? Math.round((mobileCount / totalEvents) * 100) : 50;
  const desktopPct = 100 - mobilePct;
  const avgGeneralDwell = totalEvents > 0 ? Math.round(totalDwell / totalEvents) : 45;

  // Analise de melhorias orientadas a dados
  const melhoriasRecomendadas = [];

  if (mobilePct >= 45) {
    melhoriasRecomendadas.push(
      'Prioridade Mobile First: Quase metade dos estudantes acessa via smartphone. Recomendado manter os botoes de acao rapida e sumarios recolhidos no topo para facilitar a navegacao em telas pequenas.'
    );
  }

  if (topTopics.length > 0 && topTopics[0].avgDwell > 60) {
    melhoriasRecomendadas.push(
      `Expansao do Topico Lider: O assunto "${topTopics[0].title}" registra o maior tempo de permanencia media, cerca de ${topTopics[0].avgDwell} segundos. Vale adicionar mais exemplos praticos e links oficiais especificos para esse tema.`
    );
  } else {
    melhoriasRecomendadas.push(
      'Otimizacao de Leitura: Aumentar o destaque para atalhos diretos da Grade DAC e do cardapio do Restaurante Universitario, que costumam registrar alto interesse cotidiano.'
    );
  }

  if (duvidas.length > 0) {
    melhoriasRecomendadas.push(
      `Integracao de Novas Duvidas: Foram recebidas ${duvidas.length} perguntas discentes pelo portal. Transformar as perguntas respondidas em novos topicos permanentes no Portal de Duvidas.`
    );
  } else {
    melhoriasRecomendadas.push(
      'Divulgacao do Portal de Duvidas: Incentivar calouros e veteranos a mandarem suas perguntas via formulario para alimentar a base de conhecimento colaborativa da faculdade.'
    );
  }

  return {
    dataRelatorio: new Date().toLocaleDateString('pt-BR'),
    horaRelatorio: '08:00',
    totalVisitantesSnapshot: snapshot.visitors || totalEvents,
    totalVisualizacoesSnapshot: snapshot.page_views || totalEvents * 3,
    totalEventosTelemetria: totalEvents,
    mobilePct,
    desktopPct,
    avgGeneralDwell,
    topTopics,
    sortedRoutes,
    totalDuvidasSubmetidas: duvidas.length,
    melhoriasRecomendadas
  };
}

export function formatReportText(data) {
  return `
RELATORIO DIARIO DE ACESSOS E MELHORIAS DO GUIA FT
Data: ${data.dataRelatorio} as ${data.horaRelatorio}
Destinatario: ${DESTINATION_EMAIL}

1. METRICAS GERAIS DE AUDIENCIA
- Visitantes Estimados: ${data.totalVisitantesSnapshot}
- Visualizacoes de Pagina: ${data.totalVisualizacoesSnapshot}
- Eventos de Telemetria Analisados: ${data.totalEventosTelemetria}
- Dispositivos Moveis: ${data.mobilePct}% | Computadores: ${data.desktopPct}%
- Tempo Medio de Permanencia: ${data.avgGeneralDwell} segundos

2. SECOES MAIS ACESSADAS
${data.topTopics.map((t, idx) => `  ${idx + 1}. ${t.title}: ${t.views} acessos, tempo medio de ${t.avgDwell}s`).join('\n')}

3. ROTAS MAIS FREQUENTES NO PORTAL
${data.sortedRoutes.map(([r, count], idx) => `  ${idx + 1}. ${r}: ${count} visualizacoes`).join('\n')}

4. DUVIDAS SUBMETIDAS POR ALUNOS
- Total de perguntas registradas na base: ${data.totalDuvidasSubmetidas}

5. RECOMENDACOES DE MELHORIA ORIENTADAS POR DADOS
${data.melhoriasRecomendadas.map((m, idx) => `  ${idx + 1}. ${m}`).join('\n')}

Relatorio gerado automaticamente pelo motor analitico do Guia FT Unicamp.
`.trim();
}

export async function sendDailyReportEmail(data) {
  const textContent = formatReportText(data);
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.log('RESEND_API_KEY nao configurada no ambiente. Relatorio exibido apenas no console.');
    return { success: true, emailEnviado: false, textContent };
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Guia FT Analytics <onboarding@resend.dev>',
        to: [DESTINATION_EMAIL],
        subject: `Relatorio Diario Guia FT: Audiencia e Melhorias ${data.dataRelatorio}`,
        text: textContent
      })
    });

    return { success: response.ok, emailEnviado: response.ok, textContent };
  } catch (err) {
    console.error('Erro ao despachar relatorio por email:', err);
    return { success: false, emailEnviado: false, error: err.message };
  }
}

// Execucao direta pela linha de comando
if (process.argv[1] && process.argv[1].endsWith('daily-analytics-report.mjs')) {
  const data = generateDailyReportData();
  const text = formatReportText(data);
  console.log(text);

  sendDailyReportEmail(data)
    .then((res) => {
      if (res.emailEnviado) {
        console.log(`Relatorio despachado com sucesso para ${DESTINATION_EMAIL}`);
      }
    })
    .catch((err) => {
      console.error('Falha na rotina:', err);
    });
}
