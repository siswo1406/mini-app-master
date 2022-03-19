const db = require("./db");

async function up(db) {
  await db.schema
    .createTable("admin", function (table) {
      table.string("email").primary();
      table.string("nama");
      table.string("password");
      table.string("token");
    })
    .then(function () {
      process.exit();
    });
}

async function down(db) {
  await db.schema.dropTableIfExists("admin");
}

(async function () {
  await down(db);
  await up(db);
})();
