import type { JourneyStage } from '../types/studentProfile';

// Identificadores dos quatro perfis de publico do portal.
// Mapeiam o momento do estudante a eixos tematicos ja existentes em headerTopics.
export type AudienceProfileId = 'futuro-ingressante' | 'calouro' | 'aluno-regular' | 'formando';

// Ancora destino reaproveitando os href ja declarados em headerNavSections.
export interface AudienceAnchor {
  title: string;
  href: string;
}

export interface AudienceProfile {
  id: AudienceProfileId;
  label: string;
  summary: string;
  themeAxis: string;
  anchors: AudienceAnchor[];
}

export const audienceProfiles: AudienceProfile[] = [
  {
    id: 'futuro-ingressante',
    label: 'Futuro Ingressante',
    summary: 'Quem ainda vai entrar e precisa comparar os cursos e entender o processo de ingresso.',
    themeAxis: 'Ingresso e escolha de curso',
    anchors: [
      {
        title: 'Comparativo Sistemas de Informacao versus TADS',
        href: '/academico#bsi-vs-tads',
      },
      {
        title: 'Matricula Virtual e Primeiros Passos',
        href: '/calouros#acabei-de-passar',
      },
    ],
  },
  {
    id: 'calouro',
    label: 'Calouro',
    summary: 'Recem ingresso que precisa resolver matricula, moradia, bandejao e vida no campus.',
    themeAxis: 'Primeiros passos na graduacao',
    anchors: [
      {
        title: 'Matricula Virtual e Primeiros Passos',
        href: '/calouros#acabei-de-passar',
      },
      {
        title: 'Onde Morar em Limeira e Imobiliarias',
        href: '/calouros#moradia-calouros',
      },
      {
        title: 'Restaurante Universitario e Recarga Pix',
        href: '/calouros#bandejao-recarga',
      },
    ],
  },
  {
    id: 'aluno-regular',
    label: 'Aluno Regular',
    summary: 'Quem esta no meio do curso e foca em grade, coeficientes, pesquisa e primeiras oportunidades.',
    themeAxis: 'Evolucao academica e inicio de carreira',
    anchors: [
      {
        title: 'Coeficientes CR, CP e Vetores Horarios',
        href: '/academico#coeficientes-dac',
      },
      {
        title: 'Iniciacao Cientifica PIBIC e FAPESP',
        href: '/academico#iniciacao-cientifica',
      },
      {
        title: 'Sazonalidade e Feiras de Contratacao',
        href: '/carreira#sazonalidade-estagio',
      },
    ],
  },
  {
    id: 'formando',
    label: 'Formando',
    summary: 'Quem esta na reta final e precisa de formatura, estagio e transicao para o mercado.',
    themeAxis: 'Formatura e transicao para o mercado',
    anchors: [
      {
        title: 'Checklist de Formatura e Colacao Oficial',
        href: '/academico#checklist-formatura',
      },
      {
        title: 'Sazonalidade e Feiras de Contratacao',
        href: '/carreira#sazonalidade-estagio',
      },
      {
        title: 'Comparativo Estagio ou Trainee ou Junior',
        href: '/carreira#trainee-vs-estagio',
      },
    ],
  },
];

// Converte o perfil de publico para o estagio de jornada existente.
// Futuro ingressante ainda nao esta na graduacao e retorna null.
export function audienceToJourneyStage(id: AudienceProfileId): JourneyStage | null {
  switch (id) {
    case 'futuro-ingressante':
      return null;
    case 'calouro':
      return 'calouro';
    case 'aluno-regular':
      return 'meio';
    case 'formando':
      return 'formando';
    default:
      return null;
  }
}
