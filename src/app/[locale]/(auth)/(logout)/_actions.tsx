"use server";

import { signOut } from "@/lib/auth/auth";

export const logout = async () => {
  console.log("🚀 ~ logout ~ logout:")
  await signOut();
};

