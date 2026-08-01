import { notFound } from "next/navigation";
import { CtaSection, PageHero } from "@/components/sections";
import { IndustryDetailSection } from "@/components/sections/industry-detail";
import {
  getIndustryBySlug,
  industriesCatalog,
} from "@/data/industries-catalog";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industriesCatalog.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return createPageMetadata({
    title: industry.title,
    description: industry.shortDescription,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return (
    <>
      <PageHero
        eyebrow="Industry focus"
        title={industry.title}
        description={industry.shortDescription}
      />
      <IndustryDetailSection industry={industry} />
      <CtaSection
        content={{
          ...site.cta,
          primaryCta: { label: "Start Your Project", href: "/contact" },
        }}
      />
    </>
  );
}
