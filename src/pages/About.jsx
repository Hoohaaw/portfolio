import styles from '../css/About.module.css';

function About() {
  return (
    <div className={styles.page}>

      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.name}>Alex Palm</h1>
          <h2 className={styles.tagline}>Fullstack Developer & UX Designer</h2>
          <p className={styles.location}>📍 Madrid, Spain / Kalmar, Sweden</p>
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
          That curiosity led me to enroll in the Web Developer Program at Linnaeus University in
          2024, where I'm building on my design foundation with fullstack development skills.
          The combination of design thinking and technical ability is what I find most exciting
          — being able to take an idea from concept to working product, with the user in mind
          at every step.
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
              <li>Flutter</li>
            </ul>
          </div>
          <div className={styles.skillGroup}>
            <h3 className={styles.skillGroupTitle}>Backend & Data</h3>
            <ul className={styles.skillList}>
              <li>Node.js</li>
              <li>Express</li>
              <li>GraphQL & Apollo Server</li>
              <li>MongoDB & Mongoose</li>
              <li>SQL</li>
              <li>REST APIs</li>
              <li>JWT Authentication</li>
            </ul>
          </div>
          <div className={styles.skillGroup}>
            <h3 className={styles.skillGroupTitle}>Testing & Tooling</h3>
            <ul className={styles.skillList}>
              <li>Jest (unit testing)</li>
              <li>Playwright (E2E testing)</li>
              <li>Postman & Newman</li>
              <li>CI/CD pipelines</li>
              <li>Git & GitHub / GitLab</li>
              <li>Vercel</li>
              <li>Jira / Agile & Scrum</li>
              <li>NPM package publishing</li>
            </ul>
          </div>
          <div className={styles.skillGroup}>
            <h3 className={styles.skillGroupTitle}>UX & Design</h3>
            <ul className={styles.skillList}>
              <li>Figma</li>
              <li>Adobe XD & Sketch</li>
              <li>Adobe Illustrator & Photoshop</li>
              <li>Useberry & Maze</li>
              <li>WCAG 2.2 / Accessibility</li>
              <li>User research & testing</li>
              <li>Design systems</li>
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
              <span className={styles.timelineDate}>Summers 2023, 2024, 2025</span>
              <span className={styles.timelineCompany}>Electronic Arts — Madrid, Spain</span>
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.timelineRole}>Localization Tester (Seasonal Contract)</h3>
              <p>
                Performed localisation testing for FIFA / EA FC across Swedish and English markets.
                Logged, tracked, and reproduced bugs using Jira in an agile team environment.
                Collaborated with cross-functional QA and development teams to ensure linguistic
                and functional quality.
              </p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMeta}>
              <span className={styles.timelineDate}>Jun 2021 — Dec 2022</span>
              <span className={styles.timelineCompany}>Gota Media AB — Kalmar, Sweden</span>
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.timelineRole}>Interaction Designer</h3>
              <p>
                Designed digital products and user flows for a media group reaching 1.2 million
                readers across 39 municipalities. Led projects from pre-study through implementation,
                conducted accessibility research to support WCAG compliance, and established UX team
                workflows and routines to improve collaboration and quality standards.
              </p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMeta}>
              <span className={styles.timelineDate}>Feb 2021 — Jun 2021</span>
              <span className={styles.timelineCompany}>Webhelp Nordic</span>
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.timelineRole}>Sales Advisor</h3>
              <p>
                Managed customer relationships across two teams, handling subscription maintenance,
                upselling, and win-back campaigns.
              </p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMeta}>
              <span className={styles.timelineDate}>Sep 2019 — Jan 2020</span>
              <span className={styles.timelineCompany}>Gota Media AB — Kalmar, Sweden</span>
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.timelineRole}>Interaction Design Intern</h3>
              <p>
                Developed user-centred interface solutions and digital prototypes in Sketch.
                Produced illustrations in Adobe Illustrator used across Gota Media's premium
                news pages.
              </p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMeta}>
              <span className={styles.timelineDate}>Feb 2018 — Feb 2019</span>
              <span className={styles.timelineCompany}>Studentföreningen Prima Ingenjörer, LNU</span>
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.timelineRole}>Secretary</h3>
              <p>
                Managed administrative duties and official documentation for the LNU engineering
                student association.
              </p>
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
              <span className={styles.timelineDate}>2024 — 2026 (expected)</span>
              <span className={styles.timelineCompany}>Linnaeus University (LNU) — Kalmar, Sweden</span>
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.timelineRole}>Web Developer Program</h3>
              <p>
                Fullstack development: JavaScript, Node.js, React, MongoDB, SQL, REST APIs,
                GraphQL. App development with Flutter (Android); Testing with Jest & Playwright;
                CI/CD; Web Security.
              </p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMeta}>
              <span className={styles.timelineDate}>2017 — 2020</span>
              <span className={styles.timelineCompany}>Linnaeus University (LNU) — Kalmar, Sweden</span>
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.timelineRole}>Bachelor's Programme — Interaction Design</h3>
              <p>
                UX research, user testing, digital prototyping, agile project methods, and
                data-driven design.
              </p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMeta}>
              <span className={styles.timelineDate}>2014 — 2017</span>
              <span className={styles.timelineCompany}>Lars Kagg Gymnasiet</span>
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.timelineRole}>Technology Programme — Media & Design</h3>
              <p>
                Technical upper secondary programme with media and design focus. Extended with
                English 7 and Service & Customer Relations.
              </p>
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
        <p>
          I prefer working in cross-functional teams where design and engineering are in constant
          dialogue. I'm drawn to problems where clarity of UX and quality of implementation both
          matter — and I'm comfortable taking ownership of work from end to end, whether that
          means running user research, designing in Figma, or shipping backend logic.
        </p>
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
            <span className={styles.langLevel}>Fluent — C2</span>
          </div>
          <div className={styles.langItem}>
            <span className={styles.langName}>Spanish</span>
            <span className={styles.langLevel}>Learning</span>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
