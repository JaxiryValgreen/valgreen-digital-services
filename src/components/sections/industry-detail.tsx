"use client";

import { ArrowRight, Check } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { Stagger, StaggerItem } from "@/components/animations/stagger";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IndustryIcon } from "@/components/ui/icons";
import type { IndustryCatalogItem } from "@/types";

type IndustryDetailSectionProps = {
  industry: IndustryCatalogItem;
};

export function IndustryDetailSection({ industry }: IndustryDetailSectionProps) {
  return (
    <>
      <section className="relative overflow-hidden py-12 sm:py-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(197,168,130,0.14),_transparent_50%)]"
          aria-hidden
        />
        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <FadeIn>
              <div className="rounded-3xl border border-[var(--border)] bg-white/60 p-7 shadow-[0_24px_60px_-36px_rgba(34,34,34,0.4)] backdrop-blur-xl sm:p-8">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--champagne)]/30 bg-[linear-gradient(145deg,#F7F4EF,#F0EBE4)] text-[var(--champagne-dark)]">
                  <IndustryIcon name={industry.icon} className="h-6 w-6" />
                </span>
                <p className="mt-6 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
                  How we help
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--charcoal)]">
                  Built for {industry.title.toLowerCase()} businesses
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                  {industry.howWeHelp}
                </p>
                <div className="mt-8">
                  <Button href="/contact" size="lg">
                    Start Your Project
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--taupe)]">
                Common challenges
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-[var(--charcoal)] sm:text-3xl">
                What {industry.title.toLowerCase()} teams struggle with online
              </h3>
              <ul className="mt-6 space-y-3">
                {industry.challenges.map((challenge) => (
                  <li
                    key={challenge}
                    className="rounded-2xl border border-[var(--border)]/80 bg-white/50 px-4 py-3.5 text-sm leading-relaxed text-[var(--muted)] backdrop-blur-sm"
                  >
                    {challenge}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--border)]/70 bg-[var(--ivory)] py-14 sm:py-16 lg:py-20">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--taupe)]">
              Website benefits
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--charcoal)] sm:text-4xl">
              Why a professional website matters
            </h2>
          </FadeIn>
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
            {industry.websiteBenefits.map((item) => (
              <StaggerItem key={item}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-[var(--border)] bg-white/70 p-5 backdrop-blur-md">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand-dark)]">
                    <Check className="h-3 w-3" />
                  </span>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">
                    {item}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <Container>
          <FadeIn className="max-w-2xl">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--taupe)]">
              Choosing the right solution
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--charcoal)] sm:text-4xl">
              Website, web app, PWA, or native app?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
              Every business is different. We recommend the technology path that
              fits your workflow, customers, and growth goals—not a one-size
              template.
            </p>
          </FadeIn>
          <Stagger className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              {
                title: "Custom web application",
                body: industry.whenCustomWebApp,
              },
              {
                title: "Progressive Web App (PWA)",
                body: industry.whenPwa,
              },
              {
                title: "Native iOS or Android app",
                body: industry.whenNativeApp,
              },
            ].map((card) => (
              <StaggerItem key={card.title}>
                <div className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[linear-gradient(165deg,rgba(255,255,255,0.9),rgba(247,244,239,0.65))] p-6 shadow-[0_20px_45px_-32px_rgba(34,34,34,0.35)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--champagne)]/40">
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--charcoal)]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {card.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="bg-[var(--charcoal)] py-14 text-white sm:py-16 lg:py-20">
        <Container>
          <FadeIn className="max-w-2xl">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--champagne)]">
              Digital solutions
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Examples of what we can build
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              From booking and payments to portals, dashboards, and AI
              automation—custom systems designed around how your business
              actually operates.
            </p>
          </FadeIn>
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
            {industry.solutionExamples.map((example) => (
              <StaggerItem key={example.title}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:border-[var(--champagne)]/35 hover:bg-white/[0.08]">
                  <h3 className="text-lg font-semibold text-white">
                    {example.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {example.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--taupe)]">
              Feature focus
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--charcoal)] sm:text-4xl">
              Designed around your industry reality
            </h2>
          </FadeIn>
          <Stagger className="mt-10 grid gap-4 md:grid-cols-3">
            {industry.featureCards.map((card) => (
              <StaggerItem key={card.title}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-white/65 p-6 shadow-[0_18px_40px_-30px_rgba(34,34,34,0.3)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[var(--champagne)]/40">
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--charcoal)]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {card.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="border-t border-[var(--border)]/70 bg-[var(--ivory)] py-14 sm:py-16 lg:py-20">
        <Container>
          <FadeIn className="max-w-2xl">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--taupe)]">
              Business benefits
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--charcoal)] sm:text-4xl">
              The value of investing in modern technology
            </h2>
          </FadeIn>
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
            {industry.benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-white/70 p-6 backdrop-blur-md">
                  <h3 className="text-lg font-semibold text-[var(--charcoal)]">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeIn className="mt-8">
            <ul className="grid gap-2 sm:grid-cols-2">
              {industry.techBenefits.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-[var(--muted)]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--champagne)]" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </Container>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <Container>
          <FadeIn className="rounded-3xl border border-[var(--border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.85),rgba(240,235,228,0.55))] p-8 text-center shadow-[0_30px_70px_-40px_rgba(34,34,34,0.4)] backdrop-blur-xl sm:p-12">
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--charcoal)] sm:text-4xl">
              Ready to elevate your{" "}
              <span className="font-[family-name:var(--font-display)] font-medium italic text-[var(--champagne-dark)]">
                {industry.title.toLowerCase()}
              </span>{" "}
              business online?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)]">
              Tell us about your goals, customers, and workflow. We’ll recommend
              the right digital solution—and build it with the same premium
              standard across every Valgreen project.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/industries" variant="outlineDark" size="lg">
                Back to Industries
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
