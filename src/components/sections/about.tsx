"use client";

import { Check } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/ui/container";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { SectionHeading } from "@/components/ui/section-heading";
import type { AboutContent } from "@/types";

type AboutSectionProps = {
  content: AboutContent;
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section className="bg-[var(--ivory)] py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="relative mx-auto aspect-square max-w-md">
              <OptimizedImage
                src={content.image}
                alt={content.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain object-center drop-shadow-[0_12px_30px_rgba(23,23,23,0.12)]"
              />
            </div>
          </FadeIn>
          <div>
            <FadeIn>
              <SectionHeading
                title={content.title}
                description={content.description}
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <ul className="mt-8 space-y-4">
                {(content.points ?? []).map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-[var(--muted)]"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--champagne)]">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm leading-relaxed sm:text-base">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
