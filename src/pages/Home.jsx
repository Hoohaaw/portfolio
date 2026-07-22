import { Link } from 'react-router-dom';
import Card from '../Intro-card.jsx';
import Reveal from '../components/Reveal.jsx';
import styles from '../css/Now.module.css';
import { useLanguage } from '../i18n/languageStore.js';
import {
  SiGraphql, SiNodedotjs, SiMongodb, SiTypescript, SiReact, SiElixir,
  SiTailwindcss, SiSupabase, SiObsidian, SiFlutter,
} from 'react-icons/si';

function Home() {
  const { t } = useLanguage();

  const groups = [
    {
      id: 'work',
      label: t('now.work'),
      items: [
        {
          icons: [<span key="dot" className={styles.statusDot} />],
          text: <><strong>{t('now.workStatus')}</strong> {t('now.workStatusRest')}</>,
          status: true,
        },
        {
          icons: [<span key="b" className={styles.markerGlyph} />],
          text: t('now.workEA'),
        },
      ],
    },
    {
      id: 'projects',
      label: t('nav.projects'),
      items: [
        {
          icons: [<SiGraphql key="g" color="#e535ab" />, <SiNodedotjs key="n" color="#539e43" />, <SiMongodb key="m" color="#47a248" />],
          text: t('now.projectClimateApi'),
        },
        {
          icons: [<SiReact key="r" color="#61dafb" />, <SiTypescript key="t" color="#3178c6" />, <SiTailwindcss key="tw" color="#38bdf8" />, <SiSupabase key="sb" color="#3ecf8e" />],
          text: t('now.projectIdleAgentic'),
        },
        {
          icons: [<SiObsidian key="ob" color="#7c3aed" />, <SiFlutter key="fl" color="#02569b" />, <span key="db" className={styles.markerGlyph} />],
          text: t('now.projectSync'),
        },
      ],
    },
    {
      id: 'certificates',
      label: t('now.certificates'),
      items: [],
      link: { to: '/certificates', text: t('now.certLink') },
    },
    {
      id: 'learning',
      label: t('now.learning'),
      items: [
        { icons: [<SiTypescript key="t" color="#3178c6" />], text: 'TypeScript' },
        { icons: [<SiReact key="r" color="#61dafb" />], text: 'React' },
        { icons: [<SiElixir key="e" color="#9b30d9" />], text: 'Elixir' },
      ],
    },
  ];

  return (
    <>
      <Card />

      <section className={styles.now}>
        {groups.map((group) => (
          <div className={styles.group} key={group.id}>
            <Reveal>
              <p className={styles.label}>{group.label}</p>
            </Reveal>
            {group.items.length > 0 ? (
              <ul className={styles.list}>
                {group.items.map((item, i) => (
                  <Reveal
                    as="li"
                    key={i}
                    delay={i * 70}
                    className={`${styles.item} ${item.status ? styles.itemStatus : ''}`}
                  >
                    <span className={styles.iconGroup}>{item.icons}</span>
                    <span className={styles.itemText}>{item.text}</span>
                  </Reveal>
                ))}
              </ul>
            ) : (
              <Reveal as="p" className={styles.empty}>
                <span className={styles.markerGlyph} aria-hidden="true" />
                {t('now.certEmpty')}
              </Reveal>
            )}
            {group.link && (
              <Reveal as="p" className={styles.groupLink}>
                <Link to={group.link.to}>{group.link.text}<span aria-hidden="true"> →</span></Link>
              </Reveal>
            )}
          </div>
        ))}
      </section>
    </>
  );
}

export default Home;
