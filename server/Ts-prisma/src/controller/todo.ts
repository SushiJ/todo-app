import { Request, Response } from "express";
import {
  getTodos,
  postTodos,
  deleteTodos,
  updateTodos,
} from "../services/todo.service";

export const getTodoHandler = async (req: Request, res: Response) => {
  try {
    const todos = await getTodos();
    return res.json(todos);
  } catch (e) {
    res.send(404).json("No todos were found");
  }
};

export const postTodoHandler = async (req: Request, res: Response) => {
  const todo = await postTodos(req.body);
  return todo;
};

export const deleteTodoHandler = async (req: Request, res: Response) => {
  try {
    const todo = await deleteTodos(req.body);
    return res.json(todo);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const updateTodoHandler = async (req: Request, res: Response) => {
  try {
    const updatedTodo = await updateTodos(req.body);
    return res.json(updatedTodo);
  } catch (e) {
    res.status(400).json(e);
  }
};
