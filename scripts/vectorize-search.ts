import fs from 'fs';
import path from 'path';
import { contentCatalog } from '../src/data/contentCatalog';
import type { CatalogSection, CatalogTopic, CatalogSubTopic } from '../src/data/contentCatalog';

const projectRoot = process.cwd();

// Lista de stop words em portugues para descarte na vetorizacao
const STOP_WORDS = new Set([
  'de', 'a', 'o', 'que', 'e', 'do', 'da', 'em', 'um', 'para', 'com', 'nao', 'uma',
  'os', 'no', 'se', 'na', 'por', 'mais', 'as', 'dos', 'como', 'mas', 'ao', 'ele',
  'das', 'seu', 'sua', 'ou', 'quando', 'muito', 'nos', 'ja', 'eu', 'tambem',
  'pelo', 'pela', 'ate', 'isso', 'ela', 'entre', 'depois', 'sem', 'mesmo', 'aos',
  'seus', 'quem', 'nas', 'me', 'esse', 'eles', 'voce', 'essa', 'num', 'nem',
  'suas', 'meu', 'minha', 'numa', 'pelos', 'elas', 'qual', 'lhe', 'deles',
  'essas', 'esses', 'pelas', 'este', 'dele', 'voces', 'lhes', 'meus', 'minhas',
  'teu', 'tua', 'teus', 'tuas', 'nosso', 'nossa', 'nossos', 'nossas', 'dela',
  'delas', 'esta', 'estes', 'estas', 'aquele', 'aquela', 'aqueles', 'aquelas',
  'isto', 'aquilo', 'sao', 'era', 'foi', 'tem', 'sobre', 'cada', 'onde', 'pode',
  'style', 'classname', 'class', 'div', 'span', 'section', 'button', 'href', 'onclick', 'target', 'rel', 'src', 'alt'
]);

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .trim();
}

function tokenize(text: string): string[] {
  return normalizeText(text)
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP_WORDS.has(w));
}

// Higienizacao estrita conforme ADR 0001 (sem travessao, sem parenteses, sem emojis)
function sanitizeAdr0001(text: string): string {
  return text
    .replace(/[\u2014\u2013]/g, ', ')
    .replace(/[()]/g, ', ')
    .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '')
    .replace(/\s+,/g, ',')
    .replace(/,\s*,/g, ',')
    .replace(/\s+/g, ' ')
    .trim();
}

interface SearchDocumentOut {
  id: string;
  title: string;
  subtopic: string;
  page: string;
  url: string;
  category: CatalogSection['category'];
  summary: string;
  keywords: string[];
  termVector: Record<string, number>;
}

