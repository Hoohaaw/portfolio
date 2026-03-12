import { Link } from 'react-router-dom';
import styles from '../css/CaseStudy.module.css';

function Tillganglighet() {
  return (
    <div className={styles.page}>
      <Link to="/projects" className={styles.backLink}>← Back to Projects</Link>

      <div className={styles.hero}>
        <h3 className={styles.tag}>UX/UI Design</h3>
        <h1 className={styles.title}>Tillgänglighet</h1>
      </div>

      <section className={styles.section}>
        <p>
          Som UX-designer är tanken på tillgänglighet alltid närvarande. Det är självklart att vi
          vill att så många som möjligt ska kunna ta del av det vi producerar, och det finns ingen
          tvekan om det. Utmaningen uppstår dock när vi funderar över hur vi som designers kan göra
          våra produkter tillgängliga för både våra befintliga användare och samtidigt inkludera nya
          användare. Det finns många olika sätt att förbättra tillgängligheten i både äldre och nyare
          produkter. Nedan är några av de ändringar jag har varit med om att implementera under min
          tid som UX-designer på Gota Media.
        </p>
      </section>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Färg</h2>
        <p>
          I arbetet med tillgänglighet upptäckte vi att några av de färger vi använde på våra
          hemsidor och i vårt designsystem inte uppfyllde kontrastkraven enligt WCAG 2.2. Det
          handlade om primära färger på några av de mest trafikerade sidorna. Det blev tydligt att
          vi var tvungna att göra en förändring.
        </p>
        <p>
          Som en del av detta genomfördes en utredning av färgerna som användes i vårt
          designbibliotek. Det visade sig att det fanns fler brister i kontrastvärdena. Detta
          berodde på att färgerna som användes inte hade tagits fram med något konkret underlag,
          utan hade bara valts utan grund.
        </p>
        <p>
          Jag bestämde mig för att åtgärda detta. Tillsammans med en front-end kollega skapade vi
          en färgpalettgenerator — ett program som genererar färger baserat på de intervaller vi
          själva sätter. Dessa intervaller kan självklart ändras och anpassas efter behov.
        </p>
        <p>
          Anledningen till att vi gick så långt som att skapa en egen produkt var att minska
          förvirringen både nu och i framtiden. Tanken är att om behovet uppstår att ta fram
          ytterligare en primär färg kan vi använda detta program för att få färger med samma
          skillnader gentemot de tidigare färgerna. Genom att mata in samma värden för intervallerna
          genereras en palett med samma proportioner av svart och vitt. På så sätt kan vi exempelvis
          få en perfekt mörkare färg för en hover-effekt på en knapp.
        </p>
        <p>
          För att säkerställa att de genererade färgerna faktiskt uppfyller de olika nivåerna av
          godkännande enligt WCAG lade vi även till en automatisk kontrastkontroll i vår
          färgpalettgenerator. Detta gör det enkelt att direkt se om de genererade färgerna uppnår
          de krav som ställs för tillgänglighet enligt WCAG.
        </p>

        <div className={styles.imagePlaceholder}>
          <span>Image: Färgpalettgenerator screenshot</span>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Ikoner</h2>
        <p>
          Med hemsidor som har varit i bruk under en längre tid finns det alltid kvarlevor av
          tidigare design. De ikoner som Gota Media använder är ett exempel på detta. Efter att ha
          varit med om två stora redesigns är det oundvikligt att lite digitalt skräp blir kvar.
          Det som har hänt är att flera olika ikonbibliotek har använts. Och när de inte har räckt
          till har man skapat egna ikoner. Detta har i sin tur gjort att det inte finns en enhetlig
          design — olika vikter på ikoner, olika storlekar, olika avrundningar.
        </p>
        <p>
          De lösningar som finns är att komplettera med egna ikoner eller att byta bibliotek helt.
          Vi valde att byta bibliotek. Det biblioteket som uppfyllde de krav vi hade, men också
          hade alla de ikoner som behövdes, var Heroicons av Tailwind. Heroicons har versioner av
          sina ikoner som är byggda av linjer istället för punkter. Det innebär att i Figma har man
          möjligheten att ändra tjockleken på ikonerna, vilket ger möjlighet att anpassa ikonerna
          efter kontext.
        </p>
        <p>
          Med övergången till Heroicons försvinner problemen med fel vikter, fel storlekar och fel
          avrundningar. Topp!
        </p>
      </section>

    </div>
  );
}

export default Tillganglighet;
