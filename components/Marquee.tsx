export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="animate-marquee flex w-max gap-4">
        {row.map((t, i) => (
          <span
            key={i}
            className="glass rounded-full px-6 py-3 text-sm font-medium whitespace-nowrap text-foreground/90"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
