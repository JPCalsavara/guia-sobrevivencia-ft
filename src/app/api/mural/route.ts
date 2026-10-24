import { NextResponse } from 'next/server';
import {
  sanitizeText,
  validateQuestionInput,
  validateAnswerInput
} from '../../../lib/mural';

interface MuralRequestPayload {
  tipo?: string;
  titulo?: string;
  descricao?: string;
  autor?: string;
  category?: string;
  categoryLabel?: string;
  conteudo?: string;
  authorRole?: string;
}

export async function POST(req: Request) {
  try {
    const body: MuralRequestPayload = await req.json();
    const tipo = (body.tipo || '').trim();
    const agora = new Date().toISOString();

    if (tipo === 'nova-questao') {
      const titulo = sanitizeText(body.titulo || '');
      const descricao = sanitizeText(body.descricao || '');
      const errors = validateQuestionInput({ titulo, descricao });

      if (errors.length > 0) {
        return NextResponse.json({ error: errors.join('. ') }, { status: 400 });
      }

      const registro = {
        id: `mural_questao_${Date.now()}`,
        tipo,
        titulo,
        descricao,
        autor: body.autor ? sanitizeText(body.autor) : undefined,
        category: (body.category || '').trim(),
        categoryLabel: body.categoryLabel ? sanitizeText(body.categoryLabel) : '',
        upvotes: 0,
        createdAt: agora,
        comments: []
      };

      return NextResponse.json(registro, { status: 200 });
    }

    if (tipo === 'nova-resposta') {
      const conteudo = sanitizeText(body.conteudo || '');
      const errors = validateAnswerInput({ conteudo });

      if (errors.length > 0) {
        return NextResponse.json({ error: errors.join('. ') }, { status: 400 });
      }

      const registro = {
        id: `mural_resposta_${Date.now()}`,
        tipo,
        conteudo,
        authorRole: body.authorRole ? sanitizeText(body.authorRole) : 'Gestao da FT',
        isOfficial: true,
        timestamp: agora
      };

      return NextResponse.json(registro, { status: 200 });
    }

    return NextResponse.json(
      { error: 'Tipo de acao invalido. Use nova-questao ou nova-resposta' },
      { status: 400 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Falha interna ao processar a solicitacao do mural' },
      { status: 500 }
    );
  }
}
