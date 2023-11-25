const ExceptionMapper = require("../Exceptions/exceptions");

const AuthService = require("../auth/auth_service")


const signInHandler = async (req, res, next) => {
  const user = req.body;

  if (!(await AuthService.userExist(user))) {
    res.status(404).json(ExceptionMapper.UserNotFound)
  } else {
    if (!(await AuthService.verifyPassword(user))) {
      res.status(403).json(ExceptionMapper.Forbidden);
    } else {
      next();
    }
  }
};

module.exports = signInHandler;
