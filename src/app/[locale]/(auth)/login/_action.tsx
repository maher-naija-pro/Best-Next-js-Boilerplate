"use server"

import { LoginSchema } from "./_schemas"
import { getUserByEmail } from "@/app/[locale]/(auth)/_data_access/_data_access"
import { AuthError } from "next-auth"
import { signIn } from "next-auth/react"
import * as z from "zod"

const DEFAULT_LOGIN_REDIRECT = "/login"
export const login = async (values: z.infer<typeof LoginSchema>, callbackUrl?: string | null) => {
  //validate schema

  const validatedFields = LoginSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: "Invalid fields!" }
  }
  //get fields
  const { email, password, code } = validatedFields.data
  //get user
  console.log(`get user`)
  const existingUser = await getUserByEmail(email)
  // console.log("🚀 ~ login ~ existingUser:", existingUser);
  if (!existingUser) {
    return { error: "user does not exist!" }
  }
  if (!existingUser.email) {
    console.log(`Email does not exist!`)
    return { error: "Email does not exist!" }
  }
  if (!existingUser.password) {
    console.log(existingUser.password)
    console.log(`pass does not exist!`)
    return { error: "pass does not exist!" }
  }
  //signin
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" }
        default:
          return { error: error.type }
      }

      return { error: "Something went wrong!" }
    }

    throw error
  }
}
