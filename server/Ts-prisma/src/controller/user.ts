import { Request, Response } from "express";
import { createUser, updateUser } from "../services/user.service";

export interface User {
  id: string;
  name?: string;
  email: string;
  password?: string;
}

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    // const { email, password } = req.body;
    const newUser = await createUser(req.body);
    return res.json(newUser);
  } catch (error) {
    return res.sendStatus(400).json(error);
  }
};

export const updateUserHandler = async (req: Request, res: Response) => {
  try {
    const updatedUser = await updateUser(req.body);
    return res.json({ updatedUser });
  } catch (e) {
    return res.status(500).json(e);
  }
};
