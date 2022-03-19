const db = require("../../database/db");
const randomstring = require("randomstring");

exports.login = function (req, res) {
  return res.render("auth/login");
};

exports.attempt = async function (req, res) {
  const { email, password } = req.body;

  var user = await db
    .table("admin")
    .where("email", "=", email)
    .where("password", "=", password)
    .first();

  if (user) {
    var token = randomstring.generate();
    await db.table("admin").where("email", "=", email).update({ token: token });
    res.cookie("token", token);

    return res.redirect("/admin");
  } else {
    return res.redirect("/");
  }
};

exports.logout = function (req, res) {
  res.clearCookie("token");
  return res.redirect("/");
};

exports.register = function (req, res) {
  return res.render("auth/register");
};

exports.store = async function (req, res) {
  await db.table("admin").insert(req.body);
  return res.redirect("/");
};
