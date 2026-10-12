import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Aurora } from "@/components/Aurora";
import { Reveal } from "@/components/Reveal";
import { RotatingWord } from "@/components/RotatingWord";
import { Marquee } from "@/components/Marquee";
import { Counter } from "@/components/Counter";
import { ServiceCard } from "@/components/ServiceCard";
import { CaseCard } from "@/components/CaseCard";
import { SectionTitle } from "@/components/SectionTitle";
import { CTA } from "@/components/CTA";
import { SpotlightCard } from "@/components/SpotlightCard";
import { caseStudies, company, services, stats, techGroups } from "@/lib/data";

export default function Home() {
  const allTech = techGroups.flatMap((g) => g.items.map((i) => i.name));

  return (
    <>
      <section className="relative flex min-h-screen items-center px-6 sm:px-10 pt-28 pb-20">
        <Aurora />
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted">
              <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
              Software application development company
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 max-w-5xl text-5xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-7xl lg:text-8xl">
              We engineer <RotatingWord words={["web apps", "mobile apps", "data platforms", "AI products"]} />
              <br />
              with purpose &amp; precision.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-muted sm:text-xl">{company.description}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 font-semibold text-background transition hover:scale-105"
              >
                Start a project
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/case-studies" className="glass rounded-full px-7 py-3.5 font-semibold transition hover:bg-foreground/10">
                See our work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-10">
        <Marquee items={allTech} />
      </section>

      <section className="mx-auto max-w-6xl px-6 sm:px-10 pt-32">
        <SectionTitle
          eyebrow="What we do"
          title="Six practices. One team that ships."
          text="From first screen to production scale, we cover the full journey of a digital product."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.06}>
              <ServiceCard s={s} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 sm:px-10 pt-32">
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <SpotlightCard className="p-7 text-center">
                <p className="text-gradient text-5xl font-semibold">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 sm:px-10 pt-32">
        <SectionTitle eyebrow="Technologies" title="A stack chosen for the long run." />
        <div className="grid gap-5 sm:grid-cols-2">
          {techGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.07}>
              <SpotlightCard className="h-full p-7">
                <h3 className="text-lg font-semibold">{g.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <span key={t.name} className="rounded-full border border-border bg-foreground/5 px-4 py-1.5 text-sm">
                      {t.name}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Link href="/technologies" className="mt-8 inline-flex items-center gap-2 text-accent hover:underline">
            Explore all technologies <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 sm:px-10 pt-32">
        <SectionTitle eyebrow="Case studies" title="Work that moves the needle." />
        <div className="grid gap-5 md:grid-cols-2">
          {caseStudies.slice(0, 2).map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08}>
              <CaseCard c={c} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Link href="/case-studies" className="mt-8 inline-flex items-center gap-2 text-accent hover:underline">
            View all case studies <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>

      <CTA />
    </>
  );
}
