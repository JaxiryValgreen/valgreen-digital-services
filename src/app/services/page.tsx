import {
  BusinessApplicationsSection,
  CtaSection,
  PageHero,
  ProcessSection,
  ServicesSection,
} from "@/components/sections";
import { JsonLd } from "@/components/ui/json-ld";
import { site } from "@/data/site";
import { serviceListJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Services",
  description: site.services.description,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={serviceListJsonLd()} />
      <PageHero
        eyebrow={site.services.eyebrow}
        title={site.services.title}
        titleEmphasis={site.services.titleEmphasis}
        description={site.services.description}
      />
      <ServicesSection content={site.services} showIntro={false} />
      <BusinessApplicationsSection content={site.businessApplications} />
      <ProcessSection content={site.process} />
      <CtaSection content={site.cta} />
    </>
  );
}
