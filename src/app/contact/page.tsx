import { Mail, Phone } from "lucide-react";
import { ContactSection, PageHero } from "@/components/sections";
import { Container } from "@/components/ui/container";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description: site.contactPage.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={site.contactPage.title}
        description={site.contactPage.description}
      />
      <section className="pb-4">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${site.contact.email}`}
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[var(--brand)]/40"
            >
              <Mail className="h-5 w-5 text-[var(--brand)]" />
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                Email
              </p>
              <p className="mt-2 break-all text-sm text-[var(--foreground)]">
                {site.contact.email}
              </p>
            </a>
            <a
              href={site.contact.phoneHref}
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[var(--brand)]/40"
            >
              <Phone className="h-5 w-5 text-[var(--brand)]" />
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                Phone
              </p>
              <p className="mt-2 text-sm text-[var(--foreground)]">
                {site.contact.phone}
              </p>
            </a>
          </div>
        </Container>
      </section>
      <ContactSection content={site.contactPage} contact={site.contact} variant="page" />
    </>
  );
}
