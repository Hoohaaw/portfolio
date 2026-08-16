import { Link } from 'react-router-dom';
import styles from '../css/CaseStudy.module.css';

function HomelabDashboard() {
  return (
    <div className={styles.page}>
      <Link to="/projects" className={styles.backLink}>← Back to Projects</Link>

      <div className={styles.hero}>
        <p className={styles.tag}>Grafana · Prometheus · Docker · TrueNAS Scale</p>
        <h1 className={styles.title}>Homelab Dashboard</h1>
        <p>
          A self-hosted home server on TrueNAS Scale, with a monitoring dashboard
          tracking host and container vitals — CPU, memory, network, and disk —
          across the apps TrueNAS runs. Placeholder intro — description coming soon.
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
        <p>
          cAdvisor + node-exporter for metrics collection, Prometheus for storage,
          Grafana for dashboards. Apps hosted and managed via TrueNAS Scale.
          A custom-built dashboard is planned to replace the Grafana front end.
        </p>
      </section>
    </div>
  );
}

export default HomelabDashboard;
