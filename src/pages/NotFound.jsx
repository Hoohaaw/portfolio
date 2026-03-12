import { Link } from 'react-router-dom';
import styles from '../css/NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.page}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.message}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link to="/" className={styles.home}>← Back to home</Link>
    </div>
  );
}

export default NotFound;
