/*
  All attributes you want send to client
*/

module.exports = class UserResponse {
  constructor(payload) {
    this.email = payload.email;
  }
};
