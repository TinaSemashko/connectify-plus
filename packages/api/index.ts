import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { knex as db } from "./db";
import * as queries from "./src/queries/users";
import * as query from "./src/controllers/user";

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// CORS implemented so that we don't get errors when trying to access the server from a different server location
app.use(cors());

// app.get("/", (request, response) => {
//   response.json({ info: "Node.js, Express, and Postgres API" });
// });

app.get("/", (req, res) => {
  db.select("*")
    .from("users")
    .then((data) => {
      console.log("data " + data);
      res.json(data);
    })
    .catch((err) => {
      console.log("err " + err);
    });
});

// app.get("/", function (req, res) {
//   res.render("index.ts");
// });
console.log("index.ts");
app.get("/users/:email", query.getProfile);
app.get("/users", query.getAllUsers);

app.get("/users1", queries.getUsers);
// app.get("/users/:id", queries.getUserById);
// app.post("/users", queries.createUser);
// app.put("/users/:id", queries.updateUser);
// app.delete("/users/:id", queries.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port},http://localhost:${port}.`);
});
