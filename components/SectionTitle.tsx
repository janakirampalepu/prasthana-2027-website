import { Reveal } from "./Reveal";

export function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <Reveal>
        <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-accent uppercase">{eyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl">{title}</h2>
        {text && <p className="mt-4 text-lg text-muted">{text}</p>}
      </Reveal>
    </div>
  );
}
