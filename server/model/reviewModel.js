const mongoose = require("mongoose");
const reviewSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 1,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
});
const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
