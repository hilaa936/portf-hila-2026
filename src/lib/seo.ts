import type { Metadata } from "next";
import { getSiteContent, type Locale } from "@/data/siteContent";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://hila-cohen.dev";

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildLocaleMetadata(locale: Locale): Metadata {
  const content = getSiteContent(locale);
  const path = `/${locale}`;
  const url = absoluteUrl(path);

  const title =
    locale === "he"
      ? "הילה כהן | מהנדסת פתרונות AI | פרילנסרית AI Solutions Engineer"
      : "Hila Cohen | AI Solutions Engineer | Freelance AI & Solutions Engineer";

  const description =
    locale === "he"
      ? "הילה כהן — מהנדסת פתרונות AI ופרילנסרית: סוכני AI, אינטגרציות, ארכיטקטורת פתרון ופיתוח מקצה לקצה. מייסדת בוטק׳לה."
      : "Hila Cohen — freelance AI Solutions Engineer: AI agents, integrations, solution architecture, and end-to-end product delivery. Founder of Botkale.";

  const keywords =
    locale === "he"
      ? [
          "הילה כהן",
          "פרילנסרית AI",
          "מהנדסת פתרונות AI",
          "AI Solutions Engineer",
          "סוכני AI",
          "בוטקלה",
          "פרילנסרית תוכנה",
          "פתרונות AI לעסקים",
          "Next.js",
          "OpenAI",
        ]
      : [
          "Hila Cohen",
          "freelance AI Solutions Engineer",
          "AI Solutions Engineer freelancer",
          "AI agents",
          "Botkale",
          "freelance software engineer",
          "solution architecture",
          "Next.js",
          "OpenAI",
          "LLM integrations",
        ];

  return {
    title,
    description,
    keywords,
    authors: [{ name: locale === "he" ? "הילה כהן" : "Hila Cohen" }],
    creator: locale === "he" ? "הילה כהן" : "Hila Cohen",
    alternates: {
      canonical: url,
      languages: {
        he: absoluteUrl("/he"),
        en: absoluteUrl("/en"),
        "x-default": absoluteUrl("/he"),
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: locale === "he" ? "הילה כהן" : "Hila Cohen",
      locale: content.siteMeta.locale,
      alternateLocale: locale === "he" ? ["en_US"] : ["he_IL"],
      type: "website",
      images: [
        {
          url: absoluteUrl(content.siteMeta.ogImage),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(content.siteMeta.ogImage)],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function buildPersonJsonLd(locale: Locale) {
  const content = getSiteContent(locale);
  const isHe = locale === "he";

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: isHe ? "הילה כהן" : "Hila Cohen",
    alternateName: ["Hila Cohen", "הילה כהן"],
    url: absoluteUrl(`/${locale}`),
    email: content.person.email || undefined,
    telephone: content.person.phone || undefined,
    jobTitle: isHe
      ? "מהנדסת פתרונות AI / AI Solutions Engineer"
      : "AI Solutions Engineer",
    description: isHe
      ? "פרילנסרית ומהנדסת פתרונות AI — סוכני AI, אינטגרציות ופיתוח מוצרים מקצה לקצה. מייסדת בוטק׳לה."
      : "Freelance AI Solutions Engineer — AI agents, integrations, and end-to-end product delivery. Founder of Botkale.",
    knowsAbout: isHe
      ? [
          "AI Solutions Engineering",
          "סוכני AI",
          "LLMs",
          "Solution Architecture",
          "Next.js",
          "API Integrations",
          "בוטקלה",
        ]
      : [
          "AI Solutions Engineering",
          "AI Agents",
          "LLMs",
          "Solution Architecture",
          "Next.js",
          "API Integrations",
          "Botkale",
        ],
    worksFor: {
      "@type": "Organization",
      name: isHe ? "בוטק׳לה" : "Botkale",
      founder: isHe ? "הילה כהן" : "Hila Cohen",
    },
    sameAs: content.socialLinks
      .filter((s) => !s.isPlaceholder && s.href.startsWith("http"))
      .map((s) => s.href),
  };
}
