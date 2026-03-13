import { Link } from 'react-router-dom';
import styles from '../css/CaseStudy.module.css';

function UXWayOfWorking() {
  return (
    <div className={styles.page}>
      <Link to="/projects" className={styles.backLink}>← Back to Projects</Link>

      <div className={styles.hero}>
        <h3 className={styles.tag}>UX/UI Design</h3>
        <h1 className={styles.title}>UX — Way of working</h1>
      </div>

      <section className={styles.section}>
        <p>
          Att ha klara rutiner för hur UX-arbetet sker kan generera en bättre produkt. Men man
          får inte glömma att det är ett kreativt arbete — det måste finnas rum för att utforska.
          Att hitta balansen mellan rutiner och fritänkande kan vara svårt. De rutiner som jag har
          varit med att ta fram har varit nyttiga, inte bara för mig och mina UX-kollegor, men
          också för produkterna.
        </p>
      </section>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Bootcamp</h2>
        <p>
          På Gota Media berörde UX-gruppen ofta osäkerheter i projekt. Vi visste inte alltid vad
          det bästa tillvägagångssättet var och famlade i mörkret. Vi var tvungna att göra något
          åt det. Istället för att lägga ner tid på en design som sedan skulle revideras, valde vi
          att lägga ner tid på research. Det gav oss en bättre förståelse för designen, projektet
          och sparade tid.
        </p>
        <p>
          Vi bestämde oss för att ha ett återkommande möte varje vecka där vi diskuterar en
          artikel, ett koncept, en video eller liknande. Det ledde till inspirerande diskussioner
          och hur vi kunde tillämpa det vi lärt oss i arbetet. Ett ämne som diskuterades på ett
          Bootcamp-möte var tonalitetskarta — principen att klargöra vilken typ av tonalitet som
          ska användas och när. Till exempel ska tonaliteten skilja sig mellan ett felmeddelande
          och ett mailutskick. Felmeddelanden ska vara rakt på sak och inte lämna utrymme för
          olika tolkningar. Vid ett mailutskick är det bättre att vara personlig, inbjudande och
          lockande. Denna princip spred sig inom koncernen och flera medarbetare tillkom i gruppen,
          inte bara UX-designers.
        </p>

        <img src="/images/bootcamp_1.avif" alt="Bootcamp tonalitetskarta" className={styles.caseImage} />

        <p>
          Det gäller att kultivera en strävan att vilja veta mer och bli bättre. Det är väldigt
          enkelt att hamna i en rutin där man bara jobbar på för att det går bra och är enkelt.
          Men att kliva utanför boxen och leta efter ny kunskap är helt enkelt lärorikt. Det är
          målet med Bootcamp-mötet — att hålla uppe den strävan att bli bättre.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Standup board</h2>
        <p>
          Nästan alla företag inom tech-branschen har ett möte en gång om dagen eller en gång i
          veckan där arbetsuppgifter diskuteras. Vi i UX-gruppen på Gota Media hade en daglig
          standup. Vi presenterade idéer och mål för dagen. Men eftersom vi spenderar otroligt
          mycket tid i verktyget Figma höll vi vår standup där!
        </p>
        <p>
          Varje morgon klockan nio öppnade alla UX-designers standup-filen och mötet började.
          Anledningen till att vi gjorde detta var att vi skapade en hubb där vi planerade vårt
          arbete veckovis. Istället för att bara prata om de mål man har för dagen omvandlade vi
          dem till uppgifter i "Att göra"-kolumnen. Vi flyttade över dem till "Pågående" när vi
          arbetade med dem och sedan till "Klart".
        </p>

        <img src="/images/bootcamp_2.avif" alt="Standup board i Figma" className={styles.caseImage} />

        <p>
          Jag upptäckte att detta var en tydlig förbättring i mitt arbete. Att planera de små
          uppgifterna gör att projekt inte känns överväldigande. Det har blivit enkelt att planera
          min dag och inga uppgifter glöms bort. Mitt fokus var riktat mot att uppnå de mål jag
          satte upp för dagen — och oftast blir de uppnådda med hjälp av detta standup-bräde.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>UX-Panel</h2>
        <p>
          Tanken att ha en grupp av användare som frivilligt vill delta i tester och intervjuer,
          och att kunna skicka ett mail, ett test eller ett formulär och få svar innan dagens slut,
          är en dröm för en UX-designer. Så det var precis det vi gjorde!
        </p>
        <p>
          Med hjälp av marknadsavdelningen fick vi i UX-gruppen möjlighet att inkludera ett
          formulär i onboarding-mailflödet som skickas ut till nya kunder. I detta formulär ställer
          vi generella frågor om läsvanor, produkter, demografi och innehåll. Sist i formuläret
          lade vi även till en förfrågan om de skulle vilja vara en del av vår UX-panel och hjälpa
          till med utvecklingen av våra digitala produkter.
        </p>
        <p>
          När väl onboarding-mailen började skickas ut med enkäten var det inte lång tid innan de
          första läsarna skrev upp sig. Tio personer skrev upp sig den första veckan. Sedan dess
          har det tillkommit tre till fyra personer varje vecka.
        </p>
        <p>
          Det är självklart alltid frivilligt att svara på enkäter eller test som vi skickar till
          panelen. Läsarna kan välja att hoppa över ett test eller säga upp sig från panelen helt.
          Men majoriteten väljer att stanna kvar och hjälpa oss att bli bättre. Otroligt!
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>UX-Testing</h2>
        <p>
          I en stor koncern som Gota Media finns det mycket kompetens bland de anställda. Men vi
          i UX-gruppen tänkte att det skulle vara värdefullt att få deras respons på vårt arbete.
          Därför skapade vi en Slack-kanal där alla kan gå med om de vill. Målet var att samla en
          grupp med olika kunskapsområden som vi kunde rådfråga angående vårt designarbete.
        </p>
        <p>
          En snabb insikt var att folk älskar att ge sin åsikt, oavsett vad frågan handlar om.
          Sedan vi skapade UX-testing-kanalen har vi skickat ut tester och frågor gällande
          användargränssnitt, textinnehåll, köpflöden, kvalitetssäkring, intervjuer med mera. Det
          har varit en överväldigande framgång för UX-gruppens arbete och är nu en viktig del av
          designprocessen.
        </p>
      </section>

    </div>
  );
}

export default UXWayOfWorking;
