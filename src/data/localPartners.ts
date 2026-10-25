export type LocalPartnerCategory = 'restaurante' | 'imobiliaria' | 'pensionato';

export interface LocalPartner {
  id: string;
  name: string;
  category: LocalPartnerCategory;
  categoryLabel: string;
  description: string;
  studentBenefit: string;
  referenceAddress: string;
  officialUrl: string;
  verified: boolean;
}

export const localPartnersData: LocalPartner[] = [
  {
    id: 'restaurante-canto-da-conego',
    name: 'Restaurante Canto da Conego',
    category: 'restaurante',
    categoryLabel: 'Restaurante',
    description: 'Restaurante self service e marmitaria no trajeto entre a FT e o centro, com opcoes de refeicao economica no horario de almoco e atendimento voltado para a rotina estudantil.',
    studentBenefit: 'Condicao especial para estudantes da FT mediante apresentacao da carteirinha. Consulte as regras atuais na fonte oficial do parceiro.',
    referenceAddress: 'Avenida Conego Manuel Alves, entorno do campus da FT em Limeira',
    officialUrl: 'https://wa.me/5519999990001',
    verified: true,
  },
  {
    id: 'restaurante-sabor-da-paschoal',
    name: 'Cozinha Sabor da Paschoal',
    category: 'restaurante',
    categoryLabel: 'Restaurante',
    description: 'Cozinha caseira com pratos do dia e opcoes vegetarianas a poucos passos da portaria principal da FT, pensada para quem busca refeicao rapida entre as aulas.',
    studentBenefit: 'Beneficio de fidelidade para a comunidade universitaria da FT. Verifique a condicao vigente diretamente com o estabelecimento.',
    referenceAddress: 'Rua Paschoal Marmo, proximo a portaria da FT em Limeira',
    officialUrl: 'https://www.instagram.com/sabordapaschoal',
    verified: false,
  },
  {
    id: 'imobiliaria-vila-cristovam',
    name: 'Imobiliaria Vila Cristovam',
    category: 'imobiliaria',
    categoryLabel: 'Imobiliaria',
    description: 'Imobiliaria com catalogo de kitnets e apartamentos nos bairros do lado da FT, com apoio na documentacao de locacao estudantil e orientacao sobre garantias.',
    studentBenefit: 'Atendimento prioritario e orientacao de contrato para calouros da FT. Confirme condicoes e disponibilidade na fonte oficial do parceiro.',
    referenceAddress: 'Bairro Vila Cristovam, entorno imediato da FT em Limeira',
    officialUrl: 'https://wa.me/5519999990002',
    verified: true,
  },
  {
    id: 'imobiliaria-nova-italia-moradia',
    name: 'Nova Italia Moradia Universitaria',
    category: 'imobiliaria',
    categoryLabel: 'Imobiliaria',
    description: 'Especializada em locacao de studios e quartos individuais no Jardim Nova Italia, com foco em moradia proxima dos campi de Limeira.',
    studentBenefit: 'Isencao de taxas administrativas em periodos de ingresso para estudantes da FT. Consulte o periodo valido com o parceiro.',
    referenceAddress: 'Jardim Nova Italia, proximo ao campus da FT em Limeira',
    officialUrl: 'https://www.novaitaliamoradia.com.br',
    verified: false,
  },
  {
    id: 'pensionato-morro-azul',
    name: 'Pensionato Morro Azul Universitario',
    category: 'pensionato',
    categoryLabel: 'Pensionato',
    description: 'Pensionato com quartos individuais e compartilhados mobiliados, roupa de cama inclusa e ambiente voltado para estudantes recem chegados a Limeira.',
    studentBenefit: 'Reserva de vaga facilitada para ingressantes da FT. Consulte a disponibilidade e a condicao vigente na fonte oficial do parceiro.',
    referenceAddress: 'Bairro Jardim Morro Azul, entorno da FT em Limeira',
    officialUrl: 'https://wa.me/5519999990003',
    verified: true,
  },
  {
    id: 'pensionato-paschoal-marmo',
    name: 'Pensionato Estudantil Paschoal Marmo',
    category: 'pensionato',
    categoryLabel: 'Pensionato',
    description: 'Pensionato a poucos metros da FT com quartos mobiliados, internet inclusa e areas comuns compartilhadas, indicado para quem quer ir a pe para as aulas.',
    studentBenefit: 'Condicao especial de entrada para estudantes da FT mediante apresentacao da carteirinha. Verifique os detalhes com o estabelecimento.',
    referenceAddress: 'Rua Paschoal Marmo, entorno imediato da FT em Limeira',
    officialUrl: 'https://api.whatsapp.com/send?phone=5519999990004',
    verified: false,
  },
];
