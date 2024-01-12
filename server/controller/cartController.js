const catchAsyncError = require("../middleware/catchAsyncError");
const Cart = require("../model/cartModel");
const Menu = require("../model/menuModel");
const AppError = require("../utils/appError");

exports.addMenuToCart = catchAsyncError(async (req, res, next) => {
  const userId = req.user._id;
  const menuId = req.params.menuId;

  //Todo : First check that the menu is there or not
  const menu = await Menu.findById(menuId);
  if (!menu) {
    return next(new AppError("Menu not found", 404));
  }

  //Todo : check the user cart
  const cart = await Cart.findOne({ user: userId });

  // todo : create  a cart if no cart is found
  if (!cart) {
    const newCart = new Cart({
      user: userId,
      menus: [],
      totalPrice: 0,
    });
    await newCart.save();
  } else {
    //Todo:  check if menu is already present in the cart or not
    const index = cart.menus.findIndex(
      (menu) => menu.menu.toString() === menuId
    );

    //todo: if the menu is already present then,
    if (index !== -1) {
      cart.menus[index].quantity += req.body.quantity;

      //todo: if the menu is not present then,
    } else {
      cart.menus.push({ menu: menuId, quantity: req.body.quantity });
    }
  }
  await cart.save();
  res.status(200).json({
    status: "Success",
    message: "Item Added to cart successfully",
    cart,
  });
});

exports.removeMenuFromCart = catchAsyncError(async (req, res, next) => {
  const cart = await Cart.findOne({ user: req.user._id });

  if (cart.menus.length === 0) {
    return next(new AppError("There is not item in cart", 404));
  }
  const index = cart.menus.findIndex(
    (menu) => menu.menu.toString() === req.params.menuId
  );
  if (index === -1) {
    return next(new AppError("Menus Not found in cart", 404));
  }

  cart.menus.splice(index, 1);
  await cart.save();

  res.status(200).json({
    status: "Success",
    message: "Menu remove from  cart",
  });
});

exports.updateQuantity = catchAsyncError(async (req, res, next) => {
  const quantity = req.body.quantity;
  const menuId = req.body.menuId;
  console.log(menuId);
  const cart = await Cart.findOne({ user: req.user._id });
  if (!cart) {
    return next(new AppError("cart not found", 404));
  }
  const index = cart.menus.findIndex((menu) => menu.menu.toString() === menuId);

  if (index === -1) {
    return next(new AppError("Menu Not found in cart", 404));
  }

  cart.menus[index].quantity = quantity;
  await cart.save();

  res.status(200).json({
    status: "Success",
    message: "Qunatity update successfully",
  });
});

exports.getMyCart = catchAsyncError(async (req, res, next) => {
  const userCart = await Cart.findOne({ user: req.user.id }).populate(
    "menus.menu"
  );
  res.status(200).json({
    status: "Sucess",
    item: userCart.menus.length,
    userCart,
  });
});

exports.clearMyCart = catchAsyncError(async (req, res, next) => {
  const userCart = await Cart.findOne({ user: req.user.id }).populate(
    "menus.menu"
  );
  if (!userCart) {
    return next(new AppError("cart not found", 404));
  }
  if (userCart.menus.length === 0) {
    return next(new AppError("There is not item in cart", 404));
  }
  userCart.menus = [];
  userCart.totalPrice = 0;

  await userCart.save();
  res.status(200).json({
    status: "Success",
    message: "Cart cleared",
  });
});
