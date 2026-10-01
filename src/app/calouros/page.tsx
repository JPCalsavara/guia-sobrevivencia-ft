'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Compass,
  GraduationCap,
  MapPin,
  Building2,
  Calendar,
  Users,
  BookOpen,
  Utensils,
  Bus,
  ShieldCheck,
  AlertTriangle,
  Award,
  ExternalLink,
  Laptop,
  CheckCircle2,
  CreditCard,
  FileText,
  Key,
  Globe,
  Sparkles,
  Cloud,
  ArrowRight,
  Home,
  Copy,
  Check,
  Lightbulb,
} from 'lucide-react';
import { DocSidebar, TopicItem } from '@/components/DocSidebar/DocSidebar';
import { useClipboardCopy } from '@/hooks/useClipboardCopy';
import { geminiSyllabusPrompt } from '@/data/prompts';
import styles from './calouros.module.scss';

const calourosTopics: TopicItem[] = [
  {
    id: 'acabei-de-passar',
    title: 'Acabei de Passar: Primeiros Passos',
    subtopics: [
      { id: 'acabei-de-passar', title: 'Matrícula Virtual e Confirmação' },
      { id: 'obter-ra-carteirinha', title: 'Registro Acadêmico e Carteirinha' },
      { id: 'senhas-email-dac', title: 'Senhas e E-mail Institucional' },
    ],
  },
  {
    id: 'unicamp-limeira-ft',
    title: 'Unicamp Limeira: FT versus FCA',
    subtopics: [
      { id: 'unicamp-limeira-ft', title: 'Localização do Campus 1 FT' },
      { id: 'diferenca-ft-fca', title: 'Diferenças Cruciais entre FT e FCA' },
    ],
  },
  {
    id: 'moradia-calouros',
    title: 'Onde Morar: Bairros e Imobiliárias',
    subtopics: [
      { id: 'moradia-calouros', title: 'Bairros Próximos e Lado FT' },
      { id: 'principais-ruas-limeira', title: 'Avenidas Cônego e Fabrício' },
      { id: 'imobiliarias-e-contratos', title: 'Imobiliárias e Aluguel' },
    ],
  },
  {
    id: 'calourada-recepcao',
    title: 'Calourada e Trote Solidário',
    subtopics: [
      { id: 'calourada-recepcao', title: 'Recepção e Integração Estudantil' },
      { id: 'trote-solidario-regras', title: 'Trote Solidário e Proibições' },
    ],
  },
  {
    id: 'salas-aulas-ft',
    title: 'Aulas e Espaços Físicos na FT',
    subtopics: [
      { id: 'salas-aulas-ft', title: 'PAs, SAs e LPs da Faculdade' },
      { id: 'laboratorios-tic', title: 'Laboratórios de Programação' },
      { id: 'consulta-salas-online', title: 'Consulta de Salas em Tempo Real' },
    ],
  },
  {
    id: 'ambientes-estudo',
    title: 'Moodle, Classroom e Agenda',
    subtopics: [
      { id: 'ambientes-estudo', title: 'Moodle para Conteúdo das Aulas' },
      { id: 'classroom-google-dac', title: 'Google Classroom e e-DAC' },
      { id: 'automacao-google-calendar', title: 'Automação para o Google Calendar' },
    ],
  },
  {
    id: 'bandejao-recarga',
    title: 'Restaurante Universitário e Saldo',
    subtopics: [
      { id: 'bandejao-recarga', title: 'Funcionamento do RU na FT' },
      { id: 'compra-recarga-creditos', title: 'Como Recarregar via Pix' },
      { id: 'catracas-app-servicos', title: 'Acesso às Catracas com App' },
    ],
  },
  {
    id: 'transporte-circular',
    title: 'Transporte e Linhas Circulares',
    subtopics: [
      { id: 'transporte-circular', title: 'Circular Gratuito FT e FCA' },
      { id: 'fretado-linha-84', title: 'Fretado Linha 84 para Campinas' },
      { id: 'onibus-municipal-limeira', title: 'Ônibus Urbano e Passe Escolar' },
    ],
  },
  {
    id: 'apoio-monitorias-pmu',
    title: 'Monitorias PAD e Mentoria PMU',
    subtopics: [
      { id: 'apoio-monitorias-pmu', title: 'Plantões de Dúvidas PAD e PED' },
      { id: 'mentoria-pmu-ingressantes', title: 'Mentoria PMU da DEAPE' },
      { id: 'como-ser-monitor', title: 'Como Ser Monitor no Futuro' },
    ],
  },
  {
    id: 'bolsas-sociais-deape',
    title: 'Bolsas Sociais e Permanência',
    subtopics: [
      { id: 'bolsas-sociais-deape', title: 'Bolsa Auxílio-Social BAS' },
      { id: 'moradia-alimentacao-gratis', title: 'Moradia e Refeições Gratuitas' },
      { id: 'inscricao-sig-deape', title: 'Inscrição no Sistema SIG-DEAPE' },
    ],
  },
  {
    id: 'organizacoes-e-ic',
    title: 'Organizações Estudantis e IC',
    subtopics: [
      { id: 'organizacoes-e-ic', title: 'Feira de Entidades e Inscrições' },
      { id: 'iniciacao-cientifica-calouro', title: 'Iniciação Científica PIBIC' },
    ],
  },
  {
    id: 'beneficios-tecnologia',
    title: 'Benefícios Digitais e Ferramentas',
    subtopics: [
      { id: 'beneficios-tecnologia', title: 'AWS Builder Center para Alunos' },
      { id: 'github-pack-google', title: 'GitHub Pack e Google Workspace' },
    ],
  },
];

