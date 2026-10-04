"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import type { Project, ProjectImage } from "@/data/siteContent";
import { useContent, useLocale } from "@/i18n/locale";

type ProjectCardProps = {
  project: Project;
  index: number;
};

function PlaceholderVisual({ note }: { note?: string }) {
  return (
    <div
      className="flex min-h-[280px] w-full flex-col items-center justify-center gap-3 rounded-[1.25rem] border border-border px-6 text-center"
      style={{
        background:
          "radial-gradient(circle at 30% 20%, rgba(100,36,245,0.1), transparent 50%), radial-gradient(circle at 80% 80%, rgba(32,201,197,0.08), transparent 45%), #fff",
      }}
    >
      <div className="rounded-full border border-border bg-bg px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
        Screenshot
      </div>
      <p className="max-w-sm text-sm text-fg-muted">
        {note ?? "Add screenshot paths in src/data/yourContent.ts"}
      </p>
    </div>
  );
}

function BrowserChrome({ children }: { children: ReactNode }) {
  return (
    <div
      className="overflow-hidden rounded-[1.25rem] border border-border bg-bg-elevated"
      style={{ boxShadow: "var(--shadow)" }}
    >
      <div className="flex items-center border-b border-border px-3 py-2.5" style={{ background: "#f3f1fb" }}>
        <div className="h-5 w-full rounded-full border border-border bg-white/90" />
      </div>
      {children}
    </div>
  );
}

function PhoneChrome({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[280px] sm:max-w-[300px]">
      <div
        className="rounded-[1.75rem] border border-border p-2"
        style={{ background: "#101a3a", boxShadow: "var(--shadow)" }}
      >
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
      <div
        className="flex justify-center rounded-[1.25rem] border border-border px-4 py-6 sm:px-8 sm:py-8"
        style={{
          background:
            "linear-gradient(180deg, rgba(243,241,251,0.9), rgba(252,251,248,0.95))",
        }}
      >
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
      <div className="max-h-[520px] overflow-auto" style={{ background: "#f3f1fb" }}>
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

function whatsappLink(phone: string, text: string) {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { ui, contact } = useContent();
  const { locale } = useLocale();
  const [activeImage, setActiveImage] = useState(0);
  const hasImages = project.images.length > 0;
  const current = hasImages ? project.images[activeImage] : null;
  const phone = contact.phone || "+972-52-8502568";
  const demoText =
    locale === "he"
      ? `היי, אשמח לקבל דמו חי ופרטים נוספים על הפרויקט: ${project.title}`
      : `Hi, I’d like a live demo and more details about the project: ${project.title}`;
  const githubText =
    locale === "he"
      ? `היי, אשמח לקבל קישור ל-GitHub ופרטים נוספים על הפרויקט: ${project.title}`
      : `Hi, I’d like the GitHub link and more details about the project: ${project.title}`;

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
                className={`relative h-16 w-14 shrink-0 overflow-hidden rounded-xl border transition sm:h-16 sm:w-20 ${
                  i === activeImage
                    ? "border-accent ring-2 ring-[var(--ring)]"
                    : "border-border opacity-70 hover:opacity-100"
                } ${img.variant === "mobile" ? "w-11" : "w-20"}`}
                style={{ background: "#f3f1fb" }}
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
          <span className="text-xs font-semibold text-accent">
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
          <p className="mt-4 border-s-2 border-accent ps-3 text-sm leading-relaxed text-fg">
            {project.highlight}
          </p>
        ) : null}

        <dl className="mt-8 space-y-5">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-fg-subtle">
              {ui.problem}
            </dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-fg-muted">
              {project.problem}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-fg-subtle">
              {ui.solution}
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
              {ui.keyFeatures}
            </h4>
            <ul className="mt-2 list-none space-y-1.5 text-sm text-fg-muted">
              {project.keyFeatures.map((f) => (
                <li key={f} className="pl-0">
                  <span className="text-accent" aria-hidden="true">
                    –{" "}
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          {project.technicalChallenges.length > 0 ? (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-fg-subtle">
                {ui.technicalChallenges}
              </h4>
              <ul className="mt-2 list-none space-y-1.5 text-sm text-fg-muted">
                {project.technicalChallenges.map((c) => (
                  <li key={c} className="pl-0">
                    <span className="text-fg-subtle" aria-hidden="true">
                      –{" "}
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        {project.technologies.length > 0 ? (
          <div className="mt-8">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-fg-subtle">
              {ui.technologies}
            </h4>
            <ul className="mt-2 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border bg-bg px-3 py-1 text-xs text-fg-muted"
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
              {ui.whatILearned}
            </h4>
            <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
              {project.whatILearned}
            </p>
          </div>
        ) : null}

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={whatsappLink(phone, demoText)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            {project.liveDemo.label}
          </a>
          <a
            href={whatsappLink(phone, githubText)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            {project.github.label}
          </a>
        </div>
      </div>
    </article>
  );
}
