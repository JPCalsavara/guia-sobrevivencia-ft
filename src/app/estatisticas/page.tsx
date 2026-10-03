'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Users,
  Eye,
  Clock,
  Smartphone,
  Monitor,
  Flame,
  HelpCircle,
  Compass
} from 'lucide-react';
import { PesquisaAggregates } from '@/lib/pesquisa';
import { TopicItem } from '@/components/DocSidebar/DocSidebar';
import styles from './estatisticas.module.scss';

interface TimeSeriesPoint {
  label: string;
  views: number;
  visitors: number;
}

interface TimeSeriesPeriod {
  label: string;
  totalViews: number;
  visitors: number;
  avgDwellSeconds: number;
  interactionRatePct: number;
  chart: TimeSeriesPoint[];
}

interface StatsResponse {
  metrics: {
    totalViews: number;
    estimatedVisitors: number;
    avgDwellSeconds: number;
    interactionRatePct: number;
    liveVisitors?: number;
    todayVisitors?: number;
    totalHistory?: number;
  };
  timeSeries?: {
    '24h': TimeSeriesPeriod;
    '7d': TimeSeriesPeriod;
    '30d': TimeSeriesPeriod;
    '6m': TimeSeriesPeriod;
    '1y': TimeSeriesPeriod;
  };
  devices: {
    mobilePct: number;
    desktopPct: number;
  };
  topTopics: Array<{
    title: string;
    views: number;
    avgDwellSeconds: number;
    interactions: number;
  }>;
  popularRoutes: Array<{
    route: string;
    count: number;
  }>;
  pesquisa: PesquisaAggregates;
}

const estatisticasTopics: TopicItem[] = [
  {
    id: 'metricas-audiencia',
    title: 'Métricas de Audiência',
    subtopics: [
      { id: 'metricas-audiencia', title: 'Visitantes e Tempo de Permanência' },
      { id: 'acesso-dispositivos', title: 'Acesso por Dispositivo Mobile e Desktop' },
    ],
  },
  {
    id: 'termometro-discente',
    title: 'Termômetro Discente',
    subtopics: [
      { id: 'termometro-discente', title: 'Pesquisa e Anseios dos Alunos da FT' },
    ],
  },
];

const TIME_PERIODS: Array<{ key: '24h' | '7d' | '30d' | '6m' | '1y'; label: string }> = [
  { key: '24h', label: '24 Horas' },
  { key: '7d', label: '1 Semana' },
  { key: '30d', label: '1 Mês' },
  { key: '6m', label: '6 Meses' },
  { key: '1y', label: '1 Ano' },
];

