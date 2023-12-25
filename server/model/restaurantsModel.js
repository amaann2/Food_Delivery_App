const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
  },
  contact: {
    phone: String,
    email: String,
  },
  workingHours: {
    open: String,
    close: String,
  },
  cuisines: [String],
  deliveryTime: {
    min: Number,
    max: Number,
  },
  menu: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Menu",
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
