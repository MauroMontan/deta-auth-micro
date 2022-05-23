
const dotenv = require("dotenv");

dotenv.config();

class Config {

    static PORT = process.env.PORT;
    static PROJECT_KEY = process.env.PROJECT_KEY;
    static SECRET_KEY = process.env.SECRET_KEY;

}

module.exports = Config;
