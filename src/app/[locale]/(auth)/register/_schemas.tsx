import * as z from "zod";

// phone validation (Brazil)
const phoneValidation = new RegExp(
  /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
);

// Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
//const passwordValidation = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
const passwordValidation = new RegExp('password');

export const RegisterSchema = z
  .object({
  email: z.string().email({
    message: "Email is required",
  }),
    password: z
      .string()
      .min(3, { message: "Minimum 12 characters required", }) ,

    password2: z
      .string()
      .min(3, { message: "Minimum 12 characters required", }),
      
    
  name: z.string().min(1, {
    message: "Name is required",
  }),
})
  .refine((data) => data.password === data.password2, {
      message: "The passwords did not match",
    path: ['password2'],
});

//       .regex(passwordValidation, {message: 'Your password is not valid',}),