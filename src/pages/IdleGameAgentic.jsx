import { Link } from 'react-router-dom';
import styles from '../css/CaseStudy.module.css';

function IdleGameAgentic() {
  return (
    <div className={styles.page}>
      <Link to="/projects" className={styles.backLink}>← Back to Projects</Link>

      <div className={styles.hero}>
        <p className={styles.tag}>Agentic Coding</p>
        <h1 className={styles.title}>Idle Game — Agentic Rebuild</h1>
        <p>
          Rebuilding the original Idle Game with agentic coding — React, TypeScript,
          Tailwind &amp; Supabase. Placeholder intro — description coming soon.
        </p>
      </div>

      <div className={styles.imagePlaceholder}>Image coming soon</div>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Overview</h2>
        <p>Placeholder — overview coming soon.</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Tech Stack</h2>
        <p>Placeholder — tech stack coming soon.</p>
      </section>
    </div>
  );
}

export default IdleGameAgentic;
