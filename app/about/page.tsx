import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { CTA } from "@/components/CTA";
import { OfficeGallery } from "@/components/OfficeGallery";
import { SocialLinks } from "@/components/SocialLinks";
import { company, values } from "@/lib/data";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Coding with purpose and precision."
        text={`${company.legalName} is a software application development company based in Hyderabad. ${company.description}`}
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
