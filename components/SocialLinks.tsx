import { company } from "@/lib/data";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function SocialLinks({ className = "", label = false }: { className?: string; label?: boolean }) {
  return (
    <a
      href={company.linkedin}
      target="_blank"
      rel="noreferrer"
      aria-label="Prasthana on LinkedIn"
      className={`inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#0A66C2]/30 transition hover:-translate-y-0.5 hover:bg-[#0B73DB] hover:shadow-[#0A66C2]/50 ${className}`}
    >
      <LinkedInIcon className="size-4.5" />
      {label ? "Follow us on LinkedIn" : "LinkedIn"}
    </a>
  );
}
