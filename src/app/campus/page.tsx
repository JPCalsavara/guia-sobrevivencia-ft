'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { OrganizationDirectory } from '@/components/OrganizationDirectory/OrganizationDirectory';
import {
  MapPin,
  Building2,
  Utensils,
  Bus,
  Users2,
  ExternalLink,
  Monitor,
  Printer,
  Wifi
} from 'lucide-react';
import { DocSidebar, TopicItem } from '@/components/DocSidebar/DocSidebar';
import styles from './campus.module.scss';

const campusTopics: TopicItem[] = [
  {
    id: 'campus-galeria',
    title: 'Galeria do Campus',
    subtopics: [
      { id: 'campus-galeria', title: 'Biblioteca e Auditório' },
    ],
  },
  {
    id: 'ferramentas-ti',
    title: 'Ferramentas de TI e Acessos',
    subtopics: [
      { id: 'ferramentas-ti', title: 'Laboratórios da TIC' },
      { id: 'cota-impressao', title: 'Cota de Impressão e WifiPrint' },
    ],
  },
  {
    id: 'infraestrutura-salas',
    title: 'Infraestrutura e Salas',
    subtopics: [
      { id: 'infraestrutura-salas', title: 'Consulta de Ocupação' },
      { id: 'justificativas-salas', title: 'Justificativas de Espaço' },
    ],
  },
  {
    id: 'transporte-alimentacao',
    title: 'Alimentação e Transporte',
    subtopics: [
      { id: 'transporte-alimentacao', title: 'Restaurante Universitário' },
      { id: 'circular-fretado', title: 'Circular FT e FCA e Intercampi' },
    ],
  },
  {
    id: 'entidades-estudantis',
    title: 'Organizações Estudantis',
    subtopics: [
      { id: 'entidades-estudantis', title: 'Diretório de Entidades' },
    ],
  },
  {
    id: 'moradia-convivencia',
    title: 'Moradia e Vida Social',
    subtopics: [
      { id: 'moradia-convivencia', title: 'Repúblicas e Desapego' },
    ],
  },
];

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
            Vida no Campus de Limeira, Gestão de Salas e Organizações Estudantis
          </h1>

          <p className={styles.pageDescription}>
            Descubra como reservar espaços na FT, acesse as ferramentas de TI da faculdade, consulte as orientações do circular e do fretado intercampi e conheça todas as entidades ativas da comunidade universitária.
          </p>
        </motion.div>
      </section>

      {/* Conteúdo com Barra Lateral Esquerda */}
      <div className={styles.contentWithSidebar}>
        <aside>
          <DocSidebar topics={campusTopics} title="Campus e Vida" />
        </aside>

        <div className={styles.mainContentArea}>
          {/* Galeria de Fotos Institucionais do Campus */}
          <section id="campus-galeria" className={styles.campusGallerySection}>
        <div className={styles.galleryGrid}>
          <div className={styles.galleryCard}>
            <div className={styles.galleryImageWrapper}>
              <Image
                src="/images/biblioteca.png"
                alt="Biblioteca Setorial da Faculdade de Tecnologia da Unicamp"
                width={500}
                height={260}
                className={styles.galleryImage}
              />
            </div>
            <div className={styles.galleryMeta}>
              <span className={styles.galleryTag}>Estudo e Pesquisa</span>
              <h3 className={styles.galleryTitle}>Biblioteca Setorial da FT</h3>
              <p className={styles.galleryDesc}>
                Acervo especializado de tecnologia, cabines individuais silenciosas para estudo e salas de reunião para trabalhos acadêmicos em grupo.
              </p>
            </div>
          </div>

          <div className={styles.galleryCard}>
            <div className={styles.galleryImageWrapper}>
              <Image
                src="/images/campus-auditorio.jpg"
                alt="Auditório e eventos acadêmicos na FT Unicamp"
                width={500}
                height={260}
                className={styles.galleryImage}
              />
            </div>
            <div className={styles.galleryMeta}>
              <span className={styles.galleryTag}>Eventos e Comunidade</span>
              <h3 className={styles.galleryTitle}>Auditório e Espaços Coletivos</h3>
              <p className={styles.galleryDesc}>
                Ambiente de grandes conferências, recepção de calouros pela comissão discente, palestras técnicas com profissionais de mercado e defesas de graduação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ferramentas de TI e Acessos */}
      <section id="ferramentas-ti" className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Monitor size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Ferramentas de Tecnologia da Informação da FT</h2>
              <p className={styles.cardSubtitle}>
                Credenciais de acesso para computadores, laboratórios da TIC e serviços digitais da Unicamp
              </p>
            </div>
          </div>

          <div className={styles.roomsGrid}>
            <div className={styles.roomCard}>
              <h3 className={styles.roomCardTitle}>Acesso aos Laboratórios da TIC</h3>
              <p className={styles.roomCardText}>
                Para fazer login nos computadores físicos dos laboratórios de informática da FT, utilize o usuário do seu RA e a senha cadastrada especificamente na coordenadoria de informática da faculdade, distinta da senha central da DAC.
              </p>
              <a
                href="https://www.ft.unicamp.br/tic"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.roomLink}
              >
                <span>Portal da Coordenadoria de TIC</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div className={styles.roomCard}>
              <h3 className={styles.roomCardTitle}>Rede Sem Fio Eduroam</h3>
              <p className={styles.roomCardText}>
                A rede sem fio acadêmica mundial Eduroam está presente em todos os blocos da FT. O acesso é configurado com seu email institucional completo e a senha de sistemas centrais da Unicamp através do instalador oficial do CCUEC.
              </p>
              <a
                href="https://www.ccuec.unicamp.br/ccuec/servicos/eduroam"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.roomLink}
              >
                <span>Instalador Eduroam CCUEC</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div className={styles.roomCard}>
              <h3 className={styles.roomCardTitle}>Moodle e Intranet</h3>
              <p className={styles.roomCardText}>
                O ambiente virtual de aprendizagem Moodle e a Intranet FT utilizam autenticação centralizada Unicamp. Por meio deles, você envia tarefas de laboratório, acessa notas parciais e consulta comunicados dos docentes.
              </p>
              <a
                href="https://moodle.unicamp.br"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.roomLink}
              >
                <span>Acessar Moodle Unicamp</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cota de Impressão, WifiPrint e Laboratórios da DTIC */}
      <section id="cota-impressao" className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Printer size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Laboratórios de Ensino, Cota de Impressão e WifiPrint</h2>
              <p className={styles.cardSubtitle}>
                Como imprimir documentos pelo celular ou notebook, locais das impressoras e cota mensal da DTIC
              </p>
            </div>
          </div>

          <div className={styles.roomsGrid}>
            <div className={styles.roomCard}>
              <span className={styles.badgeNetwork}>Requer Rede Wi-Fi da FT</span>
              <h3 className={styles.roomCardTitle}>Como Funciona o WifiPrint</h3>
              <p className={styles.roomCardText}>
                O serviço WifiPrint permite enviar arquivos para impressão diretamente do seu aparelho conectado à rede sem fio local.
              </p>
              <ol className={styles.stepList}>
                <li><strong>Conexão:</strong> Conecte-se à rede sem fio Wifi_FT ou à rede Eduroam no campus da FT. Fora da rede o serviço não responde.</li>
                <li><strong>Acesso:</strong> Leia o QR Code afixado no totem ao lado das impressoras ou acesse o endereço oficial wifiprint.</li>
                <li><strong>Envio:</strong> Faça upload do arquivo em PDF ou texto e defina a quantidade de cópias.</li>
                <li><strong>Padrão:</strong> Todas as impressões são feitas exclusivamente em preto e branco.</li>
              </ol>
              <div className={styles.buttonRow}>
                <a
                  href="https://www.ft.unicamp.br/wifiprint"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.actionBtn}
                >
                  <Wifi size={14} />
                  <span>Acessar WifiPrint FT</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className={styles.roomCard}>
              <span className={styles.badgeQuota}>Renovação Mensal</span>
              <h3 className={styles.roomCardTitle}>Cota Mensal de Impressão</h3>
              <p className={styles.roomCardText}>
                Todo estudante regularmente matriculado na Faculdade de Tecnologia possui direito a uma cota de páginas mensais para trabalhos acadêmicos.
              </p>
              <ol className={styles.stepList}>
                <li><strong>Créditos Automáticos:</strong> Todo primeiro dia do mês a cota é creditada automaticamente.</li>
                <li><strong>Início do Ano Letivo:</strong> A cota é reiniciada para o quantitativo regulamentar estabelecido pela coordenação de informática.</li>
                <li><strong>Consulta de Saldo:</strong> O saldo de páginas restantes pode ser verificado em tempo real na Intranet FT.</li>
                <li><strong>Conta de Acesso:</strong> O login utiliza as credenciais cadastradas na informática da faculdade.</li>
              </ol>
              <div className={styles.buttonRow}>
                <a
                  href="https://sistemas.ft.unicamp.br/intranet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.actionBtn} ${styles.green}`}
                  aria-label="Consultar cota de impressão na Intranet em nova janela"
                >
                  <span>Consultar Cota na Intranet</span>
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
                <a
                  href="https://wordpress.ft.unicamp.br/informatica/cota-de-impressao/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.actionBtn}
                  aria-label="Acessar normas oficiais da cota de impressão em nova janela"
                >
                  <span>Normas da Cota</span>
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className={styles.roomCard}>
              <span className={styles.galleryTag}>DTIC e Espaços</span>
              <h3 className={styles.roomCardTitle}>Locais e Portal da Informática</h3>
              <p className={styles.roomCardText}>
                As impressoras estão alocadas nos laboratórios de ensino da FT, identificados como LP01, LP02, LP03, LP09 e LP10.
              </p>
              <ol className={styles.stepList}>
                <li><strong>Laboratórios:</strong> Ambientes de informática equipados para aulas práticas e estudo livre nos intervalos.</li>
                <li><strong>Agendamento de Salas:</strong> O portal da DTIC disponibiliza informações sobre ocupação de salas de aula e anfiteatros.</li>
                <li><strong>Fretado e Suporte:</strong> Orientações sobre o fretado intercampi, troca de senhas e instalação de programas.</li>
              </ol>
              <div className={styles.buttonRow}>
                <a
                  href="https://wordpress.ft.unicamp.br/informatica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.actionBtn}
                >
                  <span>Portal DTIC Informática</span>
                  <ExternalLink size={12} />
                </a>
                <a
                  href="https://sistemas.ft.unicamp.br/salas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.actionBtn}
                >
                  <span>Alocação de Salas</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infraestrutura e Salas na FT */}
      <section id="infraestrutura-salas" className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Building2 size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Infraestrutura Física e Alocação de Salas na FT</h2>
              <p className={styles.cardSubtitle}>
                Como consultar horários vagos, regras de ocupação e procedimentos para solicitar espaços
              </p>
            </div>
          </div>

          <div className={styles.roomsGrid}>
            <div className={styles.roomCard}>
              <h3 className={styles.roomCardTitle}>Consulta em Tempo Real</h3>
              <p className={styles.roomCardText}>
                O quadro de ocupação dos blocos de salas e anfiteatros pode ser verificado no portal sistemas ft unicamp br salas. Caso uma sala esteja livre na grade, ela pode ser ocupada espontaneamente por grupos de estudantes para estudo silencioso.
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
              <h3 className={styles.roomCardTitle}>Reserva Formal de Espaço</h3>
              <p className={styles.roomCardText}>
                Para eventos, palestras ou reuniões recorrentes de projetos, a solicitação deve ser encaminhada via entidade estudantil reconhecida ou com apoio formal de um docente responsável da faculdade.
              </p>
            </div>

            <div className={styles.roomCard}>
              <h3 className={styles.roomCardTitle}>Regras de Convivência</h3>
              <p className={styles.roomCardText}>
                Ao desocupar qualquer sala de aula, lembre-se de apagar a lousa, organizar as carteiras na posição original e desligar a iluminação e os aparelhos de ar-condicionado.
              </p>
            </div>
          </div>

          {/* Justificativas para Salas Maiores */}
          <div id="justificativas-salas" className={styles.justificationArea}>
            <h3 className={styles.justTitle}>
              Como Justificar uma Sala Maior para Poucas Pessoas perante a Administração
            </h3>
            <p className={styles.justSubtitle}>
              Pedidos baseados apenas no número de presentes costumam ser alocados em salas pequenas. Utilize justificativas técnicas aceitas pela Seção de Apoio Didático e Logístico da FT:
            </p>

            <div className={styles.justGrid}>
              <div className={styles.justItem}>
                <span className={styles.justNumber}>1</span>
                <div>
                  <h4 className={styles.justItemTitle}>Necessidade de Tomadas e Bancadas Individuais</h4>
                  <p className={styles.justItemText}>
                    Informe que a atividade exige conexão elétrica simultânea para os computadores portáteis de todos os participantes, recurso disponível apenas em salas com bancadas de extensão e laboratórios de informática da TIC.
                  </p>
                </div>
              </div>

              <div className={styles.justItem}>
                <span className={styles.justNumber}>2</span>
                <div>
                  <h4 className={styles.justItemTitle}>Gravação ou Transmissão Híbrida</h4>
                  <p className={styles.justItemText}>
                    Justifique a necessidade de isolamento acústico e espaço físico para posicionar câmeras, tripés e iluminação sem bloquear a circulação, permitindo a transmissão ao vivo da atividade.
                  </p>
                </div>
              </div>

              <div className={styles.justItem}>
                <span className={styles.justNumber}>3</span>
                <div>
                  <h4 className={styles.justItemTitle}>Dinâmica em Subgrupos e Layout Modular</h4>
                  <p className={styles.justItemText}>
                    Explique que a sessão é uma oficina prática ou dinâmica de projeto que requer a separação dos participantes em estações fisicamente distantes para evitar interferência sonora mútua.
                  </p>
                </div>
              </div>

              <div className={styles.justItem}>
                <span className={styles.justNumber}>4</span>
                <div>
                  <h4 className={styles.justItemTitle}>Fluxo Rotativo e Quórum Flutuante</h4>
                  <p className={styles.justItemText}>
                    Caracterize a atividade como um plantão aberto de atendimento ou oficina livre. Embora poucas pessoas estejam presentes em um dado instante, o público acumulado ao longo das horas é muito maior.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bandejão e Transporte */}
      <section id="transporte-alimentacao" className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Utensils size={22} className={styles.headerIcon} aria-hidden="true" />
            <div>
              <h2 className={styles.cardTitle}>Alimentação e Transporte Universitário em Limeira</h2>
              <p className={styles.cardSubtitle}>
                Diretrizes sobre alimentação universitária, transporte circular gratuito e fretado intercampi
              </p>
            </div>
          </div>

          <div className={styles.transportGrid}>
            <div className={styles.transportCard}>
              <div className={styles.transportHeader}>
                <Utensils size={18} aria-hidden="true" />
                <h3 className={styles.transportTitle}>Restaurante Universitário na FT</h3>
              </div>
              <p className={styles.transportDesc}>
                Fornece refeições balanceadas de almoço e jantar nos dias letivos para a comunidade acadêmica da FT, com atendimento centralizado no restaurante da FCA nos fins de semana e feriados. Os horários vigentes de cada turno e os valores atualizados devem ser consultados diretamente no portal da prefeitura universitária.
              </p>
              <a
                href="https://sistemas.prefeituralimeira.unicamp.br/RU/view/site/cardapio.php"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.transportLink}
                aria-label="Consultar cardápio online do restaurante universitário em nova janela"
              >
                <span>Consultar Cardápio Online</span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>

            <div id="circular-fretado" className={styles.transportCard}>
              <div className={styles.transportHeader}>
                <Bus size={18} aria-hidden="true" />
                <h3 className={styles.transportTitle}>Circular Gratuito FT e FCA</h3>
              </div>
              <p className={styles.transportDesc}>
                Transporte circular gratuito mantido pela Prefeitura Universitária e pela Unicamp, realizando a ligação contínua entre os campi de Limeira. A grade horária e as paradas oficiais sofrem adequações periódicas e devem ser acompanhadas na página oficial de transportes.
              </p>
              <a
                href="https://prefeituralimeira.unicamp.br/produto/horarios-circular/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.transportLink}
                aria-label="Acessar página oficial de horários e itinerários do circular em nova janela"
              >
                <span>Página Oficial do Circular</span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>

            <div className={styles.transportCard}>
              <div className={styles.transportHeader}>
                <Bus size={18} aria-hidden="true" />
                <h3 className={styles.transportTitle}>Fretado Intercampi Linha 84</h3>
              </div>
              <p className={styles.transportDesc}>
                Conexão gratuita de fretado entre os campi de Limeira e o campus de Barão Geraldo em Campinas. Exige agendamento prévio de assento no sistema de transporte da prefeitura universitária.
              </p>
              <a
                href="https://sistemas.prefeituralimeira.unicamp.br/intercamp/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.transportLink}
                aria-label="Reservar assento no Intercamp Linha 84 em nova janela"
              >
                <span>Reservar Assento no Intercamp</span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Diretório de Organizações */}
      <section id="entidades-estudantis" className={styles.sectionBlock}>
        <div className={styles.sectionIntro}>
          <div className={styles.introHeader}>
            <Users2 size={24} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Diretório de Entidades e Organizações Estudantis</h2>
              <p className={styles.cardSubtitle}>
                Conheça as empresas juniores, centro acadêmico, atlética, ligas e projetos de extensão
              </p>
            </div>
          </div>
        </div>
        <OrganizationDirectory />
      </section>

      {/* Vida Social, Moradia e Economia Estudantil */}
      <section id="moradia-convivencia" className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <h2 className={styles.cardTitle}>Convivência, Moradia e Economia Estudantil</h2>
          <p className={styles.cardSubtitle}>
            Dicas para morar com tranquilidade, feiras de escambo e segurança em Limeira
          </p>

          <div className={styles.lifeGrid}>
            <div className={styles.lifeCard}>
              <h3 className={styles.lifeTitle}>Moradia e Repúblicas</h3>
              <p className={styles.lifeText}>
                Os bairros mais próximos da FT são o Jardim Nova Itália, a Vila Cristovam e a Vila Anita. A comunidade conta com repúblicas tradicionais de integração e também repúblicas com foco em silêncio e estudos, além de pensionatos e kitnets individuais.
              </p>
            </div>

            <div className={styles.lifeCard}>
              <h3 className={styles.lifeTitle}>Grupos de Escambo e Desapego</h3>
              <p className={styles.lifeText}>
                No encerramento de cada semestre letivo, formandos negociam móveis, colchões, eletrodomésticos e livros com grandes descontos nos grupos de desapego estudantis. Sempre confira o email acadêmico do anunciante e faça testes presenciais antes de realizar pagamentos.
              </p>
            </div>

            <div className={styles.lifeCard}>
              <h3 className={styles.lifeTitle}>Caronas Solidárias</h3>
              <p className={styles.lifeText}>
                Estudantes organizam grupos de carona para viagens de fim de semana entre Limeira, Campinas e São Paulo, com rateio proporcional de combustível e pedágio, proporcionando economia e segurança no deslocamento.
              </p>
            </div>
          </div>
        </div>
      </section>
        </div>
      </div>
    </div>
  );
}
