const express = require("express");
const {
  getAllAdress,
  createAdress,
} = require("../controller/adressController");
const { isAuth } = require("../middleware/auth");
const router = express.Router();

router.route("/").get(isAuth, getAllAdress).post(isAuth, createAdress);

module.exports = router;
