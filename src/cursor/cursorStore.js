import { createContext, useContext } from 'react';

/**
 * Available cursor styles. `native` ones just set a CSS `cursor` value;
 * `follower` ones hide the system cursor and render a custom element.
 */
export const CURSORS = [
  { id: 'default', label: 'Default', icon: '🖱️', kind: 'native', css: 'auto' },
  { id: 'glow', label: 'Glow dot', icon: '🔵', kind: 'follower' },
  { id: 'spotlight', label: 'Spotlight', icon: '🔦', kind: 'follower' },
  { id: 'crosshair', label: 'Crosshair', icon: '✛', kind: 'native', css: 'crosshair' },
  { id: 'emoji', label: 'Sparkle', icon: '✨', kind: 'native', css: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'%3E%3Ctext y=\'26\' font-size=\'26\'%3E%E2%9C%A8%3C/text%3E%3C/svg%3E") 6 6, auto' },
];

export const STORAGE_KEY = 'cursorStyle';

export const CursorContext = createContext(null);

export function useCursor() {
  const ctx = useContext(CursorContext);
  if (!ctx) throw new Error('useCursor must be used within CursorProvider');
  return ctx;
}
