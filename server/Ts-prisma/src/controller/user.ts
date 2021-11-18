import { User } from ".prisma/client";
import { Request, Response } from "express";
import { createUser } from "../services/user.service";
import logger from "../utils/logger";

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    // const { email, password } = req.body;
    const newUser = await createUser(req.body);
    return res.json(newUser);
  } catch (error) {
    return res.sendStatus(400).json(error);
  }
};
