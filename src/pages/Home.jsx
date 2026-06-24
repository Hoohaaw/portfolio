import Card from '../Intro-card.jsx';
import Reveal from '../components/Reveal.jsx';
import styles from '../css/Now.module.css';
import { SiGraphql, SiNodedotjs, SiMongodb, SiTypescript, SiReact, SiElixir } from 'react-icons/si';
import { PiStudentBold } from 'react-icons/pi';

const items = [
  {
    icons: [<SiGraphql key="g" color="#e535ab" />, <SiNodedotjs key="n" color="#539e43" />, <SiMongodb key="m" color="#47a248" />],
    text: <>Building a GraphQL Climate API — Node.js, Apollo Server, MongoDB &amp; Vercel</>,
  },
  {
    icons: [<PiStudentBold key="s" color="#a8b4ff" />],
    text: <>Studying Web Development at Linnéuniversitetet</>,
  },
  {
    icons: [<SiTypescript key="t" color="#3178c6" />],
    text: <>Learning TypeScript</>,
  },
  {
    icons: [<SiReact key="r" color="#61dafb" />],
    text: <>Learning React</>,
  },
  {
    icons: [<SiElixir key="e" color="#9b30d9" />],
    text: <>Learning Elixir</>,
  },
];

function Home() {
  return (
    <>
      <Card />

      <section className={styles.section}>
        <Reveal>
          <p className={styles.label}>Currently</p>
        </Reveal>
        <ul className={styles.list}>
          {items.map((item, i) => (
            <Reveal as="li" key={i} delay={i * 70} className={styles.item}>
              <span className={styles.iconGroup}>{item.icons}</span>
              <span className={styles.itemText}>{item.text}</span>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Home;
