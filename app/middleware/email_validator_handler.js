const Validators = require("../validators/validator");
const ExceptionMapper = require("../Exceptions/exceptions");
const UserResponse = require("../auth/models/user_response");
const AuthService = require("../auth/auth_service")


const emailValidatorHandler = async (req = new Request(), res, next) => {
  const user = new UserResponse(req.body);
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
