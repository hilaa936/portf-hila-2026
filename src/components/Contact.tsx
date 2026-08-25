"use client";

import { Reveal } from "@/components/Reveal";
import { useContent } from "@/i18n/locale";

export function Contact() {
  const { contact, ui } = useContent();

  return (
    <section id="contact" className="section-pad py-20 sm:py-28">
      <div className="container-narrow">
        <Reveal>
          <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] px-6 py-12 text-white shadow-[var(--shadow)] sm:px-12 sm:py-16">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
              {contact.title}
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              {contact.headline}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
              {contact.text}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {contact.links.map((link) => {
                const isPrimary =
                  link.label === ui.email ||
                  link.label === ui.phone ||
                  link.label === "Email" ||
                  link.label === "Phone";

                if (link.isPlaceholder) {
                  return (
                    <span
                      key={link.label}
                      className={
                        isPrimary
                          ? "inline-flex items-center rounded-full bg-white/90 px-5 py-3 text-sm font-bold text-accent"
                          : "inline-flex items-center rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white/80"
                      }
                    >
                      {link.label}
                      <span className="ms-2 text-[10px] font-normal uppercase tracking-wide opacity-70">
                        {ui.fillMe}
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
                        ? "inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-bold text-accent transition-opacity hover:opacity-90"
                        : "inline-flex items-center rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
                    }
                  >
                    {link.label === ui.phone || link.label === "Phone"
                      ? contact.phone || link.label
                      : link.label}
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
