import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { company, nav, services } from "@/lib/data";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:px-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image src="/logo-blue-bright.png" alt="Prasthana" width={140} height={40} className="h-10 w-auto" />
          <p className="mt-3 max-w-sm text-muted">{company.tagline}. Software application development company.</p>
          <ul className="mt-6 max-w-sm space-y-3 text-sm text-muted">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              {company.address}
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
      <div className="border-t border-border px-6 sm:px-10 py-6 text-xs text-muted">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p>© 2026 {company.legalName}. All rights reserved.</p>
          <ul className="flex items-center gap-5">
            <li><Link href="/terms" className="hover:text-foreground">Terms of Use</Link></li>
            <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
