import { Link } from 'react-router-dom';
import styles from '../css/CaseStudy.module.css';
import igStyles from '../css/IdleGame.module.css';

function IdleGame() {
  return (
    <div className={styles.page}>
      <Link to="/projects" className={styles.backLink}>← Back to Projects</Link>

      <div className={styles.hero}>
        <h3 className={styles.tag}>Web Development</h3>
        <h1 className={styles.title}>Idle Game</h1>
        <p className={igStyles.intro}>
          A browser-based incremental game built for short 5–10 minute sessions.
          The philosophy: open it, enjoy it, close it — progress continues even when you&apos;re away.
        </p>
        <a
          href="https://github.com/Hoohaaw/Idle-Game"
          target="_blank"
          rel="noreferrer"
          className={igStyles.repoLink}
        >
          View on GitHub →
        </a>
      </div>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Overview</h2>
        <p>
          This project was built as part of the course 1DV613 at Linnéuniversitetet. The goal was
          to design and build a full-stack web application from the ground up — handling
          authentication, persistent game state, real-time mission timers, and a structured
          backend, all while keeping the player experience simple and low-commitment.
        </p>
        <p>
          The game runs in the browser with an Express backend, MongoDB for persistence, and EJS
          for server-rendered templates. Players create an account, build a team of characters,
          and send them on missions that resolve in real time — even while offline.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Core Systems</h2>
        <div className={igStyles.featuresGrid}>
          <div className={igStyles.feature}>
            <span className={igStyles.featureTitle}>Mission System</span>
            <span className={igStyles.featureDesc}>28 missions across 4 world maps. Missions run on real-time timers and progress continues offline.</span>
          </div>
          <div className={igStyles.feature}>
            <span className={igStyles.featureTitle}>Team Management</span>
            <span className={igStyles.featureDesc}>Build and manage characters with distinct classes and their own progression paths.</span>
          </div>
          <div className={igStyles.feature}>
            <span className={igStyles.featureTitle}>Procedural Equipment</span>
            <span className={igStyles.featureDesc}>Weapons and armor generated procedurally across 5 rarity tiers, available through NPC shops.</span>
          </div>
          <div className={igStyles.feature}>
            <span className={igStyles.featureTitle}>Resource Gathering</span>
            <span className={igStyles.featureDesc}>Mine copper, silver, gold, and platinum — each with escalating value and unlock requirements.</span>
          </div>
          <div className={igStyles.feature}>
            <span className={igStyles.featureTitle}>Crafting & Blessings</span>
            <span className={igStyles.featureDesc}>Combine materials and unlock passive bonuses through the &quot;blessings&quot; enhancement system.</span>
          </div>
          <div className={igStyles.feature}>
            <span className={igStyles.featureTitle}>Transcendence</span>
            <span className={igStyles.featureDesc}>A prestige mechanic for end-game progression — reset and carry forward permanent bonuses.</span>
          </div>
          <div className={igStyles.feature}>
            <span className={igStyles.featureTitle}>Statistics</span>
            <span className={igStyles.featureDesc}>Comprehensive progress tracking across gameplay metrics so players can see their growth over time.</span>
          </div>
          <div className={igStyles.feature}>
            <span className={igStyles.featureTitle}>Authentication</span>
            <span className={igStyles.featureDesc}>JWT-based account system — create an account to persist progress across sessions and devices.</span>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Tech Stack</h2>
        <div className={igStyles.techGrid}>
          <div className={igStyles.techItem}>
            <span className={igStyles.techName}>Node.js v18+</span>
            <span className={igStyles.techRole}>Runtime</span>
          </div>
          <div className={igStyles.techItem}>
            <span className={igStyles.techName}>Express.js</span>
            <span className={igStyles.techRole}>Backend framework</span>
          </div>
          <div className={igStyles.techItem}>
            <span className={igStyles.techName}>MongoDB</span>
            <span className={igStyles.techRole}>Database</span>
          </div>
          <div className={igStyles.techItem}>
            <span className={igStyles.techName}>EJS</span>
            <span className={igStyles.techRole}>Server-rendered templates</span>
          </div>
          <div className={igStyles.techItem}>
            <span className={igStyles.techName}>JWT</span>
            <span className={igStyles.techRole}>Authentication</span>
          </div>
          <div className={igStyles.techItem}>
            <span className={igStyles.techName}>Jest</span>
            <span className={igStyles.techRole}>Testing</span>
          </div>
          <div className={igStyles.techItem}>
            <span className={igStyles.techName}>ESLint</span>
            <span className={igStyles.techRole}>Code quality</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Development Status</h2>
        <p>
          The project is not active at the moment. Hopefully the project will procced in the future. Core systems are operational — authentication,
          mission timers, and the main UI layouts are all working. Several systems are still
          being integrated:
        </p>
        <ul className={igStyles.statusList}>
          <li>Full database integration for resource gathering</li>
          <li>Mission reward persistence</li>
          <li>Crafting backend logic</li>
          <li>Complete equipment management</li>
          <li>Character progression integration</li>
        </ul>
      </section>

    </div>
  );
}

export default IdleGame;
