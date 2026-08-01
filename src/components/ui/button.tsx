import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant =
  | "champagne"
  | "ghostLight"
  | "outlineDark"
  | "outlineChampagne"
  | "dark"
  | "primary"
  | "secondary"
  | "ghost"
  | "outline";

type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  champagne:
    "bg-[var(--champagne)] text-[var(--charcoal)] hover:bg-[var(--champagne-dark)] shadow-[0_10px_28px_-12px_rgba(197,168,130,0.55)]",
  primary:
    "bg-[var(--champagne)] text-[var(--charcoal)] hover:bg-[var(--champagne-dark)] shadow-[0_10px_28px_-12px_rgba(197,168,130,0.55)]",
  ghostLight:
    "border border-white/40 bg-transparent text-white hover:border-[var(--champagne)] hover:text-[var(--champagne)]",
  outlineDark:
    "border border-[var(--charcoal)] bg-transparent text-[var(--charcoal)] hover:bg-[var(--charcoal)] hover:text-white",
  outlineChampagne:
    "border border-[var(--champagne)] bg-transparent text-[var(--champagne)] hover:bg-[var(--champagne)] hover:text-[var(--charcoal)]",
  dark: "bg-[var(--charcoal)] text-white hover:bg-[var(--charcoal-deep)]",
  secondary: "bg-[var(--charcoal)] text-white hover:bg-[var(--charcoal-deep)]",
  ghost:
    "border border-[var(--border)] bg-white text-[var(--charcoal)] hover:border-[var(--champagne)]",
  outline:
    "border border-[var(--border)] bg-transparent text-[var(--charcoal)] hover:border-[var(--champagne)]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-[0.75rem]",
  md: "h-11 px-5 text-[0.8rem]",
  lg: "h-12 px-6 text-[0.85rem]",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = "champagne", size = "md", className, children, ...props },
    ref,
  ) {
    const classes = cn(
      "inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--champagne)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      variants[variant],
      sizes[size],
      className,
    );

    if ("href" in props && props.href) {
      const { href, ...rest } = props;
      return (
        <Link href={href} className={classes} {...rest}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...(props as ButtonAsButton)}>
        {children}
      </button>
    );
  },
);
