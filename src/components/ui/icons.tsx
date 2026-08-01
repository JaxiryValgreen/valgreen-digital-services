import {
  AppWindow,
  Bot,
  Building2,
  Calculator,
  CalendarDays,
  Car,
  Droplets,
  Dumbbell,
  Globe,
  HardHat,
  Headphones,
  HeartPulse,
  Home,
  KeyRound,
  Layers,
  Monitor,
  Palette,
  PawPrint,
  Scale,
  Scissors,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Smile,
  Sparkles,
  Target,
  Thermometer,
  TreePine,
  UtensilsCrossed,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type {
  BenefitIconName,
  IndustryIconName,
  ServiceIconName,
} from "@/types";

const serviceIcons: Record<ServiceIconName, LucideIcon> = {
  globe: Globe,
  cart: ShoppingCart,
  palette: Palette,
  search: Search,
  calendar: CalendarDays,
  wrench: Wrench,
  bot: Bot,
  monitor: Monitor,
  smartphone: Smartphone,
  appWindow: AppWindow,
};

const benefitIcons: Record<BenefitIconName, LucideIcon> = {
  shield: ShieldCheck,
  zap: Zap,
  target: Target,
  headset: Headphones,
};

const industryIcons: Record<IndustryIconName, LucideIcon> = {
  hardhat: HardHat,
  sparkles: Sparkles,
  car: Car,
  utensils: UtensilsCrossed,
  home: Home,
  scissors: Scissors,
  heartPulse: HeartPulse,
  scale: Scale,
  layers: Layers,
  thermometer: Thermometer,
  droplets: Droplets,
  zap: Zap,
  tree: TreePine,
  smile: Smile,
  paw: PawPrint,
  dumbbell: Dumbbell,
  hotel: Building2,
  key: KeyRound,
  calculator: Calculator,
  shield: ShieldCheck,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconName;
  className?: string;
}) {
  const Icon = serviceIcons[name];
  return <Icon className={className} strokeWidth={1.4} aria-hidden />;
}

export function BenefitIcon({
  name,
  className,
}: {
  name: BenefitIconName;
  className?: string;
}) {
  const Icon = benefitIcons[name];
  return <Icon className={className} strokeWidth={1.4} aria-hidden />;
}

export function IndustryIcon({
  name,
  className,
}: {
  name: IndustryIconName;
  className?: string;
}) {
  const Icon = industryIcons[name];
  return <Icon className={className} strokeWidth={1.4} aria-hidden />;
}
