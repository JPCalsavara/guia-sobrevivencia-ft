'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { OrganizationDirectory } from '@/components/OrganizationDirectory/OrganizationDirectory';
import {
  MapPin,
  Building2,
  Utensils,
  Bus,
  Users2,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import styles from './campus.module.scss';

export default function CampusPage() {
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
            <MapPin size={16} />
            <span>Campus, Infraestrutura e Comunidade</span>
          </div>

          <h1 className={styles.pageTitle}>
            Vida no Campus de Limeira, Gestao de Salas e Organizacoes Estudantis
          </h1>

          <p className={styles.pageDescription}>
            Descubra como reservar espacos na FT, consulte os horarios do circular e do fretado intercampi e conheca todas as entidades ativas da comunidade universitaria.
          </p>
        </motion.div>
      </section>

      {/* Infraestrutura e Salas na FT */}
      <section className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Building2 size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Infraestrutura Fisica e Alocacao de Salas na FT</h2>
              <p className={styles.cardSubtitle}>
                Como consultar horarios vagos, regras de ocupacao e procedimentos para solicitar espacos
              </p>
            </div>
          </div>

          <div className={styles.roomsGrid}>
            <div className={styles.roomCard}>
              <h3 className={styles.roomCardTitle}>Consulta em Tempo Real</h3>
              <p className={styles.roomCardText}>
                O quadro de ocupacao dos blocos de salas e anfiteatros pode ser verificado no portal sistemas ft unicamp br salas. Caso uma sala esteja livre na grade, ela pode ser ocupada espontaneamente por grupos de estudantes para estudo silencioso.
              </p>
              <a
                href="https://sistemas.ft.unicamp.br/salas"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.roomLink}
              >
                <span>Acessar Quadro de Salas</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div className={styles.roomCard}>
              <h3 className={styles.roomCardTitle}>Reserva Formal de Espaco</h3>
              <p className={styles.roomCardText}>
                Para eventos, palestras ou reunioes recorrentes de projetos, a solicitacao deve ser encaminhada via entidade estudantil reconhecida ou com apoio formal de um docente responsavel da faculdade.
              </p>
            </div>

            <div className={styles.roomCard}>
              <h3 className={styles.roomCardTitle}>Regras de Convivencia</h3>
              <p className={styles.roomCardText}>
                Ao desocupar qualquer sala de aula, lembre-se de apagar a lousa, organizar as carteiras na posicao original e desligar a iluminacao e os aparelhos de ar-condicionado.
              </p>
            </div>
          </div>

          {/* Justificativas para Salas Maiores */}
          <div className={styles.justificationArea}>
            <h3 className={styles.justTitle}>
              Como Justificar uma Sala Maior para Poucas Pessoas perante a Administracao
            </h3>
            <p className={styles.justSubtitle}>
              Pedidos baseados apenas no numero de presentes costumam ser alocados em salas pequenas. Utilize justificativas tecnicas aceitas pela Seção de Apoio Didatico e Logistico da FT:
            </p>

            <div className={styles.justGrid}>
              <div className={styles.justItem}>
                <span className={styles.justNumber}>1</span>
                <div>
                  <h4 className={styles.justItemTitle}>Necessidade de Tomadas e Bancadas Individuais</h4>
                  <p className={styles.justItemText}>
                    Informe que a atividade exige conexao eletrica simultanea para os computadores portateis de todos os participantes, recurso disponivel apenas em salas com bancadas de extensao e laboratorios de informatica da TIC.
                  </p>
                </div>
              </div>

              <div className={styles.justItem}>
                <span className={styles.justNumber}>2</span>
                <div>
                  <h4 className={styles.justItemTitle}>Gravacao ou Transmissao Hibrida</h4>
                  <p className={styles.justItemText}>
                    Justifique a necessidade de isolamento acustico e espaco fisico para posicionar cameras, tripés e iluminacao sem bloquear a circulacao, permitindo a transmissao ao vivo da atividade.
                  </p>
                </div>
              </div>

              <div className={styles.justItem}>
                <span className={styles.justNumber}>3</span>
                <div>
                  <h4 className={styles.justItemTitle}>Dinamica em Subgrupos e Layout Modular</h4>
                  <p className={styles.justItemText}>
                    Explique que a sessao e uma oficina pratica ou dinâmica de projeto que requer a separacao dos participantes em estacoes fisicamente distantes para evitar interferencia sonora mútua.
                  </p>
                </div>
              </div>

              <div className={styles.justItem}>
                <span className={styles.justNumber}>4</span>
                <div>
                  <h4 className={styles.justItemTitle}>Fluxo Rotativo e Quorum Flutuante</h4>
                  <p className={styles.justItemText}>
                    Caracterize a atividade como um plantao aberto de atendimento ou oficina livre. Embora poucas pessoas estejam presentes em um dado instante, o publico acumulado ao longo das horas e muito maior.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bandejao e Transporte */}
      <section className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Utensils size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Alimentacao e Transporte Universitario em Limeira</h2>
              <p className={styles.cardSubtitle}>
                Horarios do restaurante universitario, circular gratuito e fretado intercampi
              </p>
            </div>
          </div>

          <div className={styles.transportGrid}>
            <div className={styles.transportCard}>
              <div className={styles.transportHeader}>
                <Utensils size={18} />
                <h3 className={styles.transportTitle}>Restaurante Universitario na FT</h3>
              </div>
              <p className={styles.transportDesc}>
                Almoco servido das onze as catorze horas e jantar das dezessete e trinta as dezenove e quarenta e cinco, de segunda a sexta-feira. Aos fins de semana, o atendimento e centralizado no restaurante da FCA no Campus 2.
              </p>
              <a
                href="https://sistemas.prefeituralimeira.unicamp.br/RU/view/site/cardapio.php"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.transportLink}
              >
                <span>Consultar Cardapio Online</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div className={styles.transportCard}>
              <div className={styles.transportHeader}>
                <Bus size={18} />
                <h3 className={styles.transportTitle}>Circular Gratuito FT e FCA</h3>
              </div>
              <p className={styles.transportDesc}>
                Transporte circular gratuito mantido pela Prefeitura de Limeira e Unicamp, conectando o Campus 1 na FT e o Campus 2 na FCA de forma continua, operando das seis e quarenta ate as vinte e duas e quarenta e cinco.
              </p>
              <a
                href="https://prefeituralimeira.unicamp.br/produto/horarios-circular/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.transportLink}
              >
                <span>Tabela de Horarios do Circular</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div className={styles.transportCard}>
              <div className={styles.transportHeader}>
                <Bus size={18} />
                <h3 className={styles.transportTitle}>Fretado Intercampi Linha 84</h3>
              </div>
              <p className={styles.transportDesc}>
                Conexao gratuita de fretado entre os campi de Limeira e o campus de Barao Geraldo em Campinas. Exige agendamento previo de assento no sistema de transporte da prefeitura universitaria.
              </p>
              <a
                href="https://sistemas.prefeituralimeira.unicamp.br/intercamp/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.transportLink}
              >
                <span>Reservar Assento no Intercamp</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Diretorio de Organizacoes */}
      <section className={styles.sectionBlock}>
        <div className={styles.sectionIntro}>
          <div className={styles.introHeader}>
            <Users2 size={24} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Diretorio de Entidades e Organizacoes Estudantis</h2>
              <p className={styles.cardSubtitle}>
                Conheca as empresas juniores, centro academico, atletica, ligas e projetos de extensao
              </p>
            </div>
          </div>
        </div>
        <OrganizationDirectory />
      </section>

      {/* Vida Social, Moradia e Economia Estudantil */}
      <section className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <h2 className={styles.cardTitle}>Convivencia, Moradia e Economia Estudantil</h2>
          <p className={styles.cardSubtitle}>
            Dicas para morar com tranquilidade, feiras de escambo e seguranca em Limeira
          </p>

          <div className={styles.lifeGrid}>
            <div className={styles.lifeCard}>
              <h3 className={styles.lifeTitle}>Moradia e Republicas</h3>
              <p className={styles.lifeText}>
                Os bairros mais proximos da FT sao o Jardim Nova Italia, a Vila Cristovam e a Vila Anita. A comunidade conta com republicas tradicionais de integracao e tambem republicas unigênero com foco em silencio e estudos, alem de pensionatos e kitnets individuais.
              </p>
            </div>

            <div className={styles.lifeCard}>
              <h3 className={styles.lifeTitle}>Grupos de Escambo e Desapego</h3>
              <p className={styles.lifeText}>
                No encerramento de cada semestre letivo, formandos negociam moveis, colchões, eletrodomesticos e livros com grandes descontos nos grupos de desapego estudantis. Sempre confira o email academico do anunciante e faca testes presenciais antes de realizar pagamentos.
              </p>
            </div>

            <div className={styles.lifeCard}>
              <h3 className={styles.lifeTitle}>Caronas Solidarias</h3>
              <p className={styles.lifeText}>
                Estudantes organizam grupos de carona para viagens de fim de semana entre Limeira, Campinas e Sao Paulo, com rateio proporcional de combustivel e pedagio, proporcionando economia e seguranca no deslocamento.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
