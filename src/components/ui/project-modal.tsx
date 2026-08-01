"use client";

import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { useIsMounted } from "@/hooks/use-is-mounted";
import type { ProjectItem } from "@/types";

type ProjectModalProps = {
  project: ProjectItem | null;
  open: boolean;
  onClose: () => void;
};

export function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  const mounted = useIsMounted();
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && project ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="Close project details"
            className="absolute inset-0 bg-[var(--charcoal-deep)]/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-white/10 bg-[var(--surface)] shadow-[0_40px_80px_-30px_rgba(26,26,26,0.65)] sm:rounded-2xl"
          >
            <div className="relative aspect-[16/9] shrink-0 bg-[var(--brand-soft)] sm:aspect-[2/1]">
              <OptimizedImage
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal-deep)]/80 via-[var(--charcoal-deep)]/25 to-transparent" />
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[var(--charcoal)]/70 text-white backdrop-blur-md transition hover:border-[var(--champagne)] hover:text-[var(--champagne)]"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[var(--champagne)]">
                  {project.category}
                </p>
                <h3
                  id={titleId}
                  className="mt-1 font-[family-name:var(--font-display)] text-2xl text-white sm:text-3xl"
                >
                  {project.title}
                </h3>
              </div>
            </div>

            <div className="overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
              <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                {project.description}
              </p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--brand-dark)]">
                    Services Provided
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {project.services.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-[var(--foreground)]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--champagne)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--brand-dark)]">
                    Main Design Features
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {project.features.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-[var(--foreground)]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--champagne)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {project.technologies && project.technologies.length > 0 ? (
                <div className="mt-6">
                  <h4 className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--brand-dark)]">
                    Technologies Used
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[var(--border)] bg-[var(--brand-soft)]/60 px-3 py-1 text-[0.72rem] font-medium text-[var(--foreground)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--foreground)]"
                >
                  Close
                </button>
                <Button href={project.href}>
                  View Full Project
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
