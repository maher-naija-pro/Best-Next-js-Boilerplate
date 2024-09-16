"use server"

import { getUserByEmail } from "@/app/[locale]/(auth)/_data_access/_data_access"
import { RegisterSchema } from "@/app/[locale]/(auth)/register/_schemas"
import db from "@/lib/db/db"
import { sendVerificationEmail } from "@/lib/mail"
import { generateVerificationToken } from "@/lib/tokens"
import bcrypt from "bcryptjs"
import Stripe from "stripe"
import * as z from "zod"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
  apiVersion: "2024-06-20"
})

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values)
  console.log("🚀 ~ register ~ validatedFields:", validatedFields)

  if (!validatedFields.success) {
    return { error: "Invalid fields!" }
  }

  const { email, password, name } = validatedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)

  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return { error: "Email already in use!" }
  }
  try {
    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    })
  } catch (error) {
    return { error: "your user already exist" }
  }
  await db.$disconnect()

  const customer = await stripe.customers.create({
    email: email,
    name: name
  })
  console.log("🚀 ~ register ~ customer:", customer)

  const verificationToken = await generateVerificationToken(email)
  await sendVerificationEmail(
    // @ts-ignore
    verificationToken.email,
    verificationToken.token
  )

  return { success: "Confirmation email sent!" }
}
