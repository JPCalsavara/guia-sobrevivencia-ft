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
  Wifi,
  Home,
  Building,
  Key,
  Compass,
  Car,
  ShieldCheck,
  CheckCircle2,
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
      { id: 'org-empresa-junior', title: 'Empresa Júnior' },
      { id: 'org-ligas', title: 'Ligas Acadêmicas' },
      { id: 'org-extensao', title: 'Extensão e Ação Social' },
      { id: 'org-centro-academico', title: 'Centro Acadêmico' },
      { id: 'org-atletica', title: 'Atlética e Esportes' },
      { id: 'org-republica', title: 'Repúblicas e Moradia' },
    ],
  },
  {
    id: 'moradia-convivencia',
    title: 'Moradia e Habitação',
    subtopics: [
      { id: 'moradia-modalidades', title: 'Modalidades e Preços' },
      { id: 'moradia-predios', title: 'Prédios e Condomínios' },
      { id: 'moradia-bairros', title: 'Bairros e Avenidas' },
      { id: 'moradia-imobiliarias', title: 'Imobiliárias e Contratos' },
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
        <aside className={styles.sidebarAside}>
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

      {/* 1. Modalidades de Moradia e Comparativo de Preços */}
      <section id="moradia-modalidades" className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Home size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Modalidades de Moradia Estudantil e Faixas de Preço</h2>
              <p className={styles.cardSubtitle}>
                Comparativo completo entre república, pensionato, kitnet individual e apartamento compartilhado em Limeira
              </p>
            </div>
          </div>

          <div className={styles.housingGrid}>
            <div className={styles.housingCard}>
              <div className={styles.housingHeader}>
                <span className={`${styles.housingBadge} ${styles.republica}`}>República Estudantil</span>
                <h3 className={styles.housingTitle}>República Tradicional</h3>
              </div>

              <div className={styles.priceHighlight}>
                <span className={styles.priceVal}>R$ 450 a R$ 750</span>
                <span className={styles.priceNote}>por mês com contas inclusas</span>
              </div>

              <div className={styles.housingPoints}>
                <div className={styles.pointItem}>
                  <strong>Localização Típica</strong>
                  Jardim Nova Itália, Vila Cristovam, Jardim Morro Azul e proximidades do Morar Mais.
                </div>
                <div className={styles.pointItem}>
                  <strong>Vantagens</strong>
                  Menor custo mensal, forte integração social, rede de apoio acadêmico com veteranos e divisão de despesas domésticas.
                </div>
                <div className={styles.pointItem}>
                  <strong>Pontos de Atenção</strong>
                  Rotinas e horários variados entre os moradores, menor privacidade e necessidade de assembleias para regras da casa.
                </div>
              </div>
            </div>

            <div className={styles.housingCard}>
              <div className={styles.housingHeader}>
                <span className={`${styles.housingBadge} ${styles.pensionato}`}>Pensionato e Alojamento</span>
                <h3 className={styles.housingTitle}>Pensionato Universitário</h3>
              </div>

              <div className={styles.priceHighlight}>
                <span className={styles.priceVal}>R$ 400 a R$ 700</span>
                <span className={styles.priceNote}>por mês em quarto individual ou dividido</span>
              </div>

              <div className={styles.housingPoints}>
                <div className={styles.pointItem}>
                  <strong>Localização Típica</strong>
                  Forte concentração no Jardim Morro Azul, nas ruas atrás da Escola Municipal Aldo José Kuhl, com opções no Jardim Paulista e Jardim Nossa Senhora de Fátima.
                </div>
                <div className={styles.pointItem}>
                  <strong>Vantagens</strong>
                  Baixo custo mensal, mobília básica pronta para uso, ideal para quem quer economizar sem participar da rotina de eventos de república.
                </div>
                <div className={styles.pointItem}>
                  <strong>Pontos de Atenção</strong>
                  Você não escolhe com quem divide o quarto ou as áreas comuns, com regras mais rígidas de visitas e horários de silêncio.
                </div>
              </div>
            </div>

            <div className={styles.housingCard}>
              <div className={styles.housingHeader}>
                <span className={`${styles.housingBadge} ${styles.kitnet}`}>Kitnet ou Studio</span>
                <h3 className={styles.housingTitle}>Kitnet Individual</h3>
              </div>

              <div className={styles.priceHighlight}>
                <span className={styles.priceVal}>R$ 800 a R$ 2.000</span>
                <span className={styles.priceNote}>por mês conforme mobília e conservação</span>
              </div>

              <div className={styles.housingPoints}>
                <div className={styles.pointItem}>
                  <strong>Localização Típica</strong>
                  Quase todas concentradas no lado da FCA, nos bairros Jardim Cidade Universitária I e II e Chácara Antonieta.
                </div>
                <div className={styles.pointItem}>
                  <strong>Vantagens</strong>
                  Privacidade total, silêncio absoluto para dedicação aos estudos e liberdade completa de horários e rotina pessoal.
                </div>
                <div className={styles.pointItem}>
                  <strong>Pontos de Atenção</strong>
                  Custo total mais elevado, contas de consumo pagas integralmente à parte e necessidade de circular ou bicicleta para se deslocar até a FT.
                </div>
              </div>
            </div>

            <div className={styles.housingCard}>
              <div className={styles.housingHeader}>
                <span className={`${styles.housingBadge} ${styles.apartamento}`}>Apartamento em Grupo</span>
                <h3 className={styles.housingTitle}>Locação Compartilhada</h3>
              </div>

              <div className={styles.priceHighlight}>
                <span className={styles.priceVal}>R$ 500 a R$ 900</span>
                <span className={styles.priceNote}>por pessoa dividindo entre dois a quatro colegas</span>
              </div>

              <div className={styles.housingPoints}>
                <div className={styles.pointItem}>
                  <strong>Localização Típica</strong>
                  Condomínios como Morar Mais, Edifício Bahamas na José Paolillo e Residencial Azaleias na Ciro Scartezini.
                </div>
                <div className={styles.pointItem}>
                  <strong>Vantagens</strong>
                  Você escolhe quem mora junto, ambiente de estudos alinhado, infraestrutura de condomínio fechado com portaria e segurança.
                </div>
                <div className={styles.pointItem}>
                  <strong>Pontos de Atenção</strong>
                  Valor total do contrato de 1.500 a 2.500 reais mensais, exigência de fiador ou seguro fiança e responsabilidade contratual solidária.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Prédios e Condomínios Mapeados */}
      <section id="moradia-predios" className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Building size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Prédios e Condomínios Mapeados em Limeira</h2>
              <p className={styles.cardSubtitle}>
                Principais edifícios habitados por estudantes universitários com análise de logística e bandeco
              </p>
            </div>
          </div>

          <div className={styles.buildingsGrid}>
            <div className={styles.buildingCard}>
              <div className={styles.buildingHeader}>
                <span className={styles.buildingTag}>Condomínio Clube</span>
                <h3 className={styles.buildingTitle}>Condomínio Morar Mais Limeira</h3>
                <span className={styles.buildingAddress}>Próximo ao anel viário e rodovia</span>
              </div>

              <p className={styles.buildingText}>
                Grande condomínio fechado de prédios com apartamentos de dois e três dormitórios, muito procurado por grupos de amigos que dividem o aluguel entre duas a quatro pessoas.
              </p>

              <div className={styles.buildingMeta}>
                <div className={styles.metaRow}>
                  <strong>Valores:</strong> 1.500 a 2.500 reais de custo total mensal
                </div>
                <div className={styles.metaRow}>
                  <strong>Prós:</strong> Infraestrutura excelente com lazer completo, piscina, academia e portaria com segurança 24 horas.
                </div>
                <div className={styles.metaRow}>
                  <strong>Logística:</strong> Fica mais afastado do centro urbano; exige carro próprio, Uber compartilhado ou circular para ir às aulas na FT e para bandecar.
                </div>
              </div>
            </div>

            <div className={styles.buildingCard}>
              <div className={styles.buildingHeader}>
                <span className={styles.buildingTag}>Lado FCA e Bandeco</span>
                <h3 className={styles.buildingTitle}>Prédios da Rua José Paolillo</h3>
                <span className={styles.buildingAddress}>Edifício Bahamas e torres vizinhas</span>
              </div>

              <p className={styles.buildingText}>
                Diversos prédios residenciais de uma e duas torres com valores variados, situados no corredor de acesso direto ao campus da FCA.
              </p>

              <div className={styles.buildingMeta}>
                <div className={styles.metaRow}>
                  <strong>Valores:</strong> Médios e compatíveis com locação estudantil
                </div>
                <div className={styles.metaRow}>
                  <strong>Prós:</strong> Permite ir a pé para as refeições diárias no Restaurante Universitário da FCA, além de ponto de ônibus e circular bem próximo.
                </div>
                <div className={styles.metaRow}>
                  <strong>Logística:</strong> Excelente para quem prioriza alimentação econômica no bandeco e usa o circular gratuito para subir até o campus da FT.
                </div>
              </div>
            </div>

            <div className={styles.buildingCard}>
              <div className={styles.buildingHeader}>
                <span className={styles.buildingTag}>Colado na FT</span>
                <h3 className={styles.buildingTitle}>Residencial Azaleias</h3>
                <span className={styles.buildingAddress}>Rua Doutor Ciro Scartezini, Vila Cristovam</span>
              </div>

              <p className={styles.buildingText}>
                Prédio residencial localizado a poucos passos da portaria principal da Faculdade de Tecnologia, muito procurado para aluguel de quarto ou apartamento completo em conjunto.
              </p>

              <div className={styles.buildingMeta}>
                <div className={styles.metaRow}>
                  <strong>Valores:</strong> Quarto individual ou apartamento em grupo
                </div>
                <div className={styles.metaRow}>
                  <strong>Prós:</strong> Elimina custos com transporte e tempo de trânsito, permitindo ir a pé para salas de aula, laboratórios e biblioteca a qualquer momento.
                </div>
                <div className={styles.metaRow}>
                  <strong>Logística:</strong> Proximidade total com o campus da FT e com o bandeco local nos horários de funcionamento dos dias úteis.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Avenidas e Bairros de Convivência */}
      <section id="moradia-bairros" className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Compass size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Avenidas de Convivência e Bairros Universitários</h2>
              <p className={styles.cardSubtitle}>
                As duas principais artérias da vida estudantil e a divisão estratégica entre o Lado FT e o Lado FCA
              </p>
            </div>
          </div>

          <div className={styles.avenuesGrid}>
            <div className={styles.avenueCard}>
              <h3 className={styles.avenueTitle}>Avenida Cônego Manuel Alves</h3>
              <p className={styles.avenueDesc}>
                O principal eixo comercial e gastronômico que atende o dia a dia dos estudantes da FT, ligando os bairros residenciais à região central.
              </p>
              <ul className={styles.avenueList}>
                <li>Padarias, mercearias, lanchonetes e restaurantes por quilo acessíveis.</li>
                <li>Farmácias e serviços bancários rápidos para conveniência dos moradores.</li>
                <li>Rota segura e muito utilizada para caminhadas e deslocamento de bicicleta até a FT.</li>
              </ul>
            </div>

            <div className={styles.avenueCard}>
              <h3 className={styles.avenueTitle}>Avenida Fabrício Vampré</h3>
              <p className={styles.avenueDesc}>
                Grande artéria urbana de Limeira que concentra os maiores estabelecimentos comerciais, hipermercados e saídas rodoviárias.
              </p>
              <ul className={styles.avenueList}>
                <li>Grandes redes de supermercados, atacarejos, academias e agências bancárias.</li>
                <li>Conexão ágil para quem viaja nos fins de semana em direção a Campinas e São Paulo.</li>
                <li>Corredor com linhas de transporte coletivo e acesso fácil para o anel viário da cidade.</li>
              </ul>
            </div>
          </div>

          <div className={styles.neighborhoodsSplit}>
            <div className={styles.neighborhoodCard}>
              <h4>Bairros Lado FT: Jardim Nova Itália, Vila Cristovam, Vila Anita e Morro Azul</h4>
              <p>
                Bairros tranquilos, seguros e arborizados no entorno imediato da Faculdade de Tecnologia. Permitem caminhar até as aulas sem depender de ônibus. O Jardim Morro Azul se destaca pela concentração de pensionatos econômicos perto da Escola Municipal Aldo José Kuhl.
              </p>
            </div>

            <div className={styles.neighborhoodCard}>
              <h4>Bairros Lado FCA: Jardim Cidade Universitária I e II e Chácara Antonieta</h4>
              <p>
                Região moderna onde se concentram quase todas as kitnets novas e prédios estilo studio. Muito procurada por quem quer morar sozinho e valoriza a proximidade com o Restaurante Universitário da FCA, utilizando o circular gratuito para se deslocar até a FT.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Imobiliárias de Limeira, Contratos e Desapego */}
      <section id="moradia-imobiliarias" className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Key size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Imobiliárias Locais e Orientações para Locação</h2>
              <p className={styles.cardSubtitle}>
                Canais oficiais das imobiliárias mais procuradas por estudantes e recomendações para assinar contrato sem dor de cabeça
              </p>
            </div>
          </div>

          <div className={styles.realtorsGrid}>
            <div className={styles.realtorCard}>
              <div>
                <h3 className={styles.realtorName}>Imobiliária Roque</h3>
                <p className={styles.realtorDesc}>
                  Uma das mais tradicionais de Limeira, com ampla oferta de casas e apartamentos na Vila Cristovam, Jardim Nova Itália e Centro.
                </p>
              </div>
              <a
                href="https://www.imobiliariaroque.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.realtorActionBtn}
                aria-label="Acessar portal da Imobiliária Roque em nova janela"
              >
                <span>Portal Imobiliária Roque</span>
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            </div>

            <div className={styles.realtorCard}>
              <div>
                <h3 className={styles.realtorName}>Bom Jesus Imóveis</h3>
                <p className={styles.realtorDesc}>
                  Forte catálogo imobiliário no município de Limeira com opções residenciais variadas para estudantes universitários.
                </p>
              </div>
              <a
                href="https://www.bomjesusimoveis.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.realtorActionBtn}
                aria-label="Acessar portal da Bom Jesus Imóveis em nova janela"
              >
                <span>Portal Bom Jesus Imóveis</span>
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            </div>

            <div className={styles.realtorCard}>
              <div>
                <h3 className={styles.realtorName}>Imobiliária Della Nina</h3>
                <p className={styles.realtorDesc}>
                  Imóveis para locação bem situados nos principais eixos de transporte e acesso aos campi universitários.
                </p>
              </div>
              <a
                href="https://www.dellaninaimoveis.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.realtorActionBtn}
                aria-label="Acessar portal da Imobiliária Della Nina em nova janela"
              >
                <span>Portal Della Nina Imóveis</span>
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            </div>

            <div className={styles.realtorCard}>
              <div>
                <h3 className={styles.realtorName}>Imobiliária Boa Vista</h3>
                <p className={styles.realtorDesc}>
                  Imóveis residenciais com atendimento direcionado para locação de apartamentos, casas e kitnets na região.
                </p>
              </div>
              <a
                href="https://www.boavistaimoveis.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.realtorActionBtn}
                aria-label="Acessar portal da Imobiliária Boa Vista em nova janela"
              >
                <span>Portal Imobiliária Boa Vista</span>
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            </div>

            <div className={styles.realtorCard}>
              <div>
                <h3 className={styles.realtorName}>QuintoAndar Limeira</h3>
                <p className={styles.realtorDesc}>
                  Plataforma digital para alugar sem necessidade de fiador tradicional, com fotos detalhadas e contrato assinado online.
                </p>
              </div>
              <a
                href="https://www.quintoandar.com.br/alugar/imovel/limeira-sp-brasil"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.realtorActionBtn}
                aria-label="Acessar QuintoAndar Limeira em nova janela"
              >
                <span>Buscar no QuintoAndar</span>
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            </div>

            <div className={styles.realtorCard}>
              <div>
                <h3 className={styles.realtorName}>Zap Imóveis Limeira</h3>
                <p className={styles.realtorDesc}>
                  Portal agregador com filtros específicos por bairro, faixa de preço, número de dormitórios e proximidade da faculdade.
                </p>
              </div>
              <a
                href="https://www.zapimoveis.com.br/aluguel/imoveis/sp+limeira/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.realtorActionBtn}
                aria-label="Acessar Zap Imóveis Limeira em nova janela"
              >
                <span>Buscar no Zap Imóveis</span>
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className={styles.contractCallout}>
            <h4>Recomendações Práticas para Contratos de Locação e Mobília</h4>
            <p>
              Ao negociar com imobiliárias locais, pergunte se aceitam cartão de crédito ou seguro fiança caso sua família não possua fiador com imóvel quitado no estado de São Paulo. No dia da entrega das chaves, tire fotos nítidas e vídeos de todos os cômodos, tomadas, pintura e torneiras para anexar formalmente ao laudo de vistoria inicial. Para mobiliar o espaço sem gastar muito, participe dos grupos de desapego dos formandos da Unicamp no fim de cada semestre, onde eletrodomésticos, camas e mesas são repassados por valores simbólicos.
            </p>
          </div>
        </div>
      </section>
        </div>
      </div>
    </div>
  );
}
