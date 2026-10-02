import fs from 'fs';
import path from 'path';

export interface PesquisaResposta {
  momentoCurso: 'calouro' | 'meio' | 'formando';
  maiorDesafio: 'materias_exatas' | 'transporte_moradia' | 'conciliacao_estagio';
  objetivoCarreira: 'mercado_bigtech' | 'startups_negocios' | 'posgrad_pesquisa';
  timestamp?: string;
}

export interface PesquisaAggregates {
  totalVotos: number;
  momentoCurso: Record<string, { count: number; pct: number; label: string }>;
  maiorDesafio: Record<string, { count: number; pct: number; label: string }>;
  objetivoCarreira: Record<string, { count: number; pct: number; label: string }>;
}

export const DATA_DIR = path.resolve(process.cwd(), 'data');
export const PESQUISA_FILE = path.join(DATA_DIR, 'pesquisa_respostas.json');

export const MOMENTO_LABELS: Record<string, string> = {
  calouro: 'Calouro: 1º e 2º semestres',
  meio: 'Meio de curso: 3º ao 6º semestres',
  formando: 'Formando: 7º e 8º semestres',
};

export const DESAFIO_LABELS: Record<string, string> = {
  materias_exatas: 'Cálculo e Programação 1',
  transporte_moradia: 'Transporte e Moradia em Limeira',
  conciliacao_estagio: 'Conciliação entre Estudos e Estágio',
};

export const CARREIRA_LABELS: Record<string, string> = {
  mercado_bigtech: 'Mercado Corporativo e Big Techs',
  startups_negocios: 'Empreendedorismo e Startups',
  posgrad_pesquisa: 'Pós-Graduação e Pesquisa Acadêmica',
};

// Dados representativos de partida para o termômetro inicial da FT
export const INITIAL_BENCHMARK_VOTES: PesquisaResposta[] = [
  { momentoCurso: 'calouro', maiorDesafio: 'materias_exatas', objetivoCarreira: 'mercado_bigtech' },
  { momentoCurso: 'calouro', maiorDesafio: 'transporte_moradia', objetivoCarreira: 'mercado_bigtech' },
  { momentoCurso: 'calouro', maiorDesafio: 'materias_exatas', objetivoCarreira: 'startups_negocios' },
  { momentoCurso: 'meio', maiorDesafio: 'materias_exatas', objetivoCarreira: 'mercado_bigtech' },
  { momentoCurso: 'meio', maiorDesafio: 'conciliacao_estagio', objetivoCarreira: 'mercado_bigtech' },
  { momentoCurso: 'meio', maiorDesafio: 'conciliacao_estagio', objetivoCarreira: 'posgrad_pesquisa' },
  { momentoCurso: 'meio', maiorDesafio: 'transporte_moradia', objetivoCarreira: 'startups_negocios' },
  { momentoCurso: 'formando', maiorDesafio: 'conciliacao_estagio', objetivoCarreira: 'mercado_bigtech' },
  { momentoCurso: 'formando', maiorDesafio: 'conciliacao_estagio', objetivoCarreira: 'mercado_bigtech' },
  { momentoCurso: 'formando', maiorDesafio: 'conciliacao_estagio', objetivoCarreira: 'posgrad_pesquisa' },
];

export function readAllVotes(): PesquisaResposta[] {
  if (!fs.existsSync(PESQUISA_FILE)) {
    return INITIAL_BENCHMARK_VOTES;
  }
  try {
    const raw = fs.readFileSync(PESQUISA_FILE, 'utf8');
    const parsed: PesquisaResposta[] = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return INITIAL_BENCHMARK_VOTES;
    }
    return [...INITIAL_BENCHMARK_VOTES, ...parsed];
  } catch {
    return INITIAL_BENCHMARK_VOTES;
  }
}

export function computeAggregates(votes: PesquisaResposta[]): PesquisaAggregates {
  const total = votes.length || 1;

  const countMomento: Record<string, number> = { calouro: 0, meio: 0, formando: 0 };
  const countDesafio: Record<string, number> = { materias_exatas: 0, transporte_moradia: 0, conciliacao_estagio: 0 };
  const countCarreira: Record<string, number> = { mercado_bigtech: 0, startups_negocios: 0, posgrad_pesquisa: 0 };

  votes.forEach((v) => {
    if (countMomento[v.momentoCurso] !== undefined) countMomento[v.momentoCurso] += 1;
    if (countDesafio[v.maiorDesafio] !== undefined) countDesafio[v.maiorDesafio] += 1;
    if (countCarreira[v.objetivoCarreira] !== undefined) countCarreira[v.objetivoCarreira] += 1;
  });

  const buildGroup = (counts: Record<string, number>, labels: Record<string, string>) => {
    const res: Record<string, { count: number; pct: number; label: string }> = {};
    for (const [key, count] of Object.entries(counts)) {
      res[key] = {
        count,
        pct: Math.round((count / total) * 100),
        label: labels[key] || key,
      };
    }
    return res;
  };

  return {
    totalVotos: total,
    momentoCurso: buildGroup(countMomento, MOMENTO_LABELS),
    maiorDesafio: buildGroup(countDesafio, DESAFIO_LABELS),
    objetivoCarreira: buildGroup(countCarreira, CARREIRA_LABELS),
  };
}
