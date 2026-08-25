"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { useContent } from "@/i18n/locale";

export function Projects() {
  const { sectionCopy, projects } = useContent();

  return (
    <section id="projects" className="section-pad py-20 sm:py-28">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow={sectionCopy.projects.eyebrow}
            title={sectionCopy.projects.title}
            description={sectionCopy.projects.description}
          />
        </Reveal>

        <div>
          {projects.map((project, index) => (
            <Reveal key={project.id} delayMs={index * 40}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
