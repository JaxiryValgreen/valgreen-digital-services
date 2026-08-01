"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { Stagger, StaggerItem } from "@/components/animations/stagger";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IndustryIcon } from "@/components/ui/icons";
import {
  industriesCatalog,
  industriesIndexContent,
} from "@/data/industries-catalog";

export function IndustriesIndexSection() {
  const content = industriesIndexContent;

  return (
    <>
      <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(197,168,130,0.12),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(34,34,34,0.06),_transparent_50%)]"
          aria-hidden
        />
        <Container className="relative">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--taupe)]">
              Example industries
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {content.examplesNote}
            </p>
          </FadeIn>

          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-5">
            {industriesCatalog.map((industry) => (
              <StaggerItem key={industry.id}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)]/80 bg-white/55 p-5 shadow-[0_18px_40px_-28px_rgba(34,34,34,0.35)] backdrop-blur-xl transition duration-500 hover:-translate-y-1.5 hover:border-[var(--champagne)]/50 hover:bg-white/80 hover:shadow-[0_28px_55px_-28px_rgba(34,34,34,0.45)] sm:p-6"
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(197,168,130,0.12), transparent 55%)",
                    }}
                    aria-hidden
                  />
                  <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--champagne)]/25 bg-[linear-gradient(145deg,rgba(247,244,239,0.95),rgba(240,235,228,0.75))] text-[var(--champagne-dark)] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition duration-500 group-hover:scale-105 group-hover:border-[var(--champagne)]/45">
                    <IndustryIcon name={industry.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="relative mt-5 font-[family-name:var(--font-display)] text-xl text-[var(--charcoal)]">
                    {industry.title}
                  </h3>
                  <p className="relative mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                    {industry.shortDescription}
                  </p>
                  <span className="relative mt-5 inline-flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[var(--champagne-dark)] transition group-hover:gap-2.5">
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[var(--charcoal)] py-16 text-white sm:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(197,168,130,0.18),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(197,168,130,0.08),transparent_35%)]"
          aria-hidden
        />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <FadeIn>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--champagne)]">
                Beyond the list
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.6rem]">
                {content.visionTitle}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/70">
                {content.visionDescription}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <ul className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-7">
                {content.visionPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-relaxed text-white/80"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--champagne)]" />
                    {point}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,168,130,0.1),_transparent_60%)]"
          aria-hidden
        />
        <Container className="relative">
          <FadeIn className="mx-auto max-w-3xl rounded-3xl border border-[var(--border)] bg-white/60 p-8 text-center shadow-[0_30px_70px_-40px_rgba(34,34,34,0.4)] backdrop-blur-xl sm:p-12">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[var(--charcoal)] sm:text-4xl">
              {content.finalCtaTitle}{" "}
              <span className="font-[family-name:var(--font-display)] font-medium italic text-[var(--champagne-dark)]">
                {content.finalCtaEmphasis}
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)]">
              {content.finalCtaDescription}
            </p>
            <div className="mt-8 flex justify-center">
              <Button href={content.finalCta.href} size="lg">
                {content.finalCta.label}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
