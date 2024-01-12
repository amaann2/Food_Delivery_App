const catchAsyncError = require("../middleware/catchAsyncError");
const Category = require("../model/menuCategoryModel");
const AppError = require("../utils/appError");

exports.getAllCategory = catchAsyncError(async (req, res, next) => {
  const categories = await Category.find();
  res.status(200).json({
    status: "Success",
    results: categories.length,
    categories,
  });
});
exports.createCategory = catchAsyncError(async (req, res, next) => {
  const category = await Category.create(req.body);
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
  const updateCategory = await Category.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
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
  await Category.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    data: null,
  });
});
