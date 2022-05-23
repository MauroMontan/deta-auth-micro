const { Router } = require("express");
const AuthController = require("./auth_controller");

const router = Router();


router.post("/signup", async (req, res) => res.json(await AuthController.signup(req.body)));

router.post("/signin", async (req, res) => res.json(await AuthController.signin(req.body)));

module.exports = router;
