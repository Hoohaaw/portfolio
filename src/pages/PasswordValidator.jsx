import { Link } from 'react-router-dom';
import styles from '../css/CaseStudy.module.css';
import pvStyles from '../css/PasswordValidator.module.css';

function PasswordValidator() {
  return (
    <div className={styles.page}>
      <Link to="/projects" className={styles.backLink}>← Back to Projects</Link>

      <div className={styles.hero}>
        <h3 className={styles.tag}>Web Development</h3>
        <h1 className={styles.title}>Password Validator</h1>
        <p className={pvStyles.intro}>
          A lightweight JavaScript module for validating passwords against common security rules.
          Built, tested with Jest, and published as a public package on NPM.
        </p>
        <a
          href="https://github.com/Hoohaaw/Lab_2"
          target="_blank"
          rel="noreferrer"
          className={pvStyles.repoLink}
        >
          View on GitHub →
        </a>
      </div>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Overview</h2>
        <p>
          This project was built as part of the course 1DV610 at Linnéuniversitetet. The goal was
          to design and publish a reusable JavaScript module — and to take testing seriously from
          the start. The validator checks passwords against ten distinct rules and throws descriptive
          errors on failure, making it easy to integrate into any application.
        </p>
        <p>
          The package is available on NPM as <code className={pvStyles.inlineCode}>password-validator-ap</code> and
          supports both direct configuration and a config-file-based setup.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Validation Rules</h2>
        <div className={pvStyles.rulesGrid}>
          <div className={pvStyles.rule}>
            <span className={pvStyles.ruleTitle}>String type</span>
            <span className={pvStyles.ruleDesc}>Input must be a string — rejects non-string values immediately</span>
          </div>
          <div className={pvStyles.rule}>
            <span className={pvStyles.ruleTitle}>Length</span>
            <span className={pvStyles.ruleDesc}>Between 6 and 80 characters (configurable)</span>
          </div>
          <div className={pvStyles.rule}>
            <span className={pvStyles.ruleTitle}>Uppercase</span>
            <span className={pvStyles.ruleDesc}>At least one uppercase letter (A–Z)</span>
          </div>
          <div className={pvStyles.rule}>
            <span className={pvStyles.ruleTitle}>Lowercase</span>
            <span className={pvStyles.ruleDesc}>At least one lowercase letter (a–z)</span>
          </div>
          <div className={pvStyles.rule}>
            <span className={pvStyles.ruleTitle}>Digit</span>
            <span className={pvStyles.ruleDesc}>At least one numeric digit (0–9)</span>
          </div>
          <div className={pvStyles.rule}>
            <span className={pvStyles.ruleTitle}>Special character</span>
            <span className={pvStyles.ruleDesc}>At least one special character (e.g. !@#$%)</span>
          </div>
          <div className={pvStyles.rule}>
            <span className={pvStyles.ruleTitle}>No whitespace</span>
            <span className={pvStyles.ruleDesc}>Spaces, tabs and newlines are rejected</span>
          </div>
          <div className={pvStyles.rule}>
            <span className={pvStyles.ruleTitle}>Unique characters</span>
            <span className={pvStyles.ruleDesc}>Must not be a single character repeated (e.g. "aaaaaaa")</span>
          </div>
          <div className={pvStyles.rule}>
            <span className={pvStyles.ruleTitle}>Not equal to username</span>
            <span className={pvStyles.ruleDesc}>Password cannot match the provided username</span>
          </div>
          <div className={pvStyles.rule}>
            <span className={pvStyles.ruleTitle}>Blacklist</span>
            <span className={pvStyles.ruleDesc}>Configurable list of banned passwords (e.g. "password", "admin")</span>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Usage</h2>
        <p>Basic setup — configure min/max length and validate:</p>
        <pre className={pvStyles.codeBlock}>{`import PasswordValidator from "password-validator-ap";

const validator = new PasswordValidator();
validator.setMinLength(6);
validator.setMaxLength(80);

try {
  validator.validate("MyPassword123!", "myusername");
  console.log("Password is valid!");
} catch (err) {
  console.error("Validation error:", err.message);
}`}</pre>
        <p>Or load rules from a config file:</p>
        <pre className={pvStyles.codeBlock}>{`// password-validator.config.js
export default {
  minLength: 8,
  maxLength: 99,
  blacklist: ["password", "admin", "abc123"],
};`}</pre>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Testing Approach</h2>
        <p>
          Tests were written using Jest. The approach was deliberate — rather than writing tests
          after the fact, the code was analysed thoroughly to surface potential failure points
          first, and tests were then written to cover each one. This meant going beyond the
          obvious happy paths and actively looking for edge cases and unexpected inputs.
        </p>
        <p>
          The suite reached 60–70% code coverage, covering both valid passwords that should pass
          and invalid inputs that should throw specific error types (<code className={pvStyles.inlineCode}>TypeError</code>,{' '}
          <code className={pvStyles.inlineCode}>RangeError</code>, <code className={pvStyles.inlineCode}>Error</code>).
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Published on NPM</h2>
        <p>
          One of the highlights of this project was publishing it as a real package on the NPM
          registry. The package is publicly installable and usable in any JavaScript project:
        </p>
        <div className={pvStyles.npmCallout}>
          <span className={pvStyles.npmBadge}>NPM</span>
          <span className={pvStyles.npmCommand}>npm install password-validator-ap</span>
          <span className={pvStyles.npmNote}>Publicly available · MIT License · password-validator-ap</span>
        </div>
        <p>
          Going through the publishing process — versioning, writing a README, documenting the
          API, and thinking about the developer experience for consumers of the package — added
          a dimension beyond just writing code.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Roadmap</h2>
        <ul className={pvStyles.roadmapList}>
          <li>Allow custom validation rules</li>
          <li>Support returning multiple errors at once instead of failing on the first</li>
          <li>Expand configuration options</li>
        </ul>
      </section>

    </div>
  );
}

export default PasswordValidator;
