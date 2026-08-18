import { Link } from 'react-router-dom';
import Card from '../Intro-card.jsx';
import Reveal from '../components/Reveal.jsx';
import ContactForm from '../components/ContactForm.jsx';
import styles from '../css/Now.module.css';
import { useLanguage } from '../i18n/languageStore.js';
import {
  SiGraphql, SiNodedotjs, SiMongodb, SiTypescript, SiReact, SiElixir,
  SiTailwindcss, SiSupabase, SiObsidian, SiFlutter,
  SiGrafana, SiPrometheus, SiDocker,
} from 'react-icons/si';
import { PiCertificateBold } from 'react-icons/pi';

const GENAI_CERT_URL = encodeURI('/certificates/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.pdf');
const CLAUDE_101_URL = encodeURI('/certificates/Claude 101.pdf');
const CLAUDE_CODE_101_URL = encodeURI('/certificates/Claude Code 101.pdf');
const CLAUDE_PLATFORM_101_URL = encodeURI('/certificates/Claude Platform 101.pdf');
const INTRO_MCP_URL = encodeURI('/certificates/Introduction to Model Context Protocol.pdf');
const AI_FLUENCY_STUDENTS_URL = encodeURI('/certificates/AI Fluency for Students.pdf');

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
        {
          icons: [<span key="b2" className={styles.markerGlyph} />],
          text: t('now.workEA2026'),
        },
      ],
    },
    {
      id: 'projects',
      label: t('nav.projects'),
      items: [
        {
          icons: [<SiGraphql key="g" color="#e535ab" />, <SiNodedotjs key="n" color="#539e43" />, <SiMongodb key="m" color="#47a248" />],
          text: <Link to="/projects/climate-api">{t('now.projectClimateApi')}</Link>,
        },
        {
          icons: [<SiReact key="r" color="#61dafb" />, <SiTypescript key="t" color="#3178c6" />, <SiTailwindcss key="tw" color="#38bdf8" />, <SiSupabase key="sb" color="#3ecf8e" />],
          text: <Link to="/projects/idle-game-agentic">{t('now.projectIdleAgentic')}</Link>,
        },
        {
          icons: [<SiObsidian key="ob" color="#7c3aed" />, <SiFlutter key="fl" color="#02569b" />, <span key="db" className={styles.markerGlyph} />],
          text: <Link to="/projects/vault-sync">{t('now.projectSync')}</Link>,
        },
        {
          icons: [<SiGrafana key="gf" color="#f46800" />, <SiPrometheus key="pr" color="#e6522c" />, <SiDocker key="dk" color="#2496ed" />],
          text: <Link to="/projects/homelab-dashboard">{t('now.projectHomelab')}</Link>,
        },
      ],
    },
    {
      id: 'certificates',
      label: t('now.certificates'),
      items: [
        {
          icons: [<PiCertificateBold key="c" color="#f5a623" />],
          text: <a href={GENAI_CERT_URL} target="_blank" rel="noreferrer">{t('now.certGenAI')}</a>,
        },
        {
          icons: [<PiCertificateBold key="c1" />],
          text: <a href={CLAUDE_101_URL} target="_blank" rel="noreferrer">{t('now.certClaude101')}</a>,
        },
        {
          icons: [<PiCertificateBold key="c2" />],
          text: <a href={CLAUDE_CODE_101_URL} target="_blank" rel="noreferrer">{t('now.certClaudeCode101')}</a>,
        },
        {
          icons: [<PiCertificateBold key="c3" />],
          text: <a href={CLAUDE_PLATFORM_101_URL} target="_blank" rel="noreferrer">{t('now.certClaudePlatform101')}</a>,
        },
        {
          icons: [<PiCertificateBold key="c4" />],
          text: <a href={INTRO_MCP_URL} target="_blank" rel="noreferrer">{t('now.certIntroMcp')}</a>,
        },
        {
          icons: [<PiCertificateBold key="c5" />],
          text: <a href={AI_FLUENCY_STUDENTS_URL} target="_blank" rel="noreferrer">{t('now.certAiFluencyStudents')}</a>,
        },
      ],
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
                    <span className={styles.iconGroup} aria-hidden="true">{item.icons}</span>
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

      <ContactForm />
    </>
  );
}

export default Home;
