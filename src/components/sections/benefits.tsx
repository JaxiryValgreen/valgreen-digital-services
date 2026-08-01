"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Stagger, StaggerItem } from "@/components/animations/stagger";
import { Container } from "@/components/ui/container";
import { BenefitIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import type { BenefitsContent } from "@/types";

type BenefitsSectionProps = {
  content: BenefitsContent;
};

export function BenefitsSection({ content }: BenefitsSectionProps) {
  return (
    <section className="border-y border-[var(--border)]/70 bg-[var(--surface)]/60 py-14 sm:py-16">
      <Container>
        <FadeIn className="mb-10">
          <SectionHeading
            title={content.title}
            description={content.description}
            align="center"
          />
        </FadeIn>
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item) => (
            <StaggerItem key={item.id}>
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--background)] p-6 text-center shadow-[0_10px_30px_-24px_rgba(28,25,23,0.35)]">
                <span className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--brand-soft)] text-[var(--brand-dark)]">
                  <BenefitIcon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
