const { Deta } = require("deta");

const Config = require("../config");

const deta = Deta(Config.PROJECT_KEY);

class Database {
  table = (table_name) => deta.Base(table_name);
}

const db = new Database();

module.exports = db;
