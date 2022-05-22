


module.exports = class AuthModel {
    constructor(payload) {
        this.email = payload.email;
        this.password = payload.password;
    }

}
