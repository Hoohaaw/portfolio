import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/SelfServiceProductChange.module.css';

const slides = [
  { src: '/images/pc_3.avif', alt: 'Locked article — steg 2/4' },
  { src: '/images/pc_4.avif', alt: 'Locked article — steg 3/4' },
  { src: '/images/pc_5.avif', alt: 'Locked article — steg 4/4' },
];

function SelfServiceProductChange() {
  const [current, setCurrent] = useState(0);

  return (
    <div className={styles.page}>
      <Link to="/projects" className={styles.backLink}>← Back to Projects</Link>

      <div className={styles.hero}>
        <h3 className={styles.tag}>UX/UI Design</h3>
        <h1 className={styles.title}>Self-service - Product change</h1>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>TLDR</h2>
        <p>
          Gota Media är en prenumerationsbaserad media koncern som arbetar i nyhetsbranchen.
          Ett initiativ togs för att ge möjligheten till användare att ändra deras prenumeration
          självmant då det tidigare krävdes kontakt med kundservice. Detta ska ge mer frihet till
          användaren och även sänka antalet samtal som kundcenter agenter behöver administrera.
          Designen och användarflödet som togs fram baserades på möjligheten att jämföra
          prenumerationspaket. Kortbetalande kunder kan nu byta prenumeration fritt och fler
          betalningsmetoder ska tillkomma. För tillfället sker flera produktbyten dagligen och
          projektet anses lyckat.
        </p>
      </section>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Intro</h2>
        <p>
          Gota Media är en Medie koncern som fokuserar primärt på lokala nyheter i södra Sverige.
          De har en räckvidd på 39 kommuner och 1 200 000 läsare.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Problem</h2>
        <p>
          Målet med product change projektet är att ge våra läsare möjligheten att ändra deras
          prenumerationsval online. Vid projektets start var det enda sättet att ändra eller säga
          upp sin prenumeration som läsare var att kontakta kundcenter. Det i sin tur gjorde att
          det ofta var långa telefonköer som hindrade kundservice agenterna att hjälpa andra kunder.
        </p>
        <p>
          Samt idag förväntar sig användare på en prenumerationsbaserad tjänst att man kan hantera
          sin prenumeration online. Som ett exempel, Netflix. Det är otänkbart att Netflix skulle ha
          ett kundcenter som kan besvara alla samtal angående byte eller uppsägning. Svaret är att
          låta användarna göra det själva!
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Locked article</h2>
        <p>
          Eftersom livestreamat innehåll hade genererat mycket klick på hemsidorna ansågs det som
          en viktig USP. Det gjorde att ett ytterligare projekt startades upp som skulle framhäva
          premium innehåll för prenumerationspaketet "Digital Plus" — alltså det största endast
          digitala prenumerationen. Det gjorde att "Digital Bas" tappade detta. Därmed tillkom
          uppgiften att förenkla processen att byta paket för Digital Bas användare även i product
          change projektet.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Lösning</h2>
        <p>
          Jag kom fram till att det var jämförelsen mellan prenumerationer som var det användaren
          var ute efter. Alltså hur ställer sig de olika paketen emot varandra — vad får jag, vad
          får jag inte?
        </p>
        <p>
          Det uppnådde jag genom att använda det vi kallade "prenumerationskort." Det är kort som
          innehåller USP:ar för de olika paketen som går att köpa. För att få en starkare känsla
          för vad som tillkommer eller försvinner vid ett byte modifierade jag funktionaliteten av
          korten. Alla USP:ar visas ut oberoende av paket. Med hjälp av färg, ikoner samt
          funktionalitet visualiseras det innehåll som tillkommer eller tappas.
        </p>
        <img src="/images/pc_2.avif" alt="Locked article — steg 1/4" className={styles.caseImage} />
        <p>
          Korten och USP:arna är även reaktiva. Eftersom möjligheten att byta paket endast
          tillkommer när man redan har en aktiv prenumeration kan det användas som en fördel för
          projektet. Korten känner av vilket paket användaren har i nuläget och baserat på det
          ändrar informationen inuti. På det sättet får användaren alltid en direkt jämförelse
          mellan paketen. Det visuella stödet hjälper användaren att skanna av alternativen och
          sedan göra sitt beslut.
        </p>

        <img src="/images/pc_1.avif" alt="Subscription card comparison — Desktop view" className={styles.caseImage} />

        <p>
          Komponenten som användaren möts av när de inte har tillgång till en artikel hänvisade
          tidigare till ett köp eller inloggning. Men eftersom vi vet att kunden har en aktiv
          prenumeration redan kan vi istället visa en uppgraderingsmöjlighet.
        </p>
        <p>
          Det var viktigt för mig att användaren inte skulle bli iväg slungad till andra sidor för
          att göra sitt byte och sedan försöka leta sig tillbaks till den artikeln de ville läsa.
          För att undvika detta använder vi modaler för att genomföra bytet. Det gör att all
          information om själva bytet finns i modalen men användaren är fortfarande kvar i artikeln.
          Efter ett lyckat byte laddas sidan om och artikeln är magiskt upplåst!
        </p>

        <div className={styles.slider}>
          <img src={slides[current].src} alt={slides[current].alt} className={styles.sliderImage} />
          <div className={styles.sliderControls}>
            <button
              className={styles.sliderBtn}
              onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
              aria-label="Previous"
            >&#8592;</button>
            <span className={styles.sliderCounter}>{current + 1} / 3</span>
            <button
              className={styles.sliderBtn}
              onClick={() => setCurrent((current + 1) % slides.length)}
              aria-label="Next"
            >&#8594;</button>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Resultat</h2>
        <p>
          Vid tiden då detta är skrivet är det flera produktbyten om dagen som görs av användarna
          själva, samtalen till kundcentret har minskat och fler läsare har rätt prenumeration för
          deras användningsområden. All in all ett lyckat projekt!
        </p>
        <p>
          Dock fortskrider fortfarande projektet med att inkludera alla betalningsmetoder. Det är
          en ständig back-end kamp att få alla system att jobba ihop med alla typer av kunder.
          Betalningar som sker genom autogiro hanteras annorlunda från de som kommer från fakturor.
        </p>
      </section>

    </div>
  );
}

export default SelfServiceProductChange;
