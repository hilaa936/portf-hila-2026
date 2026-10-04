"use client";

import { useEffect, useState } from "react";
import { useContent, useLocale } from "@/i18n/locale";

export function Navbar() {
  const { person, navLinks, socialLinks, ui } = useContent();
  const { locale, toggleLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border bg-bg/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="section-pad container-narrow flex h-16 items-center justify-between gap-3">
        <a
          href="#top"
          className="font-display text-sm font-extrabold tracking-tight text-fg sm:text-base"
        >
          {person.fullName}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-fg-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleLocale}
            className="rounded-full border border-border bg-bg-elevated px-3 py-1.5 text-xs font-bold text-fg-muted transition-colors hover:border-accent hover:text-accent"
            aria-label={ui.langSwitchTo}
          >
            {ui.langSwitchTo}
          </button>
          <a href="#contact" className="btn btn-primary !min-h-0 px-4 py-2 text-sm">
            {ui.contactNav}
          </a>
        </nav>

        <div className="flex items-center gap-2 md:gap-3 lg:hidden">
          <button
            type="button"
            onClick={toggleLocale}
            className="rounded-full border border-border bg-bg-elevated px-3 py-1.5 text-xs font-bold text-fg-muted"
            aria-label={ui.langSwitchTo}
          >
            {locale === "he" ? "EN" : "עב"}
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-elevated text-fg"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? ui.closeMenu : ui.menu}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{ui.menu}</span>
            <div className="flex w-4 flex-col gap-1.5">
              <span
                className={`h-px w-full bg-fg transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-full bg-fg transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-px w-full bg-fg transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-bg section-pad pb-8 pt-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-2 py-3 text-base text-fg"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-wrap gap-3 border-t border-border pt-4">
            {socialLinks
              .filter((s) => s.label !== ui.email)
              .map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-sm text-fg-muted underline-offset-4 hover:text-accent hover:underline"
                  onClick={() => setOpen(false)}
                >
                  {s.label}
                </a>
              ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
