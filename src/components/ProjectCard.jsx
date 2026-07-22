import { Link } from 'react-router-dom';
import styles from '../css/project.module.css';

/**
 * A flat, bordered project card. `variant` is "dev" or "ux" and
 * selects the tag colour.
 */
export default function ProjectCard({ to, tag, variant = 'dev', title, desc, index }) {
  return (
    <Link to={to} className={styles.card}>
      {index != null && <span className={styles.cardIndex}>{index}</span>}
      <span className={`${styles.tag} ${variant === 'ux' ? styles.tagUX : styles.tagDev}`}>{tag}</span>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{desc}</p>
      <span className={styles.cardArrow} aria-hidden="true">→</span>
    </Link>
  );
}
