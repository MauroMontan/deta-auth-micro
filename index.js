// install express with `npm install express`
const express = require("express");
const { json } = require("express");
const verifyToken = require("./app/middleware/headers");
const AuthController = require("./app/auth/auth_controller");
const AuthService = require("./app/auth/auth_service");
const Config = require("./app/config");

const app = express();

app.use(json());

app.use("/", AuthController);

// THIS ENDPOINT RETURNS EVERY USER ON "users" table
app.get("/demo", verifyToken, async (req, res) => {
  if (await AuthService.verifyUser(req.token)) {
    res.send("you are signed");
  } else {
    res.send("forbidden")
  }
});

app.listen(Config.PORT, () => {
  console.log("listening on: " + Config.PORT)
})

