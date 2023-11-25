


module.exports = class ExceptionMapper {

  static BadRequest = (details) => ({
    error: 400,
    details
  })

  static InvalidPassword = {
    error: 406,
    details: "Password can not be empty"
  }

  static UserAlreadyExist = (email) => ({
    error: 409,
    details: ` The '${email}' already exist.`
  })

  static UserNotFound = {
    error: 404,
    details: "User not found"
  }

  static Forbidden = {
    error: 403,
    details: "Invalid Credentials"
  }


}
