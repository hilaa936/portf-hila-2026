import type { Metadata } from "next";
import { headers } from "next/headers";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin", "hebrew"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
      "https://hila-cohen.dev",
  ),
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default async function RootLayout({
  children,
}: LayoutProps<"/">) {
  const headerList = await headers();
  const locale = headerList.get("x-locale") === "en" ? "en" : "he";
  const dir = locale === "he" ? "rtl" : "ltr";
  const lang = locale === "he" ? "he" : "en";

  return (
    <html
      lang={lang}
      dir={dir}
      suppressHydrationWarning
      className={`${rubik.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg font-sans">
        {children}
      </body>
    </html>
  );
}
