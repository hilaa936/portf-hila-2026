import { hero, socialLinks } from "@/data/portfolioData";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  const linkedIn = socialLinks.find((s) => s.label === "LinkedIn");
  const github = socialLinks.find((s) => s.label === "GitHub");

  return (
    <section
      id="top"
      className="hero-glow relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36"
    >
      <div className="section-pad container-narrow">
        <Reveal>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {hero.name}
          </p>
          <p className="mb-4 text-sm font-medium text-fg-muted sm:text-base">
            {hero.role}
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-fg sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
            {hero.subheadline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-md border border-border-strong bg-bg-elevated px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
            >
              {hero.secondaryCta.label}
            </a>
            {linkedIn ? (
              linkedIn.isPlaceholder ? (
                <span
                  className="inline-flex items-center justify-center px-3 py-3 text-sm font-medium text-fg-subtle"
                  title="Fill linkedInUrl in src/data/yourContent.ts"
                >
                  {linkedIn.label}
                </span>
              ) : (
                <a
                  href={linkedIn.href}
                  className="inline-flex items-center justify-center px-3 py-3 text-sm font-medium text-fg-muted transition-colors hover:text-accent"
                >
                  {linkedIn.label}
                </a>
              )
            ) : null}
            {github ? (
              github.isPlaceholder ? (
                <span
                  className="inline-flex items-center justify-center px-3 py-3 text-sm font-medium text-fg-subtle"
                  title="Fill githubUrl in src/data/yourContent.ts"
                >
                  {github.label}
                </span>
              ) : (
                <a
                  href={github.href}
                  className="inline-flex items-center justify-center px-3 py-3 text-sm font-medium text-fg-muted transition-colors hover:text-accent"
                >
                  {github.label}
                </a>
              )
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
