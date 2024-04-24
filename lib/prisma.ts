import { PrismaClient } from "@prisma/client";

// kyle way of doing this
// const prismaClientSingleton = () => {
//   return new PrismaClient();
// };

// declare global {
//   var __prisma__: undefined | ReturnType<typeof prismaClientSingleton>;
// }

// const prisma = globalThis.__prisma__ ?? prismaClientSingleton();

// export default prisma;

// if (process.env.NODE_ENV !== "production") globalThis.__prisma__ = prisma;

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
