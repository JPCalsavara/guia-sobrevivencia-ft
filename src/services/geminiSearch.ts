import { searchIndex, SearchDocument } from '../data/searchIndex';

export interface AiSearchResult {
  answer: string;
  recommendedDocs: SearchDocument[];
}

const STORAGE_KEY = 'ft_gemini_api_key';

export function getStoredApiKey(): string {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem(STORAGE_KEY) || '';
}

export function setStoredApiKey(key: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, key.trim());
}

export function clearStoredApiKey(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export function performLocalSearch(query: string, limit = 8): SearchDocument[] {
  const cleanQuery = normalize(query.trim());
  if (!cleanQuery) return [];

  const terms = cleanQuery.split(/\s+/).filter(Boolean);

  const scored = searchIndex.map((doc) => {
    let score = 0;
    const titleNorm = normalize(doc.title);
    const summaryNorm = normalize(doc.summary);
    const pageNorm = normalize(doc.page);
    const keywordsNorm = doc.keywords.map(normalize);

    for (const term of terms) {
      if (titleNorm === term) score += 30;
      else if (titleNorm.includes(term)) score += 15;

      if (keywordsNorm.some((k) => k === term)) score += 12;
      else if (keywordsNorm.some((k) => k.includes(term))) score += 8;

      if (pageNorm.includes(term)) score += 6;
      if (summaryNorm.includes(term)) score += 4;

      // Similaridade vetorial pelo vetor de termos do documento
      if (doc.termVector && doc.termVector[term]) {
        score += doc.termVector[term] * 25;
      }
    }

    return { doc, score };
  });

  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.doc);
}

export async function askGeminiSearch(query: string, apiKey: string): Promise<AiSearchResult> {
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

  const response = await fetch(apiUrl, {
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
