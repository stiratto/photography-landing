import { z } from "zod"

const phoneRegex = /^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;

export const OtherFormSchema = z.object({
  first_name: z.string().min(1, { message: "Your first name is required" }),
  second_name: z.string().min(1, { message: "Your second name is required" }),
  email: z.string().email({ message: "Email is required" }),
  business_instagram: z.string().min(1, { message: "The business instagram is required" }),
  phone_number: z.string().regex(phoneRegex).optional(),
  city: z.string().min(1, { message: "City is required" }),
  description: z.string().optional()
})

export type TOtherFormSchema = z.infer<typeof OtherFormSchema>
