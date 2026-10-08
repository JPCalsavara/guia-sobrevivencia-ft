import { NextResponse } from 'next/server';
import { generateDailyReportData, sendDailyReportEmail, formatReportText } from '../../../../../scripts/daily-analytics-report.mjs';

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET;

    // Se houver CRON_SECRET configurado na Vercel valida a autorizacao da requisicao
    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: 'Nao autorizado' }, { status: 401 });
    }

    const data = generateDailyReportData();
    const emailResult = await sendDailyReportEmail(data);
    const reportText = formatReportText(data);

    return NextResponse.json({
      success: true,
      dataRelatorio: data.dataRelatorio,
      emailEnviado: emailResult.emailEnviado,
      destinatario: 'j197837@dac.unicamp.br',
      métricas: {
        visitantes: data.totalVisitantesSnapshot,
        visualizacoes: data.totalVisualizacoesSnapshot,
        eventosTelemetria: data.totalEventosTelemetria,
        mobilePct: data.mobilePct,
        topTopics: data.topTopics.map((t) => t.title)
      },
      melhoriasRecomendadas: data.melhoriasRecomendadas,
      relatorioCompleto: reportText
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Falha ao executar rotina';
    return NextResponse.json(
      { error: 'Falha ao gerar relatorio diario de analytics', detalhe: msg },
      { status: 500 }
    );
  }
}
