const express = require("express");
const { createRestaurant } = require("../controller/restaurantController");
const { isAuth, authorizedRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/").post(isAuth, authorizedRoles("owner"), createRestaurant);
module.exports = router;
