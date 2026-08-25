"use client";

import { useEffect, useState } from "react";
import { navLinks, person, socialLinks } from "@/data/portfolioData";

export function Navbar() {
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
      <div className="section-pad container-narrow flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-fg"
        >
          {person.firstName}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md bg-accent px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-fg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
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

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-bg section-pad pb-8 pt-4 md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-3 text-base text-fg"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex gap-3 border-t border-border pt-4">
            {socialLinks
              .filter((s) => s.label !== "Email")
              .map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-sm text-fg-muted underline-offset-4 hover:text-fg hover:underline"
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
