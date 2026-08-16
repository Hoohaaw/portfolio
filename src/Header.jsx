import styles from './css/header.module.css';
import { NavLink } from 'react-router-dom';
import { useLanguage } from './i18n/languageStore.js';
import LanguageSwitch from './i18n/LanguageSwitch.jsx';

function Header() {
  const { t } = useLanguage();

  return (
    <div className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo} end>AP</NavLink>
        <ul>
          <li><NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ''}>{t('nav.home')}</NavLink></li>
          <li><NavLink to="/projects" className={({ isActive }) => isActive ? styles.active : ''}>{t('nav.projects')}</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>{t('nav.about')}</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>{t('nav.contact')}</NavLink></li>
        </ul>
        <div className={styles.right}>
          <LanguageSwitch />
        </div>
      </div>
    </div>
  );
}

export default Header;
