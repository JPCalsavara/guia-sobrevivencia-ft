import { getHeaderNavSections } from './contentCatalog';
import type { HeaderNavSection, HeaderSubTopic } from './contentCatalog';

export type { HeaderNavSection, HeaderSubTopic };

export const headerNavSections: HeaderNavSection[] = getHeaderNavSections();
