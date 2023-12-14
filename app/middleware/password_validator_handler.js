const ExceptionMapper = require("../Exceptions/exceptions");
const User = require("../auth/models/user");
const Validators = require("../validators/validator");


const passwordValidatorHandler = async (req, res, next) => {
  const user = new User(req.body);


  if (!Validators.isValidPassword(user.password)) {
    res.status(ExceptionMapper.InvalidPassword.error)
      .json(ExceptionMapper.InvalidPassword);
  } else {
    next();
  }

};

module.exports = passwordValidatorHandler;
