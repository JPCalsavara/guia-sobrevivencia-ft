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
  'isto', 'aquilo', 'sao', 'era', 'foi', 'tem', 'sobre', 'cada', 'onde', 'pode',
  'style', 'classname', 'class', 'div', 'span', 'section', 'button', 'href', 'onclick', 'target', 'rel', 'src', 'alt'
]);

// Sinônimos e termos de ancoragem para subtópicos conhecidos do domínio
const DOMAIN_EXPANSIONS = {
  'transporte-alimentacao': ['bandejao', 'ru', 'cardapio', 'refeicoes', 'almoco', 'jantar', 'creditos', 'carteirinha'],
  'circular-fretado': ['circular', 'fretado', 'intercampi', 'linha 84', 'barao geraldo', 'onibus', 'reserva'],
  'cota-impressao': ['impressao', 'wifiprint', 'dtic', 'cotas', 'paginas', 'scanner', 'laboratorio'],
  'ferramentas-ti': ['dtic', 'laboratorios', 'computadores', 'senhas', 'rede', 'informatica'],
  'curriculo-latex': ['curriculo', 'latex', 'devcelio', 'ats', 'overleaf', 'cv', 'modelo'],
  'maratona-programacao': ['maratona', 'icpc', 'sbc', 'beecrowd', 'codeforces', 'leetcode', 'programacao competitiva', 'algoritmos', 'estruturas de dados'],
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
  'categoria-carreira-tecnologia': ['aws', 'builder center', 'github pack', 'overleaf', 'latex', 'roadmap', 'carreira'],
  'duvidas-matricula-dac': ['duvidas', 'perguntas', 'faq', 'dac', 'trancamento', 'desistencia', 'coeficientes', 'cr', 'cp'],
  'duvidas-reprovacao-prerequisitos': ['reprovacao', 'prerequisito', 'grade', 'recuperacao', 'integralizacao'],
  'duvidas-bandejao-transporte': ['bandejao', 'ru', 'saldo', 'pix', 'funcamp', 'circular', 'linha 84', 'intercampi'],
  'duvidas-moradia-auxilios': ['moradia', 'republicas', 'kitnets', 'aluguel', 'sae', 'deape', 'bolsa bas', 'isencao ru'],
  'duvidas-estagio-contratos': ['estagio', 'contrato', 'termo de compromisso', 'horas', 'bsi', 'tads', 'comissao de estagios'],
  'duvidas-formatura-colacao': ['formatura', 'colacao de grau', 'diploma', 'baile', 'beca', 'mec', 'dac'],
  'mandar-duvida': ['mandar duvida', 'enviar pergunta', 'contato', 'google chat', 'email', 'duvidas frequentes', 'suporte'],
  'trainee-vs-estagio': ['trainee', 'estagio', 'clt', 'junior', 'salario executivo', 'processo seletivo trainee'],
  'comparativo-estagio-trainee-junior': ['comparativo estagio trainee', 'diferenca estagio clt', 'salario trainee', 'remuneracao', 'carga horaria'],
  'processos-seletivos-trainee': ['processo seletivo trainee', 'dinamica de grupo', 'business case', 'painel executivo', 'fit cultural'],
  'hackathons-bootcamps': ['hackathon', 'maratona de programacao', 'bootcamp', 'apple developer academy', 'squads'],
  'guia-hackathons-squads': ['guia hackathon', 'como montar squad', 'equipe multidisciplinar', 'pitch', 'prototipo'],
  'hackathon-itau-agentes': ['hackathon itau', 'batalha de agentes', 'inteligencia artificial', 'agentes autonomos', 'itau tecnologia'],
  'apple-developer-academy': ['apple developer academy', 'instituto eldorado', 'campinas', 'swift', 'swiftui', 'ios', 'macbook'],
  'empresas-tech-programas': ['empresas tech', 'tractian', 'itau', 'stone', 'qi tech', 'agibank', 'mercado versus pesquisa'],
  'vitrine-empresas-tech': ['tractian', 'itau tecnologia', 'recruta stone', 'qi tech', 'agibank', 'programas estagio tecnologia'],
  'mercado-vs-pesquisa': ['mercado corporativo versus pesquisa', 'pesquisa cientifica', 'carreira mercado ou mestrado', 'fapesp versus clt'],
  'pos-graduacao-ft-ic': ['mestrado tecnologia ft', 'pos graduacao computacao ic', 'doutorado unicamp', 'poscomp'],
  'bolsas-posgraduacao': ['bolsa fapesp mestrado', 'bolsa capes', 'bolsa cnpq', 'pos graduacao fapesp', 'remuneracao pesquisa']
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

function stripJsxAndHtml(raw) {
  let text = raw;
  // Remove comentarios JSX: {/* ... */}
  text = text.replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ');
  // Remove comentarios HTML
  text = text.replace(/<!--[\s\S]*?-->/g, ' ');
  // Remove tags de estilo ou script
  text = text.replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, ' ');

  // Remove blocos de chaves repetidamente ate nao restarem chaves aninhadas
  let prev = '';
  while (prev !== text) {
    prev = text;
    text = text.replace(/\{[^{}]*\}/g, ' ');
  }

  // Remove todas as tags HTML e JSX
  text = text.replace(/<[^>]*>/g, ' ');

  // Substitui entidades HTML usuais
  text = text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"');

  // Remove atributos ou vestigios de codigo
  text = text
    .replace(/\b(id|className|style|onClick|onChange|href|src|alt|title)=("[^"]*"|'[^']*'|\S+)/gi, ' ')
    .replace(/[$`{}]/g, ' ')
    .replace(/<|>|\/>|<\//g, ' ');

  return text.replace(/\s+/g, ' ').trim();
}

function extractSectionContent(fileContent, elementId) {
  const match = fileContent.match(new RegExp(`id=["']${elementId}["']`, 'i'));
  if (!match || match.index === undefined) return '';

  const idIndex = match.index;
  // Encontra o fechamento '>' da tag de abertura que contem esse id
  const closeBracketIndex = fileContent.indexOf('>', idIndex);
  if (closeBracketIndex === -1) return '';

  const contentStartIndex = closeBracketIndex + 1;
  const rest = fileContent.slice(contentStartIndex);

  // Procura o inicio da proxima tag que contenha um id="..."
  const nextSectionMatch = rest.match(/<[a-zA-Z0-9_-]+[^>]*\bid=["'][a-z0-9_-]+["']/i);
  const rawChunk = nextSectionMatch && nextSectionMatch.index !== undefined
    ? rest.slice(0, nextSectionMatch.index)
    : rest.slice(0, 4500);

  const cleanText = stripJsxAndHtml(rawChunk);
  return sanitizeAdr0001(cleanText);
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
          const candidateSentences = combinedText
            .split(/[.!?]+/)
            .map((s) => s.trim())
            .filter((s) => {
              if (s.length < 25) return false;
              if (/\b(id=|className=|style=|onClick=|const |import |export |return |function |type |interface )\b/i.test(s)) return false;
              if (/[<>{}`$]/.test(s)) return false;
              if (!/[A-Za-zÀ-ÿ]/.test(s)) return false;
              return true;
            });

          if (candidateSentences.length > 0) {
            summarySentence = candidateSentences[0] + '.';
          }
        }

        if (!summarySentence || summarySentence.length < 20) {
          summarySentence = `${topicTitle}, foco em ${subTitle} na Faculdade de Tecnologia da Unicamp.`;
        }

        summarySentence = sanitizeAdr0001(summarySentence);
        if (summarySentence.includes('id=') || summarySentence.includes('style=') || summarySentence.includes('className=') || /[<>{}`$]/.test(summarySentence)) {
          summarySentence = `${topicTitle}, foco em ${subTitle} na Faculdade de Tecnologia da Unicamp.`;
        }

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
    {
      filePath: path.join(projectRoot, 'src/app/duvidas/page.tsx'),
      pageName: 'Dúvidas',
      category: 'duvidas',
      basePath: '/duvidas',
    },
    {
      filePath: path.join(projectRoot, 'src/app/estatisticas/page.tsx'),
      pageName: 'Estatísticas',
      category: 'estatisticas',
      basePath: '/estatisticas',
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
if (process.argv[1] && process.argv[1].endsWith('vectorize-search.mjs')) {
  try {
    generateSearchIndex();
  } catch (err) {
    console.error('Falha na geracao do indice de busca:', err.message);
    process.exit(1);
  }
}
