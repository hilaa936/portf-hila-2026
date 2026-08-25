"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { useContent } from "@/i18n/locale";

export function Education() {
  const { sectionCopy, education, ui } = useContent();
  const visible = education.filter((item) => item.visible !== false);
  const typeLabel = {
    degree: ui.degree,
    course: ui.course,
    independent: ui.independent,
  } as const;

  return (
    <section id="education" className="section-pad border-t border-border py-20 sm:py-28">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow={sectionCopy.education.eyebrow}
            title={sectionCopy.education.title}
            description={sectionCopy.education.description}
          />
          <ul className="space-y-4">
            {visible.map((item) => (
              <li
                key={`${item.type}-${item.title}`}
                className="grid gap-2 soft-card px-5 py-5 sm:grid-cols-[160px_1fr_auto] sm:items-center sm:gap-6 sm:px-6"
              >
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-fg-subtle">
                  {typeLabel[item.type]}
                </p>
                <div>
                  <h3 className="font-bold text-fg">{item.title}</h3>
                  {item.detail ? (
                    <p className="mt-1 text-sm text-fg-muted">{item.detail}</p>
                  ) : null}
                </div>
                {item.certificateHref ? (
                  <a
                    href={item.certificateHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-accent transition-colors hover:text-accent-hover"
                  >
                    {ui.viewCertificate}
                  </a>
                ) : (
                  <span className="hidden sm:block" />
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
