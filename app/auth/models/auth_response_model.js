/*
  All attributes you want send to client
*/

module.exports = class AuthResponse {
  constructor(payload) {
    this.email = payload.email;
  }
};
