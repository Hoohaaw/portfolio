import styles from './css/Intro-card.module.css';
import { Link } from 'react-router-dom';
import { useLanguage } from './i18n/languageStore.js';

function Card() {
  const { t } = useLanguage();

  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <p className={styles.tx}>TRANSMISSION 001</p>

        <p className={styles.greeting}>
          <span className={styles.greetingDot} /> {t('hero.available')}
        </p>
        <h1 className={styles.name}>Alex Palm</h1>
        <h2 className={styles.tagline}>Fullstack Developer &amp; UX Designer</h2>
        <p className={styles.bio}>
          Student at Linnéuniversitetet with a background in UX design.
          I build products that are both functional and well thought through —
          from API design and frontend development to user experience and accessibility.
        </p>
        <div className={styles.ctas}>
          <Link to="/projects" className={styles.ctaPrimary}>
            {t('hero.viewProjects')} <span className={styles.arrow}>→</span>
          </Link>
          <Link to="/about" className={styles.ctaSecondary}>{t('hero.aboutMe')}</Link>
        </div>
        <div className={styles.cvRow}>
          <span className={styles.cvLabel}>{t('hero.downloadCv')}</span>
          <a href="/CVs/Alex_Palm_CV_Svenska.pdf" download className={styles.cvLink}>Svenska</a>
          <a href="/CVs/Alex_Palm_CV_English.pdf" download className={styles.cvLink}>English</a>
          <a href="/CVs/Alex_Palm_CV_Espanol.pdf" download className={styles.cvLink}>Español</a>
        </div>
      </div>

      <div className={styles.heroPanel}>
        <figure className={styles.figure}>
          <picture>
            <source srcSet="/images/ProfilePic.avif" type="image/avif" />
            <source srcSet="/images/ProfilePic.webp" type="image/webp" />
            <img
              src="/images/ProfilePic.png"
              alt="Alex Palm"
              className={styles.profilePhoto}
              width="350"
              height="466"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <span className={`${styles.bracket} ${styles.bracketTl}`} aria-hidden="true" />
          <span className={`${styles.bracket} ${styles.bracketTr}`} aria-hidden="true" />
          <span className={`${styles.bracket} ${styles.bracketBl}`} aria-hidden="true" />
          <span className={`${styles.bracket} ${styles.bracketBr}`} aria-hidden="true" />
          <figcaption className={styles.figcaption}>CREW ID · A. PALM</figcaption>
        </figure>

        <div className={styles.gauge} role="img" aria-label="Decorative instrument dial reading approximately three quarters full">
          <div className={styles.gaugeFace}>
            <div className={styles.gaugeNeedle} />
            <div className={styles.gaugeHub} />
          </div>
          <p className={styles.gaugeLabel}>SYS · 01</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
