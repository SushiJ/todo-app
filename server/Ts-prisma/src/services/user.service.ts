import { PrismaClient } from ".prisma/client";
import { omit } from "lodash";
const primsa = new PrismaClient();

interface User {
  email: string;
  name?: string;
  password?: string;
}

export async function createUser({ email, password, name }: User) {
  try {
    const userExists = await primsa.user.findUnique({
      where: {
        email,
      },
    });

    if (userExists) return { error: "User Already exists" };

    const user = await primsa.user.create({
      data: {
        email,
        name,
        password,
      },
    });
    return { user: omit(user, "password"), success: "User created" };
  } catch (e: any) {
    throw new Error(e.message);
  }
}

export async function updateUser({ email, password, name }: User) {
  try {
    const userExists = await primsa.user.findUnique({
      where: {
        email,
      },
    });
    if (userExists) {
      await primsa.user.update({
        where: {
          email,
        },
        data: {
          password,
          name,
        },
      });
    }
    return "user updated successfully";
  } catch (e) {
    return {
      error: "something went wrong",
    };
  }
}
