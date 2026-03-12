import { Link } from 'react-router-dom';
import styles from '../css/CaseStudy.module.css';
import apiStyles from '../css/ClimateAPI.module.css';

function ClimateAPI() {
  return (
    <div className={styles.page}>
      <Link to="/projects" className={styles.backLink}>← Back to Projects</Link>

      <div className={styles.hero}>
        <h3 className={styles.tag}>Web Development</h3>
        <h1 className={styles.title}>Climate API</h1>
        <p className={apiStyles.intro}>
          A GraphQL API serving historical temperature data across 17 countries, their cities,
          and thousands of temperature readings. Built with Apollo Server, Node.js, MongoDB, and
          deployed on Vercel.
        </p>
      </div>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Overview</h2>
        <p>
          The Climate API exposes a dataset of average temperature readings grouped by country and
          city. It covers 17 countries, each containing multiple cities with geographic coordinates
          and a series of dated temperature readings. The API is built with GraphQL, giving consumers
          the flexibility to query exactly the data they need in a single request.
        </p>
        <p>
          The project was built as part of the API Design course at Linnéuniversitetet and served
          as the backend for a subsequent data dashboard assignment.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Tech Stack</h2>
        <div className={apiStyles.techGrid}>
          <div className={apiStyles.techItem}>
            <span className={apiStyles.techName}>GraphQL + Apollo Server</span>
            <span className={apiStyles.techDesc}>Single-endpoint API with typed schema</span>
          </div>
          <div className={apiStyles.techItem}>
            <span className={apiStyles.techName}>Node.js</span>
            <span className={apiStyles.techDesc}>Runtime environment</span>
          </div>
          <div className={apiStyles.techItem}>
            <span className={apiStyles.techName}>MongoDB + Mongoose</span>
            <span className={apiStyles.techDesc}>Database and schema modelling</span>
          </div>
          <div className={apiStyles.techItem}>
            <span className={apiStyles.techName}>Vercel</span>
            <span className={apiStyles.techDesc}>Deployment and hosting</span>
          </div>
          <div className={apiStyles.techItem}>
            <span className={apiStyles.techName}>JWT</span>
            <span className={apiStyles.techDesc}>Authentication for write operations</span>
          </div>
          <div className={apiStyles.techItem}>
            <span className={apiStyles.techName}>Postman / Newman</span>
            <span className={apiStyles.techDesc}>Automated testing via CI/CD pipeline</span>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Data Model</h2>
        <p>
          The dataset is structured around three resources:
        </p>
        <ul className={apiStyles.resourceList}>
          <li>
            <strong>Temperature readings</strong> — the primary CRUD resource. Each reading
            contains a date and an average temperature value, linked to a city.
          </li>
          <li>
            <strong>Cities</strong> — read-only. Each city has a name, latitude, and longitude,
            and belongs to a country.
          </li>
          <li>
            <strong>Countries</strong> — read-only. 17 countries, each containing a collection
            of cities.
          </li>
        </ul>
        <p>
          The nested structure maps naturally to GraphQL. A typical query traverses from country
          down to cities and their readings in one request:
        </p>
        <pre className={apiStyles.codeBlock}>{`query {
  country(name: "Sweden") {
    name
    cities {
      name
      latitude
      longitude
      readings {
        date
        averageTemperature
      }
    }
  }
}`}</pre>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Design Decisions</h2>
        <h3 className={apiStyles.subHeading}>GraphQL over REST</h3>
        <p>
          Choosing GraphQL meant a single <code className={apiStyles.inlineCode}>/graphql</code> endpoint
          handles all queries and mutations. Compared to REST, this eliminates over-fetching —
          a client querying only country names does not receive city or reading data it doesn't need.
          The strongly typed schema also acts as built-in documentation.
        </p>
        <h3 className={apiStyles.subHeading}>Nested queries</h3>
        <p>
          The schema is designed so that relationships between countries, cities, and readings can
          be resolved in a single query. This is one of GraphQL's key advantages over REST, where
          the same data would typically require multiple round trips.
        </p>
        <h3 className={apiStyles.subHeading}>JWT Authentication</h3>
        <p>
          Write operations (creating, updating, and deleting temperature readings) are protected
          with JWT. Read queries are publicly accessible, which fits the dataset's nature as
          reference data.
        </p>
        <h3 className={apiStyles.subHeading}>Handling a large dataset</h3>
        <p>
          With thousands of readings across 17 countries, pagination and filtering were essential.
          Queries support filtering by country, city, and date range, and results are paginated
          to keep response sizes manageable.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Testing & CI/CD</h2>
        <p>
          The API is covered by 20+ automated Postman tests covering both success and failure
          scenarios — including authentication errors, invalid inputs, and expected 400/401/404
          responses. Tests run automatically on every commit via a CI/CD pipeline, with results
          visible directly in the repository.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Reflection</h2>
        <p>
          This was my first time working with GraphQL and it was a genuinely interesting shift from
          REST. Seeing how the single-endpoint approach and typed schema removes a whole category
          of problems — versioning, over-fetching, documentation drift — made the learning curve
          worth it. Working with a large dataset also surfaced real performance considerations
          that a smaller project would never expose.
        </p>
      </section>

    </div>
  );
}

export default ClimateAPI;
