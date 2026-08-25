"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { useContent } from "@/i18n/locale";

export function Experience() {
  const { sectionCopy, experience } = useContent();

  return (
    <section id="experience" className="section-pad py-20 sm:py-28">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow={sectionCopy.experience.eyebrow}
            title={sectionCopy.experience.title}
            description={sectionCopy.experience.description}
          />
          <div className="space-y-6">
            {experience.map((item) => (
              <article
                key={`${item.role}-${item.period}-${item.company}`}
                className="soft-card p-6 sm:p-8"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-xl font-bold text-fg">
                    {item.role}
                  </h3>
                  <p className="text-sm text-fg-subtle">{item.period}</p>
                </div>
                {item.company ? (
                  <p className="mt-1 text-sm text-fg-muted">{item.company}</p>
                ) : null}
                <ul className="mt-5 space-y-2.5">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-sm leading-relaxed text-fg-muted"
                    >
                      <span className="shrink-0 text-accent">–</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
