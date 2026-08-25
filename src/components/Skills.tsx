import { sectionCopy, skillGroups } from "@/data/portfolioData";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  return (
    <section id="skills" className="section-pad border-y border-border bg-bg-elevated/60 py-16 sm:py-20">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow={sectionCopy.skills.eyebrow}
            title={sectionCopy.skills.title}
            description={sectionCopy.skills.description}
          />
          <div className="grid gap-8 md:grid-cols-3">
            {skillGroups.map((group, index) => (
              <div key={group.title} className="min-w-0">
                <h3 className="mb-4 text-sm font-semibold tracking-wide text-fg">
                  <span className="mr-2 font-mono text-xs text-fg-subtle">
                    0{index + 1}
                  </span>
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border bg-bg px-2.5 py-1 text-sm text-fg-muted"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
