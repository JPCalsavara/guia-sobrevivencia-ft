'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LatexCodeBlock } from '@/components/LatexCodeBlock/LatexCodeBlock';
import {
  Briefcase,
  Calendar,
  Code2,
  Cloud,
  FileText,
  Linkedin,
  Github,
  Layers
} from 'lucide-react';
import styles from './carreira.module.scss';

export default function CarreiraPage() {
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
            <Briefcase size={16} />
            <span>Carreira, Estágio e Mercado de Tecnologia</span>
          </div>

          <h1 className={styles.pageTitle}>
            Planejamento Profissional, Processos Seletivos e Portfólio Técnico
          </h1>

          <p className={styles.pageDescription}>
            Entenda a sazonalidade de contratações na região, prepare seu currículo em LaTeX otimizado para triagens automáticas e conheça os caminhos para conquistar estágios competitivos.
          </p>
        </motion.div>
      </section>

      {/* Sazonalidade e Feiras de Estágio */}
      <section className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Calendar size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Sazonalidade de Contratações e Feiras de Carreiras</h2>
              <p className={styles.cardSubtitle}>
                O calendário anual das principais empresas de tecnologia e instituições financeiras
              </p>
            </div>
          </div>

          <div className={styles.timelineGrid}>
            <div className={styles.timelineItem}>
              <span className={styles.periodBadge}>Agosto a Outubro</span>
              <h3 className={styles.timelineTitle}>Janela Principal de Contratação</h3>
              <p className={styles.timelineDesc}>
                Período em que ocorrem as maiores feiras de estágio da Unicamp e os eventos da Liestag em Limeira. Grandes contratantes como CI e T em Campinas, além de bancos como Itaú, Bradesco e C6 Bank, abrem suas turmas para início no primeiro trimestre do ano seguinte.
              </p>
            </div>

            <div className={styles.timelineItem}>
              <span className={styles.periodBadge}>Março a Maio</span>
              <h3 className={styles.timelineTitle}>Vagas Remanescentes e Médio Porte</h3>
              <p className={styles.timelineDesc}>
                Abertura de vagas para preenchimento de posições de meio de ano e oportunidades em empresas do polo regional de Limeira, Americana, Piracicaba e Santa Bárbara d Oeste.
              </p>
            </div>

            <div className={styles.timelineItem}>
              <span className={styles.periodBadge}>Requisito Legal</span>
              <h3 className={styles.timelineTitle}>Elegibilidade Institucional</h3>
              <p className={styles.timelineDesc}>
                Pela legislação vigente e pelas normas da DAC, o estudante precisa estar regularmente matriculado e cursando a partir do terceiro semestre letivo para estágios não obrigatórios, respeitando o teto de trinta horas semanais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testes Técnicos */}
      <section className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Code2 size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>O Que é Avaliado nos Testes Técnicos de Entrada</h2>
              <p className={styles.cardSubtitle}>
                Padrões de questões e exercícios práticos exigidos nas primeiras fases de seleção
              </p>
            </div>
          </div>

          <div className={styles.skillsGrid}>
            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Estruturas de Dados Fundamentais</h3>
              <p className={styles.skillDesc}>
                Domínio de tabelas hash e mapas chave-valor para buscas em tempo constante, além de manipulação limpa de matrizes, listas encadeadas e pilhas.
              </p>
            </div>

            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Lógica e Casos Limite</h3>
              <p className={styles.skillDesc}>
                Habilidade em estruturar laços de repetição eficientes, validação de valores nulos, tratamento de coleções vazias e complexidade assintótica de algoritmos.
              </p>
            </div>

            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Programação Orientada a Objetos</h3>
              <p className={styles.skillDesc}>
                Modelagem de classes com responsabilidade única, encapsulamento de regras de negócio e organização de entidades simulando serviços corporativos reais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Currículo em LaTeX */}
      <section className={styles.sectionBlock}>
        <div className={styles.latexHeader}>
          <FileText size={22} className={styles.headerIcon} />
          <div>
            <h2 className={styles.latexTitle}>Modelo Oficial de Currículo Acadêmico em LaTeX</h2>
            <p className={styles.latexSubtitle}>
              Currículo de página única em formato texto estruturado, compatível com leitores automáticos de triagem e adotado por estudantes de computação
            </p>
          </div>
        </div>
        <LatexCodeBlock />
      </section>

      {/* GitHub e LinkedIn */}
      <section className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Layers size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Construção de Presença Profissional: LinkedIn e GitHub</h2>
              <p className={styles.cardSubtitle}>
                Como apresentar sua trajetória técnica de forma objetiva sem clichês vazios
              </p>
            </div>
          </div>

          <div className={styles.presenceGrid}>
            <div className={styles.presenceCard}>
              <div className={styles.presenceHeader}>
                <Linkedin size={20} className={styles.linkedinIcon} />
                <h3 className={styles.presenceTitle}>Diretrizes para o LinkedIn</h3>
              </div>
              <ul className={styles.presenceList}>
                <li>Utilize título objetivo focado em tecnologias praticadas, por exemplo: Graduando em Sistemas de Informação na Unicamp, foco em Java, Spring Boot e React.</li>
                <li>Descreva projetos acadêmicos detalhando o problema resolvido, as ferramentas utilizadas e os resultados alcançados.</li>
                <li>Conecte-se com veteranos da FT, membros da Atria Jr., Liestag e recrutadores das empresas que participam das feiras universitárias.</li>
              </ul>
            </div>

            <div className={styles.presenceCard}>
              <div className={styles.presenceHeader}>
                <Github size={20} className={styles.githubIcon} />
                <h3 className={styles.presenceTitle}>Diretrizes para o GitHub</h3>
              </div>
              <ul className={styles.presenceList}>
                <li>Mantenha dois ou três repositórios principais fixados no perfil, cada um com instruções claras de instalação e execução local no arquivo README.</li>
                <li>Inclua capturas de tela funcionais e diagramas simples de arquitetura nos repositórios destacados.</li>
                <li>Evite subir projetos compostos apenas por cópias literais de exercícios de aula sem documentação ou testes.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trilhas e Computação em Nuvem */}
      <section className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Cloud size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Computação em Nuvem na Graduação e Vouchers Gratuitos</h2>
              <p className={styles.cardSubtitle}>
                Aproveite os convênios universitários para estudar tecnologias de nuvem sem custo
              </p>
            </div>
          </div>

          <div className={styles.cloudGrid}>
            <div className={styles.cloudCard}>
              <h3 className={styles.cloudTitle}>Programas Acadêmicos Disponíveis</h3>
              <p className={styles.cloudText}>
                Com seu email institucional terminado em dac unicamp br, você tem acesso a programas como AWS Educate e Google Cloud Innovators, que disponibilizam créditos para laboratórios práticos na nuvem sem necessidade de cadastrar cartão de crédito.
              </p>
            </div>

            <div className={styles.cloudCard}>
              <h3 className={styles.cloudTitle}>O Valor Real de Certificações Iniciais</h3>
              <p className={styles.cloudText}>
                Provas conceituais de entrada como AWS Cloud Practitioner ajudam na passagem por filtros iniciais de triagem em consultorias. Entretanto, o que consolida contratações técnicas é a criação de aplicações reais conteinerizadas com Docker e publicadas na nuvem.
              </p>
            </div>

            <div className={styles.cloudCard}>
              <h3 className={styles.cloudTitle}>Nunca Pague em Dólar por Provas Iniciais</h3>
              <p className={styles.cloudText}>
                Estudantes não devem gastar recursos próprios com taxas de certificações básicas. Campanhas universitárias, maratonas acadêmicas e cursos preparatórios no Coursera for Campus com frequência distribuem vouchers integrais de gratuidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trilhas Tecnológicas */}
      <section className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <div className={styles.cardHeader}>
            <Code2 size={22} className={styles.headerIcon} />
            <div>
              <h2 className={styles.cardTitle}>Trilhas de Aprendizado: Engenharia de Software versus Dados</h2>
              <p className={styles.cardSubtitle}>
                Escolha uma direção técnica clara para aprofundar seus estudos extracurriculares
              </p>
            </div>
          </div>

          <div className={styles.skillsGrid}>
            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Trilha Dev: TypeScript First</h3>
              <p className={styles.skillDesc}>
                Unifique o ecossistema frontend e backend com a mesma sintaxe tipada. Backend em Node com Fastify, NestJS ou Express, e frontend com React e Next para produtos digitais ou Angular para sistemas corporativos tradicionais e bancos.
              </p>
            </div>

            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Trilha Dados e IA: Python First</h3>
              <p className={styles.skillDesc}>
                Manipulação de dados estruturados com Pandas e NumPy, modelos preditivos com Scikit-Learn e redes neurais com PyTorch, disponibilizando modelos através de APIs assíncronas com FastAPI e validação de dados com Pydantic.
              </p>
            </div>

            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Roteiros Visuais no roadmap.sh</h3>
              <p className={styles.skillDesc}>
                Utilize o portal comunitário roadmap.sh para consultar guias visuais completos passo a passo para cada papel técnico, compreendendo quais conceitos estudar em sequência lógica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Canais Recomendados */}
      <section className={styles.sectionBlock}>
        <div className={styles.blockCard}>
          <h2 className={styles.cardTitle}>Canais de Tecnologia Recomendados</h2>
          <p className={styles.cardSubtitle}>
            Criadores de conteúdo que abordam fundamentos reais de computação, cultura de engenharia e preparação
          </p>

          <div className={styles.skillsGrid}>
            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Canais Nacionais</h3>
              <p className={styles.skillDesc}>
                Fabio Akita para fundamentos sólidos e história da computação, Augusto Galego para arquitetura de sistemas e entrevistas técnicas, Mano Deyvin para cultura corporativa e rotina profissional, e Fernanda Kipper para desenvolvimento prático.
              </p>
            </div>

            <div className={styles.skillItem}>
              <h3 className={styles.skillTitle}>Canais Internacionais</h3>
              <p className={styles.skillDesc}>
                ByteByteGo para diagramas e casos reais de sistemas distribuídos, Hussein Nasser para redes e engenharia de bancos de dados, ThePrimeagen para ferramentas e cultura de terminal, e NeetCode para estruturas de dados.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
