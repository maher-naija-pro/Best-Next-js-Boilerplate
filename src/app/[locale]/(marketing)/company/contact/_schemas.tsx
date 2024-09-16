import * as z from "zod";


export const DemoSchema = z
  .object({
  email: z.string().email({
    message: "Email is required",
  }),
    message: z
      .string()
      .min(1, { message: "please write a messge", }) 
      , 
  
  name: z.string().min(1, {
    message: "Name is required",
  }),
})


