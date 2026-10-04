/**
 * ============================================================
 *  yourContent.ts  —  הקובץ היחיד למילוי / עדכון תוכן
 * ============================================================
 * כל מה שממלאים כאן מוצג באתר דרך portfolioData.ts
 */

export const yourContent = {
  // ----------------------------------------------------------
  // 1) פרטים אישיים וקשר
  // ----------------------------------------------------------
  firstName: "Hila",
  fullName: "Hila Aveksis Cohen",
  role: "Freelance software solutions for businesses and software development for large companies",
  email: "hila.aveksis@gmail.com",
  phone: "+972-52-8502568",
  phoneHref: "tel:+972528502568",
  linkedInUrl: "",
  githubUrl: "",
  location: "",
  websiteUrl: "",

  // ----------------------------------------------------------
  // 2) Hero + About
  // ----------------------------------------------------------
  headline:
    "AI Solutions Engineer building intelligent products and business systems",
  subheadline:
    "A freelancer delivering software solutions for businesses and software development for large companies, with 6+ years of engineering experience.",
  aboutParagraphs: [
    "I am a freelancer for software solutions for businesses and for software development for large companies, with 6+ years of software engineering experience.",
    "Experienced in translating business needs into scalable technical solutions, building AI agents with LLMs, integrating APIs, designing solution architectures, and leading end-to-end implementations.",
    "What I enjoy most is the path from problem → architecture → implementation — understanding the need, choosing the right approach, and shipping a working solution.",
  ],
  focus: {
    eyebrow: "Focus",
    title: "Software Engineering + AI + Solution Design",
    text: "Translate business needs into scalable architectures, AI agents, integrations, and production systems.",
    loopLabel: "Working loop",
    loop: "problem → architecture → implementation",
  },

  // ----------------------------------------------------------
  // 3) Skills / Core Competencies
  // ----------------------------------------------------------
  skillGroups: [
    {
      title: "AI Solutions",
      skills: [
        "AI Solutions",
        "LLMs & OpenAI",
        "AI Agents",
        "Knowledge Bases",
        "Process Automation",
        "PoC Development",
      ],
    },
    {
      title: "Solution Engineering",
      skills: [
        "Solution Design",
        "Solution Architecture",
        "API Integrations",
        "Technical Discovery",
        "Customer Consulting",
      ],
    },
    {
      title: "Engineering Stack",
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

  // ----------------------------------------------------------
  // 4) Experience — סיכום כללי בלבד (בלי פירוט חברות)
  // ----------------------------------------------------------
  experience: [
    {
      role: "Software Developer / AI Solutions Engineer",
      company: "",
      period: "6+ years of experience",
      bullets: [
        "Delivered enterprise software and AI-powered solutions end to end.",
        "Translated business needs into scalable technical architectures and implementations.",
        "Built AI agents with LLMs, knowledge bases, and OpenAI APIs.",
        "Integrated systems and APIs across products and business workflows.",
        "Developed production applications across frontend and backend stacks.",
      ],
    },
  ],

  // ----------------------------------------------------------
  // 5) Education & Certifications
  // ----------------------------------------------------------
  education: {
    degreeTitle: "B.Sc. Computer Science & Mathematics",
    university: "Ariel University",
    graduationYear: "",
    certifications: [
      {
        title: "Machine Learning & Deep Learning with Python",
        detail: "John Bryce Training — 336 academic hours",
        certificateHref: "/certificates/john-bryce-ml.jpg",
        imageSrc: "/certificates/john-bryce-ml.jpg",
      },
      {
        title: "Structuring Machine Learning Projects",
        detail: "DeepLearning.AI · Coursera · February 2025",
        certificateHref: "/certificates/structuring-ml-projects.png",
        imageSrc: "/certificates/structuring-ml-projects.png",
      },
      {
        title:
          "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
        detail: "DeepLearning.AI · Coursera · February 2025",
        certificateHref: "https://coursera.org/verify/BGOFUPLSPSZ6",
        imageSrc: "/certificates/improving-deep-neural-networks-full.png",
      },
      {
        title: "Machine Learning with Python",
        detail: "IBM · Coursera · January 2023",
        certificateHref: "https://coursera.org/verify/6LUMFFK2ZKRW",
        imageSrc: "/certificates/machine-learning-with-python-full.png",
      },
      {
        title: "Neural Networks and Deep Learning",
        detail: "DeepLearning.AI · Coursera · May 2022",
        certificateHref: "https://coursera.org/verify/ZKSQXQ7ZSW6S",
        imageSrc: "/certificates/neural-networks-deep-learning.png",
      },
      {
        title: "Data Analysis with Python",
        detail: "IBM · Coursera · June 2021",
        certificateHref: "https://coursera.org/verify/3ZNWQSSMSSWT",
        imageSrc: "/certificates/data-analysis-with-python.png",
      },
    ],
  },

  // ----------------------------------------------------------
  // 6) Projects — השלמות ספציפיות לכל פרויקט
  // ----------------------------------------------------------
  projects: {
    botkale: {
      liveDemoUrl: "",
      githubUrl: "",
      technologies: [
        "Next.js",
        "TypeScript",
        "OpenAI APIs",
        "LLMs",
        "Knowledge Bases",
        "Supabase",
        "PostgreSQL",
        "REST APIs",
      ],
      technicalChallenges: [
        "Turning business context into structured agent configuration",
        "Building knowledge bases that stay useful for real customer conversations",
        "Integrating CRMs, calendars, messaging platforms and external APIs",
      ],
      whatILearned:
        "How to design AI solutions around real business workflows — from discovery and architecture through agent setup, integrations and deployment.",
      extraFeatures: [
        "CRM, calendar and messaging integrations",
        "Business workflow and customer-journey automation",
      ],
    },

    aiCourseBuilder: {
      liveDemoUrl: "",
      githubUrl: "",
      technologies: [
        "Next.js",
        "TypeScript",
        "Generative AI",
        "Prompt Design",
        "Structured Outputs",
      ],
      technicalChallenges: [
        "Designing prompts that produce structured course and lesson outputs",
        "Keeping generated content editable inside a real product workflow",
      ],
      whatILearned:
        "How to wrap generative AI in product UX so course creation feels structured, useful and shippable — not just a chat wrapper.",
      extraFeatures: [] as string[],
    },

    ninetyDayChallenge: {
      liveDemoUrl: "",
      githubUrl: "",
      technologies: [] as string[],
      technicalChallenges: [
        "Modeling a long-horizon challenge as daily actions, progress and social accountability",
      ],
      whatILearned:
        "Product thinking matters as much as features — turning a goal into a daily execution system people can actually stick with.",
      extraFeatures: [] as string[],
    },

    passoverCleaning: {
      liveDemoUrl: "",
      githubUrl: "",
      technologies: [] as string[],
      technicalChallenges: [
        "Breaking a stressful, deadline-driven household project into a manageable system",
      ],
      whatILearned:
        "Clear decomposition and progress visibility can turn overwhelm into an executable plan.",
      extraFeatures: [] as string[],
      imageSrcs: [] as string[],
    },
  },
};

export type YourContent = typeof yourContent;
export type YourProjectKey = keyof typeof yourContent.projects;
