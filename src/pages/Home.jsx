import Card from '../Intro-card.jsx';
import styles from '../css/Now.module.css';

function Home() {
  return (
    <>
      <Card />

      <section className={styles.section}>
        <p className={styles.label}>Currently</p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.dot} />
            Building a GraphQL Climate API — Node.js, Apollo Server, MongoDB &amp; Vercel
          </li>
          <li className={styles.item}>
            <span className={styles.dot} />
            Studying Web Development at Linnéuniversitetet
          </li>
          <li className={styles.item}>
            <span className={styles.dot} />
            Learning TypeScript
          </li>
        </ul>
      </section>
    </>
  );
}

export default Home;
