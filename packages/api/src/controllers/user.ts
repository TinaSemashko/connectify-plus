import { Request, Response } from "express";
import * as userModel from "../models/user";

type User = typeof userModel;

export const getProfile =
  (model: User) => async (req: Request, res: Response) => {
    const { email, password } = req.query;

    const user = await model.getUser(email as string, password as string);

    if (!user) {
      return res.status(404).send({ message: "User doesn't existe" });
    }

    res.send({ results: [user] });
  };

export const getAllUsers =
  (model: User) => async (req: Request, res: Response) => {
    const user = await model.getUsers();

    if (!user) {
      return res.status(404).send({ message: "No users" });
    }

    res.send({ results: [user] });
  };

export const updateUserAbonnement =
  (model: User) => async (req: Request, res: Response) => {
    const { email } = req.body;
    const userId = await model.putUserAbonnement(email as string);

    if (!userId) {
      return res.status(404).send({ message: "User doesn't existe" });
    }

    res.send({ results: [userId] });
  };

export const createNewUser =
  (model: User) => async (req: Request, res: Response) => {
    const { data } = req.body;
    const userId = await model.createUser(data as any);

    if (!userId) {
      return res.status(404).send({ message: "Something went wrong..." });
    }

    res.send({ results: [userId] });
  };
