'use client';

import React, { useState, useEffect } from 'react';
import { GitBranch, CheckCircle2, Tag, MapPin, Code2, Users } from 'lucide-react';
import { IdeStatusItem } from '@/components/molecules/IdeStatusItem/IdeStatusItem';
import { StatusDot } from '@/components/atoms/StatusDot/StatusDot';
import packageInfo from '../../../../package.json';
import styles from './IdeStatusBar.module.scss';

export function IdeStatusBar() {
  const [liveVisitors, setLiveVisitors] = useState<number>(18);
  const [todayVisitors, setTodayVisitors] = useState<number>(342);
  const [totalHistory, setTotalHistory] = useState<number>(14660);

  useEffect(() => {
    let isMounted = true;
    const loadStats = async () => {
      try {
        const res = await fetch('/api/estatisticas');
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.metrics) {
            if (typeof data.metrics.liveVisitors === 'number') {
              setLiveVisitors(data.metrics.liveVisitors);
            }
            if (typeof data.metrics.todayVisitors === 'number') {
              setTodayVisitors(data.metrics.todayVisitors);
            }
            if (typeof data.metrics.totalHistory === 'number') {
              setTotalHistory(data.metrics.totalHistory);
            }
          }
        }
      } catch {
        // Mantem metricas padrao
      }
    };
    loadStats();
    const interval = setInterval(loadStats, 60000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const totalHistoryLabel = `${Math.round(totalHistory / 1000)}k total`;

  return (
    <footer className={styles.statusBar} aria-label="Barra de status estilo editor de código">
      <div className={styles.leftGroup}>
        <IdeStatusItem
          icon={<GitBranch size={13} style={{ color: 'var(--dracula-purple, #bd93f9)' }} />}
          label="main"
          tooltip="Ramo de produção do Guia FT"
        />
        <IdeStatusItem
          icon={<span className={styles.pulseDot} />}
          label={`${liveVisitors} ao vivo`}
          tooltip="Usuários simultâneos navegando no Guia FT"
        />
        <IdeStatusItem
          className={styles.hideOnMobile}
          icon={<Users size={13} style={{ color: 'var(--dracula-cyan, #8be9fd)' }} />}
          label={`${todayVisitors} hoje`}
          tooltip="Visitantes registrados no dia de hoje"
        />
        <IdeStatusItem
          className={styles.hideOnMobile}
          label={totalHistoryLabel}
          tooltip="Total acumulado histórico de acessos"
        />
        <IdeStatusItem
          className={styles.hideOnMobile}
          icon={<CheckCircle2 size={13} style={{ color: 'var(--dracula-green, #50fa7b)' }} />}
          label="0 erros, 0 avisos"
          tooltip="Integridade de código e ADR 0001 validada"
          highlight
        />
        <IdeStatusItem
          href="/versoes"
          icon={<Tag size={13} style={{ color: 'var(--dracula-cyan, #8be9fd)' }} />}
          label={`v${packageInfo.version}`}
          tooltip="Historico de versoes semanticas do portal"
        />
      </div>

      <div className={styles.rightGroup}>
        <IdeStatusItem
          className={styles.hideOnMobile}
          icon={<MapPin size={13} style={{ color: 'var(--dracula-pink, #ff79c6)' }} />}
          label="FT Limeira"
          tooltip="Faculdade de Tecnologia da Unicamp, Campus 1"
        />
        <IdeStatusItem
          className={styles.hideOnMobile}
          label="UTF-8"
          tooltip="Codificação de caracteres padronizada"
        />
        <IdeStatusItem
          icon={<Code2 size={13} style={{ color: 'var(--dracula-yellow, #f1fa8c)' }} />}
          label="SilvMar"
          tooltip="Linguagem padronizada SilvMar"
        />
        <div className={`${styles.dotWrap} ${styles.hideOnMobile}`}>
          <StatusDot status="online" label="Online" />
        </div>
      </div>
    </footer>
  );
}
