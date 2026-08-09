"use client";

import { Check } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { AboutContent } from "@/types";

type AboutSectionProps = {
  content: AboutContent;
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section className="bg-[var(--ivory)] py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
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
      </Container>
    </section>
  );
}
