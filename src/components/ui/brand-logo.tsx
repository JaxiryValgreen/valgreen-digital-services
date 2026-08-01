import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";

type BrandLogoProps = {
  className?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
  onDark?: boolean;
};

/** Height-driven sizing; aspect matches cropped official lockup (563×453). */
const sizeMap = {
  /* ~30% larger than prior h-[4.375rem] / sm:h-20 */
  sm: {
    box: "h-[5.6875rem] aspect-[563/453] w-auto sm:h-[6.5rem]",
    px: 312,
  },
  md: {
    box: "h-[6.5rem] aspect-[563/453] w-auto sm:h-[7.8rem]",
    px: 374,
  },
  lg: {
    box: "h-[9.1rem] aspect-[563/453] w-auto sm:h-[10.4rem]",
    px: 499,
  },
};

export function BrandLogo({
  className,
  href = "/",
  size = "md",
  onDark = false,
}: BrandLogoProps) {
  const s = sizeMap[size];
  const src = onDark ? site.brand.logoDarkSrc : site.brand.logoSrc;

  const content = (
    <span className={cn("relative inline-block shrink-0", s.box, className)}>
      <Image
        src={src}
        alt="Valgreen Digital Services"
        fill
        sizes={`${s.px}px`}
        quality={100}
        priority
        className="object-contain object-center"
      />
    </span>
  );

  if (!href) return content;

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center"
      aria-label="Valgreen Digital Services home"
    >
      {content}
    </Link>
  );
}
