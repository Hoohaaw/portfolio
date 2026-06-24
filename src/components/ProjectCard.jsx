import { Link } from 'react-router-dom';
import styles from '../css/project.module.css';
import useSpotlight from '../hooks/useSpotlight.js';

/**
 * A glass project card with a cursor-following spotlight glow.
 * `variant` is "dev" or "ux" and selects the tag colour.
 */
export default function ProjectCard({ to, tag, variant = 'dev', title, desc, index }) {
  const { ref, onMouseMove, onMouseLeave } = useSpotlight();

  return (
    <Link
      to={to}
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={styles.card}
    >
      <span className={styles.cardGlow} aria-hidden="true" />
      {index != null && <span className={styles.cardIndex}>{index}</span>}
      <span className={`${styles.tag} ${variant === 'ux' ? styles.tagUX : styles.tagDev}`}>{tag}</span>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{desc}</p>
      <span className={styles.cardArrow} aria-hidden="true">→</span>
    </Link>
  );
}
