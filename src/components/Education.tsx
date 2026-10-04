"use client";

import { useCallback, useEffect, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { useContent } from "@/i18n/locale";
import type { EducationItem } from "@/data/siteContent";

export function Education() {
  const { sectionCopy, education, ui } = useContent();
  const visible = education.filter((item) => item.visible !== false);
  const degree = visible.filter((item) => item.type === "degree");
  const pictured = visible.filter((item) => item.imageSrc);
  const listed = visible.filter((item) => item.type !== "degree" && !item.imageSrc);
  const [openCert, setOpenCert] = useState<EducationItem | null>(null);
  const closeCert = useCallback(() => setOpenCert(null), []);
  const typeLabel = {
    degree: ui.degree,
    course: ui.course,
    independent: ui.independent,
  } as const;

  return (
    <section id="education" className="section-pad border-t border-border py-20 sm:py-28">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow={sectionCopy.education.eyebrow}
            title={sectionCopy.education.title}
            description={sectionCopy.education.description}
          />

          {degree.length > 0 ? (
            <ul className="mb-8 space-y-3">
              {degree.map((item) => (
                <li
                  key={item.title}
                  className="soft-card flex items-center gap-5 px-5 py-5 sm:px-7"
                >
                  <span
                    className="hidden h-14 w-1 shrink-0 rounded-full bg-accent sm:block"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
                      {typeLabel[item.type]}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-extrabold tracking-tight text-fg sm:text-2xl">
                      {item.title}
                    </h3>
                    {item.detail ? (
                      <p className="mt-1 text-sm text-fg-muted">{item.detail}</p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          ) : null}

          {pictured.length > 0 ? (
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {pictured.map((item) => (
                <li key={item.title}>
                  <CertificateFrame
                    item={item}
                    label={typeLabel[item.type]}
                    viewLabel={ui.viewCertificate}
                    onOpen={() => setOpenCert(item)}
                  />
                </li>
              ))}
            </ul>
          ) : null}

          {listed.length > 0 ? (
            <ul className={`grid gap-3 sm:grid-cols-2 ${pictured.length > 0 ? "mt-5" : ""}`}>
              {listed.map((item) => (
                <li key={item.title}>
                  <CertificateLink item={item} label={typeLabel[item.type]} viewLabel={ui.viewCertificate} />
                </li>
              ))}
            </ul>
          ) : null}
        </Reveal>
      </div>
      {openCert?.imageSrc ? (
        <CertificateLightbox
          item={openCert}
          closeLabel={ui.leadClose}
          onClose={closeCert}
        />
      ) : null}
    </section>
  );
}

function CertificateFrame({
  item,
  label,
  viewLabel,
  onOpen,
}: {
  item: EducationItem;
  label: string;
  viewLabel: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="soft-card flex h-full w-full flex-col overflow-hidden text-start transition-transform duration-200 hover:-translate-y-0.5"
    >
      <div className="flex h-52 items-center justify-center bg-[var(--bg-elev)] px-4 py-4 sm:h-60">
        <img
          src={item.imageSrc}
          alt=""
          className="max-h-full max-w-full object-contain shadow-[0_12px_28px_rgba(16,26,58,0.12)]"
        />
      </div>
      <div className="px-5 py-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-fg-subtle">
          {label}
        </p>
        <h3 className="mt-1 font-bold leading-snug text-fg">{item.title}</h3>
        {item.detail ? (
          <p className="mt-1 text-sm text-fg-muted">{item.detail}</p>
        ) : null}
        <p className="mt-3 text-sm font-bold text-accent">{viewLabel}</p>
      </div>
    </button>
  );
}

function CertificateLightbox({
  item,
  closeLabel,
  onClose,
}: {
  item: EducationItem;
  closeLabel: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const verifyHref = item.certificateHref?.startsWith("http")
    ? item.certificateHref
    : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(16,26,58,0.78)] p-3 sm:p-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
        className="flex max-h-[94vh] w-full max-w-6xl flex-col items-center gap-4"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={item.imageSrc}
          alt={item.title}
          className="max-h-[calc(94vh-4.5rem)] w-[min(96vw,1200px)] rounded-lg bg-white object-contain shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
        />
        <div className="flex shrink-0 flex-wrap items-center justify-center gap-3">
          {verifyHref ? (
            <a
              href={verifyHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-accent"
            >
              Coursera
            </a>
          ) : null}
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-bold text-white"
          >
            {closeLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

function CertificateLink({
  item,
  label,
  viewLabel,
}: {
  item: EducationItem;
  label: string;
  viewLabel: string;
}) {
  const content = (
    <>
      <div className="min-w-0">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-fg-subtle">
          {label}
        </p>
        <h3 className="mt-1 font-bold text-fg">{item.title}</h3>
        {item.detail ? <p className="mt-1 text-sm text-fg-muted">{item.detail}</p> : null}
      </div>
      {item.certificateHref ? (
        <span className="shrink-0 text-sm font-bold text-accent">{viewLabel}</span>
      ) : null}
    </>
  );

  const className =
    "soft-card flex h-full items-center justify-between gap-4 px-5 py-4 transition-transform duration-200 hover:-translate-y-0.5";

  if (!item.certificateHref) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a
      href={item.certificateHref}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {content}
    </a>
  );
}
