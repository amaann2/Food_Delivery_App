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

exports.getAllRestaurants = catchAsyncError(async (req, res, next) => {
  const restaurants = await Restaurant.find();
  res.status(200).json({
    status: "Success",
    results: restaurants.length,
    restaurants,
  });
});

exports.getRestaurant = catchAsyncError(async (req, res, next) => {
  const doc = await Restaurant.findById(req.params.id);
  if (!doc) {
    return next(new AppError("No document found with that ID", 404));
  }
  res.status(200).json({
    status: "Success",
    doc,
  });
});

exports.updateRestaurant = catchAsyncError(async (req, res, next) => {
  const doc = await Restaurant.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!doc) {
    return next(new AppError("No document found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    doc,
  });
});

exports.deleteRestaurant = catchAsyncError(async (req, res, next) => {
  const doc = await Restaurant.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.getMyRestaurant = catchAsyncError(async (req, res, next) => {
  const restaurant = await Restaurant.findOne({ owner: req.user._id });
  if (!restaurant) {
    return next(new AppError("Add the restaurant", 204));
  }
  res.status(200).json({
    status: "Success",
    restaurant,
  });
});
