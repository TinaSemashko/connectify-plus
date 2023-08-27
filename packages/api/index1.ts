import express from "express";
import cors from "cors";
import { knex as db } from "./db";

require("dotenv").config();
import * as Users from "./src/models/user";

const app = express();
app.use(cors());

// app.get("/", (req, res) => res.send("Home Route"));

app.get("/", (req, res) => {
  db.select("*")
    .from("users")
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

const port = process.env.PORT || 4000;

app.listen(port, () =>
  console.log(`Server running on port ${port}, http://localhost:${port}`)
);

// app.use(express.json());
// app.use((req: any, res: { setHeader: (arg0: string, arg1: string) => void; }, next: () => void)=> {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Access-Control-Allow-Headers"
//   );
//   next();
// });

// app.get("/", (req, res) => {
//   Users
//     .getUser()
//     .then((response) => {
//       res.status(200).send(response);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// });

// app.post("/merchants", (req, res) => {
//   merchant_model
//     .createMerchant(req.body)
//     .then((response) => {
//       res.status(200).send(response);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// });
