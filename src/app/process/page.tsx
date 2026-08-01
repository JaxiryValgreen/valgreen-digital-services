import {
  BusinessApplicationsSection,
  CtaSection,
  PageHero,
  ProcessSection,
} from "@/components/sections";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Process",
  description: site.process.description,
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow={site.process.eyebrow}
        title={site.process.title}
        titleEmphasis={site.process.titleEmphasis}
        description={site.process.description}
      />
      <ProcessSection content={site.process} />
      <BusinessApplicationsSection content={site.businessApplications} />
      <CtaSection content={site.cta} />
    </>
  );
}
