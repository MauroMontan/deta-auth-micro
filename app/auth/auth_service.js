const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const Config = require("../config");
const db = require("../db");

module.exports = class AuthService {
  static async currentUser(user) {
    if (user) {
      const authUser = await db.table("users").fetch({ email: user.email });
      return authUser.items[0];
    }
  }

  static async signup(user) {
    const newUser = await db.table("users").insert(user);
    return newUser;
  }

  static async signin(user) {
    const data = await db.table("users").fetch({ email: user.email });
    const authUser = data.items[0];

    return authUser;
  }

  static async hashPassword(password) {
    try {
      return await argon2.hash(password);
    } catch (error) {
      throw new Error("cannot hash password");
    }
  }
};
