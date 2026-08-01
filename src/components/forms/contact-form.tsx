"use client";

import { type FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FieldError, Input, Select, Textarea } from "@/components/ui/field";
import { contactFormSchema } from "@/lib/validations/contact";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

type ContactFormProps = {
  className?: string;
  layout?: "stack" | "split";
};

type FormErrors = Partial<
  Record<"name" | "email" | "phone" | "interest" | "message" | "form", string>
>;

function resolveInterest(raw: string | null) {
  if (!raw) return "";
  const matched = site.contactInterests.find(
    (option) =>
      option.value.toLowerCase() === raw.toLowerCase() ||
      option.label.toLowerCase() === raw.toLowerCase(),
  );
  return matched?.value ?? "Other";
}

export function ContactForm({ className, layout = "stack" }: ContactFormProps) {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [interestOverride, setInterestOverride] = useState<string | null>(null);

  const interestFromQuery = useMemo(() => {
    return resolveInterest(
      searchParams.get("interest") ?? searchParams.get("project"),
    );
  }, [searchParams]);

  const interest = interestOverride ?? interestFromQuery;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      interest: String(formData.get("interest") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const result = contactFormSchema.safeParse(payload);
    if (!result.success) {
      const nextErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0];
        if (
          key === "name" ||
          key === "email" ||
          key === "phone" ||
          key === "interest" ||
          key === "message"
        ) {
          nextErrors[key] = issue.message;
        }
      }
      nextErrors.form = "Please fix the highlighted fields and try again.";
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});

    const subject = encodeURIComponent(
      `New ${result.data.interest} inquiry from ${result.data.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${result.data.name}\nEmail: ${result.data.email}\nPhone: ${result.data.phone}\nInterest: ${result.data.interest}\n\nMessage:\n${result.data.message}`,
    );

    try {
      window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } catch {
      setErrors({
        form: "We could not open your email app. Please email or call us directly.",
      });
    }
  }

  if (submitted) {
    return (
      <div
        className={cn(
          "rounded-2xl border border-[var(--brand)]/25 bg-[var(--brand-soft)] p-6",
          className,
        )}
        role="status"
      >
        <div className="flex flex-col items-start gap-3 text-[var(--foreground)]">
          <CheckCircle2 className="h-6 w-6 text-[var(--brand-dark)]" />
          <p className="font-[family-name:var(--font-display)] text-2xl">
            Message ready to send
          </p>
          <p className="text-sm text-[var(--muted)]">
            Your email app should open with your message to {site.contact.email}.
            If it did not, email us directly or call{" "}
            <a
              href={site.contact.phoneHref}
              className="text-[var(--brand-dark)] underline"
            >
              {site.contact.phone}
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      className={cn("space-y-4", className)}
      onSubmit={handleSubmit}
      noValidate
    >
      {errors.form ? (
        <div
          className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          role="alert"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{errors.form}</span>
        </div>
      ) : null}

      {layout === "split" ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Input
              id="name"
              name="name"
              required
              autoComplete="name"
              placeholder="Your Name"
              aria-label="Your Name"
            />
            <FieldError message={errors.name} />
          </div>
          <div>
            <Input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Your Email"
              aria-label="Your Email"
            />
            <FieldError message={errors.email} />
          </div>
        </div>
      ) : (
        <>
          <div>
            <Input
              id="name"
              name="name"
              required
              autoComplete="name"
              placeholder="Your Name"
              aria-label="Your Name"
            />
            <FieldError message={errors.name} />
          </div>
          <div>
            <Input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Your Email"
              aria-label="Your Email"
            />
            <FieldError message={errors.email} />
          </div>
        </>
      )}

      <div>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="Your Phone"
          aria-label="Your Phone"
        />
        <FieldError message={errors.phone} />
      </div>

      <div>
        <Select
          id="interest"
          name="interest"
          required
          aria-label="What are you interested in?"
          value={interest}
          onChange={(event) => setInterestOverride(event.target.value)}
        >
          <option value="" disabled>
            What are you interested in?
          </option>
          {site.contactInterests.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <FieldError message={errors.interest} />
      </div>

      <div>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="How can we help your business?"
          aria-label="How can we help your business?"
          className="min-h-32"
        />
        <FieldError message={errors.message} />
      </div>
      <Button type="submit" size="lg" className="w-full">
        Send Message
        <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  );
}
