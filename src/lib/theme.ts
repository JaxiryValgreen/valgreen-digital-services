import type { CSSProperties } from "react";
import type { SiteTheme } from "@/types";

export function themeToCssVars(theme: SiteTheme): CSSProperties {
  return {
    "--brand": theme.brand,
    "--brand-dark": theme.brandDark,
    "--brand-soft": theme.brandSoft,
    "--accent": theme.accent,
    "--background": theme.background,
    "--surface": theme.surface,
    "--foreground": theme.foreground,
    "--muted": theme.muted,
    "--border": theme.border,
    "--charcoal": "#222222",
    "--charcoal-deep": "#1A1A1A",
    "--champagne": "#C5A882",
    "--champagne-dark": "#B39670",
    "--ivory": "#F7F4EF",
    "--footer": "#1A1A1A",
    "--stone": "#D9D3CB",
    "--taupe": "#9C9082",
  } as CSSProperties;
}
