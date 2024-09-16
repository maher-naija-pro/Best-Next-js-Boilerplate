import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  const newUser = await prisma.user.upsert({
    where: { email: "maher.naija@gmail.com" },
    update: {},
    create: {
      name: "maher",
      email: "maher.naija@gmail.com",
      password: "123456",
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
