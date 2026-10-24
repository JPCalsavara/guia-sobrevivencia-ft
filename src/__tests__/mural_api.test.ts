import { describe, it, expect } from 'vitest';
import { POST } from '../app/api/mural/route';

function buildRequest(body: unknown): Request {
  return new Request('http://localhost/api/mural', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
}

describe('Mural de Dúvidas: Rota de API', () => {
  it('retorna 400 para payload vazio', async () => {
    const response = await POST(buildRequest({}));
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.error).toBeTruthy();
    expect(data.error).not.toMatch(/[()]/);
  });

  it('retorna 400 para questão abaixo do mínimo', async () => {
    const response = await POST(
      buildRequest({ tipo: 'nova-questao', titulo: 'ab', descricao: 'curta' })
    );
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.error).toBeTruthy();
    expect(data.error).not.toMatch(/[()]/);
  });

  it('retorna 200 com registro higienizado para questão válida', async () => {
    const response = await POST(
      buildRequest({
        tipo: 'nova-questao',
        titulo: 'Titulo valido com (parenteses)',
        descricao: 'Descricao com mais de dez caracteres e — travessao',
        category: 'academico',
        categoryLabel: 'Acadêmico e Disciplinas'
      })
    );
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.id).toContain('mural_questao_');
    expect(data.titulo).not.toMatch(/[—–()]/);
    expect(data.descricao).not.toMatch(/[—–()]/);
    expect(data.upvotes).toBe(0);
    expect(typeof data.createdAt).toBe('string');
  });

  it('retorna 400 para resposta abaixo do mínimo', async () => {
    const response = await POST(
      buildRequest({ tipo: 'nova-resposta', conteudo: 'curta' })
    );
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.error).toBeTruthy();
    expect(data.error).not.toMatch(/[()]/);
  });

  it('retorna 200 com registro higienizado para resposta válida', async () => {
    const response = await POST(
      buildRequest({
        tipo: 'nova-resposta',
        conteudo: 'Resposta oficial com (parenteses) e tamanho suficiente',
        authorRole: 'Coordenadoria da FT'
      })
    );
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.id).toContain('mural_resposta_');
    expect(data.conteudo).not.toMatch(/[—–()]/);
    expect(data.isOfficial).toBe(true);
    expect(typeof data.timestamp).toBe('string');
  });

  it('retorna 400 para tipo de ação inválido', async () => {
    const response = await POST(buildRequest({ tipo: 'desconhecido' }));
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.error).toBeTruthy();
    expect(data.error).not.toMatch(/[()]/);
  });
});
