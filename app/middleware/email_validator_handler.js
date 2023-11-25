const Validators = require("../validators/validator");
const ExceptionMapper = require("../Exceptions/exceptions");
const AuthResponse = require("../auth/models/auth_response_model");
const AuthService = require("../auth/auth_service")


const emailValidatorHandler = async (req, res, next) => {


  const user = new AuthResponse(req.body);

  if (!Validators.isEmail(user.email)) {
    res.status(400)
      .json(ExceptionMapper
        .BadRequest(` The '${user.email}' is not a valid email.`));
  } else {

    if (await AuthService.userExist(user)) {
      res.status(409)
        .json(ExceptionMapper
          .UserAlreadyExist(user.email));
    }
    else {
      next();
    }

  }
};

module.exports = emailValidatorHandler;
