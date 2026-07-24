import { Link } from 'react-router-dom';
import { PiCertificateBold } from 'react-icons/pi';
import { useLanguage } from '../i18n/languageStore.js';
import styles from '../css/CaseStudy.module.css';
import certStyles from '../css/Certificates.module.css';

const GENAI_CERT_URL = encodeURI('/certificates/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.pdf');

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
        <ul className={certStyles.list}>
          <li className={certStyles.item}>
            <span className={certStyles.iconGroup}>
              <PiCertificateBold color="#f5a623" />
            </span>
            <span className={certStyles.itemText}>
              <a href={GENAI_CERT_URL} target="_blank" rel="noreferrer">
                {t('now.certGenAI')}
              </a>
            </span>
          </li>
        </ul>
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
