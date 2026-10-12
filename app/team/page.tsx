import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { Counter } from "@/components/Counter";
import { CTA } from "@/components/CTA";
import { profiles } from "@/lib/data";

export const metadata: Metadata = { title: "Reference Profiles" };

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reference profiles"
        title="The engineers behind the work."
        text="Experience, tech stack and projects for the people who would join your team."
      />
      <section className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-5 md:grid-cols-2">
          {profiles.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08}>
              <SpotlightCard className="h-full p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold">{p.name}</h2>
                    <p className="text-sm text-accent">{p.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gradient text-4xl font-semibold">
                      <Counter value={p.years} suffix="+" />
                    </p>
                    <p className="text-xs text-muted">years experience</p>
                  </div>
                </div>
                <p className="mt-4 text-muted">{p.summary}</p>
                <p className="mt-6 text-xs tracking-widest text-muted uppercase">Tech stack</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-foreground/5 px-3 py-1 text-xs">{t}</span>
                  ))}
                </div>
                <p className="mt-6 text-xs tracking-widest text-muted uppercase">Projects</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/85">
                  {p.projects.map((pr) => <li key={pr}>{pr}</li>)}
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
