"use client";

import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { CtaContent } from "@/types";

type CtaSectionProps = {
  content: CtaContent;
};

export function CtaSection({ content }: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--charcoal)] py-16 text-white sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute bottom-4 left-4 opacity-[0.12]"
        aria-hidden
      >
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
          <path
            d="M30 120 C55 40 95 30 125 80"
            stroke="#C5A882"
            strokeWidth="2"
          />
          <path
            d="M45 45 C70 20 105 35 90 65 C75 52 55 50 45 45Z"
            stroke="#C5A882"
            strokeWidth="2"
          />
          <path
            d="M85 78 C110 58 140 88 118 112 C100 95 90 88 85 78Z"
            stroke="#C5A882"
            strokeWidth="2"
          />
        </svg>
      </div>

      <Container>
        <FadeIn>
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.7rem]">
                {content.title}{" "}
                {content.titleEmphasis ? (
                  <span className="font-[family-name:var(--font-display)] font-medium italic text-[var(--champagne)]">
                    {content.titleEmphasis}
                  </span>
                ) : null}
                {content.titleSuffix ? ` ${content.titleSuffix}` : null}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
                {content.description}
              </p>
            </div>
            <Button href={content.primaryCta.href} variant="champagne" size="lg">
              {content.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
