const catchAsyncError = require("../middleware/catchAsyncError");
const Cart = require("../model/cartModel");
const Menu = require("../model/menuModel");

exports.addMenuToCart = catchAsyncError(async (req, res, next) => {
  const menuId = req.params.menuId;
  const userId = req.user.id;
  const quantity = req.body.quantity;

  const cart = await Cart.findOne({ user: userId });

  if (!cart) {
    const newCart = new Cart({
      user: userId,
      menus: [],
      totalPrice: 0,
    });
    await newCart.save();
  } else {
    const index = cart.menus.findIndex(
      (menu) => menu.menu.toString() == menuId
    );
    const menu = await Menu.findById(menuId);

    if (index !== -1) {
      console.log("item already there");
    } else {
      console.log("callingg....");
      cart.menus.push({ menu: menuId, quantity: quantity });
    }
    res.status(200).json({
      status: "Success",
      message: "Item Added to cart successfully",
      cart,
    });
  }
});

// if (index !== -1) {
//   if (menu.restaurant.toString() === cart.menus.menu.restaurant) {
//     cart.menus[index].quantity += quantity;
//   } else {
//     cart.menus = [];
//     cart.menus.push({ menu: menuId, quantity: quantity });
//   }
// } else {
//   cart.menus.push({ menu: menuId, quantity: quantity });
// }
// await cart.save();

// res.status(200).json({
//   status: "Success",
//   message: "Item Added to cart successfully",
//   cart,
// });
