"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import type { Project, ProjectImage } from "@/data/portfolioData";

type ProjectCardProps = {
  project: Project;
  index: number;
};

function PlaceholderVisual({ note }: { note?: string }) {
  return (
    <div className="flex min-h-[280px] w-full flex-col items-center justify-center gap-3 rounded-xl border border-border bg-gradient-to-br from-accent-soft via-bg to-[#dbe4ef] px-6 text-center">
      <div className="rounded-full border border-border bg-bg-elevated px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
        Screenshot placeholder
      </div>
      <p className="max-w-sm text-sm text-fg-muted">
        {note ?? "Add screenshot paths in src/data/yourContent.ts"}
      </p>
    </div>
  );
}

function BrowserChrome({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-bg-elevated shadow-[0_1px_0_rgba(15,23,42,0.04)]">
      <div className="flex items-center gap-2 border-b border-border bg-[#f1f5f9] px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#cbd5e1]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#cbd5e1]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#cbd5e1]" />
        <div className="ml-2 h-5 flex-1 rounded-md border border-border bg-white/80" />
      </div>
      {children}
    </div>
  );
}

function PhoneChrome({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[280px] sm:max-w-[300px]">
      <div className="rounded-[1.75rem] border border-border bg-[#0f172a] p-2 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
        <div className="mb-2 flex justify-center">
          <span className="h-1.5 w-16 rounded-full bg-white/20" />
        </div>
        <div className="overflow-hidden rounded-[1.25rem] bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}

function ProjectScreenshot({
  image,
  priority,
}: {
  image: ProjectImage;
  priority?: boolean;
}) {
  const isMobile = image.variant === "mobile";

  if (isMobile) {
    return (
      <div className="flex justify-center rounded-xl border border-border bg-gradient-to-b from-[#eef2f7] to-[#e8eef4] px-4 py-6 sm:px-8 sm:py-8">
        <PhoneChrome>
          <div className="relative aspect-[9/19] w-full bg-white">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain object-top"
              sizes="(max-width: 640px) 260px, 300px"
              priority={priority}
            />
          </div>
        </PhoneChrome>
      </div>
    );
  }

  return (
    <BrowserChrome>
      <div className="max-h-[520px] overflow-auto bg-[#e8eef4]">
        <Image
          src={image.src}
          alt={image.alt}
          width={1600}
          height={1200}
          className="h-auto w-full object-contain object-top"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={priority}
        />
      </div>
    </BrowserChrome>
  );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [activeImage, setActiveImage] = useState(0);
  const hasImages = project.images.length > 0;
  const current = hasImages ? project.images[activeImage] : null;

  return (
    <article
      id={project.id}
      className="grid gap-8 border-b border-border py-14 last:border-b-0 lg:grid-cols-12 lg:gap-12 lg:py-20"
    >
      <div className="lg:col-span-6">
        {current ? (
          <ProjectScreenshot image={current} priority={index === 0} />
        ) : (
          <PlaceholderVisual note={project.imagePlaceholderNote} />
        )}

        {hasImages && project.images.length > 1 ? (
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {project.images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setActiveImage(i)}
                className={`relative h-16 w-14 shrink-0 overflow-hidden rounded-md border bg-[#e8eef4] transition sm:h-16 sm:w-20 ${
                  i === activeImage
                    ? "border-accent ring-2 ring-[var(--ring)]"
                    : "border-border opacity-70 hover:opacity-100"
                } ${img.variant === "mobile" ? "w-11" : "w-20"}`}
                aria-label={`Show screenshot ${i + 1}`}
              >
                <Image
                  src={img.src}
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div className="lg:col-span-6">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-mono text-xs text-fg-subtle">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
            {project.title}
          </h3>
        </div>
        <p className="mt-2 text-sm font-medium text-accent">{project.tagline}</p>
        <p className="mt-4 text-base leading-relaxed text-fg-muted">
          {project.summary}
        </p>

        {project.highlight ? (
          <p className="mt-4 border-l-2 border-accent pl-3 text-sm leading-relaxed text-fg">
            {project.highlight}
          </p>
        ) : null}

        <dl className="mt-8 space-y-5">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-fg-subtle">
              Problem
            </dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-fg-muted">
              {project.problem}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-fg-subtle">
              Solution
            </dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-fg-muted">
              {project.solution}
            </dd>
          </div>
        </dl>

        <div
          className={`mt-8 grid gap-6 ${
            project.technicalChallenges.length > 0 ? "sm:grid-cols-2" : ""
          }`}
        >
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-fg-subtle">
              Key Features
            </h4>
            <ul className="mt-2 space-y-1.5 text-sm text-fg-muted">
              {project.keyFeatures.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          {project.technicalChallenges.length > 0 ? (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-fg-subtle">
                Technical Challenges
              </h4>
              <ul className="mt-2 space-y-1.5 text-sm text-fg-muted">
                {project.technicalChallenges.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border-strong" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        {project.technologies.length > 0 ? (
          <div className="mt-8">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-fg-subtle">
              Technologies
            </h4>
            <ul className="mt-2 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-border bg-bg px-2.5 py-1 text-xs text-fg-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {project.whatILearned ? (
          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-fg-subtle">
              What I Learned
            </h4>
            <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
              {project.whatILearned}
            </p>
          </div>
        ) : null}

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            disabled={project.liveDemo.isPlaceholder}
            className={`inline-flex items-center rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
              project.liveDemo.isPlaceholder
                ? "cursor-not-allowed bg-accent/70 text-white"
                : "bg-accent text-white hover:bg-accent-hover"
            }`}
            title={
              project.liveDemo.isPlaceholder
                ? "Fill liveDemoUrl in src/data/yourContent.ts"
                : undefined
            }
            onClick={() => {
              if (!project.liveDemo.isPlaceholder) {
                window.open(project.liveDemo.href, "_blank", "noopener,noreferrer");
              }
            }}
          >
            {project.liveDemo.label}
            {project.liveDemo.isPlaceholder ? (
              <span className="ml-2 text-[10px] font-normal uppercase tracking-wide opacity-70">
                fill me
              </span>
            ) : null}
          </button>
          <button
            type="button"
            disabled={project.github.isPlaceholder}
            className={`inline-flex items-center rounded-md border px-4 py-2.5 text-sm font-medium transition-colors ${
              project.github.isPlaceholder
                ? "cursor-not-allowed border-border bg-bg text-fg-subtle"
                : "border-border-strong bg-bg-elevated text-fg hover:border-accent hover:text-accent"
            }`}
            title={
              project.github.isPlaceholder
                ? "Fill githubUrl in src/data/yourContent.ts"
                : undefined
            }
            onClick={() => {
              if (!project.github.isPlaceholder) {
                window.open(project.github.href, "_blank", "noopener,noreferrer");
              }
            }}
          >
            {project.github.label}
            {project.github.isPlaceholder ? (
              <span className="ml-2 text-[10px] font-normal uppercase tracking-wide text-fg-subtle">
                fill me
              </span>
            ) : null}
          </button>
        </div>
      </div>
    </article>
  );
}
