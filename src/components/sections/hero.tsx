"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Navigation,
  Phone,
  Share2,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useIsMounted } from "@/hooks/use-is-mounted";
import type { HeroContent } from "@/types";

type HeroSectionProps = {
  content: HeroContent;
};

function ConstructionLaptop({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-t-[0.9rem] border border-[#333] bg-[#2a2a2a] p-2 pb-0 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.7)]">
        <div className="mb-1.5 flex justify-center">
          <span className="h-1.5 w-12 rounded-full bg-white/20" />
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-md bg-[#111]">
          <Image
            src={image}
            alt={alt}
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 520px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />
          <div className="absolute inset-0 flex flex-col p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <p className="text-[0.5rem] font-semibold uppercase tracking-[0.2em] text-[var(--champagne)] sm:text-[0.58rem]">
                Roar Construction
              </p>
              <div className="hidden gap-3 text-[0.48rem] uppercase tracking-wider text-white/65 sm:flex">
                <span>Projects</span>
                <span>Services</span>
                <span>Contact</span>
              </div>
            </div>
            <div className="mt-auto">
              <p className="max-w-[90%] text-[0.85rem] font-semibold leading-[1.15] text-white sm:text-[1.1rem]">
                BUILT BOLD.
                <br />
                BUILT STRONG.
                <br />
                <span className="font-[family-name:var(--font-display)] italic text-[var(--champagne)]">
                  BUILT TO LAST.
                </span>
              </p>
              <p className="mt-2 max-w-[16rem] text-[0.55rem] leading-relaxed text-white/70 sm:text-[0.62rem]">
                Premium construction websites that showcase heavy equipment,
                projects, and trust.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 rounded-sm bg-[var(--champagne)] px-2.5 py-1 text-[0.5rem] font-semibold uppercase tracking-wider text-[var(--charcoal)]">
                Request Estimate
                <ArrowRight className="h-2.5 w-2.5" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-2.5 rounded-b-md bg-[#1f1f1f]">
        <div className="absolute inset-x-[20%] -bottom-1.5 h-1.5 rounded-b-md bg-[#141414]" />
      </div>
    </div>
  );
}

function GoogleBusinessPhone({ cover }: { cover: string }) {
  const photos = [
    "/images/gbp-photo-1.jpg",
    "/images/gbp-photo-2.jpg",
    "/images/gbp-photo-3.jpg",
  ];

  return (
    <div className="overflow-hidden rounded-[1.25rem] border-[3px] border-[#1a1a1a] bg-black shadow-[0_22px_44px_-14px_rgba(0,0,0,0.75)]">
      <div className="mx-auto mt-1.5 h-1 w-9 rounded-full bg-white/25" />
      <div className="relative aspect-[9/17] overflow-hidden bg-[#f8f9fa] text-[#202124]">
        <div className="relative h-[26%]">
          <Image
            src={cover}
            alt="Roar Construction Google Business cover"
            fill
            sizes="180px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
        </div>

        <div className="px-2.5 pb-3 pt-2">
          <p className="text-[0.68rem] font-semibold leading-tight">
            Roar Construction LLC
          </p>
          <div className="mt-0.5 flex items-center gap-1">
            <span className="text-[0.55rem] font-medium">5.0</span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-2 w-2 fill-[#fbbc04] text-[#fbbc04]"
                />
              ))}
            </div>
            <span className="text-[0.45rem] text-[#70757a]">(128)</span>
          </div>
          <p className="mt-0.5 text-[0.45rem] text-[#70757a]">
            Construction company · Open
          </p>

          <div className="mt-2 grid grid-cols-4 gap-1">
            {[
              { icon: Phone, label: "Call" },
              { icon: Navigation, label: "Directions" },
              { icon: Share2, label: "Share" },
              { icon: MapPin, label: "Save" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-0.5">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f0fe] text-[#1a73e8]">
                  <Icon className="h-2.5 w-2.5" strokeWidth={2} />
                </span>
                <span className="text-[0.36rem] font-medium text-[#1a73e8]">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-2 grid grid-cols-3 gap-1">
            {photos.map((src) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden rounded-sm bg-[#e8eaed]"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-2 space-y-1 border-t border-[#dadce0] pt-2">
            <p className="text-[0.45rem] text-[#3c4043]">
              <span className="font-medium text-[#202124]">Hours:</span> Open ·
              Closes 6 PM
            </p>
            <p className="text-[0.45rem] text-[#3c4043]">
              <span className="font-medium text-[#202124]">Listed on</span>{" "}
              Google Business Profile
            </p>
            <div className="rounded-md bg-white p-1.5 shadow-sm ring-1 ring-[#dadce0]/80">
              <p className="text-[0.4rem] font-medium">Recent review</p>
              <div className="mt-0.5 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-1.5 w-1.5 fill-[#fbbc04] text-[#fbbc04]"
                  />
                ))}
              </div>
              <p className="mt-0.5 text-[0.38rem] leading-snug text-[#5f6368]">
                “Professional crew and outstanding results on our remodel.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection({ content }: HeroSectionProps) {
  const mounted = useIsMounted();

  return (
    <section className="relative overflow-hidden bg-[var(--charcoal)] pt-[5.25rem] text-white sm:pt-[6rem] lg:pt-[6.5rem]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(197,168,130,0.12),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_70%,rgba(197,168,130,0.08),transparent_45%)]" />

      <Container className="relative grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-10 lg:py-16 xl:gap-14">
        <div className="min-w-0">
          {mounted ? (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="max-w-xl text-[2.1rem] font-semibold leading-[1.12] tracking-tight text-white sm:text-[2.7rem] lg:text-[3.1rem]"
            >
              {content.title}{" "}
              <span className="font-[family-name:var(--font-display)] font-medium italic text-[var(--champagne)]">
                {content.titleEmphasis}
              </span>{" "}
              {content.titleSuffix}
            </motion.h1>
          ) : (
            <h1 className="max-w-xl text-[2.1rem] font-semibold leading-[1.12] tracking-tight text-white sm:text-[2.7rem] lg:text-[3.1rem]">
              {content.title}{" "}
              <span className="font-[family-name:var(--font-display)] font-medium italic text-[var(--champagne)]">
                {content.titleEmphasis}
              </span>{" "}
              {content.titleSuffix}
            </h1>
          )}

          {mounted ? (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base"
            >
              {content.subtitle}
            </motion.p>
          ) : (
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
              {content.subtitle}
            </p>
          )}

          {mounted ? (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                href={content.primaryCta.href}
                variant="champagne"
                size="lg"
              >
                {content.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href={content.secondaryCta.href}
                variant="ghostLight"
                size="lg"
              >
                {content.secondaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          ) : (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href={content.primaryCta.href}
                variant="champagne"
                size="lg"
              >
                {content.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href={content.secondaryCta.href}
                variant="ghostLight"
                size="lg"
              >
                {content.secondaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        <div className="relative mx-auto w-full max-w-[34rem]">
          {mounted ? (
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
            >
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative pr-8 sm:pr-14"
              >
                <ConstructionLaptop
                  image={content.laptopImage}
                  alt={content.laptopImageAlt}
                />
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.35,
                  }}
                  className="absolute -bottom-3 right-0 w-[34%] sm:-bottom-5 sm:w-[30%]"
                >
                  <GoogleBusinessPhone cover={content.phoneCoverImage} />
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            <div className="relative pr-8 sm:pr-14">
              <ConstructionLaptop
                image={content.laptopImage}
                alt={content.laptopImageAlt}
              />
              <div className="absolute -bottom-3 right-0 w-[34%] sm:-bottom-5 sm:w-[30%]">
                <GoogleBusinessPhone cover={content.phoneCoverImage} />
              </div>
            </div>
          )}
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container>
          <ul className="grid grid-cols-2 divide-y divide-white/10 py-8 sm:grid-cols-4 sm:divide-x sm:divide-y-0 sm:py-10">
            {content.stats.map((stat, index) =>
              mounted ? (
                <motion.li
                  key={stat.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="px-2 py-4 text-center sm:px-4 sm:py-0"
                >
                  <p className="text-xl font-semibold tracking-tight text-[var(--champagne)] sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[0.7rem] text-white/55 sm:text-xs">
                    {stat.label}
                  </p>
                </motion.li>
              ) : (
                <li
                  key={stat.id}
                  className="px-2 py-4 text-center sm:px-4 sm:py-0"
                >
                  <p className="text-xl font-semibold tracking-tight text-[var(--champagne)] sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[0.7rem] text-white/55 sm:text-xs">
                    {stat.label}
                  </p>
                </li>
              ),
            )}
          </ul>
        </Container>
      </div>
    </section>
  );
}
