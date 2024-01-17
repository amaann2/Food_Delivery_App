const express = require("express");
const { isAuth, authorizedRoles } = require("../middleware/auth");
const {
  createMenu,
  getAllMenu,
  getSingleMenu,
  updateMyMenu,
  deleteMyMenu,
  getRestaurantMenu,
  getMenuByCategory,
} = require("../controller/menuController");
const router = express.Router();

router
  .route("/")
  .get(getAllMenu)
  .post(isAuth, authorizedRoles("owner"), createMenu);

router
  .route("/:id")
  .get(getSingleMenu)
  .patch(isAuth, authorizedRoles("owner"), updateMyMenu)
  .delete(isAuth, authorizedRoles("owner"), deleteMyMenu);

router.get("/restaurant/:restaurantId", getRestaurantMenu);
router.get("/category/:categoryId", getMenuByCategory);

module.exports = router;
