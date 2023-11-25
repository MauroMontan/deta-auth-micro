const ExceptionMapper = require("../Exceptions/exceptions");

const AuthService = require("../auth/auth_service");
const Auth = require("../auth/models/auth_model");
const Validators = require("../validators/validator");


const passwordValidatorHandler = async (req, res, next) => {
  const user = new Auth(req.body);


  if (!Validators.isValidPassword(user.password)) {
    res.status(ExceptionMapper.InvalidPassword.error)
      .json(ExceptionMapper.InvalidPassword);
  } else {
    next();
  }

};

module.exports = passwordValidatorHandler;
