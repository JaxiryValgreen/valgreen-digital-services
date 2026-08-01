"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/ui/container";
import type { PlatformsContent } from "@/types";

type TrustBarProps = {
  content: PlatformsContent;
};

const logoStyles: Record<string, string> = {
  wordpress: "font-serif italic tracking-tight",
  shopify: "font-semibold tracking-tight",
  wix: "font-bold tracking-[0.08em] lowercase",
  webflow: "font-semibold tracking-tight",
  squarespace: "font-medium tracking-[0.02em]",
  stripe: "font-semibold lowercase tracking-tight",
  google: "font-medium tracking-tight",
};

export function TrustBar({ content }: TrustBarProps) {
  return (
    <section className="border-y border-[var(--border)]/70 bg-[#f0eeeb] py-10 sm:py-12">
      <Container>
        <FadeIn>
          <p className="text-center text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[var(--muted)]">
            {content.title}
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-9 gap-y-5 grayscale sm:gap-x-12">
            {content.items.map((item) => (
              <li
                key={item.id}
                className={`text-[1.05rem] text-[var(--muted)]/75 sm:text-[1.15rem] ${logoStyles[item.id] ?? "font-medium"}`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
