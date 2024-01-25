const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
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
  image: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  tags: {
    type: String,
    enum: [
      "vegetarian",
      "non-vegetarian",
      "Vegan",
      "Spicy",
      "Low-Calorie",
      "Gluten-Free",
      "Organic",
      "Chef's Special",
      "Dessert",
      "Beverages",
      "Breakfast",
    ],
  },
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
