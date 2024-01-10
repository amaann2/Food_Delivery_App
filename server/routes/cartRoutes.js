const express = require("express");
const { isAuth } = require("../middleware/auth");
const { addMenuToCart } = require("../controller/cartController");
const router = express();

router.post("/:menuId/add", isAuth, addMenuToCart);
module.exports = router;
