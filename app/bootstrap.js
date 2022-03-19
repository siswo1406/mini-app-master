const express = require("express");
const { engine } = require("express-handlebars");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "./app/views");

module.exports = app;
