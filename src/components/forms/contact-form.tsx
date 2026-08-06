"use client";

import { type FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FieldError,
  Input,
  Label,
  Select,
  Textarea,
} from "@/components/ui/field";
import { contactFormSchema } from "@/lib/validations/contact";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqvgban";

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
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [interestOverride, setInterestOverride] = useState<string | null>(null);

  const interestFromQuery = useMemo(() => {
    return resolveInterest(
      searchParams.get("interest") ?? searchParams.get("project"),
    );
  }, [searchParams]);

  const interest = interestOverride ?? interestFromQuery;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
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
    setSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.data.name,
          email: result.data.email,
          phone: result.data.phone,
          interest: result.data.interest,
          message: result.data.message,
          _subject: `New ${result.data.interest} inquiry from ${result.data.name}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Formspree request failed");
      }

      form.reset();
      setInterestOverride("");
      setSubmitted(true);
    } catch {
      setSubmitted(false);
      setErrors({
        form: "Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
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
          <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            Thank you! Your message has been sent successfully. We&apos;ll
            contact you soon.
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
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              required
              autoComplete="name"
              placeholder="Full Name"
              disabled={submitting}
            />
            <FieldError message={errors.name} />
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Email Address"
              disabled={submitting}
            />
            <FieldError message={errors.email} />
          </div>
        </div>
      ) : (
        <>
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              required
              autoComplete="name"
              placeholder="Full Name"
              disabled={submitting}
            />
            <FieldError message={errors.name} />
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Email Address"
              disabled={submitting}
            />
            <FieldError message={errors.email} />
          </div>
        </>
      )}

      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="Phone Number"
          disabled={submitting}
        />
        <FieldError message={errors.phone} />
      </div>

      <div>
        <Label htmlFor="interest">Service Interested In</Label>
        <Select
          id="interest"
          name="interest"
          required
          value={interest}
          onChange={(event) => setInterestOverride(event.target.value)}
          disabled={submitting}
        >
          <option value="" disabled>
            Service Interested In
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
        <Label htmlFor="message">Tell us about your project</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your project"
          className="min-h-32"
          disabled={submitting}
        />
        <FieldError message={errors.message} />
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={submitting}
      >
        Send Message
        <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  );
}
