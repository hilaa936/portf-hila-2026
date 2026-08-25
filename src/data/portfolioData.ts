import { yourContent } from "@/data/yourContent";

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  isPlaceholder?: boolean;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
  isPlaceholder?: boolean;
};

export type ProjectImage = {
  src: string;
  alt: string;
  /** desktop = browser frame; mobile = phone frame */
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

export type ProcessStep = {
  title: string;
  description: string;
};

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
  visible?: boolean;
};

type ProjectFill = {
  liveDemoUrl: string;
  githubUrl: string;
  technologies: readonly string[];
  technicalChallenges: readonly string[];
  whatILearned: string;
  extraFeatures: readonly string[];
  imageSrcs?: readonly string[];
};

function isFilled(value: string | undefined | null): boolean {
  return Boolean(value && value.trim().length > 0);
}

function makeLink(label: string, url: string): ProjectLink {
  if (isFilled(url)) {
    return { label, href: url.trim(), isPlaceholder: false };
  }
  return { label, href: "#", isPlaceholder: true };
}

function mergeProject(
  base: Omit<
    Project,
    | "liveDemo"
    | "github"
    | "technicalChallenges"
    | "technologies"
    | "whatILearned"
    | "keyFeatures"
  > & {
    keyFeatures: string[];
    technologiesFallback?: string[];
  },
  fillData: ProjectFill,
): Project {
  const technologies =
    fillData.technologies.length > 0
      ? [...fillData.technologies]
      : (base.technologiesFallback ?? []);

  const images =
    fillData.imageSrcs && fillData.imageSrcs.length > 0
      ? fillData.imageSrcs.map((src, i) => ({
          src,
          alt: `${base.title} screenshot ${i + 1}`,
          variant: "desktop" as const,
        }))
      : base.images;

  return {
    ...base,
    images,
    keyFeatures: [...base.keyFeatures, ...fillData.extraFeatures],
    technicalChallenges: [...fillData.technicalChallenges],
    technologies,
    whatILearned: fillData.whatILearned.trim(),
    liveDemo: makeLink("Live Demo", fillData.liveDemoUrl),
    github: makeLink("GitHub", fillData.githubUrl),
  };
}

const fill = yourContent;

export const siteMeta = {
  title: `${fill.firstName} | AI Solutions Engineer`,
  description: fill.subheadline,
  url: isFilled(fill.websiteUrl) ? fill.websiteUrl.trim() : "http://localhost:3000",
  ogImage: "/og-placeholder.svg",
  locale: "en_US",
};

export const person = {
  firstName: fill.firstName,
  fullName: fill.fullName,
  role: fill.role,
  email: isFilled(fill.email) ? fill.email.trim() : "",
  phone: isFilled(fill.phone) ? fill.phone.trim() : "",
  phoneHref: isFilled(fill.phoneHref) ? fill.phoneHref.trim() : "",
  location: isFilled(fill.location) ? fill.location.trim() : "",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  makeLink("LinkedIn", fill.linkedInUrl),
  makeLink("GitHub", fill.githubUrl),
  makeLink("Email", isFilled(person.email) ? `mailto:${person.email}` : ""),
  ...(isFilled(person.phone)
    ? [makeLink("Phone", person.phoneHref || `tel:${person.phone.replace(/[^\d+]/g, "")}`)]
    : []),
];

export const hero = {
  name: person.firstName,
  role: person.role,
  headline: fill.headline,
  subheadline: fill.subheadline,
  primaryCta: { label: "View Projects", href: "#projects" },
  secondaryCta: { label: "Contact Me", href: "#contact" },
};

export const about = {
  title: "About",
  paragraphs: [...fill.aboutParagraphs],
  focus: { ...fill.focus },
};

export const skillGroups: SkillGroup[] = fill.skillGroups.map((group) => ({
  title: group.title,
  skills: [...group.skills],
}));

export const sectionCopy = {
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
};

