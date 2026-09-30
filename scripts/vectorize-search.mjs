import fs from 'fs';
import path from 'path';

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
  'isto', 'aquilo', 'sao', 'era', 'foi', 'tem', 'sobre', 'cada', 'onde', 'pode'
]);

// Sinônimos e termos de ancoragem para subtópicos conhecidos do domínio
const DOMAIN_EXPANSIONS = {
  'transporte-alimentacao': ['bandejao', 'ru', 'cardapio', 'refeicoes', 'almoco', 'jantar', 'creditos', 'carteirinha'],
  'circular-fretado': ['circular', 'fretado', 'intercampi', 'linha 84', 'barao geraldo', 'onibus', 'reserva'],
  'cota-impressao': ['impressao', 'wifiprint', 'dtic', 'cotas', 'paginas', 'scanner', 'laboratorio'],
  'ferramentas-ti': ['dtic', 'laboratorios', 'computadores', 'senhas', 'rede', 'informatica'],
  'curriculo-latex': ['curriculo', 'latex', 'devcelio', 'ats', 'overleaf', 'cv', 'modelo'],
  'fundamentos-ia-canais': ['karpathy', '3blue1brown', 'statquest', 'redes neurais', 'gpt do zero', 'matematica visual', 'llm'],
  'trilhas-aprendizado': ['coursera', 'michigan', 'ciencia de dados', 'pandas', 'scikit learn', 'full stack', 'devops'],
  'bsi-vs-tads': ['bsi', 'tads', 'sistemas de informacao', 'analise e desenvolvimento de sistemas', 'noturno', 'integral'],
  'coeficientes-metricas': ['cr', 'cp', 'coeficiente de rendimento', 'coeficiente de progressao', 'vetores horarios', 'dac'],
  'checklist-formatura': ['formatura', 'colacao de grau', 'integralizacao', 'diploma', 'tcc', 'estagio obrigatorio'],
  'monitoria-pad': ['pad', 'monitoria', 'bolsa pad', 'apoio didatico', 'prg', 'monitor voluntario'],
  'notebooklm-cerebro': ['notebooklm', 'segundo cerebro', 'slides', 'provas antigas', 'simulados', 'moodle'],
  'acabei-de-passar': ['aprovado', 'primeiros passos', 'matricula', 'ra', 'dga', 'dac', 'boas vindas'],
  'unicamp-limeira-ft': ['campus 1', 'fca', 'campus 2', 'localizacao', 'diferenca', 'jardim morro azul'],
  'calourada-recepcao': ['trote', 'integracao', 'kit bixo', 'veteranos', 'recepcao', 'calourada'],
  'salas-aulas-ft': ['salas de aula', 'bloco pa', 'bloco pb', 'laboratorios', 'tic', 'intranet ft'],
  'ambientes-estudo': ['moodle', 'google classroom', 'ead', 'atividades', 'materiais', 'disciplinas'],
  'bandejao-recarga': ['restaurante universitario', 'ru', 'funcamp', 'pix', 'saldo', 'refeicoes'],
  'transporte-circular': ['circular gratuito', 'linha 84', 'intercampi', 'sou limeira', 'onibus'],
  'apoio-monitorias-pmu': ['monitoria', 'pad', 'ped', 'pmu', 'mentoria', 'reforco', 'deape'],
  'bolsas-sociais-deape': ['bas', 'auxilio social', 'moradia', 'deape', 'isencao ru', 'baef'],
  'organizacoes-e-ic': ['entidades', 'ligas', 'atria jr', 'lics', 'semeia code', 'enactus', 'cvu', 'pibic', 'pesquisa'],
  'beneficios-tecnologia': ['aws', 'builder center', 'cloud', 'skill builder', 'certificacao', 'creditos', 'github pack'],
  'categoria-alimentacao': ['bandejao', 'ru', 'cardapio', 'refeicoes', 'funcamp', 'pix', 'saldo', 'carteirinha'],
  'categoria-transporte': ['circular', 'fretado', 'intercampi', 'linha 84', 'onibus', 'reserva', 'sou limeira'],
  'categoria-matricula': ['dac', 'matricula', 'siga', 'edac', 'grade online', 'caderno de horarios'],
  'categoria-aulas': ['moodle', 'google classroom', 'salas', 'pa', 'sa', 'lp', 'tic', 'wifiprint'],
  'categoria-intercambio': ['deri', 'intercambio', 'mobilidade', 'toefl', 'ielts', 'crp'],
  'categoria-iniciacao-cientifica': ['pibic', 'fapesp', 'prp', 'pesquisa', 'iniciacao cientifica', 'bolsa ic'],
  'categoria-permanencia': ['deape', 'bas', 'bolsa auxilio social', 'pmu', 'moradia', 'isencao ru'],
  'categoria-organizacoes': ['centros academicos', 'cat', 'atletica', 'aaatu', 'lics', 'liga ds'],
  'categoria-carreira-tecnologia': ['aws', 'builder center', 'github pack', 'overleaf', 'latex', 'roadmap', 'carreira']
};

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .trim();
}

