import * as z from "zod";

export const NewsletterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),

});
