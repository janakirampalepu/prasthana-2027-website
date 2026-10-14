import {
  Globe, Smartphone, ShieldCheck, Infinity as InfinityIcon, ChartNoAxesCombined, BrainCircuit, Compass,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Globe, Smartphone, ShieldCheck, Infinity: InfinityIcon, ChartNoAxesCombined, BrainCircuit, Compass,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const C = map[name] ?? Globe;
  return <C className={className} />;
}
