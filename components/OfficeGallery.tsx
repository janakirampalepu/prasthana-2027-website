import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { officePhotos } from "@/lib/data";

export function OfficeGallery() {
  return (
    <section className="mx-auto max-w-6xl px-6 sm:px-10 pt-32">
      <SectionTitle
        eyebrow="Our office"
        title="Where the work happens."
        text="Our team works together from our office in Hitech City, Hyderabad."
      />
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {officePhotos.map((p, i) => (
          <Reveal key={p.src} delay={i * 0.08} className="mb-5 break-inside-avoid">
            <figure className="group overflow-hidden rounded-3xl border border-border">
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
              />
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
