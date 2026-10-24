import type { MuralComment, MuralQuestion } from '../data/mural';
import { muralCategories } from '../data/mural';

export const MIN_TITULO_LENGTH = 5;
export const MIN_DESCRICAO_LENGTH = 10;
export const MIN_RESPOSTA_LENGTH = 10;

export interface QuestionInput {
  titulo?: string;
  descricao?: string;
  autor?: string;
  category?: string;
}

export interface AnswerInput {
  conteudo?: string;
  authorRole?: string;
}

const forbiddenPunctuation = /[—–()]/g;
const emojiPattern = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

export function sanitizeText(text: string): string {
  if (!text) {
    return '';
  }
  return text
    .replace(forbiddenPunctuation, '')
    .replace(emojiPattern, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function validateQuestionInput(input: QuestionInput): string[] {
  const errors: string[] = [];
  const titulo = (input.titulo || '').trim();
  const descricao = (input.descricao || '').trim();

  if (!titulo) {
    errors.push('O titulo e obrigatorio');
  } else if (titulo.length < MIN_TITULO_LENGTH) {
    errors.push('O titulo deve conter ao menos cinco caracteres');
  }

  if (!descricao) {
    errors.push('A descricao e obrigatoria');
  } else if (descricao.length < MIN_DESCRICAO_LENGTH) {
    errors.push('A descricao deve conter ao menos dez caracteres');
  }

  return errors;
}

export function validateAnswerInput(input: AnswerInput): string[] {
  const errors: string[] = [];
  const conteudo = (input.conteudo || '').trim();

  if (!conteudo) {
    errors.push('O conteudo da resposta e obrigatorio');
  } else if (conteudo.length < MIN_RESPOSTA_LENGTH) {
    errors.push('A resposta deve conter ao menos dez caracteres');
  }

  return errors;
}

export function upvoteQuestion(questions: MuralQuestion[], id: string): MuralQuestion[] {
  return questions.map((question) =>
    question.id === id ? { ...question, upvotes: question.upvotes + 1 } : question
  );
}

export function removeUpvoteQuestion(questions: MuralQuestion[], id: string): MuralQuestion[] {
  return questions.map((question) =>
    question.id === id
      ? { ...question, upvotes: Math.max(0, question.upvotes - 1) }
      : question
  );
}

export function sortQuestions(questions: MuralQuestion[], sortId: string): MuralQuestion[] {
  const copy = [...questions];

  switch (sortId) {
    case 'recentes':
      return copy.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    case 'respondidas':
      return copy.sort((a, b) => Number(Boolean(b.officialAnswer)) - Number(Boolean(a.officialAnswer)));
    case 'em-aberto':
      return copy.sort((a, b) => Number(Boolean(a.officialAnswer)) - Number(Boolean(b.officialAnswer)));
    case 'mais-votadas':
    default:
      return copy.sort((a, b) => b.upvotes - a.upvotes);
  }
}

export function filterQuestions(
  questions: MuralQuestion[],
  category: string,
  term: string
): MuralQuestion[] {
  const normalizedTerm = (term || '').trim().toLowerCase();

  return questions.filter((question) => {
    const matchesCategory = category === 'todas' || !category || question.category === category;
    if (!matchesCategory) {
      return false;
    }

    if (!normalizedTerm) {
      return true;
    }

    const haystack = `${question.titulo} ${question.descricao} ${question.categoryLabel}`.toLowerCase();
    return haystack.includes(normalizedTerm);
  });
}

export function addComment(
  questions: MuralQuestion[],
  id: string,
  comment: MuralComment
): MuralQuestion[] {
  const sanitizedComment: MuralComment = {
    ...comment,
    conteudo: sanitizeText(comment.conteudo),
    autor: comment.autor ? sanitizeText(comment.autor) : comment.autor
  };

  return questions.map((question) =>
    question.id === id
      ? { ...question, comments: [...question.comments, sanitizedComment] }
      : question
  );
}

export function isValidCategory(category: string): boolean {
  return muralCategories.some((option) => option.id === category);
}
