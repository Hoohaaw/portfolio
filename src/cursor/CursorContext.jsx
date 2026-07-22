import { useEffect, useState } from 'react';
import { CursorContext, CURSORS, STORAGE_KEY, INTERACTIVE_SELECTOR } from './cursorStore.js';

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

  // Swap in a themed hover cursor while over clickable elements. Applied
  // directly on the hovered element (inline style beats any authored
  // `cursor: pointer` rule) and cleared once the pointer leaves it.
  useEffect(() => {
    const def = CURSORS.find((c) => c.id === cursor);
    if (def?.kind !== 'native' || !def.hoverCss) return;

    let active = null;
    const onOver = (e) => {
      const el = e.target?.closest?.(INTERACTIVE_SELECTOR);
      if (el) {
        active = el;
        el.style.cursor = def.hoverCss;
      }
    };
    const onOut = (e) => {
      if (active && (!e.relatedTarget || !active.contains(e.relatedTarget))) {
        active.style.cursor = '';
        active = null;
      }
    };

    window.addEventListener('pointerover', onOver);
    window.addEventListener('pointerout', onOut);
    return () => {
      window.removeEventListener('pointerover', onOver);
      window.removeEventListener('pointerout', onOut);
      if (active) active.style.cursor = '';
    };
  }, [cursor]);

  return (
    <CursorContext.Provider value={{ cursor, setCursor }}>
      {children}
    </CursorContext.Provider>
  );
}
