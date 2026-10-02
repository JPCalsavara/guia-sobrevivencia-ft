import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { TelemetryPayload } from '../telemetry/route';
import { computeAggregates, PesquisaResposta } from '@/lib/pesquisa';

const DATA_DIR = path.resolve(process.cwd(), 'data');
const TELEMETRY_FILE = path.join(DATA_DIR, 'telemetry_events.json');
const SNAPSHOT_FILE = path.join(DATA_DIR, 'analytics_snapshot.json');
const PESQUISA_FILE = path.join(DATA_DIR, 'pesquisa_respostas.json');

// Dados de referencia inicial representativos da comunidade da FT
const BENCHMARK_TELEMETRY: TelemetryPayload[] = [
  { topicId: 'bsi-vs-tads', topicTitle: 'BSI versus TADS', dwellTimeSeconds: 120, isMobile: true, scrollDepthPct: 85, interacted: true },
  { topicId: 'bsi-vs-tads', topicTitle: 'BSI versus TADS', dwellTimeSeconds: 95, isMobile: false, scrollDepthPct: 90, interacted: true },
  { topicId: 'sazonalidade-estagio', topicTitle: 'Sazonalidade e Feiras de Estágio', dwellTimeSeconds: 110, isMobile: true, scrollDepthPct: 80, interacted: true },
  { topicId: 'curriculo-latex', topicTitle: 'Modelo de Currículo em LaTeX', dwellTimeSeconds: 180, isMobile: false, scrollDepthPct: 95, interacted: true },
  { topicId: 'transporte-alimentacao', topicTitle: 'Restaurante Universitário e Circular', dwellTimeSeconds: 60, isMobile: true, scrollDepthPct: 70, interacted: false },
  { topicId: 'trainee-vs-estagio', topicTitle: 'Estágio versus Trainee e Júnior', dwellTimeSeconds: 140, isMobile: true, scrollDepthPct: 85, interacted: true },
  { topicId: 'hackathons-bootcamps', topicTitle: 'Hackathons e Apple Developer Academy', dwellTimeSeconds: 130, isMobile: false, scrollDepthPct: 80, interacted: true },
  { topicId: 'pos-graduacao-ft-ic', topicTitle: 'Mestrado e Doutorado FT e IC', dwellTimeSeconds: 90, isMobile: true, scrollDepthPct: 75, interacted: false },
  { topicId: 'calculo-geometria', topicTitle: 'Cálculo e Programação 1', dwellTimeSeconds: 150, isMobile: false, scrollDepthPct: 90, interacted: true },
  { topicId: 'coeficientes-dac', topicTitle: 'Coeficientes CR e CP na DAC', dwellTimeSeconds: 85, isMobile: true, scrollDepthPct: 65, interacted: false },
];

export async function GET() {
  let telemetry: TelemetryPayload[] = [];
  if (fs.existsSync(TELEMETRY_FILE)) {
    try {
      const raw = fs.readFileSync(TELEMETRY_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        telemetry = [...BENCHMARK_TELEMETRY, ...parsed];
      } else {
        telemetry = BENCHMARK_TELEMETRY;
      }
    } catch {
      telemetry = BENCHMARK_TELEMETRY;
    }
  } else {
    telemetry = BENCHMARK_TELEMETRY;
  }

  let snapshot = {
    visitors: 1240,
    page_views: 4860,
    routes: {
      '/carreira': 1420,
      '/academico': 1350,
      '/calouros': 890,
      '/campus': 620,
      '/duvidas': 380,
      '/estudos-ia': 200,
    },
    devices: { mobile: 0.54, desktop: 0.46 },
  };

  if (fs.existsSync(SNAPSHOT_FILE)) {
    try {
      const raw = fs.readFileSync(SNAPSHOT_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      snapshot = { ...snapshot, ...parsed };
    } catch {
      // mantem snapshot padrao
    }
  }

  // Agregacao de telemetria por topico
  const topicStats: Record<string, { views: number; totalDwell: number; interactions: number }> = {};
  let totalDwell = 0;
  let mobileCount = 0;
  let desktopCount = 0;
  let interactionCount = 0;

  telemetry.forEach((ev) => {
    const title = ev.topicTitle || ev.topicId || 'Tópico Geral';
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

  const totalEvents = telemetry.length || 1;
  const mobilePct = Math.round((mobileCount / totalEvents) * 100);
  const desktopPct = 100 - mobilePct;
  const avgDwellSeconds = Math.round(totalDwell / totalEvents);
  const interactionRatePct = Math.round((interactionCount / totalEvents) * 100);

  const topTopics = Object.entries(topicStats)
    .map(([title, s]) => ({
      title,
      views: s.views,
      avgDwellSeconds: Math.round(s.totalDwell / (s.views || 1)),
      interactions: s.interactions,
    }))
    .sort((a, b) => b.views - a.views)
    .slice(0, 7);

  // Pesquisa discente
  let userVotes: PesquisaResposta[] = [];
  if (fs.existsSync(PESQUISA_FILE)) {
    try {
      const raw = fs.readFileSync(PESQUISA_FILE, 'utf8');
      userVotes = JSON.parse(raw);
      if (!Array.isArray(userVotes)) userVotes = [];
    } catch {
      userVotes = [];
    }
  }

  const pesquisaAggregates = computeAggregates(userVotes);

  return NextResponse.json({
    metrics: {
      totalViews: snapshot.page_views + telemetry.length,
      estimatedVisitors: snapshot.visitors + Math.round(telemetry.length / 3),
      avgDwellSeconds,
      interactionRatePct,
    },
    devices: {
      mobilePct,
      desktopPct,
    },
    topTopics,
    popularRoutes: Object.entries(snapshot.routes).map(([route, count]) => ({
      route,
      count,
    })),
    pesquisa: pesquisaAggregates,
  });
}
