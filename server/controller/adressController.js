const catchAsyncError = require("../middleware/catchAsyncError");
const Adress = require("../model/addressModel");
const AppError = require("../utils/appError");

exports.createAdress = catchAsyncError(async (req, res, next) => {
  const adress = await Adress.create({
    user: req.user._id,
    ...req.body,
  });
  res.status(201).json({
    status: "Success",
    adress,
  });
});
exports.getAllAdress = catchAsyncError(async (req, res, next) => {
  const adress = await Adress.find();
  res.status(200).json({
    status: "Success",
    result: adress.length,
    adress,
  });
});
exports.getYourAdress = catchAsyncError(async (req, res, next) => {
  const adress = await Adress.find({ user: req.user._id });
  res.status(200).json({
    status: "Success",
    result: adress.length,
    adress,
  });
});

