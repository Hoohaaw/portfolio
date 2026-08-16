import { Link } from 'react-router-dom';
import styles from '../css/CaseStudy.module.css';

function VaultSync() {
  return (
    <div className={styles.page}>
      <Link to="/projects" className={styles.backLink}>← Back to Projects</Link>

      <div className={styles.hero}>
        <p className={styles.tag}>Obsidian · Flutter · Dashboard</p>
        <h1 className={styles.title}>Vault Sync</h1>
        <p>
          A sync tool between Obsidian, Flutter &amp; a custom dashboard — starting
          with a shared to-do list. Placeholder intro — description coming soon.
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

export default VaultSync;
