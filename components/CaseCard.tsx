import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import type { CaseStudy } from "@/lib/data";

export function CaseCard({ c }: { c: CaseStudy }) {
  return (
    <Link href={`/case-studies/${c.slug}`} className="block h-full">
      <SpotlightCard className="h-full">
        <div className={`h-40 bg-gradient-to-br ${c.accent} opacity-80`}>
          <div className="grid-bg h-full w-full opacity-60" />
        </div>
        <div className="p-7">
          <div className="flex items-center justify-between text-xs tracking-widest text-accent uppercase">
            {c.industry}
            <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <h3 className="mt-3 text-xl font-semibold">{c.title}</h3>
          <p className="mt-2 text-muted">{c.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {c.stack.map((t) => (
              <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted">{t}</span>
            ))}
          </div>
        </div>
      </SpotlightCard>
    </Link>
  );
}
