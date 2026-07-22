import { useEffect, useState, useCallback } from 'react';
import { LanguageContext, STORAGE_KEY, LANGUAGES } from './languageStore.js';
import { translations, DEFAULT_LANGUAGE } from './translations.js';

/** Holds the selected language, persists it, and applies <html lang>. */
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(DEFAULT_LANGUAGE);

  // Load saved preference once on mount. First-time visitors (no saved
  // value) stay on the English default.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && LANGUAGES.some((l) => l.id === saved)) setLang(saved);
    } catch {
      /* localStorage unavailable — ignore */
    }
  }, []);

  // Persist + reflect on <html lang="..."> for accessibility/SEO.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback(
    (key) => translations[lang]?.[key] ?? translations[DEFAULT_LANGUAGE][key] ?? key,
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
