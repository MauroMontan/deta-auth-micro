const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const Config = require("../config");

const db = require("../db");
const Auth = require("./models/auth_model");
const AuthResponse = require("./models/auth_response_model");
module.exports = class AuthService {


  static async getUser(user) {
    if (user) {
      const authUser = await db.table("users").fetch({ email: user.email });
      return new Auth(authUser.items[0]);
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


  static async userExist(user) {
    const data = await db.table("users").fetch({ email: user.email });
    return data.items[0] !== undefined;
  }

  static async signup(payload) {

    const hashed = await AuthService.hashPassword(payload.password);
    const user = new Auth({ ...payload, ...{ password: hashed } });

    const newUser = await db.table("users").insert(user);
    return new AuthResponse(newUser);
  }

  static async signin(user) {

    const authUser = await this.getUser(user);

    return jwt.sign(JSON.stringify(new AuthResponse(authUser)), Config.SECRET_KEY);
  }

  static async verifyPassword(user) {

    const authUser = await this.getUser(user);

    return await argon2.verify(authUser.password, user.password)

  }

  static async hashPassword(password) {
    try {
      return await argon2.hash(password);
    } catch (error) {
      throw new Error("cannot hash password");
    }
  }
};
