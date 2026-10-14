import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { CaseCard } from "@/components/CaseCard";
import { CTA } from "@/components/CTA";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = pageMeta({
  title: "Case Studies",
  description:
    "Product engineering case studies in healthcare, fitness, sports, cybersecurity, digital services and AI, delivered by Prasthana's dedicated product and engineering teams.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case studies"
        title="Problems solved. Outcomes delivered."
        text="A look at how we have helped teams in healthcare, fitness, sports and technology."
      />
      <section className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-5 md:grid-cols-2">
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 2) * 0.08}>
              <CaseCard c={c} />
            </Reveal>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
