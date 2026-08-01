import { CtaSection, PageHero } from "@/components/sections";
import { IndustriesIndexSection } from "@/components/sections/industries-index";
import { industriesIndexContent } from "@/data/industries-catalog";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Industries",
  description: industriesIndexContent.description,
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow={industriesIndexContent.eyebrow}
        title={industriesIndexContent.title}
        titleEmphasis={industriesIndexContent.titleEmphasis}
        description={industriesIndexContent.description}
      />
      <IndustriesIndexSection />
      <CtaSection
        content={{
          title: "Ready to",
          titleEmphasis: "Build Something Custom",
          titleSuffix: "for Your Business?",
          description:
            "Whether your industry is listed or completely unique, we’ll design a digital solution around your goals.",
          primaryCta: { label: "Start Your Project", href: "/contact" },
        }}
      />
    </>
  );
}
