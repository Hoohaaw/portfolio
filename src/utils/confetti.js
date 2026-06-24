import confetti from 'canvas-confetti';

/**
 * Themed confetti helpers, coloured to match the site palette.
 * Reusable anywhere — e.g. wire these to easter-egg triggers later:
 *   import { burst, fireworks } from '../utils/confetti.js';
 *   burst();                 // default celebration
 *   burst({ x: 0.5, y: 0.3 }) // from a specific point (0..1 of viewport)
 *   fireworks();             // a few seconds of fireworks
 */

const COLORS = ['#646cff', '#a8b4ff', '#c084fc', '#22d3ee', '#ffffff'];

function motionOK() {
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** A single celebratory burst. Origin defaults to centre. */
export function burst({ x = 0.5, y = 0.5, particleCount = 90, spread = 70 } = {}) {
  if (!motionOK()) return;
  confetti({
    particleCount,
    spread,
    startVelocity: 38,
    origin: { x, y },
    colors: COLORS,
    scalar: 0.9,
    ticks: 200,
    disableForReducedMotion: true,
  });
}

/** A short fireworks show (a few random bursts over ~2.5s). */
export function fireworks(duration = 2500) {
  if (!motionOK()) return;
  const end = Date.now() + duration;
  (function frame() {
    confetti({
      particleCount: 30,
      spread: 360,
      startVelocity: 30,
      ticks: 120,
      origin: { x: Math.random(), y: Math.random() * 0.6 },
      colors: COLORS,
      scalar: 0.8,
      disableForReducedMotion: true,
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}
