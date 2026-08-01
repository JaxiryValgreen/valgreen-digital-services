import {
  AboutSection,
  BenefitsSection,
  CtaSection,
  PageHero,
} from "@/components/sections";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About",
  description: site.about.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero title={site.about.title} description={site.about.description} />
      <AboutSection content={site.about} />
      <BenefitsSection content={site.benefits} />
      <CtaSection content={site.cta} />
    </>
  );
}
