import { getPasswordResetTokenByEmail } from "@/app/[locale]/(auth)/_data_access/password-reset-token"
import { getVerificationTokenByEmail } from "@/app/[locale]/(auth)/_data_access/verificiation-token"
import db from "@/lib/db/db"
import crypto from "crypto"
import { v4 as uuidv4 } from "uuid"

export const generatePasswordResetToken = async (email: string) => {
  const token = uuidv4()
  const expires = new Date(new Date().getTime() + 3600 * 1000)

  const existingToken = await getPasswordResetTokenByEmail(email)

  if (existingToken) {
    await db.passwordResetToken.delete({
      where: { id: existingToken.id }
    })
  }

  const passwordResetToken = await db.passwordResetToken.create({
    data: {
      email,
      token,
      expires
    }
  })

  return passwordResetToken
}

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4()
  const expires = new Date(new Date().getTime() + 3600 * 1000)
  console.log("🚀 ~ generateVerificationToken ~ expires:", expires)

  const existingToken = await getVerificationTokenByEmail(email)

  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        // @ts-ignore
        id: existingToken.id
      }
    })
  }

  const verficationToken = await db.verificationToken.create({
    data: {
      // @ts-ignore
      email,
      token,
      expires
    }
  })

  return verficationToken
}
