import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionTitle } from "@/components/SectionTitle";
import { SpotlightCard } from "@/components/SpotlightCard";
import { CTA } from "@/components/CTA";
import { engagementModels, services } from "@/lib/data";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything you need to design, build, ship and scale."
        text="Six connected practices so you work with one team from idea to production."
      />
      <section className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.08}>
              <ServiceCard s={s} detailed />
            </Reveal>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 sm:px-10 pt-32">
        <SectionTitle eyebrow="Engagement models" title="Work with us the way that suits you." />
        <div className="grid gap-5 md:grid-cols-3">
          {engagementModels.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.08}>
              <SpotlightCard className="h-full p-7">
                <h3 className="text-xl font-semibold">{m.title}</h3>
                <p className="mt-2 text-muted">{m.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
