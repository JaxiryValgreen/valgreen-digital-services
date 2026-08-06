"use client";

import { Suspense } from "react";
import { Mail, Phone } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { ContactForm } from "@/components/forms/contact-form";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Container } from "@/components/ui/container";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import type { ContactConfig, ContactPageContent } from "@/types";

type ContactSectionProps = {
  content: ContactPageContent;
  contact: ContactConfig;
  variant?: "page" | "footer";
};

export function ContactSection({
  content,
  contact,
  variant = "footer",
}: ContactSectionProps) {
  const isFooter = variant === "footer";

  return (
    <section
      id="contact"
      className={
        isFooter
          ? "border-t border-white/10 bg-[var(--footer)] py-14 text-white sm:py-16 lg:py-20"
          : "bg-[var(--ivory)] py-16 sm:py-20 lg:py-24"
      }
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
          <FadeIn>
            {isFooter ? (
              <>
                <BrandLogo size="md" onDark />
                <ul className="mt-8 space-y-4 text-sm text-white/70">
                  <li>
                    <a
                      href={`mailto:${contact.email}`}
                      className="inline-flex items-center gap-3 transition hover:text-[var(--champagne)]"
                    >
                      <Mail
                        className="h-4 w-4 text-[var(--champagne)]"
                        strokeWidth={1.6}
                      />
                      {contact.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={contact.phoneHref}
                      className="inline-flex items-center gap-3 transition hover:text-[var(--champagne)]"
                    >
                      <Phone
                        className="h-4 w-4 text-[var(--champagne)]"
                        strokeWidth={1.6}
                      />
                      {contact.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={contact.instagramHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 transition hover:text-[var(--champagne)]"
                    >
                      <InstagramIcon
                        className="h-4 w-4 text-[var(--champagne)]"
                        strokeWidth={1.6}
                      />
                      {contact.instagram}
                    </a>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--foreground)] sm:text-4xl">
                  {content.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                  {content.description}
                </p>
                <ul className="mt-8 space-y-4 text-sm text-[var(--muted)]">
                  <li>
                    <a
                      href={`mailto:${contact.email}`}
                      className="inline-flex items-center gap-3 transition hover:text-[var(--brand-dark)]"
                    >
                      <Mail className="h-4 w-4 text-[var(--brand)]" />
                      {contact.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={contact.phoneHref}
                      className="inline-flex items-center gap-3 transition hover:text-[var(--brand-dark)]"
                    >
                      <Phone className="h-4 w-4 text-[var(--brand)]" />
                      {contact.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={contact.instagramHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 transition hover:text-[var(--brand-dark)]"
                    >
                      <InstagramIcon className="h-4 w-4 text-[var(--brand)]" />
                      {contact.instagram}
                    </a>
                  </li>
                </ul>
              </>
            )}
          </FadeIn>

          <FadeIn delay={0.08}>
            <div
              className={
                isFooter
                  ? ""
                  : "rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_18px_50px_-30px_rgba(26,26,26,0.35)] sm:p-8"
              }
            >
              {!isFooter ? (
                <h3 className="mb-6 font-[family-name:var(--font-display)] text-2xl text-[var(--foreground)]">
                  {content.formTitle}
                </h3>
              ) : null}
              <Suspense
                fallback={
                  <div className="h-72 animate-pulse rounded-xl bg-[var(--brand-soft)]/40" />
                }
              >
                <ContactForm layout="split" />
              </Suspense>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
