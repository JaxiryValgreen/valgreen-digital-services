import {
  BusinessApplicationsSection,
  CtaSection,
  HeroSection,
  IndustriesSection,
  ProcessSection,
  ProjectsSection,
  ServicesSection,
} from "@/components/sections";
import { JsonLd } from "@/components/ui/json-ld";
import { site } from "@/data/site";
import { serviceListJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ path: "/" });

export default function HomePage() {
  return (
    <>
      <JsonLd data={serviceListJsonLd()} />
      <HeroSection content={site.hero} />
      <ServicesSection content={site.services} />
      <BusinessApplicationsSection content={site.businessApplications} />
      <IndustriesSection content={site.industries} />
      <ProjectsSection content={site.work} ctaMode="see-all" />
      <ProcessSection content={site.process} />
      <CtaSection content={site.cta} />
    </>
  );
}
