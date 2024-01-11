const express = require("express");
const {
  login,
  register,
  resetPassword,
  forgotPassword,
  logout,
} = require("../controller/authController");
const { isAuth, authorizedRoles } = require("../middleware/auth");
const { getAllUser } = require("../controller/userController");

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/forgotPassword", forgotPassword);
router.post("/resetPassword/:token", resetPassword);

router.get("/logout", logout);

router.route("/").get(isAuth, authorizedRoles("admin"), getAllUser);

module.exports = router;
