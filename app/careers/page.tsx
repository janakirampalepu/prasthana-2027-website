import type { Metadata } from "next";
import { ArrowUpRight, MapPin, Briefcase } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { SpotlightCard } from "@/components/SpotlightCard";
import { OfficeGallery } from "@/components/OfficeGallery";
import { company, jobs, values } from "@/lib/data";

export const metadata: Metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Build your craft with us."
        text="We invest in engineers so they can grow into experts in the areas they care about."
      />
      <section className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.07}>
              <SpotlightCard className="h-full p-6">
                <h3 className="font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted">{v.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>
      <OfficeGallery />
      <section className="mx-auto max-w-4xl px-6 sm:px-10 pt-28">
        <SectionTitle eyebrow="Open roles" title="Find your next role." />
        <div className="space-y-4">
          {jobs.map((j, i) => (
            <Reveal key={j.slug} delay={i * 0.06}>
              <a
                href={`mailto:${company.email}?subject=${encodeURIComponent("Application: " + j.title)}`}
                className="block"
              >
                <SpotlightCard className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs tracking-widest text-accent uppercase">{j.team}</p>
                      <h3 className="mt-1 text-xl font-semibold">{j.title}</h3>
                      <p className="mt-2 text-muted">{j.about}</p>
                      <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted">
                        <span className="inline-flex items-center gap-1.5"><MapPin className="size-4" />{j.location}</span>
                        <span className="inline-flex items-center gap-1.5"><Briefcase className="size-4" />{j.type} · {j.experience}</span>
                      </div>
                    </div>
                    <ArrowUpRight className="size-6 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </SpotlightCard>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-10 text-center text-muted">
            Don&apos;t see your role? Send your resume to{" "}
            <a className="text-accent hover:underline" href={`mailto:${company.email}`}>{company.email}</a>.
          </p>
        </Reveal>
      </section>
    </>
  );
}
