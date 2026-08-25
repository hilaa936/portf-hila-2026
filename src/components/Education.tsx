import { education, sectionCopy } from "@/data/portfolioData";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const typeLabel = {
  degree: "Degree",
  course: "Course / Certificate",
  independent: "Independent learning",
} as const;

export function Education() {
  const visible = education.filter((item) => item.visible !== false);

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
                className="grid gap-2 rounded-2xl border border-border bg-bg-elevated px-5 py-5 sm:grid-cols-[160px_1fr_auto] sm:items-center sm:gap-6 sm:px-6"
              >
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-fg-subtle">
                  {typeLabel[item.type]}
                </p>
                <div>
                  <h3 className="font-medium text-fg">{item.title}</h3>
                  {item.detail ? (
                    <p className="mt-1 text-sm text-fg-muted">{item.detail}</p>
                  ) : null}
                </div>
                {item.certificateHref ? (
                  <a
                    href={item.certificateHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                  >
                    View certificate
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
