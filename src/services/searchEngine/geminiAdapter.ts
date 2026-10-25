import { searchIndex, SearchDocument } from '@/data/searchIndex';
import { AiSearchResult } from './types';
import { performLocalSearch } from './localVectorAdapter';

type FetchLike = typeof globalThis.fetch;

export async function askGeminiSearch(
  query: string,
  apiKey: string,
  fetchImpl: FetchLike = globalThis.fetch
): Promise<AiSearchResult> {
  const trimmedKey = apiKey.trim();
  if (!trimmedKey) {
    throw new Error('Chave de API do Gemini não configurada.');
  }

  // Prepara catalogo resumido para injetar no contexto da LLM
  const catalogContext = searchIndex
    .map(
      (item) =>
        `ID: ${item.id}\nTitulo: ${item.title}\nPagina: ${item.page}\nURL: ${item.url}\nResumo: ${item.summary}\nPalavras-chave: ${item.keywords.join(', ')}`
    )
    .join('\n---\n');

  const systemInstruction = `Voce e o assistente oficial do Guia de Sobrevivencia da Faculdade de Tecnologia da Unicamp em Limeira.
Sua missao e responder as perguntas dos estudantes exclusivamente com base no catalogo oficial do guia fornecido abaixo.

Regra estrita de estilo conforme norma ADR 0001:
Nunca utilize travessoes de qualquer tipo, nunca utilize parenteses e nunca utilize emojis na sua resposta. Use virgulas, pontos e virgulas e pontos finais para estruturar oracoes e detalhamentos.

Catalogo do Guia FT Unicamp:
${catalogContext}

Formato da sua resposta:
Responda de forma direta e objetiva em um ou dois paragrafos. Ao final, liste na ultima linha os IDs dos documentos relevantes no seguinte formato:
DOCUMENTOS_RELEVANTES: id1, id2`;

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${trimmedKey}`;

  const payload = {
    contents: [
      {
        role: 'user',
        parts: [{ text: `${systemInstruction}\n\nPergunta do estudante: ${query}` }],
      },
    ],
    generationConfig: {
      temperature: 0.2,
      maxOutputTokens: 600,
    },
  };

  const response = await fetchImpl(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const msg = errorData?.error?.message || `Erro na requisicao: status ${response.status}`;
    throw new Error(msg);
  }

  const data = await response.json();
  const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Nenhuma resposta gerada.';

  // Extrai IDs relevantes se presentes
  let cleanAnswer = rawText;
  const recommendedDocs: SearchDocument[] = [];

  const marker = 'DOCUMENTOS_RELEVANTES:';
  if (rawText.includes(marker)) {
    const parts = rawText.split(marker);
    cleanAnswer = parts[0].trim();
    const idsPart = parts[1] || '';
    const ids = idsPart
      .split(',')
      .map((id: string) => id.trim())
      .filter(Boolean);

    ids.forEach((id: string) => {
      const found = searchIndex.find((doc) => doc.id === id);
      if (found && !recommendedDocs.some((d) => d.id === found.id)) {
        recommendedDocs.push(found);
      }
    });
  }

  // Se nao vieram IDs explicitos, faz fallback para busca local dos termos da pergunta
  if (recommendedDocs.length === 0) {
    const fallbackMatches = performLocalSearch(query, 3);
    recommendedDocs.push(...fallbackMatches);
  }

  return {
    answer: cleanAnswer,
    recommendedDocs,
  };
}
