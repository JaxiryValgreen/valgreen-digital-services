import type { MetadataRoute } from "next";
import { industriesCatalog } from "@/data/industries-catalog";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.brand.url.replace(/\/$/, "");
  const staticRoutes = [
    "",
    "/services",
    "/portfolio",
    "/about",
    "/process",
    "/contact",
    "/industries",
  ];

  const industryRoutes = industriesCatalog.map(
    (item) => `/industries/${item.slug}`,
  );

  return [...staticRoutes, ...industryRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
