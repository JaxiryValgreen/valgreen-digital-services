export type NavLink = {
  label: string;
  href: string;
};

export type ServiceIconName =
  | "globe"
  | "cart"
  | "palette"
  | "search"
  | "calendar"
  | "wrench"
  | "bot"
  | "monitor"
  | "smartphone"
  | "appWindow";

export type BenefitIconName = "shield" | "zap" | "target" | "headset";

export type IndustryIconName =
  | "hardhat"
  | "sparkles"
  | "car"
  | "utensils"
  | "home"
  | "scissors"
  | "heartPulse"
  | "scale"
  | "layers"
  | "thermometer"
  | "droplets"
  | "zap"
  | "tree"
  | "smile"
  | "paw"
  | "dumbbell"
  | "hotel"
  | "key"
  | "calculator"
  | "shield";

export type IndustryFeatureCard = {
  title: string;
  description: string;
};

export type IndustrySolutionExample = {
  title: string;
  description: string;
};

export type IndustryCatalogItem = {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  icon: IndustryIconName;
  challenges: string[];
  howWeHelp: string;
  websiteBenefits: string[];
  whenCustomWebApp: string;
  whenPwa: string;
  whenNativeApp: string;
  solutionExamples: IndustrySolutionExample[];
  techBenefits: string[];
  featureCards: IndustryFeatureCard[];
  benefits: IndustryFeatureCard[];
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: ServiceIconName;
  href: string;
};

export type IndustryItem = {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  explanation: string;
  icon?: IndustryIconName;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type ProjectItem = {
  id: string;
  title: string;
  category: string;
  label: "Concept Project" | "Portfolio Sample";
  description: string;
  image: string;
  services: string[];
  features: string[];
  technologies?: string[];
  /** Destination for the modal "View Full Project" action */
  href: string;
};

export type BenefitItem = {
  id: string;
  title: string;
  description: string;
  icon: BenefitIconName;
};

export type HeroBadge = {
  id: string;
  label: string;
  icon: BenefitIconName;
};

export type StatItem = {
  id: string;
  value: string;
  label: string;
};

export type PlatformItem = {
  id: string;
  name: string;
};

export type SiteTheme = {
  brand: string;
  brandDark: string;
  brandSoft: string;
  accent: string;
  background: string;
  surface: string;
  foreground: string;
  muted: string;
  border: string;
};

export type SectionIntro = {
  eyebrow?: string;
  title: string;
  titleEmphasis?: string;
  description: string;
};

export type BrandConfig = {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  logoText: string;
  url: string;
  logoSrc: string;
  logoDarkSrc: string;
};

export type ContactConfig = {
  email: string;
  phone: string;
  phoneHref: string;
  instagram: string;
  instagramHref: string;
};

export type SeoConfig = {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
};

export type HeroContent = {
  title: string;
  titleEmphasis: string;
  titleSuffix?: string;
  subtitle: string;
  primaryCta: NavLink;
  secondaryCta: NavLink;
  stats: StatItem[];
  laptopImage: string;
  laptopImageAlt: string;
  phoneCoverImage: string;
};

export type AboutContent = SectionIntro & {
  points: string[];
  image: string;
  imageAlt: string;
};

export type ServicesContent = SectionIntro & {
  items: ServiceItem[];
  cta?: NavLink;
};

export type BusinessApplicationCard = {
  id: string;
  title: string;
  summary: string;
  description: string;
  icon: ServiceIconName;
  bestFor: string;
  typicalFeatures: string[];
  benefits: string[];
  whyChoose: string;
  href: string;
};

export type TechnologyOption = {
  id: string;
  title: string;
  description: string;
};

export type BusinessApplicationsContent = {
  eyebrow: string;
  title: string;
  titleEmphasis?: string;
  description: string;
  cards: BusinessApplicationCard[];
  choosing: {
    eyebrow: string;
    title: string;
    titleEmphasis?: string;
    description: string;
    studyPoints: string[];
    options: TechnologyOption[];
    note: string;
  };
  cta: NavLink;
};

export type ContactInterestOption = {
  value: string;
  label: string;
};

export type IndustriesContent = SectionIntro & {
  items: IndustryItem[];
  cta?: NavLink;
};

export type BenefitsContent = {
  title: string;
  description: string;
  items: BenefitItem[];
};

export type ProcessContent = SectionIntro & {
  steps: ProcessStep[];
};

export type WorkContent = SectionIntro & {
  items: ProjectItem[];
};

export type PlatformsContent = {
  title: string;
  items: PlatformItem[];
};

export type CtaContent = {
  title: string;
  titleEmphasis?: string;
  titleSuffix?: string;
  description: string;
  primaryCta: NavLink;
  secondaryCta?: NavLink;
};

export type ContactPageContent = SectionIntro & {
  formTitle: string;
  formDescription: string;
};

export type NavigationConfig = {
  main: NavLink[];
  footer: NavLink[];
  cta: NavLink;
};

export type SiteConfig = {
  brand: BrandConfig;
  theme: SiteTheme;
  contact: ContactConfig;
  navigation: NavigationConfig;
  seo: SeoConfig;
  hero: HeroContent;
  platforms: PlatformsContent;
  about: AboutContent;
  services: ServicesContent;
  businessApplications: BusinessApplicationsContent;
  industries: IndustriesContent;
  benefits: BenefitsContent;
  process: ProcessContent;
  work: WorkContent;
  cta: CtaContent;
  contactPage: ContactPageContent;
  contactInterests: ContactInterestOption[];
};

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};
