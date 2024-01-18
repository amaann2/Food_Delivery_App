const catchAsyncError = require("../middleware/catchAsyncError");
const Menu = require("../model/menuModel");
const Restaurant = require("../model/restaurantsModel");
const ApiFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const cloudinary = require("../utils/cloudinary");
exports.createMenu = catchAsyncError(async (req, res, next) => {
  const mycloud = await cloudinary.uploader.upload(req.file.path, {
    folder: "Food_delivery_app",
  });
  const imageData = {
    public_id: mycloud.public_id,
    url: mycloud.secure_url,
  };

  const restaurant = await Restaurant.findOne({ owner: req.user._id });
  if (!restaurant) {
    return next(new AppError("Restaurant not found or unauthorized", 404));
  }

  const newMenu = await Menu.create({
    ...req.body,
    image: imageData,
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

  const menu = await Menu.findByIdAndUpdate(req.params.id, updateFields, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
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
