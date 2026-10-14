import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { caseStudies, company, nav, services } from "@/lib/data";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:px-10 py-16 md:grid-cols-3 lg:grid-cols-5">
        <div className="md:col-span-3 lg:col-span-2">
          <Image src="/logo-blue-bright.png" alt="Prasthana" width={140} height={40} className="h-10 w-auto" />
          <p className="mt-3 max-w-sm text-muted">{company.tagline}. Product engineering and technology company.</p>
          <ul className="mt-6 max-w-sm space-y-3 text-sm text-muted">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <a
                href={company.mapsUrl}
                target="_blank"
                rel="noreferrer"
                title="Open in Maps"
                className="hover:text-foreground hover:underline"
              >
                {company.address}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-accent" />
              <a href={`mailto:${company.email}`} className="text-accent hover:underline">
                {company.email}
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold">Company</p>
          <ul className="space-y-2 text-sm text-muted">
            {nav.map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-foreground">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold">Services</p>
          <ul className="space-y-2 text-sm text-muted">
            {services.map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-foreground">{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold">
            <Link href="/case-studies" className="hover:text-foreground">Case Studies</Link>
          </p>
          <ul className="space-y-2 text-sm text-muted">
            {caseStudies.map((c) => (
              <li key={c.slug}><Link href={`/case-studies/${c.slug}`} className="hover:text-foreground">{c.short}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-6 sm:px-10 py-6 text-xs text-muted">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <li><Link href="/terms" className="hover:text-foreground">Terms of Use</Link></li>
            <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
            <li><Link href="/cookie-notice" className="hover:text-foreground">Cookie Notice</Link></li>
          </ul>
          <p>© 2026 {company.legalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
