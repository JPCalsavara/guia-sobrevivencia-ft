'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  MapPin,
  Maximize2,
  X,
  Compass,
  Building,
  Utensils,
  Bus,
  Info
} from 'lucide-react';
import styles from './MapMoradia.module.scss';

interface RegionData {
  id: string;
  name: string;
  badge: string;
  tagColor: 'blue' | 'green' | 'amber' | 'purple';
  description: string;
  ftDistance: string;
  fcaDistance: string;
  bandecoAccess: string;
  transportInfo: string;
  typicalProfile: string;
  priceRange: string;
}

const REGIONS: RegionData[] = [
  {
    id: 'kitnets',
    name: 'Polo de Kitnets e Studios',
    badge: 'Lado FCA e Cidade Universitária',
    tagColor: 'blue',
    description: 'Área concentrada nos bairros Jardim Cidade Universitária I e II e Chácara Antonieta, próxima à Avenida Cônego Manoel Alves e ao campus da FCA.',
    ftDistance: 'Cerca de dez a quinze minutos de ônibus circular gratuito ou bicicleta.',
    fcaDistance: 'Acesso imediato a pé em menos de cinco minutos.',
    bandecoAccess: 'Excelente proximidade com o Restaurante Universitário da FCA.',
    transportInfo: 'Ponto do circular gratuito da Unicamp e linhas municipais na porta.',
    typicalProfile: 'Estudantes que buscam privacidade total para os estudos ou que dividem kitnets duplas.',
    priceRange: 'R$ 800 a R$ 2.000 mensais conforme a mobília e a conservação.',
  },
  {
    id: 'predios',
    name: 'Corredor de Prédios e Edifícios',
    badge: 'Rua José Paolillo e Torres Vizinhas',
    tagColor: 'purple',
    description: 'Corredor residencial com edifícios como o Bahamas e condomínios fechados de médio e grande porte ligando a região universitária à malha central.',
    ftDistance: 'Aproximadamente doze minutos via circular gratuito ou cinco minutos de carro.',
    fcaDistance: 'Caminhada rápida de cerca de três a sete minutos até as salas de aula.',
    bandecoAccess: 'Permite bandecar a pé no campus da FCA todos os dias úteis.',
    transportInfo: 'Corredor direto para embarque no transporte circular da universidade.',
    typicalProfile: 'Grupos de amigos da FT ou FCA que dividem apartamento de dois a três dormitórios.',
    priceRange: 'R$ 500 a R$ 900 por morador em apartamentos compartilhados.',
  },
  {
    id: 'pensionatos',
    name: 'Bairros Tradicionais e Pensionatos',
    badge: 'Entorno Imediato da FT e Morro Azul',
    tagColor: 'green',
    description: 'Vila Cristovam, Jardim Morro Azul, Vila Anita e imediações da Praça Doutor Milton Silveira e Colégio Técnico COTIL, colados à portaria da FT.',
    ftDistance: 'Acesso a pé imediato entre dois a oito minutos de caminhada tranquila.',
    fcaDistance: 'Cerca de quinze minutos utilizando o transporte circular gratuito.',
    bandecoAccess: 'Acesso a pé ao Restaurante Universitário da FT nos almoços e jantares de dias úteis.',
    transportInfo: 'Dispensa gastos com transporte diário para frequentar as aulas na FT.',
    typicalProfile: 'Estudantes que priorizam acordar perto das aulas, economizar em transporte e desfrutar de quartos individuais ou duplos prontos.',
    priceRange: 'R$ 400 a R$ 750 mensais com água, luz e internet frequentemente inclusas.',
  },
  {
    id: 'morarmais',
    name: 'Complexo Residencial Morar Mais',
    badge: 'Avenida Fabrício Vampré e Anel Viário',
    tagColor: 'amber',
    description: 'Grande condomínio vertical fechado com infraestrutura de lazer, portaria vinte e quatro horas e acesso ágil à rodovia e grandes supermercados.',
    ftDistance: 'Cerca de oito minutos de carro ou corrida compartilhada, ou quinze minutos de ônibus.',
    fcaDistance: 'Aproximadamente dez minutos de condução até o campus da FCA.',
    bandecoAccess: 'Requer planejamento logístico ou transporte para as refeições universitárias.',
    transportInfo: 'Ideal para quem dispõe de veículo próprio, bicicleta ou divide corridas por aplicativo.',
    typicalProfile: 'Grupos de veteranos e pós-graduandos que buscam segurança de condomínio fechado e lazer.',
    priceRange: 'R$ 1.500 a R$ 2.500 de custo total mensal dividido entre os ocupantes.',
  },
];

