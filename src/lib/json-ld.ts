import { site } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.brand.name,
    url: absoluteUrl("/"),
    description: site.brand.description,
    email: site.contact.email,
    telephone: site.contact.phone,
    logo: absoluteUrl(site.brand.logoSrc),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.brand.name,
    url: absoluteUrl("/"),
    description: site.seo.description,
    publisher: {
      "@type": "Organization",
      name: site.brand.name,
    },
  };
}

export function serviceListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: site.services.title,
    itemListElement: site.services.items.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: site.brand.name,
        },
      },
    })),
  };
}
