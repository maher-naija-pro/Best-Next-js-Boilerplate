"use server"

import { NewsletterSchema } from "@/app/[locale]/(marketing)/(newsletter)/_schemas"
import db from "@/lib/db/db"
import * as z from "zod"

export const subscribe_newsletter = async (
  values: z.infer<typeof NewsletterSchema>,
  callbackUrl?: string | null
) => {
  const validatedFields = NewsletterSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: "Invalid fields!" }
  }

  const { email } = validatedFields.data

  try {
    await db.newsletter.create({
      data: {
        email
      }
    })
  } catch (error) {
    return { error: "your mail already exist" }
  }
  await db.$disconnect()
  return { success: "your mail was registred" }
}
