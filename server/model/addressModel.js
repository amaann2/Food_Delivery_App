const mongoose = require("mongoose");

const adressSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  streetAdress: {
    type: String,
    required: true,
  },
  houseNo: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
});

const Adress = mongoose.model("Adress", adressSchema);
module.exports = Adress;
