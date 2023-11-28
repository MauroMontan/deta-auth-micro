/*
  All attributes defined in this class will be stored in your users database

*/

module.exports = class User {
  constructor(payload) {
    this.email = payload.email;
    this.password = payload.password;
  }
};
