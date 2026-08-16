# Localization Tab Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a third "Localization" section to the Projects page showcasing seasonal EA SPORTS FC localization QA work, with its own tag color and detail page.

**Architecture:** Extend the existing three-file project-card pattern (`tokens.css` → `project.module.css` → `ProjectCard.jsx` → `Projects.jsx`) with a third color variant (`loc`), then add one new case-study page (`LocalizationQA.jsx`) routed from `App.jsx`, mirroring the existing `UXWayOfWorking.jsx` structure.

**Tech Stack:** React 19, react-router-dom, CSS Modules, Vite. No test framework in this project — verification is `npm run lint`, `npm run build`, and manual browser check via `npm run dev`.

## Global Constraints

- Copy is general only — no NDA-covered specifics (no confidential strings, bug content, unreleased-title details).
- Detail page copy is English (matches other EA/international-facing content).
- This stays inside the existing `/projects` page — no nav-level restructuring.
- One overview card + one overview detail page only (no per-summer/per-title cards).
- Follow existing file patterns exactly: `CaseStudy.module.css` for the detail page shell, `project.module.css`/`tokens.css` conventions for the new tag color (oklch, same alpha-suffix naming as `--color-accent-2*`).

---

### Task 1: Add the third tag color token set

**Files:**
- Modify: `src/css/tokens.css`

**Interfaces:**
- Produces: CSS custom properties `--color-accent-3`, `--color-accent-3-deep`, `--color-accent-3-light`, `--color-accent-3-a10`, `--color-accent-3-a30` — consumed by Task 2.

- [ ] **Step 1: Read the existing accent-2 token block for exact pattern**

Open `src/css/tokens.css` around lines 33-45 (already read during design — accent-2 uses oklch hue 150; accent-1 uses hue 42). Pick a third distinct hue not used by either (e.g. hue 260, a blue/violet, keeps clear visual separation from the orange accent-1 and green accent-2).

- [ ] **Step 2: Add the new tokens immediately after the accent-2 block**

```css
  --color-accent-3:       oklch(58% 0.14 260);
  --color-accent-3-deep:  oklch(38% 0.11 260);  /* text-safe on light paper */
  --color-accent-3-light: oklch(76% 0.12 260); /* text-safe on dark ink */
```

And after the existing `--color-accent-2-a0` alpha line, add:

```css
  --color-accent-3-a10:  oklch(58% 0.14 260 / 10%);
  --color-accent-3-a30:  oklch(58% 0.14 260 / 30%);
```

- [ ] **Step 3: Verify no syntax errors**

