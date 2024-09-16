"use server"

import { PrismaClient, Prisma } from "@prisma/client"

export const users = async () => {
  const prisma = new PrismaClient()
  try {
    const users = await prisma.user.findMany()
    return users
  } catch {
    prisma.$disconnect()
    return null
  }
}
