import { Link } from 'react-router-dom';
import styles from '../css/NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.page}>
      <p className={styles.tx}>TRANSMISSION 404</p>
      <p className={styles.code}>SIGNAL LOST</p>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.message}>
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link to="/" className={styles.home}>← Return to base</Link>
    </div>
  );
}

export default NotFound;
