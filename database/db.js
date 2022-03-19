const knex = require("knex");

const config = {
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: "./database/database.sqlite",
  },
};

const db = knex(config);

module.exports = db;
