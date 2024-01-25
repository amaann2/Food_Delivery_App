const express = require("express");
const {
  getAllCategory,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("../controller/categoryController");
const { isAuth, authorizedRoles } = require("../middleware/auth");
const upload = require("../utils/multer");
const router = express.Router();

router
  .route("/")
  .get(getAllCategory)
  .post(
    isAuth,
    authorizedRoles("admin"),
    upload.single("image"),
    createCategory
  );
router
  .route("/:id")
  .get(getCategory)
  .patch(
    isAuth,
    authorizedRoles("admin"),
    upload.single("image"),
    updateCategory
  )
  .delete(isAuth, authorizedRoles("admin"), deleteCategory);
module.exports = router;
