import { Request, Response } from "express";
import * as userModel from "../models/user";

type User = typeof userModel;

export const getProfile =
  (model: User) => async (req: Request, res: Response) => {
    console.log("getProfile");
    const user = await model.getUser((req as any).user?.id);

    if (!user) {
      return res.status(404).send({ message: "No user with that ID" });
    }

    res.send({ results: [user] });
  };

export const getAllUsers =
  (model: User) => async (req: Request, res: Response) => {
    console.log("getAllUsers");
    const user = await model.getUsers();

    if (!user) {
      return res.status(404).send({ message: "No users" });
    }

    res.send({ results: [user] });
  };