function tokenize(text) {
  return normalizeText(text)
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP_WORDS.has(w));
}

// Higienizacao estrita conforme ADR 0001 (sem travessao, sem parenteses, sem emojis)
function sanitizeAdr0001(text) {
  return text
    .replace(/[—–]/g, ', ')
    .replace(/[()]/g, ', ')
    .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '')
    .replace(/\s+,/g, ',')
    .replace(/,\s*,/g, ',')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractSectionContent(fileContent, elementId) {
  const match = fileContent.match(new RegExp(`id=["']${elementId}["']`, 'i'));
  if (!match || match.index === undefined) return '';

  const idIndex = match.index;
  const chunk = fileContent.slice(idIndex, idIndex + 4500);

  // Procura proximo bloco id="...
  const nextSectionMatch = chunk.slice(25).search(/id=["'][a-z0-9_-]+["']/i);
  const relevantSlice = nextSectionMatch !== -1 ? chunk.slice(0, nextSectionMatch + 25) : chunk;

  const textOnly = relevantSlice
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{[^}]+\}/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return sanitizeAdr0001(textOnly);
}

function extractTopicItemsFromPage(filePath, pageName, category, basePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const topicArrayMatch = fileContent.match(/const\s+\w+Topics:\s*TopicItem\[\]\s*=\s*(\[[\s\S]*?\]);/);
  if (!topicArrayMatch) {
    console.warn(`Aviso: nenhum TopicItem[] encontrado em ${filePath}`);
    return [];
  }

  let topicsRaw = [];
  try {
    const evaluated = new Function(`return ${topicArrayMatch[1]}`)();
    topicsRaw = evaluated;
  } catch (e) {
    console.error(`Erro ao analisar topics em ${filePath}:`, e.message);
    return [];
  }

  const documents = [];

  for (const topic of topicsRaw) {
    const topicId = topic.id;
    const topicTitle = sanitizeAdr0001(topic.title);
    const topicSectionText = extractSectionContent(fileContent, topicId);

    if (topic.subtopics && topic.subtopics.length > 0) {
      for (const sub of topic.subtopics) {
        const subId = sub.id;
        const subTitle = sanitizeAdr0001(sub.title);

        let subSectionText = '';
        if (subId !== topicId) {
          subSectionText = extractSectionContent(fileContent, subId);
        }

        const combinedText = [subSectionText, topicSectionText].filter(Boolean).join(' ');

        // Resume em uma frase clara para o summary
        let summarySentence = '';
        if (combinedText) {
          const sentences = combinedText.split(/[.!?]+/).map((s) => s.trim()).filter((s) => s.length > 25);
          summarySentence = sentences.length > 0 ? sentences[0] + '.' : '';
        }

        if (!summarySentence || summarySentence.length < 20) {
          summarySentence = `${topicTitle}, foco em ${subTitle} na Faculdade de Tecnologia da Unicamp.`;
        }

        summarySentence = sanitizeAdr0001(summarySentence);

        // Term weights calculation
        const termWeights = {};

        // 1. Termos do subtópico (peso 10)
        tokenize(subTitle).forEach((t) => {
          termWeights[t] = (termWeights[t] || 0) + 10;
        });

        // 2. Termos do tópico pai (peso 7)
        tokenize(topicTitle).forEach((t) => {
          termWeights[t] = (termWeights[t] || 0) + 7;
        });

        // 3. Expansões de domínio (peso 9)
        const expansions = DOMAIN_EXPANSIONS[subId] || DOMAIN_EXPANSIONS[topicId] || [];
        expansions.forEach((phrase) => {
          tokenize(phrase).forEach((t) => {
            termWeights[t] = (termWeights[t] || 0) + 9;
          });
        });

        // 4. Termos da página e categoria (peso 4)
        tokenize(`${pageName} ${category}`).forEach((t) => {
          termWeights[t] = (termWeights[t] || 0) + 4;
        });

        // 5. Termos do conteúdo extraído (peso 2)
        tokenize(combinedText).forEach((t) => {
          termWeights[t] = (termWeights[t] || 0) + 2;
        });

        // Normalização L2 do vetor de termos
        const magnitude = Math.sqrt(Object.values(termWeights).reduce((sum, w) => sum + w * w, 0)) || 1;
        const normalizedVector = {};
        for (const [k, v] of Object.entries(termWeights)) {
          normalizedVector[k] = Math.round((v / magnitude) * 100) / 100;
        }

        // Palavras-chave ordenadas por peso
        const keywords = Object.entries(termWeights)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 10)
          .map(([term]) => term);

        documents.push({
          id: `${category}-${subId}`,
          title: `${topicTitle}, ${subTitle}`,
          subtopic: subTitle,
          page: pageName,
          url: `${basePath}#${subId}`,
          category,
          summary: summarySentence,
          keywords,
          termVector: normalizedVector,
        });
      }
    } else {
      const summarySentence = `${topicTitle}, informações e diretrizes no guia oficial da FT Unicamp.`;
      const termWeights = {};

      tokenize(topicTitle).forEach((t) => {
        termWeights[t] = (termWeights[t] || 0) + 10;
      });
      tokenize(topicSectionText).forEach((t) => {
        termWeights[t] = (termWeights[t] || 0) + 2;
      });
      tokenize(`${pageName} ${category}`).forEach((t) => {
        termWeights[t] = (termWeights[t] || 0) + 4;
      });

      const magnitude = Math.sqrt(Object.values(termWeights).reduce((sum, w) => sum + w * w, 0)) || 1;
      const normalizedVector = {};
      for (const [k, v] of Object.entries(termWeights)) {
        normalizedVector[k] = Math.round((v / magnitude) * 100) / 100;
      }

      const keywords = Object.entries(termWeights)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([term]) => term);

      documents.push({
        id: `${category}-${topicId}`,
        title: topicTitle,
        subtopic: topicTitle,
        page: pageName,
        url: `${basePath}#${topicId}`,
        category,
        summary: summarySentence,
        keywords,
        termVector: normalizedVector,
      });
    }
  }

  return documents;
}

