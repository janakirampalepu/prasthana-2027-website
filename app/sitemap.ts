import type { MetadataRoute } from "next";
import { caseStudies, services } from "@/lib/data";
import { LAST_UPDATED, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/technologies", priority: 0.8 },
    { path: "/case-studies", priority: 0.9 },
    { path: "/engagement-models", priority: 0.7 },
    { path: "/team", priority: 0.6 },
    { path: "/leadership", priority: 0.6 },
    { path: "/careers", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
    ...services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.8 })),
    ...caseStudies.map((c) => ({ path: `/case-studies/${c.slug}`, priority: 0.7 })),
    { path: "/terms", priority: 0.2 },
    { path: "/privacy", priority: 0.2 },
    { path: "/cookie-notice", priority: 0.2 },
  ];
  return pages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly",
    priority: p.priority,
  }));
}
