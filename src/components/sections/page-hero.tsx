"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/ui/container";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  titleEmphasis?: string;
  description?: string;
};

export function PageHero({
  eyebrow,
  title,
  titleEmphasis,
  description,
}: PageHeroProps) {
  return (
    <section className="border-b border-[var(--border)]/70 bg-[var(--ivory)] pt-[7.5rem] pb-12 sm:pt-36 sm:pb-14">
      <Container>
        <FadeIn className="max-w-3xl">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--taupe)]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-[var(--charcoal)] sm:text-5xl">
            {title}
            {titleEmphasis ? (
              <>
                {" "}
                <span className="font-[family-name:var(--font-display)] font-medium italic text-[var(--champagne)]">
                  {titleEmphasis}
                </span>
              </>
            ) : null}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {description}
            </p>
          ) : null}
        </FadeIn>
      </Container>
    </section>
  );
}
