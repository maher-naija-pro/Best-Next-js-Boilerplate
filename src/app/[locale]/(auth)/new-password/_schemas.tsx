import * as z from "zod";

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
  passwordconfirmation:  z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
})
  .refine((data) => data.password === data.passwordconfirmation, {
      message: "The passwords did not match",
    path: ['passwordconfirmation'],
});
