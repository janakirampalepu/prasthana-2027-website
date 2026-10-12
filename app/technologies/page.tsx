import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { CTA } from "@/components/CTA";
import { techGroups } from "@/lib/data";

export const metadata: Metadata = { title: "Technologies" };

export default function TechnologiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Technologies"
        title="Modern, proven tools across the stack."
        text="We pick the right technology for the problem, with deep hands-on experience in each."
      />
      <section className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-5 md:grid-cols-2">
          {techGroups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 2) * 0.08}>
              <SpotlightCard className="h-full p-8">
                <h2 className="text-2xl font-semibold">{g.title}</h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {g.items.map((t) => (
                    <li key={t.name} className="rounded-2xl border border-border bg-foreground/5 px-5 py-4">
                      <p className="font-medium">{t.name}</p>
                      {t.note && <p className="text-xs text-muted">{t.note}</p>}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
