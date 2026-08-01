"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Stagger, StaggerItem } from "@/components/animations/stagger";
import { Container } from "@/components/ui/container";
import type { ProcessContent } from "@/types";

type ProcessSectionProps = {
  content: ProcessContent;
};

export function ProcessSection({ content }: ProcessSectionProps) {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[var(--ivory)] py-16 sm:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute -right-6 top-8 hidden select-none opacity-[0.08] lg:block"
        aria-hidden
      >
        <svg width="380" height="380" viewBox="0 0 380 380" fill="none">
          <path
            d="M80 290 L155 90 L185 190 L220 90 L300 290"
            stroke="#C5A882"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M220 90 C275 130 295 200 270 275"
            stroke="#C5A882"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path
            d="M265 70 C300 45 335 85 310 120 C285 95 270 85 265 70Z"
            stroke="#C5A882"
            strokeWidth="3"
          />
          <path
            d="M295 145 C330 125 355 170 330 200 C308 175 298 158 295 145Z"
            stroke="#C5A882"
            strokeWidth="3"
          />
        </svg>
      </div>

      <Container className="relative">
        <FadeIn className="mb-12 max-w-2xl lg:mb-16">
          {content.eyebrow ? (
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--taupe)]">
              {content.eyebrow}
              <span className="ml-3 inline-block h-px w-8 translate-y-[-0.2em] bg-[var(--champagne)]/70" />
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[var(--charcoal)] sm:text-4xl lg:text-[2.6rem]">
            {content.title}{" "}
            {content.titleEmphasis ? (
              <span className="font-[family-name:var(--font-display)] font-medium italic text-[var(--champagne)]">
                {content.titleEmphasis}
              </span>
            ) : null}
          </h2>
        </FadeIn>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 right-0 top-[1.35rem] hidden h-px bg-[var(--champagne)]/40 lg:block" />
          <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {content.steps.map((step) => (
              <StaggerItem
                key={step.step}
                className="relative text-center lg:text-left"
              >
                <div className="relative z-10 mx-auto flex h-11 w-11 items-center justify-center rounded-full border-2 border-[var(--champagne)] bg-[var(--ivory)] text-sm font-semibold text-[var(--champagne)] lg:mx-0">
                  {step.step}
                </div>
                <h3 className="mt-5 text-base font-semibold text-[var(--charcoal)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {step.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
