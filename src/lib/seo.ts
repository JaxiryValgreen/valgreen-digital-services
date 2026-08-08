import type { Metadata } from "next";
import { site } from "@/data/site";

const siteUrl = site.brand.url.replace(/\/$/, "");
const titleSuffix = site.brand.name;

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

type PageMetaInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description = site.seo.description,
  path = "/",
  image = site.seo.ogImage ?? site.brand.logoSrc,
  noIndex = false,
}: PageMetaInput = {}): Metadata {
  const fullTitle = title ? `${title} | ${titleSuffix}` : site.seo.title;
  const url = absoluteUrl(path);

  return {
    metadataBase: new URL(siteUrl),
    // Use absolute titles so the root title.template cannot double-suffix.
    title: {
      absolute: fullTitle,
    },
    description,
    keywords: site.seo.keywords,
    authors: [{ name: site.brand.name }],
    creator: site.brand.name,
    publisher: site.brand.name,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: site.brand.name,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: site.brand.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function createRootMetadata(): Metadata {
  return {
    ...createPageMetadata(),
    title: {
      default: site.seo.title,
      template: `%s | ${titleSuffix}`,
    },
  };
}
