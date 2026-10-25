import { AiSearchResult, SearchDocument, SearchEngine } from './types';
import { performLocalSearch } from './localVectorAdapter';
import { askGeminiSearch } from './geminiAdapter';
import { getStoredApiKey } from './credentialStore';

export function createSearchEngine(): SearchEngine {
  return {
    searchLocal(query: string, limit?: number): SearchDocument[] {
      return performLocalSearch(query, limit);
    },
    ask(query: string): Promise<AiSearchResult> {
      return askGeminiSearch(query, getStoredApiKey());
    },
  };
}
