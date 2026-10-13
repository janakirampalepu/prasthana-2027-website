import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { SpotlightCard } from "@/components/SpotlightCard";
import { CTA } from "@/components/CTA";
import { engagementCompare, engagementDetails, engagementPractices, engagementPrinciples } from "@/lib/data";

export const metadata: Metadata = {
  title: "How We Work",
  description: "Engagement models and the way we run delivery: dedicated team, fixed scope and time & material.",
};

export default function EngagementModelsPage() {
  return (
    <>
      <PageHeader
        eyebrow="How we work"
        title="Engagement models built around your goals."
        text="Choose the model that fits your product and stage. We run every engagement with the same transparency and delivery discipline."
      />

      <section className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          {engagementDetails.map((m, i) => (
            <Reveal key={m.slug} delay={i * 0.08}>
              <SpotlightCard className="h-full p-7">
                <div className={`mb-5 h-1.5 w-14 rounded-full bg-gradient-to-r ${m.accent}`} />
                <h2 className="text-2xl font-semibold">{m.title}</h2>
                <p className="mt-2 text-muted">{m.tagline}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {m.points.map((p) => (
                    <li key={p} className="flex gap-2 text-foreground/85">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" /> {p}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 sm:px-10 pt-32">
        <SectionTitle eyebrow="Compare" title="Which model fits you?" />
        <Reveal>
          <div className="glass overflow-x-auto rounded-3xl">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-5 font-medium text-muted"> </th>
                  {engagementDetails.map((m) => (
                    <th key={m.slug} className="p-5 text-base font-semibold">{m.title}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {engagementCompare.map((row) => (
                  <tr key={row.key} className="border-b border-border last:border-0">
                    <th scope="row" className="p-5 font-medium text-accent">{row.label}</th>
                    {engagementDetails.map((m) => (
                      <td key={m.slug} className="p-5 text-muted">{m[row.key]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 sm:px-10 pt-32">
        <SectionTitle
          eyebrow="Delivery rhythm"
          title="How every engagement runs."
          text="Whatever the model, delivery follows the same predictable rhythm."
        />
        <ol className="grid gap-5 md:grid-cols-5">
          {engagementPractices.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <SpotlightCard className="h-full p-6">
                <span className="text-gradient text-3xl font-semibold">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-6 sm:px-10 pt-32">
        <SectionTitle eyebrow="Our commitments" title="What you can count on." />
        <div className="grid gap-5 sm:grid-cols-2">
          {engagementPrinciples.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08}>
              <SpotlightCard className="h-full p-7">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-muted">{p.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