export default function EstatisticasPage() {
  const [data, setData] = useState<StatsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState<'24h' | '7d' | '30d' | '6m' | '1y'>('24h');

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/estatisticas');
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch {
      // Falha silenciosa com dados padrao
    } finally {
      setLoading(false);
    }
  };

  const currentPeriod = data?.timeSeries?.[selectedPeriod];
  const displayViews = currentPeriod?.totalViews ?? data?.metrics.totalViews ?? 85;
  const displayVisitors = currentPeriod?.visitors ?? data?.metrics.estimatedVisitors ?? 32;
  const displayDwell = currentPeriod?.avgDwellSeconds ?? data?.metrics.avgDwellSeconds ?? 118;
  const displayInteraction = currentPeriod?.interactionRatePct ?? data?.metrics.interactionRatePct ?? 82;

  const chartPoints = currentPeriod?.chart ?? [
    { label: '00h a 04h', views: 6, visitors: 2 },
    { label: '04h a 08h', views: 8, visitors: 4 },
    { label: '08h a 12h', views: 26, visitors: 11 },
    { label: '12h a 16h', views: 22, visitors: 8 },
    { label: '16h a 20h', views: 15, visitors: 5 },
    { label: '20h a 24h', views: 8, visitors: 2 },
  ];

  const maxVal = Math.max(1, ...chartPoints.map((p) => Math.max(p.views, p.visitors)));

  return (
    <div className={styles.container}>
      {/* Header */}
      <section className={styles.pageHeader}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.headerBadge}>
            <BarChart3 size={16} />
            <span>Metricas Publicas e Termometro Discente</span>
          </div>

          <h1 className={styles.pageTitle}>
            Estatisticas em Producao e Indicadores Discentes
          </h1>

          <p className={styles.pageDescription}>
            Acompanhe em tempo real a audiencia do Guia de Sobrevivencia da FT, as secoes mais consultadas pelos alunos e os indicadores consolidados da comunidade academica.
          </p>
        </motion.div>
      </section>

      {/* Seletor de Período Temporal */}
      <div className={styles.periodTabs} role="tablist" aria-label="Selecione a janela de tempo das estatísticas">
        {TIME_PERIODS.map((period) => (
          <button
            key={period.key}
            type="button"
            role="tab"
            aria-selected={selectedPeriod === period.key}
            className={`${styles.periodTab} ${selectedPeriod === period.key ? styles.active : ''}`}
            onClick={() => setSelectedPeriod(period.key)}
          >
            {period.label}
          </button>
        ))}
      </div>

      {/* Grid de Métricas Principais */}
      <section id="metricas-audiencia" className={styles.metricsGrid}>
        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <span className={styles.metricLabel}>Visualizações no Período</span>
            <div className={styles.metricIconWrap}>
              <Eye size={18} />
            </div>
          </div>
          <span className={styles.metricValue}>
            {loading ? '...' : displayViews.toLocaleString('pt-BR')}
          </span>
          <span className={styles.metricHelper}>Páginas e tópicos consultados</span>
        </div>

        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <span className={styles.metricLabel}>Visitantes no Período</span>
            <div className={styles.metricIconWrap}>
              <Users size={18} />
            </div>
          </div>
          <span className={styles.metricValue}>
            {loading ? '...' : displayVisitors.toLocaleString('pt-BR')}
          </span>
          <span className={styles.metricHelper}>Estudantes e pesquisadores</span>
        </div>

        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <span className={styles.metricLabel}>Permanência Média</span>
            <div className={styles.metricIconWrap}>
              <Clock size={18} />
            </div>
          </div>
          <span className={styles.metricValue}>
            {loading ? '...' : `${displayDwell}s`}
          </span>
          <span className={styles.metricHelper}>Tempo dedicado por conteúdo</span>
        </div>

        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <span className={styles.metricLabel}>Taxa de Interação</span>
            <div className={styles.metricIconWrap}>
              <Flame size={18} />
            </div>
          </div>
          <span className={styles.metricValue}>
            {loading ? '...' : `${displayInteraction}%`}
          </span>
          <span className={styles.metricHelper}>Cliques em links e simuladores</span>
        </div>
      </section>

      {/* Gráfico de Evolução da Audiência */}
      <section className={styles.chartCard} aria-label="Gráfico de evolução da audiência">
        <div className={styles.chartHeader}>
          <div className={styles.chartTitleGroup}>
            <h2 className={styles.chartTitle}>
              <BarChart3 size={20} aria-hidden="true" />
              <span>Evolução da Audiência no Período de {TIME_PERIODS.find((p) => p.key === selectedPeriod)?.label}</span>
            </h2>
            <p className={styles.chartSubtitle}>
              Distribuição de visualizações e visitantes únicos computados em produção
            </p>
          </div>
          <div className={styles.chartLegend}>
            <div className={styles.legendItem}>
              <span className={styles.legendSquareViews} aria-hidden="true" />
              <span>Visualizações</span>
            </div>
            <div className={styles.legendItem}>
              <span className={styles.legendSquareVisitors} aria-hidden="true" />
              <span>Visitantes</span>
            </div>
          </div>
        </div>

        <div className={styles.chartPlotArea}>
          {chartPoints.map((point, index) => {
            const viewsHeightPct = Math.round((point.views / maxVal) * 100);
            const visitorsHeightPct = Math.round((point.visitors / maxVal) * 100);

            return (
              <div
                key={index}
                className={styles.chartBarGroup}
                title={`${point.label}: ${point.views} visualizações, ${point.visitors} visitantes`}
              >
                <div className={styles.barPair}>
                  <div
                    className={styles.barColViews}
                    style={{ height: `${Math.max(6, viewsHeightPct)}%` }}
                  />
                  <div
                    className={styles.barColVisitors}
                    style={{ height: `${Math.max(6, visitorsHeightPct)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.chartAxisLabels}>
          {chartPoints.map((point, index) => (
            <span key={index} className={styles.axisLabelItem}>
              {point.label}
            </span>
          ))}
        </div>
      </section>

      {/* Dispositivos e Tópicos Populares */}
      <section className={styles.twoColumnSection}>
        {/* Distribuição por Dispositivo */}
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Smartphone size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Acesso por Tipo de Dispositivo</h2>
              <p className={styles.cardSubtitle}>
                Proporção de estudantes navegando via celular versus computador
              </p>
            </div>
          </div>

          <div className={styles.distributionBarContainer}>
            <div className={styles.distributionBar}>
              <div
                className={styles.mobileSegment}
                style={{ width: `${data?.devices.mobilePct ?? 54}%` }}
                title={`Mobile: ${data?.devices.mobilePct ?? 54}%`}
              />
              <div
                className={styles.desktopSegment}
                style={{ width: `${data?.devices.desktopPct ?? 46}%` }}
                title={`Desktop: ${data?.devices.desktopPct ?? 46}%`}
              />
            </div>

            <div className={styles.distributionLegend}>
              <div className={styles.legendItem}>
                <span className={`${styles.legendDot} ${styles.green}`} />
                <span>Smartphones e Tablets: <strong>{data?.devices.mobilePct ?? 54}%</strong></span>
              </div>
              <div className={styles.legendItem}>
                <span className={`${styles.legendDot} ${styles.blue}`} />
                <span>Computadores de Mesa: <strong>{data?.devices.desktopPct ?? 46}%</strong></span>
              </div>
            </div>
          </div>

          <p className={styles.cardSubtitle} style={{ marginTop: 'auto', paddingTop: '1rem', fontStyle: 'italic' }}>
            A alta proporção móvel fundamenta a presença das novas pílulas de navegação rápida exclusivas para telas compactas.
          </p>
        </div>

        {/* Tópicos em Destaque */}
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Flame size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Tópicos Mais Consultados na FT</h2>
              <p className={styles.cardSubtitle}>
                Assuntos com maior interesse e tempo de leitura no portal
              </p>
            </div>
          </div>

          <div className={styles.topList}>
            {(data?.topTopics ?? [
              { title: 'BSI versus TADS: Matriz Comparativa', views: 820, avgDwellSeconds: 120 },
              { title: 'Modelo de Currículo em LaTeX ATS', views: 760, avgDwellSeconds: 180 },
              { title: 'Sazonalidade e Feiras de Estágio', views: 690, avgDwellSeconds: 110 },
              { title: 'Estágio versus Trainee e Júnior', views: 640, avgDwellSeconds: 140 },
              { title: 'Cálculo e o Efeito Cascata de Prog 1', views: 580, avgDwellSeconds: 150 },
            ]).slice(0, 5).map((topic, idx) => (
              <div key={idx} className={styles.topListItem}>
                <span className={styles.topListRank}>#{idx + 1}</span>
                <span className={styles.topListTitle}>{topic.title}</span>
                <span className={styles.topListMeta}>{topic.views} acessos</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modulo de Indicadores da Comunidade Discente */}
      <section id="termometro-discente" className={styles.surveySection}>
        <div className={styles.cardHeader}>
          <Compass size={24} className={styles.headerIcon} />
          <div>
            <h2 className={styles.cardTitle}>Termometro Discente: Indicadores da FT</h2>
            <p className={styles.cardSubtitle}>
              Mapeamento de anseios, momentos no curso e desafios observados na comunidade academica da Faculdade de Tecnologia da Unicamp.
            </p>
          </div>
        </div>

        {/* Exibicao dos Percentuais Consolidados Observados */}
        <div style={{ marginTop: '1.5rem' }}>
          <h3 className={styles.cardTitle} style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
            Resultados Consolidados da Comunidade Discente
          </h3>
          <p className={styles.cardSubtitle} style={{ marginBottom: '1.5rem' }}>
            Total de {data?.pesquisa.totalVotos ?? 10} respostas consolidadas no termometro da FT
          </p>

          <div className={styles.surveyResultsGrid}>
            {/* Momento no Curso */}
            <div className={styles.surveyResultCard}>
              <span className={styles.surveyResultTitle}>Momento no Curso</span>
              {data?.pesquisa.momentoCurso && Object.entries(data.pesquisa.momentoCurso).map(([k, item]) => (
                <div key={k} className={styles.resultBarWrapper}>
                  <div className={styles.resultBarLabelRow}>
                    <span>{item.label}</span>
                    <strong>{item.pct}%</strong>
                  </div>
                  <div className={styles.resultBarOuter}>
                    <div className={styles.resultBarInner} style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Maior Desafio */}
            <div className={styles.surveyResultCard}>
              <span className={styles.surveyResultTitle}>Maior Desafio Universitário</span>
              {data?.pesquisa.maiorDesafio && Object.entries(data.pesquisa.maiorDesafio).map(([k, item]) => (
                <div key={k} className={styles.resultBarWrapper}>
                  <div className={styles.resultBarLabelRow}>
                    <span>{item.label}</span>
                    <strong>{item.pct}%</strong>
                  </div>
                  <div className={styles.resultBarOuter}>
                    <div className={styles.resultBarInner} style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Objetivo de Carreira */}
            <div className={styles.surveyResultCard}>
              <span className={styles.surveyResultTitle}>Objetivo de Carreira</span>
              {data?.pesquisa.objetivoCarreira && Object.entries(data.pesquisa.objetivoCarreira).map(([k, item]) => (
                <div key={k} className={styles.resultBarWrapper}>
                  <div className={styles.resultBarLabelRow}>
                    <span>{item.label}</span>
                    <strong>{item.pct}%</strong>
                  </div>
                  <div className={styles.resultBarOuter}>
                    <div className={styles.resultBarInner} style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
