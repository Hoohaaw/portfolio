import styles from './css/Intro-card.module.css';
import { Link } from 'react-router-dom';

function Card() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <p className={styles.greeting}>Hello, I&apos;m</p>
        <h1 className={styles.name}>Alex Palm</h1>
        <h2 className={styles.tagline}>Fullstack Developer & UX Designer</h2>
        <p className={styles.bio}>
          Student at Linnéuniversitetet with a background in UX design.
          I build products that are both functional and well thought through —
          from API design and frontend development to user experience and accessibility.
        </p>
        <div className={styles.ctas}>
          <Link to="/projects" className={styles.ctaPrimary}>View Projects</Link>
          <Link to="/about" className={styles.ctaSecondary}>About Me</Link>
        </div>
        <div className={styles.cvRow}>
          <span className={styles.cvLabel}>Download CV:</span>
          <a href="/CVs/CV_Alex_Palm_SV.pdf" download className={styles.cvLink}>Svenska</a>
          <a href="/CVs/CV_Alex_Palm_EN.pdf" download className={styles.cvLink}>English</a>
          <a href="/CVs/CV_Alex_Palm_ES.pdf" download className={styles.cvLink}>Español</a>
        </div>
      </div>
      <div className={styles.heroImage}>
        <div className={styles.photoCircle}>
          <img src="/images/ProfilePic.png" alt="Alex Palm" className={styles.profilePhoto} />
        </div>
      </div>
    </div>
  );
}

export default Card;
