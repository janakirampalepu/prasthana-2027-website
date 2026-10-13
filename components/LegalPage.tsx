import { PageHeader } from "./PageHeader";
import { Reveal } from "./Reveal";

export type LegalSection = { title: string; paragraphs?: string[]; bullets?: string[] };

export function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} text={`Last updated: ${updated}`} />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:px-10 lg:grid-cols-[240px_1fr]">
        <aside className="hidden lg:block">
          <nav aria-label="On this page" className="sticky top-28 space-y-1 text-sm">
            <p className="mb-3 text-xs font-semibold tracking-widest text-muted uppercase">On this page</p>
            {sections.map((s, i) => (
              <a key={s.title} href={`#s${i + 1}`} className="block rounded-lg px-3 py-1.5 text-muted transition hover:bg-foreground/5 hover:text-foreground">
                {i + 1}. {s.title}
              </a>
            ))}
          </nav>
        </aside>
        <article className="max-w-3xl">
          <Reveal>
            <p className="text-lg text-muted">{intro}</p>
          </Reveal>
          <div className="mt-10 space-y-10">
            {sections.map((s, i) => (
              <section key={s.title} id={`s${i + 1}`} className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {i + 1}. {s.title}
                </h2>
                {s.paragraphs?.map((p) => (
                  <p key={p} className="mt-3 leading-relaxed text-muted">{p}</p>
                ))}
                {s.bullets && (
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-muted marker:text-accent">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </article>
      </div>
    </>
  );
}
