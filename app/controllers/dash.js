exports.home = function (req, res) {
  return res.render("dash/home", req.user);
};
