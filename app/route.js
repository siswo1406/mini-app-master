const { Router } = require("express");
const router = Router();

const authController = require("./controllers/auth");
const dashController = require("./controllers/dash");

const authMiddleware = require("./middllewares/auth");

router.get("/", authController.login);
router.post("/attempt", authController.attempt);
router.get("/logout", authController.logout);
router.get("/register", authController.register);
router.post("/register", authController.store);

router.get("/admin", authMiddleware.admin, dashController.home);

module.exports = router;