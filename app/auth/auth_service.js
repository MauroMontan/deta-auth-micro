
const db = require("../db");

module.exports = class AuthService {
    static async signup(user) {
        const newUser = await db.table("users").insert(user);
        return newUser;
    }
}

