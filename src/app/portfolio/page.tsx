import {
  CtaSection,
  PageHero,
  ProjectsSection,
} from "@/components/sections";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Portfolio",
  description: site.work.description,
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero title={site.work.title} description={site.work.description} />
      <ProjectsSection content={site.work} ctaMode="details" />
      <CtaSection content={site.cta} />
    </>
  );
}
