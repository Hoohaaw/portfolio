/**
 * Chrome-level UI strings only (nav, footer, cursor selector, hero CTAs).
 * Page body copy (About story, project descriptions, case studies) stays
 * English-only until real Swedish translations are supplied — `t()` falls
 * back to English for any key missing in the active language, so nothing
 * breaks as more keys get translated over time.
 */
export const translations = {
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    'footer.linkedin': 'LinkedIn',
    'footer.github': 'GitHub',
    'footer.email': 'Email',

    'hero.available': 'Available for work from early 2027',
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
    'now.workEA2026': 'Localization Tester (seasonal contract) — Electronic Arts, Madrid — Sep–Dec 2026',
    'now.projectClimateApi': 'Climate API — a GraphQL API serving historical climate data',
    'now.projectIdleAgentic': 'Idle Game — Agentic Rebuild — an AI-assisted rebuild of the original Idle Game',
    'now.projectSync': 'Vault Sync — syncing Obsidian, Flutter & a dashboard, starting with a shared to-do list',
    'now.projectHomelab': 'Homelab Dashboard — a self-hosted server tracking live system vitals',
    'now.certEmpty': 'Nothing published yet — coming soon.',
    'now.certLink': 'View certificates',
    'now.certGenAI': 'Career Essentials in Generative AI — Microsoft & LinkedIn',
    'now.certClaude101': 'Claude 101 — Anthropic',
    'now.certClaudeCode101': 'Claude Code 101 — Anthropic',
    'now.certClaudePlatform101': 'Claude Platform 101 — Anthropic',
    'now.certIntroMcp': 'Introduction to Model Context Protocol — Anthropic',
    'now.certAiFluencyStudents': 'AI Fluency for Students — Anthropic',

    'certPage.tag': 'Credentials',
    'certPage.earned': 'Earned',
    'certPage.inProgress': 'In progress',
    'certPage.backHome': '← Back to home',

    'contactForm.label': 'Get in touch',
    'contactForm.name': 'Name',
    'contactForm.company': 'Company (optional)',
    'contactForm.email': 'Email',
    'contactForm.subject': 'Subject',
    'contactForm.message': 'Message',
    'contactForm.send': 'Send message',
    'contactForm.sending': 'Sending…',
    'contactForm.success': 'Thanks — your message is on its way. I\'ll get back to you soon.',

    'lang.switchTo': 'Byt till svenska',
  },
  sv: {
    'nav.home': 'Hem',
    'nav.projects': 'Projekt',
    'nav.about': 'Om mig',
    'nav.contact': 'Kontakt',

    'footer.linkedin': 'LinkedIn',
    'footer.github': 'GitHub',
    'footer.email': 'E-post',

    'hero.available': 'Tillgänglig för arbete från början av 2027',
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
    'now.workEA2026': 'Lokaliseringstestare (säsongskontrakt) — Electronic Arts, Madrid — Sep–Dec 2026',
    'now.projectClimateApi': 'Climate API — ett GraphQL-API som serverar historisk klimatdata',
    'now.projectIdleAgentic': 'Idle Game — Agentic Rebuild — en AI-assisterad ombyggnad av det ursprungliga Idle Game',
    'now.projectSync': 'Vault Sync — synkar Obsidian, Flutter & en dashboard, börjar med en delad att-göra-lista',
    'now.projectHomelab': 'Homelab Dashboard — en självhostad server som visar systemets status i realtid',
    'now.certEmpty': 'Inget publicerat än — kommer snart.',
    'now.certLink': 'Visa certifikat',
    'now.certGenAI': 'Career Essentials in Generative AI — Microsoft & LinkedIn',
    'now.certClaude101': 'Claude 101 — Anthropic',
    'now.certClaudeCode101': 'Claude Code 101 — Anthropic',
    'now.certClaudePlatform101': 'Claude Platform 101 — Anthropic',
    'now.certIntroMcp': 'Introduction to Model Context Protocol — Anthropic',
    'now.certAiFluencyStudents': 'AI Fluency for Students — Anthropic',

    'certPage.tag': 'Meriter',
    'certPage.earned': 'Uppnådda',
    'certPage.inProgress': 'Pågående',
    'certPage.backHome': '← Tillbaka till startsidan',

    'contactForm.label': 'Kom i kontakt',
    'contactForm.name': 'Namn',
    'contactForm.company': 'Företag (valfritt)',
    'contactForm.email': 'E-post',
    'contactForm.subject': 'Ämne',
    'contactForm.message': 'Meddelande',
    'contactForm.send': 'Skicka meddelande',
    'contactForm.sending': 'Skickar…',
    'contactForm.success': 'Tack — ditt meddelande är på väg. Jag återkommer snart.',

    'lang.switchTo': 'Switch to English',
  },
};

export const LANGUAGES = [
  { id: 'en', label: 'EN' },
  { id: 'sv', label: 'SV' },
];

export const DEFAULT_LANGUAGE = 'en';
