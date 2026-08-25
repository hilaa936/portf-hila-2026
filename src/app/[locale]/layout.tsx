import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LocaleProvider } from "@/i18n/locale";
import { isLocale, type Locale } from "@/data/siteContent";
import { buildLocaleMetadata, buildPersonJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return [{ locale: "he" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  return buildLocaleMetadata(raw);
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const jsonLd = buildPersonJsonLd(locale);

  return (
    <LocaleProvider locale={locale}>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(
            locale === "he" ? "he" : "en",
          )};document.documentElement.dir=${JSON.stringify(
            locale === "he" ? "rtl" : "ltr",
          )};`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </LocaleProvider>
  );
}
