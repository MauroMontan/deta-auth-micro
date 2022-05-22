const AuthService = require("./auth_service");
const User = require("./auth_model");


module.exports = class AuthController {
    static async signup(payload) {
        const user = new User(payload);
        return await AuthService.signup(user);
    }

}
