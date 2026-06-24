import { useEffect, useRef } from 'react';
import { useCursor, CURSORS } from './cursorStore.js';
import styles from '../css/Cursor.module.css';

/**
 * Renders a custom cursor follower for the "follower" cursor kinds
 * (glow / spotlight). The dot eases toward the pointer each frame;
 * native cursors render nothing here.
 */
export default function CursorLayer() {
  const { cursor } = useCursor();
  const dotRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef(0);

  const def = CURSORS.find((c) => c.id === cursor);
  const isFollower = def?.kind === 'follower';

  useEffect(() => {
    if (!isFollower) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (reduce && dotRef.current) {
        pos.current = target.current;
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const onDown = () => dotRef.current?.classList.add(styles.down);
    const onUp = () => dotRef.current?.classList.remove(styles.down);

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);

    const tick = () => {
      const el = dotRef.current;
      if (el && !reduce) {
        // Ease toward the pointer for a smooth trailing feel.
        pos.current.x += (target.current.x - pos.current.x) * 0.18;
        pos.current.y += (target.current.y - pos.current.y) * 0.18;
        el.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      cancelAnimationFrame(raf.current);
    };
  }, [isFollower]);

  if (!isFollower) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className={`${styles.follower} ${cursor === 'spotlight' ? styles.spotlight : styles.glow}`}
    />
  );
}
