"use server"

import { getUserByEmail } from "@/app/[locale]/(auth)/_data_access/_data_access"
import { ResetSchema } from "@/app/[locale]/(auth)/reset-password/_schemas"
import { sendPasswordResetEmail } from "@/lib/mail"
import { generatePasswordResetToken } from "@/lib/tokens"
import * as z from "zod"

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: "Invalid emaiL!" }
  }

  const { email } = validatedFields.data
  console.log("🚀 ~ reset ~ email:", email)

  const existingUser = await getUserByEmail(email)
  console.log("🚀 ~ reset ~ existingUser:", existingUser)

  if (!existingUser) {
    return { error: "Email not found!" }
  }

  const passwordResetToken = await generatePasswordResetToken(email)
  await sendPasswordResetEmail(passwordResetToken.email, passwordResetToken.token)

  return { success: "Reset email sent!" }
}
