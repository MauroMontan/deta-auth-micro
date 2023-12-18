const { Deta } = require("deta");
const Config = require("../config");


class Database {

  #deta = Deta()
  #table_name

  constructor({ table_name = "users" }) {
    this.#deta = Deta(Config.PROJECT_KEY);
    this.#table_name = table_name
    console.log("database instance")
  }

  async insert(data) {
    await this.#deta.Base(this.#table_name).insert(data)
  }

  async fetch(payload) {
    return (await this.#deta.Base(this.#table_name).fetch(payload)).items
  }

  async fetchOne(payload) {
    return (await this.fetch(payload))[0]
  }
}

const authDb = new Database({ table_name: "users" });

module.exports = authDb;
