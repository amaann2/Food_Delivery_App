const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  category: String,
  price: {
    type: Number,
    required: true,
    validate: {
      validator: function (value) {
        return value >= 0;
      },
      message: "Price must be a non-negative value",
    },
  },
  image: String,
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;
