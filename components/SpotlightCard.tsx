"use client";
import { useRef, type ReactNode, type MouseEvent } from "react";

// Card with a cursor-following spotlight border/glow.
export function SpotlightCard({
  children,
  className = "",
  innerClassName = "",
}: {
  children: ReactNode;
  className?: string;
  // Layout classes (flex, grid, gap) for the content wrapper, which sits inside the card.
  innerClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`group glass relative overflow-hidden rounded-3xl transition-transform duration-500 hover:-translate-y-1 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--x,50%) var(--y,50%), rgba(139,92,246,0.22), transparent 60%)",
        }}
      />
      <div className={`relative ${innerClassName}`}>{children}</div>
    </div>
  );
}
