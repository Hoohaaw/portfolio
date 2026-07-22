import { Link } from 'react-router-dom';
import { PiCertificateBold } from 'react-icons/pi';
import { useLanguage } from '../i18n/languageStore.js';
import styles from '../css/CaseStudy.module.css';
import certStyles from '../css/Certificates.module.css';

function Certificates() {
  const { t } = useLanguage();

  return (
    <div className={styles.page}>
      <Link to="/" className={styles.backLink}>{t('certPage.backHome')}</Link>

      <div className={styles.hero}>
        <p className={styles.tag}>{t('certPage.tag')}</p>
        <h1 className={styles.title}>{t('now.certificates')}</h1>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('certPage.earned')}</h2>
        <p className={certStyles.empty}>
          <PiCertificateBold aria-hidden="true" />
          {t('now.certEmpty')}
        </p>
      </section>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('certPage.inProgress')}</h2>
        <p className={certStyles.empty}>
          <PiCertificateBold aria-hidden="true" />
          {t('now.certEmpty')}
        </p>
      </section>
    </div>
  );
}

export default Certificates;
