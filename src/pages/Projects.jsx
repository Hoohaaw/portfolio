import styles from '../css/project.module.css';
import Reveal from '../components/Reveal.jsx';
import ProjectCard from '../components/ProjectCard.jsx';

const webProjects = [
  {
    to: '/projects/party-with-me',
    tag: 'React · Supabase · TS · Tailwind',
    title: 'Party With Me',
    desc: 'Built for a real external client as my capstone project for the Web Developer Programme at Linnéuniversitetet. A lightweight way for hosts to plan a kids’ birthday party.',
  },
  {
    to: '/projects/climate-api',
    tag: 'GraphQL · MongoDB · Vercel',
    title: 'Climate API',
    desc: 'A GraphQL API serving historical temperature data across 17 countries, built with Apollo Server and MongoDB.',
  },
  {
    to: '/projects/password-validator',
    tag: 'JavaScript · Jest · NPM',
    title: 'Password Validator',
    desc: 'A JavaScript module validating passwords against 10 security rules. Tested with Jest and published on NPM.',
  },
  {
    to: '/projects/idle-game',
    tag: 'Node.js · Express · MongoDB',
    title: 'Idle Game',
    desc: 'A browser-based idle game built for short 5–10 minute sessions. Designed so the player can put it down and pick it back up.',
  },
];

const agenticProjects = [
  {
    to: '/projects/idle-game-agentic',
    tag: 'Agentic Coding',
    title: 'Idle Game — Agentic Rebuild',
    desc: 'Rebuilding the Idle Game with agentic coding — React, TypeScript, Tailwind & Supabase.',
  },
];

const inProgressProjects = [
  {
    to: '/projects/vault-sync',
    tag: 'Obsidian · Flutter · Dashboard',
    title: 'Vault Sync',
    desc: 'Building a sync tool between Obsidian, Flutter & a custom dashboard — starting with a shared to-do list.',
  },
  {
    to: '/projects/homelab-dashboard',
    tag: 'Grafana · Prometheus · Docker · TrueNAS Scale',
    title: 'Homelab Dashboard',
    desc: 'A self-hosted home server on TrueNAS Scale, with a monitoring dashboard tracking host and container vitals.',
  },
];

const uxProjects = [
  {
    to: '/projects/self-service-product-change',
    tag: 'UX/UI Design',
    title: 'Self-service — Product change',
    desc: 'Giving subscribers the ability to change their subscription plan online, reducing calls to customer support.',
  },
  {
    to: '/projects/tillganglighet',
    tag: 'UX/UI Design',
    title: 'Tillgänglighet',
    desc: 'Improving accessibility across Gota Media’s products — WCAG compliance, colour contrast, and icon system overhaul.',
  },
  {
    to: '/projects/ux-way-of-working',
    tag: 'UX/UI Design',
    title: 'UX — Way of working',
    desc: 'Establishing team rituals like Bootcamp, Standup boards, a UX panel, and an internal testing channel.',
  },
];

function Project() {
  return (
    <div className={styles.page}>
      <Reveal className={styles.intro}>
        <h1>Projects</h1>
        <p>Projects from school, work, and personal exploration.</p>
      </Reveal>

      <section className={styles.section}>
        <Reveal>
          <h2 className={styles.sectionLabel}>Web Development</h2>
        </Reveal>
        <div className={styles.grid}>
          {webProjects.map((p, i) => (
            <Reveal key={p.to} delay={i * 80}>
              <ProjectCard
                {...p}
                variant="dev"
                index={String(i + 1).padStart(2, '0')}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <Reveal>
          <h2 className={styles.sectionLabel}>Agentic Coding</h2>
        </Reveal>
        <div className={styles.grid}>
          {agenticProjects.map((p, i) => (
            <Reveal key={p.to} delay={i * 80}>
              <ProjectCard
                {...p}
                variant="dev"
                index={String(i + 1).padStart(2, '0')}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <Reveal>
          <h2 className={styles.sectionLabel}>In Progress</h2>
        </Reveal>
        <div className={styles.grid}>
          {inProgressProjects.map((p, i) => (
            <Reveal key={p.to} delay={i * 80}>
              <ProjectCard
                {...p}
                variant="dev"
                index={String(i + 1).padStart(2, '0')}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <Reveal>
          <h2 className={styles.sectionLabel}>UX Design — Gota Media</h2>
        </Reveal>
        <div className={styles.grid}>
          {uxProjects.map((p, i) => (
            <Reveal key={p.to} delay={i * 80}>
              <ProjectCard
                {...p}
                variant="ux"
                index={String(i + 1).padStart(2, '0')}
              />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Project;
