const jwt = require("jsonwebtoken");
const Config = require("../config");
const AuthService = require("./auth_service");

const authUser = async (token) => {

    const currentUser = jwt.verify(token, Config.SECRET_KEY);
    const authUser = await AuthService.currentUser(currentUser);

    return currentUser.email === authUser.email ? true : false;

}

module.exports = authUser;
