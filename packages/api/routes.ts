import { Router } from "express";
import { knex as db } from "./db";
import {
  getAllUsers,
  getProfile,
  updateUserAbonnement,
  createNewUser,
} from "./src/controllers/user";
import * as userModel from "./src/models/user";

const router = Router();

router.get("/", (req, res) => {
  db.select("*")
    .from("users")
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("err " + err);
    });
});

router.get("/user", getProfile(userModel));
router.get("/users", getAllUsers(userModel));
router.put("/abonnement", updateUserAbonnement(userModel));
router.post("/create", createNewUser(userModel));

export default router;
