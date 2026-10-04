import { yourContent } from "@/data/yourContent";

export type Locale = "en" | "he";

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "he";
}

export type NavLink = { label: string; href: string };
export type SocialLink = { label: string; href: string; isPlaceholder?: boolean };
export type SkillGroup = { title: string; skills: string[] };
export type ProjectLink = { label: string; href: string; isPlaceholder?: boolean };
export type ProjectImage = {
  src: string;
  alt: string;
  variant?: "desktop" | "mobile";
};
export type Project = {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  technicalChallenges: string[];
  technologies: string[];
  whatILearned: string;
  images: ProjectImage[];
  imagePlaceholderNote?: string;
  liveDemo: ProjectLink;
  github: ProjectLink;
  highlight?: string;
};
export type ProcessStep = { title: string; description: string };
export type ExperienceItem = {
  role: string;
  period: string;
  company: string;
  bullets: string[];
};
export type EducationItem = {
  title: string;
  detail: string;
  type: "degree" | "course" | "independent";
  certificateHref?: string;
  imageSrc?: string;
  visible?: boolean;
};

export type BusinessContent = {
  eyebrow: string;
  title: string;
  name: string;
  roleLabel: string;
  role: string;
  paragraphs: string[];
  highlights: { title: string; text: string }[];
  ctaLabel: string;
  ctaHref: string;
};

export type UiLabels = {
  contactNav: string;
  liveDemo: string;
  github: string;
  fillMe: string;
  problem: string;
  solution: string;
  keyFeatures: string;
  technicalChallenges: string;
  technologies: string;
  whatILearned: string;
  degree: string;
  course: string;
  independent: string;
  viewCertificate: string;
  email: string;
  phone: string;
  linkedIn: string;
  whatsapp: string;
  menu: string;
  closeMenu: string;
  langSwitchTo: string;
  leadTitle: string;
  leadText: string;
  leadName: string;
  leadEmail: string;
  leadPhone: string;
  leadSubmit: string;
  leadSuccess: string;
  leadClose: string;
  leadRequired: string;
};

