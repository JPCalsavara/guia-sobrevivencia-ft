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
