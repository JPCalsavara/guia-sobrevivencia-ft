import React from 'react';
import { courseComparisonData } from '@/data/academic';
import { Scale, Check } from 'lucide-react';
import styles from './TableBsiTads.module.scss';

export function TableBsiTads() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tableHeader}>
        <div className={styles.badge}>
          <Scale size={16} />
          <span>Analise Curricular Comparativa</span>
        </div>
        <h3 className={styles.title}>Quadro Comparativo Direto entre BSI e TADS</h3>
        <p className={styles.subtitle}>
          Entenda as diferencas praticas entre o Bacharelado e o Tecnologo na rotina da Faculdade de Tecnologia
        </p>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.thCrit}>Criterio de Avaliacao</th>
              <th className={styles.thBsi}>BSI, Bacharelado em Sistemas de Informacao</th>
              <th className={styles.thTads}>TADS, Tecnologia em Analise e Desenvolvimento</th>
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
        <h4 className={styles.calloutTitle}>O Fenomeno da Batalha por Vagas Noturnas</h4>
        <p className={styles.calloutText}>
          A partir do quinto semestre letivo, a maioria dos estudantes de BSI ingressa em vagas de estagio diurno em empresas de Campinas, Limeira e regiao metropolitana de Sao Paulo. Como as aulas de BSI ocorrem de dia, esses estudantes passam a disputar as vagas das disciplinas equivalentes oferecidas no periodo noturno para TADS. Por esse motivo, manter um Coeficiente de Rendimento alto desde o primeiro semestre e decisivo para conseguir prioridade de matricula no sistema e-DAC.
        </p>
      </div>
    </div>
  );
}
