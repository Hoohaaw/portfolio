# Localization tab — design spec

Date: 2026-07-30

## Goal

Add a third section to the Projects page — "Localization" — alongside the
existing "Web Development" and "UX Design — Gota Media" sections, showcasing
seasonal Localization QA work on EA SPORTS FC / FIFA at Electronic Arts,
Madrid (summers 2023–2026). Purpose: support QA job applications by
surfacing this experience with the same visual weight as the other two
disciplines.

## Scope

- One new section on `/projects` (not a top-level nav tab).
- One project card, one detail page (overview-style, not per-title/per-summer
  cards) — matches the `UXWayOfWorking.jsx` pattern of describing role/process
  rather than individual client deliverables.
- Copy is general only — no NDA-covered specifics (no confidential strings,
  bug content, or unreleased-title details).
- Copy written in English (matches other EA/international-facing content;
  the Swedish Gota Media case study is the outlier, not the norm).

## Data / structure

`src/pages/Projects.jsx`:
- New `locProjects` array (same shape as `webProjects`/`uxProjects`), one entry:
  - `to: '/projects/localization-qa'`
  - `tag: 'Localization QA'`
  - `title: 'Localization Testing — EA SPORTS FC'`
  - `desc: 'Seasonal QA work on EA SPORTS FC — testing localized text and UI strings across languages, logging and verifying bugs each summer.'`
- New `<section>` "Localization — Electronic Arts" rendered after the UX
  section, same `Reveal`/`grid`/`ProjectCard` pattern, `variant="loc"`.

`src/App.jsx`:
- New route `/projects/localization-qa` → new `LocalizationQA` page component,
  added next to the other case-study routes/imports.

## Visual

Only two tag color variants exist today (`tagDev`, `tagUX`). Add a third:

`src/css/tokens.css`:
- New `--color-accent-3`, `--color-accent-3-deep`, `--color-accent-3-light`
  tokens, same oklch pattern as `--color-accent-2` but a distinct hue.
- New `--color-accent-3-a10`, `--color-accent-3-a30` alpha variants for the
  tag background/border, matching the accent-2 alpha pattern.

`src/css/project.module.css`:
- New `.tagLoc` class using the accent-3 tokens (mirrors `.tagUX`).

`src/components/ProjectCard.jsx`:
- Variant selection extended from a binary ternary to support `'loc'` →
  `styles.tagLoc`.

## Detail page

`src/pages/LocalizationQA.jsx` — mirrors `UXWayOfWorking.jsx` structure
(back link, hero with tag + title, `<hr>` divider, multiple `<section>`
blocks with `sectionTitle` headings), using `CaseStudy.module.css` like the
other case studies.

Draft content (to be refined later — placeholder copy, general only):

- Hero tag: "Localization QA"
- Title: "Localization Testing — EA SPORTS FC"
- Intro paragraph: seasonal Localization Tester role, Electronic Arts,
  Madrid, summers 2023–2026, working on EA SPORTS FC / FIFA titles.
- Section "What the work involves": in-game text, UI, and subtitle strings
  checked against source content across languages; functional and
  linguistic bugs logged; regression passes on each build.
- Section "Process": bug tracking (generic ticketing tool, no product name),
  reproduction steps, severity triage, coordination with linguists and
  developers to verify fixes.
- Section "What I took from it": QA rigor, attention to detail at scale,
  cross-team communication, structured testing habits — ties explicitly to
  ongoing QA career direction.

## Out of scope

- Per-summer or per-title cards (single overview page only, for now).
- Any confidential/NDA content (specific strings, bug reports, unreleased
  titles, internal tool names).
- Nav-level restructuring — this stays inside the existing `/projects` page.

## Testing

- Manual: load `/projects`, confirm three sections render, new tag color
  distinct from dev/UX, card links to `/projects/localization-qa` and back
  link returns to `/projects`.
- No automated test suite currently covers this area (project has none for
  page content) — manual check only.
