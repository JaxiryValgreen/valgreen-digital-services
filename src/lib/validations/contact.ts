import { z } from "zod";
import { site } from "@/data/site";

const interestValues = site.contactInterests.map((option) => option.value);

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name"),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .regex(/^[\d\s()+.-]+$/, "Please enter a valid phone number"),
  interest: z
    .string()
    .trim()
    .min(1, "Please select a service")
    .refine((value) => interestValues.includes(value), {
      message: "Please select a service",
    }),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a bit more (at least 10 characters)"),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
