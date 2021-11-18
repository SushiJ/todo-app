import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface Todo {
  t_id?: number;
  todo: string;
  userId: number;
}

export const getTodos = async () => {
  const todos = await prisma.todo.findMany();
  return todos;
};

export const postTodos = async ({ todo, userId }: Todo) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) return { message: "user not found" };
    const createTodo = await prisma.todo.create({
      data: {
        todo,
        userId,
      },
    });
    return createTodo;
  } catch (e: any) {
    throw new Error(e.message);
  }
};
export const deleteTodos = async ({ t_id }: Todo) => {
  const deleteTodo = await prisma.todo.delete({
    where: {
      t_id,
    },
  });
  return deleteTodo;
};

export const updateTodos = async ({ t_id, todo, userId }: Todo) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) return { message: "User Not found" };

    const updatedTodo = await prisma.todo.update({
      where: {
        t_id,
      },
      data: {
        todo,
      },
    });
    return updatedTodo;
  } catch (e: any) {
    throw new Error(e.message);
  }
};