export type SiteContent = {
  locale: Locale;
  dir: "ltr" | "rtl";
  siteMeta: {
    title: string;
    description: string;
    url: string;
    ogImage: string;
    locale: string;
  };
  person: {
    firstName: string;
    fullName: string;
    role: string;
    email: string;
    phone: string;
    phoneHref: string;
    location: string;
  };
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  hero: {
    name: string;
    role: string;
    headline: string;
    subheadline: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  about: {
    title: string;
    paragraphs: string[];
    focus: {
      eyebrow: string;
      title: string;
      text: string;
      loopLabel: string;
      loop: string;
    };
  };
  business: BusinessContent;
  skillGroups: SkillGroup[];
  sectionCopy: {
    skills: { eyebrow: string; title: string; description: string };
    projects: { eyebrow: string; title: string; description: string };
    experience: { eyebrow: string; title: string; description: string };
    education: { eyebrow: string; title: string; description: string };
  };
  projects: Project[];
  processSection: {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  contact: {
    title: string;
    headline: string;
    text: string;
    email: string;
    phone: string;
    phoneHref: string;
    links: SocialLink[];
  };
  footer: { note: string };
  ui: UiLabels;
};

const fill = yourContent;

function isFilled(value: string | undefined | null): boolean {
  return Boolean(value && value.trim().length > 0);
}

function makeLink(label: string, url: string): ProjectLink {
  if (isFilled(url)) {
    return { label, href: url.trim(), isPlaceholder: false };
  }
  return { label, href: "#", isPlaceholder: true };
}

const sharedImages = {
  botkale: [
    {
      src: "/projects/botkale/agent-create.png",
      alt: "BotKale agent creation wizard",
      variant: "desktop" as const,
    },
    {
      src: "/projects/botkale/knowledge-base.png",
      alt: "BotKale knowledge base",
      variant: "desktop" as const,
    },
    {
      src: "/projects/botkale/products.png",
      alt: "BotKale products",
      variant: "desktop" as const,
    },
    {
      src: "/projects/botkale/policies.png",
      alt: "BotKale policies",
      variant: "desktop" as const,
    },
  ],
  course: [
    {
      src: "/projects/ai-course-builder/landing.png",
      alt: "AI Course Builder landing",
      variant: "desktop" as const,
    },
    {
      src: "/projects/ai-course-builder/screen-2.png",
      alt: "AI Course Builder dashboard",
      variant: "mobile" as const,
    },
    {
      src: "/projects/ai-course-builder/lesson.png",
      alt: "Lesson view",
      variant: "mobile" as const,
    },
    {
      src: "/projects/ai-course-builder/screen-5.png",
      alt: "Quiz view",
      variant: "mobile" as const,
    },
  ],
  challenge: [
    {
      src: "/projects/90-day-challenge/dashboard.jpeg",
      alt: "90-Day Challenge dashboard",
      variant: "mobile" as const,
    },
    {
      src: "/projects/90-day-challenge/login.png",
      alt: "90-Day Challenge login",
      variant: "mobile" as const,
    },
    {
      src: "/projects/90-day-challenge/friends.jpg",
      alt: "90-Day Challenge friends",
      variant: "mobile" as const,
    },
    {
      src: "/projects/90-day-challenge/meals.jpg",
      alt: "90-Day Challenge meals",
      variant: "mobile" as const,
    },
  ],
};

function buildEn(): SiteContent {
  const person = {
    firstName: "Hila",
    fullName: "Hila Aveksis Cohen",
    role: fill.role,
    email: isFilled(fill.email) ? fill.email.trim() : "",
    phone: isFilled(fill.phone) ? fill.phone.trim() : "",
    phoneHref: isFilled(fill.phoneHref) ? fill.phoneHref.trim() : "",
    location: isFilled(fill.location) ? fill.location.trim() : "",
  };

  const ui: UiLabels = {
    contactNav: "Contact",
    liveDemo: "Live Demo",
    github: "GitHub",
    fillMe: "fill me",
    problem: "Problem",
    solution: "Solution",
    keyFeatures: "Key Features",
    technicalChallenges: "Technical Challenges",
    technologies: "Technologies",
    whatILearned: "What I Learned",
    degree: "Degree",
    course: "Course / Certificate",
    independent: "Independent learning",
    viewCertificate: "View certificate",
    email: "Email",
    phone: "Phone",
    linkedIn: "LinkedIn",
    whatsapp: "WhatsApp",
    menu: "Menu",
    closeMenu: "Close menu",
    langSwitchTo: "עברית",
    leadTitle: "Get the links and more details",
    leadText:
      "Leave your details and I’ll send you the links and additional information.",
    leadName: "Name",
    leadEmail: "Email",
    leadPhone: "Phone",
    leadSubmit: "Send details",
    leadSuccess: "Thanks. I’ll get back to you shortly.",
    leadClose: "Close",
    leadRequired: "Please add your name and a way to reach you.",
  };

  const socialLinks: SocialLink[] = [
    makeLink(ui.email, isFilled(person.email) ? `mailto:${person.email}` : ""),
    ...(isFilled(person.phone)
      ? [
          makeLink(
            ui.phone,
            person.phoneHref || `tel:${person.phone.replace(/[^\d+]/g, "")}`,
          ),
        ]
      : []),
  ];

  const bot = fill.projects.botkale;
  const course = fill.projects.aiCourseBuilder;
  const challenge = fill.projects.ninetyDayChallenge;
  const passover = fill.projects.passoverCleaning;

  const projects: Project[] = [
    {
      id: "botkale",
      title: "Botkale Wizard",
      tagline: "Internal tooling inside the Botkale company",
      summary:
        "A guided internal product for setting up business AI agents within Botkale — from company profile and products to knowledge bases, policies, and agent configuration. Part of the broader Botkale platform I founded.",
      problem:
        "Building business AI agents needs structured onboarding: profile, products, policies, and knowledge — otherwise setup stays messy and hard to repeat inside the company.",
      solution:
        "Botkale Wizard is an internal tools flow that turns business information into a structured agent setup: profile, products, policies, knowledge base, agent — with templates for common use cases.",
      keyFeatures: [
        "Multi-step onboarding: business profile, products, FAQs/policies, knowledge base, AI agent",
        "Agent creation modes: AI-assisted, chat-guided, and use-case templates",
        "Knowledge base management with readiness indicators",
        "Resource tracking for products, agents, and knowledge bases",
        ...bot.extraFeatures,
      ],
      technicalChallenges: [...bot.technicalChallenges],
      technologies: [...bot.technologies],
      whatILearned: bot.whatILearned,
      images: sharedImages.botkale,
      liveDemo: makeLink(ui.liveDemo, bot.liveDemoUrl),
      github: makeLink(ui.github, bot.githubUrl),
      highlight:
        "Internal Botkale tooling: end-to-end agent setup from business context to knowledge to agent.",
    },
    {
      id: "ai-course-builder",
      title: "AI Course Builder",
      tagline: "From topic to structured learning experience",
      summary:
        "An AI-assisted learning application that helps turn an initial topic into a structured course — modules, lessons, quizzes, and learner-facing content.",
      problem:
        "Creating a quality course from scratch takes significant planning, structure, and time — even when the subject-matter knowledge already exists.",
      solution:
        "An AI system that turns an initial idea into an organized course structure and supports structured content creation across the course workflow.",
      keyFeatures: [
        "AI-assisted course creation flow",
        "Structured course and lesson organization",
        "Lesson views with presentation and text modes",
        "Interactive quizzes with explanations",
        "Author and learner course management",
        ...course.extraFeatures,
      ],
      technicalChallenges: [...course.technicalChallenges],
      technologies: [...course.technologies],
      whatILearned: course.whatILearned,
      images: sharedImages.course,
      liveDemo: makeLink(ui.liveDemo, course.liveDemoUrl),
      github: makeLink(ui.github, course.githubUrl),
      highlight:
        "AI application with a real product workflow — not a thin ChatGPT wrapper.",
    },
    {
      id: "90-day-challenge",
      title: "90-Day Challenge",
      tagline: "Long-term goals as a daily execution system",
      summary:
        "An application for running a personal 90-day challenge — central goal, daily actions, progress tracking, habits, streaks, and social accountability.",
      problem:
        "Ambitious goals fail when they stay abstract. People need a daily system that makes progress visible and actionable over a long horizon.",
      solution:
        "A structured 90-day execution product: daily habits, progress visualization, streak awareness, and social ranking.",
      keyFeatures: [
        "Central 90-day goal with day-by-day progress",
        "Daily actions across habits",
        "Progress visualization and remaining-days awareness",
        "Friends, updates, and ranking for accountability",
        "Authentication including email and Google sign-in",
        ...challenge.extraFeatures,
      ],
      technicalChallenges: [...challenge.technicalChallenges],
      technologies: [...challenge.technologies],
      whatILearned: challenge.whatILearned,
      images: sharedImages.challenge,
      liveDemo: makeLink(ui.liveDemo, challenge.liveDemoUrl),
      github: makeLink(ui.github, challenge.githubUrl),
      highlight:
        "Product thinking: turning long-term goals into a structured daily execution system.",
    },
    {
      id: "passover-cleaning",
      title: "Passover Cleaning Planner",
      tagline: "A complex household project, made manageable",
      summary:
        "A planning system for a large, deadline-driven Passover cleaning project — areas, tasks, priorities, and progress.",
      problem:
        "Passover cleaning is a stressful, multi-area project with a hard deadline. Without structure, tasks blur together and progress is hard to see.",
      solution:
        "A personal project-management system that divides the home into areas, breaks work into tasks, tracks status and priorities, and makes overall progress visible.",
      keyFeatures: [
        "Home divided into areas / zones",
        "Task breakdown with priorities",
        "Status tracking and progress visibility",
        "Deadline-oriented project framing",
        ...passover.extraFeatures,
      ],
      technicalChallenges: [...passover.technicalChallenges],
      technologies: [...passover.technologies],
      whatILearned: passover.whatILearned,
      images: [],
      imagePlaceholderNote: "Screenshots coming soon",
      liveDemo: makeLink(ui.liveDemo, passover.liveDemoUrl),
      github: makeLink(ui.github, passover.githubUrl),
      highlight:
        "System design at a personal scale: turning a stressful project into a manageable process.",
    },
  ];

  const degreeDetail = [fill.education.university.trim(), fill.education.graduationYear.trim()]
    .filter(Boolean)
    .join(" · ");

  return {
    locale: "en",
    dir: "ltr",
    siteMeta: {
      title: "Hila Aveksis Cohen | AI Solutions Engineer | Freelance",
      description:
        "Hila Aveksis Cohen — freelancer for software solutions for businesses and software development for large companies.",
      url: isFilled(fill.websiteUrl) ? fill.websiteUrl.trim() : "http://localhost:3000",
      ogImage: "/og-placeholder.svg",
      locale: "en_US",
    },
    person,
    navLinks: [
      { label: "About", href: "#about" },
      { label: "Business", href: "#business" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Process", href: "#process" },
      { label: "Experience", href: "#experience" },
      { label: "Education", href: "#education" },
      { label: "Contact", href: "#contact" },
    ],
    socialLinks,
    hero: {
      name: person.fullName,
      role: person.role,
      headline: fill.headline,
      subheadline: fill.subheadline,
      primaryCta: { label: "View Projects", href: "#projects" },
      secondaryCta: { label: "Contact Me", href: "#contact" },
    },
    about: {
      title: "About",
      paragraphs: [...fill.aboutParagraphs],
      focus: { ...fill.focus },
    },
    business: {
      eyebrow: "Business",
      title: "Botkale — my independent venture",
      name: "Botkale",
      roleLabel: "Founder",
      role: "Independent product I am building and owning end to end",
      paragraphs: [
        "Botkale is my independent business: a platform that helps small businesses get useful AI actions running quickly, without learning automation jargon.",
        "The first product line, Botkale Express, focuses on ready-made workflows for small offices. The MVP serves accounting firms with monthly WhatsApp document collection from clients — reminders included — so offices spend less time chasing paperwork.",
        "Beyond Express, Botkale also includes internal tooling such as Botkale Wizard for setting up business AI agents: company profile, products, policies, knowledge bases, and agents that speak the business language.",
        "I own the product vision, design, architecture, and implementation — from first-run experience to activation, tracking, and iteration.",
      ],
      highlights: [
        {
          title: "Who it is for",
          text: "Small businesses and professional offices that want AI to do real work, not just chat.",
        },
        {
          title: "MVP focus",
          text: "Accounting offices · WhatsApp document requests · reminders until completion.",
        },
        {
          title: "Product principle",
          text: "Ask what Botkale should do for you — actions, not triggers, nodes, or workflows.",
        },
      ],
      ctaLabel: "See Botkale Wizard in projects",
      ctaHref: "#botkale",
    },
    skillGroups: fill.skillGroups.map((g) => ({
      title: g.title,
      skills: [...g.skills],
    })),
    sectionCopy: {
      skills: {
        eyebrow: "Skills",
        title: "Core competencies",
        description:
          "AI solutions, solution engineering, and the stack I use to design, integrate and ship.",
      },
      projects: {
        eyebrow: "Featured Projects",
        title: "Work that shows how I think and build",
        description:
          "Selected products spanning AI agents, generative workflows, and systems that turn messy goals into clear execution.",
      },
      experience: {
        eyebrow: "Experience",
        title: "Professional experience",
        description:
          "6+ years building software and AI-powered solutions — from discovery to production.",
      },
      education: {
        eyebrow: "Education",
        title: "Education & certifications",
        description:
          "Formal degree first — courses and certifications listed separately.",
      },
    },
    projects,
    processSection: {
      title: "How I Build",
      subtitle:
        "I start from the problem — not from a technology. Tools come after the process is clear.",
      steps: [
        {
          title: "Understand the problem",
          description:
            "Clarify the real need, constraints, and what done looks like.",
        },
        {
          title: "Map the process",
          description:
            "Break the workflow into steps, decisions, and handoffs before writing code.",
        },
        {
          title: "Design the solution",
          description:
            "Choose architecture and tech that fit the problem — not the other way around.",
        },
        {
          title: "Build",
          description:
            "Implement end to end: interfaces, logic, integrations, and the paths users actually take.",
        },
        {
          title: "Test",
          description:
            "Validate with real scenarios. Check edge cases, not only the happy path.",
        },
        {
          title: "Iterate",
          description:
            "Tighten the product from feedback — clearer flows, better defaults, fewer sharp edges.",
        },
      ],
    },
    experience: fill.experience.map((item) => ({
      role: item.role,
      period: item.period,
      company: item.company.trim(),
      bullets: [...item.bullets],
    })),
    education: [
      {
        title: fill.education.degreeTitle,
        detail: degreeDetail,
        type: "degree",
        visible: true,
      },
      ...fill.education.certifications.map((cert) => ({
        title: cert.title,
        detail: cert.detail,
        type: "course" as const,
        certificateHref: cert.certificateHref,
        imageSrc: cert.imageSrc,
        visible: true,
      })),
    ],
    contact: {
      title: "Contact",
      headline: "Let’s build something useful.",
      text: "Freelance software solutions for businesses, and software development for large companies.",
      email: person.email,
      phone: person.phone,
      phoneHref: person.phoneHref,
      links: socialLinks,
    },
    footer: {
      note: `© ${new Date().getFullYear()} ${person.fullName}`,
    },
    ui,
  };
}

function buildHe(): SiteContent {
  const person = {
    firstName: "הילה",
    fullName: "הילה אבקסיס כהן",
    role: "פרילנסרית | פתרונות תוכנה לעסקים ופיתוח לחברות גדולות",
    email: isFilled(fill.email) ? fill.email.trim() : "",
    phone: isFilled(fill.phone) ? fill.phone.trim() : "",
    phoneHref: isFilled(fill.phoneHref) ? fill.phoneHref.trim() : "",
    location: isFilled(fill.location) ? fill.location.trim() : "",
  };

  const ui: UiLabels = {
    contactNav: "צור קשר",
    liveDemo: "דמו חי",
    github: "GitHub",
    fillMe: "למילוי",
    problem: "הבעיה",
    solution: "הפתרון",
    keyFeatures: "יכולות מרכזיות",
    technicalChallenges: "אתגרים טכניים",
    technologies: "טכנולוגיות",
    whatILearned: "מה למדתי",
    degree: "תואר",
    course: "קורס / תעודה",
    independent: "למידה עצמאית",
    viewCertificate: "צפייה בתעודה",
    email: "אימייל",
    phone: "טלפון",
    linkedIn: "LinkedIn",
    whatsapp: "וואטסאפ",
    menu: "תפריט",
    closeMenu: "סגירת תפריט",
    langSwitchTo: "English",
    leadTitle: "לקבלת קישורים ופרטים נוספים",
    leadText: "השאירו פרטים ואשלח אליכם את הקישורים ומידע נוסף על הפרויקט.",
    leadName: "שם",
    leadEmail: "אימייל",
    leadPhone: "טלפון",
    leadSubmit: "שליחת פרטים",
    leadSuccess: "תודה. הפרטים נקלטו — אחזור אליכם בהקדם.",
    leadClose: "סגירה",
    leadRequired: "נא למלא שם ודרך ליצירת קשר.",
  };

  const socialLinks: SocialLink[] = [
    makeLink(ui.email, isFilled(person.email) ? `mailto:${person.email}` : ""),
    ...(isFilled(person.phone)
      ? [
          makeLink(
            ui.phone,
            person.phoneHref || `tel:${person.phone.replace(/[^\d+]/g, "")}`,
          ),
        ]
      : []),
  ];

  const projects: Project[] = [
    {
      id: "botkale",
      title: "בוטקלה וויזארד",
      tagline: "כלי פנימי בתוך חברת בוטק׳לה",
      summary:
        "מוצר פנימי מודרך להקמת סוכני AI בתוך בוטק׳לה: מפרופיל החברה והמוצרים ועד בסיסי ידע, מדיניות והגדרת הסוכן. חלק מפיתוח הכלים הפנימיים של חברת בוטק׳לה הכללית שפתחתי.",
      problem:
        "כדי להקים סוכני AI לעסקים צריך אונבורדינג מובנה: פרופיל, מוצרים, מדיניות וידע. בלי זה ההקמה נשארת מבולגנת וקשה לחזור עליה ככלי פנימי בחברה.",
      solution:
        "בוטקלה וויזארד הוא תהליך כלים פנימיים שהופך מידע עסקי להקמת סוכן מסודר: פרופיל, מוצרים, מדיניות, בסיס ידע וסוכן, עם תבניות לתרחישים נפוצים.",
      keyFeatures: [
        "אונבורדינג מודרך: פרופיל עסק, מוצרים, שאלות נפוצות ומדיניות, בסיס ידע, סוכן AI",
        "מצבי יצירת סוכן: בסיוע AI, בשיחה, ותבניות לשימושים נפוצים",
        "ניהול בסיס ידע עם אינדיקציות מוכנות",
        "מעקב אחר מוצרים, סוכנים ובסיסי ידע",
        "אינטגרציות ל־CRM, יומן והודעות",
        "אוטומציה של תהליכי עבודה ומסע לקוח",
      ],
      technicalChallenges: [
        "הפיכת הקשר עסקי להגדרת סוכן מובנית",
        "בניית בסיסי ידע ששימושיים בשיחות אמיתיות עם לקוחות",
        "חיבור CRM, יומנים, פלטפורמות הודעות ו־API חיצוניים",
      ],
      technologies: [...fill.projects.botkale.technologies],
      whatILearned:
        "איך לעצב פתרונות AI סביב תהליכי עבודה עסקיים אמיתיים: מגילוי וארכיטקטורה ועד הקמת סוכן, אינטגרציות והטמעה.",
      images: sharedImages.botkale.map((img) => ({
        ...img,
        alt: img.alt.replace("BotKale", "בוטק׳לה"),
      })),
      liveDemo: makeLink(ui.liveDemo, fill.projects.botkale.liveDemoUrl),
      github: makeLink(ui.github, fill.projects.botkale.githubUrl),
      highlight: "כלי פנימי של בוטק׳לה: הקמת סוכן מקצה לקצה מהקשר עסקי ועד ידע וסוכן.",
    },
    {
      id: "ai-course-builder",
      title: "בונה קורסים ב־AI",
      tagline: "מנושא לחוויית למידה מובנית",
      summary:
        "אפליקציית למידה בסיוע AI שהופכת נושא התחלתי לקורס מובנה: מודולים, שיעורים, חידונים ותוכן ללומד.",
      problem:
        "יצירת קורס איכותי מאפס דורשת תכנון, מבנה וזמן רב, גם כשהידע המקצועי כבר קיים.",
      solution:
        "מערכת AI שהופכת רעיון ראשוני למבנה קורס מסודר ותומכת ביצירת תוכן מובנה לאורך תהליך העבודה.",
      keyFeatures: [
        "תהליך יצירת קורס בסיוע AI",
        "ארגון מובנה של קורס ושיעורים",
        "תצוגות שיעור במצבי מצגת וטקסט",
        "חידונים אינטראקטיביים עם הסברים",
        "ניהול קורסים ליוצרים וללומדים",
      ],
      technicalChallenges: [
        "עיצוב פרומפטים שמייצרים פלט מובנה של קורס ושיעורים",
        "שמירה על תוכן שניתן לעריכה בתוך תהליך מוצר אמיתי",
      ],
      technologies: [...fill.projects.aiCourseBuilder.technologies],
      whatILearned:
        "איך לעטוף AI גנרטיבי ב־UX מוצרי כך שיצירת קורס תרגיש מובנית ושימושית, ולא רק מעטפת לצ׳אט.",
      images: sharedImages.course,
      liveDemo: makeLink(ui.liveDemo, fill.projects.aiCourseBuilder.liveDemoUrl),
      github: makeLink(ui.github, fill.projects.aiCourseBuilder.githubUrl),
      highlight: "אפליקציית AI עם תהליך מוצר אמיתי, לא מעטפת דקה ל־ChatGPT.",
    },
    {
      id: "90-day-challenge",
      title: "אתגר 90 יום",
      tagline: "יעדים ארוכי טווח כמערכת ביצוע יומית",
      summary:
        "אפליקציה לניהול אתגר אישי של 90 יום: יעד מרכזי, פעולות יומיות, מעקב התקדמות, הרגלים, רצפים ואחריות חברתית.",
      problem:
        "יעדים שאפתניים נכשלים כשהם נשארים מופשטים. צריך מערכת יומית שהופכת התקדמות לגלויה וברורה לפעולה.",
      solution:
        "מוצר ביצוע ל־90 יום: הרגלים יומיים, ויזואליזציית התקדמות, מודעות לרצף ודירוג חברתי.",
      keyFeatures: [
        "יעד מרכזי ל־90 יום עם התקדמות יום־יום",
        "פעולות יומיות בהרגלים",
        "ויזואליזציית התקדמות ומודעות לימים שנותרו",
        "חברים, עדכונים ודירוג לאחריות",
        "התחברות באימייל וב־Google",
      ],
      technicalChallenges: [
        "מידול אתגר ארוך טווח כפעולות יומיות, התקדמות ואחריות חברתית",
      ],
      technologies: [...fill.projects.ninetyDayChallenge.technologies],
      whatILearned:
        "חשיבה מוצרית חשובה כמו פיצ׳רים: להפוך יעד למערכת ביצוע יומית שאפשר באמת להתמיד בה.",
      images: sharedImages.challenge,
      liveDemo: makeLink(ui.liveDemo, fill.projects.ninetyDayChallenge.liveDemoUrl),
      github: makeLink(ui.github, fill.projects.ninetyDayChallenge.githubUrl),
      highlight: "חשיבה מוצרית: הפיכת יעדים ארוכי טווח למערכת ביצוע יומית.",
    },
    {
      id: "passover-cleaning",
      title: "מתכנן ניקיון פסח",
      tagline: "פרויקט ביתי מורכב, שהופך לניהול",
      summary:
        "מערכת תכנון לפרויקט ניקיון פסח גדול עם דדליין: אזורים, משימות, עדיפויות והתקדמות.",
      problem:
        "ניקיון פסח הוא פרויקט מלחיץ עם כמה אזורים ודדליין קשיח. בלי מבנה המשימות מתערבבות וקשה לראות התקדמות.",
      solution:
        "מערכת ניהול פרויקט אישית שמחלקת את הבית לאזורים, מפרקת לעבודה למשימות, עוקבת אחרי סטטוס ועדיפויות, ומציגה התקדמות כוללת.",
      keyFeatures: [
        "חלוקת הבית לאזורים",
        "פירוק משימות עם עדיפויות",
        "מעקב סטטוס ונראות התקדמות",
        "מסגור פרויקט סביב דדליין",
      ],
      technicalChallenges: [
        "פירוק פרויקט ביתי לחוץ ומכוון דדליין למערכת ניתנת לניהול",
      ],
      technologies: [...fill.projects.passoverCleaning.technologies],
      whatILearned:
        "פירוק ברור ונראות התקדמות יכולים להפוך עומס לתוכנית שניתן לבצע.",
      images: [],
      imagePlaceholderNote: "צילומי מסך בקרוב",
      liveDemo: makeLink(ui.liveDemo, fill.projects.passoverCleaning.liveDemoUrl),
      github: makeLink(ui.github, fill.projects.passoverCleaning.githubUrl),
      highlight: "עיצוב מערכת בקנה מידה אישי: הפיכת פרויקט מלחיץ לתהליך ברור.",
    },
  ];

  return {
    locale: "he",
    dir: "rtl",
    siteMeta: {
      title: "הילה אבקסיס כהן | מהנדסת פתרונות AI | פרילנסרית",
      description:
        "הילה אבקסיס כהן — פרילנסרית לפתרונות תוכנה לעסקים ולפיתוח תוכנה לחברות גדולות.",
      url: isFilled(fill.websiteUrl) ? fill.websiteUrl.trim() : "http://localhost:3000",
      ogImage: "/og-placeholder.svg",
      locale: "he_IL",
    },
    person,
    navLinks: [
      { label: "אודות", href: "#about" },
      { label: "עסק", href: "#business" },
      { label: "כישורים", href: "#skills" },
      { label: "פרויקטים", href: "#projects" },
      { label: "תהליך", href: "#process" },
      { label: "ניסיון", href: "#experience" },
      { label: "השכלה", href: "#education" },
      { label: "צור קשר", href: "#contact" },
    ],
    socialLinks,
    hero: {
      name: person.fullName,
      role: person.role,
      headline: "מהנדסת פתרונות AI שבונה מוצרים חכמים ומערכות עסקיות",
      subheadline:
        "פרילנסרית לפתרונות תוכנה לעסקים ולפיתוח תוכנה לחברות גדולות, עם ניסיון של מעל 6 שנים.",
      primaryCta: { label: "לפרויקטים", href: "#projects" },
      secondaryCta: { label: "צרו קשר", href: "#contact" },
    },
    about: {
      title: "אודות",
      paragraphs: [
        "אני פרילנסרית לפתרונות תוכנה לעסקים ולפיתוח תוכנה לחברות גדולות, עם ניסיון של מעל 6 שנים בפיתוח תוכנה ופתרונות מבוססי AI.",
        "מנוסה בתרגום צרכים עסקיים לפתרונות טכניים ניתנים להרחבה, בניית סוכני AI עם מודלי שפה, אינטגרציות API, עיצוב ארכיטקטורת פתרון והובלת יישום מקצה לקצה.",
        "מה שאני הכי אוהבת זה הדרך מבעיה לארכיטקטורה ליישום: להבין את הצורך, לבחור גישה נכונה, ולהוציא פתרון שעובד.",
      ],
      focus: {
        eyebrow: "מיקוד",
        title: "הנדסת תוכנה + AI + עיצוב פתרון",
        text: "תרגום צרכים עסקיים לארכיטקטורות, סוכני AI, אינטגרציות ומערכות בפרודקשן.",
        loopLabel: "לולאת עבודה",
        loop: "בעיה ← ארכיטקטורה ← יישום",
      },
    },
    business: {
      eyebrow: "עסק",
      title: "בוטק׳לה — המיזם העצמאי שלי",
      name: "בוטק׳לה",
      roleLabel: "מייסדת",
      role: "מוצר עצמאי שאני בונה ומנהלת מקצה לקצה",
      paragraphs: [
        "בוטק׳לה הוא העסק העצמאי שלי: פלטפורמה שעוזרת לעסקים קטנים להפעיל פעולות AI שימושיות במהירות, בלי ללמוד שפת אוטומציות.",
        "קו המוצר הראשון, בוטק׳לה אקספרס, מתמקד בתהליכים מוכנים למשרדים קטנים. ב־MVP: משרדי רואי חשבון ואיסוף מסמכים חודשי מלקוחות בוואטסאפ, כולל תזכורות, כדי שהמשרד ירדוף פחות אחרי ניירת.",
        "מעבר לאקספרס, בוטק׳לה כוללת גם פיתוח כלים פנימיים כמו בוטקלה וויזארד להקמת סוכני AI: פרופיל חברה, מוצרים, מדיניות, בסיסי ידע וסוכנים שמדברים בשפת העסק.",
        "אני אחראית על חזון המוצר, העיצוב, הארכיטקטורה והפיתוח — מחוויית ההתחלה הראשונה ועד הפעלה, מעקב ושיפור מתמשך.",
      ],
      highlights: [
        {
          title: "למי זה מיועד",
          text: "עסקים קטנים ומשרדים מקצועיים שרוצים ש־AI יעשה עבודה אמיתית, לא רק לשוחח.",
        },
        {
          title: "מיקוד ה־MVP",
          text: "משרדי רואי חשבון · בקשות מסמכים בוואטסאפ · תזכורות עד השלמה.",
        },
        {
          title: "עקרון מוצר",
          text: "שואלים מה בוטק׳לה תעשה בשבילכם: פעולות, לא טריגרים, צמתים או וורקפלואים.",
        },
      ],
      ctaLabel: "לבוטקלה וויזארד בפרויקטים",
      ctaHref: "#botkale",
    },
    skillGroups: [
      {
        title: "פתרונות AI",
        skills: [
          "פתרונות AI",
          "מודלי שפה ו־OpenAI",
          "סוכני AI",
          "בסיסי ידע",
          "אוטומציית תהליכים",
          "פיתוח PoC",
        ],
      },
      {
        title: "הנדסת פתרונות",
        skills: [
          "עיצוב פתרון",
          "ארכיטקטורת פתרון",
          "אינטגרציות API",
          "גילוי טכני",
          "ייעוץ ללקוחות",
        ],
      },
      {
        title: "סטאק הנדסי",
        skills: [
          "Next.js",
          ".NET / C#",
          "React",
          "Angular",
          "TypeScript",
          "Azure",
          "Supabase",
          "PostgreSQL",
        ],
      },
    ],
    sectionCopy: {
      skills: {
        eyebrow: "כישורים",
        title: "יכולות ליבה",
        description:
          "פתרונות AI, הנדסת פתרונות, והסטאק שאיתו אני מעצבת, מחברת ומשיקה.",
      },
      projects: {
        eyebrow: "פרויקטים נבחרים",
        title: "עבודה שמראה איך אני חושבת ובונה",
        description:
          "מוצרים נבחרים סביב סוכני AI, תהליכים גנרטיביים, ומערכות שהופכות יעדים מבולגנים לביצוע ברור.",
      },
      experience: {
        eyebrow: "ניסיון",
        title: "ניסיון מקצועי",
        description:
          "מעל 6 שנים בבניית תוכנה ופתרונות מבוססי AI, מגילוי ועד פרודקשן.",
      },
      education: {
        eyebrow: "השכלה",
        title: "השכלה ותעודות",
        description: "קודם התואר הפורמלי, ואחר כך קורסים ותעודות.",
      },
    },
    projects,
    processSection: {
      title: "איך אני בונה",
      subtitle:
        "מתחילה מהבעיה, לא מהטכנולוגיה. הכלים מגיעים אחרי שהתהליך ברור.",
      steps: [
        {
          title: "להבין את הבעיה",
          description: "לחדד את הצורך האמיתי, האילוצים, ומה נחשב סיום.",
        },
        {
          title: "למפות את התהליך",
          description:
            "לפרק את העבודה לשלבים, החלטות והעברות ידיים לפני כתיבת קוד.",
        },
        {
          title: "לעצב את הפתרון",
          description:
            "לבחור ארכיטקטורה וטכנולוגיה שמתאימות לבעיה, לא להפך.",
        },
        {
          title: "לבנות",
          description:
            "ליישם מקצה לקצה: ממשקים, לוגיקה, אינטגרציות, והמסלולים שהמשתמשים באמת עוברים.",
        },
        {
          title: "לבדוק",
          description:
            "לאמת בתרחישים אמיתיים. לבדוק מקרי קצה, לא רק את המסלול השמח.",
        },
        {
          title: "לשפר",
          description:
            "לחדד את המוצר לפי פידבק: זרימות ברורות יותר, ברירות מחדל טובות יותר, פחות חיכוך.",
        },
      ],
    },
    experience: [
      {
        role: "מפתחת תוכנה / מהנדסת פתרונות AI",
        company: "",
        period: "מעל 6 שנות ניסיון",
        bullets: [
          "מסירת תוכנה ארגונית ופתרונות מבוססי AI מקצה לקצה.",
          "תרגום צרכים עסקיים לארכיטקטורות טכניות ולהטמעות ניתנות להרחבה.",
          "בניית סוכני AI עם מודלי שפה, בסיסי ידע ו־API של OpenAI.",
          "אינטגרציות מערכות ו־API בין מוצרים ותהליכים עסקיים.",
          "פיתוח אפליקציות בפרודקשן בפרונט ובבק.",
        ],
      },
    ],
    education: [
      {
        title: "B.Sc. מדעי המחשב ומתמטיקה",
        detail: "אוניברסיטת אריאל",
        type: "degree",
        visible: true,
      },
      {
        title: "Machine Learning & Deep Learning with Python",
        detail: "ג׳ון ברייס הדרכה — 336 שעות אקדמיות",
        type: "course",
        certificateHref: "/certificates/john-bryce-ml.jpg",
        imageSrc: "/certificates/john-bryce-ml.jpg",
        visible: true,
      },
      {
        title: "Structuring Machine Learning Projects",
        detail: "DeepLearning.AI · Coursera · פברואר 2025",
        type: "course",
        certificateHref: "/certificates/structuring-ml-projects.png",
        imageSrc: "/certificates/structuring-ml-projects.png",
        visible: true,
      },
      {
        title:
          "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
        detail: "DeepLearning.AI · Coursera · פברואר 2025",
        type: "course",
        certificateHref: "https://coursera.org/verify/BGOFUPLSPSZ6",
        imageSrc: "/certificates/improving-deep-neural-networks-full.png",
        visible: true,
      },
      {
        title: "Machine Learning with Python",
        detail: "IBM · Coursera · ינואר 2023",
        type: "course",
        certificateHref: "https://coursera.org/verify/6LUMFFK2ZKRW",
        imageSrc: "/certificates/machine-learning-with-python-full.png",
        visible: true,
      },
      {
        title: "Neural Networks and Deep Learning",
        detail: "DeepLearning.AI · Coursera · מאי 2022",
        type: "course",
        certificateHref: "https://coursera.org/verify/ZKSQXQ7ZSW6S",
        imageSrc: "/certificates/neural-networks-deep-learning.png",
        visible: true,
      },
      {
        title: "Data Analysis with Python",
        detail: "IBM · Coursera · יוני 2021",
        type: "course",
        certificateHref: "https://coursera.org/verify/3ZNWQSSMSSWT",
        imageSrc: "/certificates/data-analysis-with-python.png",
        visible: true,
      },
    ],
    contact: {
      title: "צור קשר",
      headline: "בואו נבנה משהו שימושי.",
      text: "פרילנסרית לפתרונות תוכנה לעסקים ולפיתוח תוכנה לחברות גדולות.",
      email: person.email,
      phone: person.phone,
      phoneHref: person.phoneHref,
      links: socialLinks,
    },
    footer: {
      note: `© ${new Date().getFullYear()} ${person.fullName}`,
    },
    ui,
  };
}

const cache: Record<Locale, SiteContent> = {
  en: buildEn(),
  he: buildHe(),
};

export function getSiteContent(locale: Locale): SiteContent {
  return cache[locale];
}

/** Default export for metadata / SSR fallback */
export const siteMeta = cache.he.siteMeta;
