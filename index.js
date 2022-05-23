// install express with `npm install express` 
const express = require('express');
const { json } = require("express");
const verifyToken = require("./app/middleware/headers");
const Auth = require("./app/auth/auth_router");
const db = require("./app/db");
const authUser = require("./app/auth/authUser");

const debug = true;
const app = express();

app.use(json());

app.get('/', (_, res) => res.send('Hello World!'))

app.use("/auth", Auth);


app.get("/users", verifyToken, async (req, res) => {
    const users = await db.table("users").fetch({});
    if (await authUser(req.token)) {
        res.json(users);
    }

});

// export 'app'

if (debug) {
    const port = 3000;
    app.listen(port, () => console.log(`listening on port ${port}`));
} else {
    module.exports = app
}