export const projects: Project[] = [
  mergeProject(
    {
      id: "botkale",
      title: "BotKale",
      tagline: "AI agents for real businesses",
      summary:
        "A guided platform for setting up business AI agents — from company profile and products to knowledge bases, policies, and agent configuration.",
      problem:
        "Small businesses need AI assistants that understand their products, policies, and tone — but assembling that knowledge and wiring an agent is complex and easy to get wrong.",
      solution:
        "A step-by-step product that turns business information into a structured agent setup: profile → products → policies → knowledge base → agent, with templates for common use cases.",
      keyFeatures: [
        "Multi-step onboarding: business profile, products, FAQs/policies, knowledge base, AI agent",
        "Agent creation modes: AI-assisted, chat-guided, and use-case templates (reception, support, sales, lead capture)",
        "Knowledge base management with readiness indicators and content quality signals",
        "Resource tracking for products, agents, and knowledge bases",
      ],
      technologiesFallback: ["AI Agents", "Knowledge Bases"],
      images: [
        {
          src: "/projects/botkale/agent-create.png",
          alt: "BotKale agent creation wizard with AI and template options",
          variant: "desktop",
        },
        {
          src: "/projects/botkale/knowledge-base.png",
          alt: "BotKale knowledge base management screen",
          variant: "desktop",
        },
        {
          src: "/projects/botkale/products.png",
          alt: "BotKale products management screen",
          variant: "desktop",
        },
        {
          src: "/projects/botkale/policies.png",
          alt: "BotKale policies and FAQ screen",
          variant: "desktop",
        },
      ],
      highlight:
        "Shows end-to-end AI solution design: business context → knowledge → agent.",
    },
    fill.projects.botkale,
  ),
  mergeProject(
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
      ],
      technologiesFallback: ["Generative AI", "Prompt Design", "Structured Outputs"],
      images: [
        {
          src: "/projects/ai-course-builder/landing.png",
          alt: "AI Course Builder landing page",
          variant: "desktop",
        },
        {
          src: "/projects/ai-course-builder/screen-2.png",
          alt: "My courses dashboard with AI course creation",
          variant: "mobile",
        },
        {
          src: "/projects/ai-course-builder/lesson.png",
          alt: "Lesson view with presentation slides",
          variant: "mobile",
        },
        {
          src: "/projects/ai-course-builder/screen-5.png",
          alt: "Interactive quiz with feedback and explanation",
          variant: "mobile",
        },
      ],
      highlight:
        "AI application with a real product workflow — not a thin ChatGPT wrapper.",
    },
    fill.projects.aiCourseBuilder,
  ),
  mergeProject(
    {
      id: "90-day-challenge",
      title: "90-Day Challenge",
      tagline: "Long-term goals as a daily execution system",
      summary:
        "An application for running a personal 90-day challenge — central goal, daily actions, progress tracking, habits, streaks, and social accountability.",
      problem:
        "Ambitious goals fail when they stay abstract. People need a daily system that makes progress visible and actionable over a long horizon.",
      solution:
        "A structured 90-day execution product: daily habits, progress visualization, streak awareness, and social ranking — turning a goal into something you can run every day.",
      keyFeatures: [
        "Central 90-day goal with day-by-day progress",
        "Daily actions across habits (e.g. walking, meals, water, training)",
        "Progress visualization and remaining-days awareness",
        "Friends, updates, and ranking for accountability",
        "Authentication including email and Google sign-in",
      ],
      technologiesFallback: [],
      images: [
        {
          src: "/projects/90-day-challenge/dashboard.jpeg",
          alt: "90-Day Challenge home dashboard with daily habits",
          variant: "mobile",
        },
        {
          src: "/projects/90-day-challenge/login.png",
          alt: "90-Day Challenge login screen",
          variant: "mobile",
        },
        {
          src: "/projects/90-day-challenge/friends.jpg",
          alt: "90-Day Challenge ranking and friends view",
          variant: "mobile",
        },
        {
          src: "/projects/90-day-challenge/meals.jpg",
          alt: "90-Day Challenge meals tracking screen",
          variant: "mobile",
        },
      ],
      highlight:
        "Product thinking: turning long-term goals into a structured daily execution system.",
    },
    fill.projects.ninetyDayChallenge,
  ),
  mergeProject(
    {
      id: "passover-cleaning",
      title: "Passover Cleaning Planner",
      tagline: "A complex household project, made manageable",
      summary:
        "A planning system for a large, deadline-driven Passover cleaning project — areas, tasks, priorities, and progress — not a simple checklist.",
      problem:
        "Passover cleaning is a stressful, multi-area project with a hard deadline. Without structure, tasks blur together and progress is hard to see.",
      solution:
        "A personal project-management system that divides the home into areas, breaks work into tasks, tracks status and priorities, and makes overall progress visible.",
      keyFeatures: [
        "Home divided into areas / zones",
        "Task breakdown with priorities",
        "Status tracking and progress visibility",
        "Deadline-oriented project framing",
      ],
      technologiesFallback: [],
      images: [],
      imagePlaceholderNote:
        "Screenshots coming soon — add paths in yourContent.ts under projects.passoverCleaning.imageSrcs",
      highlight:
        "System design at a personal scale: turning a stressful project into a manageable process.",
    },
    fill.projects.passoverCleaning,
  ),
];

export const processSection = {
  title: "How I Build",
  subtitle:
    "I start from the problem — not from a technology. Tools come after the process is clear.",
  steps: [
    {
      title: "Understand the problem",
      description:
        "Clarify the real need, constraints, and what “done” looks like.",
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
  ] satisfies ProcessStep[],
};

export const experience: ExperienceItem[] = fill.experience.map((item) => ({
  role: item.role,
  period: item.period,
  company: item.company.trim(),
  bullets: [...item.bullets],
}));

const degreeDetail = [fill.education.university.trim(), fill.education.graduationYear.trim()]
  .filter(Boolean)
  .join(" · ");

export const education: EducationItem[] = [
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
    visible: true,
  })),
];

export const contact = {
  title: "Contact",
  headline: "Let’s build something useful.",
  text: "Open to Solutions Engineer, AI Solutions Engineer, and software roles focused on AI-powered products, integrations and end-to-end delivery.",
  email: person.email,
  phone: person.phone,
  phoneHref: person.phoneHref,
  links: socialLinks,
};

export const footer = {
  note: `© ${new Date().getFullYear()} ${person.fullName}. Built with care.`,
};
