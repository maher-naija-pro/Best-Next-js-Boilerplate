"use server"

import { DemoSchema } from "@/app/[locale]/(marketing)/company/contact/_schemas"
import db from "@/lib/db/db"
import * as z from "zod"

export const demo = async (values: z.infer<typeof DemoSchema>) => {
  const validatedFields = DemoSchema.safeParse(values)
  console.log("🚀 ~ demo ~ validatedFields:", validatedFields)

  if (!validatedFields.success) {
    return { error: "Invalid fields!" }
  }

  const { email, message, name } = validatedFields.data
  console.log("🚀 ~ demo ~ name:", name)
  console.log("🚀 ~ demo ~ email:", email)
  console.log("🚀 ~ demo ~ message:", message)

  try {
    await db.demo.create({
      data: {
        name,
        email,
        message
      }
    })
  } catch (error) {
    return { error: "cant get youffr request" }
  }
  await db.$disconnect()
  console.log("🚀 ~ sucess")
  return { success: "your request registred" }
}
