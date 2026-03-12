import styles from './css/footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <a
          href="https://www.linkedin.com/in/alex-palm-0b70091b6/"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Hoohaaw"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          GitHub
        </a>
        <a href="mailto:Alex.cj.palm@proton.me" className={styles.link}>
          Email
        </a>
      </div>
      <span className={styles.copy}>© {new Date().getFullYear()} Alex Palm</span>
    </div>
  );
}

export default Footer;
