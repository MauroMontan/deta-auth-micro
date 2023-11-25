module.exports = class Validators {

  static isEmail(email = "") {
    const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm
    return email.match(emailRegex);
  }

  static isValidPassword(rawPassword = "") {
    return rawPassword !== "";
  }
}
