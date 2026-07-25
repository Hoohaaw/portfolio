import { useForm, ValidationError } from '@formspree/react';
import Reveal from './Reveal.jsx';
import styles from '../css/ContactForm.module.css';
import { useLanguage } from '../i18n/languageStore.js';

const FORM_ID = 'xbdnpokl';

function ContactForm() {
  const { t } = useLanguage();
  const [state, handleSubmit] = useForm(FORM_ID);

  if (state.succeeded) {
    return (
      <section className={styles.contact}>
        <Reveal as="p" className={styles.success}>{t('contactForm.success')}</Reveal>
      </section>
    );
  }

  return (
    <section className={styles.contact}>
      <Reveal>
        <p className={styles.label}>{t('contactForm.label')}</p>
      </Reveal>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.fieldLabel}>{t('contactForm.name')}</label>
            <input id="name" type="text" name="name" required className={styles.input} />
            <ValidationError prefix="Name" field="name" errors={state.errors} className={styles.error} />
          </div>

          <div className={styles.field}>
            <label htmlFor="company" className={styles.fieldLabel}>{t('contactForm.company')}</label>
            <input id="company" type="text" name="company" className={styles.input} />
            <ValidationError prefix="Company" field="company" errors={state.errors} className={styles.error} />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="email" className={styles.fieldLabel}>{t('contactForm.email')}</label>
          <input id="email" type="email" name="email" required className={styles.input} />
          <ValidationError prefix="Email" field="email" errors={state.errors} className={styles.error} />
        </div>

        <div className={styles.field}>
          <label htmlFor="subject" className={styles.fieldLabel}>{t('contactForm.subject')}</label>
          <input id="subject" type="text" name="subject" required className={styles.input} />
          <ValidationError prefix="Subject" field="subject" errors={state.errors} className={styles.error} />
        </div>

        <div className={styles.field}>
          <label htmlFor="message" className={styles.fieldLabel}>{t('contactForm.message')}</label>
          <textarea id="message" name="message" required rows={5} className={styles.textarea} />
          <ValidationError prefix="Message" field="message" errors={state.errors} className={styles.error} />
        </div>

        <button type="submit" disabled={state.submitting} className={styles.submit}>
          {state.submitting ? t('contactForm.sending') : t('contactForm.send')}
        </button>

        <ValidationError errors={state.errors} className={styles.error} />
      </form>
    </section>
  );
}

export default ContactForm;
