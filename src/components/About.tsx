"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { useContent } from "@/i18n/locale";

export function About() {
  const { about } = useContent();

  return (
    <section id="about" className="section-pad py-20 sm:py-28">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading title={about.title} />
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:gap-14">
            <div className="space-y-5 text-base leading-relaxed text-fg-muted sm:text-lg">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
            <aside className="soft-card p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                {about.focus.eyebrow}
              </p>
              <p className="mt-3 font-display text-xl font-bold leading-snug text-fg">
                {about.focus.title}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                {about.focus.text}
              </p>
              <div className="mt-6 border-t border-border pt-5">
                <p className="text-sm text-fg-subtle">{about.focus.loopLabel}</p>
                <p className="mt-2 text-sm font-bold text-fg">
                  {about.focus.loop}
                </p>
              </div>
            </aside>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
