const catchAsyncError = require("../middleware/catchAsyncError");
const Menu = require("../model/menuModel");
const Restaurant = require("../model/restaurantsModel");
const AppError = require("../utils/appError");

exports.createMenu = catchAsyncError(async (req, res, next) => {
  const restaurant = await Restaurant.findOne({ owner: req.user._id });
  if (!restaurant) {
    return next(new AppError("Restaurant not found or unauthorized", 404));
  }

  const newMenu = await Menu.create({
    ...req.body,
    restaurant: restaurant._id,
  });
  restaurant.menu.push(newMenu._id);
  await restaurant.save();

  res.status(200).json({
    status: "Success",
    menu: newMenu,
  });
});

exports.getAllMenu = catchAsyncError(async (req, res, next) => {
  const menus = await Menu.find();
  res.status(200).json({
    status: "Success",
    menus,
  });
});
