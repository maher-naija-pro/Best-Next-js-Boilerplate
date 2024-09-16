import { z } from "zod"

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(3, {
    message: "Minimum 12 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
})
