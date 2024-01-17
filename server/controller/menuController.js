const catchAsyncError = require("../middleware/catchAsyncError");
const Menu = require("../model/menuModel");
const Restaurant = require("../model/restaurantsModel");
const ApiFeatures = require("../utils/apiFeatures");
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
  const feature = new ApiFeatures(Menu.find(), req.query)
    .sort()
    .search()
    .filter()
    .pagination();
  const menus = await feature.query.populate("category");
  res.status(200).json({
    status: "Success",
    result: menus.length,
    menus,
  });
});
exports.getSingleMenu = catchAsyncError(async (req, res, next) => {
  const menu = await Menu.findById(req.params.id);
  if (!menu) {
    return next(new AppError("There is no Menu with that id", 404));
  }
  res.status(200).json({
    status: "Success",
    menu,
  });
});
exports.updateMyMenu = catchAsyncError(async (req, res, next) => {
  const menu = await Menu.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidator: true,
  });
  if (!menu) {
    return next(new AppError("There is no Menu with that id", 404));
  }
  res.status(200).json({
    status: "Success",
    menu,
  });
});
exports.deleteMyMenu = catchAsyncError(async (req, res, next) => {
  const menu = await Menu.findById(req.params.id);
  if (!menu) {
    return next(new AppError("Menu not found", 404));
  }
  const restaurant = await Restaurant.findById(menu.restaurant);
  if (!restaurant) {
    return next(new AppError("Restaurant not found", 404));
  }
  restaurant.menu.pull(menu._id);
  await restaurant.save();

  await Menu.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "Success",
    data: null,
  });
});

exports.getRestaurantMenu = catchAsyncError(async (req, res, next) => {
  const restaurantId = req.params.restaurantId;
  const feature = new ApiFeatures(
    Menu.find({ restaurant: restaurantId }),
    req.query
  )
    .filter()
    .pagination()
    .search()
    .sort();

  const menuCount = await Menu.countDocuments();
  const restMenu = await feature.query.populate("category");
  res.status(200).json({
    status: "Success",
    total: menuCount,
    result: restMenu.length,
    restMenu,
  });
});

exports.getMenuByCategory = catchAsyncError(async (req, res, next) => {
  const categoryId = req.params.categoryId;

  const catMenu = await Menu.find({ category: categoryId }).populate(
    "category"
  );

  res.status(200).json({
    status: "Success",
    result: catMenu.length,
    catMenu,
  });
});
