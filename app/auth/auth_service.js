const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const Config = require("../config");

const User = require("./models/user");
const authdb = require("../db");
const UserResponse = require("./models/user_response");

module.exports = class AuthService {


  static async getUser(user) {
    if (user) {
      const authUser = await authdb.fetchOne({ email: user.email });
      return new User(authUser);
    }
  }



  static async verifyUser(token) {

    try {
      const { email } = jwt.verify(token, Config.SECRET_KEY);

      const authUser = await this.getUser({ email });

      return email === authUser.email;
    }
    catch (e) {
      return false;
    }
  };


  /**
   * Validate if user exist on database
   *@param {User} user - user model
   *@returns {Promise<boolean>}
  */
  static async userExist(user) {
    const data = await authdb.fetchOne({ email: user.email });

    return data !== undefined;
  }


  /**
   * Push new user to database
   *@param {User} user - user model
   *@returns {Promise<UserResponse>}
  */
  static async signup(payload) {

    const hashed = await this.hashPassword(payload.password);
    const user = new User({ ...payload, ...{ password: hashed } });

    await authdb.insert(user);

    return new UserResponse(user);
  }

  /**
   * Generates acces token
   *@param {User} user - user model
   *@returns {Promise<string>}
  */
  static async signin(user) {

    const authUser = await this.getUser(user);

    return jwt.sign(JSON.stringify(new UserResponse(authUser)), Config.SECRET_KEY);
  }

  static async verifyPassword(user) {
    const authUser = await this.getUser(user);
    return await argon2.verify(authUser.password, user.password)
  }


  /**
   * Hashing password generator
   *@param {string} password - new user password
   *@returns {Promise<string> | Error}
  */
  static async hashPassword(password) {
    try {
      return await argon2.hash(password);
    } catch (error) {
      throw new Error("cannot hash password");
    }
  }
};
