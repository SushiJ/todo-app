import { PrismaClient } from ".prisma/client";
import { Request } from "express";
const primsa = new PrismaClient();

interface User {
  email: string;
  name?: string;
  password?: string;
}

export async function createUser({ email, password, name }: User) {
  try {
    const user = await primsa.user.create({
      data: {
        email,
        name,
        password,
      },
    });
    return user;
  } catch (e: any) {
    throw new Error(e.message);
  }
}
