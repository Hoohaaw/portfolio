import styles from '../css/About.module.css';

function About() {
  return (
    <div className={styles.page}>

      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.name}>Alex Palm</h1>
          <h2 className={styles.tagline}>Fullstack Developer & UX Designer</h2>
          <p className={styles.location}>📍 [Your city], Sweden</p>
        </div>
        <div className={styles.photoPlaceholder}><span>Photo</span></div>
      </div>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>My Story</h2>
        <p>
          I started my career as a UX designer, working at Gota Media where I designed digital
          products for over 1.2 million readers across 39 municipalities in southern Sweden.
          Working closely with developers made me curious about what was happening on the other
          side — I wanted to understand not just how things should look and feel, but how they
          actually get built.
        </p>
        <p>
          [Add 1–2 sentences about why you decided to study frontend development and what
          excites you about the combination of design and code.]
        </p>
        <p>
          Today I bring both perspectives to every project. I think about users when I write
          code, and I think about implementation when I design.
        </p>
      </section>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillGroup}>
            <h3 className={styles.skillGroupTitle}>Frontend</h3>
            <ul className={styles.skillList}>
              <li>React</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML & CSS</li>
              <li>CSS Modules</li>
              <li>Vite</li>
              <li>React Router</li>
            </ul>
          </div>
          <div className={styles.skillGroup}>
            <h3 className={styles.skillGroupTitle}>Backend & Data</h3>
            <ul className={styles.skillList}>
              <li>Node.js</li>
              <li>GraphQL & Apollo Server</li>
              <li>MongoDB & Mongoose</li>
              <li>REST APIs</li>
              <li>JWT Authentication</li>
            </ul>
          </div>
          <div className={styles.skillGroup}>
            <h3 className={styles.skillGroupTitle}>Testing & Tooling</h3>
            <ul className={styles.skillList}>
              <li>Jest (unit testing)</li>
              <li>Postman & Newman</li>
              <li>CI/CD pipelines</li>
              <li>Git & GitHub / GitLab</li>
              <li>NPM package publishing</li>
            </ul>
          </div>
          <div className={styles.skillGroup}>
            <h3 className={styles.skillGroupTitle}>UX & Design</h3>
            <ul className={styles.skillList}>
              <li>Figma</li>
              <li>WCAG 2.2 / Accessibility</li>
              <li>User research & testing</li>
              <li>Design systems</li>
              <li>[Add other tools you use]</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMeta}>
              <span className={styles.timelineDate}>[Start year] — [End year]</span>
              <span className={styles.timelineCompany}>Gota Media</span>
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.timelineRole}>UX Designer</h3>
              <p>
                Designed digital products and user flows for a media group reaching 1.2 million
                readers across 39 municipalities. Led UX work on subscription self-service,
                accessibility improvements (WCAG 2.2), and internal design process development.
              </p>
              <p>[Add any other highlights or responsibilities.]</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMeta}>
              <span className={styles.timelineDate}>[Year] — [Year]</span>
              <span className={styles.timelineCompany}>[Other company or role if applicable]</span>
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.timelineRole}>[Role title]</h3>
              <p>[Short description]</p>
            </div>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMeta}>
              <span className={styles.timelineDate}>[Start year] — [End year]</span>
              <span className={styles.timelineCompany}>Linnéuniversitetet</span>
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.timelineRole}>Frontend Development</h3>
              <p>
                [Add programme name. Relevant courses include: API Design, Software Testing,
                Web Development, UX Design.]
              </p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMeta}>
              <span className={styles.timelineDate}>[Years]</span>
              <span className={styles.timelineCompany}>[Previous school if relevant]</span>
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.timelineRole}>[Programme or degree]</h3>
              <p>[Short description]</p>
            </div>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>How I work</h2>
        <p>
          I care about building things that are accessible, tested, and maintainable — not just
          things that look good in a demo. Having worked on both sides of the design–development
          handoff, I know how much smoother projects go when those two perspectives are aligned
          from the start.
        </p>
        <p>[Add a few sentences about your working style, what you value in a team, or what kinds of problems excite you.]</p>
      </section>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Languages</h2>
        <div className={styles.langGrid}>
          <div className={styles.langItem}>
            <span className={styles.langName}>Swedish</span>
            <span className={styles.langLevel}>Native</span>
          </div>
          <div className={styles.langItem}>
            <span className={styles.langName}>English</span>
            <span className={styles.langLevel}>Professional</span>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
