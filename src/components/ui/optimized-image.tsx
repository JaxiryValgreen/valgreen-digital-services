import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/cn";

type OptimizedImageProps = Omit<ImageProps, "alt" | "src"> & {
  alt: string;
  src: ImageProps["src"];
  className?: string;
};

export function OptimizedImage({
  className,
  alt,
  src,
  sizes = "100vw",
  ...props
}: OptimizedImageProps) {
  if (!src || (typeof src === "string" && src.trim() === "")) {
    return (
      <div
        aria-hidden
        className={cn("bg-white/5", className)}
        style={
          "fill" in props && props.fill
            ? { position: "absolute", inset: 0 }
            : undefined
        }
      />
    );
  }

  return (
    <Image
      alt={alt}
      src={src}
      sizes={sizes}
      className={cn("object-cover", className)}
      {...props}
    />
  );
}
