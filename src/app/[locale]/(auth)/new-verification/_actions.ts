"use server";

import  db  from "@/lib/db/db";
import { getUserByEmail } from "../_data_access/_data_access";
import { getVerificationTokenByToken } from "../_data_access/verificiation-token";

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return { error: "Token does not exist!" };

  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired!" };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    console.log("🚀 ~ newVerification ~ existingUser:", existingUser)
    return { error: "Email does not exist!" };
  }

  await db.user.update({
    where: { id: existingUser.id },
    data: { 
      emailVerified: new Date(),
      email: existingToken.email,
    }
  });

  //await db.verificationToken.delete({
  //  where: { id: existingToken.id }
 //});

  return { success: "Email verified!" };
};
