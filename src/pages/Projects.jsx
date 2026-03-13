import { Link } from 'react-router-dom';
import styles from '../css/project.module.css';

function Project() {
  return (
    <div className={styles.page}>
      <div className={styles.intro}>
        <h1>Projects</h1>
        <p>Projects from school, work, and personal exploration.</p>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>Web Development</h2>
        <div className={styles.grid}>
          <Link to="/projects/climate-api" className={styles.card}>
            <span className={`${styles.tag} ${styles.tagDev}`}>GraphQL · MongoDB · Vercel</span>
            <h3 className={styles.cardTitle}>Climate API</h3>
            <p className={styles.cardDesc}>A GraphQL API serving historical temperature data across 17 countries, built with Apollo Server and MongoDB.</p>
          </Link>
          <Link to="/projects/password-validator" className={styles.card}>
            <span className={`${styles.tag} ${styles.tagDev}`}>JavaScript · Jest · NPM</span>
            <h3 className={styles.cardTitle}>Password Validator</h3>
            <p className={styles.cardDesc}>A JavaScript module validating passwords against 10 security rules. Tested with Jest and published on NPM.</p>
          </Link>
          <Link to="/projects/idle-game" className={styles.card}>
            <span className={`${styles.tag} ${styles.tagDev}`}>Node.js · Express · MongoDB</span>
            <h3 className={styles.cardTitle}>Idle Game</h3>
            <p className={styles.cardDesc}>A browser-based idle game built for short 5–10 minute sessions. Designed so the player can put it down and pick it back up.</p>
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>UX Design — Gota Media</h2>
        <div className={styles.grid}>
          <Link to="/projects/self-service-product-change" className={styles.card}>
            <span className={`${styles.tag} ${styles.tagUX}`}>UX/UI Design</span>
            <h3 className={styles.cardTitle}>Self-service — Product change</h3>
            <p className={styles.cardDesc}>Giving subscribers the ability to change their subscription plan online, reducing calls to customer support.</p>
          </Link>
          <Link to="/projects/tillganglighet" className={styles.card}>
            <span className={`${styles.tag} ${styles.tagUX}`}>UX/UI Design</span>
            <h3 className={styles.cardTitle}>Tillgänglighet</h3>
            <p className={styles.cardDesc}>Improving accessibility across Gota Media's products — WCAG compliance, colour contrast, and icon system overhaul.</p>
          </Link>
          <Link to="/projects/ux-way-of-working" className={styles.card}>
            <span className={`${styles.tag} ${styles.tagUX}`}>UX/UI Design</span>
            <h3 className={styles.cardTitle}>UX — Way of working</h3>
            <p className={styles.cardDesc}>Establishing team rituals like Bootcamp, Standup boards, a UX panel, and an internal testing channel.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Project;