export default function CalourosPage() {
  const { copied, copy } = useClipboardCopy();

  const handleCopyCalendarPrompt = () => {
    copy(geminiSyllabusPrompt);
  };
  return (
    <div className={styles.container}>
      {/* Cabeçalho da Página */}
      <section className={styles.pageHeader}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.headerBadge}>
            <GraduationCap size={16} />
            <span>Onboarding Oficial do Ingressante</span>
          </div>

          <h1 className={styles.pageTitle}>
            Guia de Sobrevivência do Calouro na Faculdade de Tecnologia
          </h1>

          <p className={styles.pageDescription}>
            Passo a passo objetivo para quem acabou de ser aprovado na FT Unicamp em Limeira. Tudo sobre matrícula, localização, aulas, bandejão, transporte, monitorias, pesquisa e bolsas.
          </p>
        </motion.div>
      </section>

      {/* Conteúdo com Barra Lateral Esquerda */}
      <div className={styles.contentWithSidebar}>
        <aside className={styles.sidebarAside}>
          <DocSidebar topics={calourosTopics} title="Guia do Calouro" />
        </aside>

        <main id="main-calouros-content" className={styles.mainContentArea}>
          {/* Seção 1: Acabei de Passar: Primeiros Passos */}
          <section id="acabei-de-passar" className={styles.sectionBlock}>
            <div className={styles.blockCard}>
              <div className={styles.cardHeader}>
                <Compass size={24} className={styles.headerIcon} />
                <div>
                  <h2 className={styles.cardTitle}>Acabei de Passar: Primeiros Passos</h2>
                  <p className={styles.cardSubtitle}>
                    Ações obrigatórias para garantir sua vaga e ativar suas credenciais acadêmicas
                  </p>
                </div>
              </div>

              <div id="obter-ra-carteirinha" className={styles.rulesGrid}>
                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>1. Matrícula Virtual DAC</h3>
                  <p className={styles.ruleText}>
                    Acesse o portal da Diretoria Acadêmica no prazo do edital para envio da documentação digital e confirmação expressa de interesse na vaga. A ausência de confirmação cancela o ingresso.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>2. Obtenção do RA</h3>
                  <p className={styles.ruleText}>
                    O Registro Acadêmico é o seu número único de identificação na Unicamp. Ele é gerado após a validação dos documentos pela DAC e acompanha toda a sua trajetória universitária.
                  </p>
                </div>

                <div id="senhas-email-dac" className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>3. Senhas e E-mail Institucional</h3>
                  <p className={styles.ruleText}>
                    Crie sua senha central no e-DAC para desbloquear sua conta institucional com domínio dac.unicamp.br. Ela garante acesso ao Google Workspace, Moodle e Wi-Fi Eduroam.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>4. Carteirinha Digital</h3>
                  <p className={styles.ruleText}>
                    A identidade estudantil fica disponível no aplicativo Serviços Unicamp. Ela contém sua foto oficial, código de barras e QR code para acesso às catracas do campus e do restaurante.
                  </p>
                </div>
              </div>

              <div className={styles.gradeLinkBox}>
                <div>
                  <span className={styles.gradeLinkTitle}>Sistemas de Matrícula e DAC</span>
                  <span className={styles.gradeLinkDesc}>
                    Acesse o portal da DAC, sistema SIGA e Grade DAC Online no diretório de links
                  </span>
                </div>
                <div className={styles.buttonGroup}>
                  <Link
                    href="/links#categoria-matricula"
                    className={styles.gradeButton}
                    aria-label="Ver links de matrícula e vida acadêmica"
                  >
                    <span>Links de Matrícula</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 2: Unicamp Limeira FT versus FCA */}
          <section id="unicamp-limeira-ft" className={styles.sectionBlock}>
            <div className={styles.blockCard}>
              <div className={styles.cardHeader}>
                <MapPin size={24} className={styles.headerIcon} />
                <div>
                  <h2 className={styles.cardTitle}>Unicamp Limeira: Faculdade de Tecnologia versus FCA</h2>
                  <p className={styles.cardSubtitle}>
                    A Unicamp possui duas faculdades em Limeira com endereços e cursos completamente distintos
                  </p>
                </div>
              </div>

              <div id="diferenca-ft-fca" className={styles.rulesGrid}>
                <div className={styles.ruleCard}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className={`${styles.pillTag} ${styles.tagBlue}`}>Campus 1</span>
                    <h3 className={styles.ruleTitle}>Faculdade de Tecnologia FT</h3>
                  </div>
                  <p className={styles.ruleText}>
                    Rua Paschoal Marmo, 1888, Jardim Nova Itália. Sede de Sistemas de Informação, Análise e Desenvolvimento de Sistemas e Engenharias da FT. Aqui acontecem todas as suas aulas.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className={`${styles.pillTag} ${styles.tagGreen}`}>Campus 2</span>
                    <h3 className={styles.ruleTitle}>Faculdade de Ciências Aplicadas FCA</h3>
                  </div>
                  <p className={styles.ruleText}>
                    Rua Pedro Zaccaria, 1300, Jardim Santa Luíza. Abriga cursos de administração, ciências do esporte, nutrição e outras engenharias. Fica a cerca de quatro quilômetros da FT.
                  </p>
                </div>
              </div>

              <div className={styles.mapContainer}>
                <Image
                  src="/images/mapa-campus-ft.png"
                  alt="Mapa da Faculdade de Tecnologia da Unicamp com indicacao dos predios e salas"
                  width={1024}
                  height={770}
                  className={styles.mapImage}
                  loading="lazy"
                />
                <span className={styles.mapCaption}>
                  Mapa ilustrado do Campus 1 da FT Unicamp com localização dos blocos de aulas, laboratórios TIC, biblioteca e restaurante
                </span>
              </div>

              <div className={`${styles.alertBox} ${styles.alertWarning}`}>
                <span className={styles.alertTitle}>
                  <AlertTriangle size={16} />
                  Atenção no Primeiro Dia de Aula
                </span>
                <p className={styles.alertText}>
                  Calouros da FT devem comparecer exclusivamente ao Campus 1 no Jardim Nova Itália. Não se dirija à FCA, pois suas salas, secretarias e laboratórios ficam todos na FT.
                </p>
              </div>

              <div className={styles.gradeLinkBox}>
                <div>
                  <span className={styles.gradeLinkTitle}>Mobilidade e Transporte entre os Campi</span>
                  <span className={styles.gradeLinkDesc}>
                    Consulte os horários do circular gratuito e linhas de conexão na página de campus
                  </span>
                </div>
                <div className={styles.buttonGroup}>
                  <Link
                    href="/campus#circular-fretado"
                    className={styles.gradeButton}
                    aria-label="Ver linhas e circulares na página de campus"
                  >
                    <span>Transporte no Campus</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                  <a
                    href="https://maps.google.com/?q=Faculdade+de+Tecnologia+Unicamp+Limeira"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.gradeButtonSecondary}
                    aria-label="Abrir localização da FT no Google Maps em nova janela"
                  >
                    <span>Mapa Google</span>
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Seção Nova: Onde Morar em Limeira */}
          <section id="moradia-calouros" className={styles.sectionBlock}>
            <div className={styles.blockCard}>
              <div className={styles.cardHeader}>
                <Home size={24} className={styles.headerIcon} />
                <div>
                  <h2 className={styles.cardTitle}>Onde Morar em Limeira: Bairros, Ruas e Imobiliárias</h2>
                  <p className={styles.cardSubtitle}>
                    Guia estratégico para calouros escolherem moradia perto da FT, principais avenidas e imobiliárias locais
                  </p>
                </div>
              </div>

              {/* Bairros Lado FT x Lado FCA */}
              <div className={styles.rulesGrid}>
                <div className={styles.ruleCard}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className={`${styles.pillTag} ${styles.tagBlue}`}>Recomendado FT</span>
                    <h3 className={styles.ruleTitle}>Bairros Lado FT</h3>
                  </div>
                  <p className={styles.ruleText}>
                    Vila Cristovam, Jardim Nova Itália, Vila Anita e Morro Azul ficam no entorno imediato da faculdade. Morar nessa região permite ir a pé para as aulas todos os dias sem depender de transporte público.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className={`${styles.pillTag} ${styles.tagPurple}`}>Lado FCA</span>
                    <h3 className={styles.ruleTitle}>Bairros Lado FCA</h3>
                  </div>
                  <p className={styles.ruleText}>
                    Jardim Cidade Universitária I e II e Chácara Antonieta possuem prédios modernos e kitnets novas. Para chegar até a FT, é necessário utilizar o circular gratuito da Unicamp ou linhas municipais.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className={`${styles.pillTag} ${styles.tagGreen}`}>Centro</span>
                    <h3 className={styles.ruleTitle}>Região Central</h3>
                  </div>
                  <p className={styles.ruleText}>
                    Forte comércio, terminal urbano e acesso a bancos. Fica a cerca de quinze minutos de caminhada da FT subindo pela Avenida Cônego Manuel Alves.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className={`${styles.pillTag} ${styles.tagOrange}`}>Repúblicas</span>
                    <h3 className={styles.ruleTitle}>Repúblicas e Pensionatos</h3>
                  </div>
                  <p className={styles.ruleText}>
                    Opção econômica e ideal para convivência e troca de experiências com veteranos. As despesas de aluguel, energia e internet são compartilhadas entre os moradores.
                  </p>
                </div>
              </div>

              {/* Principais Ruas e Avenidas */}
              <div id="principais-ruas-limeira" className={styles.avenuesGrid}>
                <div className={styles.avenueCard}>
                  <h3 className={styles.avenueTitle}>Avenida Cônego Manuel Alves</h3>
                  <p className={styles.avenueDesc}>
                    Principal artéria de ligação entre a FT e a região central de Limeira.
                  </p>
                  <ul className={styles.avenueList}>
                    <li>Rota preferida para caminhadas e deslocamento de bicicleta até a FT.</li>
                    <li>Concentra padarias, restaurantes econômicos por quilo, marmitarias e lanchonetes.</li>
                    <li>Farmácias, pequenos mercados de bairro e serviços essenciais.</li>
                  </ul>
                </div>

                <div className={styles.avenueCard}>
                  <h3 className={styles.avenueTitle}>Avenida Fabrício Vampré</h3>
                  <p className={styles.avenueDesc}>
                    Grande avenida comercial que conecta os bairros residenciais à malha viária e rodovias.
                  </p>
                  <ul className={styles.avenueList}>
                    <li>Hipermercados de grande porte, atacarejos e academias completas.</li>
                    <li>Agências bancárias, caixas eletrônicos e farmácias com plantão estendido.</li>
                    <li>Acesso rápido para deslocamentos rodoviários rumo a Campinas ou São Paulo.</li>
                  </ul>
                </div>

                <div className={styles.avenueCard}>
                  <h3 className={styles.avenueTitle}>Rua Paschoal Marmo</h3>
                  <p className={styles.avenueDesc}>
                    Acesso principal à portaria de pedestres e veículos do Campus 1 da FT Unicamp.
                  </p>
                  <ul className={styles.avenueList}>
                    <li>Ponto de parada oficial do ônibus circular gratuito entre os campi de Limeira.</li>
                    <li>Presença de repúblicas tradicionais e kitnets a poucos passos da portaria.</li>
                    <li>Fácil acesso ao restaurante universitário, biblioteca e secretarias acadêmicas.</li>
                  </ul>
                </div>
              </div>

              {/* Imobiliárias e Aluguel */}
              <div id="imobiliarias-e-contratos">
                <div className={styles.cardHeader} style={{ marginTop: '1.5rem', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-color)' }}>
                  <Key size={20} className={styles.headerIcon} />
                  <div>
                    <h3 className={styles.roomCardTitle} style={{ fontSize: '1.1rem', margin: 0 }}>
                      Principais Imobiliárias de Limeira para Estudantes
                    </h3>
                    <p className={styles.ruleText} style={{ margin: 0, fontSize: '0.85rem' }}>
                      Imobiliárias mais utilizadas por universitários da FT para locação de apartamentos, casas e kitnets
                    </p>
                  </div>
                </div>

                <div className={styles.realtorsGrid}>
                  <div className={styles.realtorCard}>
                    <div>
                      <h4 className={styles.realtorName}>Imobiliária Roque</h4>
                      <p className={styles.realtorDesc}>
                        Uma das mais tradicionais de Limeira, com forte catálogo de casas e apartamentos na Vila Cristovam, Nova Itália e Centro.
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
                      <h4 className={styles.realtorName}>Bom Jesus Imóveis</h4>
                      <p className={styles.realtorDesc}>
                        Grande oferta de kitnets e imóveis residenciais compactos voltados para quem vem estudar na cidade.
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
                      <h4 className={styles.realtorName}>Imobiliária Della Nina</h4>
                      <p className={styles.realtorDesc}>
                        Opções variadas de aluguel residencial bem situadas em corredores de fácil acesso aos campi.
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
                      <h4 className={styles.realtorName}>Imobiliária Boa Vista</h4>
                      <p className={styles.realtorDesc}>
                        Locação de apartamentos, studios e casas em bairros residenciais tranquilos no entorno universitário.
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
                      <h4 className={styles.realtorName}>Prates Imóveis</h4>
                      <p className={styles.realtorDesc}>
                        Amplo catálogo imobiliário para locação residencial e repúblicas estudantis em diversos pontos de Limeira.
                      </p>
                    </div>
                    <a
                      href="https://www.pratesimoveis.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.realtorActionBtn}
                      aria-label="Acessar portal da Prates Imóveis em nova janela"
                    >
                      <span>Portal Prates Imóveis</span>
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <div className={`${styles.alertBox} ${styles.alertTip}`} style={{ marginTop: '1.25rem' }}>
                  <span className={styles.alertTitle}>
                    <ShieldCheck size={16} />
                    Dicas Essenciais para Calouros na Locação
                  </span>
                  <p className={styles.alertText}>
                    Visite o imóvel pessoalmente antes de fechar contrato para checar ventilação, incidência de sol e silêncio. Confira se o condomínio ou IPTU estão inclusos no anúncio e avalie a modalidade de garantia exigida, como seguro fiança, título de capitalização ou fiador. Para estudantes em vulnerabilidade socioeconômica, consulte os editais da Bolsa Auxílio-Moradia da DEAPE.
                  </p>
                </div>
              </div>

              <div className={styles.gradeLinkBox}>
                <div>
                  <span className={styles.gradeLinkTitle}>Mapa Completo de Moradia e Bolsas Sociais</span>
                  <span className={styles.gradeLinkDesc}>
                    Veja o mapa de condomínios no Campus ou confira as bolsas de permanência
                  </span>
                </div>
                <div className={styles.buttonGroup}>
                  <Link
                    href="/campus#moradia-convivencia"
                    className={styles.gradeButton}
                    aria-label="Ver mapa territorial e condomínios na página campus"
                  >
                    <span>Mapa de Moradia no Campus</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                  <Link
                    href="/calouros#bolsas-sociais-deape"
                    className={styles.gradeButtonSecondary}
                    aria-label="Ver informações de bolsas sociais da DEAPE"
                  >
                    <span>Bolsas Sociais DEAPE</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 3: Calourada, Recepção e Trote Solidário */}
          <section id="calourada-recepcao" className={styles.sectionBlock}>
            <div className={styles.blockCard}>
              <div className={styles.cardHeader}>
                <Users size={24} className={styles.headerIcon} />
                <div>
                  <h2 className={styles.cardTitle}>Calourada, Recepção e Trote Solidário</h2>
                  <p className={styles.cardSubtitle}>
                    Semana de acolhimento estudantil, regras regimentais e cultura solidária na Unicamp
                  </p>
                </div>
              </div>

              <div id="trote-solidario-regras" className={styles.rulesGrid}>
                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Semana de Recepção</h3>
                  <p className={styles.ruleText}>
                    A faculdade e as entidades preparam encontros com coordenadores, visitas guiadas aos laboratórios e gincanas para apresentação dos cursos e integração com os veteranos.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Trote Solidário</h3>
                  <p className={styles.ruleText}>
                    A tradição da universidade é focada na cidadania com doação voluntária de sangue no Hemonúcleo e arrecadação de alimentos não perecíveis para entidades sociais de Limeira.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Tolerância Zero com Abusos</h3>
                  <p className={styles.ruleText}>
                    Qualquer trote agressivo, vexatório ou que cause constrangimento moral ou físico é terminantemente proibido por resoluções oficiais da reitoria e punido com rigor.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Canais de Denúncia</h3>
                  <p className={styles.ruleText}>
                    Casos de intimidação ou desrespeito podem ser reportados à Ouvidoria da Unicamp e à diretoria da faculdade com garantia de sigilo e acolhimento imediato.
                  </p>
                </div>
              </div>

              <div className={styles.gradeLinkBox}>
                <div>
                  <span className={styles.gradeLinkTitle}>Entidades Estudantis da Faculdade</span>
                  <span className={styles.gradeLinkDesc}>
                    Conheça o Centro Acadêmico, a Atlética e as ligas ativas no diretório de entidades
                  </span>
                </div>
                <div className={styles.buttonGroup}>
                  <Link
                    href="/campus#entidades-estudantis"
                    className={styles.gradeButton}
                    aria-label="Acessar diretório de organizações na página de campus"
                  >
                    <span>Conhecer Entidades</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 4: Como e Onde São as Aulas na FT */}
          <section id="salas-aulas-ft" className={styles.sectionBlock}>
            <div className={styles.blockCard}>
              <div className={styles.cardHeader}>
                <Building2 size={24} className={styles.headerIcon} />
                <div>
                  <h2 className={styles.cardTitle}>Onde e Como Funcionam as Aulas na FT</h2>
                  <p className={styles.cardSubtitle}>
                    Entenda a nomenclatura dos espaços físicos: anfiteatros PA, salas menores SA e laboratórios LP
                  </p>
                </div>
              </div>

              <div id="laboratorios-tic" className={styles.rulesGrid}>
                <div className={styles.ruleCard}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className={`${styles.pillTag} ${styles.tagBlue}`}>PAs</span>
                    <h3 className={styles.ruleTitle}>Prédios Anfiteatros</h3>
                  </div>
                  <p className={styles.ruleText}>
                    Espaços maiores em formato de auditório, identificados de PA01 em diante. Destinados a turmas numerosas, aulas inaugurais, palestras magnas e matérias de grande contingente.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className={`${styles.pillTag} ${styles.tagGreen}`}>SAs</span>
                    <h3 className={styles.ruleTitle}>Salas Menores de Aula Teórica</h3>
                  </div>
                  <p className={styles.ruleText}>
                    Salas de aula convencionais menores, identificadas como SA01 em diante. Nelas ocorrem as aulas teóricas de turmas regulares de cálculo, física, álgebra e disciplinas específicas.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className={`${styles.pillTag} ${styles.tagPurple}`}>LPs</span>
                    <h3 className={styles.ruleTitle}>Laboratórios de Programação</h3>
                  </div>
                  <p className={styles.ruleText}>
                    Salas de informática gerenciadas pela TIC, identificadas como LP01 em diante. Equipadas com computadores individuais para aulas práticas de algoritmos, desenvolvimento e bancos de dados.
                  </p>
                </div>

                <div id="consulta-salas-online" className={styles.ruleCard}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className={`${styles.pillTag} ${styles.tagOrange}`}>Online</span>
                    <h3 className={styles.ruleTitle}>Consulta de Salas em Tempo Real</h3>
                  </div>
                  <p className={styles.ruleText}>
                    A FT mantém um sistema web na intranet onde você pesquisa o código da sua matéria ou horário e vê exatamente em qual PA, SA ou LP sua aula foi alocada no dia.
                  </p>
                </div>
              </div>

              <div className={`${styles.alertBox} ${styles.alertTip}`} style={{ marginTop: '1.25rem' }}>
                <span className={styles.alertTitle}>
                  <Lightbulb size={16} />
                  Dica de Ouro dos Professores: Foco em Sala de Aula
                </span>
                <p className={styles.alertText}>
                  O principal desafio apontado pelos docentes da FT é a dispersão com smartphones durante as explicações. Manter o celular guardado, acompanhar o raciocínio da aula e tirar dúvidas diretamente com o professor no momento em que surgem são os hábitos que mais diferenciam os estudantes aprovados de primeira.
                </p>
              </div>

              <div className={styles.gradeLinkBox}>
                <div>
                  <span className={styles.gradeLinkTitle}>Consulta de Salas e Recursos de Informática</span>
                  <span className={styles.gradeLinkDesc}>
                    Acesse o sistema de alocação de salas da FT, portal da TIC e WifiPrint no diretório
                  </span>
                </div>
                <div className={styles.buttonGroup}>
                  <a
                    href="https://sistemas.ft.unicamp.br/salas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.gradeButton}
                    aria-label="Consultar alocação de salas da FT em nova janela"
                  >
                    <span>Consultar Salas da FT</span>
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                  <Link
                    href="/links#categoria-aulas"
                    className={styles.gradeButtonSecondary}
                    aria-label="Ver recursos e links de aulas e informática"
                  >
                    <span>Links de Aulas e TIC</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 5: Ambientes Virtuais Moodle e Classroom */}
          <section id="ambientes-estudo" className={styles.sectionBlock}>
            <div className={styles.blockCard}>
              <div className={styles.cardHeader}>
                <BookOpen size={24} className={styles.headerIcon} />
                <div>
                  <h2 className={styles.cardTitle}>Onde Ficam os Conteúdos: Moodle e Google Classroom</h2>
                  <p className={styles.cardSubtitle}>
                    Plataformas digitais oficiais onde professores publicam slides, listas, prazos e notas
                  </p>
                </div>
              </div>

              <div id="classroom-google-dac" className={styles.rulesGrid}>
                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Moodle Unicamp</h3>
                  <p className={styles.ruleText}>
                    Ambiente virtual padrão da universidade. Cada matéria cursada no semestre ganha uma página onde os professores disponibilizam cronogramas, PDFs de aulas e fóruns de dúvidas.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Google Sala de Aula</h3>
                  <p className={styles.ruleText}>
                    Alguns professores adotam turmas no Google Classroom integrado ao e-mail institucional para envio de listas de exercícios, controle de entregas e avisos rápidos.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Acesso com Conta DAC</h3>
                  <p className={styles.ruleText}>
                    O login é sempre feito com seu usuário e senha institucional. Suas turmas são sincronizadas automaticamente após a confirmação da matrícula pela secretaria da faculdade.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Estudo Estruturado com IA</h3>
                  <p className={styles.ruleText}>
                    Você pode conectar as apostilas e ementas baixadas do Moodle ao Google NotebookLM para sintetizar leituras longas, gerar cartões de memorização e criar simulados pré-prova.
                  </p>
                </div>
              </div>

              {/* Automação: Planos de Desenvolvimento no Google Calendar */}
              <div id="automacao-google-calendar" className={styles.calendarAutomationBox}>
                <div className={styles.automationHeader}>
                  <div className={styles.automationIcon}>
                    <Calendar size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className={styles.automationTitle}>
                      Automação: Plano de Ensino e Avaliações no Google Calendar
                    </h3>
                    <p className={styles.automationSubtitle}>
                      Converta o cronograma avaliativo em PDF da disciplina em eventos de agenda com alarmes vinte e quatro horas antes
                    </p>
                  </div>
                </div>

                <div className={styles.automationBody}>
                  <p className={styles.automationDesc}>
                    Na primeira semana letiva, cada professor disponibiliza no Moodle o <strong>Plano de Desenvolvimento da Disciplina</strong>, também chamado de Plano de Ensino ou Syllabus. Esse documento oficial traz as regras do curso, datas de todas as provas P1 e P2, exames finais, seminários e entregas de laboratório.
                  </p>
                  <p className={styles.automationDesc}>
                    Em vez de cadastrar manualmente cada compromisso, você pode utilizar inteligência artificial para extrair os dados e gerar um arquivo padrão iCalendar com extensão ics, importando tudo de uma vez no Google Agenda.
                  </p>

                  <h4 className={styles.stepsMiniTitle}>Passo a Passo da Automação em Três Etapas</h4>
                  <ol className={styles.automationSteps}>
                    <li>
                      <strong>Baixe o Plano de Ensino:</strong> Acesse o Moodle da disciplina e faça o download do arquivo PDF do plano de desenvolvimento disponibilizado pelo docente.
                    </li>
                    <li>
                      <strong>Extraia com o Prompt de IA:</strong> Acesse o Google Gemini ou Google AI Studio, faça upload do PDF do plano e execute o prompt estruturado pronto. Ele gerará o código que começa com BEGIN:VCALENDAR e termina com END:VCALENDAR com alarmes programados para vinte e quatro horas antes de cada evento.
                    </li>
                    <li>
                      <strong>Importe no Google Agenda:</strong> Salve o código gerado em um arquivo de texto com o nome aula.ics no seu computador. No Google Agenda na web, clique em Configurações, selecione Importar e Exportar e suba o arquivo aula.ics. Todas as provas e alertas ficarão salvos instantaneamente no seu celular e calendário da conta Unicamp.
                    </li>
                  </ol>

                  <div className={styles.automationActionRow}>
                    <button
                      type="button"
                      onClick={handleCopyCalendarPrompt}
                      className={`${styles.copyPromptBtn} ${copied ? styles.copyPromptCopied : ''}`}
                      aria-label="Copiar prompt para extrair calendário de plano de aula"
                    >
                      {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
                      <span>{copied ? 'Prompt Copiado com Sucesso' : 'Copiar Prompt de Calendário'}</span>
                    </button>

                    <a
                      href="https://aistudio.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.aiStudioBtn}
                      aria-label="Abrir Google AI Studio em nova janela"
                    >
                      <span>Abrir Google AI Studio</span>
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>

                    <Link
                      href="/estudos-ia#prompts-estruturados"
                      className={styles.learnMoreBtn}
                      aria-label="Ver prompt detalhado no Guia de Estudos com IA"
                    >
                      <span>Ver no Guia de IA</span>
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className={styles.gradeLinkBox}>
                <div>
                  <span className={styles.gradeLinkTitle}>Acessar Plataformas e Guia de Estudos com IA</span>
                  <span className={styles.gradeLinkDesc}>
                    Abra o Moodle, Classroom ou aprenda a usar inteligência artificial com nosso guia
                  </span>
                </div>
                <div className={styles.buttonGroup}>
                  <Link
                    href="/links#categoria-aulas"
                    className={styles.gradeButton}
                    aria-label="Ver links oficiais de Moodle e Google Classroom"
                  >
                    <span>Moodle e Classroom</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                  <Link
                    href="/estudos-ia#notebooklm-cerebro"
                    className={styles.gradeButtonSecondary}
                    aria-label="Aprender sobre o uso de IA com NotebookLM"
                  >
                    <span>Guia de Estudos com IA</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 6: Restaurante Universitário e Saldo */}
          <section id="bandejao-recarga" className={styles.sectionBlock}>
            <div className={styles.blockCard}>
              <div className={styles.cardHeader}>
                <Utensils size={24} className={styles.headerIcon} />
                <div>
                  <h2 className={styles.cardTitle}>Restaurante Universitário e Recarga do Saldo</h2>
                  <p className={styles.cardSubtitle}>
                    Alimentação subsidiada de qualidade com recarga instantânea de saldo via Pix
                  </p>
                </div>
              </div>

              <div id="compra-recarga-creditos" className={styles.rulesGrid}>
                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Estrutura do RU na FT</h3>
                  <p className={styles.ruleText}>
                    O Restaurante Universitário do Campus 1 oferece almoço e jantar completos com prato principal, guarnição, opção vegetariana, saladas, suco e sobremesa em todos os dias letivos.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Aplicativo Carteirinha Digital</h3>
                  <p className={styles.ruleText}>
                    Baixe o aplicativo Carteirinha Digital Unicamp pelo guia oficial do Cotil e faça login com suas credenciais institucionais da DAC para habilitar seu documento discente.
                  </p>
                </div>

                <div id="catracas-app-servicos" className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Recarga por Pix ou Dinheiro</h3>
                  <p className={styles.ruleText}>
                    A recarga de créditos é feita gerando a chave Pix diretamente pelo aplicativo de carteirinha com inserção rápida de saldo, ou presencialmente em dinheiro no caixa do restaurante.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Validação no Totem e Catraca</h3>
                  <p className={styles.ruleText}>
                    Após a recarga por Pix, aproxime seu cartão físico no totem validador no saguão do restaurante para gravar os créditos na memória do cartão, ou use o QR code digital na catraca.
                  </p>
                </div>
              </div>

              <div className={styles.gradeLinkBox}>
                <div>
                  <span className={styles.gradeLinkTitle}>Guia da Carteirinha e Cardápio do RU</span>
                  <span className={styles.gradeLinkDesc}>
                    Veja o tutorial da carteirinha digital e consulte o cardápio diário da prefeitura
                  </span>
                </div>
                <div className={styles.buttonGroup}>
                  <a
                    href="https://www.cotil.unicamp.br/servicos_digitais/carteirinha-digital-unicamp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.gradeButton}
                    aria-label="Acessar tutorial da carteirinha digital do Cotil em nova janela"
                  >
                    <span>Guia Carteirinha Digital</span>
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                  <Link
                    href="/links#categoria-alimentacao"
                    className={styles.gradeButtonSecondary}
                    aria-label="Ver links de recarga e cardápio do RU"
                  >
                    <span>Links de Alimentação</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 7: Transporte e Linhas Circulares */}
          <section id="transporte-circular" className={styles.sectionBlock}>
            <div className={styles.blockCard}>
              <div className={styles.cardHeader}>
                <Bus size={24} className={styles.headerIcon} />
                <div>
                  <h2 className={styles.cardTitle}>Transporte e Linhas Circulares</h2>
                  <p className={styles.cardSubtitle}>
                    Circular gratuito FT e FCA, fretado intercampi Linha 84 e ônibus urbano municipal
                  </p>
                </div>
              </div>

              <div id="fretado-linha-84" className={styles.rulesGrid}>
                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Circular Gratuito FT e FCA</h3>
                  <p className={styles.ruleText}>
                    A prefeitura universitária mantém ônibus circular gratuito conectando o Campus 1 no Jardim Nova Itália ao Campus 2 na FCA em múltiplos horários diários durante o período letivo.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Fretado Intercampi Linha 84</h3>
                  <p className={styles.ruleText}>
                    Ônibus rodoviário gratuito para estudantes que precisam se deslocar entre Limeira e o campus de Barão Geraldo em Campinas. Exige reserva prévia de assento no sistema online.
                  </p>
                </div>

                <div id="onibus-municipal-limeira" className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Ônibus Urbano SOU Limeira</h3>
                  <p className={styles.ruleText}>
                    O transporte coletivo da cidade possui linhas frequentes ligando a Rodoviária de Limeira e os bairros residenciais aos portões da FT, com direito a passe escolar com meia tarifa.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Desacoplamento de Horários</h3>
                  <p className={styles.ruleText}>
                    Para evitar desencontros ocasionados por alterações de itinerário ou reformas viárias, consulte sempre as tabelas vigentes pelos links oficiais atualizados pela prefeitura.
                  </p>
                </div>
              </div>

              <div className={styles.pdfCard}>
                <div className={styles.pdfCardInfo}>
                  <div className={styles.pdfIconWrapper}>
                    <FileText size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <span className={styles.gradeLinkTitle}>Horários do Circular Unicamp em PDF</span>
                    <span className={styles.gradeLinkDesc}>
                      Consulte a grade completa de viagens entre FT e FCA em dias úteis
                    </span>
                  </div>
                </div>
                <a
                  href="/images/horarios-circular.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.gradeButton}
                  aria-label="Abrir documento com horários do circular em PDF em nova janela"
                >
                  <span>Baixar Horários em PDF</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>

              <div className={styles.gradeLinkBox}>
                <div>
                  <span className={styles.gradeLinkTitle}>Tabelas e Agendamento do Transporte</span>
                  <span className={styles.gradeLinkDesc}>
                    Consulte os horários do circular, faça reservas da Linha 84 e solicite o passe escolar
                  </span>
                </div>
                <div className={styles.buttonGroup}>
                  <Link
                    href="/campus#circular-fretado"
                    className={styles.gradeButton}
                    aria-label="Ver rotas de transporte no campus"
                  >
                    <span>Rotas no Campus</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                  <Link
                    href="/links#categoria-transporte"
                    className={styles.gradeButtonSecondary}
                    aria-label="Ver links de reserva e horários de transporte"
                  >
                    <span>Links de Transporte</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 8: Monitorias e Apoio ao Aluno */}
          <section id="apoio-monitorias-pmu" className={styles.sectionBlock}>
            <div className={styles.blockCard}>
              <div className={styles.cardHeader}>
                <Award size={24} className={styles.headerIcon} />
                <div>
                  <h2 className={styles.cardTitle}>Monitorias PAD e Mentoria PMU</h2>
                  <p className={styles.cardSubtitle}>
                    Apoio pedagógico com veteranos de turmas anteriores e mentoria individual para ingressantes
                  </p>
                </div>
              </div>

              {/* Alerta Crítico: Programação 1 */}
              <div className={styles.prog1CalouroAlert}>
                <div className={styles.prog1CalouroHeader}>
                  <AlertTriangle size={20} className={styles.prog1CalouroIcon} aria-hidden="true" />
                  <h3 className={styles.prog1CalouroTitle}>Atenção Calouro: Programação 1 Tranca a Grade Curricular</h3>
                </div>
                <p className={styles.prog1CalouroText}>
                  Assim como Cálculo 1 é o gargalo clássico nas engenharias, Programação 1 desempenha esse papel na computação da FT. Se reprovar nesta matéria, você tranca a sequência de pré-requisitos para os semestres seguintes, incluindo Programação 2, Estruturas de Dados e Orientação a Objetos. Utilize os plantões semanais de PAD desde as primeiras semanas para sanar dúvidas e praticar código regularmente.
                </p>
              </div>

              <div id="mentoria-pmu-ingressantes" className={styles.rulesGrid}>
                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Plantões de Dúvidas PAD</h3>
                  <p className={styles.ruleText}>
                    O Programa de Apoio Didático conta com alunos de semestres adiantados que oferecem plantões presenciais e virtuais para resolver listas de exercícios e tirar dúvidas teóricas.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Mentoria PMU da DEAPE</h3>
                  <p className={styles.ruleText}>
                    O Programa de Mentoria da Unicamp conecta calouros a veteranos mentores remunerados com bolsa para orientar sobre métodos de estudo, convivência na universidade e rotinas acadêmicas.
                  </p>
                </div>

                <div id="como-ser-monitor" className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Plantões de Pós-Graduação PED</h3>
                  <p className={styles.ruleText}>
                    Monitores mestrandos e doutorandos colaboram com os docentes nas aulas de laboratório e oferecem reforço avançado nas disciplinas fundamentais de exatas e computação.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Como Ser Monitor no Futuro</h3>
                  <p className={styles.ruleText}>
                    Obtendo bom desempenho acadêmico no primeiro ano, você mesmo poderá se candidatar a vagas de monitoria PAD com bolsa ou voluntária nos semestres seguintes.
                  </p>
                </div>
              </div>

              <div className={styles.gradeLinkBox}>
                <div>
                  <span className={styles.gradeLinkTitle}>Regras de Monitoria e Modelo de Contato Formal</span>
                  <span className={styles.gradeLinkDesc}>
                    Veja a tabela de comparação do PAD e use o modelo de e-mail pronto para professores
                  </span>
                </div>
                <div className={styles.buttonGroup}>
                  <Link
                    href="/academico#monitoria-pad"
                    className={styles.gradeButton}
                    aria-label="Acessar regras completas de monitoria na página acadêmico"
                  >
                    <span>Guia de Monitoria PAD</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                  <Link
                    href="/links#categoria-permanencia"
                    className={styles.gradeButtonSecondary}
                    aria-label="Ver links do PMU e DEAPE"
                  >
                    <span>Links de Apoio e PMU</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 9: Bolsas Sociais e Permanência Estudantil */}
          <section id="bolsas-sociais-deape" className={styles.sectionBlock}>
            <div className={styles.blockCard}>
              <div className={styles.cardHeader}>
                <ShieldCheck size={24} className={styles.headerIcon} />
                <div>
                  <h2 className={styles.cardTitle}>Bolsas Sociais e Permanência Estudantil da DEAPE</h2>
                  <p className={styles.cardSubtitle}>
                    Apoio financeiro, moradia e alimentação gratuita para estudantes com vulnerabilidade socioeconômica
                  </p>
                </div>
              </div>

              <div id="moradia-alimentacao-gratis" className={styles.rulesGrid}>
                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Bolsa Auxílio-Social BAS</h3>
                  <p className={styles.ruleText}>
                    Concede benefício financeiro mensal para estudantes que atendem aos critérios socioeconômicos, com dedicação de dez a quinze horas semanais em projetos da faculdade.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Isenção Total no Restaurante</h3>
                  <p className={styles.ruleText}>
                    Bolsistas contemplados pelo programa de permanência estudantil da DEAPE têm isenção integral no café da manhã, almoço e jantar no Restaurante Universitário.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Auxílio-Moradia e Instalação</h3>
                  <p className={styles.ruleText}>
                    Alunos com família residente fora da cidade podem concorrer a subsídio financeiro de moradia estudantil, além de parcela de instalação para apoio aos custos iniciais de mudança.
                  </p>
                </div>

                <div id="inscricao-sig-deape" className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Inscrição no Sistema SIG-DEAPE</h3>
                  <p className={styles.ruleText}>
                    Ingressantes contam com edital próprio aberto no primeiro semestre. A inscrição é feita online com comprovação de renda familiar per capita e despesas.
                  </p>
                </div>
              </div>

              <div className={styles.gradeLinkBox}>
                <div>
                  <span className={styles.gradeLinkTitle}>Critérios de Permanência e Editais Abertos</span>
                  <span className={styles.gradeLinkDesc}>
                    Consulte a tabela de benefícios na página acadêmica e acesse os editais da DEAPE
                  </span>
                </div>
                <div className={styles.buttonGroup}>
                  <Link
                    href="/academico#bolsas-permanencia-deape"
                    className={styles.gradeButton}
                    aria-label="Ver seção detalhada de bolsas de permanência no módulo acadêmico"
                  >
                    <span>Guia de Bolsas Sociais</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                  <a
                    href="https://deape.unicamp.br/processos-seletivos/editais-de-bolsas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.gradeButtonSecondary}
                    aria-label="Acessar editais de bolsas no portal da DEAPE em nova janela"
                  >
                    <span>Editais DEAPE</span>
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 10: Organizações Estudantis e Iniciação Científica */}
          <section id="organizacoes-e-ic" className={styles.sectionBlock}>
            <div className={styles.blockCard}>
              <div className={styles.cardHeader}>
                <Sparkles size={24} className={styles.headerIcon} />
                <div>
                  <h2 className={styles.cardTitle}>Organizações Estudantis e Iniciação Científica</h2>
                  <p className={styles.cardSubtitle}>
                    Desenvolvimento profissional em empresas juniores, ligas acadêmicas e pesquisa científica
                  </p>
                </div>
              </div>

              <div id="iniciacao-cientifica-calouro" className={styles.rulesGrid}>
                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Feira de Entidades</h3>
                  <p className={styles.ruleText}>
                    Nas primeiras semanas de aula, as organizações estudantis montam estandes na faculdade para apresentar projetos e abrir inscrições para novos membros.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Processos Seletivos</h3>
                  <p className={styles.ruleText}>
                    Empresas Juniores como a Atria Jr, ligas como a LICS e Liga DS, e projetos de extensão como AUPE, Nexus Girls e Semeia Code realizam processos seletivos semestrais abertos a calouros.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Iniciação Científica PIBIC</h3>
                  <p className={styles.ruleText}>
                    O edital institucional da Pró-Reitoria de Pesquisa com bolsas do CNPq abre submissões no primeiro semestre entre março e maio, com vigência a partir de agosto.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Como Iniciar Pesquisa Científica</h3>
                  <p className={styles.ruleText}>
                    Identifique as áreas de estudo dos professores da FT, envie um e-mail formal manifestando interesse e agende uma conversa presencial para estruturar o plano de trabalho.
                  </p>
                </div>
              </div>

              <div className={styles.gradeLinkBox}>
                <div>
                  <span className={styles.gradeLinkTitle}>Diretório de Entidades e Guia de Iniciação Científica</span>
                  <span className={styles.gradeLinkDesc}>
                    Conheça todas as ligas da FT e veja o passo a passo completo para conseguir sua IC
                  </span>
                </div>
                <div className={styles.buttonGroup}>
                  <Link
                    href="/academico#iniciacao-cientifica"
                    className={styles.gradeButton}
                    aria-label="Ver guia passo a passo de Iniciação Científica no módulo acadêmico"
                  >
                    <span>Guia Completo de IC</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                  <Link
                    href="/campus#entidades-estudantis"
                    className={styles.gradeButtonSecondary}
                    aria-label="Acessar diretório de organizações estudantis na página de campus"
                  >
                    <span>Diretório de Entidades</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 11: Benefícios Digitais e Ferramentas Gratuitas */}
          <section id="beneficios-tecnologia" className={styles.sectionBlock}>
            <div className={styles.blockCard}>
              <div className={styles.cardHeader}>
                <Cloud size={24} className={styles.headerIcon} />
                <div>
                  <h2 className={styles.cardTitle}>Benefícios Digitais e Ferramentas Gratuitas</h2>
                  <p className={styles.cardSubtitle}>
                    Vantagens exclusivas desbloqueadas imediatamente com o seu e-mail institucional
                  </p>
                </div>
              </div>

              <div id="github-pack-google" className={styles.rulesGrid}>
                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>AWS Builder Center para Alunos</h3>
                  <p className={styles.ruleText}>
                    Cadastro gratuito na comunidade AWS sem necessidade de cartão. Doze meses de AWS Skill Builder Pro, créditos para nuvem e vouchers integrais de certificação por engajamento.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>GitHub Student Developer Pack</h3>
                  <p className={styles.ruleText}>
                    Acesso a dezenas de ferramentas profissionais de programação, IDEs da JetBrains, créditos de hospedagem e domínios gratuitos para seus projetos.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Google Workspace da Unicamp</h3>
                  <p className={styles.ruleText}>
                    Armazenamento institucional em nuvem, ferramentas de edição colaborativa de documentos e integração com o Google Sala de Aula.
                  </p>
                </div>

                <div className={styles.ruleCard}>
                  <h3 className={styles.ruleTitle}>Rede Mundial Eduroam</h3>
                  <p className={styles.ruleText}>
                    Conexão sem fio de alta velocidade nos campi da Unicamp e em milhares de universidades e centros de pesquisa em mais de cem países usando seu login institucional.
                  </p>
                </div>
              </div>

              <div className={styles.gradeLinkBox}>
                <div>
                  <span className={styles.gradeLinkTitle}>Ativar Benefícios de Tecnologia</span>
                  <span className={styles.gradeLinkDesc}>
                    Conheça a trilha da AWS no módulo de carreira e ative suas credenciais gratuitas
                  </span>
                </div>
                <div className={styles.buttonGroup}>
                  <Link
                    href="/carreira#computacao-nuvem"
                    className={styles.gradeButton}
                    aria-label="Ver detalhes dos benefícios AWS no módulo de carreira"
                  >
                    <span>Trilha AWS na Carreira</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                  <a
                    href="https://bit.ly/4w1pxMi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.gradeButtonSecondary}
                    aria-label="Acessar AWS Builder Center para estudantes em nova janela"
                  >
                    <span>Ativar AWS Builder</span>
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
