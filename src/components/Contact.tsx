import { contact } from "@/data/portfolioData";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section id="contact" className="section-pad py-20 sm:py-28">
      <div className="container-narrow">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent to-accent-hover px-6 py-12 text-white sm:px-12 sm:py-16">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/70">
              {contact.title}
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {contact.headline}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
              {contact.text}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {contact.links.map((link) => {
                const isPrimary = link.label === "Email" || link.label === "Phone";

                if (link.isPlaceholder) {
                  return (
                    <span
                      key={link.label}
                      className={
                        isPrimary
                          ? "inline-flex items-center rounded-md bg-white/90 px-5 py-3 text-sm font-medium text-accent"
                          : "inline-flex items-center rounded-md border border-white/30 px-5 py-3 text-sm font-medium text-white/80"
                      }
                      title="Fill in src/data/yourContent.ts"
                    >
                      {link.label}
                      <span
                        className={`ml-2 text-[10px] font-normal uppercase tracking-wide ${
                          isPrimary ? "text-fg-subtle" : "text-white/50"
                        }`}
                      >
                        fill me
                      </span>
                    </span>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={
                      isPrimary
                        ? "inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-medium text-accent transition-opacity hover:opacity-90"
                        : "inline-flex items-center rounded-md border border-white/30 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                    }
                  >
                    {link.label === "Phone" ? contact.phone || link.label : link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
