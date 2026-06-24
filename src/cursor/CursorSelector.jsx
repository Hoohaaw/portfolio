import { useEffect, useRef, useState } from 'react';
import { useCursor, CURSORS } from './cursorStore.js';
import { burst } from '../utils/confetti.js';
import styles from '../css/Cursor.module.css';

/**
 * Floating control (bottom-right, above the footer) that lets visitors
 * pick a cursor style. Fires a small themed confetti burst on selection.
 * Only shown on devices with a fine pointer (hidden on touch).
 */
export default function CursorSelector() {
  const { cursor, setCursor } = useCursor();
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
          <p className={styles.menuTitle}>Cursor</p>
          {CURSORS.map((c) => (
            <button
              key={c.id}
              role="menuitemradio"
              aria-checked={cursor === c.id}
              className={`${styles.option} ${cursor === c.id ? styles.optionActive : ''}`}
              onClick={(e) => choose(c.id, e)}
            >
              <span className={styles.optionIcon} aria-hidden="true">{c.icon}</span>
              {c.label}
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
        aria-label="Choose cursor style"
        title="Choose cursor style"
      >
        <span aria-hidden="true">✦</span>
      </button>
    </div>
  );
}
