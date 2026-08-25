import { processSection } from "@/data/portfolioData";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function Process() {
  return (
    <section
      id="process"
      className="section-pad border-y border-border bg-bg-elevated/60 py-20 sm:py-28"
    >
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title={processSection.title}
            description={processSection.subtitle}
          />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {processSection.steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-border bg-bg p-5 sm:p-6"
              >
                <p className="font-mono text-xs text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold text-fg">
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
