const catchAsyncError = require("../middleware/catchAsyncError");
const Category = require("../model/menuCategoryModel");
const AppError = require("../utils/appError");
const cloudinary = require("../utils/cloudinary");

exports.getAllCategory = catchAsyncError(async (req, res, next) => {
  const categories = await Category.find();
  res.status(200).json({
    status: "Success",
    results: categories.length,
    categories,
  });
});
exports.createCategory = catchAsyncError(async (req, res, next) => {
  const myCloud = await cloudinary.uploader.upload(req.file.path, {
    folder: "Food_delivery_app",
  });

  const imageData = {
    public_id: myCloud.public_id,
    url: myCloud.secure_url,
  };
  const category = await Category.create({
    ...req.body,
    image: imageData,
  });
  res.status(201).json({
    status: "Success",
    category,
  });
});
exports.getCategory = catchAsyncError(async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  res.status(201).json({
    status: "Success",
    category,
  });
});
exports.updateCategory = catchAsyncError(async (req, res, next) => {
  let image = {};
  if (req.file) {
    const myCloud = await cloudinary.uploader.upload(req.file.path, {
      folder: "Food_delivery_app",
    });
    image = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }
  const updateFields = { ...req.body, image: { ...image } };
  console.log(updateFields);
  const updateCategory = await Category.findByIdAndUpdate(
    req.params.id,
    updateFields,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );
  if (!updateCategory) {
    return next(new AppError("No document found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    updateCategory,
  });
});
exports.deleteCategory = catchAsyncError(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return next(new AppError("Category not found", 404));
  }
  if (category.image && category.image.public_id) {
    await cloudinary.uploader.destroy(category.image.public_id);
  }
  await Category.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    data: null,
  });
});
