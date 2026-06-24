import { useEffect, useState } from 'react';
import { CursorContext, CURSORS, STORAGE_KEY } from './cursorStore.js';

/** Holds the selected cursor, persists it, and applies native cursors to <body>. */
export function CursorProvider({ children }) {
  const [cursor, setCursor] = useState('default');

  // Load saved preference once on mount.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && CURSORS.some((c) => c.id === saved)) setCursor(saved);
    } catch {
      /* localStorage unavailable — ignore */
    }
  }, []);

  // Persist + apply the native CSS cursor to <body>.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, cursor);
    } catch {
      /* ignore */
    }
    const def = CURSORS.find((c) => c.id === cursor);
    document.body.style.cursor =
      def?.kind === 'follower' ? 'none' : def?.css ?? 'auto';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [cursor]);

  return (
    <CursorContext.Provider value={{ cursor, setCursor }}>
      {children}
    </CursorContext.Provider>
  );
}
