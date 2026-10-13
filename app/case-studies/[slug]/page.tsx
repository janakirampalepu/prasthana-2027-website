import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { Aurora } from "@/components/Aurora";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { caseStudies } from "@/lib/data";

export const instant = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  return { title: c?.title ?? "Case study", description: c?.summary };
}

export default async function CaseStudyPage({ params }: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) notFound();

  const meta = [
    ["Client", c.client],
    ["Industry", c.industry],
    ["Engagement", c.engagement],
    ["Duration", c.duration],
  ];

  return (
    <>
      <section className="relative px-6 sm:px-10 pt-40 pb-20 sm:pb-24">
        <Aurora />
        <div className="mx-auto max-w-4xl">
          <Link href="/case-studies" className="mb-8 inline-flex items-center gap-2 text-sm text-muted hover:text-foreground">
            <ArrowLeft className="size-4" /> All case studies
          </Link>
          <Reveal>
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">{c.title}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted">{c.summary}</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 sm:px-10">
        <Reveal>
          <dl className="glass grid grid-cols-2 gap-6 rounded-3xl p-7 md:grid-cols-4">
            {meta.map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs tracking-widest text-accent uppercase">{k}</dt>
                <dd className="mt-1 font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-16 space-y-14">
          <Reveal>
            <h2 className="text-2xl font-semibold">The challenge</h2>
            <p className="mt-3 text-lg text-muted">{c.problem}</p>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-semibold">Our solution</h2>
            <p className="mt-3 text-lg text-muted">{c.solution}</p>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-semibold">Outcomes</h2>
            <ul className="mt-4 space-y-3">
              {c.outcome.map((o) => (
                <li key={o} className="flex items-center gap-3 text-lg">
                  <Check className="size-5 text-emerald-500" /> {o}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-semibold">Tech stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.stack.map((t) => (
                <span key={t} className="rounded-full border border-border bg-foreground/5 px-4 py-1.5 text-sm">{t}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <CTA />
    </>
  );
}
