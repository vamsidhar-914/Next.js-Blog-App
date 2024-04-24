import { prisma } from "../../../lib/prisma";

export default async function Test() {
  const user = await prisma.user.findFirst({
    where: {
      email: "test@test.com",
    },
  });
  return <div>Hello, {user?.name}</div>;
}