function buildSubtopicDocument(
  section: CatalogSection,
  topic: CatalogTopic,
  sub: CatalogSubTopic
): SearchDocumentOut {
  const { category, page, basePath } = section;
  const topicTitle = sanitizeAdr0001(topic.title);
  const subTitle = sanitizeAdr0001(sub.title);

  let summarySentence = sanitizeAdr0001(sub.summary);
  if (
    !summarySentence ||
    summarySentence.length < 20 ||
    summarySentence.includes('id=') ||
    summarySentence.includes('style=') ||
    summarySentence.includes('className=') ||
    /[<>{}`$]/.test(summarySentence)
  ) {
    summarySentence = sanitizeAdr0001(
      `${topicTitle}, foco em ${subTitle} na Faculdade de Tecnologia da Unicamp.`
    );
  }

  const termWeights: Record<string, number> = {};

  // 1. Termos do subtopico (peso 10)
  tokenize(subTitle).forEach((t) => {
    termWeights[t] = (termWeights[t] || 0) + 10;
  });

  // 2. Termos do topico pai (peso 7)
  tokenize(topicTitle).forEach((t) => {
    termWeights[t] = (termWeights[t] || 0) + 7;
  });

  // 3. Expansoes de dominio colocalizadas no catalogo (peso 9)
  const expansions = sub.keywords || topic.keywords || [];
  expansions.forEach((phrase) => {
    tokenize(phrase).forEach((t) => {
      termWeights[t] = (termWeights[t] || 0) + 9;
    });
  });

  // 4. Termos da pagina e categoria (peso 4)
  tokenize(`${page} ${category}`).forEach((t) => {
    termWeights[t] = (termWeights[t] || 0) + 4;
  });

  // 5. Termos do resumo canonico (peso 2)
  tokenize(summarySentence).forEach((t) => {
    termWeights[t] = (termWeights[t] || 0) + 2;
  });

  // Normalizacao L2 do vetor de termos
  const magnitude = Math.sqrt(Object.values(termWeights).reduce((sum, w) => sum + w * w, 0)) || 1;
  const normalizedVector: Record<string, number> = {};
  for (const [k, v] of Object.entries(termWeights)) {
    normalizedVector[k] = Math.round((v / magnitude) * 100) / 100;
  }

  // Palavras-chave ordenadas por peso
  const keywords = Object.entries(termWeights)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([term]) => term);

  return {
    id: `${category}-${sub.id}`,
    title: `${topicTitle}, ${subTitle}`,
    subtopic: subTitle,
    page,
    url: `${basePath}#${sub.id}`,
    category,
    summary: summarySentence,
    keywords,
    termVector: normalizedVector,
  };
}

export function generateSearchIndex() {
  console.log('Iniciando vetorizacao de busca a partir do catalogo canonico de conteudo...');

  const allDocuments: SearchDocumentOut[] = [];
  const seenIds = new Set<string>();

  for (const section of contentCatalog) {
    for (const topic of section.topics) {
      for (const sub of topic.subtopics) {
        const doc = buildSubtopicDocument(section, topic, sub);
        if (!seenIds.has(doc.id)) {
          seenIds.add(doc.id);
          allDocuments.push(doc);
        }
      }
    }
  }

  console.log(`Extraidos ${allDocuments.length} documentos baseados no catalogo de conteudo.`);

  // Validacao rigorosa contra ADR-0001
  const forbiddenPunctuation = /[\u2014\u2013]/;
  const parenthesesPattern = /[()]/;
  const emojiPattern = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

  for (const doc of allDocuments) {
    if (forbiddenPunctuation.test(doc.title) || parenthesesPattern.test(doc.title) || emojiPattern.test(doc.title)) {
      throw new Error(`Violacao do ADR 0001 detectada no titulo: "${doc.title}"`);
    }
    if (forbiddenPunctuation.test(doc.summary) || parenthesesPattern.test(doc.summary) || emojiPattern.test(doc.summary)) {
      throw new Error(`Violacao do ADR 0001 detectada no resumo: "${doc.summary}"`);
    }
  }

  // Gera o conteudo TypeScript de src/data/searchIndex.ts
  const outputCode = `export interface SearchDocument {
  id: string;
  title: string;
  subtopic?: string;
  page: string;
  url: string;
  category: 'academico' | 'campus' | 'carreira' | 'estudos-ia' | 'links' | 'duvidas' | 'estatisticas';
  summary: string;
  keywords: string[];
  termVector?: Record<string, number>;
}

export const searchIndex: SearchDocument[] = ${JSON.stringify(allDocuments, null, 2)};
`;

  const targetPath = path.join(projectRoot, 'src/data/searchIndex.ts');
  fs.writeFileSync(targetPath, outputCode, 'utf8');

  console.log(`Arquivo ${targetPath} gerado e vetorizado com sucesso!`);
  console.log(`Total de documentos vetorizados: ${allDocuments.length}`);
}

// Execucao direta se invocado via linha de comando
if (process.argv[1] && process.argv[1].endsWith('vectorize-search.ts')) {
  try {
    generateSearchIndex();
  } catch (err) {
    console.error('Falha na geracao do indice de busca:', (err as Error).message);
    process.exit(1);
  }
}
