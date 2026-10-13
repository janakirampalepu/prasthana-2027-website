import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { Counter } from "@/components/Counter";
import { CTA } from "@/components/CTA";
import { leadership } from "@/lib/data";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Meet the management team behind Prasthana.",
};

const initials = (name: string) =>
  name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Leadership"
        title="The people who run Prasthana."
        text="Experience, expertise and accountability: meet the leaders behind every engagement."
      />
      <section className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-5 md:grid-cols-2">
          {leadership.map((l, i) => (
            <Reveal key={l.slug} delay={(i % 2) * 0.08}>
              <SpotlightCard className="h-full p-8">
                <div className="flex items-start gap-5">
                  <div
                    aria-hidden
                    className="grid size-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-xl font-semibold text-black"
                  >
                    {initials(l.name)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl font-semibold">{l.name}</h2>
                    <p className="text-sm text-accent">{l.title}</p>
                  </div>
                  {l.years && (
                    <div className="text-right">
                      <p className="text-gradient text-3xl font-semibold">
                        <Counter value={l.years} suffix="+" />
                      </p>
                      <p className="text-xs text-muted">years</p>
                    </div>
                  )}
                </div>
                <p className="mt-5 text-muted">{l.summary}</p>
                {l.expertise && (
                  <>
                    <p className="mt-6 text-xs tracking-widest text-muted uppercase">Expertise</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {l.expertise.map((t) => (
                        <span key={t} className="rounded-full border border-border bg-foreground/5 px-3 py-1 text-xs">{t}</span>
                      ))}
                    </div>
                  </>
                )}
                {l.background && (
                  <>
                    <p className="mt-6 text-xs tracking-widest text-muted uppercase">Background</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/85">
                      {l.background.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  </>
                )}
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
