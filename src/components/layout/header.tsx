"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { site } from "@/data/site";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const scrolled = useScrolled(10);
  const [open, setOpen] = useState(false);
  const { navigation } = site;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[var(--charcoal)]/95 backdrop-blur-xl"
          : "bg-[var(--charcoal)]",
      )}
    >
      <Container className="flex h-[6rem] items-center justify-between gap-4 sm:h-[7rem] lg:h-[7.25rem]">
        <BrandLogo size="sm" onDark />

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {navigation.main.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={`${item.label}-${item.href}`}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 text-[0.8rem] font-medium tracking-wide transition-colors",
                  active
                    ? "text-white"
                    : "text-white/70 hover:text-[var(--champagne)]",
                )}
              >
                {item.label}
                {active ? (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-[var(--champagne)]" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href={navigation.cta.href} variant="champagne" size="sm">
            {navigation.cta.label}
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-b border-white/10 bg-[var(--charcoal)] lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navigation.main.map((item) => (
                <Link
                  key={`m-${item.label}`}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-white/85 hover:bg-white/5 hover:text-[var(--champagne)]"
                >
                  {item.label}
                </Link>
              ))}
              <div onClick={() => setOpen(false)}>
                <Button
                  href={navigation.cta.href}
                  variant="champagne"
                  className="mt-3 w-full"
                >
                  {navigation.cta.label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
