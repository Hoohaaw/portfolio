import { useEffect, useRef } from 'react';
import { useCursor, CURSORS, INTERACTIVE_SELECTOR } from './cursorStore.js';
import styles from '../css/Cursor.module.css';

/**
 * Renders a custom cursor follower for the "follower" cursor kinds
 * (radar sweep / telemetry blip). Tracks the pointer 1:1, same feel
 * as a normal cursor; native cursors render nothing here.
 *
 * Position and theming live on separate elements: the outer div is
 * JS-positioned every pointermove (translate only), while the inner
 * "visual" div is free for CSS to animate (scale, color, speed) on
 * hover/press without fighting the inline transform.
 */
export default function CursorLayer() {
  const { cursor } = useCursor();
  const dotRef = useRef(null);
  const visualRef = useRef(null);
  const raf = useRef(0);

  const def = CURSORS.find((c) => c.id === cursor);
  const isFollower = def?.kind === 'follower';

  useEffect(() => {
    if (!isFollower) return;

    const onMove = (e) => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        if (dotRef.current) {
          dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        }
      });
    };

    const onDown = () => visualRef.current?.classList.add(styles.down);
    const onUp = () => visualRef.current?.classList.remove(styles.down);

    const onOver = (e) => {
      if (e.target?.closest?.(INTERACTIVE_SELECTOR)) visualRef.current?.classList.add(styles.hover);
    };
    const onOut = (e) => {
      const next = e.relatedTarget;
      if (!next || !next.closest?.(INTERACTIVE_SELECTOR)) visualRef.current?.classList.remove(styles.hover);
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointerover', onOver);
    window.addEventListener('pointerout', onOut);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointerover', onOver);
      window.removeEventListener('pointerout', onOut);
      cancelAnimationFrame(raf.current);
    };
  }, [isFollower]);

  if (!isFollower) return null;

  return (
    <div ref={dotRef} aria-hidden="true" className={styles.follower}>
      <div ref={visualRef} className={cursor === 'blip' ? styles.blip : styles.radar} />
    </div>
  );
}
