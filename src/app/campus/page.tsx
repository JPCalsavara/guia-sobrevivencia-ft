'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { OrganizationDirectory } from '@/components/OrganizationDirectory/OrganizationDirectory';
import { MapMoradia } from '@/components/MapMoradia/MapMoradia';
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
  AlertCircle,
  DollarSign,
  Check,
  Sparkles,
  PartyPopper,
  BookOpen,
  Repeat,
  FileText,
  Instagram,
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
    id: 'biblioteca-sbu-ft',
    title: 'Biblioteca FT e SBU',
    subtopics: [
      { id: 'biblioteca-sbu-ft', title: 'Apresentação e Acervo' },
      { id: 'biblioteca-emprestimo-malote', title: 'Empréstimo e Malote Intercampi' },
      { id: 'biblioteca-estudo-espacos', title: 'Salas de Estudo e Cabines' },
      { id: 'biblioteca-bases-tcc', title: 'Bases Digitais e Ficha TCC' },
      { id: 'biblioteca-redes-contato', title: 'Instagram Oficial e Canais' },
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
    id: 'vida-festas',
    title: 'Vida Noturna e Festas',
    subtopics: [
      { id: 'vida-festas', title: 'Rolê Limeira e Locais' },
    ],
  },
  {
    id: 'moradia-convivencia',
    title: 'Moradia e Habitação',
    subtopics: [
      { id: 'moradia-mapa', title: 'Mapa da Região Universitária' },
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
            Guia prático de reservas de salas, serviços de TI, alimentação, transporte intercampi, entidades estudantis e moradia universitária em Limeira.
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

      {/* Biblioteca FT e Sistema de Bibliotecas da Unicamp SBU */}
      <section id="biblioteca-sbu-ft" className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <BookOpen size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Biblioteca Setorial da FT e Sistema SBU Unicamp</h2>
              <p className={styles.cardSubtitle}>
                Biblioteca Prof. Dr. René Marie Joseph Dreifuss no CTL Limeira, integrada à rede de 29 bibliotecas da Unicamp
              </p>
            </div>
          </div>

          <p className={styles.libraryIntroText}>
            A Biblioteca Setorial da FT atende prioritariamente aos cursos de graduação e pós-graduação da Faculdade de Tecnologia e integra o Sistema de Bibliotecas da Unicamp, coordenado pela Coordenadoria do SBU. O estudante possui acesso tanto ao acervo local quanto aos materiais de todos os campi da universidade por meio de logística integrada e empréstimo unificado.
          </p>

          <div className={styles.libraryGrid}>
            <div id="biblioteca-emprestimo-malote" className={styles.libraryCard}>
              <div className={styles.libraryCardHeader}>
                <div className={`${styles.libraryIconWrapper} ${styles.blue}`}>
                  <Repeat size={20} aria-hidden="true" />
                </div>
                <span className={`${styles.libraryBadge} ${styles.blue}`}>Circulação e Malote</span>
              </div>
              <h3 className={styles.libraryCardTitle}>Empréstimo Unificado e Malote Intercampi</h3>
              <p className={styles.libraryCardDesc}>
                Com seu RA e senha de biblioteca cadastrados no primeiro acesso, você retira livros físicos em qualquer uma das 29 bibliotecas da Unicamp. Caso a obra de que necessita esteja apenas em Barão Geraldo ou em Piracicaba, você pode solicitar via malote intercampi pelo sistema online e o exemplar chega diretamente ao balcão de atendimento da FT em Limeira. As devoluções também podem ser feitas em qualquer unidade da rede.
              </p>
            </div>

            <div id="biblioteca-estudo-espacos" className={styles.libraryCard}>
              <div className={styles.libraryCardHeader}>
                <div className={`${styles.libraryIconWrapper} ${styles.green}`}>
                  <Building2 size={20} aria-hidden="true" />
                </div>
                <span className={`${styles.libraryBadge} ${styles.green}`}>Ambientes</span>
              </div>
              <h3 className={styles.libraryCardTitle}>Espaços de Estudo Individual e Coletivo</h3>
              <p className={styles.libraryCardDesc}>
                A unidade oferece cabines individuais silenciosas para concentração, mesas amplas com tomadas acessíveis para notebooks, salas fechadas para reuniões e elaboração de trabalhos acadêmicos em grupo, além de computadores integrados à rede universitária para pesquisa de acervo e consultas rápidas.
              </p>
            </div>

            <div id="biblioteca-bases-tcc" className={styles.libraryCard}>
              <div className={styles.libraryCardHeader}>
                <div className={`${styles.libraryIconWrapper} ${styles.purple}`}>
                  <FileText size={20} aria-hidden="true" />
                </div>
                <span className={`${styles.libraryBadge} ${styles.purple}`}>Pesquisa e TCC</span>
              </div>
              <h3 className={styles.libraryCardTitle}>Bases Digitais, VPN e Ficha Catalográfica</h3>
              <p className={styles.libraryCardDesc}>
                Acesso aos periódicos da Capes, IEEE Xplore, ScienceDirect e e-books especializados no campus ou remotamente via VPN do CCUEC. Para concluintes, a equipe bibliotecária fornece orientação de normalização ABNT, geração automatizada de ficha catalográfica no padrão SBU e procedimentos de depósito legal no Repositório da Produção Científica e Intelectual da Unicamp.
              </p>
            </div>

            <div id="biblioteca-redes-contato" className={styles.libraryCard}>
              <div className={styles.libraryCardHeader}>
                <div className={`${styles.libraryIconWrapper} ${styles.amber}`}>
                  <Instagram size={20} aria-hidden="true" />
                </div>
                <span className={`${styles.libraryBadge} ${styles.amber}`}>Comunicação</span>
              </div>
              <h3 className={styles.libraryCardTitle}>Canal Oficial no Instagram e Atendimento</h3>
              <p className={styles.libraryCardDesc}>
                O perfil oficial @bibliotecaftctl é o canal mais ágil para acompanhar avisos de horários especiais em períodos de provas ou recessos acadêmicos, chegada de novos títulos para computação e engenharias, ofertas de treinamentos para levantamento bibliográfico e programações culturais do campus.
              </p>
            </div>
          </div>

          <div className={styles.libraryActionCardsGrid}>
            <div className={styles.libraryActionCard}>
              <div>
                <span className={styles.libraryActionBadge}>Portal Setorial</span>
                <h4 className={styles.libraryActionTitle}>Portal Oficial da Biblioteca da FT</h4>
                <p className={styles.libraryActionDesc}>
                  Consulte os serviços locais no campus CTL de Limeira, comissões, canais de contato e formulários de atendimento.
                </p>
              </div>
              <a
                href="https://www3.ft.unicamp.br/pt-br/biblioteca"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.libraryActionBtn}
                aria-label="Acessar portal da biblioteca da Faculdade de Tecnologia em nova janela"
              >
                <span>Acessar Portal da FT</span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>

            <div className={styles.libraryActionCard}>
              <div>
                <span className={styles.libraryActionBadge}>Rede Unicamp</span>
                <h4 className={styles.libraryActionTitle}>Sistema de Bibliotecas SBU</h4>
                <p className={styles.libraryActionDesc}>
                  Pesquise no catálogo Acervus, renove seus empréstimos ativos e solicite reservas e materiais via malote entre campi.
                </p>
              </div>
              <a
                href="https://www.sbu.unicamp.br/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.libraryActionBtn}
                aria-label="Acessar portal central do SBU Unicamp em nova janela"
              >
                <span>Acessar Portal do SBU</span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>

            <div className={styles.libraryActionCard}>
              <div>
                <span className={styles.libraryActionBadge}>Redes Sociais</span>
                <h4 className={styles.libraryActionTitle}>Instagram Oficial @bibliotecaftctl</h4>
                <p className={styles.libraryActionDesc}>
                  Avisos dinâmicos de funcionamento, eventos, novos livros físicos e digitais e avisos para a comunidade de Limeira.
                </p>
              </div>
              <a
                href="https://www.instagram.com/bibliotecaftctl/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.libraryActionBtn}
                aria-label="Acessar perfil da biblioteca da FT no Instagram em nova janela"
              >
                <Instagram size={14} aria-hidden="true" />
                <span>Ver @bibliotecaftctl</span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>
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
                Login nos computadores físicos com usuário do RA e senha cadastrada na coordenadoria de TIC, distinta da senha central da DAC.
              </p>
              <a
                href="https://www.ft.unicamp.br"
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
                Rede sem fio acadêmica presente em todos os blocos. Conexão com email institucional completo e senha central Unicamp via instalador oficial do CCUEC.
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
                Ambientes virtuais para envio de tarefas práticas, consulta de notas parciais e comunicados docentes com autenticação central Unicamp.
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
                Serviço de envio de arquivos para impressão diretamente do seu aparelho conectado à rede local.
              </p>
              <ol className={styles.stepList}>
                <li><strong>Conexão:</strong> Conecte-se à rede Wifi_FT ou Eduroam no campus da FT.</li>
                <li><strong>Acesso:</strong> Leia o QR Code no totem das impressoras ou abra a URL oficial do WifiPrint.</li>
                <li><strong>Envio:</strong> Faça upload do arquivo em PDF ou texto e defina o número de cópias.</li>
                <li><strong>Padrão:</strong> Impressões realizadas exclusivamente em preto e branco.</li>
              </ol>
              <div className={styles.buttonRow}>
                <a
                  href="https://ibquota.ft.unicamp.br/wifiprint/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.actionBtn}
                >
                  <Wifi size={14} />
                  <span>Acessar WifiPrint FT</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              <div className={styles.realtorCard}>
                <div className={styles.realtorInfo}>
                  <h3 className={styles.realtorName}>Portinari Imóveis</h3>
                  <p className={styles.realtorDesc}>Apoio em locação imobiliária com portfólio em Limeira</p>
                </div>
                <a
                  href="https://www.portinarimoveis.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.realtorLink}
                >
                  <ExternalLink size={16} />
                  <span>Acessar portal</span>
                </a>
              </div>

              <div className={styles.realtorCard}>
                <div className={styles.realtorInfo}>
                  <h3 className={styles.realtorName}>Sassi Imóveis</h3>
                  <p className={styles.realtorDesc}>Locação tradicional com atendimento estudantil</p>
                </div>
                <a
                  href="https://www.sassiimoveis.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.realtorLink}
                >
                  <ExternalLink size={16} />
                  <span>Acessar portal</span>
                </a>
              </div>

            </div>

            <div className={styles.roomCard}>
              <span className={styles.badgeQuota}>Renovação Mensal</span>
              <h3 className={styles.roomCardTitle}>Cota Mensal de Impressão</h3>
              <p className={styles.roomCardText}>
                Cota de páginas mensais para trabalhos acadêmicos de estudantes matriculados na Faculdade de Tecnologia.
              </p>
              <ol className={styles.stepList}>
                <li><strong>Créditos Automáticos:</strong> Cota creditada no primeiro dia do mês.</li>
                <li><strong>Início do Ano Letivo:</strong> Reinício da cota para o quantitativo anual regulamentar.</li>
                <li><strong>Consulta de Saldo:</strong> Saldo de páginas disponível em tempo real na Intranet FT.</li>
                <li><strong>Conta de Acesso:</strong> Login com as credenciais da informática da FT.</li>
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
                Impressoras alocadas nos laboratórios LP01, LP02, LP03, LP09 e LP10 para aulas práticas e estudo livre.
              </p>
              <ol className={styles.stepList}>
                <li><strong>Laboratórios:</strong> Ambientes equipados com computadores para aulas e estudo.</li>
                <li><strong>Alocação de Salas:</strong> Portal com consulta de horários e ocupação de anfiteatros.</li>
                <li><strong>Suporte:</strong> Orientações sobre o fretado intercampi, senhas e softwares.</li>
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
                Quadro de ocupação de salas e anfiteatros disponível em tempo real. Salas livres na grade podem ser ocupadas por grupos de estudantes para estudo silencioso.
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
                Eventos e reuniões recorrentes exigem solicitação formal via entidade estudantil reconhecida ou apoio de docente responsável.
              </p>
            </div>

            <div className={styles.roomCard}>
              <h3 className={styles.roomCardTitle}>Regras de Convivência</h3>
              <p className={styles.roomCardText}>
                Ao desocupar a sala, apague a lousa, reorganize as carteiras e desligue iluminação e ar-condicionado.
              </p>
            </div>
          </div>

          {/* Justificativas para Salas Maiores */}
          <div id="justificativas-salas" className={styles.justificationArea}>
            <h3 className={styles.justTitle}>
              Como Justificar uma Sala Maior para Poucas Pessoas perante a Administração
            </h3>
            <p className={styles.justSubtitle}>
              Pedidos com foco apenas em número de presentes costumam ser alocados em salas menores. Utilize justificativas técnicas aceitas pela Seção de Apoio Didático e Logístico da FT:
            </p>

            <div className={styles.justGrid}>
              <div className={styles.justItem}>
                <span className={styles.justNumber}>1</span>
                <div>
                  <h4 className={styles.justItemTitle}>Necessidade de Tomadas e Bancadas Individuais</h4>
                  <p className={styles.justItemText}>
                    Conexão elétrica simultânea para múltiplos computadores portáteis, disponível apenas em salas com bancadas de extensão e laboratórios da TIC.
                  </p>
                </div>
              </div>

              <div className={styles.justItem}>
                <span className={styles.justNumber}>2</span>
                <div>
                  <h4 className={styles.justItemTitle}>Gravação ou Transmissão Híbrida</h4>
                  <p className={styles.justItemText}>
                    Isolamento acústico e espaço físico para tripés, câmeras e iluminação técnica sem obstruir rotas de circulação.
                  </p>
                </div>
              </div>

              <div className={styles.justItem}>
                <span className={styles.justNumber}>3</span>
                <div>
                  <h4 className={styles.justItemTitle}>Dinâmica em Subgrupos e Layout Modular</h4>
                  <p className={styles.justItemText}>
                    Oficina prática com separação dos participantes em estações fisicamente distantes para evitar interferência sonora mútua.
                  </p>
                </div>
              </div>

              <div className={styles.justItem}>
                <span className={styles.justNumber}>4</span>
                <div>
                  <h4 className={styles.justItemTitle}>Fluxo Rotativo e Quórum Flutuante</h4>
                  <p className={styles.justItemText}>
                    Atividade aberta com quórum flutuante, onde o público acumulado ao longo das horas supera a lotação pontual simultânea.
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
                Almoço e jantar nos dias úteis na FT. Aos fins de semana e feriados, atendimento centralizado no RU da FCA. Consulte horários e cardápio na prefeitura universitária.
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
                Transporte gratuito contínuo entre os campi de Limeira mantido pela Prefeitura Universitária. Grade horária e paradas sofrem ajustes periódicos informados na página oficial.
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
              <a
                href="/images/horarios-circular.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.transportLink}
                aria-label="Baixar documento de horários do circular em PDF em nova janela"
              >
                <span>Baixar Horários em PDF</span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>

            <div className={styles.transportCard}>
              <div className={styles.transportHeader}>
                <Bus size={18} aria-hidden="true" />
                <h3 className={styles.transportTitle}>Fretado Intercampi Linha 84</h3>
              </div>
              <p className={styles.transportDesc}>
                Conexão gratuita entre os campi de Limeira e Barão Geraldo em Campinas. Exige agendamento prévio de assento no sistema de transporte da prefeitura universitária.
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

      {/* Vida Noturna, Integração e Festas Universitárias */}
      <section id="vida-festas" className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <PartyPopper size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Vida Noturna, Integração e Festas Universitárias</h2>
              <p className={styles.cardSubtitle}>
                Calendário tradicional, principais casas de eventos e orientações para curtir com segurança em Limeira
              </p>
            </div>
          </div>

          <div className={styles.roomsGrid}>
            <div className={styles.roomCard}>
              <span className={styles.badgeNetwork}>Canal Oficial</span>
              <h3 className={styles.roomCardTitle}>Perfil Rolimeira</h3>
              <p className={styles.roomCardText}>
                Principal canal de cobertura, avisos de lotes e divulgação das festas e calouradas dos campi de Limeira.
              </p>
              <div className={styles.buttonRow}>
                <a
                  href="https://www.instagram.com/rolimeira_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.actionBtn}
                  aria-label="Acessar perfil Rolimeira no Instagram em nova janela"
                >
                  <ExternalLink size={14} />
                  <span>Instagram @rolimeira_</span>
                </a>
              </div>
            </div>

            <div className={styles.roomCard}>
              <span className={styles.badgeQuota}>Terças e Quintas</span>
              <h3 className={styles.roomCardTitle}>Dias e Espaços Frequentes</h3>
              <p className={styles.roomCardText}>
                As festas acontecem tradicionalmente às terças e quintas-feiras nos principais espaços da cidade.
              </p>
              <ol className={styles.stepList}>
                <li><strong>Nova República:</strong> Espaço tradicional de eventos com acesso facilitado para os estudantes.</li>
                <li><strong>Mirage Eventos:</strong> Casa ampla muito utilizada para grandes integrações e festas temáticas.</li>
              </ol>
            </div>

            <div className={styles.roomCard}>
              <span className={styles.galleryTag}>Segurança e Rotina</span>
              <h3 className={styles.roomCardTitle}>Logística e Volta Segura</h3>
              <p className={styles.roomCardText}>
                Recomendações para aproveitar a integração universitária com tranquilidade:
              </p>
              <ol className={styles.stepList}>
                <li><strong>Transporte e Carona:</strong> Combine corridas por aplicativo em grupo ou caronas de confiança com motorista da rodada.</li>
                <li><strong>Hidratação e Pertences:</strong> Alterne bebidas com água e mantenha documentos e celular em bolsos seguros.</li>
                <li><strong>Rotina de Aulas:</strong> Planeje o retorno para não comprometer aulas, provas ou estágios no dia seguinte.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 0. Mapa Territorial da Região Universitária de Limeira */}
      <section id="moradia-mapa" className={styles.sectionBlock}>
        <MapMoradia />
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
                <div className={`${styles.pointItem} ${styles.locationPoint}`}>
                  <div className={styles.pointHeader}>
                    <MapPin size={14} className={styles.pointIcon} aria-hidden="true" />
                    <strong>Localização Típica</strong>
                  </div>
                  <p>Jardim Nova Itália, Vila Cristovam, Jardim Morro Azul e proximidades do Morar Mais.</p>
                </div>
                <div className={`${styles.pointItem} ${styles.prosPoint}`}>
                  <div className={styles.pointHeader}>
                    <CheckCircle2 size={14} className={styles.pointIcon} aria-hidden="true" />
                    <strong>Vantagens</strong>
                  </div>
                  <p>Menor custo mensal, forte integração social, rede de apoio acadêmico com veteranos e rateio de despesas. Possibilidade de se tornar agregado da casa para participar das atividades e confraternizações sem morar nela.</p>
                </div>
                <div className={`${styles.pointItem} ${styles.consPoint}`}>
                  <div className={styles.pointHeader}>
                    <AlertCircle size={14} className={styles.pointIcon} aria-hidden="true" />
                    <strong>Pontos de Atenção</strong>
                  </div>
                  <p>Rotinas e horários variados entre os moradores, menor privacidade e necessidade de assembleias para gestão da casa.</p>
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
                <div className={`${styles.pointItem} ${styles.locationPoint}`}>
                  <div className={styles.pointHeader}>
                    <MapPin size={14} className={styles.pointIcon} aria-hidden="true" />
                    <strong>Localização Típica</strong>
                  </div>
                  <p>Concentração no Jardim Morro Azul, próximo à Escola Municipal Aldo José Kuhl, com opções no Jardim Paulista e Fátima.</p>
                </div>
                <div className={`${styles.pointItem} ${styles.prosPoint}`}>
                  <div className={styles.pointHeader}>
                    <CheckCircle2 size={14} className={styles.pointIcon} aria-hidden="true" />
                    <strong>Vantagens</strong>
                  </div>
                  <p>Porta de entrada mais econômica para a maior parte dos estudantes, com mobília inclusa. Muitos moradores viram agregados de repúblicas para aliar economia com vida social.</p>
                </div>
                <div className={`${styles.pointItem} ${styles.consPoint}`}>
                  <div className={styles.pointHeader}>
                    <AlertCircle size={14} className={styles.pointIcon} aria-hidden="true" />
                    <strong>Pontos de Atenção</strong>
                  </div>
                  <p>Falta de escolha dos colegas de quarto ou áreas comuns, com regras estritas de visitas e horários de silêncio.</p>
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
                <div className={`${styles.pointItem} ${styles.locationPoint}`}>
                  <div className={styles.pointHeader}>
                    <MapPin size={14} className={styles.pointIcon} aria-hidden="true" />
                    <strong>Localização Típica</strong>
                  </div>
                  <p>Concentradas no lado da FCA, nos bairros Jardim Cidade Universitária I e II e Chácara Antonieta.</p>
                </div>
                <div className={`${styles.pointItem} ${styles.prosPoint}`}>
                  <div className={styles.pointHeader}>
                    <CheckCircle2 size={14} className={styles.pointIcon} aria-hidden="true" />
                    <strong>Vantagens</strong>
                  </div>
                  <p>Privacidade total, silêncio para dedicação aos estudos e liberdade completa de rotina pessoal. Opção mais comum para quem tem maior orçamento financeiro.</p>
                </div>
                <div className={`${styles.pointItem} ${styles.consPoint}`}>
                  <div className={styles.pointHeader}>
                    <AlertCircle size={14} className={styles.pointIcon} aria-hidden="true" />
                    <strong>Pontos de Atenção</strong>
                  </div>
                  <p>Custo mais elevado, contas pagas integralmente à parte e necessidade de circular ou bicicleta para ir até a FT.</p>
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
                <div className={`${styles.pointItem} ${styles.locationPoint}`}>
                  <div className={styles.pointHeader}>
                    <MapPin size={14} className={styles.pointIcon} aria-hidden="true" />
                    <strong>Localização Típica</strong>
                  </div>
                  <p>Condomínios como Morar Mais, Edifício Bahamas na José Paolillo e Residencial Azaleias na Ciro Scartezini.</p>
                </div>
                <div className={`${styles.pointItem} ${styles.prosPoint}`}>
                  <div className={styles.pointHeader}>
                    <CheckCircle2 size={14} className={styles.pointIcon} aria-hidden="true" />
                    <strong>Vantagens</strong>
                  </div>
                  <p>Escolha direta dos colegas de quarto, ambiente de estudos alinhado e infraestrutura com portaria e segurança.</p>
                </div>
                <div className={`${styles.pointItem} ${styles.consPoint}`}>
                  <div className={styles.pointHeader}>
                    <AlertCircle size={14} className={styles.pointIcon} aria-hidden="true" />
                    <strong>Pontos de Atenção</strong>
                  </div>
                  <p>Custo elevado e responsabilidade solidária. Vale mais a pena morar sozinho no início em vez de dividir direto com desconhecidos, esperando conhecer melhor os colegas de curso.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Estratégia Prática de Moradia para Calouros */}
          <div className={styles.strategyCallout}>
            <h4>Estratégia Real de Moradia: Pensionatos, Agregados de República e Morar Sozinho</h4>
            <ul>
              <li><strong>Pensionato como Porta de Entrada:</strong> A maior parte dos calouros começa em pensionatos pelo preço mais baixo da cidade e facilidade de entrada sem fiador tradicional.</li>
              <li><strong>Ser Agregado de República:</strong> Você não precisa residir na casa física para vivenciar a comunidade universitária. Virar agregado permite frequentar eventos e ter apoio de veteranos mantendo a privacidade do seu próprio quarto.</li>
              <li><strong>Kitnets para Maior Orçamento:</strong> Estudantes com maior poder aquisitivo costumam ir direto para kitnets e studios no lado FCA em busca de autonomia total.</li>
              <li><strong>Morar Sozinho Primeiro:</strong> Vale a pena morar sozinho ou em acomodação individual nos primeiros meses em vez de assinar contrato com pessoas desconhecidas. O ideal é esperar conviver com a turma durante o primeiro ano para formar grupos com afinidade real de estudo e convivência.</li>
            </ul>
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
                Condomínio fechado com apartamentos de dois e três dormitórios, buscado por grupos que dividem aluguel entre duas a quatro pessoas.
              </p>

              <div className={styles.buildingMeta}>
                <div className={styles.metaRow}>
                  <div className={styles.metaLabelGroup}>
                    <DollarSign size={14} className={styles.metaIcon} aria-hidden="true" />
                    <strong>Valores:</strong>
                  </div>
                  <span>1.500 a 2.500 reais de custo total mensal</span>
                </div>
                <div className={styles.metaRow}>
                  <div className={styles.metaLabelGroup}>
                    <Check size={14} className={styles.metaIcon} aria-hidden="true" />
                    <strong>Prós:</strong>
                  </div>
                  <span>Infraestrutura com piscina, academia, quadras e portaria com segurança 24 horas.</span>
                </div>
                <div className={styles.metaRow}>
                  <div className={styles.metaLabelGroup}>
                    <Bus size={14} className={styles.metaIcon} aria-hidden="true" />
                    <strong>Logística:</strong>
                  </div>
                  <span>Afastado do centro. Requer condução própria, carro por aplicativo compartilhado ou circular para aulas e bandeco.</span>
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
                Prédios residenciais de uma e duas torres no corredor de acesso direto ao campus da FCA.
              </p>

              <div className={styles.buildingMeta}>
                <div className={styles.metaRow}>
                  <div className={styles.metaLabelGroup}>
                    <DollarSign size={14} className={styles.metaIcon} aria-hidden="true" />
                    <strong>Valores:</strong>
                  </div>
                  <span>Médios e compatíveis com locação estudantil</span>
                </div>
                <div className={styles.metaRow}>
                  <div className={styles.metaLabelGroup}>
                    <Check size={14} className={styles.metaIcon} aria-hidden="true" />
                    <strong>Prós:</strong>
                  </div>
                  <span>Acesso a pé ao RU da FCA e ponto de ônibus com circular gratuito para a FT.</span>
                </div>
                <div className={styles.metaRow}>
                  <div className={styles.metaLabelGroup}>
                    <Bus size={14} className={styles.metaIcon} aria-hidden="true" />
                    <strong>Logística:</strong>
                  </div>
                  <span>Ideal para economizar com refeições no RU da FCA e subir para a FT via circular gratuito.</span>
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
                Prédio residencial a poucos passos da portaria principal da FT, ideal para quartos individuais ou apartamentos em grupo.
              </p>

              <div className={styles.buildingMeta}>
                <div className={styles.metaRow}>
                  <div className={styles.metaLabelGroup}>
                    <DollarSign size={14} className={styles.metaIcon} aria-hidden="true" />
                    <strong>Valores:</strong>
                  </div>
                  <span>Quarto individual ou apartamento em grupo</span>
                </div>
                <div className={styles.metaRow}>
                  <div className={styles.metaLabelGroup}>
                    <Check size={14} className={styles.metaIcon} aria-hidden="true" />
                    <strong>Prós:</strong>
                  </div>
                  <span>Elimina gastos com transporte e tempo de trânsito, permitindo ir a pé para aulas, laboratórios e biblioteca.</span>
                </div>
                <div className={styles.metaRow}>
                  <div className={styles.metaLabelGroup}>
                    <Bus size={14} className={styles.metaIcon} aria-hidden="true" />
                    <strong>Logística:</strong>
                  </div>
                  <span>Proximidade total com as instalações da FT e com o bandeco local nos dias úteis.</span>
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
                Principal eixo comercial e gastronômico que atende os estudantes da FT no trajeto até o centro.
              </p>
              <ul className={styles.avenueList}>
                <li>Padarias, mercearias, lanchonetes e restaurantes por quilo acessíveis.</li>
                <li>Farmácias e caixas bancários para conveniência dos moradores.</li>
                <li>Rota segura e rápida para caminhadas e deslocamento de bicicleta até a FT.</li>
              </ul>
            </div>

            <div className={styles.avenueCard}>
              <h3 className={styles.avenueTitle}>Avenida Fabrício Vampré</h3>
              <p className={styles.avenueDesc}>
                Artéria comercial ampla com grandes estabelecimentos, hipermercados e conexão com rodovias.
              </p>
              <ul className={styles.avenueList}>
                <li>Redes de supermercados, atacarejos, academias e agências bancárias.</li>
                <li>Saída rápida para viagens intermunicipais rumo a Campinas e São Paulo.</li>
                <li>Linhas de ônibus e ligação direta com o anel viário de Limeira.</li>
              </ul>
            </div>
          </div>

          <div className={styles.neighborhoodsSplit}>
            <div className={styles.neighborhoodCard}>
              <h4>Bairros Lado FT: Jardim Nova Itália, Vila Cristovam, Vila Anita e Morro Azul</h4>
              <p>
                Bairros seguros e arborizados no entorno imediato da FT. Deslocamento a pé sem depender de transporte coletivo. O Morro Azul concentra pensionatos econômicos perto da Escola Municipal Aldo José Kuhl.
              </p>
            </div>

            <div className={styles.neighborhoodCard}>
              <h4>Bairros Lado FCA: Jardim Cidade Universitária I e II e Chácara Antonieta</h4>
              <p>
                Bairros modernos com forte oferta de kitnets e studios. Próximos ao RU da FCA, com integração à FT via circular gratuito.
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
                href="https://roqueimoveis.com.br/"
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
                <h3 className={styles.realtorName}>Portinari Imóveis</h3>
                <p className={styles.realtorDesc}>
                  Imobiliária atuante em Limeira com opções residenciais para locação, atendimento ágil e carteira diversificada de apartamentos e casas.
                </p>
              </div>
              <a
                href="https://www.portinarimoveis.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.realtorActionBtn}
                aria-label="Acessar portal da Portinari Imóveis em nova janela"
              >
                <span>Portal Portinari Imóveis</span>
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            </div>

            <div className={styles.realtorCard}>
              <div>
                <h3 className={styles.realtorName}>Sassi Imóveis</h3>
                <p className={styles.realtorDesc}>
                  Imobiliária tradicional da cidade com atendimento para locação de imóveis próximos a vias de acesso rápido aos campi universitários.
                </p>
              </div>
              <a
                href="https://www.sassiimoveis.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.realtorActionBtn}
                aria-label="Acessar portal da Sassi Imóveis em nova janela"
              >
                <span>Portal Sassi Imóveis</span>
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
            <h4>Orientações para Contratos e Mobília</h4>
            <ul>
              <li><strong>Garantia Locatícia:</strong> Consulte se a imobiliária aceita cartão de crédito ou seguro fiança caso não possua fiador com imóvel quitado no estado de São Paulo.</li>
              <li><strong>Vistoria Inicial:</strong> Fotografe e filme todos os cômodos, pintura, tomadas e torneiras na entrega das chaves para anexar formalmente ao laudo.</li>
              <li><strong>Desapego de Formandos:</strong> Participe dos grupos de repasse e desapego no fim de cada semestre para adquirir móveis e eletrodomésticos com valores simbólicos.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contatos e Atendimento Institucional */}
      <section
        id="contatos-atendimento"
        className={styles.sectionBlock}
      >
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Compass size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Contatos e Atendimento Institucional da FT</h2>
              <p className={styles.cardSubtitle}>
                Canais de suporte discente, coordenações, biblioteca, suporte técnico e reporte de inconsistências
              </p>
            </div>
          </div>

          <div className={styles.libraryActionCardsGrid}>
            <div className={styles.libraryActionCard}>
              <div>
                <span className={styles.libraryActionBadge}>Atendimento Discente</span>
                <h4 className={styles.libraryActionTitle}>Diretoria Acadêmica e Graduação FT</h4>
                <p className={styles.libraryActionDesc}>
                  Orientações sobre matrícula, requerimentos de aproveitamento de estudos e procedimentos de formatura.
                </p>
              </div>
              <a
                href="https://www.ft.unicamp.br"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.libraryActionBtn}
              >
                <span>Portal da Graduação</span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>

            <div className={styles.libraryActionCard}>
              <div>
                <span className={styles.libraryActionBadge}>Suporte Tecnológico</span>
                <h4 className={styles.libraryActionTitle}>Coordenadoria de TIC da FT</h4>
                <p className={styles.libraryActionDesc}>
                  Acesso aos laboratórios de computação, rede sem fio institucional eduroam e contas nos servidores acadêmicos.
                </p>
              </div>
              <a
                href="https://www.ft.unicamp.br"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.libraryActionBtn}
              >
                <span>Portal de TIC</span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>

            <div className={styles.libraryActionCard}>
              <div>
                <span className={styles.libraryActionBadge}>Canal Comunitário</span>
                <h4 className={styles.libraryActionTitle}>Reporte de Inconsistências do Guia</h4>
                <p className={styles.libraryActionDesc}>
                  Canal institucional via Google Chat pelo email j197837@dac.unicamp.br para sugestões de tópicos e correções.
                </p>
              </div>
              <a
                href="mailto:j197837@dac.unicamp.br"
                className={styles.libraryActionBtn}
              >
                <span>Enviar Mensagem</span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
        </div>
      </div>
    </div>
  );
}
