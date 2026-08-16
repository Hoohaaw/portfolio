import { useState } from "react";
import { Link } from "react-router-dom";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import styles from "../css/CaseStudy.module.css";
import sliderStyles from "../css/PartyWithMe.module.css";

const partyImageFiles = [
  "RegisterPage.png",
  "WizardRegister.png",
  "PartyPreview.png",
  "landing page logged in.png",
  "landing page not logged in.png",
  "login page.png",
  "confetti.png",
  "register page.png",
  "dashboard page.png",
  "datepicker.png",
  "timepicker.png",
  "map.png",
  "event preview.png",
  "upcoming event.png",
  "host event preview.png",
  "attendance.png",
  "share.png",
  "RSVP list.png",
  "RSVP event preview.png",
  "RSVP form.png",
  "Colours.png",
  "NotAuthedUserEventCreation.png",
  "Profile.png",
  "EventDetails.png",
  "Hero.png",
];

function toAlt(filename) {
  const name = filename.replace(/\.[^.]+$/, "");
  const spaced = name.replace(/([a-z])([A-Z])/g, "$1 $2");
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

const slides = partyImageFiles.map((file) => ({
  src: encodeURI(`/images/party-with-me/${file}`),
  alt: toAlt(file),
}));

function PartyWithMe() {
  const [current, setCurrent] = useState(0);

  return (
    <div className={styles.page}>
      <Link to="/projects" className={styles.backLink}>
        ← Back to Projects
      </Link>

      <div className={styles.hero}>
        <p className={styles.tag}>React · Supabase · TS · Tailwind</p>
        <h1 className={styles.title}>Party With Me</h1>
        <p>
          A full-stack event-planning app built for a real external client —
          hosts create a party, share a link, and guests RSVP with guardian and
          age details, no account required.
        </p>
      </div>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Overview</h2>
        <p>
          Party With Me was commissioned by a real external client as my
          capstone project for the Web Developer Programme at
          Linnéuniversitetet. The brief: a lightweight tool for planning
          kids&rsquo; birthday parties, where a host creates an event, shares a
          link, and guests RSVP without needing an account of their own.
        </p>
        <p>
          Built solo, end to end — data model, authentication and authorization,
          and the guest-facing RSVP flow that guardians actually use on the day.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Screens</h2>
        <div className={sliderStyles.slider}>
          <div className={sliderStyles.sliderFrame}>
            <img
              src={slides[current].src}
              alt={slides[current].alt}
              className={sliderStyles.sliderImage}
            />
          </div>
          <div className={sliderStyles.sliderControls}>
            <button
              className={sliderStyles.sliderBtn}
              onClick={() =>
                setCurrent((current - 1 + slides.length) % slides.length)
              }
              aria-label="Previous"
            >
              <MdArrowBackIos />
            </button>
            <span className={sliderStyles.sliderCounter}>
              {current + 1} / {slides.length}
            </span>
            <button
              className={sliderStyles.sliderBtn}
              onClick={() => setCurrent((current + 1) % slides.length)}
              aria-label="Next"
            >
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Authorization</h2>
        <p>
          Access control is enforced with Supabase Row Level Security rather
          than in application code. Hosts can only manage their own events,
          guests interact solely through a share link, and policies live at the
          database layer so authorization holds even if a request bypasses the
          API.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Timeline</h2>
        <p>
          Delivered solo over 10 weeks, from data model and auth through the
          guest-facing RSVP flow, as the capstone project for the Web
          Developer Programme.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Status</h2>
        <p>
          Live in production. Payments (Stripe) were part of the original
          brief; the client, Max Karlsson, wired them in himself after
          handoff. Client-hosted, private repo.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Tech Stack</h2>
        <p>
          React Router v7 (framework mode), React 19, TypeScript, Tailwind CSS,
          Supabase (auth + RLS), deployed on Cloudflare Workers. pnpm/Turborepo
          monorepo, shadcn-style components on top of Radix UI.
        </p>
      </section>
    </div>
  );
}

export default PartyWithMe;
