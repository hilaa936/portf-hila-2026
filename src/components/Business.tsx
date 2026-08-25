"use client";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useContent } from "@/i18n/locale";

export function Business() {
  const { business } = useContent();

  return (
    <section id="business" className="section-pad py-20 sm:py-28">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow={business.eyebrow}
            title={business.title}
          />
          <div className="soft-card overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-2xl font-extrabold tracking-tight text-fg sm:text-3xl">
                {business.name}
              </h3>
              <p className="text-sm font-bold text-accent">
                {business.roleLabel}
              </p>
            </div>
            <p className="mt-2 text-sm font-medium text-fg-muted sm:text-base">
              {business.role}
            </p>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-fg-muted sm:text-lg">
              {business.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {business.highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-bg/70 p-4 sm:p-5"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href={business.ctaHref} className="btn btn-primary">
                {business.ctaLabel}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
