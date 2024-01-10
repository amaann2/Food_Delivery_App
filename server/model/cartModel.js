const mongoose = require("mongoose");
const cartSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "A cart must belong to user"],
  },
  menus: [
    {
      menu: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Menu",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],
  totalPrice: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// cartSchema.pre(/^find/, function (next) {
//   this.populate({ path: "menus.menu" });
//   next();
// });
const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
