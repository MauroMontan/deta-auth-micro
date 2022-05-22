// install express with `npm install express` 
const express = require('express');
const { json } = require("express");
const db = require("./app/db");


const app = express();

app.use(json());

app.get('/', (_, res) => res.send('Hello World!'))

app.post('/users', (req, res) => {
    const user = db.table("users").insert({
        name: req.body.name,
        title: req.body.title,
    });

    res.json(user);

});

app.get("/users", async (_, res) => {
    const users = await db.table("users").fetch({});
    res.json(users.items);
});


// export 'app'
module.exports = app