export function MapMoradia() {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('kitnets');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeRegion = REGIONS.find((r) => r.id === selectedRegionId) || REGIONS[0];

  return (
    <div className={styles.mapCardContainer}>
      {/* Cabeçalho do Bloco */}
      <div className={styles.header}>
        <div className={styles.headerTitleGroup}>
          <div className={styles.iconCircle}>
            <Compass size={22} aria-hidden="true" />
          </div>
          <div>
            <span className={styles.sectionBadge}>Geografia Universitária</span>
            <h2 className={styles.title}>Mapa Territorial de Moradia e Habitação em Limeira</h2>
            <p className={styles.subtitle}>
              Localização visual dos principais polos de kitnets, pensionatos, prédios e condomínios em relação aos campi da FT e da FCA
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className={styles.fullscreenBtn}
          aria-label="Abrir mapa em tela cheia com zoom"
          title="Visualizar mapa em alta resolução"
        >
          <Maximize2 size={16} aria-hidden="true" />
          <span>Ver em Tela Cheia</span>
        </button>
      </div>

      {/* Linha Superior: Mapa à esquerda e Seletor de regiões à direita */}
      <div className={styles.topRow}>
        <div className={styles.mapCol}>
          <div
            className={styles.imageWrapper}
            onClick={() => setIsModalOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsModalOpen(true);
              }
            }}
            aria-label="Clique para ampliar o mapa territorial de moradia"
          >
            <Image
              src="/images/mapa-região-unicamp.png"
              alt="Mapa territorial de Limeira destacando as áreas de kitnets, prédios, pensionatos e condomínio Morar Mais em relação à FT e FCA"
              width={1101}
              height={888}
              priority
              className={styles.mapImg}
            />
            <div className={styles.imageOverlayBadge}>
              <Maximize2 size={14} aria-hidden="true" />
              <span>Clique para ampliar com zoom</span>
            </div>
          </div>
          <span className={styles.imageCaption}>
            Demarcações circulares mostram as concentrações de cada polo habitacional ao redor dos campi da FT e da FCA.
          </span>
        </div>

        <div className={styles.selectorCol}>
          <div className={styles.selectorCard}>
            <span className={styles.selectorLabel}>Selecione uma região demarcada no mapa:</span>
            <div className={styles.pillsList} role="tablist" aria-label="Selecione a região no mapa para inspecionar">
              {REGIONS.map((region) => {
                const isSelected = region.id === selectedRegionId;
                return (
                  <button
                    key={region.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedRegionId(region.id)}
                    className={`${styles.regionPill} ${isSelected ? styles.active : ''} ${styles[region.tagColor]}`}
                  >
                    <div className={styles.pillIconWrap}>
                      <MapPin size={16} aria-hidden="true" />
                    </div>
                    <div className={styles.pillTextGroup}>
                      <span className={styles.pillName}>{region.name}</span>
                      <span className={styles.pillBadge}>{region.badge}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Linha Inferior: Descrição e Ficha Logística Completa em Largura Total */}
      <div className={styles.bottomRow}>
        <div className={`${styles.regionDetailCard} ${styles[activeRegion.tagColor]}`}>
          <div className={styles.detailHeader}>
            <div className={styles.detailTitleGroup}>
              <span className={styles.detailBadge}>{activeRegion.badge}</span>
              <h3 className={styles.detailTitle}>{activeRegion.name}</h3>
            </div>
            <div className={styles.priceTag}>
              <span className={styles.priceLabel}>Faixa Estimada</span>
              <span className={styles.priceValue}>{activeRegion.priceRange}</span>
            </div>
          </div>

          <p className={styles.detailDesc}>{activeRegion.description}</p>

          <div className={styles.metricsGrid}>
            <div className={styles.metricItem}>
              <div className={styles.metricIconWrap}>
                <Building size={16} aria-hidden="true" />
              </div>
              <div className={styles.metricContent}>
                <strong className={styles.metricTitle}>Distância para a FT:</strong>
                <span className={styles.metricText}>{activeRegion.ftDistance}</span>
              </div>
            </div>

            <div className={styles.metricItem}>
              <div className={styles.metricIconWrap}>
                <Compass size={16} aria-hidden="true" />
              </div>
              <div className={styles.metricContent}>
                <strong className={styles.metricTitle}>Distância para a FCA:</strong>
                <span className={styles.metricText}>{activeRegion.fcaDistance}</span>
              </div>
            </div>

            <div className={styles.metricItem}>
              <div className={styles.metricIconWrap}>
                <Utensils size={16} aria-hidden="true" />
              </div>
              <div className={styles.metricContent}>
                <strong className={styles.metricTitle}>Acesso ao Bandejão:</strong>
                <span className={styles.metricText}>{activeRegion.bandecoAccess}</span>
              </div>
            </div>

            <div className={styles.metricItem}>
              <div className={styles.metricIconWrap}>
                <Bus size={16} aria-hidden="true" />
              </div>
              <div className={styles.metricContent}>
                <strong className={styles.metricTitle}>Transporte e Circular:</strong>
                <span className={styles.metricText}>{activeRegion.transportInfo}</span>
              </div>
            </div>

            <div className={`${styles.metricItem} ${styles.metricFullWidth}`}>
              <div className={styles.metricIconWrap}>
                <Info size={16} aria-hidden="true" />
              </div>
              <div className={styles.metricContent}>
                <strong className={styles.metricTitle}>Perfil de Morador:</strong>
                <span className={styles.metricText}>{activeRegion.typicalProfile}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Visualização em Tela Cheia */}
      {isModalOpen && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Visualização em tela cheia do mapa territorial de moradia"
        >
          <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalTitleGroup}>
                <Compass size={20} aria-hidden="true" />
                <h3 className={styles.modalTitle}>Mapa de Moradia e Bairros Universitários em Limeira</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className={styles.closeModalBtn}
                aria-label="Fechar visualização em tela cheia"
              >
                <X size={20} />
              </button>
            </div>

            <div className={styles.modalImageWrapper}>
              <Image
                src="/images/mapa-região-unicamp.png"
                alt="Mapa ampliado com detalhes de kitnets, prédios, pensionatos e Morar Mais em Limeira"
                width={1400}
                height={1000}
                className={styles.modalMapImg}
              />
            </div>

            <div className={styles.modalFooter}>
              <span>Demarcações circulares em vermelho mostram as concentrações de cada modelo habitacional ao redor da FT e da FCA.</span>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className={styles.closeFooterBtn}
              >
                Fechar Visualização
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
