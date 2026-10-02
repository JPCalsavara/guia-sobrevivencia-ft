import { NextResponse } from 'next/server';
import fs from 'fs';
import {
  PesquisaResposta,
  DATA_DIR,
  PESQUISA_FILE,
  INITIAL_BENCHMARK_VOTES,
  readAllVotes,
  computeAggregates
} from '@/lib/pesquisa';

export async function GET() {
  const votes = readAllVotes();
  const aggregates = computeAggregates(votes);
  return NextResponse.json(aggregates);
}

export async function POST(req: Request) {
  try {
    const body: PesquisaResposta = await req.json();

    if (!body.momentoCurso || !body.maiorDesafio || !body.objetivoCarreira) {
      return NextResponse.json({ error: 'Campos obrigatorios ausentes' }, { status: 400 });
    }

    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    let userVotes: PesquisaResposta[] = [];
    if (fs.existsSync(PESQUISA_FILE)) {
      try {
        const raw = fs.readFileSync(PESQUISA_FILE, 'utf8');
        userVotes = JSON.parse(raw);
        if (!Array.isArray(userVotes)) userVotes = [];
      } catch {
        userVotes = [];
      }
    }

    const newVote: PesquisaResposta = {
      momentoCurso: body.momentoCurso,
      maiorDesafio: body.maiorDesafio,
      objetivoCarreira: body.objetivoCarreira,
      timestamp: new Date().toISOString(),
    };

    userVotes.push(newVote);

    if (userVotes.length > 3000) {
      userVotes = userVotes.slice(-3000);
    }

    fs.writeFileSync(PESQUISA_FILE, JSON.stringify(userVotes, null, 2), 'utf8');

    const allVotes = [...INITIAL_BENCHMARK_VOTES, ...userVotes];
    const aggregates = computeAggregates(allVotes);

    return NextResponse.json({ success: true, aggregates });
  } catch {
    return NextResponse.json({ error: 'Erro ao registrar voto na pesquisa' }, { status: 500 });
  }
}
