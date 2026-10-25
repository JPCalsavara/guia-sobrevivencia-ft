import React from 'react';
import { Users } from 'lucide-react';
import { TableBsiTads } from '@/components/TableBsiTads/TableBsiTads';
import { InfoCard } from '@/components/InfoCard/InfoCard';
import styles from './BsiTadsModule.module.scss';

type BsiTadsVariant = 'ingressantes' | 'academico';

interface BsiTadsModuleProps {
  variant?: BsiTadsVariant;
}

const contextByVariant: Record<BsiTadsVariant, { title: string; body: string; detail: string }> = {
  ingressantes: {
    title: 'Para quem ainda vai escolher o curso',
    body: 'Este modulo compara Sistemas de Informacao e Tecnologia em Analise e Desenvolvimento de Sistemas para vestibulandos e futuros ingressantes decidirem com seguranca antes da matricula.',
    detail: 'Leia o quadro abaixo para entender diferencas de grade, periodo de aulas e rotina de estudos. Em caso de duvida sobre o ingresso, comece pela trilha do calouro apos escolher o curso.',
  },
  academico: {
    title: 'Publico alvo deste comparativo',
    body: 'Este modulo reune o comparativo entre Sistemas de Informacao e TADS para vestibulandos, calouros e alunos de TADS entenderem na pratica as diferencas dos dois cursos da Faculdade de Tecnologia.',
    detail: 'O quadro abaixo detalha criterios de grade, periodo e disputa por vagas noturnas. Use estas informacoes para planejar matricula e conciliar estudos com estagio ao longo do curso.',
  },
};

export function BsiTadsModule({ variant = 'academico' }: BsiTadsModuleProps) {
  const context = contextByVariant[variant];

  return (
    <div className={styles.module}>
      <div className={styles.header}>
        <span className={styles.badge}>
          <Users size={14} aria-hidden="true" />
          <span>Publico Alvo</span>
        </span>
        <h2 className={styles.title}>Sistemas de Informacao ou TADS na Faculdade de Tecnologia</h2>
      </div>

      <InfoCard
        title={context.title}
        body={context.body}
        headingLevel="h3"
        icon={<Users size={20} aria-hidden="true" />}
        detail={context.detail}
        detailLabel="Ver orientacao de publico alvo"
      />

      <TableBsiTads />
    </div>
  );
}
