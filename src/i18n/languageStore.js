import { createContext, useContext } from 'react';
import { LANGUAGES } from './translations.js';

export { LANGUAGES };
export const STORAGE_KEY = 'siteLanguage';

export const LanguageContext = createContext(null);

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
