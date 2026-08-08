import { createContext, useContext } from 'react';

/**
 * Available cursor styles. `native` ones just set a CSS `cursor` value;
 * `follower` ones hide the system cursor and render a custom element.
 */
export const CURSORS = [
  { id: 'default', kind: 'native', css: 'auto' },
  {
    id: 'rocket',
    kind: 'native',
    css: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'28\' height=\'28\' viewBox=\'0 0 28 28\'%3E%3Cg transform=\'rotate(-45 14 14)\'%3E%3Cpath d=\'M14 3c2 3 3 7 3 11v5h-6v-5c0-4 1-8 3-11z\' fill=\'%23C25A2A\' stroke=\'%23241A12\' stroke-width=\'1.2\'/%3E%3Ccircle cx=\'14\' cy=\'11\' r=\'1.6\' fill=\'%23241A12\'/%3E%3Cpath d=\'M11 16 L6 20 L11 19 Z\' fill=\'%23241A12\'/%3E%3Cpath d=\'M17 16 L22 20 L17 19 Z\' fill=\'%23241A12\'/%3E%3Cpath d=\'M12 19 L14 25 L16 19 Z\' fill=\'%236FBF73\'/%3E%3C/g%3E%3C/svg%3E") 6 6, auto',
    // Engine-ignited variant shown over clickable elements — bigger, brighter flame.
    hoverCss: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'28\' height=\'28\' viewBox=\'0 0 28 28\'%3E%3Cg transform=\'rotate(-45 14 14)\'%3E%3Cpath d=\'M14 3c2 3 3 7 3 11v5h-6v-5c0-4 1-8 3-11z\' fill=\'%23C25A2A\' stroke=\'%23241A12\' stroke-width=\'1.2\'/%3E%3Ccircle cx=\'14\' cy=\'11\' r=\'1.6\' fill=\'%23241A12\'/%3E%3Cpath d=\'M11 16 L6 20 L11 19 Z\' fill=\'%23241A12\'/%3E%3Cpath d=\'M17 16 L22 20 L17 19 Z\' fill=\'%23241A12\'/%3E%3Cpath d=\'M11 19 L14 27 L17 19 Z\' fill=\'%23FFB020\'/%3E%3Cpath d=\'M12.3 19 L14 24 L15.7 19 Z\' fill=\'%23FFE9A8\'/%3E%3C/g%3E%3C/svg%3E") 6 6, pointer',
  },
  { id: 'radar', kind: 'follower' },
  { id: 'blip', kind: 'follower' },
];

// Elements a visitor can click/activate — used to trigger the cursor's hover feedback.
export const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, select, textarea, label, summary, [tabindex]:not([tabindex="-1"])';

export const STORAGE_KEY = 'cursorStyle';

export const CursorContext = createContext(null);

export function useCursor() {
  const ctx = useContext(CursorContext);
  if (!ctx) throw new Error('useCursor must be used within CursorProvider');
  return ctx;
}
