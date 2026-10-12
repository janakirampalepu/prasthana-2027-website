import Image from "next/image";
import Link from "next/link";
import { company, nav, services } from "@/lib/data";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:px-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image src="/logo.png" alt="Prasthana" width={140} height={40} className="logo-img h-10 w-auto" />
          <p className="mt-3 max-w-sm text-muted">{company.tagline}. Software application development company.</p>
          <p className="mt-6 max-w-sm text-sm text-muted">{company.address}</p>
          <a href={`mailto:${company.email}`} className="mt-3 inline-block text-sm text-accent hover:underline">
            {company.email}
          </a>
          <SocialLinks className="mt-5" />
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold">Company</p>
          <ul className="space-y-2 text-sm text-muted">
            {nav.map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-foreground">{n.label}</Link></li>
            ))}
            <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
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
      </div>
      <div className="border-t border-border px-6 sm:px-10 py-6 text-center text-xs text-muted">
        © 2026 {company.legalName}. All rights reserved. ·{" "}
        <a href={company.linkedin} className="hover:text-foreground" target="_blank" rel="noreferrer">LinkedIn</a> ·{" "}
        <a href={company.facebook} className="hover:text-foreground" target="_blank" rel="noreferrer">Facebook</a>
      </div>
    </footer>
  );
}
