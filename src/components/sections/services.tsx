"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { Stagger, StaggerItem } from "@/components/animations/stagger";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ServiceIcon } from "@/components/ui/icons";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { cn } from "@/lib/cn";
import type { ServicesContent } from "@/types";

type ServicesSectionProps = {
  content: ServicesContent;
  showIntro?: boolean;
};

export function ServicesSection({
  content,
  showIntro = true,
}: ServicesSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const mounted = useIsMounted();

  function toggleCard(id: string) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <section id="services" className="bg-[var(--ivory)] py-16 sm:py-20 lg:py-24">
      <Container>
        {showIntro ? (
          <FadeIn className="mb-12 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              {content.eyebrow ? (
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--taupe)]">
                  {content.eyebrow}
                  <span className="ml-3 inline-block h-px w-8 translate-y-[-0.2em] bg-[var(--champagne)]/70" />
                </p>
              ) : null}
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[var(--charcoal)] sm:text-4xl lg:text-[2.6rem]">
                {content.title}{" "}
                {content.titleEmphasis ? (
                  <span className="font-[family-name:var(--font-display)] font-medium italic text-[var(--champagne)]">
                    {content.titleEmphasis}
                  </span>
                ) : null}
              </h2>
            </div>
            {content.cta ? (
              <Button href={content.cta.href} variant="outlineDark" size="md">
                {content.cta.label}
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : null}
          </FadeIn>
        ) : null}

        <Stagger className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((service) => {
            const open = openId === service.id;

            return (
              <StaggerItem key={service.id}>
                <button
                  type="button"
                  id={service.id}
                  onClick={() => toggleCard(service.id)}
                  aria-expanded={open}
                  className={cn(
                    "group flex w-full cursor-pointer flex-col rounded-2xl border bg-[var(--surface)] p-7 text-left shadow-[0_16px_40px_-28px_rgba(34,34,34,0.28)] transition duration-300",
                    open
                      ? "border-[var(--champagne)]/50 shadow-[0_24px_48px_-28px_rgba(197,168,130,0.4)]"
                      : "border-[var(--border)] hover:-translate-y-1 hover:border-[var(--champagne)]/45 hover:shadow-[0_24px_48px_-28px_rgba(197,168,130,0.4)]",
                  )}
                >
                  <span className="inline-flex text-[var(--champagne)]">
                    <ServiceIcon name={service.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold leading-snug text-[var(--charcoal)]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {service.description}
                  </p>

                  {mounted ? (
                    <AnimatePresence initial={false}>
                      {open ? (
                        <motion.div
                          key="details"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.28,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                            {service.details}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  ) : open ? (
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                      {service.details}
                    </p>
                  ) : null}

                  <span className="mt-6 inline-flex text-[var(--champagne)]">
                    <ArrowRight
                      className={cn(
                        "h-4 w-4 transition duration-300",
                        open ? "rotate-90" : "group-hover:translate-x-1",
                      )}
                    />
                  </span>
                </button>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