export function generateSearchIndex() {
  console.log('Iniciando vetorizacao de busca baseada nos topicos e subtopicos...');

  const pagesConfig = [
    {
      filePath: path.join(projectRoot, 'src/app/academico/page.tsx'),
      pageName: 'Acadêmico',
      category: 'academico',
      basePath: '/academico',
    },
    {
      filePath: path.join(projectRoot, 'src/app/calouros/page.tsx'),
      pageName: 'Calouros',
      category: 'academico',
      basePath: '/calouros',
    },
    {
      filePath: path.join(projectRoot, 'src/app/campus/page.tsx'),
      pageName: 'Campus',
      category: 'campus',
      basePath: '/campus',
    },
    {
      filePath: path.join(projectRoot, 'src/app/carreira/page.tsx'),
      pageName: 'Carreira',
      category: 'carreira',
      basePath: '/carreira',
    },
    {
      filePath: path.join(projectRoot, 'src/app/estudos-ia/page.tsx'),
      pageName: 'IA',
      category: 'estudos-ia',
      basePath: '/estudos-ia',
    },
    {
      filePath: path.join(projectRoot, 'src/app/links/page.tsx'),
      pageName: 'Links Úteis',
      category: 'links',
      basePath: '/links',
    },
  ];

  const allDocuments = [];
  const seenIds = new Set();

  for (const page of pagesConfig) {
    if (fs.existsSync(page.filePath)) {
      const docs = extractTopicItemsFromPage(page.filePath, page.pageName, page.category, page.basePath);
      for (const d of docs) {
        if (!seenIds.has(d.id)) {
          seenIds.add(d.id);
          allDocuments.push(d);
        }
      }
    }
  }

  console.log(`Extraidos ${allDocuments.length} documentos baseados em topicos e subtopicos.`);

  // Validacao rigorosa contra ADR-0001
  const forbiddenPunctuation = /[—–]/;
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
  category: 'academico' | 'campus' | 'carreira' | 'estudos-ia' | 'links';
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
if (process.argv[1] && process.argv[1].endsWith('vectorize-search.mjs')) {
  try {
    generateSearchIndex();
  } catch (err) {
    console.error('Falha na geracao do indice de busca:', err.message);
    process.exit(1);
  }
}
