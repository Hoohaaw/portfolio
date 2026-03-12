import styles from '../css/Contact.module.css';

function Contact() {
  return (
    <div className={styles.page}>

      <div className={styles.header}>
        <h1 className={styles.title}>Get in touch</h1>
        <p className={styles.subtitle}>
          I&apos;m open to new opportunities, collaborations, and conversations.
          The best way to reach me is by email or LinkedIn.
        </p>
      </div>

      <div className={styles.cards}>

        <a href="mailto:Alex.cj.palm@proton.me" className={styles.card}>
          <div className={styles.cardIcon}>✉</div>
          <div className={styles.cardContent}>
            <span className={styles.cardLabel}>Email</span>
            <span className={styles.cardValue}>Alex.cj.palm@proton.me</span>
            <span className={styles.cardHint}>Click to open mail client</span>
          </div>
          <span className={styles.cardArrow}>→</span>
        </a>

        <a
          href="https://www.linkedin.com/in/alex-palm-0b70091b6/"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          <div className={styles.cardIcon}>in</div>
          <div className={styles.cardContent}>
            <span className={styles.cardLabel}>LinkedIn</span>
            <span className={styles.cardValue}>alex-palm-0b70091b6</span>
            <span className={styles.cardHint}>Opens in new tab</span>
          </div>
          <span className={styles.cardArrow}>→</span>
        </a>

        <a
          href="https://github.com/Hoohaaw"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          <div className={styles.cardIcon}>⌥</div>
          <div className={styles.cardContent}>
            <span className={styles.cardLabel}>GitHub</span>
            <span className={styles.cardValue}>github.com/Hoohaaw</span>
            <span className={styles.cardHint}>Opens in new tab</span>
          </div>
          <span className={styles.cardArrow}>→</span>
        </a>

      </div>

      <div className={styles.note}>
        <p>Based in Sweden · Available for remote work</p>
      </div>

    </div>
  );
}

export default Contact;
