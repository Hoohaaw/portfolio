import styles from './css/footer.module.css';
import { useLanguage } from './i18n/languageStore.js';

function Footer() {
  const { t } = useLanguage();

  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <a
          href="https://www.linkedin.com/in/alex-carl-johan-palm/"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          {t('footer.linkedin')}
        </a>
        <a
          href="https://github.com/Hoohaaw"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          {t('footer.github')}
        </a>
        <a href="mailto:Alex.cj.palm@proton.me" className={styles.link}>
          {t('footer.email')}
        </a>
      </div>
      <span className={styles.copy}>© {new Date().getFullYear()} Alex Palm</span>
    </div>
  );
}

export default Footer;
