const express = require("express");
const {
  createRestaurant,
  getAllRestaurants,
  getRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getMyRestaurant,
} = require("../controller/restaurantController");
const { isAuth, authorizedRoles } = require("../middleware/auth");
const router = express.Router();

router
  .route("/")
  .get(getAllRestaurants)
  .post(isAuth, authorizedRoles("owner"), createRestaurant);

router
  .route("/:id")
  .get(isAuth, authorizedRoles("owner"), getRestaurant)
  .patch(isAuth, authorizedRoles("owner"), updateRestaurant)
  .delete(isAuth, authorizedRoles("owner", "admin"), deleteRestaurant);

router.get("/myrest/mine", isAuth, authorizedRoles("owner"), getMyRestaurant);
module.exports = router;
