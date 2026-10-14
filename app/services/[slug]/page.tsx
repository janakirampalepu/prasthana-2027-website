import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Aurora } from "@/components/Aurora";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { SpotlightCard } from "@/components/SpotlightCard";
import { CaseCard } from "@/components/CaseCard";
import { Icon } from "@/components/Icon";
import { CTA } from "@/components/CTA";
import { caseStudies, company, serviceDetails, services } from "@/lib/data";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  const d = serviceDetails[slug];
  if (!s || !d) return { title: "Service" };
  return pageMeta({
    title: s.title,
    description: `${s.blurb} ${d.overview}`,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  const d = serviceDetails[slug];
  if (!s || !d) notFound();

  const related = caseStudies.find((c) => c.slug === d.caseStudy);
  const others = services.filter((x) => x.slug !== slug);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: s.title,
        serviceType: s.title,
        description: `${s.blurb} ${d.overview}`,
        url: `${SITE_URL}/services/${slug}`,
        provider: { "@type": "Organization", name: company.name, url: SITE_URL },
        areaServed: "Worldwide",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
          { "@type": "ListItem", position: 3, name: s.title, item: `${SITE_URL}/services/${slug}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: d.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="relative px-6 sm:px-10 pt-40 pb-20 sm:pb-24">
        <Aurora />
        <div className="mx-auto max-w-5xl">
          <Link href="/services" className="mb-8 inline-flex items-center gap-2 text-sm text-muted hover:text-foreground">
            <ArrowLeft className="size-4" /> All services
          </Link>
          <Reveal>
            <div className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${s.accent} p-3 text-black`}>
              <Icon name={s.icon} className="size-7" />
            </div>
            <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">{s.title}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">{d.headline}</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg text-muted">{d.overview}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 font-semibold text-background transition hover:scale-105"
            >
              Talk to us <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 sm:px-10 pt-16">
        <SectionTitle eyebrow="What we offer" title="Capabilities" />
        <div className="grid gap-5 md:grid-cols-2">
          {d.offerings.map((o, i) => (
            <Reveal key={o.title} delay={(i % 2) * 0.08}>
              <SpotlightCard className="h-full p-7">
                <h3 className="text-xl font-semibold">{o.title}</h3>
                <p className="mt-2 text-muted">{o.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 sm:px-10 pt-32">
        <SectionTitle eyebrow="How we work" title="Our process" />
        <ol className="grid gap-5 md:grid-cols-4">
          {d.process.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <SpotlightCard className="h-full p-6">
                <span className="text-gradient text-4xl font-semibold">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-6 sm:px-10 pt-32 md:grid-cols-2">
        <Reveal>
          <SpotlightCard className="h-full p-8">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {d.tech.map((t) => (
                <span key={t} className="rounded-full border border-border bg-foreground/5 px-4 py-1.5 text-sm">{t}</span>
              ))}
            </div>
          </SpotlightCard>
        </Reveal>
        <Reveal delay={0.08}>
          <SpotlightCard className="h-full p-8">
            <h2 className="text-2xl font-semibold">What you get</h2>
            <ul className="mt-5 space-y-3">
              {d.deliverables.map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <Check className="size-5 text-emerald-500" /> {x}
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </Reveal>
      </section>

      {related && (
        <section className="mx-auto max-w-6xl px-6 sm:px-10 pt-32">
          <SectionTitle eyebrow="Related work" title="See it in action" />
          <div className="max-w-xl">
            <Reveal>
              <CaseCard c={related} />
            </Reveal>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-3xl px-6 sm:px-10 pt-32">
        <SectionTitle eyebrow="FAQ" title="Common questions" />
        <div className="space-y-3">
          {d.faqs.map((f) => (
            <Reveal key={f.q}>
              <details className="group glass rounded-2xl p-6 open:bg-foreground/[0.07]">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  {f.q}
                  <span className="text-2xl text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-muted">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 sm:px-10 pt-32">
        <SectionTitle eyebrow="More services" title="Explore other practices" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((o) => (
            <Link key={o.slug} href={`/services/${o.slug}`}>
              <SpotlightCard className="p-5" innerClassName="flex items-center justify-between gap-3">
                <span className="font-medium">{o.title}</span>
                <ArrowRight className="size-4 text-accent" />
              </SpotlightCard>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
