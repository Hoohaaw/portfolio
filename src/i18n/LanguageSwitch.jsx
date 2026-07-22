import { useLanguage } from './languageStore.js';
import { LANGUAGES } from './translations.js';
import styles from '../css/LanguageSwitch.module.css';

export default function LanguageSwitch() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className={styles.switch} role="group" aria-label="Language">
      {LANGUAGES.map((l) => (
        <button
          key={l.id}
          type="button"
          className={`${styles.option} ${lang === l.id ? styles.active : ''}`}
          aria-pressed={lang === l.id}
          aria-label={lang === l.id ? undefined : t('lang.switchTo')}
          onClick={() => setLang(l.id)}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
