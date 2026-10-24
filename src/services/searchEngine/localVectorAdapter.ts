import { searchIndex, SearchDocument } from '@/data/searchIndex';

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
