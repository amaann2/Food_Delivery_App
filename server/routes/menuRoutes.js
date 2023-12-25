const express = require("express");
const { isAuth, authorizedRoles } = require("../middleware/auth");
const { createMenu } = require("../controller/menuController");
const router = express.Router();

router.post("/", isAuth, authorizedRoles("owner"), createMenu);
module.exports = router;
