import {
  Globe, Smartphone, ShieldCheck, Infinity as InfinityIcon, ChartNoAxesCombined, BrainCircuit,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Globe, Smartphone, ShieldCheck, Infinity: InfinityIcon, ChartNoAxesCombined, BrainCircuit,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const C = map[name] ?? Globe;
  return <C className={className} />;
}
