import { Link } from 'react-router-dom';
import styles from '../css/CaseStudy.module.css';

function LocalizationQA() {
  return (
    <div className={styles.page}>
      <Link to="/projects" className={styles.backLink}>← Back to Projects</Link>

      <div className={styles.hero}>
        <p className={styles.tag}>Localization QA</p>
        <h1 className={styles.title}>Localization Testing — EA SPORTS FC</h1>
        <p>
          Each summer since 2023 I've worked as a seasonal Localization Tester at Electronic
          Arts in Madrid, on the EA SPORTS FC (formerly FIFA) series. The role sits at the
          intersection of QA and language — making sure the game reads correctly, consistently,
          and naturally in every supported language before it ships.
        </p>
      </div>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What the work involves</h2>
        <p>
          Localization testing means going through in-game text, UI labels, and subtitles and
          checking them against the source content in every target language. That covers two
          kinds of issues: linguistic (mistranslations, tone mismatches, text that doesn't fit
          its container, missing context for translators) and functional (strings that don't
          load, placeholder text left in a build, truncated or overlapping text). Every build
          gets a regression pass to confirm previously fixed issues stay fixed.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Process</h2>
        <p>
          Every issue gets logged in a bug tracker with clear reproduction steps, screenshots or
          video, severity, and the affected language(s). Triage means deciding what blocks a
          release versus what can be scheduled for a later patch. A meaningful part of the job
          is coordination — working with linguists to confirm whether something is a translation
          issue or an implementation issue, and with developers to verify a fix actually resolves
          what was reported, not just what it looks like on the surface.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What I took from it</h2>
        <p>
          Localization QA rewards exactly the habits I want to bring into QA more broadly:
          reading closely, questioning assumptions, and not letting "probably fine" pass as
          verified. Testing the same flows across many languages and builds, summer after
          summer, built a structured, repeatable way of working — and a lot of practice
          communicating a bug so clearly that someone else can reproduce it without asking a
          follow-up question. That combination of rigor and cross-team communication is the
          throughline connecting this work to my UX and QA experience.
        </p>
      </section>
    </div>
  );
}

export default LocalizationQA;
