/**
 * Chrome-level UI strings only (nav, footer, cursor selector, hero CTAs).
 * Page body copy (About story, project descriptions, case studies) stays
 * English-only until real Swedish translations are supplied — `t()` falls
 * back to English for any key missing in the active language, so nothing
 * breaks as more keys get translated over time.
 */
export const translations = {
  en: {
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    'footer.linkedin': 'LinkedIn',
    'footer.github': 'GitHub',
    'footer.email': 'Email',

    'hero.available': 'Available for work',
    'hero.viewProjects': 'View Projects',
    'hero.aboutMe': 'About Me',
    'hero.downloadCv': 'Download CV',

    'cursor.title': 'Cursor',
    'cursor.default': 'Default',
    'cursor.rocket': 'Rocketship',
    'cursor.radar': 'Radar sweep',
    'cursor.blip': 'Telemetry blip',
    'cursor.choose': 'Choose cursor style',

    'skip.toContent': 'Skip to content',

    'now.work': 'Work',
    'now.certificates': 'Certificates',
    'now.learning': 'Learning',
    'now.workStatus': 'Open to new opportunities',
    'now.workStatusRest': '— actively looking for work',
    'now.workEA': 'Localization Tester (seasonal) — Electronic Arts, Madrid — Summers 2023–2026',
    'now.projectClimateApi': 'Building a GraphQL Climate API — Node.js, Apollo Server, MongoDB & Vercel',
    'now.projectIdleAgentic': 'Rebuilding the Idle Game with agentic coding — React, TypeScript, Tailwind & Supabase',
    'now.projectSync': 'Building a sync tool between Obsidian, Flutter & a custom dashboard — starting with a shared to-do list',
    'now.certEmpty': 'Nothing published yet — coming soon.',
    'now.certLink': 'View certificates',
    'now.certGenAI': 'Career Essentials in Generative AI — Microsoft & LinkedIn',

    'certPage.tag': 'Credentials',
    'certPage.earned': 'Earned',
    'certPage.inProgress': 'In progress',
    'certPage.backHome': '← Back to home',

    'lang.switchTo': 'Byt till svenska',
  },
  sv: {
    'nav.projects': 'Projekt',
    'nav.about': 'Om mig',
    'nav.contact': 'Kontakt',

    'footer.linkedin': 'LinkedIn',
    'footer.github': 'GitHub',
    'footer.email': 'E-post',

    'hero.available': 'Tillgänglig för arbete',
    'hero.viewProjects': 'Visa projekt',
    'hero.aboutMe': 'Om mig',
    'hero.downloadCv': 'Ladda ner CV',

    'cursor.title': 'Markör',
    'cursor.default': 'Standard',
    'cursor.rocket': 'Raket',
    'cursor.radar': 'Radarsvep',
    'cursor.blip': 'Telemetriblip',
    'cursor.choose': 'Välj markörstil',

    'skip.toContent': 'Hoppa till innehållet',

    'now.work': 'Arbete',
    'now.certificates': 'Certifikat',
    'now.learning': 'Lärande',
    'now.workStatus': 'Öppen för nya möjligheter',
    'now.workStatusRest': '— söker aktivt arbete',
    'now.workEA': 'Lokaliseringstestare (säsong) — Electronic Arts, Madrid — Somrarna 2023–2026',
    'now.projectClimateApi': 'Bygger ett GraphQL-klimat-API — Node.js, Apollo Server, MongoDB & Vercel',
    'now.projectIdleAgentic': 'Bygger om Idle Game med agentisk kodning — React, TypeScript, Tailwind & Supabase',
    'now.projectSync': 'Bygger ett synkverktyg mellan Obsidian, Flutter & en egen dashboard — börjar med en delad att-göra-lista',
    'now.certEmpty': 'Inget publicerat än — kommer snart.',
    'now.certLink': 'Visa certifikat',
    'now.certGenAI': 'Career Essentials in Generative AI — Microsoft & LinkedIn',

    'certPage.tag': 'Meriter',
    'certPage.earned': 'Uppnådda',
    'certPage.inProgress': 'Pågående',
    'certPage.backHome': '← Tillbaka till startsidan',

    'lang.switchTo': 'Switch to English',
  },
};

export const LANGUAGES = [
  { id: 'en', label: 'EN' },
  { id: 'sv', label: 'SV' },
];

export const DEFAULT_LANGUAGE = 'en';
