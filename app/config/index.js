
const dotenv = require("dotenv");

dotenv.config();

class Config {

    static PORT = process.env.PORT;
    static PROJECT_KEY = process.env.PROJECT_KEY;

}

module.exports = Config;
