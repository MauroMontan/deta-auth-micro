// install express with `npm install express` 
const express = require('express');
const { json } = require("express");
const Auth = require("./app/auth/auth_router");


const app = express();

app.use(json());

app.get('/', (_, res) => res.send('Hello World!'))

app.use("/auth", Auth);

// export 'app'
module.exports = app


