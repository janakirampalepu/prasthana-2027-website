import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ArrowUpRight, MapPin, Briefcase } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { SpotlightCard } from "@/components/SpotlightCard";
import { OfficeGallery } from "@/components/OfficeGallery";
import { company, hiringProcess, jobs, peoplePrograms, values } from "@/lib/data";
import { JsonLd } from "@/components/JsonLd";
import { LAST_UPDATED, SITE_URL, orgAddress } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Careers in Hyderabad",
  description:
    "Join Prasthana in Hyderabad. Open roles for Ruby on Rails, front-end, .NET, QA, iOS and product management, with learning, mentoring and clear career paths.",
  path: "/careers",
});

// JobPosting data lets Google show these roles in Google Jobs. datePosted uses the date the openings were last reviewed.
const jobSchema = jobs.map((j) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: j.title,
  description: `<p>${j.about}</p><ul>${j.responsibilities.map((r) => `<li>${r}</li>`).join("")}</ul>`,
  datePosted: LAST_UPDATED,
  employmentType: "FULL_TIME",
  directApply: false,
  hiringOrganization: { "@type": "Organization", name: company.name, sameAs: SITE_URL },
  jobLocation: { "@type": "Place", address: orgAddress },
  identifier: { "@type": "PropertyValue", name: company.name, value: j.slug },
}));

export default function CareersPage() {
  return (
    <>
      <JsonLd data={jobSchema} />
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
      <section className="mx-auto max-w-6xl px-6 sm:px-10 pt-32">
        <SectionTitle
          eyebrow="Our people"
          title="We invest in engineers, not just projects."
          text="Great software comes from people who keep growing. Here is how we support that."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {peoplePrograms.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.07}>
              <SpotlightCard className="h-full p-6">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>
      <OfficeGallery />
      <section className="mx-auto max-w-6xl px-6 sm:px-10 pt-32">
        <SectionTitle eyebrow="Hiring process" title="A clear, respectful process." />
        <ol className="grid gap-5 md:grid-cols-5">
          {hiringProcess.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.07}>
              <SpotlightCard className="h-full p-6">
                <span className="text-gradient text-3xl font-semibold">0{i + 1}</span>
                <h3 className="mt-3 font-semibold">{h.title}</h3>
                <p className="mt-2 text-sm text-muted">{h.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </ol>
      </section>
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
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted marker:text-accent">
                        {j.responsibilities.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted">
                        <span className="inline-flex items-center gap-1.5"><MapPin className="size-4" />{j.location}</span>
                        {(j.type || j.experience) && (
                          <span className="inline-flex items-center gap-1.5">
                            <Briefcase className="size-4" />
                            {[j.type, j.experience].filter(Boolean).join(" · ")}
                          </span>
                        )}
                        <span className="font-medium text-accent">Apply by email</span>
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
