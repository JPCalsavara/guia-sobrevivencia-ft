import React from 'react';
import { courseComparisonData } from '@/data/academic';
import { Scale } from 'lucide-react';
import styles from './TableBsiTads.module.scss';

export function TableBsiTads() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tableHeader}>
        <div className={styles.badge}>
          <Scale size={16} />
          <span>Análise Curricular Comparativa</span>
        </div>
        <h3 className={styles.title}>Quadro Comparativo Direto entre BSI e TADS</h3>
        <p className={styles.subtitle}>
          Entenda as diferenças práticas entre o Bacharelado e o Tecnólogo na rotina da Faculdade de Tecnologia
        </p>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.thCrit}>Critério de Avaliação</th>
              <th className={styles.thBsi}>BSI, Bacharelado em Sistemas de Informação</th>
              <th className={styles.thTads}>TADS, Tecnologia em Análise e Desenvolvimento</th>
            </tr>
          </thead>
          <tbody>
            {courseComparisonData.map((row, idx) => (
              <tr key={idx} className={styles.tr}>
                <td className={styles.tdCrit}>{row.criterion}</td>
                <td className={styles.tdBsi}>{row.bsi}</td>
                <td className={styles.tdTads}>{row.tads}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.callout}>
        <h4 className={styles.calloutTitle}>O Fenômeno da Batalha por Vagas Noturnas</h4>
        <p className={styles.calloutText}>
          A partir do quinto semestre letivo, a maioria dos estudantes de BSI ingressa em vagas de estágio diurno em empresas de Campinas, Limeira e região metropolitana de São Paulo. Como as aulas de BSI ocorrem de dia, esses estudantes passam a disputar as vagas das disciplinas equivalentes oferecidas no período noturno para TADS. Por esse motivo, manter um Coeficiente de Rendimento alto desde o primeiro semestre é decisivo para conseguir prioridade de matrícula no sistema e-DAC.
        </p>
      </div>
    </div>
  );
}
