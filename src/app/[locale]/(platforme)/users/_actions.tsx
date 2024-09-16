"use server"

import { users } from "@/app/[locale]/(platforme)/users/_data_access"

export const Get_userss = async () => {
  const Users_list = await users()
  console.log("connect db")
  return Users_list
}
