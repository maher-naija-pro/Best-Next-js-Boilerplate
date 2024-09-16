import  db  from "@/lib/db/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });
  
    return user;
  } catch {

    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } });
    await db.$disconnect()
    return user;
  } catch {
       await db.$disconnect()
    return null;
  }
};

export const getAccountByUserId = async (userId: string) => {
  try {
    const account = await db.account.findFirst({
      where: { userId }
    });
    await db.$disconnect()
    return account;
  } catch {
        await db.$disconnect()
    return null;
  }
};