Run: `npm run lint`
Expected: no new errors (CSS isn't linted by this eslint config, so this just confirms the JS/JSX build graph is untouched — this is a sanity check, not a CSS validator).

- [ ] **Step 4: Commit**

```bash
git add src/css/tokens.css
git commit -m "Add third accent color tokens for localization tag"
```

---

### Task 2: Add the `.tagLoc` class

**Files:**
- Modify: `src/css/project.module.css`

**Interfaces:**
- Consumes: `--color-accent-3-a10`, `--color-accent-3-deep`, `--color-accent-3-a30` from Task 1.
- Produces: CSS Modules class `tagLoc` — consumed by Task 3.

- [ ] **Step 1: Add `.tagLoc` immediately after the existing `.tagUX` rule**

```css
.tagLoc {
  background-color: var(--color-accent-3-a10);
  color: var(--color-accent-3-deep);
  border-color: var(--color-accent-3-a30);
}
```

- [ ] **Step 2: Commit**

```bash
git add src/css/project.module.css
git commit -m "Add tagLoc class for localization project cards"
```

---

### Task 3: Extend `ProjectCard` to support the `loc` variant

**Files:**
- Modify: `src/components/ProjectCard.jsx`

**Interfaces:**
- Consumes: `styles.tagLoc` from Task 2.
- Consumes: `styles.tagDev`, `styles.tagUX` (existing).
- Produces: `ProjectCard` accepts `variant="loc"` in addition to `"dev"`/`"ux"` — consumed by Task 4.

- [ ] **Step 1: Replace the binary ternary with a lookup**

Current code (`src/components/ProjectCard.jsx:12`):

```jsx
<span className={`${styles.tag} ${variant === 'ux' ? styles.tagUX : styles.tagDev}`}>{tag}</span>
```

Replace with:

```jsx
const tagClass = variant === 'ux' ? styles.tagUX : variant === 'loc' ? styles.tagLoc : styles.tagDev;
```

placed above the `return`, and update the JSX to:

```jsx
<span className={`${styles.tag} ${tagClass}`}>{tag}</span>
```

- [ ] **Step 2: Update the component doc comment**

Change:

```jsx
/**
 * A flat, bordered project card. `variant` is "dev" or "ux" and
 * selects the tag colour.
 */
```

to:

```jsx
/**
 * A flat, bordered project card. `variant` is "dev", "ux", or "loc"
 * and selects the tag colour.
 */
```

- [ ] **Step 3: Run lint**

Run: `npm run lint`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/ProjectCard.jsx
git commit -m "Support loc variant in ProjectCard"
```

---

### Task 4: Add the Localization section to the Projects page

**Files:**
- Modify: `src/pages/Projects.jsx`

**Interfaces:**
- Consumes: `ProjectCard` with `variant="loc"` from Task 3.
- Produces: route target `/projects/localization-qa` referenced by a card `to` — consumed by Task 5 (must match the route added there exactly).

- [ ] **Step 1: Add the `locProjects` array**

Insert after the existing `uxProjects` array (`src/pages/Projects.jsx:45`):

```jsx
const locProjects = [
  {
    to: '/projects/localization-qa',
    tag: 'Localization QA',
    title: 'Localization Testing — EA SPORTS FC',
    desc: 'Seasonal QA work on EA SPORTS FC — testing localized text and UI strings across languages, logging and verifying bugs each summer.',
  },
];
```

- [ ] **Step 2: Add the Localization section to the JSX**

Insert after the closing `</section>` of the UX Design section (`src/pages/Projects.jsx:79`), before the closing `</div>`:

```jsx
      <section className={styles.section}>
        <Reveal>
          <h2 className={styles.sectionLabel}>Localization — Electronic Arts</h2>
        </Reveal>
        <div className={styles.grid}>
          {locProjects.map((p, i) => (
            <Reveal key={p.to} delay={i * 80}>
              <ProjectCard {...p} variant="loc" index={String(i + 1).padStart(2, '0')} />
            </Reveal>
          ))}
        </div>
      </section>
```

- [ ] **Step 3: Run lint**

Run: `npm run lint`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/pages/Projects.jsx
git commit -m "Add Localization section to Projects page"
```

---

### Task 5: Create the Localization QA detail page and route it

**Files:**
- Create: `src/pages/LocalizationQA.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `CaseStudy.module.css` (existing, shared by all case-study pages — `page`, `backLink`, `hero`, `tag`, `title`, `divider`, `section`, `sectionTitle` classes).
- Consumes: route path `/projects/localization-qa` defined in Task 4's card `to`.
- Produces: default export `LocalizationQA` component, routed at `/projects/localization-qa`.

- [ ] **Step 1: Create the detail page**

```jsx
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
```

- [ ] **Step 2: Import the page in `App.jsx`**

Add after the existing `import IdleGame from './pages/IdleGame.jsx';` (`src/App.jsx:25`):

```jsx
import LocalizationQA from './pages/LocalizationQA.jsx';
```

- [ ] **Step 3: Add the route**

Add after the existing `<Route path="/projects/idle-game" ...>` line (`src/App.jsx:47`), before the `<Route path="*" ...>` catch-all:

```jsx
        <Route path="/projects/localization-qa" element={<LocalizationQA />} />
```

- [ ] **Step 4: Run lint**

Run: `npm run lint`
Expected: no errors.

- [ ] **Step 5: Run the build**

Run: `npm run build`
Expected: build succeeds with no errors.

- [ ] **Step 6: Manual verification**

Run: `npm run dev`, open the printed local URL in a browser.
- Navigate to `/projects` — confirm three sections render: Web Development, UX Design — Gota Media, Localization — Electronic Arts.
- Confirm the Localization card's tag uses a visually distinct color from the Dev (orange) and UX (green) tags.
- Click the Localization card — confirm it navigates to `/projects/localization-qa` and renders the hero, three sections, and divider correctly.
- Click "← Back to Projects" — confirm it returns to `/projects`.
- Stop the dev server (Ctrl+C).

- [ ] **Step 7: Commit**

```bash
git add src/pages/LocalizationQA.jsx src/App.jsx
git commit -m "Add Localization QA detail page and route"
```

---

## Self-Review Notes

- **Spec coverage:** Data/structure (Task 4), visual/tag color (Tasks 1-3), detail page (Task 5), routing (Task 5), NDA-safe/English copy (Task 5 content), manual testing (Task 5 Step 6) — all spec sections covered.
- **Placeholder scan:** none found — all steps contain literal code/commands.
- **Type/name consistency:** `variant="loc"` (Task 4) matches the `variant === 'loc'` check added in Task 3; `to: '/projects/localization-qa'` (Task 4) matches the route path added in Task 5; `styles.tagLoc` (Task 3) matches the class defined in Task 2; token names (`--color-accent-3*`) match between Task 1 and Task 2.
