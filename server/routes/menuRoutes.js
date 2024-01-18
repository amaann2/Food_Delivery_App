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
const upload = require("../utils/multer");
const router = express.Router();

router
  .route("/")
  .get(getAllMenu)
  .post(isAuth, authorizedRoles("owner"), upload.single("image"), createMenu);

router
  .route("/:id")
  .get(getSingleMenu)
  .patch(isAuth, authorizedRoles("owner"), upload.single("image"), updateMyMenu)
  .delete(isAuth, authorizedRoles("owner"), deleteMyMenu);

router.get("/restaurant/:restaurantId", getRestaurantMenu);
router.get("/category/:categoryId", getMenuByCategory);

module.exports = router;
