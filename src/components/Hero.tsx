"use client";

import { Reveal } from "@/components/Reveal";
import { useContent } from "@/i18n/locale";

export function Hero() {
  const { hero, socialLinks, ui } = useContent();
  const linkedIn = socialLinks.find((s) => s.label === ui.linkedIn || s.label === "LinkedIn");
  const github = socialLinks.find((s) => s.label === ui.github || s.label === "GitHub");

  return (
    <section
      id="top"
      className="hero-glow relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36"
    >
      <div className="section-pad container-narrow">
        <Reveal>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-accent">
            {hero.name}
          </p>
          <p className="mb-4 text-sm font-medium text-fg-muted sm:text-base">
            {hero.role}
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-[1.15] tracking-tight text-fg sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
            {hero.subheadline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href={hero.primaryCta.href} className="btn btn-primary">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn btn-ghost">
              {hero.secondaryCta.label}
            </a>
            {linkedIn && !linkedIn.isPlaceholder ? (
              <a
                href={linkedIn.href}
                className="px-3 py-3 text-sm font-medium text-fg-muted transition-colors hover:text-accent"
              >
                {linkedIn.label}
              </a>
            ) : null}
            {github && !github.isPlaceholder ? (
              <a
                href={github.href}
                className="px-3 py-3 text-sm font-medium text-fg-muted transition-colors hover:text-accent"
              >
                {github.label}
              </a>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
