// Decorative animated background blobs + grid.
export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,black_70%,transparent)] ${className}`}>
      <div className="grid-bg absolute inset-0" />
      <div className="blob animate-float absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-violet-600/30 blur-[120px]" />
      <div
        className="blob animate-float absolute top-20 right-0 h-[460px] w-[460px] rounded-full bg-cyan-500/25 blur-[120px]"
        style={{ animationDelay: "-3s" }}
      />
      <div
        className="blob animate-float absolute top-72 left-0 h-[380px] w-[380px] rounded-full bg-pink-500/20 blur-[120px]"
        style={{ animationDelay: "-5s" }}
      />
    </div>
  );
}
