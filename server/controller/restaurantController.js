const catchAsyncError = require("../middleware/catchAsyncError");
const Restaurant = require("../model/restaurantsModel");
const AppError = require("../utils/appError");

exports.createRestaurant = catchAsyncError(async (req, res, next) => {
  const existingRestaurant = await Restaurant.findOne({ owner: req.user._id });
  if (existingRestaurant) {
    return next(new AppError("Your Restaurant is already registered", 400));
  }
  const newRestaurant = await Restaurant.create({
    owner: req.user._id,
    ...req.body,
  });
  res.status(200).json({
    status: "Success",
    restaurant: newRestaurant,
  });
});
