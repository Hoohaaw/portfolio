import styles from './css/header.module.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo} end>AP</NavLink>
        <ul>
          <li><NavLink to="/projects" className={({ isActive }) => isActive ? styles.active : ''}>Projects</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>Contact</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
