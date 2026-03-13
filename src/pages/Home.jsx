import Card from '../Intro-card.jsx';
import styles from '../css/Now.module.css';
import { SiGraphql, SiNodedotjs, SiMongodb, SiTypescript, SiReact, SiElixir } from 'react-icons/si';
import { PiStudentBold } from 'react-icons/pi';

function Home() {
  return (
    <>
      <Card />

      <section className={styles.section}>
        <p className={styles.label}>Currently</p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.iconGroup}>
              <SiGraphql color="#e535ab" />
              <SiNodedotjs color="#539e43" />
              <SiMongodb color="#47a248" />
            </span>
            Building a GraphQL Climate API — Node.js, Apollo Server, MongoDB &amp; Vercel
          </li>
          <li className={styles.item}>
            <span className={styles.iconGroup}>
              <PiStudentBold color="#a8b4ff" />
            </span>
            Studying Web Development at Linnéuniversitetet
          </li>
          <li className={styles.item}>
            <span className={styles.iconGroup}>
              <SiTypescript color="#3178c6" />
            </span>
            Learning TypeScript
          </li>
          <li className={styles.item}>
            <span className={styles.iconGroup}>
              <SiReact color="#61dafb" />
            </span>
            Learning React
          </li>
          <li className={styles.item}>
            <span className={styles.iconGroup}>
              <SiElixir color="#9b30d9" />
            </span>
            Learning Elixir
          </li>
        </ul>
      </section>
    </>
  );
}

export default Home;
