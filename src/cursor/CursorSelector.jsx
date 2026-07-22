import { useEffect, useRef, useState } from 'react';
import { useCursor, CURSORS } from './cursorStore.js';
import { burst } from '../utils/confetti.js';
import { useLanguage } from '../i18n/languageStore.js';
import styles from '../css/Cursor.module.css';

/**
 * Small glyph representing a cursor style, used on the toggle button
 * to show which style is currently active.
 */
function CursorIcon({ id }) {
  if (id === 'radar') return <span className={styles.toggleRadar} aria-hidden="true" />;
  if (id === 'blip') return <span className={styles.toggleBlip} aria-hidden="true" />;
  if (id === 'rocket') {
    return (
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 28 28">
        <g transform="rotate(-45 14 14)">
          <path d="M14 3c2 3 3 7 3 11v5h-6v-5c0-4 1-8 3-11z" fill="currentColor" />
          <path d="M11 16 L6 20 L11 19 Z" fill="currentColor" />
          <path d="M17 16 L22 20 L17 19 Z" fill="currentColor" />
          <path d="M12 19 L14 25 L16 19 Z" fill="currentColor" opacity="0.7" />
        </g>
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.4" />
      <line x1="9" y1="9" x2="9" y2="4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="9" cy="9" r="1.4" fill="currentColor" />
    </svg>
  );
}

/**
 * Floating control (bottom-right, above the footer) that lets visitors
 * pick a cursor style. Fires a small themed confetti burst on selection.
 * Only shown on devices with a fine pointer (hidden on touch).
 */
export default function CursorSelector() {
  const { cursor, setCursor } = useCursor();
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [finePointer, setFinePointer] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    setFinePointer(window.matchMedia('(pointer: fine)').matches);
  }, []);

  // Close when clicking outside or pressing Escape.
  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  if (!finePointer) return null;

  const activeDef = CURSORS.find((c) => c.id === cursor);

  const choose = (id, e) => {
    setCursor(id);
    // Celebrate from the clicked button's position.
    const rect = e.currentTarget.getBoundingClientRect();
    burst({
      x: (rect.left + rect.width / 2) / window.innerWidth,
      y: (rect.top + rect.height / 2) / window.innerHeight,
      particleCount: 60,
      spread: 60,
    });
  };

  return (
    <div className={styles.selector} ref={rootRef}>
      {open && (
        <div className={styles.menu} role="menu">
          <p className={styles.menuTitle}>{t('cursor.title')}</p>
          {CURSORS.map((c) => (
            <button
              key={c.id}
              role="menuitemradio"
              aria-checked={cursor === c.id}
              className={`${styles.option} ${cursor === c.id ? styles.optionActive : ''}`}
              onClick={(e) => choose(c.id, e)}
            >
              {t(`cursor.${c.id}`)}
              {cursor === c.id && <span className={styles.check} aria-hidden="true">✓</span>}
            </button>
          ))}
        </div>
      )}
      <button
        className={styles.toggle}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t('cursor.choose')}
        title={t(`cursor.${activeDef?.id ?? 'default'}`)}
      >
        <CursorIcon id={activeDef?.id} />
      </button>
    </div>
  );
}
