import { askGeminiSearch as askGeminiSearchImpl } from './searchEngine/geminiAdapter';
import { AiSearchResult } from './searchEngine/types';

export type { AiSearchResult };
export { performLocalSearch } from './searchEngine/localVectorAdapter';
export { getStoredApiKey, setStoredApiKey, clearStoredApiKey } from './searchEngine/credentialStore';

export function askGeminiSearch(query: string, apiKey: string): Promise<AiSearchResult> {
  return askGeminiSearchImpl(query, apiKey);
}
