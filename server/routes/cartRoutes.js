const express = require("express");
const { isAuth } = require("../middleware/auth");
const {
  addMenuToCart,
  getMyCart,
  clearMyCart,
  removeMenuFromCart,
  updateQuantity,
} = require("../controller/cartController");
const router = express();

router.post("/:menuId/add", isAuth, addMenuToCart);
router.put("/:menuId/remove", isAuth, removeMenuFromCart);

router.patch("/quantity", isAuth, updateQuantity);

router.get("/my", isAuth, getMyCart);
router.get("/delete", isAuth, clearMyCart);

module.exports = router;
