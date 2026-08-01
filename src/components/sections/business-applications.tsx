"use client";

import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { Stagger, StaggerItem } from "@/components/animations/stagger";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { BusinessApplicationsContent } from "@/types";

type BusinessApplicationsSectionProps = {
  content: BusinessApplicationsContent;
};

export function BusinessApplicationsSection({
  content,
}: BusinessApplicationsSectionProps) {
  return (
    <section
      id="business-applications"
      className="relative overflow-hidden bg-[var(--ivory)] py-16 sm:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(197,168,130,0.12),_transparent_55%)]"
        aria-hidden
      />

      <Container className="relative">
        <FadeIn className="mb-12 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--taupe)]">
              {content.eyebrow}
              <span className="ml-3 inline-block h-px w-8 translate-y-[-0.2em] bg-[var(--champagne)]/70" />
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[var(--charcoal)] sm:text-4xl lg:text-[2.6rem]">
              {content.title}{" "}
              {content.titleEmphasis ? (
                <span className="font-[family-name:var(--font-display)] font-medium italic text-[var(--champagne)]">
                  {content.titleEmphasis}
                </span>
              ) : null}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)]">
              {content.description}
            </p>
          </div>
          <Button href={content.cta.href} variant="outlineDark" size="md">
            {content.cta.label}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </FadeIn>

        <div
          id="choosing-technology"
          className="scroll-mt-28 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_24px_60px_-36px_rgba(34,34,34,0.35)] sm:p-10 lg:p-12"
        >
          <FadeIn>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--taupe)]">
              {content.choosing.eyebrow}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--charcoal)] sm:text-3xl lg:text-[2.2rem]">
              {content.choosing.title}{" "}
              {content.choosing.titleEmphasis ? (
                <span className="font-[family-name:var(--font-display)] font-medium italic text-[var(--champagne)]">
                  {content.choosing.titleEmphasis}
                </span>
              ) : null}
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--muted)]">
              {content.choosing.description}
            </p>
          </FadeIn>

          <Stagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {content.choosing.studyPoints.map((point) => (
              <StaggerItem key={point}>
                <div className="rounded-xl border border-[var(--border)]/80 bg-[var(--brand-soft)]/40 px-4 py-3 text-sm text-[var(--charcoal)]">
                  {point}
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeIn delay={0.08} className="mt-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--brand-dark)]">
              Possible recommendations
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {content.choosing.options.map((option) => (
                <div
                  key={option.id}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--ivory)]/80 p-5 transition duration-300 hover:border-[var(--champagne)]/40"
                >
                  <h4 className="text-sm font-semibold text-[var(--charcoal)]">
                    {option.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
              {content.choosing.note}
            </p>
            <div className="mt-8">
              <Button href={content.cta.href} size="lg">
                {content.cta.label}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
