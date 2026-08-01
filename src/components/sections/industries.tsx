"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { Stagger, StaggerItem } from "@/components/animations/stagger";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IndustryIcon } from "@/components/ui/icons";
import { OptimizedImage } from "@/components/ui/optimized-image";
import type { IndustriesContent } from "@/types";

type IndustriesSectionProps = {
  content: IndustriesContent;
};

export function IndustriesSection({ content }: IndustriesSectionProps) {
  return (
    <section className="bg-[var(--charcoal)] py-16 text-white sm:py-20 lg:py-24">
      <Container>
        <FadeIn className="mb-12 text-center lg:mb-14">
          {content.eyebrow ? (
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--champagne)]">
              {content.eyebrow}
              <span className="ml-3 inline-block h-px w-8 translate-y-[-0.2em] bg-[var(--champagne)]/70" />
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.6rem]">
            {content.title}{" "}
            {content.titleEmphasis ? (
              <span className="font-[family-name:var(--font-display)] font-medium italic text-[var(--champagne)]">
                {content.titleEmphasis}
              </span>
            ) : null}
          </h2>
        </FadeIn>

        <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-7">
          {content.items.map((item) => (
            <StaggerItem key={item.id}>
              <Link
                href={`/industries/${item.slug}`}
                className="group relative block aspect-[3/5] overflow-hidden rounded-2xl"
              >
                <OptimizedImage
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 50vw, 14vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  {item.icon ? (
                    <span className="mb-2 inline-flex text-[var(--champagne)]">
                      <IndustryIcon name={item.icon} className="h-4 w-4" />
                    </span>
                  ) : null}
                  <h3 className="text-[0.8rem] font-semibold leading-snug text-white sm:text-sm">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        {content.cta ? (
          <FadeIn className="mt-10 flex justify-center" delay={0.12}>
            <Button
              href={content.cta.href}
              variant="outlineChampagne"
              size="md"
            >
              {content.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </FadeIn>
        ) : null}
      </Container>
    </section>
  );
}
