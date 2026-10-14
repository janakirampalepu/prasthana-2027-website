import type { Metadata } from "next";
import { company } from "./data";

// Final public address of the site. Used for canonical links, the sitemap and structured data.
export const SITE_URL = "https://www.prasthana.com";

// Date the sitemap/job postings were last reviewed. Update when content changes materially.
export const LAST_UPDATED = "2026-10-13";

export const siteKeywords = [
  "product engineering and technology company in Hyderabad",
  "technology consulting",
  "software development company in Hyderabad",
  "web application development",
  "mobile app development",
  "quality engineering",
  "DevOps",
  "analytics",
  "AI and machine learning",
  "product engineering",
  "dedicated development teams",
];

// Per-page metadata: unique title and description, canonical link and share (Open Graph / Twitter) tags.
export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const full = `${title} | ${company.name}`;
  // Pages that set their own openGraph/twitter must repeat the share image, or it is dropped.
  const image = { url: "/opengraph-image", width: 1200, height: 630, alt: `${company.name}: ${company.tagline}` };
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: full, description, url: path, type: "website", siteName: company.name, images: [image] },
    twitter: { card: "summary_large_image", title: full, description, images: [image.url] },
  };
}

export const orgAddress = {
  "@type": "PostalAddress",
  streetAddress: "1-98/G/38, Plot No. 37 & 38, Serenity Square, Hitech City Madhapur Road",
  addressLocality: "Hyderabad",
  addressRegion: "Telangana",
  postalCode: "500081",
  addressCountry: "IN",
};
