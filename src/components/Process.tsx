"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { useContent } from "@/i18n/locale";

export function Process() {
  const { processSection } = useContent();

  return (
    <section
      id="process"
      className="section-pad border-y border-border bg-bg-elevated/60 py-20 sm:py-28"
    >
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow={processSection.title}
            title={processSection.title}
            description={processSection.subtitle}
          />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {processSection.steps.map((step, index) => (
              <li key={step.title} className="soft-card p-5 sm:p-6">
                <p className="font-mono text-xs font-bold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-lg font-bold text-fg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
