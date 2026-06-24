import { useCallback, useRef } from 'react';

/**
 * Tracks the pointer over an element and exposes its position as CSS custom
 * properties (--mx / --my, in %) so a radial-gradient "spotlight" can follow
 * the cursor. Pure CSS does the painting; JS only writes two variables.
 *
 * Usage:
 *   const { ref, onMouseMove, onMouseLeave } = useSpotlight();
 *   <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} />
 */
export default function useSpotlight() {
  const ref = useRef(null);
  const frame = useRef(0);

  const onMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    // Throttle to one update per animation frame.
    if (frame.current) return;
    const { clientX, clientY } = e;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const rect = el.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 100;
      const y = ((clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--mx', `${x}%`);
      el.style.setProperty('--my', `${y}%`);
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--mx', '50%');
    el.style.setProperty('--my', '50%');
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
