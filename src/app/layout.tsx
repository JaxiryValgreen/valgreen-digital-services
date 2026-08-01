import type { Metadata, Viewport } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";
import { SiteShell } from "@/components/layout/site-shell";
import { JsonLd } from "@/components/ui/json-ld";
import { site } from "@/data/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/json-ld";
import { createRootMetadata } from "@/lib/seo";
import { themeToCssVars } from "@/lib/theme";
import "@/styles/globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const body = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = createRootMetadata();

export const viewport: Viewport = {
  themeColor: site.theme.background,
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body
        className="flex min-h-full flex-col antialiased"
        style={themeToCssVars(site.theme)}
      >
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
