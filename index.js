// install express with `npm install express` 
const express = require('express');
const { json } = require("express");
const verifyToken = require("./app/middleware/headers");
const Auth = require("./app/auth/auth_router");
const db = require("./app/db");
const authUser = require("./app/auth/authUser");

const app = express();

app.use(json());

app.get('/', (_, res) => res.json({
    "author": "here goes your name",
    "version": "here goes your version",
    "description": "here goes your aweseome description",
}));

app.use("/auth", Auth);

// this is an example of authentication usage:
// THIS ENDPOINT RETURNS EVERY USER ON "users" table
app.get("/users", verifyToken, async (req, res) => {
    const users = await db.table("users").fetch({});
    if (await authUser(req.token)) {
        res.json(users);
    }

});


module.exports = app



