import { Express } from "express";
import {
  deleteTodoHandler,
  getTodoHandler,
  postTodoHandler,
  updateTodoHandler,
} from "./controller/todo";
import { createUserHandler } from "./controller/user";

export async function routes(app: Express) {
  app.get("/", getTodoHandler);
  app.post("/todo", postTodoHandler);
  app.delete("/todo", deleteTodoHandler);
  app.put("/todo", updateTodoHandler);
  //   app.put("/", updateTodo);

  // login
  app.post("/api/login", createUserHandler);
}