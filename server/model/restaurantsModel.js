const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
  name: {
    type: Strig,
  },
  description: {
    type: String,
  },
  address: {
    type: String,
  },
  workingHour: {
    type: String,
  },
  workingDays: {
    type: String,
  },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
