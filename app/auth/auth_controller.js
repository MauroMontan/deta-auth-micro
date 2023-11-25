const { Router } = require("express");
const AuthService = require("./auth_service");
const emailValidatorHandler = require("../middleware/email_validator_handler");
const signInHandler = require("../middleware/signInHandler");
const passwordValidatorHandler = require("../middleware/password_validator_handler");

const router = Router();

router.post("/signup",
  passwordValidatorHandler, emailValidatorHandler, async (req, res) =>
  res.json(await AuthService.signup(req.body))
);

router.post("/signin",
  passwordValidatorHandler, signInHandler, async (req, res) =>
  res.json(await AuthService.signin(req.body))
);

module.exports = router;
