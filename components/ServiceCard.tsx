import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Icon } from "./Icon";
import { SpotlightCard } from "./SpotlightCard";
import type { Service } from "@/lib/data";

export function ServiceCard({ s, detailed = false }: { s: Service; detailed?: boolean }) {
  return (
    <Link href={`/services/${s.slug}`} className="block h-full">
    <SpotlightCard className="h-full p-7">
      <div className={`mb-5 inline-flex rounded-2xl bg-gradient-to-br ${s.accent} p-3 text-black`}>
        <Icon name={s.icon} className="size-6" />
      </div>
      <h3 className="text-xl font-semibold">{s.title}</h3>
      <p className="mt-2 text-muted">{s.blurb}</p>
      {detailed && (
        <ul className="mt-5 space-y-2 text-sm">
          {s.points.map((p) => (
            <li key={p} className="flex items-center gap-2 text-foreground/85">
              <Check className="size-4 text-accent" /> {p}
            </li>
          ))}
        </ul>
      )}
      <p className="mt-6 inline-flex items-center gap-1 text-sm text-accent">
        Learn more <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </p>
    </SpotlightCard>
    </Link>
  );
}
