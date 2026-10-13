import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { ContactForm } from "@/components/ContactForm";
import { SocialLinks } from "@/components/SocialLinks";
import { company } from "@/lib/data";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's build something great." text="Tell us what you have in mind." />
      <section className="mx-auto grid max-w-6xl gap-5 px-6 sm:px-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <SpotlightCard className="p-8">
            <ContactForm />
          </SpotlightCard>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-2">
          <SpotlightCard className="h-full p-8">
            <h2 className="text-xl font-semibold">Reach us directly</h2>
            <p className="mt-6 flex gap-3 text-muted">
              <Mail className="mt-0.5 size-5 shrink-0 text-accent" />
              <a href={`mailto:${company.email}`} className="hover:text-foreground">{company.email}</a>
            </p>
            <p className="mt-4 flex gap-3 text-muted">
              <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
              <a
                href={company.mapsUrl}
                target="_blank"
                rel="noreferrer"
                title="Open in Maps"
                className="hover:text-foreground hover:underline"
              >
                {company.address}
              </a>
            </p>
            <SocialLinks label className="mt-6" />
          </SpotlightCard>
        </Reveal>
      </section>
    </>
  );
}
