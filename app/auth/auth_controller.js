const AuthService = require("./auth_service");
const User = require("./auth_model");


module.exports = class AuthController {
    static async signup(payload) {
        const hashed = await AuthService.hashPassword(payload.password);
        const user = new User({ ...payload, ...{ password: hashed } });
        return await AuthService.signup(user);
    }

    static async signin(payload) {
        const user = new User(payload);
        return await AuthService.signin(user);
    }

}
