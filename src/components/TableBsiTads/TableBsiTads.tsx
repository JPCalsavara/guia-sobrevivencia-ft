import React from 'react';
import { courseComparisonData } from '@/data/academic';
import { Scale, ExternalLink } from 'lucide-react';
import styles from './TableBsiTads.module.scss';

export function TableBsiTads() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tableHeader}>
        <div className={styles.badge}>
          <Scale size={16} aria-hidden="true" />
          <span>Análise Curricular Comparativa</span>
        </div>
        <h2 className={styles.title}>Quadro Comparativo Direto entre BSI e TADS</h2>
        <p className={styles.subtitle}>
          Entenda as diferenças práticas entre o Bacharelado e o Tecnólogo na rotina da Faculdade de Tecnologia
        </p>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <caption style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>
            Quadro comparativo entre os cursos de Bacharelado em Sistemas de Informação e Tecnologia em Análise e Desenvolvimento de Sistemas
          </caption>
          <thead>
            <tr>
              <th scope="col" className={styles.thCrit}>Critério de Avaliação</th>
              <th scope="col" className={styles.thBsi}>
                <div className={styles.courseHeader}>
                  <span className={styles.courseTitle}>BSI, Bacharelado em Sistemas de Informação</span>
                  <a
                    href="https://www3.ft.unicamp.br/pt-br/graduacao/cursos/bsi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.courseLink}
                    title="Página oficial do curso de BSI no site da FT"
                  >
                    <span>Página Oficial na FT</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </div>
              </th>
              <th scope="col" className={styles.thTads}>
                <div className={styles.courseHeader}>
                  <span className={styles.courseTitle}>TADS, Tecnologia em Análise e Desenvolvimento</span>
                  <a
                    href="https://www3.ft.unicamp.br/pt-br/graduacao/cursos/tads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.courseLink}
                    title="Página oficial do curso de TADS no site da FT"
                  >
                    <span>Página Oficial na FT</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {courseComparisonData.map((row, idx) => (
              <tr key={idx} className={styles.tr}>
                <th scope="row" className={styles.tdCrit}>{row.criterion}</th>
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
