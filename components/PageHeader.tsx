import { Aurora } from "./Aurora";
import { Reveal } from "./Reveal";

export function PageHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <section className="relative px-6 sm:px-10 pt-40 pb-16">
      <Aurora />
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-accent uppercase">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">{title}</h1>
        </Reveal>
        {text && (
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg text-muted">{text}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
