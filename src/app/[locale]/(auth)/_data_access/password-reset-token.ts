import  db  from "@/lib/db/db";

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passwordResetToken = await db.passwordResetToken.findUnique({
      where: { token }
    });
    await db.$disconnect()
    return passwordResetToken;
  } catch {
        await db.$disconnect()
    return null;
  }
};

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passwordResetToken = await db.passwordResetToken.findFirst({
      where: { email }
    });
    await db.$disconnect()
    return passwordResetToken;
  } catch {
        await db.$disconnect()
    return null;
  }
};