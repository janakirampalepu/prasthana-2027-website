import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { OfficeGallery } from "@/components/OfficeGallery";
import { SocialLinks } from "@/components/SocialLinks";
import { company, values } from "@/lib/data";

export const metadata: Metadata = pageMeta({
  title: "About Us",
  description:
    "Prasthana Software Solutions is a product engineering and technology company in Hyderabad, coding with purpose and precision for clients across healthcare, fitness, security and more.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Coding with purpose and precision."
        text={`${company.legalName} is a product engineering and technology company based in Hyderabad. ${company.description}`}
      />
      <section className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-5 md:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 2) * 0.08}>
              <SpotlightCard className="h-full p-8">
                <h2 className="text-2xl font-semibold">{v.title}</h2>
                <p className="mt-3 text-muted">{v.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 sm:px-10 pt-24">
        <Reveal>
          <SpotlightCard className="p-8" innerClassName="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-semibold">Meet our leadership</h2>
              <p className="mt-1 text-muted">The people accountable for every engagement.</p>
            </div>
            <Link href="/leadership" className="shrink-0 rounded-full bg-foreground px-6 py-3 font-semibold text-background transition hover:scale-105">
              View leadership
            </Link>
          </SpotlightCard>
        </Reveal>
      </section>
      <OfficeGallery />
      <Reveal>
        <div className="mt-12 text-center">
          <SocialLinks label />
        </div>
      </Reveal>
      <CTA />
    </>
  );
}
