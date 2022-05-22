
const db = require("../db");

class AuthService {
    static async signup(user) {
        const newUser = await db.table("users").insert(user);
        return newUser;
    }
}

