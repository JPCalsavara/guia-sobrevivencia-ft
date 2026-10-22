import { SearchDocument } from '@/data/searchIndex';

export type { SearchDocument };

export interface AiSearchResult {
  answer: string;
  recommendedDocs: SearchDocument[];
}

export interface SearchEngine {
  searchLocal(query: string, limit?: number): SearchDocument[];
  ask(query: string): Promise<AiSearchResult>;
}
