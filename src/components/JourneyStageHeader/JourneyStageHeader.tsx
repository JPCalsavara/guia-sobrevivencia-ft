'use client';

import React from 'react';
import { GraduationCap, TrendingUp, Award, CheckCircle2, ListOrdered } from 'lucide-react';
import { JourneyStage } from '@/components/JourneyFilter/JourneyFilter';
import styles from './JourneyStageHeader.module.scss';

interface StageMeta {
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>;
  goals: string[];
}

const academicStageMeta: Record<Exclude<JourneyStage, 'all'>, StageMeta> = {
  calouro: {
    title: 'Trilha Prioritária para Ingressantes',
    subtitle: 'Foco inicial em rotina de estudos, adaptação universitária e serviços de permanência',
    badge: '1º e 2º Semestres',
    icon: GraduationCap,
    goals: [
      'Evitar o efeito cascata de reprovações em Programação 1 e Cálculo',
      'Compreender as diferenças estruturais entre BSI diurno e TADS noturno',
      'Aproveitar os plantões semanais com monitores do Programa PAD',
      'Consultar prazos e editais de auxílios e bolsas de permanência da DEAPE',
    ],
  },
  meio: {
    title: 'Trilha Prioritária para Meio de Curso',
    subtitle: 'Consolidação curricular, pesquisa científica, extensão e intercâmbio acadêmico',
    badge: '3º ao 6º Semestre',
    icon: TrendingUp,
    goals: [
      'Acompanhar Coeficiente de Rendimento e planejar matrícula em matérias eletivas',
      'Ingressar em Iniciação Científica PIBIC ou FAPESP sob orientação docente',
      'Preparar documentação de proficiência para editais internacionais da DERI',
      'Cumprir horas de extensão curricularizadas e atividades complementares',
    ],
  },
  formando: {
    title: 'Trilha Prioritária para Concluintes',
    subtitle: 'Integralização dos créditos restantes, estágio supervisionado e defesa de TCC',
    badge: '7º e 8º Semestres',
    icon: Award,
    goals: [
      'Revisar o checklist de formatura e quitação de pendências na DAC e Biblioteca',
      'Formalizar termo de compromisso de estágio obrigatório via sistema SAE',
      'Concluir disciplinas de TCC ou protocolar substituição por artigo científico',
      'Avaliar antecipação de créditos de mestrado pelo Programa Integrado de Formação PIF',
    ],
  },
};

const careerStageMeta: Record<Exclude<JourneyStage, 'all'>, StageMeta> = {
  calouro: {
    title: 'Trilha Profissional para Ingressantes',
    subtitle: 'Primeiros passos de presença técnica, hábitos de estudo e referências da área',
    badge: '1º e 2º Semestres',
    icon: GraduationCap,
    goals: [
      'Criar perfil no GitHub e documentar projetos dos primeiros semestres',
      'Adquirir fundamentos de terminais Unix, controle de versão e Docker',
      'Acompanhar criadores técnicos confiáveis e canais de referência em engenharia',
    ],
  },
  meio: {
    title: 'Trilha Profissional para Meio de Curso',
    subtitle: 'Especialização técnica, certificações em nuvem e competições de inovação',
    badge: '3º ao 6º Semestre',
    icon: TrendingUp,
    goals: [
      'Aproveitar créditos gratuitos e vouchers do AWS Builder Center para estudantes',
      'Estruturar estudos guiados pelas trilhas de especialização do Roadmap.sh',
      'Praticar resolução de problemas de algoritmos para testes de seleção técnica',
      'Participar da competição Desafio Unicamp e estudar idiomas no Confúcio ou CEL',
    ],
  },
  formando: {
    title: 'Trilha Profissional para Formandos',
    subtitle: 'Janela de contratações, currículo otimizado e conversão de estágio em efetivação',
    badge: '7º e 8º Semestres',
    icon: Award,
    goals: [
      'Mapear a janela de contratações de agosto e comparecer a feiras de estágio',
      'Elaborar currículo em LaTeX de página única formatado para leitores ATS',
      'Preparar respostas estratégicas para entrevistas comportamentais e técnicas',
      'Candidatar-se continuamente nos portais corporativos de fintechs e big techs',
    ],
  },
};

interface JourneyStageHeaderProps {
  stage: Exclude<JourneyStage, 'all'>;
  pageContext: 'academico' | 'carreira';
  onReset: () => void;
}

export function JourneyStageHeader({ stage, pageContext, onReset }: JourneyStageHeaderProps) {
  const meta = pageContext === 'academico' ? academicStageMeta[stage] : careerStageMeta[stage];
  const Icon = meta.icon;

  return (
    <div className={styles.headerCard}>
      <div className={styles.headerTop}>
        <div className={styles.titleArea}>
          <div className={styles.stageIconBadge}>
            <Icon size={22} aria-hidden="true" />
          </div>
          <div className={styles.badgeAndTitle}>
            <span className={styles.stagePill}>{meta.badge}</span>
            <h2 className={styles.title}>{meta.title}</h2>
          </div>
        </div>

        <button
          type="button"
          onClick={onReset}
          className={styles.resetBtn}
          aria-label="Voltar para a visão geral completa de todos os semestres"
        >
          Ver Todas as Fases
        </button>
      </div>

      <p className={styles.subtitle}>{meta.subtitle}</p>

      <div className={styles.goalsContainer}>
        <h3 className={styles.goalsHeading}>
          <ListOrdered size={15} aria-hidden="true" />
          <span>Focos Centrais Deste Momento</span>
        </h3>
        <ul className={styles.goalsList}>
          {meta.goals.map((goal, idx) => (
            <li key={idx} className={styles.goalItem}>
              <CheckCircle2 size={15} className={styles.checkIcon} aria-hidden="true" />
              <span>{goal}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
