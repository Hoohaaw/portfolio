import styles from './css/Intro-card.module.css';
import { Link } from 'react-router-dom';
import useSpotlight from './hooks/useSpotlight.js';

function Card() {
  const { ref, onMouseMove, onMouseLeave } = useSpotlight();

  return (
    <div
      className={styles.hero}
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Floating gradient orbs + cursor spotlight live in the background layer */}
      <div className={styles.orbs} aria-hidden="true">
        <span className={`${styles.orb} ${styles.orb1}`} />
        <span className={`${styles.orb} ${styles.orb2}`} />
        <span className={`${styles.orb} ${styles.orb3}`} />
      </div>
      <div className={styles.spotlight} aria-hidden="true" />

      <div className={styles.heroText}>
        <p className={styles.greeting}>
          <span className={styles.greetingDot} /> Available for work
        </p>
        <h1 className={styles.name}>Alex Palm</h1>
        <h2 className={styles.tagline}>
          Fullstack Developer <span className={styles.amp}>&amp;</span> UX Designer
        </h2>
        <p className={styles.bio}>
          Student at Linnéuniversitetet with a background in UX design.
          I build products that are both functional and well thought through —
          from API design and frontend development to user experience and accessibility.
        </p>
        <div className={styles.ctas}>
          <Link to="/projects" className={styles.ctaPrimary}>
            View Projects <span className={styles.arrow}>→</span>
          </Link>
          <Link to="/about" className={styles.ctaSecondary}>About Me</Link>
        </div>
        <div className={styles.cvRow}>
          <span className={styles.cvLabel}>Download CV</span>
          <a href="/CVs/Alex_Palm_CV_Svenska.pdf" download className={styles.cvLink}>Svenska</a>
          <a href="/CVs/Alex_Palm_CV_English.pdf" download className={styles.cvLink}>English</a>
          <a href="/CVs/Alex_Palm_CV_Espanol.pdf" download className={styles.cvLink}>Español</a>
        </div>
      </div>

      <div className={styles.heroImage}>
        <div className={styles.photoGlass}>
          <div className={styles.photoCircle}>
            <img src="/images/ProfilePic.png" alt="Alex Palm" className={styles.profilePhoto} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
