import { Mail, Phone } from "lucide-react";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Container } from "@/components/ui/container";
import { site } from "@/data/site";

const COPYRIGHT_YEAR = 2026;

export function Footer() {
  return (
    <footer className="bg-[var(--charcoal-deep)] text-white">
      <Container className="py-10 sm:py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <BrandLogo size="md" onDark />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
            <a
              href={`mailto:${site.contact.email}`}
              className="inline-flex items-center gap-2.5 text-sm text-white/75 transition hover:text-[var(--champagne)]"
            >
              <Mail
                className="h-4 w-4 shrink-0 text-[var(--champagne)]"
                strokeWidth={1.5}
              />
              {site.contact.email}
            </a>
            <a
              href={site.contact.phoneHref}
              className="inline-flex items-center gap-2.5 text-sm text-white/75 transition hover:text-[var(--champagne)]"
            >
              <Phone
                className="h-4 w-4 shrink-0 text-[var(--champagne)]"
                strokeWidth={1.5}
              />
              {site.contact.phone}
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--champagne)]/25 pt-6">
          <p className="text-center text-xs tracking-wide text-white/45">
            © {COPYRIGHT_YEAR} {site.brand.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
