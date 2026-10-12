import Link from "next/link";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="px-6 sm:px-10 pt-32">
      <Reveal>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-border bg-gradient-to-br from-violet-600/30 via-transparent to-cyan-500/20 p-12 text-center sm:p-20">
          <div className="grid-bg absolute inset-0 -z-10 opacity-60" />
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Have something worth building?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Tell us about your idea, product or problem. We will come back with a clear plan.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-foreground px-8 py-3 font-semibold text-background transition hover:scale-105"
          >
            Start a conversation
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
