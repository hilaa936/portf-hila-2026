"use client";

import { useContent } from "@/i18n/locale";

export function Footer() {
  const { footer, navLinks, socialLinks, ui } = useContent();

  return (
    <footer className="section-pad border-t border-border py-10">
      <div className="container-narrow flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-fg-subtle">{footer.note}</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {navLinks.slice(0, 4).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
          {socialLinks
            .filter((s) => s.label !== ui.email)
            .map((s) =>
              s.isPlaceholder ? (
                <span key={s.label} className="text-sm text-fg-subtle">
                  {s.label}
                </span>
              ) : (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  {s.label}
                </a>
              ),
            )}
        </div>
      </div>
    </footer>
  );
}
